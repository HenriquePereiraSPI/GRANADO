# REPORT_TYPE

**Database:** Solution Authoring

**Description:** Defines the report types supported in Apriso. Supported types include 1=Report, 2=Label, 3=Excel, 4=Power Report.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| ID | INT(10,0) | False |  | True |  |  |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_REPORT_TYPE** on `ID`

## Foreign Keys (this table -> other)

- **** —  (``)

## Referenced By (other tables -> this)

- **FK_REPORT_CATEGORY_REPORT_TYPE** — REPORT_CATEGORY -> REPORT_TYPE (`ReportTypeID -> ID`)
- **FK_REPORT_REPORT_TYPE** — REPORT -> REPORT_TYPE (`ReportTypeID -> ID`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **** on ``
