# TEXT

**Database:** Solution Authoring

**Description:** Contains the various text persisted in the system. The text itself is not directly stored in this table. It can be accessed in the Text_transaltion table or in some cases, in the Text detail and then Text_Detail_translation table

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| FUID | NVARCHAR(36) | True |  | False |  | Unique identifier of the entity across multiple Apriso instances |
| ID | INT(10,0) | False |  | True |  | Unique identifier of a record (key) in a table |
| LiteralDictionaryCode | NVARCHAR(100) | True |  | False |  | Reference to the Code column in the LITERAL_DICTIONARY table. |
| LiteralID | INT(10,0) | True |  | False |  | Keeps unique number of text literal |
| Type | NVARCHAR(40) | True |  | False |  | Code describing the type of textual description |

## Primary Key

- **PK_TEXT** on `ID`

## Foreign Keys (this table -> other)

- **** —  (``)

## Referenced By (other tables -> this)

- **FK_TEXT_TRANSLATION_TEXT** — TEXT_TRANSLATION -> TEXT (`TextID -> ID`)

## Business Keys (this table -> other)

- TEXT -> LITERAL_DICTIONARY (`LiteralDictionaryCode -> Code`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_TEXT_LITERAL_DICTIONARY** on `LiteralDictionaryCode, LiteralDictionaryCode, LiteralDictionaryCode`
- **IXD_FUID** on `FUID, FUID, FUID`
- **IXD_LiteralID** on `LiteralID, LiteralID, LiteralID`
lID** on `LiteralID, LiteralID`
