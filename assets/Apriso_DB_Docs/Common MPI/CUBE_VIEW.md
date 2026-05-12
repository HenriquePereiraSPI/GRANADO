# CUBE_VIEW

**Database:** Solution Authoring

**Description:** Contains the information on the measures and dimensions to be displayed, as well as pivot grid layout with the chart information.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| CubeName | NVARCHAR(255) | True |  | False |  | The Cube View Name. |
| CubeViewClassId | INT(10,0) | True |  | False | CUBE_VIEW_CLASS | ClassId to which the cube view is linked to. |
| CubeViewVersion | INT(10,0) | True |  | False |  | Cube View configuration version |
| DatabaseAlias | NVARCHAR(255) | True |  | False |  | The Database alias name to which the cube view is linked to. |
| FUID | NVARCHAR(36) | False |  | False |  | Unique identifier of the entity across multiple Apriso instances. |
| ID | INT(10,0) | False |  | True |  | Unique identifier of a record (key) in a table. |
| Properties | NVARCHAR | True |  | False |  | Stores cube view definition. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_CUBE_VIEW** on `ID`

## Foreign Keys (this table -> other)

- **FK_CUBE_VIEW_CUBE_VIEW_CLASS** — CUBE_VIEW -> CUBE_VIEW_CLASS (`CubeViewClassId -> ID`)

## Referenced By (other tables -> this)

- **FK_BUSINESS_OBJECT_CUBE_VIEW** — BUSINESS_OBJECT -> CUBE_VIEW (`CubeViewID -> ID`)
- **FK_CUBE_VIEW_ROLE_CUBE_VIEW** — CUBE_VIEW_ROLE -> CUBE_VIEW (`CubeViewID -> ID`)

## Unique Indexes

- **UK_CUBE_VIEW_FUID** on `FUID`

## Non-Unique Indexes

- **IF_CUBE_VIEW_CUBE_VIEW_CLASS** on `CubeViewClassId`
