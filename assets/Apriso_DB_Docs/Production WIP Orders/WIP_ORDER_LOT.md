# WIP_ORDER_LOT

**Database:** Operational

**Description:** The "WIP_ORDER_LOT" table is used to link all lot numbers associated with the wip order.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| LotNo | NVARCHAR(40) | False |  | True | LOT_NO | For future use. |
| OrderQuantity | DECIMAL(28,10) | True |  | False |  | For future use. |
| PrimaryLotNo | BIT | True | (0) | False |  | For future use. |
| ProductID | INT(10,0) | False |  | True | LOT_NO | Reference to a product (product number and product version) |
| WipOrderNo | NVARCHAR(40) | False |  | True | WIP_ORDER | Link to the WIP Order |
| WipOrderType | SMALLINT(5,0) | False |  | True | WIP_ORDER | Link to the WIP Order type |

## Primary Key

- **PK_WIP_ORDER_LOTS** on `WipOrderNo, WipOrderType, LotNo, ProductID`

## Foreign Keys (this table -> other)

- **FK_WIP_ORDER_LOTS_LOT_NO** — WIP_ORDER_LOT -> LOT_NO (`LotNo, ProductID -> LotNo, ProductID`)
- **FK_WIP_ORDER_LOTS_WIP_ORDER** — WIP_ORDER_LOT -> WIP_ORDER (`WipOrderNo, WipOrderType -> WipOrderNo, WipOrderType`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_WIP_ORDER_LOTS_LOT_NO** on `LotNo, ProductID`
- **IF_WIP_ORDER_LOTS_WIP_ORDER** on `WipOrderNo, WipOrderType, ProductID`
