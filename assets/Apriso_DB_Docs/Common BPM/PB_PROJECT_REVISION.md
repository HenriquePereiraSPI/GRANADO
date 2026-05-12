# PB_PROJECT_REVISION

**Database:** Solution Authoring

**Description:** Stores information about Process Builder Project revisions.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| ChangeVersionNumber | INT(10,0) | False | ((0)) | False |  | The number of changes of a PB Project structure. |
| Definition | NVARCHAR | True |  | False |  | Definition of a PB Project. |
| Description | NVARCHAR | True |  | False |  | Description of a PB Project |
| ID | INT(10,0) | False |  | True |  | Unique identifier of a record (key) in the table. |
| IsDefaultRevision | BIT | False | ((0)) | False |  | Indicates if a revision is default or not. |
| ProjectID | INT(10,0) | False |  | False | PB_PROJECT | Link to the PB_PROJECT table. |
| Revision | NVARCHAR(80) | False |  | False |  | Revision of a PB Project. |

## Primary Key

- **PK_PB_PROJECT_REVISION** on `ID`

## Foreign Keys (this table -> other)

- **FK_PB_PROJECT_REVISION_PB_PROJECT** — PB_PROJECT_REVISION -> PB_PROJECT (`ProjectID -> ID`)

## Referenced By (other tables -> this)

- **FK_ACTION_SCRIPT_CATEGORY_PB_PROJECT_REVISION** — ACTION_SCRIPT_CATEGORY -> PB_PROJECT_REVISION (`ProjectRevisionID -> ID`)
- **FK_ACTION_SCRIPT_PB_PROJECT_REVISION** — ACTION_SCRIPT -> PB_PROJECT_REVISION (`ProjectRevisionID -> ID`)
- **FK_BUSINESS_OBJECT_PB_PROJECT_REVISION** — BUSINESS_OBJECT -> PB_PROJECT_REVISION (`ProjectRevisionID -> ID`)
- **FK_DFC_REVISION_LINK_PB_PROJECT_REVISION** — DFC_REVISION_LINK -> PB_PROJECT_REVISION (`ProjectRevisionID -> ID`)
- **FK_PB_ASSET_REVISION_LINK_PB_PROJECT_REVISION** — PB_ASSET_REVISION_LINK -> PB_PROJECT_REVISION (`ProjectRevisionID -> ID`)
- **FK_PB_PROJECT_REVISION_MODULE_PB_PROJECT_REVISION** — PB_PROJECT_REVISION_MODULE -> PB_PROJECT_REVISION (`ProjectRevisionID -> ID`)
- **FK_PB_PROJECT_REVISION_PB_PROJECT_REFERENCES_S** — PB_PROJECT_REFERENCE -> PB_PROJECT_REVISION (`SourceProjectRevisionID -> ID`)
- **FK_PB_PROJECT_REVISION_PB_PROJECT_REFERENCES_T** — PB_PROJECT_REFERENCE -> PB_PROJECT_REVISION (`TargetProjectRevisionID -> ID`)
- **FK_PB_PROJECT_REVISION_STATUS_PB_PROJECT_REVISION** — PB_PROJECT_REVISION_STATUS -> PB_PROJECT_REVISION (`ProjectRevisionID -> ID`)
- **FK_SF_LAYOUT_REVISION_LINK_PB_PROJECT_REVISION** — SF_LAYOUT_REVISION_LINK -> PB_PROJECT_REVISION (`ProjectRevisionID -> ID`)
- **FK_SF_SCREEN_REVISION_LINK_PB_PROJECT_REVISION** — SF_SCREEN_REVISION_LINK -> PB_PROJECT_REVISION (`ProjectRevisionID -> ID`)
- **FK_SF_VIEW_REVISION_LINK_PB_PROJECT_REVISION** — SF_VIEW_REVISION_LINK -> PB_PROJECT_REVISION (`ProjectRevisionID -> ID`)

## Business Keys (other -> this table)

- PB_PROJECT_REVISION_CONTEXT -> PB_PROJECT_REVISION (`Revision -> Revision`)

## Unique Indexes

- **UX_PB_PROJECT_REVISION** on `ProjectID, Revision`

## Non-Unique Indexes

- **** on ``
