# CUBE_VIEW_ROLE

**Database:** Solution Authoring

**Description:** Holds security data for each cube view based on the roles. One cube view can belong to multiple roles.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| CubeViewID | INT(10,0) | False |  | True | CUBE_VIEW | Link to Cube View. |
| Role | NVARCHAR(40) | False |  | True |  | Reference to the Role column in the ROLE table. |

## Primary Key

- **PK_CUBE_VIEW_ROLE** on `CubeViewID, Role`

## Foreign Keys (this table -> other)

- **FK_CUBE_VIEW_ROLE_CUBE_VIEW** — CUBE_VIEW_ROLE -> CUBE_VIEW (`CubeViewID -> ID`)

## Referenced By (other tables -> this)

- **** —  (``)

## Business Keys (this table -> other)

- CUBE_VIEW_ROLE -> ROLE (`Role -> Role`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_CUBE_VIEW_ROLE_ROLE** on `Role`
