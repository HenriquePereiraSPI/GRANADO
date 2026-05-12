# DOCUMENT_STATUS

**Database:** Operational

**Description:** This table contains the list of valid statuses for a document. The list should not be modified.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| DocumentStatus | SMALLINT(5,0) | False |  | True |  | The Document status. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_DOCUMENT_STATUS** on `DocumentStatus`

## Foreign Keys (this table -> other)

- **** —  (``)

## Referenced By (other tables -> this)

- **FK_DOCUMENT_DOCUMENT_STATUS** — DOCUMENT -> DOCUMENT_STATUS (`DocumentStatus -> DocumentStatus`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **** on ``
