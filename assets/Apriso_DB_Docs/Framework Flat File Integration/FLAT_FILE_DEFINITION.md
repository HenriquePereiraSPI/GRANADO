# FLAT_FILE_DEFINITION

**Database:** Operational

**Description:** Describes entities that can be decoded from a Flat File Definition. For example, a single Just-In-Sequence broadcast file may be decoded for Carpet entities and again for Radio entities. This table links the entities that can be decoded, including specific product groups (Radio and Carpets for example), Resources, Partners, etc. The link is intended for use by Process Authors to identify the correct entities. Flat File Entities are revision controlled.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| DiscontinueDate | DATETIME | True |  | False |  | The first date and time this flat file definition is no longer effective. |
| EffectiveDate | DATETIME | True |  | False |  | The effective date of this flat file definition. |
| FieldDelimiter | NVARCHAR(10) | True |  | False |  | The field delimiter for a delimited file. |
| ID | INT(10,0) | False |  | True |  | Auto increment PK. |
| IsFixedLength | BIT | True |  | False |  | True if the flat file is fixed length fields, false if the file is delimited. |
| LineCount | INT(10,0) | True |  | False |  | The total number of lines for a fixed length file. |
| LineLength | INT(10,0) | True |  | False |  | The number of characters per line for a fixed length file. |
| Name | NVARCHAR(255) | False |  | False |  | The name that identifies this flat file definition. |
| PartnerID | INT(10,0) | True |  | False | PARTNER | The partner that is sending or receiving these messages. |
| ResourceID | INT(10,0) | True |  | False | RESOURCE_ | The internal resource linked to this message. |
| Revision | NVARCHAR(100) | False |  | False |  | The revision name. |
| RevisionStatusID | SMALLINT(5,0) | True |  | False |  | Revision Status for the current Flat file definition. |
| TestMessage | NVARCHAR(2000) | True |  | False |  | A sample message used for testing configuration options. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_FLAT_FILE_DEFINITION** on `ID`

## Foreign Keys (this table -> other)

- **FK_FLAT_FILE_DEFINITION_PARTNER** — FLAT_FILE_DEFINITION -> PARTNER (`PartnerID -> ID`)
- **FK_FLAT_FILE_DEFINITION_RESOURCE_** — FLAT_FILE_DEFINITION -> RESOURCE_ (`ResourceID -> ID`)

## Referenced By (other tables -> this)

- **FK_FLAT_FILE_ENTITY_FLAT_FILE_DEFINITION** — FLAT_FILE_ENTITY -> FLAT_FILE_DEFINITION (`FlatFileDefinitionID -> ID`)

## Unique Indexes

- **UK_FLAT_FILE_DEFINITION** on `Name, Revision`

## Non-Unique Indexes

- **IF_FLAT_FILE_DEFINITION_PARTNER** on `PartnerID`
- **IF_FLAT_FILE_DEFINITION_RESOURCE_** on `ResourceID`
- **IF_FLAT_FILE_DEFINITION_REVISION_STATUS** on `RevisionStatusID`
