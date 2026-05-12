# QUALITY_DEFECT_STATUS_HISTORY

**Database:** Operational

**Description:** This table stores history of Defects Status changes..

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| ChangeStatusDate | DATETIME | False |  | False |  | Date of Status change. |
| Comment_ | NVARCHAR(2000) | True |  | False |  | Comment. |
| DefectNo | NVARCHAR(20) | False |  | False |  | Defect Number. |
| DurationSeconds | INT(10,0) | True |  | False |  | Duration between From and To, calculated in seconds. |
| EffectiveDurationSeconds | INT(10,0) | True |  | False |  | Duration calculated based on custom requirements, for example related to Employee Calendar. |
| EmployeeNo | NVARCHAR(50) | True |  | False |  | Author of Status change. |
| FromDefectStatusID | INT(10,0) | True |  | False | QUALITY_DEFECT_STATUS | ID of Defect Status before change. |
| ID | INT(10,0) | False |  | True |  | Unique ID of the row. |
| ToDefectStatusID | INT(10,0) | True |  | False | QUALITY_DEFECT_STATUS | ID of Defect Status after change. |

## Primary Key

- **PK_QUALITY_DEFECT_STATUS_HISTORY** on `ID`

## Foreign Keys (this table -> other)

- **FK_QUALITY_DEFECT_STATUS_HISTORY_FromDefectStatusID** — QUALITY_DEFECT_STATUS_HISTORY -> QUALITY_DEFECT_STATUS (`FromDefectStatusID -> ID`)
- **FK_QUALITY_DEFECT_STATUS_HISTORY_ToDefectStatusID** — QUALITY_DEFECT_STATUS_HISTORY -> QUALITY_DEFECT_STATUS (`ToDefectStatusID -> ID`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_QUALITY_DEFECT_STATUS_HISTORY_FromDefectStatusID** on `FromDefectStatusID`
- **IF_QUALITY_DEFECT_STATUS_HISTORY_ToDefectStatusID** on `ToDefectStatusID`
