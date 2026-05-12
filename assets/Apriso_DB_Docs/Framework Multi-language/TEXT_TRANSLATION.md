# TEXT_TRANSLATION

**Database:** Operational

**Description:** Contain the various text translation of text table. This table can persite multiple texts (short, medium…) as well as icones for multiple devices types and URLs

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| CustChecksum | INT(10,0) | True |  | False |  | Used during importing a translation when the Distinct flag is used. In this mode, the same translations are recognized by having the same checksum value. |
| Extended | NVARCHAR(2000) | True |  | False |  | Extended description (up to 2000 characters) |
| LanguageID | INT(10,0) | False |  | True |  | Language of the entity |
| LargeIconURL | VARCHAR(127) | True |  | False |  | Large Icon URL |
| LongAudioURL | VARCHAR(127) | True |  | False |  | For future use. |
| Medium | NVARCHAR(255) | True |  | False |  | Medium description (up to 255 characters) |
| MediumAudioURL | VARCHAR(127) | True |  | False |  | The universal resource locator (URL) for the audio file representing the medium description |
| MediumIconURL | NVARCHAR(255) | True |  | False |  | The universal resource locator (URL) for the medium icon representing the description |
| Micro | NVARCHAR(1) | True |  | False |  | The micro description (1 character) |
| MicroAudioURL | VARCHAR(127) | True |  | False |  | The universal resource locator (URL) for the audio file representing the micro description |
| OrgChecksum | INT(10,0) | True |  | False |  | For future use. |
| Short | NVARCHAR(80) | True |  | False |  | Short description (up to 80 characters) |
| ShortAudioURL | VARCHAR(127) | True |  | False |  | For future use. |
| SmallIconURL | NVARCHAR(255) | True |  | False |  | For future use. |
| Text | NVARCHAR | True |  | False |  | Text information |
| TextAudioURL | VARCHAR(127) | True |  | False |  | For future use. |
| TextID | INT(10,0) | False |  | True | TEXT | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_TEXT_TRANSLATION** on `TextID, LanguageID`

## Foreign Keys (this table -> other)

- **FK_TEXT_TRANSLATION_TEXT** — TEXT_TRANSLATION -> TEXT (`TextID -> ID`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IDX_CustChecksumTextTran** on `CustChecksum, CustChecksum`
ksum, CustChecksum`
