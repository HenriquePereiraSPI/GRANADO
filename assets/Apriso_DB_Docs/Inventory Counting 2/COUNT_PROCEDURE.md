# COUNT_PROCEDURE

**Database:** Operational

**Description:** This table stores the list of Count Procedures.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| ApproveDiscrDFCFUID | NVARCHAR(36) | True |  | False |  | Reference to the FUID column in the DFC table. |
| ApproveDiscrDFCRevisionFUID | NVARCHAR(36) | True |  | False |  | Reference to the FUID column in the DFC_REVISION table. |
| CountDFCFUID | NVARCHAR(36) | True |  | False |  | Reference to the FUID column in the DFC table. |
| CountDFCRevisionFUID | NVARCHAR(36) | True |  | False |  | Reference to the FUID column in the DFC_REVISION table. |
| CountDispLineSignHeadDefID | INT(10,0) | True |  | False | SIGNATURE_HEADER_DEFINITION | Signature header definition required to close the Count Disposition Line. |
| CountDispSignHeadDefID | INT(10,0) | True |  | False | SIGNATURE_HEADER_DEFINITION | Signature header definition required to close the Count Disposition. |
| CountMethod | SMALLINT(5,0) | True |  | False | COUNT_METHOD | Count method, link to COUNT_METHOD table. |
| CreateSnapshot | BIT | False | ((0)) | False |  | Indicates if the inventory snapshot is required. |
| FUID | NVARCHAR(36) | False |  | False |  | Unique identifier of the entity across multiple Apriso instances. |
| HoldMethod | SMALLINT(5,0) | True |  | False | COUNT_LOC_HOLD_METHOD | Location hold method, link to COUNT_LOC_HOLD_METHOD table. |
| HoldMethodPercentage | DECIMAL(28,10) | True |  | False |  | Discrepancy percentage (0 to 100), used when HoldMethod is 3. |
| HoldReasonCode | NVARCHAR(20) | True |  | False | REASON_CODE | Reason Code to be used when HoldMethod is defined. |
| ID | INT(10,0) | False |  | True |  | Unique ID of the row. |
| IntervalDays | INT(10,0) | True |  | False |  | Number of days. Used when CountMethod equals 2. |
| Level1Percentage | DECIMAL(28,10) | True |  | False |  | Discrepancy percentage that requires Level 1 approval (0 to 100). |
| Level1SignHeaderDefID | INT(10,0) | True |  | False | SIGNATURE_HEADER_DEFINITION | Signature header definition to be used for Level 1 approval. |
| Level2Percentage | DECIMAL(28,10) | True |  | False |  | Discrepancy percentage that requires Level 2 approval (0 to 100). |
| Level2SignHeaderDefID | INT(10,0) | True |  | False | SIGNATURE_HEADER_DEFINITION | Signature header definition to be used for Level 2 approval. |
| Level3Percentage | DECIMAL(28,10) | True |  | False |  | Discrepancy percentage that requires Level 3 approval (0 to 100). |
| Level3SignHeaderDefID | INT(10,0) | True |  | False | SIGNATURE_HEADER_DEFINITION | Signature header definition to be used for Level 3 approval. |
| LocationActivityDays | INT(10,0) | True |  | False |  | Number of days. Used when LocationSelectionMethod is 1. |
| LocationActivityType | SMALLINT(5,0) | True |  | False | COUNT_LOC_ACTIVITY_TYPE | Location activity type, link to COUNT_LOC_ACTIVITY_TYPE table. Used when LocationSelectionMethod is 1. |
| LocationContentType | SMALLINT(5,0) | True |  | False | COUNT_LOC_CONTENT_TYPE | Location content type, link to COUNT_LOC_CONTENT_TYPE table. Used when LocationSelectionMethod is 2. |
| LocationDFCFUID | NVARCHAR(36) | True |  | False |  | Reference to the FUID column in the DFC table. |
| LocationDFCRevisionFUID | NVARCHAR(36) | True |  | False |  | Reference to the FUID column in the DFC_REVISION table. |
| LocationPropertiesType | SMALLINT(5,0) | True |  | False | COUNT_LOC_PROPERTIES_TYPE | Location properties type, link to COUNT_LOC_PROPERTIES_TYPE table. Used when LocationSelectionMethod is 3. |
| LocationSelectionMethod | SMALLINT(5,0) | True |  | False | COUNT_LOC_SELECTION_METHOD | Location selection method, link to COUNT_LOC_SELECTION_METHOD table. |
| MaxNoOfLocations | INT(10,0) | True |  | False |  | Maximum number of Locations. |
| PostResultDFCFUID | NVARCHAR(36) | True |  | False |  | Reference to the FUID column in the DFC table. |
| PostResultDFCRevisionFUID | NVARCHAR(36) | True |  | False |  | Reference to the FUID column in the DFC_REVISION table. |
| ProcedureCode | NVARCHAR(40) | False |  | False |  | Unique Count Procedure code. |
| ReconcileDFCFUID | NVARCHAR(36) | True |  | False |  | Reference to the FUID column in the DFC table. |
| ReconcileDFCRevisionFUID | NVARCHAR(36) | True |  | False |  | Reference to the FUID column in the DFC_REVISION table. |
| ReconciliationRecordCount | INT(10,0) | True |  | False |  | Number of identical counts to allow automatic recount. |
| ReleaseMethod | SMALLINT(5,0) | True |  | False | COUNT_LOC_RELEASE_METHOD | Location release method, link to COUNT_LOC_RELEASE_METHOD table. |
| ReleaseMethodPercentage | DECIMAL(28,10) | True |  | False |  | Discrepancy percentage (0 to 100), used when ReleaseMethod is 3. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |
| TransactionCodeDecrease | NVARCHAR(10) | True |  | False | TRANSACTION_ | Transaction code used when invoking the DecreaseInventory BC. Link to TRANSACTION_ table. |
| TransactionCodeIncrease | NVARCHAR(10) | True |  | False | TRANSACTION_ | Transaction code used when invoking the IncreaseInventory BC. Link to TRANSACTION_ table. |
| TransactionCodeMove | NVARCHAR(10) | True |  | False | TRANSACTION_ | Transaction code used when invoking the MoveInventory BC. Link to TRANSACTION_ table. |
| UnitID | INT(10,0) | True |  | False | UNIT | Unique identifier of the Unit. |

