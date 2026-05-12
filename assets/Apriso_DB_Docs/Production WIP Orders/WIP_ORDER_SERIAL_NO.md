# WIP_ORDER_SERIAL_NO

**Database:** Operational

**Description:** This table contains links between WIP Orders and Serial Numbers.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| LotNo | NVARCHAR(40) | True |  | False | LOT_NO | The Lot Number of the linked item. |
| ProductID | INT(10,0) | False |  | True | LOT_NO | The product ID of the linked item. |
| SerialNo | NVARCHAR(40) | False |  | True | SERIAL_NO | The Serial Number of the linked item. |
| WipOrderNo | NVARCHAR(40) | False |  | True | WIP_ORDER | The parent WIP Order. |
| WipOrderType | SMALLINT(5,0) | False |  | True | WIP_ORDER | The parent WIP Order type. |

## Primary Key

- **PK_WIP_ORDER_SERIAL_NO** on `WipOrderNo, WipOrderType, SerialNo, ProductID`

## Foreign Keys (this table -> other)

- **FK_WIP_ORDER_SERIAL_NO_LOT_NO** — WIP_ORDER_SERIAL_NO -> LOT_NO (`ProductID, LotNo -> ProductID, LotNo`)
- **FK_WIP_ORDER_SERIAL_NO_SERIAL_NO** — WIP_ORDER_SERIAL_NO -> SERIAL_NO (`SerialNo, ProductID -> SerialNo, ProductID`)
- **FK_WIP_ORDER_SERIAL_NO_WIP_ORDER** — WIP_ORDER_SERIAL_NO -> WIP_ORDER (`WipOrderNo, WipOrderType -> WipOrderNo, WipOrderType`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_WIP_ORDER_SERIAL_NO_LOT_NO** on `LotNo, ProductID`
- **IF_WIP_ORDER_SERIAL_NO_SERIAL_NO** on `SerialNo, ProductID`
