# ORDER_HEADER_ADDRESS

**Database:** Operational

**Description:** Stores information about addresses assigned to Delivery and Transportation Orders.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| AddressID | INT(10,0) | False |  | True | ADDRESS | Link to the Address record. |
| DisplayNo | INT(10,0) | True |  | False |  | For future use. |
| OrderNo | NVARCHAR(20) | False |  | True | ORDER_HEADER | Reference to the Order Header (in addition to Order Type). |
| OrderType | SMALLINT(5,0) | False |  | True | ORDER_HEADER | Reference to the Order Type. |

## Primary Key

- **PK_INBOUND_ORDER_ADDRESS** on `OrderNo, OrderType, AddressID`

## Foreign Keys (this table -> other)

- **FK_INBOUND_ORDER_ADDRESS_ADDRESS** — ORDER_HEADER_ADDRESS -> ADDRESS (`AddressID -> ID`)
- **FK_INBOUND_ORDER_ADDRESS_ORDER_HEADER** — ORDER_HEADER_ADDRESS -> ORDER_HEADER (`OrderNo, OrderType -> OrderNo, OrderType`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_INBOUND_ORDER_ADDRESS_ADDRESS** on `AddressID`