## Primary Key

- **PK_COUNT_PROCEDURE** on `ID`

## Foreign Keys (this table -> other)

- **FK_COUNT_PROCEDURE_COUNT_METHOD** — COUNT_PROCEDURE -> COUNT_METHOD (`CountMethod -> CountMethod`)
- **FK_COUNT_PROCEDURE_LOC_ACTIVITY_TYPE** — COUNT_PROCEDURE -> COUNT_LOC_ACTIVITY_TYPE (`LocationActivityType -> LocationActivityType`)
- **FK_COUNT_PROCEDURE_LOC_CONTENT_TYPE** — COUNT_PROCEDURE -> COUNT_LOC_CONTENT_TYPE (`LocationContentType -> LocationContentType`)
- **FK_COUNT_PROCEDURE_LOC_HOLD_METHOD** — COUNT_PROCEDURE -> COUNT_LOC_HOLD_METHOD (`HoldMethod -> LocationHoldMethod`)
- **FK_COUNT_PROCEDURE_LOC_PROPERTIES_TYPE** — COUNT_PROCEDURE -> COUNT_LOC_PROPERTIES_TYPE (`LocationPropertiesType -> LocationPropertiesType`)
- **FK_COUNT_PROCEDURE_LOC_RELEASE_METHOD** — COUNT_PROCEDURE -> COUNT_LOC_RELEASE_METHOD (`ReleaseMethod -> LocationReleaseMethod`)
- **FK_COUNT_PROCEDURE_LOC_SELECTION_METHOD** — COUNT_PROCEDURE -> COUNT_LOC_SELECTION_METHOD (`LocationSelectionMethod -> LocationSelectionMethod`)
- **FK_COUNT_PROCEDURE_REASON_CODE** — COUNT_PROCEDURE -> REASON_CODE (`HoldReasonCode -> ReasonCode`)
- **FK_COUNT_PROCEDURE_SIGNATURE_HEADER_DEF_1** — COUNT_PROCEDURE -> SIGNATURE_HEADER_DEFINITION (`CountDispSignHeadDefID -> ID`)
- **FK_COUNT_PROCEDURE_SIGNATURE_HEADER_DEF_2** — COUNT_PROCEDURE -> SIGNATURE_HEADER_DEFINITION (`CountDispLineSignHeadDefID -> ID`)
- **FK_COUNT_PROCEDURE_SIGNATURE_HEADER_DEF_3** — COUNT_PROCEDURE -> SIGNATURE_HEADER_DEFINITION (`Level1SignHeaderDefID -> ID`)
- **FK_COUNT_PROCEDURE_SIGNATURE_HEADER_DEF_4** — COUNT_PROCEDURE -> SIGNATURE_HEADER_DEFINITION (`Level2SignHeaderDefID -> ID`)
- **FK_COUNT_PROCEDURE_SIGNATURE_HEADER_DEF_5** — COUNT_PROCEDURE -> SIGNATURE_HEADER_DEFINITION (`Level3SignHeaderDefID -> ID`)
- **FK_COUNT_PROCEDURE_TRAN_1** — COUNT_PROCEDURE -> TRANSACTION_ (`TransactionCodeIncrease -> TransactionCode`)
- **FK_COUNT_PROCEDURE_TRAN_2** — COUNT_PROCEDURE -> TRANSACTION_ (`TransactionCodeDecrease -> TransactionCode`)
- **FK_COUNT_PROCEDURE_TRAN_3** — COUNT_PROCEDURE -> TRANSACTION_ (`TransactionCodeMove -> TransactionCode`)
- **FK_COUNT_PROCEDURE_UNIT** — COUNT_PROCEDURE -> UNIT (`UnitID -> ID`)

