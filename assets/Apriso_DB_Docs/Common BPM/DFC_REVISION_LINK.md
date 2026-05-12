# DFC_REVISION_LINK

**Database:** Solution Authoring

**Description:** Links data flow controls (DFCs) with a project revision and a module, and determines a default revision of the entity.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| DFCRevisionID | INT(10,0) | False |  | False | DFC_REVISION | Link to the DFC_REVISION table. |
| ID | INT(10,0) | False |  | True |  | Unique identifier of the record (key). |
| InPackageDefinition | BIT | False | ((0)) | False |  | Indicates if a DFC is included in a GPM package definition. |
| IsDefaultRevision | BIT | False |  | False |  | Indicates if a DFC revision is default or not. |
| ModuleID | INT(10,0) | True |  | False | PB_PROJECT_REVISION_MODULE | Link to the PB_PROJECT_REVISION_MODULE table. |
| ProjectRevisionID | INT(10,0) | True |  | False | PB_PROJECT_REVISION | Link to the PB_PROJECT_REVISION table. |

## Primary Key

- **PK_DFC_REVISION_LINK** on `ID`

## Foreign Keys (this table -> other)

- **FK_DFC_REVISION_LINK_DFC_REVISION** — DFC_REVISION_LINK -> DFC_REVISION (`DFCRevisionID -> ID`)
- **FK_DFC_REVISION_LINK_PB_PROJECT_REVISION** — DFC_REVISION_LINK -> PB_PROJECT_REVISION (`ProjectRevisionID -> ID`)
- **FK_DFC_REVISION_LINK_PB_PROJECT_REVISION_MODULE** — DFC_REVISION_LINK -> PB_PROJECT_REVISION_MODULE (`ModuleID -> ID`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **UX_DFC_REVISION_LINK** on `DFCRevisionID, ProjectRevisionID`

## Non-Unique Indexes

- **IF_DFC_REVISION_LINK_DFC_REVISION** on `DFCRevisionID`
- **IF_DFC_REVISION_LINK_PB_PROJECT_REVISION** on `ProjectRevisionID`
- **IF_DFC_REVISION_LINK_PB_PROJECT_REVISION_MODULE** on `ModuleID`
