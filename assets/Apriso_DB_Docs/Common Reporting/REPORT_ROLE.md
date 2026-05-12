# REPORT_ROLE

**Database:** Solution Authoring

**Description:** The table determines roles assigned to a report.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| ReportID | INT(10,0) | False |  | True | REPORT | Link to REPORT. |
| Role | NVARCHAR(40) | False |  | True |  | Reference to the Role column in the ROLE table. |

## Primary Key

- **PK_REPORT_ROLE** on `ReportID, Role`

## Foreign Keys (this table -> other)

- **FK_REPORT_ROLE_REPORT** — REPORT_ROLE -> REPORT (`ReportID -> ID`)

## Referenced By (other tables -> this)

- **** —  (``)

## Business Keys (this table -> other)

- REPORT_ROLE -> ROLE (`Role -> Role`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_REPORT_ROLE_ROLE** on `Role`
