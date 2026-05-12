# FILE_

**Database:** Operational

**Description:** The table where all files are stored in their binary format.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| Content | VARBINARY | True |  | False |  | Binary content of the file. |
| FormatID | INT(10,0) | False |  | False | FILE_FORMAT | Type of the file (format). Link to the FILE_FORMAT table. |
| ID | INT(10,0) | False |  | True |  | Local Unique Key for the File. |
| UnitID | INT(10,0) | True |  | False | UNIT | Unique identifier of the Unit. |
| URL | NVARCHAR(2000) | True |  | False |  | URL to the resource (external location). |

## Primary Key

- **PK_FILE_** on `ID`

## Foreign Keys (this table -> other)

- **FK_FILE__FILE_FORMAT** — FILE_ -> FILE_FORMAT (`FormatID -> ID`)
- **FK_FILE__UNIT_ID** — FILE_ -> UNIT (`UnitID -> ID`)

## Referenced By (other tables -> this)

- **FK_ATTACHMENT_FILE_** — ATTACHMENT -> FILE_ (`FileId -> ID`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_FILE__FILE_FORMAT** on `FormatID`
- **IF_FILE__UNIT_ID** on `UnitID`
