# DISPOSITION_CONTENT_TYPE

**Database:** Operational

**Description:** Contains the system types of the Disposition Content available to be used when creating Disposition Content (DISPOSITION_CONTENT)

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| DispositionContentType | SMALLINT(5,0) | False |  | True |  | Unique Identifier of the Disposition Content Type |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_DISPOSITION_CONTENT_TYPE** on `DispositionContentType`

## Foreign Keys (this table -> other)

- **** —  (``)

## Referenced By (other tables -> this)

- **FK_DISPOSITION_CONTENT_DISPOSITION_CONTENT_TYPE** — DISPOSITION_CONTENT -> DISPOSITION_CONTENT_TYPE (`DispositionContentType -> DispositionContentType`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **** on ``
