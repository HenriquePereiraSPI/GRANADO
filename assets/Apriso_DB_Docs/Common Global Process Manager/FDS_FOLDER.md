# FDS_FOLDER

**Database:** Solution Authoring

**Description:** Contains information about Folders in GPM

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| Description | NVARCHAR(500) | True |  | False |  |  |
| DisplayProjectsRecursively | BIT | False |  | False |  |  |
| FUID | NVARCHAR(36) | False |  | False |  | Unique identifier of folder |
| ID | INT(10,0) | False |  | True |  | Primary key |
| Name | NVARCHAR(100) | False |  | False |  | The name of folder |
| ParentFolderID | INT(10,0) | True |  | False | FDS_FOLDER | Reference to parent folder |

## Primary Key

- **PK_FDS_FOLDER** on `ID`

## Foreign Keys (this table -> other)

- **FK_FDS_FOLDER_FDS_FOLDER** — FDS_FOLDER -> FDS_FOLDER (`ParentFolderID -> ID`)

## Referenced By (other tables -> this)

- **FK_FDS_FOLDER_FDS_FOLDER** — FDS_FOLDER -> FDS_FOLDER (`ParentFolderID -> ID`)
- **FK_FDS_PROJECT_FDS_FOLDER** — FDS_PROJECT -> FDS_FOLDER (`FolderID -> ID`)

## Unique Indexes

- **UK_FDS_FOLDER** on `FUID`

## Non-Unique Indexes

- **IF_FDS_FOLDER_FDS_FOLDER** on `ParentFolderID`
