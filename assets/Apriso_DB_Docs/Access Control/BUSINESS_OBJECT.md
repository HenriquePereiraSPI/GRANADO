# BUSINESS_OBJECT

**Database:** Solution Authoring

**Description:** This table contains FlexParts defined in DELMIA Apriso. Use FlexParts M&M screen in DELMIA Apriso Desktop Client to manage the contents of this table. For more information on FlexParts, refer to the FlexParts Help.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| Alias | NVARCHAR(255) | False |  | False |  | Name of Business Object |
| AllowExternalUsage | BIT | False | ((0)) | False |  | Flag describes if Business Object can be used Externally |
| BusinessObjectContextID | INT(10,0) | True |  | False | BUSINESS_OBJECT_CONTEXT | Link to Business Object Context. |
| CubeViewID | INT(10,0) | True |  | False | CUBE_VIEW | Link to Cube View ID |
| DFCID | INT(10,0) | True |  | False | DFC | Link to the DFC table. |
| DFCRevisionID | INT(10,0) | True |  | False | DFC_REVISION | Link to the DFC_REVISION table. |
| ExternalInputs | NVARCHAR | True |  | False |  | Serialized information about expected inputs for Business Object |
| ID | INT(10,0) | False |  | True |  | Primary Key Business Object |
| ProjectID | INT(10,0) | True |  | False | PB_PROJECT | Link to the PB_PROJECT table. |
| ProjectRevisionID | INT(10,0) | True |  | False | PB_PROJECT_REVISION | Link to the PB_PROJECT_REVISION table. |
| ReportID | INT(10,0) | True |  | False | REPORT | Link to Report |
| ScreenID | INT(10,0) | True |  | False | SCREEN | Link to Screen |
| SFScreenID | INT(10,0) | True |  | False | SF_SCREEN | Link to Screen Framework Screen. |
| SFScreenRevisionID | INT(10,0) | True |  | False | SF_SCREEN_REVISION | Link to Screen Framework Screen Revision. |
| SupportedPlatforms | SMALLINT(5,0) | True |  | False |  | Determines where the FlexPart will be displayed. |
| TabId | INT(10,0) | True |  | False | Tabs | Link to FlexView definition. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |
| Type | SMALLINT(5,0) | True |  | False |  | Type of FlexPart: 1 - Operation, 2 - M&M Screen, 3 - Report, 4 - FlexView, 5 - Web Dynamic Grid, 6 - Screen, 7 - Dashboard, 8 - Offline Screen, 9 - Cube View |

## Primary Key

- **PK_BUSINESS_OBJECT_ID** on `ID`

## Foreign Keys (this table -> other)

- **FK_BUSINESS_OBJECT_BUSINESS_OBJECT_CONTEXT** — BUSINESS_OBJECT -> BUSINESS_OBJECT_CONTEXT (`BusinessObjectContextID -> ID`)
- **FK_BUSINESS_OBJECT_CUBE_VIEW** — BUSINESS_OBJECT -> CUBE_VIEW (`CubeViewID -> ID`)
- **FK_BUSINESS_OBJECT_DFC** — BUSINESS_OBJECT -> DFC (`DFCID -> ID`)
- **FK_BUSINESS_OBJECT_DFC_REVISION** — BUSINESS_OBJECT -> DFC_REVISION (`DFCRevisionID -> ID`)
- **FK_BUSINESS_OBJECT_PB_PROJECT** — BUSINESS_OBJECT -> PB_PROJECT (`ProjectID -> ID`)
- **FK_BUSINESS_OBJECT_PB_PROJECT_REVISION** — BUSINESS_OBJECT -> PB_PROJECT_REVISION (`ProjectRevisionID -> ID`)
- **FK_BUSINESS_OBJECT_REPORT** — BUSINESS_OBJECT -> REPORT (`ReportID -> ID`)
- **FK_BUSINESS_OBJECT_SCREEN** — BUSINESS_OBJECT -> SCREEN (`ScreenID -> ID`)
- **FK_BUSINESS_OBJECT_SF_SCREEN** — BUSINESS_OBJECT -> SF_SCREEN (`SFScreenID -> ID`)
- **FK_BUSINESS_OBJECT_SF_SCREEN_REVISION** — BUSINESS_OBJECT -> SF_SCREEN_REVISION (`SFScreenRevisionID -> ID`)
- **FK_BUSINESS_OBJECT_TABS** — BUSINESS_OBJECT -> Tabs (`TabId -> TabID`)

## Referenced By (other tables -> this)

- **FK_BUSINESS_OBJECT_ROLE_BUSINESS_OBJECT** — BUSINESS_OBJECT_ROLE -> BUSINESS_OBJECT (`BusinessObjectID -> ID`)
- **FK_CAPABILITY_ROLE_BUSINESS_OBJECT** — CAPABILITY_ROLE -> BUSINESS_OBJECT (`BusinessObjectID -> ID`)

## Business Keys (other -> this table)

- EMPLOYEE -> BUSINESS_OBJECT (`DashboardBusinessObjectAlias -> Alias`)
- WORK_INSTR_REV_BUSINESS_OBJ -> BUSINESS_OBJECT (`BusinessObjectAlias -> Alias`)

## Unique Indexes

- **UK_BUSINESS_OBJECT_ALIAS** on `Alias`

## Non-Unique Indexes

- **IF_BUSINESS_OBJECT_BUSINESS_OBJECT_CONTEXT** on `BusinessObjectContextID`
- **IF_BUSINESS_OBJECT_CUBE_VIEW** on `CubeViewID`
- **IF_BUSINESS_OBJECT_DFC** on `DFCID`
- **IF_BUSINESS_OBJECT_DFC_REVISION** on `DFCRevisionID`
- **IF_BUSINESS_OBJECT_PB_PROJECT** on `ProjectID`
- **IF_BUSINESS_OBJECT_PB_PROJECT_REVISION** on `ProjectRevisionID`
- **IF_BUSINESS_OBJECT_REPORT** on `ReportID`
- **IF_BUSINESS_OBJECT_SCREEN** on `ScreenID`
- **IF_BUSINESS_OBJECT_SF_SCREEN** on `SFScreenID`
- **IF_BUSINESS_OBJECT_SF_SCREEN_REVISION** on `SFScreenRevisionID`
- **IF_BUSINESS_OBJECT_TABS** on `TabId`
