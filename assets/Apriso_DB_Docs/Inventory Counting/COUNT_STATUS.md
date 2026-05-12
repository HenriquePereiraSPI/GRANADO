# COUNT_STATUS

**Database:** Operational

**Description:** Contains a list of all possible statuses when performing an inventory coung. The count status is kept in such tables as "INVENTORY_COUNT", "INVENTORY_COUNT_CONTAINER", "INVENTORY_COUNT_SERIAL_NO", "CO

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| CountStatus | SMALLINT(5,0) | False |  | True |  | Status of the Count. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_COUNT_STATUS** on `CountStatus`

## Foreign Keys (this table -> other)

- **** —  (``)

## Referenced By (other tables -> this)

- **FK_COUNT_CONTAINER_COUNT_STATUS** — COUNT_CONTAINER -> COUNT_STATUS (`CountStatus -> CountStatus`)
- **FK_COUNT_CONTAINER_COUNT_STATUS1** — COUNT_CONTAINER -> COUNT_STATUS (`LastCountStatus -> CountStatus`)
- **FK_COUNT_DISPOSITION_COUNT_STATUS** — COUNT_DISPOSITION -> COUNT_STATUS (`CountStatus -> CountStatus`)
- **FK_COUNT_DISPOSITION_LINE_COUNT_STATUS** — COUNT_DISPOSITION_LINE -> COUNT_STATUS (`CountStatus -> CountStatus`)
- **FK_COUNT_DOCUMENT_COUNT_STATUS** — COUNT_DOCUMENT -> COUNT_STATUS (`CountStatus -> CountStatus`)
- **FK_COUNT_LOCK_COUNT_STATUS** — COUNT_LOCK -> COUNT_STATUS (`CountStatus -> CountStatus`)
- **FK_INVENTORY_COUNT_CONTAINER_COUNT_STATUS** — INVENTORY_COUNT_CONTAINER -> COUNT_STATUS (`CountStatus -> CountStatus`)
- **FK_INVENTORY_COUNT_CONTAINER_COUNT_STATUS1** — INVENTORY_COUNT_CONTAINER -> COUNT_STATUS (`LastCountStatus -> CountStatus`)
- **FK_INVENTORY_COUNT_COUNT_STATUS** — INVENTORY_COUNT -> COUNT_STATUS (`CountStatus -> CountStatus`)
- **FK_INVENTORY_COUNT_COUNT_STATUS1** — INVENTORY_COUNT -> COUNT_STATUS (`LastCountStatus -> CountStatus`)
- **FK_INVENTORY_COUNT_SERIAL_NO_COUNT_STATUS** — INVENTORY_COUNT_SERIAL_NO -> COUNT_STATUS (`CountStatus -> CountStatus`)
- **FK_INVENTORY_COUNT_SERIAL_NO_COUNT_STATUS1** — INVENTORY_COUNT_SERIAL_NO -> COUNT_STATUS (`LastCountStatus -> CountStatus`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **** on ``
