# PRINTER_CLASS

**Database:** Operational

**Description:** Contains the various user defined Classes for Printers. Used to categorize printers.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| ID | INT(10,0) | False |  | True |  | Unique identifier of a record (key) in a table. |
| Name | NVARCHAR(50) | False |  | False |  | Name of the entity. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_PRINTER_CLASS** on `ID`

## Foreign Keys (this table -> other)

- **** —  (``)

## Referenced By (other tables -> this)

- **FK_EMPLOYEE_PRINTER_PRINTER_CLASS** — EMPLOYEE_PRINTER -> PRINTER_CLASS (`PrinterClassID -> ID`)
- **FK_PRINTER_PAPER_FORMAT_PRINTER_CLASS** — PRINTER_PAPER_FORMAT -> PRINTER_CLASS (`PrinterClassID -> ID`)
- **FK_PRINTER_PRINTER_CLASS** — PRINTER -> PRINTER_CLASS (`PrinterClassID -> ID`)
- **FK_REPORT_FORMAT_PRINTER_CLASS** — REPORT_FORMAT -> PRINTER_CLASS (`PrinterClassID -> ID`)
- **FK_REPORT_PRINTER_ASSIGNMENT_PRINTER_CLASS** — REPORT_PRINTER_ASSIGNMENT -> PRINTER_CLASS (`PrinterClassID -> ID`)
- **FK_RESOURCE_PRINTER_PRINTER_CLASS** — RESOURCE_PRINTER -> PRINTER_CLASS (`PrinterClassID -> ID`)

## Unique Indexes

- **UK_PRINTER_CLASS_1** on `Name`

## Non-Unique Indexes

- **** on ``
