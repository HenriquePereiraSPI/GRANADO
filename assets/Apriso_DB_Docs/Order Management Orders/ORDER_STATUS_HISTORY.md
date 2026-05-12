# ORDER_STATUS_HISTORY

**Database:** Operational

**Description:** This table stores history of Orders and WIP Order Status changes.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| ChangeStatusDate | DATETIME | False |  | False |  | Date of Status or Progress Status change. |
| Comment_ | NVARCHAR(256) | True |  | False |  | Comment. |
| DurationSeconds | INT(10,0) | True |  | False |  | Duration between From and To calculated in seconds. |
| EffectiveDurationSeconds | INT(10,0) | True |  | False |  | Effective duration between subsequent status/progress status changes. |
| EmployeeNo | NVARCHAR(50) | True |  | False |  | Author of Status or Progress Status change. |
| EntityType | SMALLINT(5,0) | False |  | False |  | Type of the changed entity (1 - ORDER_HEADER, 2 - ORDER_DETAIL, 3 - WIP_ORDER, 4 - WIP_OPERATION). |
| FromOperationStatus | SMALLINT(5,0) | True |  | False | WIP_OPERATION_STATUS | Status of WIP Operation before change. |
| FromOrderStatus | SMALLINT(5,0) | True |  | False | ORDER_STATUS | Status of Order Header or Order Detail before change. |
| FromProgressStatusClassName | NVARCHAR(50) | True |  | False |  | Progress Status Class Name of Order Header, Order Detail, WIP Order or WIP Operation before change. |
| FromProgressStatusName | NVARCHAR(50) | True |  | False |  | Progress Status Name of Order Header, Order Detail, WIP Order or WIP Operation before change. |
| FromWipOrderStatus | SMALLINT(5,0) | True |  | False | WIP_ORDER_STATUS | Status of WIP Order before change. |
| ID | INT(10,0) | False |  | True |  | Unique ID of the row. |
| OprSequenceNo | NVARCHAR(20) | True |  | False |  | Operation Sequence Number. |
| OrderLineNo | INT(10,0) | True |  | False |  | Order Line Number. |
| OrderNo | NVARCHAR(20) | True |  | False |  | Order Number. |
| OrderType | SMALLINT(5,0) | True |  | False |  | Order Type. |
| ReasonCode | NVARCHAR(20) | True |  | False | REASON_CODE | The link to ReasonCode. |
| StepSequenceNo | INT(10,0) | True |  | False |  | Step sequence number of the WIP Operation. |
| ToOperationStatus | SMALLINT(5,0) | True |  | False | WIP_OPERATION_STATUS | Status of WIP Operation after change. |
| ToOrderStatus | SMALLINT(5,0) | True |  | False | ORDER_STATUS | Status of Order Header or Order Detail after change. |
| ToProgressStatusClassName | NVARCHAR(50) | True |  | False |  | Progress Status Class Name of Order Header, Order Detail, WIP Order or WIP Operation after change. |
| ToProgressStatusName | NVARCHAR(50) | True |  | False |  | Progress Status Name of Order Header, Order Detail, WIP Order or WIP Operation after change. |
| ToWipOrderStatus | SMALLINT(5,0) | True |  | False | WIP_ORDER_STATUS | Status of WIP Order after change. |
| UnitID | INT(10,0) | True |  | False | UNIT | Unique identifier of the Unit. |
| WipOrderNo | NVARCHAR(40) | True |  | False |  | WIP Order Number. |
| WipOrderType | SMALLINT(5,0) | True |  | False |  | WIP Order Type. |

## Primary Key

- **PK_ORDER_STATUS_HISTORY** on `ID`

## Foreign Keys (this table -> other)

- **FK_ORDER_STATUS_HISTORY_FromOperationStatus** — ORDER_STATUS_HISTORY -> WIP_OPERATION_STATUS (`FromOperationStatus -> OperationStatus`)
- **FK_ORDER_STATUS_HISTORY_FromOrderStatus** — ORDER_STATUS_HISTORY -> ORDER_STATUS (`FromOrderStatus -> OrderStatus`)
- **FK_ORDER_STATUS_HISTORY_FromWipOrderStatus** — ORDER_STATUS_HISTORY -> WIP_ORDER_STATUS (`FromWipOrderStatus -> WipOrderStatus`)
- **FK_ORDER_STATUS_HISTORY_REASON_CODE** — ORDER_STATUS_HISTORY -> REASON_CODE (`ReasonCode -> ReasonCode`)
- **FK_ORDER_STATUS_HISTORY_ToOperationStatus** — ORDER_STATUS_HISTORY -> WIP_OPERATION_STATUS (`ToOperationStatus -> OperationStatus`)
- **FK_ORDER_STATUS_HISTORY_ToOrderStatus** — ORDER_STATUS_HISTORY -> ORDER_STATUS (`ToOrderStatus -> OrderStatus`)
- **FK_ORDER_STATUS_HISTORY_ToWipOrderStatus** — ORDER_STATUS_HISTORY -> WIP_ORDER_STATUS (`ToWipOrderStatus -> WipOrderStatus`)
- **FK_ORDER_STATUS_HISTORY_UNIT** — ORDER_STATUS_HISTORY -> UNIT (`UnitID -> ID`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_ORDER_HEADER_ORDER_DETAIL** on `OrderNo, OrderType, OrderLineNo`
- **IF_ORDER_STATUS_HISTORY_FromOperationStatus** on `FromOperationStatus`
- **IF_ORDER_STATUS_HISTORY_FromOrderStatus** on `FromOrderStatus`
- **IF_ORDER_STATUS_HISTORY_FromWipOrderStatus** on `FromWipOrderStatus`
- **IF_ORDER_STATUS_HISTORY_ToOperationStatus** on `ToOperationStatus`
- **IF_ORDER_STATUS_HISTORY_ToOrderStatus** on `ToOrderStatus`
- **IF_ORDER_STATUS_HISTORY_ToWipOrderStatus** on `ToWipOrderStatus`
- **IF_ORDER_STATUS_HISTORY_UNIT** on `UnitID`
- **IF_WIP_ORDER_WIP_OPERATION** on `WipOrderNo, WipOrderType, OprSequenceNo`
