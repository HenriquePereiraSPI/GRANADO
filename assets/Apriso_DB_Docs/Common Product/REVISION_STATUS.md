# REVISION_STATUS

**Database:** Solution Authoring

**Description:** Future use

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| ID | SMALLINT(5,0) | False |  | True |  | Unique identifier of a record (key) in a table |
| TextID | INT(10,0) | False |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_REVISION_STATUS** on `ID`

## Foreign Keys (this table -> other)

- **** —  (``)

## Referenced By (other tables -> this)

- **FK_ACTION_SCRIPT_02** — ACTION_SCRIPT -> REVISION_STATUS (`RevisionStatusID -> ID`)
- **FK_DFC_REVISION_REVISION_STATUS** — DFC_REVISION -> REVISION_STATUS (`RevisionStatusID -> ID`)
- **FK_PB_ASSET_REVISION_REVISION_STATUS** — PB_ASSET_REVISION -> REVISION_STATUS (`RevisionStatusID -> ID`)
- **FK_SF_LAYOUT_REVISION_REVISION_STATUS** — SF_LAYOUT_REVISION -> REVISION_STATUS (`RevisionStatusID -> ID`)
- **FK_SF_SCREEN_REVISION_REVISION_STATUS** — SF_SCREEN_REVISION -> REVISION_STATUS (`RevisionStatusID -> ID`)
- **FK_SF_VIEW_REVISION_REVISION_STATUS** — SF_VIEW_REVISION -> REVISION_STATUS (`RevisionStatusID -> ID`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **** on ``
