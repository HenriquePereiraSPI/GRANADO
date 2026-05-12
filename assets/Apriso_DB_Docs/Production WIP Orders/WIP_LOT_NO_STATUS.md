# WIP_LOT_NO_STATUS

**Database:** Operational

**Description:** Stores the current status of the WIP order with lot number.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| ID | INT(10,0) | False |  | True |  | Unique identifier of the record. |
| LotNo | NVARCHAR(40) | False |  | False | LOT_NO | Lot number. |
| OprSequenceNo | NVARCHAR(20) | True |  | False | WIP_OPERATION_STEP | Operation sequence number. |
| ProductID | INT(10,0) | False |  | False | LOT_NO | ID of the product. |
| ProgressStatus | INT(10,0) | False |  | False | PROGRESS_STATUS | Progress status of the order, operation or step. |
| StepSequenceNo | INT(10,0) | True |  | False | WIP_OPERATION_STEP | Step sequence number. |
| WipOrderNo | NVARCHAR(40) | False |  | False | WIP_OPERATION_STEP | WIP Order number. |
| WipOrderType | SMALLINT(5,0) | False |  | False | WIP_OPERATION_STEP | Type of the WIP Order. |

## Primary Key

- **PK_WIP_LOT_NO_STATUS** on `ID`

## Foreign Keys (this table -> other)

- **FK_WIP_LOT_NO_STATUS_LOT_NO** — WIP_LOT_NO_STATUS -> LOT_NO (`ProductID, LotNo -> ProductID, LotNo`)
- **FK_WIP_LOT_NO_STATUS_PROGRESS_STATUS** — WIP_LOT_NO_STATUS -> PROGRESS_STATUS (`ProgressStatus -> ProgressStatus`)
- **FK_WIP_LOT_NO_STATUS_WIP_OPERATION_STEP** — WIP_LOT_NO_STATUS -> WIP_OPERATION_STEP (`WipOrderNo, WipOrderType, OprSequenceNo, StepSequenceNo -> WipOrderNo, WipOrderType, OprSequenceNo, SequenceNo`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **UK_WIP_LOT_NO_STATUS** on `WipOrderNo, WipOrderType, OprSequenceNo, StepSequenceNo, ProductID, LotNo`

## Non-Unique Indexes

- **IF_WIP_LOT_NO_STATUS_LOT_NO** on `LotNo, ProductID`
- **IF_WIP_LOT_NO_STATUS_PROGRESS_STATUS** on `ProgressStatus`
