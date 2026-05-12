# SF_VIEW

**Database:** Solution Authoring

**Description:** Stores definition of a View.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| FUID | NVARCHAR(36) | False |  | False |  | Unique identifier of a View revision. |
| ID | INT(10,0) | False |  | True |  | Unique identifier of a record (key) in the table. |
| Name | NVARCHAR(80) | False |  | False |  | Unique name of a View. |
| ProjectID | INT(10,0) | True |  | False | PB_PROJECT | Link to the PB_PROJECT table. |

## Primary Key

- **PK_SF_VIEW** on `ID`

## Foreign Keys (this table -> other)

- **FK_SF_VIEW_PB_PROJECT** — SF_VIEW -> PB_PROJECT (`ProjectID -> ID`)

## Referenced By (other tables -> this)

- **FK_SF_LAYOUT_REVISION_SF_VIEW** — SF_LAYOUT_REVISION -> SF_VIEW (`HeaderViewID -> ID`)
- **FK_SF_PANEL_SF_VIEW** — SF_LAYOUT_PANEL -> SF_VIEW (`DefaultViewID -> ID`)
- **FK_SF_SCREEN_ACTION_SF_VIEW** — SF_SCREEN_ACTION -> SF_VIEW (`PopupViewID -> ID`)
- **FK_SF_SCREEN_PANEL_VIEW_ACTION_SF_VIEW** — SF_SCREEN_PANEL_ACTION -> SF_VIEW (`PopupViewID -> ID`)
- **FK_SF_SCREEN_REVISION_SF_VIEW** — SF_SCREEN_REVISION -> SF_VIEW (`HeaderViewID -> ID`)
- **FK_SF_SCREEN_VIEW_SF_VIEW** — SF_SCREEN_PANEL -> SF_VIEW (`ViewID -> ID`)
- **FK_SF_VIEW_ACTION_SF_VIEW** — SF_VIEW_ACTION -> SF_VIEW (`PopupViewID -> ID`)
- **FK_SF_VIEW_REVISION_SF_VIEW** — SF_VIEW_REVISION -> SF_VIEW (`ViewID -> ID`)

## Unique Indexes

- **UX_SF_VIEW** on `Name, ProjectID`
- **UX_SF_VIEW_FUID** on `FUID`

## Non-Unique Indexes

- **IF_SF_VIEW_PB_PROJECT** on `ProjectID`
