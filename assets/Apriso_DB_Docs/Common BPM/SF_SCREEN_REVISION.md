# SF_SCREEN_REVISION

**Database:** Solution Authoring

**Description:** Stores information about Screen revisions.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| Checksum | NVARCHAR(36) | False |  | False |  | The entity's checksum used for specific entity version comparison between Apriso databases. It changes every time the entity changes. |
| CompilationHost | NVARCHAR(40) | True |  | False |  | A string identifying computer where compilation (release) was done. Name of the last environment where the entity's status was changed to Active or Prototype. |
| CompilationMask | NVARCHAR(40) | True |  | False |  | Contains string with the asterisk '*' character. |
| CompilationVersion | INT(10,0) | True |  | False |  | An auto incremented number of an entity's version increased whenever the entity's status is changed to Active or Prototype. |
| Description | NVARCHAR(2000) | True |  | False |  | Description of the Screen revision. |
| DocumentationID | INT(10,0) | True |  | False | PROCESS_DOCUMENTATION | Link to the Screen documentation. |
| FUID | NVARCHAR(36) | False |  | False |  | Unique identifier of a Screen revision. |
| HeaderViewID | INT(10,0) | True |  | False | SF_VIEW | Link to the Header View displayed on the Panel. |
| HeaderViewRevisionID | INT(10,0) | True |  | False | SF_VIEW_REVISION | Link to the Header View revision displayed on the Panel. |
| ID | INT(10,0) | False |  | True |  | Unique identifier of a record (key) in the table. |
| Instance | NVARCHAR(50) | True |  | False |  | Name of a Screen instance. |
| IsTemplate | BIT | False | ((0)) | False |  | The flag indicating if a Screen is a template. |
| Landing | BIT | True |  | False |  | Indicates if a Screen is the Base Screen. |
| LastAuthorBy | NVARCHAR(50) | True |  | False |  | The user which last updated the entity. |
| LastAuthorOn | DATETIME | True |  | False |  | The date when the entity was last updated. |
| LayoutDefinition | NVARCHAR | True |  | False |  | Cached Layout version. |
| LayoutID | INT(10,0) | True |  | False | SF_LAYOUT | Linked Layout ID. |
| LayoutRevisionID | INT(10,0) | True |  | False | SF_LAYOUT_REVISION | Link to the SF_LAYOUT_REVISION table. |
| NavigationType | SMALLINT(5,0) | False |  | False |  | Screen navigation type. It can be: 0 - Home, 1 - Sub-Portal, 2 - Normal, 3 - Intermediate, 4 - Loop, 5 - Loop Level 2, 6 - Loop Level 3. |
| OnInitializeDFCID | INT(10,0) | True |  | False | DFC | Link to the DFC table. |
| OnInitializeDFCRevisionID | INT(10,0) | True |  | False | DFC_REVISION | Link to the DFC_REVISION table. |
| OnInitializeScriptFunction | NVARCHAR(500) | True |  | False |  | Code of an Action Script Function to be executed before the Screen is initialized. |
| OnLoadDFCID | INT(10,0) | True |  | False | DFC | Link to the DFC table. |
| OnLoadDFCRevisionID | INT(10,0) | True |  | False | DFC_REVISION | Link to the DFC_REVISION table. |
| OnLoadScriptFunction | NVARCHAR(500) | True |  | False |  | Code of an Action Script Function to be executed each time the Screen is loaded. |
| Properties | NVARCHAR | True |  | False |  | Additional properties. |
| QuickAccess | BIT | False | ((0)) | False |  | Indicates a quick access of a Screen revision. |
| Revision | NVARCHAR(80) | False |  | False |  | Revision of a Screen. |
| RevisionStatusID | SMALLINT(5,0) | False |  | False | REVISION_STATUS | Status of the Screen revision. It can be: 0 - Design in Progress, 1 - Active, 2 - Cancelled, 3 - On Hold, 4 - Prototype, 5 - Compiling In Process, 6 - Development in Progress. |
| ScreenID | INT(10,0) | False |  | False | SF_SCREEN | Link to the SF_SCREEN. |
| SoundEffectType | SMALLINT(5,0) | False |  | False |  | Type of a sound effect. |
| TitleTextID | INT(10,0) | True |  | False |  | A descriptive Screen title. |

## Primary Key

- **PK_SF_SCREEN_REVISION** on `ID`

## Foreign Keys (this table -> other)

