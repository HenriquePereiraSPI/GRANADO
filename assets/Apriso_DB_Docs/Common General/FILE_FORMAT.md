# FILE_FORMAT

**Database:** Operational

**Description:** Stores all the valid file types that Apriso can store in the database.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| ContentType | NVARCHAR(255) | True |  | False |  | Http content type for this document format. |
| Extension | NVARCHAR(10) | True |  | False |  |  |
| Format | NVARCHAR(80) | True |  | False |  | Format name. |
| ID | INT(10,0) | False |  | True |  | Unique ID of the row. |
| TextId | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_FILE_FORMAT** on `ID`

## Foreign Keys (this table -> other)

- **** —  (``)

## Referenced By (other tables -> this)

- **FK_DOCUMENT_FILE_FORMAT** — DOCUMENT -> FILE_FORMAT (`FileFormatID -> ID`)
- **FK_FILE__FILE_FORMAT** — FILE_ -> FILE_FORMAT (`FormatID -> ID`)

## Business Keys (other -> this table)

- PB_ASSET -> FILE_FORMAT (`Format -> Format`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **** on ``
