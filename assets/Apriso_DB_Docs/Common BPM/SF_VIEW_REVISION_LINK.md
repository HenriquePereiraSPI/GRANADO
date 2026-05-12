# SF_VIEW_REVISION_LINK

**Database:** Solution Authoring

**Description:** Links Views with a Project revision and a Module, and determines a default revision of an entity.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| ID | INT(10,0) | False |  | True |  | Unique identifier of a record (key) in the table. |
| InPackageDefinition | BIT | False | ((0)) | False |  | Indicates if a View is included in a GPM package definition. |
| IsDefaultRevision | BIT | False |  | False |  | Indicates if a View revision is default or not. |
| ModuleID | INT(10,0) | True |  | False | PB_PROJECT_REVISION_MODULE | Link to the PB_PROJECT_REVISION_MODULE table. |
| ProjectRevisionID | INT(10,0) | True |  | False | PB_PROJECT_REVISION | Link to the PB_PROJECT_REVISION table. |
| ViewRevisionID | INT(10,0) | False |  | False | SF_VIEW_REVISION | Link to the VIEW_REVISION table. |

## Primary Key

- **PK_SF_VIEW_REVISION_LINK** on `ID`

## Foreign Keys (this table -> other)

- **FK_SF_VIEW_REVISION_LINK_OPERATION** — SF_VIEW_REVISION_LINK -> SF_VIEW_REVISION (`ViewRevisionID -> ID`)
- **FK_SF_VIEW_REVISION_LINK_PB_PROJECT_REVISION** — SF_VIEW_REVISION_LINK -> PB_PROJECT_REVISION (`ProjectRevisionID -> ID`)
- **FK_SF_VIEW_REVISION_LINK_PB_PROJECT_REVISION_MODULE** — SF_VIEW_REVISION_LINK -> PB_PROJECT_REVISION_MODULE (`ModuleID -> ID`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **UX_SF_VIEW_REVISION_LINK** on `ViewRevisionID, ProjectRevisionID`

## Non-Unique Indexes

- **IF_SF_VIEW_REVISION_LINK_PB_PROJECT_REVISION** on `ProjectRevisionID`
- **IF_SF_VIEW_REVISION_LINK_PB_PROJECT_REVISION_MODULE** on `ModuleID`
