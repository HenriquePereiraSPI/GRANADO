# EMR_HEADER

**Database:** Operational

**Description:** The table stores information of Electronic Manufacturing Records Header. EmrHeaderNo and all the keys combination should be unique. If there is any annotation attached to the EMR header, it will be linked through UnitID and from UnitID linked to UNIT_ANNOTATION. If the report is using Apriso report, it will be linked through ReportFUID. If the report is using HTML format form, then this form will be stored in FormTemplate. The actual report format with the actual value data will be stored in the FormInstance.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| Description | NVARCHAR(256) | True |  | False |  | Eletronic Report Description |
| EmrHeaderNo | NVARCHAR(24) | False |  | False |  | Eletronic Report Number |
| EmrStatus | SMALLINT(5,0) | False |  | False | EMR_STATUS | Status of the EMR |
| FormInstance | NVARCHAR | True |  | False |  | Form instance of the EMR header. |
| FormTemplate | NVARCHAR | True |  | False |  | Form template of the EMR header. |
| FUID | NVARCHAR(36) | False |  | False |  | Unique identifier for the entity across multiple Apriso instances. |
| ID | INT(10,0) | False |  | True |  | Primary Key |
| Key1 | NVARCHAR(40) | True |  | False |  | Key1; INDEX on Key1 |
| Key1Description | NVARCHAR(256) | True |  | False |  | Key 1 Description |
| Key2 | NVARCHAR(40) | True |  | False |  | Key2; INDEX on Key2 |
| Key2Description | NVARCHAR(256) | True |  | False |  | Key 2 Description |
| Key3 | NVARCHAR(40) | True |  | False |  | Key3; INDEX on Key3 |
| Key3Description | NVARCHAR(256) | True |  | False |  | Key 3 Description |
| Key4 | NVARCHAR(40) | True |  | False |  | Key4; INDEX on Key4 |
| Key4Description | NVARCHAR(256) | True |  | False |  | Key 4 Description |
| Key5 | NVARCHAR(40) | True |  | False |  | Key5; INDEX on Key5 |
| Key5Description | NVARCHAR(256) | True |  | False |  | Key 5 Description |
| Key6 | NVARCHAR(40) | True |  | False |  | Key6; INDEX on Key6 |
| Key6Description | NVARCHAR(256) | True |  | False |  | Key 6 Description |
| Key7 | NVARCHAR(40) | True |  | False |  | Key7; INDEX on Key7 |
| Key7Description | NVARCHAR(256) | True |  | False |  | Key 7 Description |
| Key8 | NVARCHAR(40) | True |  | False |  | Key8; INDEX on Key8 |
| Key8Description | NVARCHAR(256) | True |  | False |  | Key 8 Description |
| ProgressStatus | INT(10,0) | True |  | False | PROGRESS_STATUS | Used to create a state workflow. |
| ReportFUID | NVARCHAR(36) | True |  | False |  | Reference to the FUID column in the Report table. |
| RetentionDays | INT(10,0) | True |  | False |  | Number of days when EMR Header will be valid. |
| TransformationFile | NVARCHAR(256) | True |  | False |  | Path of the XSLT transformation file to be applied to the EMR data. |
| UnitID | INT(10,0) | True |  | False | UNIT | Unique identifier of the Unit. |
| UserReference | NVARCHAR(256) | True |  | False |  | Used for user reference. |

## Primary Key

- **PK_EMR_HEADER** on `ID`

## Foreign Keys (this table -> other)

- **FK_EMR_HEADER_EMR_STATUS** — EMR_HEADER -> EMR_STATUS (`EmrStatus -> EmrStatus`)
- **FK_EMR_HEADER_PROGRESS_STATUS** — EMR_HEADER -> PROGRESS_STATUS (`ProgressStatus -> ProgressStatus`)
- **FK_EMR_HEADER_UNIT** — EMR_HEADER -> UNIT (`UnitID -> ID`)

## Referenced By (other tables -> this)

- **FK_EMR_RECORD_EMR_HEADER** — EMR_RECORD -> EMR_HEADER (`EmrHeaderID -> ID`)

## Business Keys (this table -> other)

- EMR_HEADER -> REPORT (`ReportFUID -> FUID`)

## Unique Indexes

- **UK_EMR_HEADER** on `FUID`
- **UK_EMR_HEADER_01** on `EmrHeaderNo`

## Non-Unique Indexes

- **IDX_Key1** on `Key1`
- **IDX_Key2** on `Key2`
- **IDX_Key3** on `Key3`
- **IDX_Key4** on `Key4`
- **IDX_Key5** on `Key5`
- **IDX_Key6** on `Key6`
- **IDX_Key7** on `Key7`
- **IDX_Key8** on `Key8`
- **IF_EMR_HEADER_EMR_STATUS** on `EmrStatus`
- **IF_EMR_HEADER_PROGRESS_STATUS** on `ProgressStatus`
- **IF_EMR_HEADER_REPORT** on `ReportFUID`
- **IF_EMR_HEADER_UNIT** on `UnitID`
