# REPORT_PRINTER_ASSIGNMENT

**Database:** Operational

**Description:** The table keeps assignments between Reports and printers.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| ID | INT(10,0) | False |  | True |  | Unique ID |
| PrinterClassID | INT(10,0) | True |  | False | PRINTER_CLASS | Link to Printer Class (optional) |
| PrinterID | INT(10,0) | True |  | False | PRINTER | Link to Printer (optional) |
| ReportClassName | NVARCHAR(50) | True |  | False |  | Link to Report Class (optional). |
| ReportFUID | NVARCHAR(36) | True |  | False |  | Link to Report (optional). |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_REPORT_PRINTER_ASSIGNMENT** on `ID`

## Foreign Keys (this table -> other)

- **FK_REPORT_PRINTER_ASSIGNMENT_PRINTER** — REPORT_PRINTER_ASSIGNMENT -> PRINTER (`PrinterID -> ID`)
- **FK_REPORT_PRINTER_ASSIGNMENT_PRINTER_CLASS** — REPORT_PRINTER_ASSIGNMENT -> PRINTER_CLASS (`PrinterClassID -> ID`)

## Referenced By (other tables -> this)

- **** —  (``)

## Business Keys (this table -> other)

- REPORT_PRINTER_ASSIGNMENT -> REPORT (`ReportFUID -> FUID`)
- REPORT_PRINTER_ASSIGNMENT -> REPORT_CLASS (`ReportClassName -> Name`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_REPORT_PRINTER_ASSIGNMENT_PRINTER** on `PrinterID`
- **IF_REPORT_PRINTER_ASSIGNMENT_PRINTER_CLASS** on `PrinterClassID`
- **IF_REPORT_PRINTER_ASSIGNMENT_REPORT** on `ReportFUID`
- **IF_REPORT_PRINTER_ASSIGNMENT_REPORT_CLASS** on `ReportClassName`