## Referenced By (other tables -> this)

- **FK_COUNT_PROC_LCNF_CLASS_CP** — COUNT_PROC_LCONF_CLASS -> COUNT_PROCEDURE (`CountProcedureID -> ID`)
- **FK_COUNT_PROC_LCNF_DEPT_CP** — COUNT_PROC_LCONF_DEPT -> COUNT_PROCEDURE (`CountProcedureID -> ID`)
- **FK_COUNT_PROC_LCNF_GROUP_CP** — COUNT_PROC_LCONF_GROUP -> COUNT_PROCEDURE (`CountProcedureID -> ID`)
- **FK_COUNT_PROC_LCNF_WORKC_CP** — COUNT_PROC_LCONF_WORKC -> COUNT_PROCEDURE (`CountProcedureID -> ID`)
- **FK_COUNT_PROC_LCNF_ZONE_CP** — COUNT_PROC_LCONF_ZONE -> COUNT_PROCEDURE (`CountProcedureID -> ID`)
- **FK_COUNT_PROCEDURE_WAREHOUSE_CP** — COUNT_PROCEDURE_WAREHOUSE -> COUNT_PROCEDURE (`CountProcedureID -> ID`)

## Business Keys (this table -> other)

- COUNT_PROCEDURE -> DFC (`ApproveDiscrDFCFUID, CountDFCFUID, LocationDFCFUID, PostResultDFCFUID, ReconcileDFCFUID -> FUID`)
- COUNT_PROCEDURE -> DFC_REVISION (`ApproveDiscrDFCRevisionFUID, CountDFCRevisionFUID, LocationDFCRevisionFUID, PostResultDFCRevisionFUID, ReconcileDFCRevisionFUID -> FUID`)

## Unique Indexes

- **UK_COUNT_PROCEDURE_01** on `ProcedureCode`
- **UK_COUNT_PROCEDURE_02** on `FUID`

## Non-Unique Indexes

- **IF_BUSINESS_OBJECT_DFC_1** on `ApproveDiscrDFCFUID`
- **IF_BUSINESS_OBJECT_DFC_2** on `CountDFCFUID`
- **IF_BUSINESS_OBJECT_DFC_3** on `LocationDFCFUID`
- **IF_BUSINESS_OBJECT_DFC_4** on `PostResultDFCFUID`
- **IF_BUSINESS_OBJECT_DFC_5** on `ReconcileDFCFUID`
- **IF_COUNT_PROCEDURE_COUNT_METHOD** on `CountMethod`
- **IF_COUNT_PROCEDURE_DFC_REVISION_1** on `CountDFCRevisionFUID`
- **IF_COUNT_PROCEDURE_DFC_REVISION_2** on `ApproveDiscrDFCRevisionFUID`
- **IF_COUNT_PROCEDURE_DFC_REVISION_3** on `ReconcileDFCRevisionFUID`
- **IF_COUNT_PROCEDURE_DFC_REVISION_4** on `PostResultDFCRevisionFUID`
- **IF_COUNT_PROCEDURE_DFC_REVISION_5** on `LocationDFCRevisionFUID`
- **IF_COUNT_PROCEDURE_LOC_HOLD_METHOD** on `HoldMethod`
- **IF_COUNT_PROCEDURE_LOC_RELEASE_METHOD** on `ReleaseMethod`
- **IF_COUNT_PROCEDURE_LOC_SELECTION_METHOD** on `LocationSelectionMethod`
- **IF_COUNT_PROCEDURE_SIGNATURE_HEADER_DEF_1** on `CountDispSignHeadDefID`
- **IF_COUNT_PROCEDURE_SIGNATURE_HEADER_DEF_2** on `CountDispLineSignHeadDefID`
- **IF_COUNT_PROCEDURE_SIGNATURE_HEADER_DEF_3** on `Level1SignHeaderDefID`
- **IF_COUNT_PROCEDURE_SIGNATURE_HEADER_DEF_4** on `Level2SignHeaderDefID`
- **IF_COUNT_PROCEDURE_SIGNATURE_HEADER_DEF_5** on `Level3SignHeaderDefID`
- **IF_COUNT_PROCEDURE_TRAN_1** on `TransactionCodeIncrease`
- **IF_COUNT_PROCEDURE_TRAN_2** on `TransactionCodeDecrease`
- **IF_COUNT_PROCEDURE_TRAN_3** on `TransactionCodeMove`
- **IF_COUNT_PROCEDURE_UNIT** on `UnitID`
