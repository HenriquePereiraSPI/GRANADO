# PRODUCT_INVENTORY_TYPE

**Database:** Operational

**Description:** The "PRODUCT_INVENTORY_TYPE" table defines all possible product inventory types.
Inventory type is used to define the way a product behaved its inventory is moved or adjusted

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| ProductInventoryType | SMALLINT(5,0) | False |  | True |  | Type of product for inventory management purpose. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_PRODUCT_INVENTORY_TYPE** on `ProductInventoryType`

## Foreign Keys (this table -> other)

- **** —  (``)

## Referenced By (other tables -> this)

- **FK_INVENTORY_PRODUCT_INVENTORY_TYPE** — INVENTORY -> PRODUCT_INVENTORY_TYPE (`ProductInventoryType -> ProductInventoryType`)
- **FK_PRODUCT_INV_TYPE_ROLE_PRODUCT_INVENTORY_TYPE** — PRODUCT_INV_TYPE_ROLE -> PRODUCT_INVENTORY_TYPE (`ProductInventoryType -> ProductInventoryType`)
- **FK_PRODUCT_PRODUCT_INVENTORY_TYPE** — PRODUCT -> PRODUCT_INVENTORY_TYPE (`ProductInventoryType -> ProductInventoryType`)
- **FK_TRANSACTION_PRODUCT_INV_TYPE_PRODUCT_INVENTORY_TYPE** — TRANSACTION_PRODUCT_INV_TYPE -> PRODUCT_INVENTORY_TYPE (`ProductInventoryType -> ProductInventoryType`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **** on ``
