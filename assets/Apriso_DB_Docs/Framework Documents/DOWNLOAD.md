# DOWNLOAD

**Database:** Operational

**Description:** Used to store last DNC download information.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| DocumentID | INT(10,0) | False |  | True | DOCUMENT | Reference to a Document (DOCUMENT). |
| DownloadCount | INT(10,0) | True |  | False |  | The number of times the document has been downloaded. |
| LastDownloadBy | NVARCHAR(50) | True |  | False |  | User that last revised the document. |
| LastDownloadEquipmentID | INT(10,0) | True |  | False | EQUIPMENT | Reference to an Equipment (EQUIPMENT). |
| LastDownloadOn | DATETIME | True |  | False |  | Date document was last downloaded to an equipment. |

## Primary Key

- **PK_DOWNLOAD** on `DocumentID`

## Foreign Keys (this table -> other)

- **FK_DOWNLOAD_DOCUMENT** — DOWNLOAD -> DOCUMENT (`DocumentID -> ID`)
- **FK_DOWNLOAD_EQUIPMENT** — DOWNLOAD -> EQUIPMENT (`LastDownloadEquipmentID -> ID`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_DOWNLOAD_EQUIPMENT** on `LastDownloadEquipmentID`
