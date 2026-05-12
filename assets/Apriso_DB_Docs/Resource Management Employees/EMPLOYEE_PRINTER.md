# EMPLOYEE_PRINTER

**Database:** Operational

**Description:** Links an EMPLOYEE to one or more rows in the PRINTER table.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| EmployeeID | INT(10,0) | False |  | False | EMPLOYEE | Employee assigned to a Printer. |
| ID | INT(10,0) | False |  | True |  | Unique identifier of a record (key) in a table. |
| PrinterClassID | INT(10,0) | True |  | False | PRINTER_CLASS | Link to a Printer Class. |
| PrinterID | INT(10,0) | True |  | False | PRINTER | Link to a Printer. |
| SequenceNo | INT(10,0) | True |  | False |  | Sequence number within the same class. |

## Primary Key

- **PK_EMPLOYEE_PRINTER** on `ID`

## Foreign Keys (this table -> other)

- **FK_EMPLOYEE_PRINTER_EMPLOYEE** — EMPLOYEE_PRINTER -> EMPLOYEE (`EmployeeID -> ID`)
- **FK_EMPLOYEE_PRINTER_PRINTER** — EMPLOYEE_PRINTER -> PRINTER (`PrinterID -> ID`)
- **FK_EMPLOYEE_PRINTER_PRINTER_CLASS** — EMPLOYEE_PRINTER -> PRINTER_CLASS (`PrinterClassID -> ID`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_EMPLOYEE_PRINTER_PRINTER** on `SequenceNo`
- **IF_EMPLOYEE_PRINTER_PRINTER_CLASS** on `PrinterClassID`
