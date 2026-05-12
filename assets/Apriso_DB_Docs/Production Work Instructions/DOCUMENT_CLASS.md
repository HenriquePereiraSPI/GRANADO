# DOCUMENT_CLASS

**Database:** Operational

**Description:** Document Class (user defined).

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| FUID | NVARCHAR(36) | True |  | False |  | Unique ID of the entity across multiple Apriso instances. |
| ID | INT(10,0) | False |  | True |  | Unique ID of the row. |
| Name | NVARCHAR(255) | False |  | False |  | Name of the Document Class (user-defined). |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_DOCUMENT_CLASS** on `ID`

## Foreign Keys (this table -> other)

- **** —  (``)

## Referenced By (other tables -> this)

- **FK_DOCUMENT_DOCUMENT_CLASS** — DOCUMENT -> DOCUMENT_CLASS (`DocumentClassID -> ID`)

## Unique Indexes

- **UK_DOCUMENT_CLASS** on `FUID`

## Non-Unique Indexes

- **** on ``
