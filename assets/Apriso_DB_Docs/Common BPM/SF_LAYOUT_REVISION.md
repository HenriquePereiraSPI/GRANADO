# SF_LAYOUT_REVISION

**Database:** Solution Authoring

**Description:** Stores information about Layout revisions.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| Checksum | NVARCHAR(36) | False |  | False |  | The entity's checksum used for specific entity version comparison between Apriso databases. It changes every time the entity changes. |
| CompilationHost | NVARCHAR(40) | True |  | False |  | this is string identifying computer where last save occured |
| CompilationMask | NVARCHAR(40) | True |  | False |  | this field will contain string with star (*) character |
| CompilationVersion | INT(10,0) | True |  | False |  | this is value replacing star (*) character in CompilationMask |
| Description | NVARCHAR(2000) | True |  | False |  | Description of the Layout. |
| DocumentationID | INT(10,0) | True |  | False | PROCESS_DOCUMENTATION | Link to the Layout documentation. |
| FUID | NVARCHAR(36) | False |  | False |  | Unique identifier of a Layout revision. |
| HeaderViewID | INT(10,0) | True |  | False | SF_VIEW | Link to the Header View displayed on the Panel. |
| HeaderViewRevisionID | INT(10,0) | True |  | False | SF_VIEW_REVISION | Link to the Header View revision displayed on the Panel. |
| ID | INT(10,0) | False |  | True |  | Unique identifier of a record (key) in the table. |
| IsTemplate | BIT | False | ((0)) | False |  | The flag indicating if a Layout is a template. |
| LastAuthorBy | NVARCHAR(50) | True |  | False |  | The user which last updated the entity. |
| LastAuthorOn | DATETIME | True |  | False |  | The date when the entity was last updated. |
| LayoutID | INT(10,0) | False |  | False | SF_LAYOUT | Link to the SF_LAYOUT. |
| Revision | NVARCHAR(80) | False |  | False |  | Revision of a Layout. |
| RevisionStatusID | SMALLINT(5,0) | False |  | False | REVISION_STATUS | Status of the Layout revision. It can be: 0 - Design in Progress, 1 - Active, 2 - Cancelled, 3 - On Hold, 4 - Prototype, 5 - Compiling In Process, 6 - Development in Progress. |
| RootPanelID | INT(10,0) | True |  | False |  | Link to the root Panel of the Layout. |
| TitleTextID | INT(10,0) | True |  | False |  | A descriptive Layout title. |

## Primary Key

- **PK_SF_LAYOUT_REVISION** on `ID`

## Foreign Keys (this table -> other)

- **FK_SF_LAYOUT_REVISION_LAYOUT** — SF_LAYOUT_REVISION -> SF_LAYOUT (`LayoutID -> ID`)
- **FK_SF_LAYOUT_REVISION_PROCESS_DOCUMENTATION** — SF_LAYOUT_REVISION -> PROCESS_DOCUMENTATION (`DocumentationID -> ID`)
- **FK_SF_LAYOUT_REVISION_REVISION_STATUS** — SF_LAYOUT_REVISION -> REVISION_STATUS (`RevisionStatusID -> ID`)
- **FK_SF_LAYOUT_REVISION_SF_VIEW** — SF_LAYOUT_REVISION -> SF_VIEW (`HeaderViewID -> ID`)
- **FK_SF_LAYOUT_REVISION_SF_VIEW_REVISION** — SF_LAYOUT_REVISION -> SF_VIEW_REVISION (`HeaderViewRevisionID -> ID`)

## Referenced By (other tables -> this)

- **FK_SF_LAYOUT_CATEGORY_SF_LAYOUT_REVISION** — SF_LAYOUT_CATEGORY -> SF_LAYOUT_REVISION (`LayoutRevisionID -> ID`)
- **FK_SF_LAYOUT_PANEL_SF_LAYOUT_REVISION** — SF_LAYOUT_PANEL -> SF_LAYOUT_REVISION (`LayoutRevisionID -> ID`)
- **FK_SF_LAYOUT_REVISION_LINK_OPERATION** — SF_LAYOUT_REVISION_LINK -> SF_LAYOUT_REVISION (`LayoutRevisionID -> ID`)
- **FK_SF_SCREEN_REVISION_SF_LAYOUT_REVISION** — SF_SCREEN_REVISION -> SF_LAYOUT_REVISION (`LayoutRevisionID -> ID`)

## Unique Indexes

- **UX_SF_LAYOUT_REVISION** on `LayoutID, Revision`
- **UX_SF_LAYOUT_REVISION_FUID** on `FUID`

## Non-Unique Indexes

- **IF_SF_LAYOUT_REVISION_PROCESS_DOCUMENTATION** on `DocumentationID`
- **IF_SF_LAYOUT_REVISION_REVISION_STATUS** on `RevisionStatusID`
- **IF_SF_LAYOUT_REVISION_SF_VIEW** on `HeaderViewID`
- **IF_SF_LAYOUT_REVISION_SF_VIEW_REVISION** on `HeaderViewRevisionID`
