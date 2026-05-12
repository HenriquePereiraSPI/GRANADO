# RESOURCE_CLASS_DOC

**Database:** Operational

**Description:** This table stores the link between a Resource Class record and a Document record.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| DocumentId | INT(10,0) | False |  | False | DOCUMENT | The referenced Document record. |
| ID | INT(10,0) | False |  | True |  | Unique ID of the row. |
| ResourceClassId | INT(10,0) | False |  | False | RESOURCE_CLASS | The referenced Resource Class record. |

## Primary Key

- **PK_RESOURCE_CLASS_DOC** on `ID`

## Foreign Keys (this table -> other)

- **FK_RESOURCE_CLASS_DOC_DOCUMENT** — RESOURCE_CLASS_DOC -> DOCUMENT (`DocumentId -> ID`)
- **FK_RESOURCE_CLASS_DOC_RESOURCE_CLASS** — RESOURCE_CLASS_DOC -> RESOURCE_CLASS (`ResourceClassId -> ID`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_RESOURCE_CLASS_DOC_DOCUMENT** on `DocumentId`
- **IF_RESOURCE_CLASS_DOC_RESOURCE_CLASS** on `ResourceClassId`
