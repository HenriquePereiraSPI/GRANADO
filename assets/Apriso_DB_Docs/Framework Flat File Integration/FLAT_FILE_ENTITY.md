# FLAT_FILE_ENTITY

**Database:** Operational

**Description:** Describes entities that can be decoded from a Flat File Definition. For example, a single Just-In-Sequence broadcast file may be decoded for Carpet entities and again for Radio entities. This table links the entities that can be decoded, including specific product groups (Radio and Carpets for example), Resources, Partners, etc. The link is intended for use by Process Authors to identify the correct entities. Flat File Entities are revision controlled..

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| DiscontinueDate | DATETIME | True |  | False |  | The first date and time this flat file definition is no longer effective. |
| EffectiveDate | DATETIME | True |  | False |  | The effective date of this flat file definition. |
| Facility | NVARCHAR(40) | True |  | False | FACILITY | The Facility sending or receiving these messages. |
| FlatFileDefinitionID | INT(10,0) | False |  | False | FLAT_FILE_DEFINITION | The definition of this type of file, including size information. |
| Group_ | NVARCHAR(40) | True |  | False | GROUP_ | The internal group to which this configuration references. |
| GroupClassID | INT(10,0) | True |  | False | GROUP_ | The internal group to which this configuration references. |
| GroupType | SMALLINT(5,0) | True |  | False | GROUP_ | The internal group to which this configuration references. |
| ID | INT(10,0) | False |  | True |  | Auto increment PK. |
| Name | NVARCHAR(255) | False |  | False |  | The name that identifies this flat file definition. |
| PartnerID | INT(10,0) | True |  | False | PARTNER | The partner that is sending or receiving these messages. |
| ResourceID | INT(10,0) | True |  | False | RESOURCE_ | The internal resource responsible or otherwise linked to these messages. |
| Revision | NVARCHAR(100) | False |  | False |  | The revision name. |
| RevisionStatusID | SMALLINT(5,0) | True |  | False |  | Revision Status for the current Flat file definition. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |
| Warehouse | NVARCHAR(10) | True |  | False | WAREHOUSE | The Warehouse sending or receiving these messages. |

## Primary Key

- **PK_FLAT_FILE_ENTITY** on `ID`

## Foreign Keys (this table -> other)

- **FK_FLAT_FILE_ENTITY_FACILITY** — FLAT_FILE_ENTITY -> FACILITY (`Facility -> Facility`)
- **FK_FLAT_FILE_ENTITY_FLAT_FILE_DEFINITION** — FLAT_FILE_ENTITY -> FLAT_FILE_DEFINITION (`FlatFileDefinitionID -> ID`)
- **FK_FLAT_FILE_ENTITY_GROUP_** — FLAT_FILE_ENTITY -> GROUP_ (`Group_, GroupType, GroupClassID -> Group_, GroupType, GroupClassID`)
- **FK_FLAT_FILE_ENTITY_PARTNER** — FLAT_FILE_ENTITY -> PARTNER (`PartnerID -> ID`)
- **FK_FLAT_FILE_ENTITY_RESOURCE_** — FLAT_FILE_ENTITY -> RESOURCE_ (`ResourceID -> ID`)
- **FK_FLAT_FILE_ENTITY_WAREHOUSE** — FLAT_FILE_ENTITY -> WAREHOUSE (`Facility, Warehouse -> Facility, Warehouse`)

## Referenced By (other tables -> this)

- **FK_FLAT_FILE_FIELD_FLAT_FILE_ENTITY** — FLAT_FILE_FIELD -> FLAT_FILE_ENTITY (`FlatFileEntityID -> ID`)

## Unique Indexes

- **UK_FLAT_FILE_ENTITY** on `Name, Revision`

## Non-Unique Indexes

- **IF_FLAT_FILE_ENTITY_FLAT_FILE_DEFINITION** on `FlatFileDefinitionID`
- **IF_FLAT_FILE_ENTITY_GROUP_** on `Group_, GroupType, GroupClassID`
- **IF_FLAT_FILE_ENTITY_PARTNER** on `PartnerID`
- **IF_FLAT_FILE_ENTITY_RESOURCE_** on `ResourceID`
- **IF_FLAT_FILE_ENTITY_REVISION_STATUS** on `RevisionStatusID`
