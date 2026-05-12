# SF_VIEW_REVISION

**Database:** Solution Authoring

**Description:** Stores information about View revisions.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| Checksum | NVARCHAR(36) | False |  | False |  | The entity's checksum used for specific entity version comparison between Apriso databases. It changes every time the entity changes. |
| CompilationHost | NVARCHAR(40) | True |  | False |  | A string identifying computer where compilation (release) was done. Name of the last environment where the entity's status was changed to Active or Prototype. |
| CompilationMask | NVARCHAR(40) | True |  | False |  | Contains string with the asterisk '*' character. |
| CompilationVersion | INT(10,0) | True |  | False |  | An auto incremented number of an entity's version increased whenever the entity's status is changed to Active or Prototype. |
| CssClass | NVARCHAR(200) | True |  | False |  | CSS class assigned to a View revision. |
| Description | NVARCHAR(2000) | True |  | False |  | Description of the View. |
| DocumentationID | INT(10,0) | True |  | False | PROCESS_DOCUMENTATION | Link to the View documentation. |
| FUID | NVARCHAR(36) | False |  | False |  | Unique identifier of a View revision. |
| ID | INT(10,0) | False |  | True |  | Unique identifier of a record (key) in the table. |
| IsTemplate | BIT | False | ((0)) | False |  | The flag indicating if a View is a template. |
| LastAuthorBy | NVARCHAR(50) | True |  | False |  | The user which last updated the entity. |
| LastAuthorOn | DATETIME | True |  | False |  | The date when the entity was last updated. |
| Properties | NVARCHAR | True |  | False |  | Description of the View. |
| Revision | NVARCHAR(80) | False |  | False |  | Revision of a View. |
| RevisionStatusID | SMALLINT(5,0) | False |  | False | REVISION_STATUS | Status of the View revision. It can be: 0 - Design in Progress, 1 - Active, 2 - Cancelled, 3 - On Hold, 4 - Prototype, 5 - Compiling In Process, 6 - Development in Progress. |
| Style | NVARCHAR(2000) | True |  | False |  | Inline Style for a View revision. |
| TitleTextID | INT(10,0) | True |  | False |  | A descriptive View title. |
| Type_ | SMALLINT(5,0) | False |  | False |  | Type of a View revision. It can be: 0 - General, 1 - Form, 2 - Header, 3 - HTML, 4 - HTML Header. |
| ViewDefinition | NVARCHAR | True |  | False |  | PropertyBag for a View definition. |
| ViewDFCID | INT(10,0) | True |  | False | DFC | Link to the DFC table. |
| ViewDFCRevisionID | INT(10,0) | True |  | False | DFC_REVISION | Link to the DFC_REVISION table. |
| ViewID | INT(10,0) | False |  | False | SF_VIEW | Link to the SF_VIEW table. |

## Primary Key

- **PK_SF_VIEW_REVISION** on `ID`

## Foreign Keys (this table -> other)

- **FK_SF_VIEW_REVISION_DFC** — SF_VIEW_REVISION -> DFC (`ViewDFCID -> ID`)
- **FK_SF_VIEW_REVISION_DFC_REVISION** — SF_VIEW_REVISION -> DFC_REVISION (`ViewDFCRevisionID -> ID`)
- **FK_SF_VIEW_REVISION_PROCESS_DOCUMENTATION** — SF_VIEW_REVISION -> PROCESS_DOCUMENTATION (`DocumentationID -> ID`)
- **FK_SF_VIEW_REVISION_REVISION_STATUS** — SF_VIEW_REVISION -> REVISION_STATUS (`RevisionStatusID -> ID`)
- **FK_SF_VIEW_REVISION_SF_VIEW** — SF_VIEW_REVISION -> SF_VIEW (`ViewID -> ID`)

## Referenced By (other tables -> this)

- **FK_SF_LAYOUT_PANEL_SF_VIEW_REVISION** — SF_LAYOUT_PANEL -> SF_VIEW_REVISION (`DefaultViewRevisionID -> ID`)
- **FK_SF_LAYOUT_REVISION_SF_VIEW_REVISION** — SF_LAYOUT_REVISION -> SF_VIEW_REVISION (`HeaderViewRevisionID -> ID`)
- **FK_SF_SCREEN_ACTION_SF_VIEW_REVISION** — SF_SCREEN_ACTION -> SF_VIEW_REVISION (`PopupViewRevisionID -> ID`)
- **FK_SF_SCREEN_PANEL_SF_VIEW_REVISION** — SF_SCREEN_PANEL -> SF_VIEW_REVISION (`ViewRevisionID -> ID`)
- **FK_SF_SCREEN_PANEL_VIEW_ACTION_SF_VIEW_REVISION** — SF_SCREEN_PANEL_ACTION -> SF_VIEW_REVISION (`PopupViewRevisionID -> ID`)
- **FK_SF_SCREEN_REVISION_SF_VIEW_REVISION** — SF_SCREEN_REVISION -> SF_VIEW_REVISION (`HeaderViewRevisionID -> ID`)
- **FK_SF_VIEW_ACTION_SF_VIEW_REVISION** — SF_VIEW_ACTION -> SF_VIEW_REVISION (`ViewRevisionID -> ID`)
- **FK_SF_VIEW_ACTION_SF_VIEW_REVISION1** — SF_VIEW_ACTION -> SF_VIEW_REVISION (`PopupViewRevisionID -> ID`)
- **FK_SF_VIEW_CATEGORY_SF_VIEW_REVISION** — SF_VIEW_CATEGORY -> SF_VIEW_REVISION (`ViewRevisionID -> ID`)
- **FK_SF_VIEW_FORM_SF_VIEW_REVISION** — SF_VIEW_FORM -> SF_VIEW_REVISION (`ViewRevisionID -> ID`)
- **FK_SF_VIEW_REVISION** — SF_VIEW_REVISION_TRANSLATION -> SF_VIEW_REVISION (`ViewRevisionID -> ID`)
- **FK_SF_VIEW_REVISION_LINK_OPERATION** — SF_VIEW_REVISION_LINK -> SF_VIEW_REVISION (`ViewRevisionID -> ID`)

## Unique Indexes

- **UX_SF_VIEW_REVISION** on `ViewID, Revision`
- **UX_SF_VIEW_REVISION_FUID** on `FUID`

## Non-Unique Indexes

- **IF_SF_VIEW_REVISION_DFC** on `ViewDFCID`
- **IF_SF_VIEW_REVISION_DFC_REVISION** on `ViewDFCRevisionID`
- **IF_SF_VIEW_REVISION_PROCESS_DOCUMENTATION** on `DocumentationID`
- **IF_SF_VIEW_REVISION_REVISION_STATUS** on `RevisionStatusID`
