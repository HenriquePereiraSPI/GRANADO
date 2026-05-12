# WIP_DATA_COLLECT_READING

**Database:** Operational

**Description:** Readings done for data collects during WIP execution.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| BaseNumericValue | DECIMAL(28,10) | True |  | False |  | Value from ValueInt or ValueDecimal converted to basic Uom Code. |
| Conformable | INT(10,0) | True |  | False |  | Value conforming for the Data Collect. |
| Container | NVARCHAR(40) | True |  | False | CONTAINER | Number of the Container. |
| DataType | INT(10,0) | False |  | False |  | Data type of the Data Collect: 1 - Char, 2 - Integer, 3 - Decimal, 4 - Boolean, 5 - DateTime. |
| DisplayUomCode | NVARCHAR(10) | True |  | False |  | Unit of Measure code. |
| DSDataCollectID | NVARCHAR(255) | False |  | False |  | DELMIA 3DEXPERIENCE Unique Identifier of the Data Collect that comes from the external system. |
| DSRequirementID | NVARCHAR(255) | True |  | False |  | DELMIA 3DEXPERIENCE Name of a requirement used as a template for Data Collect, specified in the external system. |
| ID | BIGINT(19,0) | False |  | True |  | Unique identifier of the record. |
| LotNo | NVARCHAR(40) | True |  | False | LOT_NO | Lot Number. |
| OprSequenceNo | NVARCHAR(20) | True |  | False | WIP_OPERATION | Sequence Number of the Operation. |
| ProductID | INT(10,0) | True |  | False | LOT_NO | Unique identifier of the Product. |
| ProgressStatus | INT(10,0) | True |  | False | PROGRESS_STATUS | The link to ProgressStatus. |
| ResourceID | INT(10,0) | True |  | False | RESOURCE_ | Unique identifier of the Resource. |
| SequenceNo | INT(10,0) | False |  | False |  | Sequence number of the Data Collect Reading. |
| SerialNo | NVARCHAR(40) | True |  | False | SERIAL_NO | Serial Number. |
| Status | SMALLINT(5,0) | True |  | False |  | Indicates if the row is valid. |
| StepSequenceNo | INT(10,0) | True |  | False | WIP_OPERATION_STEP | Step Sequence Number. |
| UnitID | INT(10,0) | True |  | False | UNIT | Unique identifier of the Unit. |
| UomCode | NVARCHAR(10) | True |  | False | UOM | Unit of Measure code. |
| ValueBool | BIT | True |  | False |  | Collected bool value. |
| ValueChar | NVARCHAR | True |  | False |  | Collected string value. |
| ValueDate | DATETIME | True |  | False |  | Collected date time value. |
| ValueDecimal | DECIMAL(28,10) | True |  | False |  | Collected decimal value. |
| ValueInt | INT(10,0) | True |  | False |  | Collected integer value. |
| WipDataCollectID | BIGINT(19,0) | False |  | False | WIP_DATA_COLLECT | Unique identifier of the WIP Data Collect. |
| WipOrderNo | NVARCHAR(40) | False |  | False | WIP_OPERATION | WIP Order Number. |
| WipOrderType | SMALLINT(5,0) | False |  | False | WIP_OPERATION | WIP Order Type. |

## Primary Key

- **PK_WIP_DATA_COLLECT_READING** on `ID`

## Foreign Keys (this table -> other)

- **FK_WIP_DATA_COLLECT_READING_CONTAINER** — WIP_DATA_COLLECT_READING -> CONTAINER (`Container -> Container`)
- **FK_WIP_DATA_COLLECT_READING_LOT_NO** — WIP_DATA_COLLECT_READING -> LOT_NO (`ProductID, LotNo -> ProductID, LotNo`)
- **FK_WIP_DATA_COLLECT_READING_PRODUCT** — WIP_DATA_COLLECT_READING -> PRODUCT (`ProductID -> ID`)
- **FK_WIP_DATA_COLLECT_READING_PROGRESS_STATUS** — WIP_DATA_COLLECT_READING -> PROGRESS_STATUS (`ProgressStatus -> ProgressStatus`)
- **FK_WIP_DATA_COLLECT_READING_RESOURCE_** — WIP_DATA_COLLECT_READING -> RESOURCE_ (`ResourceID -> ID`)
- **FK_WIP_DATA_COLLECT_READING_SERIAL_NO** — WIP_DATA_COLLECT_READING -> SERIAL_NO (`SerialNo, ProductID -> SerialNo, ProductID`)
- **FK_WIP_DATA_COLLECT_READING_UNIT** — WIP_DATA_COLLECT_READING -> UNIT (`UnitID -> ID`)
- **FK_WIP_DATA_COLLECT_READING_UOM** — WIP_DATA_COLLECT_READING -> UOM (`UomCode -> UomCode`)
- **FK_WIP_DATA_COLLECT_READING_WIP_DATA_COLLECT** — WIP_DATA_COLLECT_READING -> WIP_DATA_COLLECT (`WipDataCollectID -> ID`)
- **FK_WIP_DATA_COLLECT_READING_WIP_OPERATION** — WIP_DATA_COLLECT_READING -> WIP_OPERATION (`WipOrderNo, WipOrderType, OprSequenceNo -> WipOrderNo, WipOrderType, OprSequenceNo`)
- **FK_WIP_DATA_COLLECT_READING_WIP_OPERATION_STEP** — WIP_DATA_COLLECT_READING -> WIP_OPERATION_STEP (`WipOrderNo, WipOrderType, OprSequenceNo, StepSequenceNo -> WipOrderNo, WipOrderType, OprSequenceNo, SequenceNo`)
- **FK_WIP_DATA_COLLECT_READING_WIP_ORDER** — WIP_DATA_COLLECT_READING -> WIP_ORDER (`WipOrderNo, WipOrderType -> WipOrderNo, WipOrderType`)

## Referenced By (other tables -> this)

- **FK_QUALITY_DEFECT_WIP_DATA_COLLECT_READING** — QUALITY_DEFECT -> WIP_DATA_COLLECT_READING (`WipDataCollectReadingID -> ID`)

## Unique Indexes

- **UK_WIP_DATA_COLLECT_READING** on `WipDataCollectID, SequenceNo`

## Non-Unique Indexes

- **IF_WIP_DATA_COLLECT_READING_CONTAINER** on `Container`
- **IF_WIP_DATA_COLLECT_READING_LOT_NO** on `LotNo, ProductID`
- **IF_WIP_DATA_COLLECT_READING_PRODUCT** on `ProductID`
- **IF_WIP_DATA_COLLECT_READING_PROGRESS_STATUS** on `ProgressStatus`
- **IF_WIP_DATA_COLLECT_READING_RESOURCE_** on `ResourceID`
- **IF_WIP_DATA_COLLECT_READING_SERIAL_NO** on `SerialNo, ProductID`
- **IF_WIP_DATA_COLLECT_READING_UNIT** on `UnitID`
- **IF_WIP_DATA_COLLECT_READING_WIP_DATA_COLLECT** on `WipDataCollectID`
- **IF_WIP_DATA_COLLECT_READING_WIP_OPERATION_STEP** on `WipOrderNo, WipOrderType, OprSequenceNo, SequenceNo`
