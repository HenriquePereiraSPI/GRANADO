# PRINTER_PAPER_FORMAT

**Database:** Operational

**Description:** Contains links between a Printer and the Paper Format it supports. Can also be used to link a Printer tray and the paper formats supported by it.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| Enabled | BIT | True |  | False |  | Defines if the configuration is active. |
| ID | INT(10,0) | False |  | True |  | Unique identifier of a record (key) in a table. |
| PaperFormatID | INT(10,0) | True |  | False | PAPER_FORMAT | Link to supported Paper Format. |
| PrinterClassID | INT(10,0) | True |  | False | PRINTER_CLASS | Link to a Printer Class. |
| PrinterID | INT(10,0) | True |  | False | PRINTER | Link to a Printer. |
| Tray | NVARCHAR(50) | True |  | False |  | Name of a tray that contains paper (optional). |

## Primary Key

- **PK_PRINTER_PAPER_FORMAT** on `ID`

## Foreign Keys (this table -> other)

- **FK_PRINTER_PAPER_FORMAT_PAPER_FORMAT** — PRINTER_PAPER_FORMAT -> PAPER_FORMAT (`PaperFormatID -> ID`)
- **FK_PRINTER_PAPER_FORMAT_PRINTER** — PRINTER_PAPER_FORMAT -> PRINTER (`PrinterID -> ID`)
- **FK_PRINTER_PAPER_FORMAT_PRINTER_CLASS** — PRINTER_PAPER_FORMAT -> PRINTER_CLASS (`PrinterClassID -> ID`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_PRINTER_PAPER_FORMAT_PAPER_FORMAT** on `PaperFormatID`
- **IF_PRINTER_PAPER_FORMAT_PRINTER** on `PrinterID`
- **IF_PRINTER_PAPER_FORMAT_PRINTER_CLASS** on `PrinterClassID`
