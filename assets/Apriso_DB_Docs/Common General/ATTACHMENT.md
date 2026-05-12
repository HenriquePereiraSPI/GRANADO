# ATTACHMENT

**Database:** Operational

**Description:** Contains references to the files that can be linked to different entities in the system using UNIT_ATTACHMENT table. Files are kept in the database or a filesystem.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| ClassId | INT(10,0) | True |  | False | ATTACHMENT_CLASS | Class of the attachment contents. Link the ATTACHMENT_CLASS table. |
| FileId | INT(10,0) | True |  | False | FILE_ | Link to the file contents. |
| FUID | NVARCHAR(36) | False | (newid()) | False |  | Apriso object unique Identifier for ATTACHMENT. |
| ID | INT(10,0) | False |  | True |  | Local Unique Key for the Attachment. |
| Name | NVARCHAR(260) | True |  | False |  | Name of the attachment. Non-unique. |
| ProgressStatus | INT(10,0) | True |  | False | PROGRESS_STATUS | The link to ProgressStatus. |
| SequenceNo | INT(10,0) | True |  | False |  | Attachment Sequence |
| Title | NVARCHAR(2000) | True |  | False |  | Attachment Title |
| UnitID | INT(10,0) | True |  | False | UNIT | Unique identifier of the Unit. |

## Primary Key

- **PK_ATTACHMENT** on `ID`

## Foreign Keys (this table -> other)

- **FK_ATTACHMENT_ATTACHMENT_CLASS** — ATTACHMENT -> ATTACHMENT_CLASS (`ClassId -> ID`)
- **FK_ATTACHMENT_FILE_** — ATTACHMENT -> FILE_ (`FileId -> ID`)
- **FK_ATTACHMENT_PROGRESS_STATUS** — ATTACHMENT -> PROGRESS_STATUS (`ProgressStatus -> ProgressStatus`)
- **FK_ATTACHMENT_UNIT_ID** — ATTACHMENT -> UNIT (`UnitID -> ID`)

## Referenced By (other tables -> this)

- **FK_UNIT_ATTACHMENT_ATTACHMENT** — UNIT_ATTACHMENT -> ATTACHMENT (`ATTACHMENTID -> ID`)

## Unique Indexes

- **UK_ATTACHMENT_FUID** on `FUID`

## Non-Unique Indexes

- **IF_ATTACHMENT_ATTACHMENT_CLASS** on `ClassId`
- **IF_ATTACHMENT_FILE_** on `FileId`
- **IF_ATTACHMENT_PROGRESS_STATUS** on `ProgressStatus`
- **IF_ATTACHMENT_UNIT_ID** on `UnitID`
