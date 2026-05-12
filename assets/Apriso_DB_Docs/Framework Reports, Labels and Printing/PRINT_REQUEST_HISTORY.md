# PRINT_REQUEST_HISTORY

**Database:** Operational

**Description:** This table contains the various print request that have be sent by the users to the print engine. It contains the various attributes of the label or report printer as well as user fields populated when the printing is requested to help the user to retreive his print request if reprint is required. This table is used by the reprlnt feature of Apriso (this is to reprint a carbon copy of the previous document)

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| Content | NVARCHAR | True |  | False |  | Content of the printed label |
| DocumentID | INT(10,0) | True |  | False | DOCUMENT | Link to the DOCUMENT. |
| EmployeeID | INT(10,0) | True |  | False |  | Employee who printed the report |
| EquipmentID | INT(10,0) | True |  | False |  | Equipment that raised Print Request |
| ID | INT(10,0) | False |  | True |  | Unique identifier of a record (key) in a table |
| Key1 | NVARCHAR(50) | True |  | False |  | User field used to retrieve previously printed reports |
| Key2 | NVARCHAR(50) | True |  | False |  | User field used to retrieve previously printed reports |
| Key3 | NVARCHAR(50) | True |  | False |  | User field used to retrieve previously printed reports |
| Key4 | NVARCHAR(50) | True |  | False |  | User field used to retrieve previously printed reports |
| Key5 | NVARCHAR(50) | True |  | False |  | User field used to retrieve previously printed reports |
| OriginalPrintRequestID | INT(10,0) | True |  | False | PRINT_REQUEST_HISTORY | ID of the original Request (used for Reprint Requests) |
| PrinterID | INT(10,0) | True |  | False | PRINTER | Link to a printer |
| RaisedOn | DATETIME | True |  | False |  | Date when Print Request was raised on |
| ReportFUID | NVARCHAR(36) | True |  | False |  | Link to the REPORT table. |
| ReportTypeID | INT(10,0) | True |  | False |  | Link to type of the report |
| Request | NVARCHAR | True |  | False |  | Content of the print request |
| Requestor | NVARCHAR(50) | True |  | False |  | Name of the Component or Application that raised Print Request |

## Primary Key

- **PK_PRINT_REQUEST_HISTORY** on `ID`

## Foreign Keys (this table -> other)

- **FK_PRINT_REQUEST_HISTORY_DOCUMENT** — PRINT_REQUEST_HISTORY -> DOCUMENT (`DocumentID -> ID`)
- **FK_PRINT_REQUEST_HISTORY_PRINT_REQUEST_HISTORY** — PRINT_REQUEST_HISTORY -> PRINT_REQUEST_HISTORY (`OriginalPrintRequestID -> ID`)
- **FK_PRINT_REQUEST_HISTORY_PRINTER** — PRINT_REQUEST_HISTORY -> PRINTER (`PrinterID -> ID`)

## Referenced By (other tables -> this)

- **FK_PRINT_REQUEST_HISTORY_PRINT_REQUEST_HISTORY** — PRINT_REQUEST_HISTORY -> PRINT_REQUEST_HISTORY (`OriginalPrintRequestID -> ID`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_PRINT_REQUEST_HISTORY_DOCUMENT** on `DocumentID`
- **IF_PRINT_REQUEST_HISTORY_PRINT_REQUEST_HISTORY** on `OriginalPrintRequestID`
- **IF_PRINT_REQUEST_HISTORY_PRINTER** on `PrinterID`
- **IF_PRINT_REQUEST_HISTORY_REPORT** on `ReportFUID`
