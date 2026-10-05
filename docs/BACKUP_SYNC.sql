USE [AprOp25M]
GO
/****** Object:  StoredProcedure [dbo].[GRD_SP_SYNC_JDE_ORDER]    Script Date: 05/10/2026 14:52:43 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
ALTER PROCEDURE [dbo].[GRD_SP_SYNC_JDE_ORDER]
(
@Json NVARCHAR(MAX),
@EmployeeNo NVARCHAR(500),
@EmployeeID INT
)
AS
BEGIN
    SET NOCOUNT ON;
    SET XACT_ABORT ON;

    DECLARE 
            @QtdJde         INT = 0,
			@QtdApriso      INT = 0,
            @QtdDeletados   INT = 0,
            @QtdAtualizados INT = 0,
            @QtdInseridos   INT = 0,
            @LockResult     INT,
            @Msg            NVARCHAR(2048),
			@WipOrderNo     NVARCHAR(100),
			@OrderWeighHeaderID  INT,
			@LockResource   NVARCHAR(255);


    /*--------------------------------------------------------------------------
      2) Carrega o JSON bruto (tudo como texto, para validar antes de converter)
    --------------------------------------------------------------------------*/

    CREATE TABLE #JDE
    (
        OrderNumber                  NVARCHAR(100) NULL,
        OrderStatus                  NVARCHAR(100) NULL,
        OrderStatusDescription       NVARCHAR(200) NULL,
        OrderType                    NVARCHAR(100) NULL,
        OrderTypeDescription         NVARCHAR(200) NULL,
        OrderTypeAux                 NVARCHAR(100) NULL,
        ResultProductNumber          NVARCHAR(100) NULL,
        ResultProductDescription     NVARCHAR(200) NULL,
        ResultLotNumber              NVARCHAR(100) NULL,
        OrderReference               NVARCHAR(100) NULL,
        ParentShortItemNumber        NVARCHAR(100) NULL,
        ParentItemNumber             NVARCHAR(100) NULL,
        OrderQuantity                NVARCHAR(100) NULL,
        Uom                          NVARCHAR(100) NULL,
        SubLotSize                   NVARCHAR(100) NULL,
        SubLotID                     NVARCHAR(100) NULL,
        ReleaseDate                  NVARCHAR(100) NULL,
        ExpectedStartDate            NVARCHAR(100) NULL,
        ExpectedFinishDate           NVARCHAR(100) NULL,
        Facility                     NVARCHAR(100) NULL,
        WorkCenter                   NVARCHAR(100) NULL,
        Operation                    NVARCHAR(100) NULL,
        ComponentShortItemNumber     NVARCHAR(100) NULL,
        ComponentItemNumber          NVARCHAR(100) NULL,
        ProductID                    INT NULL,
        ComponentItemDescription     NVARCHAR(200) NULL,
        ComponentLotNumber           NVARCHAR(100) NULL,
        EffectiveDate                NVARCHAR(100) NULL,
        ExpirationDate               NVARCHAR(100) NULL,
        RequiredQuantity             NVARCHAR(100) NULL,
        ComponentUom                 NVARCHAR(100) NULL,
        StockQuantity                NVARCHAR(100) NULL,
        WeighingLocationQuantity     NVARCHAR(100) NULL,
        StandardLotPackagingQuantity NVARCHAR(100) NULL,
        QuantityToPick               NVARCHAR(100) NULL,
        QuantityToWeigh              NVARCHAR(100) NULL,
		EmployeeNo					 NVARCHAR(500) NULL,
		StockQuantityUpdated		 NVARCHAR(100) NULL
    );


    INSERT INTO #JDE
    (
        OrderNumber,
        OrderStatus,
        OrderStatusDescription,
        OrderType,
        OrderTypeDescription,
        OrderTypeAux,
        ResultProductNumber,
        ResultProductDescription,
        ResultLotNumber,
        OrderReference,
        ParentShortItemNumber,
        ParentItemNumber,
        OrderQuantity,
        Uom,
        SubLotSize,
        SubLotID,
        ReleaseDate,
        ExpectedStartDate,
        ExpectedFinishDate,
        Facility,
        WorkCenter,
        Operation,
        ComponentShortItemNumber,
        ComponentItemNumber,
        ProductID,
        ComponentItemDescription,
        ComponentLotNumber,
        EffectiveDate,
        ExpirationDate,
        RequiredQuantity,
        ComponentUom,
        StockQuantity,
        WeighingLocationQuantity,
        StandardLotPackagingQuantity,
        QuantityToPick,
        QuantityToWeigh,
		EmployeeNo,
		StockQuantityUpdated
    )
    SELECT
        NULLIF(LTRIM(RTRIM(J.OrderNumber)), ''),
        NULLIF(LTRIM(RTRIM(J.OrderStatus)), ''),
        NULLIF(LTRIM(RTRIM(J.OrderStatusDescription)), ''),
        NULLIF(LTRIM(RTRIM(J.OrderType)), ''),
        NULLIF(LTRIM(RTRIM(J.OrderTypeDescription)), ''),
        NULLIF(LTRIM(RTRIM(J.OrderTypeAux)), ''),
        NULLIF(LTRIM(RTRIM(J.ResultProductNumber)), ''),
        NULLIF(LTRIM(RTRIM(J.ResultProductDescription)), ''),
        NULLIF(LTRIM(RTRIM(J.ResultLotNumber)), ''),
        NULLIF(LTRIM(RTRIM(J.OrderReference)), ''),
        NULLIF(LTRIM(RTRIM(J.ParentShortItemNumber)), ''),
        NULLIF(LTRIM(RTRIM(J.ParentItemNumber)), ''),
        NULLIF(LTRIM(RTRIM(J.OrderQuantity)), ''),
        NULLIF(LTRIM(RTRIM(J.Uom)), ''),
        NULLIF(LTRIM(RTRIM(J.SubLotSize)), ''),
        NULLIF(LTRIM(RTRIM(J.SubLotID)), ''),
        NULLIF(LTRIM(RTRIM(J.ReleaseDate)), ''),
        NULLIF(LTRIM(RTRIM(J.ExpectedStartDate)), ''),
        NULLIF(LTRIM(RTRIM(J.ExpectedFinishDate)), ''),
        NULLIF(LTRIM(RTRIM(J.Facility)), ''),
        NULLIF(LTRIM(RTRIM(J.WorkCenter)), ''),
        NULLIF(LTRIM(RTRIM(J.Operation)), ''),
        NULLIF(LTRIM(RTRIM(J.ComponentShortItemNumber)), ''),
        NULLIF(LTRIM(RTRIM(J.ComponentItemNumber)), ''),
        P.ID AS ProductID,
        NULLIF(LTRIM(RTRIM(J.ComponentItemDescription)), ''),
        NULLIF(LTRIM(RTRIM(J.ComponentLotNumber)), ''),
        NULLIF(LTRIM(RTRIM(J.EffectiveDate)), ''),
        NULLIF(LTRIM(RTRIM(J.ExpirationDate)), ''),
        NULLIF(LTRIM(RTRIM(J.RequiredQuantity)), ''),
        NULLIF(LTRIM(RTRIM(J.ComponentUom)), ''),
        NULLIF(LTRIM(RTRIM(J.StockQuantity)), ''),
        NULLIF(LTRIM(RTRIM(J.WeighingLocationQuantity)), ''),
        NULLIF(LTRIM(RTRIM(J.StandardLotPackagingQuantity)), ''),
        NULLIF(LTRIM(RTRIM(J.QuantityToPick)), ''),
        NULLIF(LTRIM(RTRIM(J.QuantityToWeigh)), ''),
		@EmployeeNo,
		NULLIF(LTRIM(RTRIM(J.StockQuantityUpdated)), '')

    FROM OPENJSON(@Json)
    WITH
    (
        OrderNumber                  NVARCHAR(100) '$.OrderNumber',
        OrderStatus                  NVARCHAR(100) '$.OrderStatus',
        OrderStatusDescription       NVARCHAR(200) '$.OrderStatusDescription',
        OrderType                    NVARCHAR(100) '$.OrderType',
        OrderTypeDescription         NVARCHAR(200) '$.OrderTypeDescription',
        OrderTypeAux                 NVARCHAR(100) '$.OrderTypeAux',
        ResultProductNumber          NVARCHAR(100) '$.ResultProductNumber',
        ResultProductDescription     NVARCHAR(200) '$.ResultProductDescription',
        ResultLotNumber              NVARCHAR(100) '$.ResultLotNumber',
        OrderReference               NVARCHAR(100) '$.OrderReference',
        ParentShortItemNumber        NVARCHAR(100) '$.ParentShortItemNumber',
        ParentItemNumber             NVARCHAR(100) '$.ParentItemNumber',
        OrderQuantity                NVARCHAR(100) '$.OrderQuantity',
        Uom                          NVARCHAR(100) '$.Uom',
        SubLotSize                   NVARCHAR(100) '$.SubLotSize',
        SubLotID                     NVARCHAR(100) '$.SubLotID',
        ReleaseDate                  NVARCHAR(100) '$.ReleaseDate',
        ExpectedStartDate            NVARCHAR(100) '$.ExpectedStartDate',
        ExpectedFinishDate           NVARCHAR(100) '$.ExpectedFinishDate',
        Facility                     NVARCHAR(100) '$.Facility',
        WorkCenter                   NVARCHAR(100) '$.WorkCenter',
        Operation                    NVARCHAR(100) '$.Operation',
        ComponentShortItemNumber     NVARCHAR(100) '$.ComponentShortItemNumber',
        ComponentItemNumber          NVARCHAR(100) '$.ComponentItemNumber',
        ComponentItemDescription     NVARCHAR(200) '$.ComponentItemDescription',
        ComponentLotNumber           NVARCHAR(100) '$.ComponentLotNumber',
        EffectiveDate                NVARCHAR(100) '$.EffectiveDate',
        ExpirationDate               NVARCHAR(100) '$.ExpirationDate',
        RequiredQuantity             NVARCHAR(100) '$.RequiredQuantity',
        ComponentUom                 NVARCHAR(100) '$.ComponentUom',
        StockQuantity                NVARCHAR(100) '$.StockQuantity',
        WeighingLocationQuantity     NVARCHAR(100) '$.WeighingLocationQuantity',
        StandardLotPackagingQuantity NVARCHAR(100) '$.StandardLotPackagingQuantity',
        QuantityToPick               NVARCHAR(100) '$.QuantityToPick',
        QuantityToWeigh              NVARCHAR(100) '$.QuantityToWeigh',
		StockQuantityUpdated         NVARCHAR(100) '$.StockQuantityUpdated'
    ) J

    LEFT JOIN
	(
		SELECT ID, SKUCode, ROW_NUMBER() OVER ( PARTITION BY SKUCode ORDER BY ID ) AS RN FROM PRODUCT
	) P 
	ON P.SKUCode = J.ComponentItemNumber AND P.RN = 1

	SET @WipOrderNo = (SELECT TOP(1)OrderNumber FROM #JDE )
	SET @QtdJde = (SELECT COUNT(*) FROM #JDE)
	SET @QtdApriso = (SELECT COUNT(*) FROM WEIGH_LINE WITH(NOLOCK) WHERE WipOrderNo = @WipOrderNo)
	SET @OrderWeighHeaderID = (SELECT TOP(1)ID FROM WEIGH_HEADER WITH(NOLOCK) WHERE WipOrderNo = @WipOrderNo)
	SET @LockResource = N'GRD_SP_SYNC_JDE_ORDER_' + ISNULL(@WipOrderNo, N'');

    BEGIN TRY
        BEGIN TRAN;

        /*----------------------------------------------------------------------
          1) IMPEDE DUAS EXECUÇÕES SIMULTÂNEAS DA PROCEDURE POR ORDEM
        ----------------------------------------------------------------------*/
        EXEC @LockResult = sp_getapplock
             @Resource	  = @LockResource,
             @LockMode    = 'Exclusive',
             @LockOwner   = 'Transaction',
             @LockTimeout = 30000;   -- 30 segundos

        IF @LockResult < 0
            THROW 50002, 'Não foi possível obter o lock: outra sincronização está em andamento.', 1;

        /*----------------------------------------------------------------------
		----------------------------------------------------------------------
		----------------------------------------------------------------------
          2) DELETE WEIGH
		----------------------------------------------------------------------
		----------------------------------------------------------------------
        ----------------------------------------------------------------------*/
        CREATE TABLE #WeighLineExcluir
        (
            ID INT NOT NULL PRIMARY KEY   -- ajustar ao tipo de WEIGH_LINE.ID
        );
 
        INSERT INTO #WeighLineExcluir (ID)
        SELECT WeighLine.ID
        FROM WEIGH_LINE WeighLine
		INNER JOIN TB_WEIGH_LINE_EXTENSION WeighLineExt ON WeighLine.ID = WeighLineExt.WeightLineID
		INNER JOIN PRODUCT P ON WeighLine.ProductID = P.ID
        WHERE NOT EXISTS (
            SELECT 1
            FROM #JDE J
            WHERE J.ComponentItemNumber = P.SKUCode
              AND J.ComponentLotNumber  = WeighLine.LotNo
			  AND J.SubLotID			= WeighLineExt.SubLotID
        )
		AND WeighLine.WipOrderNo = @WipOrderNo;
 
        -- WEIGH_LINE_DETAIL_EXTENSION
        DELETE WeighLineDetailExt
        FROM TB_WEIGH_LINE_DETAIL_EXTENSION WeighLineDetailExt
        INNER JOIN WEIGH_LINE_DETAIL D ON D.ID = WeighLineDetailExt.WeighLineDetailID
        INNER JOIN #WeighLineExcluir X ON X.ID = D.WeighLineID;
 
        -- WEIGH_LINE_DETAIL
        DELETE WeighLineDetail
        FROM WEIGH_LINE_DETAIL WeighLineDetail
        INNER JOIN #WeighLineExcluir X ON X.ID = WeighLineDetail.WeighLineID;

		-- WEIGH_LINE_EXTENSION
        DELETE WeighLineExt
        FROM TB_WEIGH_LINE_EXTENSION WeighLineExt
        INNER JOIN #WeighLineExcluir X ON X.ID = WeighLineExt.WeightLineID;
 
        -- WEIGH_LINE
        DELETE A
        FROM WEIGH_LINE A
        INNER JOIN #WeighLineExcluir X  ON X.ID = A.ID;
 
        SET @QtdDeletados = @@ROWCOUNT;

		/*----------------------------------------------------------------------
		----------------------------------------------------------------------
		----------------------------------------------------------------------
          2) DELETE WIP COMPONENTS
		----------------------------------------------------------------------
		----------------------------------------------------------------------
        ----------------------------------------------------------------------*/

		CREATE TABLE #WipComponentExcluir
        (
            ComponentID INT NOT NULL,
			WipComponentID INT NOT NULL,
			ComponentLotID INT NOT NULL
        );
 
        INSERT INTO #WipComponentExcluir (ComponentID, WipComponentID, ComponentLotID)
        SELECT Component.ID, WipComponent.ID, ComponentLot.ID FROM WIP_COMPONENT WipComponent
		INNER JOIN COMPONENT Component ON WipComponent.ComponentID = Component.ID
		INNER JOIN WIP_REQ_COMPONENT_LOT_NO ComponentLot ON WipComponent.ID = ComponentLot.WipComponentID
		INNER JOIN PRODUCT P ON ComponentLot.ProductID = P.ID
        WHERE NOT EXISTS (
            SELECT 1
            FROM #JDE J
            WHERE J.ComponentItemNumber = P.SKUCode
              AND J.ComponentLotNumber  = ComponentLot.LotNo
			  AND CAST(J.SubLotID AS int) = ComponentLot.ReferenceID
        )
		AND WipComponent.WipOrderNo = @WipOrderNo;


		DELETE A
        FROM WIP_REQ_COMPONENT_LOT_NO A
        INNER JOIN #WipComponentExcluir X ON X.ComponentLotID = A.ID;
		
		DELETE A
        FROM WIP_COMPONENT A
        INNER JOIN #WipComponentExcluir X ON X.WipComponentID = A.ID;

		DELETE A
        FROM COMPONENT A
        INNER JOIN #WipComponentExcluir X ON X.ComponentID = A.ID;
		

        /*----------------------------------------------------------------------
		----------------------------------------------------------------------
		----------------------------------------------------------------------
          3) UPDATE WEIGH
		----------------------------------------------------------------------
		----------------------------------------------------------------------
        ----------------------------------------------------------------------*/
        UPDATE WeighLine SET 
		WeighLine.RequiredQuantity = J.RequiredQuantity
        FROM WEIGH_LINE WeighLine
		INNER JOIN TB_WEIGH_LINE_EXTENSION WeighLineExt ON WeighLine.ID = WeighLineExt.WeightLineID
		INNER JOIN PRODUCT P ON WeighLine.ProductID = P.ID
        INNER JOIN #JDE J ON J.OrderNumber = WeighLine.WipOrderNo AND J.ComponentItemNumber = P.SKUCode AND J.ComponentLotNumber = WeighLine.LotNo AND J.SubLotID = WeighLineExt.SubLotID
        WHERE EXISTS (
            SELECT WeighLine.RequiredQuantity
            EXCEPT
            SELECT J.RequiredQuantity
        );

		SET @QtdAtualizados = @@ROWCOUNT;

		UPDATE WeighLineExt SET 
		WeighLineExt.QuantityToPick = J.QuantityToPick,
		WeighLineExt.QuantityToWeight = J.QuantityToWeigh
        FROM WEIGH_LINE WeighLine
		INNER JOIN TB_WEIGH_LINE_EXTENSION WeighLineExt ON WeighLine.ID = WeighLineExt.WeightLineID
		INNER JOIN PRODUCT P ON WeighLine.ProductID = P.ID
        INNER JOIN #JDE J ON J.OrderNumber = WeighLine.WipOrderNo AND J.ComponentItemNumber = P.SKUCode AND J.ComponentLotNumber = WeighLine.LotNo AND J.SubLotID = WeighLineExt.SubLotID
        WHERE EXISTS (
            SELECT WeighLineExt.QuantityToPick, WeighLineExt.QuantityToWeight
            EXCEPT
            SELECT J.QuantityToPick, J.QuantityToWeigh
        );

		UPDATE Component SET 
		Component.ReferenceQuantity = J.StockQuantityUpdated
        FROM COMPONENT Component
		INNER JOIN WIP_COMPONENT WipComponent ON Component.ID = WipComponent.ComponentID
		INNER JOIN WIP_REQ_COMPONENT_LOT_NO ComponentLot ON WipComponent.ID = ComponentLot.WipComponentID
		INNER JOIN PRODUCT P ON ComponentLot.ProductID = P.ID
        INNER JOIN #JDE J ON J.OrderNumber = WipComponent.WipOrderNo AND J.ComponentItemNumber = P.SKUCode AND J.ComponentLotNumber = ComponentLot.LotNo AND J.SubLotID = ComponentLot.ReferenceID
        WHERE EXISTS (
            SELECT Component.ReferenceQuantity
            EXCEPT
            SELECT J.StockQuantityUpdated
        );

        /*----------------------------------------------------------------------
		----------------------------------------------------------------------
		----------------------------------------------------------------------
          3) INSERT
		----------------------------------------------------------------------
		----------------------------------------------------------------------
        ----------------------------------------------------------------------*/
        DECLARE @OrderNumber NVARCHAR(100),
        @ComponentItemNumber NVARCHAR(100),
        @ComponentLotNumber NVARCHAR(100),
        @RequiredQuantity NVARCHAR(100),
        @ComponentUom NVARCHAR(100),
        @StockQuantity NVARCHAR(100),
        @EffectiveDate NVARCHAR(100),
        @ExpirationDate NVARCHAR(100),
        @Operation NVARCHAR(100),
        @SubLotID NVARCHAR(100),
        @QuantityToPick NVARCHAR(100),
        @QuantityToWeight NVARCHAR(100),
		@ComponentProductID INT,
		@ComponentEmployeeNo NVARCHAR(500);

		DECLARE @ComponentID INT,
				@WipComponentID INT,
				@WeightLineID INT;

		DECLARE @LastWeighLineSequence INT = (SELECT MAX(ISNULL(SequenceNo, 0)) FROM WEIGH_LINE) + 1


		DECLARE CurNovosItens CURSOR LOCAL FAST_FORWARD FOR

		SELECT
			J.OrderNumber,
			J.ComponentItemNumber,
			J.ComponentLotNumber,
			J.RequiredQuantity,
			J.ComponentUom,
			J.StockQuantity,
			J.EffectiveDate,
			J.ExpirationDate,
			J.Operation,
			J.SubLotID,
			J.QuantityToPick,
			J.QuantityToWeigh,
			J.ProductID,
			J.EmployeeNo
		FROM #JDE J
		WHERE NOT EXISTS
		(
			SELECT 1
			FROM WEIGH_LINE WeighLine
			INNER JOIN TB_WEIGH_LINE_EXTENSION WeighLineExt ON WeighLine.ID = WeighLineExt.WeightLineID
			INNER JOIN PRODUCT P ON WeighLine.ProductID = P.ID
			WHERE P.SKUCode = J.ComponentItemNumber
			  AND WeighLine.LotNo = J.ComponentLotNumber
			  AND WeighLineExt.SubLotID = J.SubLotID
			  AND WeighLine.WipOrderNo = @WipOrderNo
		);


		OPEN CurNovosItens;


		FETCH NEXT FROM CurNovosItens INTO
			@OrderNumber,
			@ComponentItemNumber,
			@ComponentLotNumber,
			@RequiredQuantity,
			@ComponentUom,
			@StockQuantity,
			@EffectiveDate,
			@ExpirationDate,
			@Operation,
			@SubLotID,
			@QuantityToPick,
			@QuantityToWeight,
			@ComponentProductID,
			@ComponentEmployeeNo;


		WHILE @@FETCH_STATUS = 0
		BEGIN

			------------------------------------------------------------
			-- LOT_NO
			------------------------------------------------------------

			IF NOT EXISTS ( SELECT 1 FROM LOT_NO WHERE ProductID = @ComponentProductID AND LotNo = @ComponentLotNumber )
			BEGIN
				INSERT INTO LOT_NO ( ProductID, LotNo )
				VALUES ( @ComponentProductID, @ComponentLotNumber );
			END;


			------------------------------------------------------------
			-- COMPONENT
			------------------------------------------------------------
			
			INSERT INTO COMPONENT
			(
				ProductID,
				EffectiveDate,
				DiscontinueDate,
				UsageType,
				StdScrapPercent,
				Quantity,
				ReferenceQuantity,
				UOMCode,
				CreatedBy,
				LastUpdatedBy,
				CreatedOn,
				LastUpdateOn,
				Active
			)
			VALUES
			(
				@ComponentProductID,
				@EffectiveDate,
				@ExpirationDate,
				1,
				0,
				@RequiredQuantity,
				@StockQuantity,
				@ComponentUom,
				@ComponentEmployeeNo,
				@ComponentEmployeeNo,
				GETUTCDATE(),
				GETUTCDATE(),
				1
			);

			SET @ComponentID = CAST(SCOPE_IDENTITY() AS INT);


			------------------------------------------------------------
			-- WIP_COMPONENT
			------------------------------------------------------------

			INSERT INTO WIP_COMPONENT
			(
				WipOrderNo,
				WipOrderType,
				OprSequenceNo,
				ComponentID,
				IssuedQuantity,
				ComponentUsage,
				UOMCode,
				ExternalSource,
				CreatedOn,
				LastUpdateOn,
				CreatedBy,
				LastUpdatedBy,
				Active
			)
			VALUES
			(
				@OrderNumber,
				1,
				@Operation,
				@ComponentID,
				@RequiredQuantity,
				1,
				@ComponentUom,
				1,
				GETUTCDATE(),
				GETUTCDATE(),
				@ComponentEmployeeNo,
				@ComponentEmployeeNo,
				1
			);

			SET @WipComponentID = CAST(SCOPE_IDENTITY() AS INT);


			------------------------------------------------------------
			-- WIP_REQ_COMPONENT_LOT_NO
			------------------------------------------------------------

			INSERT INTO WIP_REQ_COMPONENT_LOT_NO
			(
				WipComponentID,
				ProductID,
				LotNo,
				ReferenceID,
				CreatedOn,
				LastUpdateOn,
				CreatedBy,
				LastUpdatedBy,
				Active
			)
			VALUES
			(
				@WipComponentID,
				@ComponentProductID,
				@ComponentLotNumber,
				@SubLotID,
				GETUTCDATE(),
				GETUTCDATE(),
				@ComponentEmployeeNo,
				@ComponentEmployeeNo,
				1
			);


			------------------------------------------------------------
			--  WEIGH_LINE
			------------------------------------------------------------

			INSERT INTO WEIGH_LINE
			(
				WeighHeaderID,
				SequenceNo,
				ProductID,
				RequiredQuantity,
				UomCode,
				WeighStatus,
				WipOrderNo,
				WipOrderType,
				OprSequenceNo,
				WipComponentID,
				LotNo,
				DirectIntroduction,
				AllowMixingLot,
				AllowMixingProduct,
				AllowOverweight,
				SignatureRequired,
				UseScaleTolerance,
				ContainerRequired,
				LotRequired,
				ProductRequired,
				WarehouseLocationRequired,
				NonInventorySource,
				NonInventoryDestination,
				TrackExposure,
				CreatedOn,
				LastUpdateOn,
				CreatedBy,
				LastUpdatedBy,
				Active
			)
			VALUES
			(
				@OrderWeighHeaderID,
				@LastWeighLineSequence,
				@ComponentProductID,
				@RequiredQuantity,
				@ComponentUom,
				1,
				@OrderNumber,
				1,
				@Operation,
				@WipComponentID,
				@ComponentLotNumber,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				GETUTCDATE(),
				GETUTCDATE(),
				@ComponentEmployeeNo,
				@ComponentEmployeeNo,
				1
			);

			SET @WeightLineID = CAST(SCOPE_IDENTITY() AS INT);
			SET @LastWeighLineSequence = @LastWeighLineSequence + 1


			------------------------------------------------------------
			-- TB_WEIGH_LINE_EXTENSION
			------------------------------------------------------------
			INSERT INTO TB_WEIGH_LINE_EXTENSION
			(
				WeightLineID,
				QuantityToPick,
				QuantityToWeight,
				SubLotID
			)
			VALUES
			(
				@WeightLineID,
				@QuantityToPick,
				@QuantityToWeight,
				@SubLotID
			);


			SET @QtdInseridos = @QtdInseridos + 1;


			FETCH NEXT FROM CurNovosItens INTO
				@OrderNumber,
				@ComponentItemNumber,
				@ComponentLotNumber,
				@RequiredQuantity,
				@ComponentUom,
				@StockQuantity,
				@EffectiveDate,
				@ExpirationDate,
				@Operation,
				@SubLotID,
				@QuantityToPick,
				@QuantityToWeight,
				@ComponentProductID,
				@ComponentEmployeeNo;

		END;


		CLOSE CurNovosItens;
		DEALLOCATE CurNovosItens;

		-- LOG
		IF(@QtdDeletados > 0 OR @QtdInseridos > 0 OR @QtdAtualizados > 0)
		BEGIN

			DECLARE @RequestJSON NVARCHAR(MAX) = (
				SELECT
					@WipOrderNo     AS WipOrderNo,
					@QtdJde         AS QuantidadeItemsJDE,
					@QtdApriso      AS QuantidadeItemsApriso
				FOR JSON PATH, WITHOUT_ARRAY_WRAPPER
			);

			DECLARE @ResponseJSON NVARCHAR(MAX) = (
				SELECT
					@WipOrderNo     AS WipOrderNo,
					@QtdJde         AS QuantidadeItemsJDE,
					@QtdApriso      AS QuantidadeItemsApriso,
					@QtdDeletados   AS Deletados,
					@QtdAtualizados AS Atualizados,
					@QtdInseridos   AS Inseridos
				FOR JSON PATH, WITHOUT_ARRAY_WRAPPER
			);

			INSERT INTO TB_LOG(EntityModule, EntityName, WipOrderNo, WorkCenter, RequestJSON, ResponseJSON, Success, EmployeeID)
			VALUES ('OUTROS', 'INT_SYNC_JDE_ORDER', @WipOrderNo, NULL, @RequestJSON, @ResponseJSON, 1, @EmployeeID)
		END

        COMMIT TRAN;

        SELECT
			@WipOrderNo     AS Ordem,
            @QtdJde         AS QuantidadeItemsJDE,
			@QtdApriso		AS QuantidadeItemsApriso,
            @QtdDeletados   AS Deletados,
            @QtdAtualizados AS Atualizados,
            @QtdInseridos   AS Inseridos;
    END TRY
    BEGIN CATCH
        IF @@TRANCOUNT > 0
            ROLLBACK TRAN;

        THROW;
    END CATCH;
END;
