# INVENTORY_STATUS

**Database:** Operational

**Description:** Defines all possible statuses for an Inventory.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| InventoryStatus | SMALLINT(5,0) | False |  | True |  | Status of the Inventory (user-defined). |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_INVENTORY_STATUS** on `InventoryStatus`

## Foreign Keys (this table -> other)

- **** —  (``)

## Referenced By (other tables -> this)

- **FK_COUNT_DISPOSITION_LINE_INVENTORY_STATUS** — COUNT_DISPOSITION_LINE -> INVENTORY_STATUS (`InventoryStatus -> InventoryStatus`)
- **FK_COUNT_DOCUMENT_INVENTORY_STATUS** — COUNT_DOCUMENT -> INVENTORY_STATUS (`InventoryStatus -> InventoryStatus`)
- **FK_COUNT_LOCK_INVENTORY_STATUS** — COUNT_LOCK -> INVENTORY_STATUS (`InventoryStatus -> InventoryStatus`)
- **FK_COUNT_RECORD_INVENTORY_STATUS** — COUNT_RECORD -> INVENTORY_STATUS (`InventoryStatus -> InventoryStatus`)
- **FK_INBOUND_ORDER_DISTRIBUTION_INVENTORY_STATUS** — INBOUND_ORDER_DISTRIBUTION -> INVENTORY_STATUS (`InventoryStatus -> InventoryStatus`)
- **FK_INVENTORY_CONTAINER_INVENTORY_STATUS** — INVENTORY_CONTAINER -> INVENTORY_STATUS (`LastInventoryStatus -> InventoryStatus`)
- **FK_INVENTORY_COUNT_INVENTORY_STATUS** — INVENTORY_COUNT -> INVENTORY_STATUS (`InventoryStatus -> InventoryStatus`)
- **FK_INVENTORY_INVENTORY_STATUS** — INVENTORY -> INVENTORY_STATUS (`InventoryStatus -> InventoryStatus`)
- **FK_INVENTORY_SERIAL_NO_INVENTORY_STATUS** — INVENTORY_SERIAL_NO -> INVENTORY_STATUS (`LastInventoryStatus -> InventoryStatus`)
- **FK_INVENTORY2_INVENTORY_STATUS** — INVENTORY2 -> INVENTORY_STATUS (`InventoryStatus -> InventoryStatus`)
- **FK_MATERIAL_ORDER_CONTENT_INVENTORY_STATUS** — MATERIAL_ORDER_CONTENT -> INVENTORY_STATUS (`InventoryStatus -> InventoryStatus`)
- **FK_ORDER_DETAIL_CONTENT_INVENTORY_STATUS** — ORDER_DETAIL_CONTENT -> INVENTORY_STATUS (`InventoryStatus -> InventoryStatus`)
- **FK_ORDER_DETAIL_INVENTORY_STATUS1** — ORDER_DETAIL -> INVENTORY_STATUS (`FromInventoryStatus -> InventoryStatus`)
- **FK_ORDER_DETAIL_INVENTORY_STATUS2** — ORDER_DETAIL -> INVENTORY_STATUS (`ToInventoryStatus -> InventoryStatus`)
- **FK_ORDER_SCHEDULE_INVENTORY_STATUS** — ORDER_SCHEDULE -> INVENTORY_STATUS (`InventoryStatus -> InventoryStatus`)
- **FK_RECEIPT_CONTAINER_CONTENT_INVENTORY_STATUS** — RECEIPT_CONTENT -> INVENTORY_STATUS (`InventoryStatus -> InventoryStatus`)
- **FK_RECEIPT_DETAIL_INVENTORY_STATUS** — RECEIPT_DETAIL -> INVENTORY_STATUS (`InventoryStatus -> InventoryStatus`)
- **FK_SOFT_INVENTORY2_ALLOCATION_INVENTORY_STATUS** — SOFT_INVENTORY2_ALLOCATION -> INVENTORY_STATUS (`InventoryStatus -> InventoryStatus`)
- **FK_TRANSACTION_INVENTORY_STATUS_INVENTORY_STATUS** — TRANSACTION_INVENTORY_STATUS -> INVENTORY_STATUS (`InventoryStatus -> InventoryStatus`)
- **FK_TRANSACTION_PRODUCT_INV_TYPE_INVENTORY_STATUS** — TRANSACTION_PRODUCT_INV_TYPE -> INVENTORY_STATUS (`DestinationInventoryStatus -> InventoryStatus`)
- **FK_WIP_ORDER_CONTENT_INVENTORY_STATUS** — WIP_ORDER_CONTENT -> INVENTORY_STATUS (`InventoryStatus -> InventoryStatus`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **** on ``
