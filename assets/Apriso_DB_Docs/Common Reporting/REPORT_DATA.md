# REPORT_DATA

**Database:** Solution Authoring

**Description:** Defines the report types supported in Apriso. Supported types include 1=Crystal Reports Report; 2=Label.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| Layout | NVARCHAR | True |  | False |  | Layout of report. |
| ReportContent | VARBINARY | True |  | False |  |  |
| ReportID | INT(10,0) | False |  | True | REPORT | Link to reports table |

## Primary Key

- **PK_REPORT_DATA** on `ReportID`

## Foreign Keys (this table -> other)

- **FK_REPORT_DATA_REPORT** — REPORT_DATA -> REPORT (`ReportID -> ID`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **** on ``
