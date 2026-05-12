# LITERAL_DICTIONARY

**Database:** Solution Authoring

**Description:** This table stores reusable literals.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| Code | NVARCHAR(100) | False |  | False |  | Unique literal code. |
| Description | NVARCHAR(2000) | True |  | False |  | Description of a literal. |
| FUID | NVARCHAR(36) | False |  | False |  | Apriso object unique Identifier for LITERAL_DICTIONARY. |
| ID | INT(10,0) | False |  | True |  | Unique identifier of LITERAL_DICTIONARY. |
| TypeID | INT(10,0) | False |  | False |  | For future use. |

## Primary Key

- **PK_LITERAL_DICTIONARY** on `ID`

## Foreign Keys (this table -> other)

- **** —  (``)

## Referenced By (other tables -> this)

- **FK_LITERAL_DICTIONARY_TRANSLATION_LITERAL_DICTIONARY** — LITERAL_DICTIONARY_TRANSLATION -> LITERAL_DICTIONARY (`LiteralDictionaryID -> ID`)
- **FK_LITERAL_LITERAL_DICTIONARY** — LITERAL -> LITERAL_DICTIONARY (`LiteralDictionaryID -> ID`)

## Business Keys (other -> this table)

- TEXT -> LITERAL_DICTIONARY (`LiteralDictionaryCode -> Code`)
- TEXT_D -> LITERAL_DICTIONARY (`LiteralDictionaryCode -> Code`)

## Unique Indexes

- **UK_LITERAL_DICTIONARY_CODE** on `Code`
- **UK_LITERAL_DICTIONARY_FUID** on `FUID`

## Non-Unique Indexes

- **** on ``
