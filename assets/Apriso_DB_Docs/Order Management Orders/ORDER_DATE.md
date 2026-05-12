# ORDER_DATE

**Database:** Operational

**Description:** Contains links between various Dates and Orders. Order Details, WIP Orders, Operations, Stages or Points. This can be used to persist Dates (e.g. target, actual) and to link these Dates to any Order.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| Actual | DATETIME | True |  | False |  | Actual date of the event. |
| DateType | SMALLINT(5,0) | True |  | False | DATE_TYPE | Type of the Date. |
| ID | INT(10,0) | False |  | True |  | Unique identifier of a record (key) in a table. |
| NotAfter | DATETIME | True |  | False |  | Not after date. |
| NotBefore | DATETIME | True |  | False |  | Not before date. |
| OprSequenceNo | NVARCHAR(20) | True |  | False | WIP_OPERATION | Reference to the WIP Operation (in addition to WIP Order and WIP Order Type information). |
| OrderLineNo | INT(10,0) | True |  | False | ORDER_DETAIL | Link to the Order Item. |
| OrderNo | NVARCHAR(20) | True |  | False | ORDER_DETAIL | Reference to the Order Header (in addition to Order Type). |
| OrderType | SMALLINT(5,0) | True |  | False | ORDER_DETAIL | Reference to the Order Type. |
| ShipmentStageID | INT(10,0) | True |  | False | SHIPMENT_STAGE | Defines dates associated with a Shipment Stage. |
| ShipmentStagePointID | INT(10,0) | True |  | False | SHIPMENT_STAGE_POINT | Defines dates associated with a Shipment Stage point. |
| Target | DATETIME | True |  | False |  | Target Date. |
| WipOrderNo | NVARCHAR(40) | True |  | False | WIP_OPERATION | Link to the WIP Order. |

## Primary Key

- **PK_ORDER_DATE** on `ID`

## Foreign Keys (this table -> other)

- **FK_ORDER_DATE_DATE_TYPE** — ORDER_DATE -> DATE_TYPE (`DateType -> DateType`)
- **FK_ORDER_DATE_ORDER_DETAIL** — ORDER_DATE -> ORDER_DETAIL (`OrderNo, OrderLineNo, OrderType -> OrderNo, OrderLineNo, OrderType`)
- **FK_ORDER_DATE_ORDER_HEADER** — ORDER_DATE -> ORDER_HEADER (`OrderNo, OrderType -> OrderNo, OrderType`)
- **FK_ORDER_DATE_SHIPMENT_STAGE** — ORDER_DATE -> SHIPMENT_STAGE (`ShipmentStageID -> ID`)
- **FK_ORDER_DATE_SHIPMENT_STAGE_POINT** — ORDER_DATE -> SHIPMENT_STAGE_POINT (`ShipmentStagePointID -> ID`)
- **FK_ORDER_DATE_WIP_OPERATION** — ORDER_DATE -> WIP_OPERATION (`OrderType, WipOrderNo, OprSequenceNo -> WipOrderType, WipOrderNo, OprSequenceNo`)
- **FK_ORDER_DATE_WIP_ORDER** — ORDER_DATE -> WIP_ORDER (`OrderType, WipOrderNo -> WipOrderType, WipOrderNo`)
- **FK_ORDER_DATE_WIP_ORDER_TYPE** — ORDER_DATE -> WIP_ORDER_TYPE (`OrderType -> WipOrderType`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_ORDER_DATE_ORDER_DETAIL** on `OrderNo, OrderType, OrderLineNo`
- **IF_ORDER_DATE_SHIPMENT_STAGE** on `ShipmentStageID`
- **IF_ORDER_DATE_SHIPMENT_STAGE_POINT** on `ShipmentStagePointID`
- **IF_ORDER_DATE_WIP_OPERATION** on `WipOrderNo, OrderType, OprSequenceNo`
