# WIP_SERIAL_NO_STATUS

**Database:** Operational

**Description:** This table stores current status of WIP with Serial No.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| ID | INT(10,0) | False |  | True |  | Unique identifier. |
| OprSequenceNo | NVARCHAR(20) | True |  | False | WIP_OPERATION_STEP | Operation sequence number. |
| ProductID | INT(10,0) | False |  | False | SERIAL_NO | The reference to the Product. |
| ProgressStatus | INT(10,0) | False |  | False | PROGRESS_STATUS | Progress Status of the Order, Operation, Step, Product, or Serial. |
| SerialNo | NVARCHAR(40) | False |  | False | SERIAL_NO | The Serial Number. |
| StepSequenceNo | INT(10,0) | True |  | False | WIP_OPERATION_STEP | Operation step sequence number. |
| WipOrderNo | NVARCHAR(40) | False |  | False | WIP_OPERATION_STEP | WIP Order number. |
| WipOrderType | SMALLINT(5,0) | False |  | False | WIP_OPERATION_STEP | WIP Order type. |

## Primary Key

- **PK_WIP_SERIAL_NO_STATUS** on `ID`

## Foreign Keys (this table -> other)

- **FK_WIP_SERIAL_NO_STATUS_PROGRESS_STATUS** — WIP_SERIAL_NO_STATUS -> PROGRESS_STATUS (`ProgressStatus -> ProgressStatus`)
- **FK_WIP_SERIAL_NO_STATUS_SERIAL_NO** — WIP_SERIAL_NO_STATUS -> SERIAL_NO (`ProductID, SerialNo -> ProductID, SerialNo`)
- **FK_WIP_SERIAL_NO_STATUS_WIP_OPERATION_STEP** — WIP_SERIAL_NO_STATUS -> WIP_OPERATION_STEP (`WipOrderNo, WipOrderType, OprSequenceNo, StepSequenceNo -> WipOrderNo, WipOrderType, OprSequenceNo, SequenceNo`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **UK_WIP_SERIAL_NO_STATUS** on `WipOrderNo, WipOrderType, OprSequenceNo, StepSequenceNo, ProductID, SerialNo`

## Non-Unique Indexes

- **IF_WIP_SERIAL_NO_STATUS_PROGRESS_STATUS** on `ProgressStatus`
- **IF_WIP_SERIAL_NO_STATUS_SERIAL_NO** on `SerialNo, ProductID`
