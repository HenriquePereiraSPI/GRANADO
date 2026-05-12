# ORDER_DETAIL_ADDRESS

**Database:** Operational

**Description:** Store information about Addresses assigned to a delivery Order Item.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| AddressID | INT(10,0) | False |  | True | ADDRESS | Link to the Address record. |
| DisplayNo | INT(10,0) | True |  | False |  | For future use. |
| OrderLineNo | INT(10,0) | False |  | True | ORDER_DETAIL | Link to the Order Item. |
| OrderNo | NVARCHAR(20) | False |  | True | ORDER_DETAIL | Reference to the Order Header (in addition to Order Type). |
| OrderType | SMALLINT(5,0) | False |  | True | ORDER_DETAIL | Reference to the Order Type. |

## Primary Key

- **PK_INBOUND_ORDER_DETAIL_ADDRESS** on `OrderNo, OrderType, OrderLineNo, AddressID`

## Foreign Keys (this table -> other)

- **FK_INBOUND_ORDER_DETAIL_ADDRESS_ADDRESS** — ORDER_DETAIL_ADDRESS -> ADDRESS (`AddressID -> ID`)
- **FK_ORDER_DETAIL_ADDRESS_ORDER_DETAIL** — ORDER_DETAIL_ADDRESS -> ORDER_DETAIL (`OrderNo, OrderType, OrderLineNo -> OrderNo, OrderType, OrderLineNo`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_INBOUND_ORDER_DETAIL_ADDRESS_ADDRESS** on `AddressID`
