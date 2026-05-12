# PRINTER

**Database:** Operational

**Description:** Contains the printer defined in the system

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| AlternatePrinterID | INT(10,0) | True |  | False | PRINTER | This is the alternate printer defined as a back of the printer defined in the record |
| CodePage | NVARCHAR(50) | True |  | False |  | Code page supported by printer (applicable for non-unicode label printers) |
| Facility | NVARCHAR(40) | False |  | False | FACILITY | Assignment of a Printer to a facility |
| ID | INT(10,0) | False |  | True |  | Unique identifier of a record (key) in a table |
| PrinterClassID | INT(10,0) | True |  | False | PRINTER_CLASS | Link to a printer Class |
| PrinterName | NVARCHAR(255) | False |  | False |  | Printer Name |
| SpoolAddress | NVARCHAR(255) | True |  | False |  | The physical network address on the Windows Domain, for PCL printers that utilize the Windows spooler and the Enhanced Metadata Format (EMF). Also, the Windows Active Directory location on the network for printers |
| SpoolType | SMALLINT(5,0) | True |  | False |  | Type of the spool used by framework to deliver label to a logical printer: 1 - Printer, 2 - Disk Folder. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_PRINTER** on `ID`

## Foreign Keys (this table -> other)

- **FK_PRINTER_FACILITY** — PRINTER -> FACILITY (`Facility -> Facility`)
- **FK_PRINTER_PRINTER** — PRINTER -> PRINTER (`AlternatePrinterID -> ID`)
- **FK_PRINTER_PRINTER_CLASS** — PRINTER -> PRINTER_CLASS (`PrinterClassID -> ID`)

## Referenced By (other tables -> this)

- **FK_EMPLOYEE_PRINTER_PRINTER** — EMPLOYEE_PRINTER -> PRINTER (`PrinterID -> ID`)
- **FK_PRINT_REQUEST_HISTORY_PRINTER** — PRINT_REQUEST_HISTORY -> PRINTER (`PrinterID -> ID`)
- **FK_PRINTER_PAPER_FORMAT_PRINTER** — PRINTER_PAPER_FORMAT -> PRINTER (`PrinterID -> ID`)
- **FK_PRINTER_PRINTER** — PRINTER -> PRINTER (`AlternatePrinterID -> ID`)
- **FK_REPORT_FORMAT_PRINTER** — REPORT_FORMAT -> PRINTER (`PrinterID -> ID`)
- **FK_REPORT_PRINTER_ASSIGNMENT_PRINTER** — REPORT_PRINTER_ASSIGNMENT -> PRINTER (`PrinterID -> ID`)
- **FK_RESOURCE_PRINTER_PRINTER** — RESOURCE_PRINTER -> PRINTER (`PrinterID -> ID`)

## Unique Indexes

- **UK_PRINTER_1** on `Facility, PrinterName`

## Non-Unique Indexes

- **IF_PRINTER_PRINTER** on `AlternatePrinterID`
- **IF_PRINTER_PRINTER_CLASS** on `PrinterClassID`
- **IXD_SpoolType** on `SpoolType`
