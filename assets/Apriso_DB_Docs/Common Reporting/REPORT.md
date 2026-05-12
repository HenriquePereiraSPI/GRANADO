# REPORT

**Database:** Solution Authoring

**Description:** The table keeps the list of reports with links to categories (hierarchy).

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| ConfigurationFile | NVARCHAR(255) | True |  | False |  | Report configuration (.XML) file path |
| DatabaseAlias | VARCHAR(40) | True |  | False |  | Database alias. |
| EngineType | SMALLINT(5,0) | True |  | False |  | Type of Reporting Engine: 1- Crystal, 2- Reproting Services |
| FUID | NVARCHAR(36) | False |  | False |  | Apriso object unique Identifier for REPORT |
| ID | INT(10,0) | False |  | True |  | Unique identifier of the report |
| ReportCategoryID | INT(10,0) | True |  | False | REPORT_CATEGORY | Link to report category |
| ReportClassID | INT(10,0) | True |  | False | REPORT_CLASS | Link to Report Class (optional). |
| ReportFile | NVARCHAR(255) | True |  | False |  | Report definition (.RPT) file path |
| ReportName | NVARCHAR(50) | True |  | False |  | Original name of ther report |
| ReportTypeID | INT(10,0) | True |  | False | REPORT_TYPE | Link to REPORT_TYPE, allows to differentiate various types of reports or labels. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_REPORT** on `ID`

## Foreign Keys (this table -> other)

- **FK_REPORT_REPORT_CATEGORY** — REPORT -> REPORT_CATEGORY (`ReportCategoryID -> ID`)
- **FK_REPORT_REPORT_CLASS** — REPORT -> REPORT_CLASS (`ReportClassID -> ID`)
- **FK_REPORT_REPORT_TYPE** — REPORT -> REPORT_TYPE (`ReportTypeID -> ID`)

## Referenced By (other tables -> this)

- **FK_BUSINESS_OBJECT_REPORT** — BUSINESS_OBJECT -> REPORT (`ReportID -> ID`)
- **FK_KPI_REPORT** — KPI -> REPORT (`DiagnosisReportID -> ID`)
- **FK_REPORT_DATA_REPORT** — REPORT_DATA -> REPORT (`ReportID -> ID`)
- **FK_REPORT_ROLE_REPORT** — REPORT_ROLE -> REPORT (`ReportID -> ID`)

## Business Keys (other -> this table)

- EMR_HEADER_DEFINITION -> REPORT (`ReportFUID -> FUID`)
- EMR_HEADER -> REPORT (`ReportFUID -> FUID`)
- REPORT_FORMAT -> REPORT (`ReportFUID -> FUID`)
- REPORT_PRINTER_ASSIGNMENT -> REPORT (`ReportFUID -> FUID`)
- PACKAGING_INSTR_USAGE -> REPORT (`ReportFUIDLevel1, ReportFUIDLevel2 -> FUID`)

## Unique Indexes

- **UK_REPORT** on `FUID`

## Non-Unique Indexes

- **IF_REPORT_REPORT_CATEGORY** on `ReportCategoryID`
- **IF_REPORT_REPORT_CLASS** on `ReportClassID`
- **IXD_ReportTypeID** on `ReportTypeID`
