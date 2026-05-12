# SF_SCREEN

**Database:** Solution Authoring

**Description:** Stores definition of a Screen.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| FUID | NVARCHAR(36) | False |  | False |  | Unique identifier of a Screen revision. |
| ID | INT(10,0) | False |  | True |  | Unique identifier of a record (key) in the table. |
| Name | NVARCHAR(80) | False |  | False |  | Unique name of a Screen. |
| ProjectID | INT(10,0) | True |  | False | PB_PROJECT | Link to the PB_PROJECT table. |

## Primary Key

- **PK_SF_SCREEN** on `ID`

## Foreign Keys (this table -> other)

- **FK_SF_SCREEN_PB_PROJECT** — SF_SCREEN -> PB_PROJECT (`ProjectID -> ID`)

## Referenced By (other tables -> this)

- **FK_BUSINESS_OBJECT_SF_SCREEN** — BUSINESS_OBJECT -> SF_SCREEN (`SFScreenID -> ID`)
- **FK_SF_SCREEN_ACTION_SF_SCREEN** — SF_SCREEN_ACTION -> SF_SCREEN (`NextScreenID -> ID`)
- **FK_SF_SCREEN_PANEL_VIEW_ACTION_SF_SCREEN** — SF_SCREEN_PANEL_ACTION -> SF_SCREEN (`NextScreenID -> ID`)
- **FK_SF_SCREEN_REVISION_SF_SCREEN** — SF_SCREEN_REVISION -> SF_SCREEN (`ScreenID -> ID`)
- **FK_SF_VIEW_ACTION_SF_SCREEN** — SF_VIEW_ACTION -> SF_SCREEN (`TargetScreenID -> ID`)

## Unique Indexes

- **UX_SF_SCREEN** on `Name, ProjectID`
- **UX_SF_SCREEN_FUID** on `FUID`

## Non-Unique Indexes

- **IF_SF_SCREEN_PB_PROJECT** on `ProjectID`
