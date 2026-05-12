# WIP_ORDER_STATUS

**Database:** Operational

**Description:** This table contains the list of the valid status for an execution order. The list should not be modified. Status flow is New (creation), Started (as soon as a task was started for  at least one operation), completed is the order was completed.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| DSOrderStatus | NVARCHAR(50) | True |  | False |  | DELMIA Order Status. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |
| WipOrderStatus | SMALLINT(5,0) | False |  | True |  | WIP Order status |

## Primary Key

- **PK_WORK_ORDER_STATUS** on `WipOrderStatus`

## Foreign Keys (this table -> other)

- **** —  (``)

## Referenced By (other tables -> this)

- **FK_ORDER_STATUS_HISTORY_FromWipOrderStatus** — ORDER_STATUS_HISTORY -> WIP_ORDER_STATUS (`FromWipOrderStatus -> WipOrderStatus`)
- **FK_ORDER_STATUS_HISTORY_ToWipOrderStatus** — ORDER_STATUS_HISTORY -> WIP_ORDER_STATUS (`ToWipOrderStatus -> WipOrderStatus`)
- **FK_WORK_ORDER_WORK_ORDER_STATUS** — WIP_ORDER -> WIP_ORDER_STATUS (`WorkOrderStatus -> WipOrderStatus`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **** on ``
