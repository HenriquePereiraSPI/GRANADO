# LITERAL

**Database:** Solution Authoring

**Description:** Tags and prompts for Apriso application software

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| ID | NVARCHAR(255) | False |  | True |  | Unique identifier |
| LastPopulated | DATETIME | True |  | False |  | The last time a literal was scanned by Localization Manager. |
| LiteralDictionaryID | INT(10,0) | True |  | False | LITERAL_DICTIONARY | Reference to the LITERAL_DICTIONARY entry. |
| ProductName | NVARCHAR(255) | True |  | False |  | Product identifier or number |
| Type | NVARCHAR(255) | True |  | False |  | The type of literal |
| UIType | SMALLINT(5,0) | False | ((0)) | False |  | The type of literal (0 - Dynamic, 1 - Static). |

## Primary Key

- **PK_LITERAL** on `ID`

## Foreign Keys (this table -> other)

- **FK_LITERAL_LITERAL_DICTIONARY** — LITERAL -> LITERAL_DICTIONARY (`LiteralDictionaryID -> ID`)

## Referenced By (other tables -> this)

- **FK_LITERAL_TRANSLATION_LITERAL** — LITERAL_TRANSLATION -> LITERAL (`ID -> ID`)
- **FK_LOC_PROPERTY_LITERAL** — LOC_PROPERTY -> LITERAL (`LiteralID -> ID`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_LITERAL_LITERAL_DICTIONARY** on `LiteralDictionaryID`
