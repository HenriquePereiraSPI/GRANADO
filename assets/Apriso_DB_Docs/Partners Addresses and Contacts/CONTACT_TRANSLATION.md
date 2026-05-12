# CONTACT_TRANSLATION

**Database:** Operational

**Description:** For future use.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| AgencyNameAudio | NVARCHAR(256) | True |  | False |  | For future use. |
| AgencyOther | NVARCHAR(80) | True |  | False |  | For future use. |
| ContactFunctionOther | NVARCHAR(60) | True |  | False |  | For future use. |
| ContactID | INT(10,0) | False |  | True | CONTACT | For future use. |
| ContactName | NVARCHAR(50) | True |  | False |  | Localized literal of the CONTACTNAME linked to the CONTACT table. |
| Department | NVARCHAR(35) | True |  | False |  | For future use. |
| DepartmentAudio | NVARCHAR(256) | True |  | False |  | For future use. |
| FamilyName | NVARCHAR(20) | True |  | False |  | Localized literal of the FAMILYNAME linked to the CONTACT table. |
| FamilyNameAudio | NVARCHAR(256) | True |  | False |  | Localized literal of the FAMILYNAMEAUDIO linked to the CONTACT table. |
| GivenNameFirst | NVARCHAR(15) | True |  | False |  | Localized literal of the GIVENNAMEFIRST linked to the CONTACT table. |
| GivenNameFirstAudio | NVARCHAR(256) | True |  | False |  | Localized literal of the GIVENNAMEFIRSTAUDIO linked to the CONTACT table. |
| GivenNameSecond | NVARCHAR(15) | True |  | False |  | Localized literal of the GIVENNAMESECOND linked to the CONTACT table. |
| GivenNameSecondAudio | NVARCHAR(256) | True |  | False |  | Localized literal of the GIVENNAMESECONDAUDIO linked to the CONTACT table. |
| LanguageID | INT(10,0) | False |  | True |  | Language of the entity. |
| NameAudio | NVARCHAR(256) | True |  | False |  | For future use. |
| NameOrderFlag | TINYINT(3,0) | True | (0) | False |  | For future use. |
| Position | NVARCHAR(35) | True |  | False |  | For future use. |
| PositionAudio | NVARCHAR(256) | True |  | False |  | For future use. |
| Salutation | NVARCHAR(20) | True |  | False |  | For future use. |
| SalutationAudioFile | NVARCHAR(256) | True |  | False |  | For future use. |

## Primary Key

- **PK_CONTACT_TRANSLATIONS** on `ContactID, LanguageID`

## Foreign Keys (this table -> other)

- **FK_CONTACT_TRANSLATIONS_CONTACTS** — CONTACT_TRANSLATION -> CONTACT (`ContactID -> ID`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **** on ``
