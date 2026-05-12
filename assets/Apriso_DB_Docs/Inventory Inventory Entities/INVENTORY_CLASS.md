# INVENTORY_CLASS

**Database:** Operational

**Description:** Defines all possible Classes of Inventory. Classes can be added by the user for implementation specific requirements.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| FUID | NVARCHAR(36) | False |  | False |  | Unique identifier of the entity across multiple DELMIA Apriso instances. |
| ID | INT(10,0) | False |  | True |  | Unique identifier of a record (key) in a table. |
| InventoryClass | NVARCHAR(10) | False |  | False |  | For future use. |
| Name | NVARCHAR(50) | True |  | False |  | Name of the entity. |
| QAInventoryFlag | BIT | False | (0) | False |  | For future use. |
| QASampleFlag | BIT | False | (0) | False |  | For future use. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_INVENTORY_CLASS** on `ID`

## Foreign Keys (this table -> other)

- **** —  (``)

## Referenced By (other tables -> this)

- **FK_COUNT_DISPOSITION_LINE_INVENTORY_CLASS** — COUNT_DISPOSITION_LINE -> INVENTORY_CLASS (`InventoryClassID -> ID`)
- **FK_COUNT_RECORD_INVENTORY_CLASS** — COUNT_RECORD -> INVENTORY_CLASS (`InventoryClassID -> ID`)
- **FK_INBOUND_ORDER_DISTRIBUTION_INVENTORY_CLASS** — INBOUND_ORDER_DISTRIBUTION -> INVENTORY_CLASS (`InventoryClassID -> ID`)
- **FK_INVENTORY_COUNT_INVENTORY_CLASS** — INVENTORY_COUNT -> INVENTORY_CLASS (`InventoryClassID -> ID`)
- **FK_INVENTORY_INVENTORY_CLASS** — INVENTORY -> INVENTORY_CLASS (`InventoryClassID -> ID`)
- **FK_INVENTORY2_INVENTORY_CLASS** — INVENTORY2 -> INVENTORY_CLASS (`InventoryClassID -> ID`)
- **FK_MATERIAL_ORDER_CONTENT_INVENTORY_CLASS** — MATERIAL_ORDER_CONTENT -> INVENTORY_CLASS (`InventoryClassID -> ID`)
- **FK_ORDER_DETAIL_INVENTORY_CLASS** — ORDER_DETAIL -> INVENTORY_CLASS (`FromInventoryClassID -> ID`)
- **FK_ORDER_DETAIL_INVENTORY_CLASS1** — ORDER_DETAIL -> INVENTORY_CLASS (`ToInventoryClassID -> ID`)
- **FK_ORDER_SCHEDULE_INVENTORY_CLASS** — ORDER_SCHEDULE -> INVENTORY_CLASS (`InventoryClassID -> ID`)
- **FK_RECEIPT_CONTENT_INVENTORY_CLASS** — RECEIPT_CONTENT -> INVENTORY_CLASS (`InventoryClassID -> ID`)
- **FK_RECEIPT_DETAIL_INVENTORY_CLASS** — RECEIPT_DETAIL -> INVENTORY_CLASS (`InventoryClassID -> ID`)
- **FK_SOFT_INVENTORY2_ALLOCATION_INVENTORY_CLASS** — SOFT_INVENTORY2_ALLOCATION -> INVENTORY_CLASS (`InventoryClassID -> ID`)
- **FK_SPECIAL_STOCK_TYPE_INVENTORY_CLASS** — SPECIAL_STOCK_TYPE -> INVENTORY_CLASS (`InventoryClassID -> ID`)
- **FK_TRANSACTION_INVENTORY_CLASS_INVENTORY_CLASS** — TRANSACTION_INVENTORY_CLASS -> INVENTORY_CLASS (`InventoryClassID -> ID`)
- **FK_WIP_ORDER_CONTENT_INVENTORY_CLASS** — WIP_ORDER_CONTENT -> INVENTORY_CLASS (`InventoryClassID -> ID`)

## Unique Indexes

- **UK_INVENTORY_CLASS** on `FUID`

## Non-Unique Indexes

- **** on ``