- **FK_SF_SCREEN_REVISION_DFC_ONINIT** — SF_SCREEN_REVISION -> DFC (`OnInitializeDFCID -> ID`)
- **FK_SF_SCREEN_REVISION_DFC_ONLOAD** — SF_SCREEN_REVISION -> DFC (`OnLoadDFCID -> ID`)
- **FK_SF_SCREEN_REVISION_DFC_REVISION_ONINIT** — SF_SCREEN_REVISION -> DFC_REVISION (`OnInitializeDFCRevisionID -> ID`)
- **FK_SF_SCREEN_REVISION_DFC_REVISION_ONLOAD** — SF_SCREEN_REVISION -> DFC_REVISION (`OnLoadDFCRevisionID -> ID`)
- **FK_SF_SCREEN_REVISION_PROCESS_DOCUMENTATION** — SF_SCREEN_REVISION -> PROCESS_DOCUMENTATION (`DocumentationID -> ID`)
- **FK_SF_SCREEN_REVISION_REVISION_STATUS** — SF_SCREEN_REVISION -> REVISION_STATUS (`RevisionStatusID -> ID`)
- **FK_SF_SCREEN_REVISION_SF_LAYOUT** — SF_SCREEN_REVISION -> SF_LAYOUT (`LayoutID -> ID`)
- **FK_SF_SCREEN_REVISION_SF_LAYOUT_REVISION** — SF_SCREEN_REVISION -> SF_LAYOUT_REVISION (`LayoutRevisionID -> ID`)
- **FK_SF_SCREEN_REVISION_SF_SCREEN** — SF_SCREEN_REVISION -> SF_SCREEN (`ScreenID -> ID`)
- **FK_SF_SCREEN_REVISION_SF_VIEW** — SF_SCREEN_REVISION -> SF_VIEW (`HeaderViewID -> ID`)
- **FK_SF_SCREEN_REVISION_SF_VIEW_REVISION** — SF_SCREEN_REVISION -> SF_VIEW_REVISION (`HeaderViewRevisionID -> ID`)

## Referenced By (other tables -> this)

- **FK_BUSINESS_OBJECT_SF_SCREEN_REVISION** — BUSINESS_OBJECT -> SF_SCREEN_REVISION (`SFScreenRevisionID -> ID`)
- **FK_SF_SCREEN_ACTION_SF_SCREEN_REVISION** — SF_SCREEN_ACTION -> SF_SCREEN_REVISION (`ScreenRevisionID -> ID`)
- **FK_SF_SCREEN_ACTION_SF_SCREEN_REVISION1** — SF_SCREEN_ACTION -> SF_SCREEN_REVISION (`NextScreenRevisionID -> ID`)
- **FK_SF_SCREEN_CATEGORY_SF_SCREEN_REVISION** — SF_SCREEN_CATEGORY -> SF_SCREEN_REVISION (`ScreenRevisionID -> ID`)
- **FK_SF_SCREEN_PANEL_VIEW_ACTION_SF_SCREEN_REVISION** — SF_SCREEN_PANEL_ACTION -> SF_SCREEN_REVISION (`NextScreenRevisionID -> ID`)
- **FK_SF_SCREEN_REV_PARAMETER_SF_SCREEN_REVISION** — SF_SCREEN_PARAMETER -> SF_SCREEN_REVISION (`ScreenRevisionID -> ID`)
- **FK_SF_SCREEN_REVISION_LINK_OPERATION** — SF_SCREEN_REVISION_LINK -> SF_SCREEN_REVISION (`ScreenRevisionID -> ID`)
- **FK_SF_SCREEN_ROLE_SF_SCREEN_REVISION** — SF_SCREEN_ROLE -> SF_SCREEN_REVISION (`ScreenRevisionID -> ID`)
- **FK_SF_SCREEN_VIEW_SF_SCREEN_REVISION** — SF_SCREEN_PANEL -> SF_SCREEN_REVISION (`ScreenRevisionID -> ID`)
- **FK_SF_VIEW_ACTION_SF_SCREEN_REVISION** — SF_VIEW_ACTION -> SF_SCREEN_REVISION (`TargetScreenRevisionID -> ID`)

## Unique Indexes

- **UX_SF_SCREEN_REVISION** on `ScreenID, Revision`
- **UX_SF_SCREEN_REVISION_FUID** on `FUID`

## Non-Unique Indexes

- **IF_SF_SCREEN_REVISION_DFC_ONINIT** on `OnInitializeDFCID`
- **IF_SF_SCREEN_REVISION_DFC_ONLOAD** on `OnLoadDFCID`
- **IF_SF_SCREEN_REVISION_DFC_REVISION_ONINIT** on `OnInitializeDFCRevisionID`
- **IF_SF_SCREEN_REVISION_DFC_REVISION_ONLOAD** on `OnLoadDFCRevisionID`
- **IF_SF_SCREEN_REVISION_PROCESS_DOCUMENTATION** on `DocumentationID`
- **IF_SF_SCREEN_REVISION_REVISION_STATUS** on `RevisionStatusID`
- **IF_SF_SCREEN_REVISION_SF_LAYOUT** on `LayoutID`
- **IF_SF_SCREEN_REVISION_SF_LAYOUT_REVISION** on `LayoutRevisionID`
- **IF_SF_SCREEN_REVISION_SF_VIEW** on `HeaderViewID`
- **IF_SF_SCREEN_REVISION_SF_VIEW_REVISION** on `HeaderViewRevisionID`
