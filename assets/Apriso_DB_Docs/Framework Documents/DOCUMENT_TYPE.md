# DOCUMENT_TYPE

**Database:** Operational

**Description:** Not used

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| DocumentTypeCode | NVARCHAR(60) | False |  | True |  | Enumeration of the values that describe various types of commercial documents. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_DOCUMENT_TYPE** on `DocumentTypeCode`

## Foreign Keys (this table -> other)

- **** —  (``)

## Referenced By (other tables -> this)

- **FK_DOCUMENT_DOCUMENT_TYPE** — DOCUMENT -> DOCUMENT_TYPE (`DocumentTypeCode -> DocumentTypeCode`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **** on ``
