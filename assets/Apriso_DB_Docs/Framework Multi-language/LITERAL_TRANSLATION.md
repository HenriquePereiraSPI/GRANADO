# LITERAL_TRANSLATION

**Database:** Solution Authoring

**Description:** Tags, prompts and messages for Apriso application software, translated into multiple languages

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| CustChecksum | INT(10,0) | True |  | False |  | Used during importing a translation when the Distinct flag is used. In this mode, the same translations are recognized by having the same checksum value. |
| Extended | NVARCHAR(2000) | True |  | False |  | Extended descriptive text (localized) |
| ID | NVARCHAR(255) | False |  | True | LITERAL | Unique identifier |
| LanguageID | INT(10,0) | False |  | True | LANGUAGE | Language and Its Attributes unique identifier |
| LargeIconURL | NVARCHAR(255) | True |  | False |  | The universal resource locator (URL) for the large icon representing the literal |
| Medium | NVARCHAR(255) | True |  | False |  | The medium-size literal (up to 80 characters) |
| MediumIconURL | NVARCHAR(255) | True |  | False |  | The universal resource locator (URL) for the medium icon representing the literal |
| Micro | NVARCHAR(1) | True |  | False |  | The micro literal (1 character) |
| OrgChecksum | INT(10,0) | True |  | False |  | For future use. |
| Short | NVARCHAR(80) | True |  | False |  | The short literal (up to 20 characters) |
| SmallIconURL | NVARCHAR(255) | True |  | False |  | The universal resource locator (URL) for the small icon representing the literal |

## Primary Key

- **PK_LITERAL_TRANSLATION** on `ID, LanguageID`

## Foreign Keys (this table -> other)

- **FK_LITERAL_TRANSLATION_LANGUAGE** — LITERAL_TRANSLATION -> LANGUAGE (`LanguageID -> ID`)
- **FK_LITERAL_TRANSLATION_LITERAL** — LITERAL_TRANSLATION -> LITERAL (`ID -> ID`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **** on ``
