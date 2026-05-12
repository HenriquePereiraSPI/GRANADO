# PB_PROJECT_REVISION_MODULE

**Database:** Solution Authoring

**Description:** Defines Modules for a particular Project revision.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| ID | INT(10,0) | False |  | True |  | Unique identifier of a record (key) in a table. |
| InitScript | NVARCHAR(600) | True |  | False |  | Name of an Action Script and Function executed while an Offline Screen is loaded. |
| IsOffline | BIT | False |  | False |  | Indicates if a Module type is Offline. |
| ModuleType | SMALLINT(5,0) | False |  | False |  | Determines a type of a Module. |
| Name | NVARCHAR(80) | False |  | False |  | Name of the Module. |
| OfflineLoadDFCCode | NVARCHAR(80) | True |  | False |  | The code of the Load DFC that is linked to an Offline Module. |
| OfflineLoadDFCProjectCode | NVARCHAR(80) | True |  | False |  | The code of the Project in which the linked Load DFC exists. |
| OfflineSaveDFCCode | NVARCHAR(80) | True |  | False |  | The code of the Save DFC that is linked to an Offline Module. |
| OfflineSaveDFCProjectCode | NVARCHAR(80) | True |  | False |  | The code of the Project in which the linked Save DFC exists. |
| ProjectRevisionID | INT(10,0) | False |  | False | PB_PROJECT_REVISION | Link to the PB_PROJECT_REVISION table. |
| PublishVersionStamp | DATETIME | True |  | False |  | The date (with time) when the Offline Module was published. |

## Primary Key

- **PK_PB_PROJECT_REVISION_MODULE** on `ID`

## Foreign Keys (this table -> other)

- **FK_PB_PROJECT_REVISION_MODULE_PB_PROJECT_REVISION** — PB_PROJECT_REVISION_MODULE -> PB_PROJECT_REVISION (`ProjectRevisionID -> ID`)

## Referenced By (other tables -> this)

- **FK_DFC_REVISION_LINK_PB_PROJECT_REVISION_MODULE** — DFC_REVISION_LINK -> PB_PROJECT_REVISION_MODULE (`ModuleID -> ID`)
- **FK_PB_ASSET_REVISION_LINK_PB_PROJECT_REVISION_MODULE** — PB_ASSET_REVISION_LINK -> PB_PROJECT_REVISION_MODULE (`ModuleID -> ID`)
- **FK_PB_PROJECT_REVISION_MODULE_REFERENCE_MODULE** — PB_PROJECT_REVISION_MODULE_REFERENCE -> PB_PROJECT_REVISION_MODULE (`ModuleID -> ID`)
- **FK_PB_PROJECT_REVISION_MODULE_REFERENCE_REF_MODULE** — PB_PROJECT_REVISION_MODULE_REFERENCE -> PB_PROJECT_REVISION_MODULE (`ReferencedModuleID -> ID`)
- **FK_SF_LAYOUT_REVISION_LINK_PB_PROJECT_REVISION_MODULE** — SF_LAYOUT_REVISION_LINK -> PB_PROJECT_REVISION_MODULE (`ModuleID -> ID`)
- **FK_SF_SCREEN_REVISION_LINK_PB_PROJECT_REVISION_MODULE** — SF_SCREEN_REVISION_LINK -> PB_PROJECT_REVISION_MODULE (`ModuleID -> ID`)
- **FK_SF_VIEW_REVISION_LINK_PB_PROJECT_REVISION_MODULE** — SF_VIEW_REVISION_LINK -> PB_PROJECT_REVISION_MODULE (`ModuleID -> ID`)

## Unique Indexes

- **UX_PB_PROJECT_REVISION_MODULE_NAME** on `Name, ProjectRevisionID`

## Non-Unique Indexes

- **IF_PB_PROJECT_REVISION_MODULE_PB_PROJECT_REVISION** on `ProjectRevisionID`
