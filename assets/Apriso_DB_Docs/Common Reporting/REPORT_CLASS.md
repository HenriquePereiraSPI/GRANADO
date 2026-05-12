# REPORT_CLASS

**Database:** Solution Authoring

**Description:** Keeps user configurable classes for reports.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| FUID | NVARCHAR(36) | False |  | False |  | Unique identifier of the entity across multiple DELMIA Apriso instances. |
| ID | INT(10,0) | False |  | True |  | Unique ID |
| Name | NVARCHAR(50) | False |  | False |  |  |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_REPORT_CLASS** on `ID`

## Foreign Keys (this table -> other)

- **** —  (``)

## Referenced By (other tables -> this)

- **FK_REPORT_REPORT_CLASS** — REPORT -> REPORT_CLASS (`ReportClassID -> ID`)

## Business Keys (other -> this table)

- REPORT_PRINTER_ASSIGNMENT -> REPORT_CLASS (`ReportClassName -> Name`)

## Unique Indexes

- **UK_REPORT_CLASS** on `FUID`
- **UK_REPORT_CLASS_NAME** on `Name`

## Non-Unique Indexes

- **** on ``
