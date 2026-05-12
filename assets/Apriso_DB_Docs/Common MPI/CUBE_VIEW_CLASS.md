# CUBE_VIEW_CLASS

**Database:** Solution Authoring

**Description:** Determines the class to which the cube view belongs. Based on this configuration, the system determines to which analysis class the cube view belongs and renders in corresponding analysis pack at runtime.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| FUID | NVARCHAR(36) | False |  | False |  | Unique identifier of the entity across multiple Apriso instances. |
| ID | INT(10,0) | False |  | True |  | Unique identifier of a record (key) in a table. |
| Name | NVARCHAR(255) | False |  | False |  | Name of the entity. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_CUBE_VIEW_CLASS** on `ID`

## Foreign Keys (this table -> other)

- **** —  (``)

## Referenced By (other tables -> this)

- **FK_CUBE_VIEW_CUBE_VIEW_CLASS** — CUBE_VIEW -> CUBE_VIEW_CLASS (`CubeViewClassId -> ID`)

## Unique Indexes

- **UK_CUBE_VIEW_CLASS_FUID** on `FUID`
- **UK_CUBE_VIEW_CLASS_NAME** on `Name`

## Non-Unique Indexes

- **** on ``
