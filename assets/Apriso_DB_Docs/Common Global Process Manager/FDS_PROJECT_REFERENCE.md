# FDS_PROJECT_REFERENCE

**Database:** Solution Authoring

**Description:** Table contains information about cluster nodes on which the action has been processed.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| ProjectID | INT(10,0) | False |  | True | FDS_PROJECT | Link to Package Action. |
| ReferencedProjectFUID | NVARCHAR(36) | False |  | True |  | The referenced Project by FUID. |

## Primary Key

- **PK_FDS_PROJECT_REFERENCE** on `ProjectID, ReferencedProjectFUID`

## Foreign Keys (this table -> other)

- **FK_FDS_PROJECT_REFERENCE_FDS_PROJECT** — FDS_PROJECT_REFERENCE -> FDS_PROJECT (`ProjectID -> ID`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **** on ``
