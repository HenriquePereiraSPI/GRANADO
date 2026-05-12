# LANGUAGE

**Database:** Solution Authoring

**Description:** Contains various Language Codes used by users or partners.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| CharacterSet | NVARCHAR(30) | True |  | False |  | Character set of the language. |
| CodePage | INT(10,0) | True |  | False |  | Code page used by the langauge. |
| ID | INT(10,0) | False |  | True |  | Unique identifier of a record (key) in a table. |
| LanguageCode | NVARCHAR(10) | True |  | False |  | Code representing the Language. |
| LocaleCode | NVARCHAR(10) | True |  | False | LOCALE | Value that describes a locale. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_LANGUAGE_DEFINITION** on `ID`

## Foreign Keys (this table -> other)

- **FK_LANGUAGE_LOCALE** — LANGUAGE -> LOCALE (`LocaleCode -> LocaleCode`)

## Referenced By (other tables -> this)

- **FK_LITERAL_DICTIONARY_TRANSLATION_Language** — LITERAL_DICTIONARY_TRANSLATION -> LANGUAGE (`LanguageID -> ID`)
- **FK_LITERAL_TRANSLATION_LANGUAGE** — LITERAL_TRANSLATION -> LANGUAGE (`LanguageID -> ID`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_LANGUAGE_LANGUAGE_CODE** on `LanguageCode`
- **IF_LANGUAGE_LOCALE** on `LocaleCode`
