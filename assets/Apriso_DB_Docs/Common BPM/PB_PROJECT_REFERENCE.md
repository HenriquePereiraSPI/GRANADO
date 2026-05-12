# PB_PROJECT_REFERENCE

**Database:** Solution Authoring

**Description:** Defines references between Process Builder Projects.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| ID | INT(10,0) | False |  | True |  | Unique identifier of a record (key) in the table. |
| SourceProjectRevisionID | INT(10,0) | False |  | False | PB_PROJECT_REVISION | The ID of a PB Project that has a reference to another PB Project. |
| TargetProjectName | NVARCHAR(80) | True |  | False |  | Name of a PB Project that is referenced by a source PB Project. |
| TargetProjectRevision | NVARCHAR(80) | True |  | False |  | Revision of a PB Project that is referenced by a source PB Project. |
| TargetProjectRevisionID | INT(10,0) | True |  | False | PB_PROJECT_REVISION | Link to the PB_PROJECT_REVISION table. |

## Primary Key

- **PK_PB_PROJECT_REFERENCE** on `ID`

## Foreign Keys (this table -> other)

- **FK_PB_PROJECT_REVISION_PB_PROJECT_REFERENCES_S** — PB_PROJECT_REFERENCE -> PB_PROJECT_REVISION (`SourceProjectRevisionID -> ID`)
- **FK_PB_PROJECT_REVISION_PB_PROJECT_REFERENCES_T** — PB_PROJECT_REFERENCE -> PB_PROJECT_REVISION (`TargetProjectRevisionID -> ID`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_PB_PROJECT_REVISION_PB_PROJECT_REFERENCES_S** on `SourceProjectRevisionID`
- **IF_PB_PROJECT_REVISION_PB_PROJECT_REFERENCES_T** on `TargetProjectRevisionID`
