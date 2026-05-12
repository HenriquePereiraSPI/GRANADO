# SF_LAYOUT_REVISION_LINK

**Database:** Solution Authoring

**Description:** Links Layouts with a Project revision and a Module, and determines a default revision of an entity.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| ID | INT(10,0) | False |  | True |  | Unique identifier of a record (key) in the table. |
| InPackageDefinition | BIT | False | ((0)) | False |  | Indicates if a Layout is included in a GPM package definition. |
| IsDefaultRevision | BIT | False |  | False |  | Indicates if a Layout revision is default or not. |
| LayoutRevisionID | INT(10,0) | False |  | False | SF_LAYOUT_REVISION | Link to the LAYOUT_REVISION table. |
| ModuleID | INT(10,0) | True |  | False | PB_PROJECT_REVISION_MODULE | Link to the PB_PROJECT_REVISION_MODULE table. |
| ProjectRevisionID | INT(10,0) | True |  | False | PB_PROJECT_REVISION | Link to the PB_PROJECT_REVISION table. |

## Primary Key

- **PK_SF_LAYOUT_REVISION_LINK** on `ID`

## Foreign Keys (this table -> other)

- **FK_SF_LAYOUT_REVISION_LINK_OPERATION** — SF_LAYOUT_REVISION_LINK -> SF_LAYOUT_REVISION (`LayoutRevisionID -> ID`)
- **FK_SF_LAYOUT_REVISION_LINK_PB_PROJECT_REVISION** — SF_LAYOUT_REVISION_LINK -> PB_PROJECT_REVISION (`ProjectRevisionID -> ID`)
- **FK_SF_LAYOUT_REVISION_LINK_PB_PROJECT_REVISION_MODULE** — SF_LAYOUT_REVISION_LINK -> PB_PROJECT_REVISION_MODULE (`ModuleID -> ID`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **UX_SF_LAYOUT_REVISION_LINK** on `ProjectRevisionID, LayoutRevisionID`

## Non-Unique Indexes

- **IF_SF_LAYOUT_REVISION_LINK_PB_PROJECT_REVISION** on `ProjectRevisionID`
- **IF_SF_LAYOUT_REVISION_LINK_PB_PROJECT_REVISION_MODULE** on `ModuleID`
