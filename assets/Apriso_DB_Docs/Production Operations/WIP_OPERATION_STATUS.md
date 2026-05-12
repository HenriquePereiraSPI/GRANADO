# WIP_OPERATION_STATUS

**Database:** Operational

**Description:** This table contains the list of the valid status for an operation. The list should not be modified. Status flow is New (creation), Started (as soon as a task was started for this operation), completed is the operation was completed. It can be cancelled by the suer or by the system (re explosion)

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| OperationStatus | SMALLINT(5,0) | False |  | True |  | Possible status of an operation |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_WORK_ORDER_OPERATION_STATUS** on `OperationStatus`

## Foreign Keys (this table -> other)

- **** —  (``)

## Referenced By (other tables -> this)

- **FK_ORDER_STATUS_HISTORY_FromOperationStatus** — ORDER_STATUS_HISTORY -> WIP_OPERATION_STATUS (`FromOperationStatus -> OperationStatus`)
- **FK_ORDER_STATUS_HISTORY_ToOperationStatus** — ORDER_STATUS_HISTORY -> WIP_OPERATION_STATUS (`ToOperationStatus -> OperationStatus`)
- **FK_WIP_CONTAINER_WIP_OPERATION_STATUS** — WIP_CONTAINER -> WIP_OPERATION_STATUS (`WipOperationStatus -> OperationStatus`)
- **FK_WIP_SERIAL_NO_WIP_OPERATION_STATUS** — WIP_SERIAL_NO -> WIP_OPERATION_STATUS (`WipSerialStatus -> OperationStatus`)
- **FK_WORK_ORDER_OPERATION_WORK_ORDER_OPERATION_STATUS** — WIP_OPERATION -> WIP_OPERATION_STATUS (`OperationStatus -> OperationStatus`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **** on ``
