# PB_PROJECT

**Database:** Solution Authoring

**Description:** Contains information about Process Builder Projects.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| Code | NVARCHAR(40) | False |  | False |  | Internal name of the PB Project. |
| ID | INT(10,0) | False |  | True |  | Unique identifier of a record (key) in a table. |
| Name | NVARCHAR(80) | False |  | False |  | Unique name of the PB Project. |

## Primary Key

- **PK_PB_PROJECT** on `ID`

## Foreign Keys (this table -> other)

- **** —  (``)

## Referenced By (other tables -> this)

- **DET2_FIELD_PB_PROJECT** — DET2_FIELD -> PB_PROJECT (`ReferenceProjectID -> ID`)
- **FK_BUSINESS_OBJECT_PB_PROJECT** — BUSINESS_OBJECT -> PB_PROJECT (`ProjectID -> ID`)
- **FK_DFC_PB_PROJECT** — DFC -> PB_PROJECT (`ProjectID -> ID`)
- **FK_PB_ASSET_PB_PROJECT** — PB_ASSET -> PB_PROJECT (`ProjectID -> ID`)
- **FK_PB_PROJECT_REVISION_PB_PROJECT** — PB_PROJECT_REVISION -> PB_PROJECT (`ProjectID -> ID`)
- **FK_SF_LAYOUT_PB_PROJECT** — SF_LAYOUT -> PB_PROJECT (`ProjectID -> ID`)
- **FK_SF_SCREEN_PB_PROJECT** — SF_SCREEN -> PB_PROJECT (`ProjectID -> ID`)
- **FK_SF_VIEW_PB_PROJECT** — SF_VIEW -> PB_PROJECT (`ProjectID -> ID`)

## Business Keys (other -> this table)

- PB_PROJECT_REVISION_CONTEXT -> PB_PROJECT (`Code -> Code`)

## Unique Indexes

- **UX_PB_PROJECT** on `Name`
- **UX_PB_PROJECT_CODE** on `Code`

## Non-Unique Indexes

- **** on ``
