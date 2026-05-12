# SF_LAYOUT

**Database:** Solution Authoring

**Description:** Stores definition of a Layout.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| FUID | NVARCHAR(36) | False |  | False |  | Unique identifier of a Layout revision. |
| ID | INT(10,0) | False |  | True |  | Unique identifier of a record (key) in the table. |
| Name | NVARCHAR(80) | False |  | False |  | Unique name of a Layout. |
| ProjectID | INT(10,0) | True |  | False | PB_PROJECT | Link to the PB_PROJECT table. |

## Primary Key

- **PK_SF_LAYOUT** on `ID`

## Foreign Keys (this table -> other)

- **FK_SF_LAYOUT_PB_PROJECT** — SF_LAYOUT -> PB_PROJECT (`ProjectID -> ID`)

## Referenced By (other tables -> this)

- **FK_SF_LAYOUT_REVISION_LAYOUT** — SF_LAYOUT_REVISION -> SF_LAYOUT (`LayoutID -> ID`)
- **FK_SF_SCREEN_REVISION_SF_LAYOUT** — SF_SCREEN_REVISION -> SF_LAYOUT (`LayoutID -> ID`)

## Unique Indexes

- **UX_SF_LAYOUT** on `Name, ProjectID`
- **UX_SF_LAYOUT_FUID** on `FUID`

## Non-Unique Indexes

- **IF_SF_LAYOUT_PB_PROJECT** on `ProjectID`
