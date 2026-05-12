# RECIPE_STATUS

**Database:** Operational

**Description:** This table lists the various statues of a Recipe/SOP. This table is not directly displayed in the Complex Assembly functionality, but it is used by standard Business Components during order Explosion.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| Status | SMALLINT(5,0) | False |  | True |  | The Recipe status. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_RECIPE_STATUS** on `Status`

## Foreign Keys (this table -> other)

- **** —  (``)

## Referenced By (other tables -> this)

- **FK_RECIPE_RECIPE_STATUS** — RECIPE -> RECIPE_STATUS (`Status -> Status`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **** on ``
