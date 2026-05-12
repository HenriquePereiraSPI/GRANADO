# ROTATION_TYPE

**Database:** Operational

**Description:** Stock rotation types

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| RotationType | NVARCHAR(5) | False |  | True |  | For future use. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_RotationType** on `RotationType`

## Foreign Keys (this table -> other)

- **** —  (``)

## Referenced By (other tables -> this)

- **FK_PRODUCT_ROTATION_TYPE** — PRODUCT -> ROTATION_TYPE (`RotationType -> RotationType`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **** on ``
