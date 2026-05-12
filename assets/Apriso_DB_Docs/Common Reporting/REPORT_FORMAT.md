# REPORT_FORMAT

**Database:** Operational

**Description:** Keeps different formats supported by the report

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| FormatName | NVARCHAR(255) | True |  | False |  | Name of the format or name of the file that stored the format. |
| ID | INT(10,0) | False |  | True |  | Unique ID |
| PaperFormatID | INT(10,0) | True |  | False | PAPER_FORMAT | Link to Paper Format for this Report Format (optional) |
| PrinterClassID | INT(10,0) | True |  | False | PRINTER_CLASS | Recommended printer class for the format (optional) |
| PrinterID | INT(10,0) | True |  | False | PRINTER | Recommended printer for the format (optional) |
| ReportFUID | NVARCHAR(36) | False |  | False |  | Link to parent Report. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_REPORT_FORMAT** on `ID`

## Foreign Keys (this table -> other)

- **FK_REPORT_FORMAT_PAPER_FORMAT** — REPORT_FORMAT -> PAPER_FORMAT (`PaperFormatID -> ID`)
- **FK_REPORT_FORMAT_PRINTER** — REPORT_FORMAT -> PRINTER (`PrinterID -> ID`)
- **FK_REPORT_FORMAT_PRINTER_CLASS** — REPORT_FORMAT -> PRINTER_CLASS (`PrinterClassID -> ID`)

## Referenced By (other tables -> this)

- **** —  (``)

## Business Keys (this table -> other)

- REPORT_FORMAT -> REPORT (`ReportFUID -> FUID`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_REPORT_FORMAT_PAPER_FORMAT** on `PaperFormatID`
- **IF_REPORT_FORMAT_PRINTER** on `PrinterID`
- **IF_REPORT_FORMAT_PRINTER_CLASS** on `PrinterClassID`
- **IF_REPORT_FORMAT_REPORT** on `ReportFUID`
