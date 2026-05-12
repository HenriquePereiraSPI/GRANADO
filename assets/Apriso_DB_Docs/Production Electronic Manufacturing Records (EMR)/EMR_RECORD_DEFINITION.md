# EMR_RECORD_DEFINITION

**Database:** Operational

**Description:** This table stores information about Electronic Manufacturing Records definition.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| BreakdownStructureCode | NVARCHAR(256) | True |  | False |  | Breakdown Structure Code. It is used for sorting and configuring the hierarchy of the report. |
| Description | NVARCHAR(256) | True |  | False |  | Description of EMR record. |
| EmrHeaderDefinitionID | INT(10,0) | True |  | False | EMR_HEADER_DEFINITION | Unique identifier of EMR Header, associated with EMR Record. |
| Exception | BIT | False |  | False |  | Indicates if this type of record is an exception. |
| FormTemplate | NVARCHAR | True |  | False |  | EMR record form template. |
| FUID | NVARCHAR(36) | False |  | False |  | Unique identifier for the entity across multiple Apriso instances. |
| ID | INT(10,0) | False |  | True |  | Primary Key. |
| InternalUse | BIT | False |  | False |  | Indicates if this record will be visible in the EMR screen. |
| Name | NVARCHAR(20) | True |  | False |  | Name of the EMR record. EmrHeaderDefinitionID + Name must be unique. |
| SignatureHeaderDefinitionID | INT(10,0) | True |  | False | SIGNATURE_HEADER_DEFINITION | Unique identifier of Signature Header, used for linking with Signature entity. |

## Primary Key

- **PK_EMR_RECORD_DEFINITION** on `ID`

## Foreign Keys (this table -> other)

- **FK_EMR_RECORD_DEFINITION_EMR_HEADER_DEFINITION** — EMR_RECORD_DEFINITION -> EMR_HEADER_DEFINITION (`EmrHeaderDefinitionID -> ID`)
- **FK_EMR_RECORD_DEFINITION_SIGNATURE_HEADER_DEFINITION** — EMR_RECORD_DEFINITION -> SIGNATURE_HEADER_DEFINITION (`SignatureHeaderDefinitionID -> ID`)

## Referenced By (other tables -> this)

- **FK_EMR_FIELD_DEFINITION_EMR_RECORD_DEFINITION** — EMR_FIELD_DEFINITION -> EMR_RECORD_DEFINITION (`EmrRecordDefinitionID -> ID`)

## Unique Indexes

- **UK_EMR_RECORD_DEFINITION** on `EmrHeaderDefinitionID, Name`
- **UK_EMR_RECORD_DEFINITION_01** on `FUID`

## Non-Unique Indexes

- **IF_EMR_RECORD_DEFINITION_SIGNATURE_HEADER_DEFINITION** on `SignatureHeaderDefinitionID`
