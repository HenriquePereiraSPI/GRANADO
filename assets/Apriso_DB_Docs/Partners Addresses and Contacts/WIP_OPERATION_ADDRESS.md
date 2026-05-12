# WIP_OPERATION_ADDRESS

**Database:** Operational

**Description:** For future use.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| AddressID | INT(10,0) | False |  | True | ADDRESS | Link to the Address record |
| DisplayNo | INT(10,0) | True |  | False |  | For future use. |
| OprSequenceNo | NVARCHAR(20) | False |  | True | WIP_OPERATION | Reference to the WIP Operation (in addition to WIP Order and WIP Order type information) |
| WipOrderNo | NVARCHAR(40) | False |  | True | WIP_OPERATION | Link to the WIP Order |
| WipOrderType | SMALLINT(5,0) | False |  | True | WIP_OPERATION | Link to the WIP Order type |

## Primary Key

- **PK_WIP_ORDER_OPERATION_ADDRESSES** on `WipOrderNo, WipOrderType, OprSequenceNo, AddressID`

## Foreign Keys (this table -> other)

- **FK_WIP_ORDER_OPERATION_ADDRESS_ADDRESSES** — WIP_OPERATION_ADDRESS -> ADDRESS (`AddressID -> ID`)
- **FK_WIP_ORDER_OPERATION_ADDRESSES_WIP_ORDER_OPERATION** — WIP_OPERATION_ADDRESS -> WIP_OPERATION (`WipOrderNo, WipOrderType, OprSequenceNo -> WipOrderNo, WipOrderType, OprSequenceNo`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_WIP_ORDER_OPERATION_ADDRESS_ADDRESSES** on `AddressID`
