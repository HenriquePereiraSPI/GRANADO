# EMR_HEADER_DEFINITION

**Database:** Operational

**Description:** This table stores information about header definition of the Electronic Manufacturing Records. If the report is using Apriso report, it will be linked through ReportFUID. If the report is using HTML format form, then this form will be stored in FormTemplate.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| Description | NVARCHAR(256) | True |  | False |  | Description of EMR header. |
| FormTemplate | NVARCHAR | True |  | False |  | Form template of the EMR header |
| FUID | NVARCHAR(36) | False |  | False |  | Unique identifier for the entity across multiple Apriso instances. |
| ID | INT(10,0) | False |  | True |  | Primary Key. |
| Name | NVARCHAR(5) | False |  | False |  | Name of the EMR header. |
| ReportFUID | NVARCHAR(36) | True |  | False |  | Reference to the FUID column in the Report table. |
| RevisionStatusID | SMALLINT(5,0) | True |  | False |  | Unique identifier of Revision status. |
| TransformationFile | NVARCHAR(256) | True |  | False |  | Path of the XSLT transformation file to be applied to the EMR data. |

## Primary Key

- **PK_EMR_HEADER_DEFINITION** on `ID`

## Foreign Keys (this table -> other)

- **** —  (``)

## Referenced By (other tables -> this)

- **FK_EMR_RECORD_DEFINITION_EMR_HEADER_DEFINITION** — EMR_RECORD_DEFINITION -> EMR_HEADER_DEFINITION (`EmrHeaderDefinitionID -> ID`)

## Business Keys (this table -> other)

- EMR_HEADER_DEFINITION -> REPORT (`ReportFUID -> FUID`)

## Unique Indexes

- **UK_EMR_HEADER_DEFINITION** on `Name`
- **UK_EMR_HEADER_DEFINITION_01** on `FUID`

## Non-Unique Indexes

- **IF_EMR_HEADER_DEFINITION_REPORT** on `ReportFUID`
- **IF_EMR_HEADER_DEFINITION_REVISION_STATUS** on `RevisionStatusID`
