# DOCUMENT_FORMAT

**Database:** Operational

**Description:** Stores the format of the document (e.g. Word *.doc or Excel *.XLS).

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| ApplicationPath | NVARCHAR(256) | True |  | False |  | Path to the executable for the given document type. |
| DocumentFormat | SMALLINT(5,0) | False |  | True |  | Enumeration of the Document format type (e.g., *.doc, *.xls, *.pdf). |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_DOCUMENT_TYPES** on `DocumentFormat`

## Foreign Keys (this table -> other)

- **** —  (``)

## Referenced By (other tables -> this)

- **FK_DOCUMENT_DOCUMENT_FORMAT** — DOCUMENT -> DOCUMENT_FORMAT (`DocumentFormat -> DocumentFormat`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **** on ``
