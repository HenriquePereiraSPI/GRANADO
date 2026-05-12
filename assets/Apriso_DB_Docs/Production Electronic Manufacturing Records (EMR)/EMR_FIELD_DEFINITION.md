# EMR_FIELD_DEFINITION

**Database:** Operational

**Description:** This table stores information about field definiton of the Electronic Manufacturing Records.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| AllowEdit | BIT | False |  | False |  | Indicates if the field can be edited in the EMR screen. |
| AllowNull | BIT | False |  | False |  | Indicates if the field can be NULL. |
| Description | NVARCHAR(256) | True |  | False |  | Description of the field. |
| EmrRecordDefinitionID | INT(10,0) | True |  | False | EMR_RECORD_DEFINITION | Unique identifier of EMR Record, associated with EMR Field. |
| FieldIndex | SMALLINT(5,0) | True |  | False |  | Definition refers to information stored in EMR_FIELD. |
| FieldType | SMALLINT(5,0) | False |  | False | FIELD_TYPE | Type of the field. |
| FUID | NVARCHAR(36) | False |  | False |  | Unique identifier for the entity across multiple Apriso instances. |
| ID | INT(10,0) | False |  | True |  | Primary Key. |
| Name | NVARCHAR(18) | True |  | False |  | Name of the EMR field. EmrRecordDefinitionID + Name must be unique. |

## Primary Key

- **PK_EMR_FIELD_DEFINITION** on `ID`

## Foreign Keys (this table -> other)

- **FK_EMR_FIELD_DEFINITION_EMR_RECORD_DEFINITION** — EMR_FIELD_DEFINITION -> EMR_RECORD_DEFINITION (`EmrRecordDefinitionID -> ID`)
- **FK_EMR_FIELD_DEFINITION_FIELD_TYPE** — EMR_FIELD_DEFINITION -> FIELD_TYPE (`FieldType -> FieldType`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **UK_EMR_FIELD_DEFINITION** on `FUID`
- **UK_EMR_FIELD_DEFINITION_01** on `EmrRecordDefinitionID, Name`

## Non-Unique Indexes

- **** on ``
