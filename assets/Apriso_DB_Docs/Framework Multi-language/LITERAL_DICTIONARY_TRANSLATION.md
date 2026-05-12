# LITERAL_DICTIONARY_TRANSLATION

**Database:** Solution Authoring

**Description:** This table stores translations for reusable literals.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| CustChecksum | INT(10,0) | True |  | False |  | For future use. |
| Extended | NVARCHAR(2000) | True |  | False |  | Extended descriptive text (localized). |
| HasChanges | BIT | False |  | False |  | Indicates whether translation was updated since it was created. For For future use... |
| LanguageID | INT(10,0) | False |  | True | LANGUAGE | Language unique identifier. |
| LargeIconURL | VARCHAR(127) | True |  | False |  | The universal resource locator (URL) for the large icon representing the description. For For future use... |
| LiteralDictionaryID | INT(10,0) | False |  | True | LITERAL_DICTIONARY | Reference to the LITERAL_DICTIONARY entry. |
| LongAudioURL | VARCHAR(127) | True |  | False |  | The universal resource locator (URL) for the audio file representing the long description. For For future use... |
| Medium | NVARCHAR(255) | True |  | False |  | The medium-size description (up to 80 characters). |
| MediumAudioURL | VARCHAR(127) | True |  | False |  | The universal resource locator (URL) for the audio file representing the medium description. For For future use... |
| MediumIconURL | NVARCHAR(255) | True |  | False |  | The universal resource locator (URL) for the medium icon representing the description. For For future use... |
| Micro | NVARCHAR(1) | True |  | False |  | The micro description (1 character). For For future use... |
| MicroAudioURL | VARCHAR(127) | True |  | False |  | The universal resource locator (URL) for the audio file representing the micro description. For For future use... |
| OrgChecksum | INT(10,0) | True |  | False |  | For future use. |
| Short | NVARCHAR(80) | True |  | False |  | The short description (up to 20 characters). |
| ShortAudioURL | VARCHAR(127) | True |  | False |  | The universal resource locator (URL) for the audio file representing the short description. For For future use... |
| SmallIconURL | NVARCHAR(255) | True |  | False |  | The universal resource locator (URL) for the small icon representing the description. For For future use... |
| Text | NVARCHAR | True |  | False |  | The rich text description (unlimited length). For For future use... |
| TextAudioURL | VARCHAR(127) | True |  | False |  | The universal resource locator (URL) for the audio file representing the text description. For For future use... |
| Version | INT(10,0) | False |  | False |  | Translation version. For For future use... |

## Primary Key

- **PK_LITERAL_DICTIONARY_TRANSLATION** on `LiteralDictionaryID, LanguageID`

## Foreign Keys (this table -> other)

- **FK_LITERAL_DICTIONARY_TRANSLATION_Language** — LITERAL_DICTIONARY_TRANSLATION -> LANGUAGE (`LanguageID -> ID`)
- **FK_LITERAL_DICTIONARY_TRANSLATION_LITERAL_DICTIONARY** — LITERAL_DICTIONARY_TRANSLATION -> LITERAL_DICTIONARY (`LiteralDictionaryID -> ID`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **** on ``
