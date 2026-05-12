# ECCN_CCL_CATEGORY

**Database:** Operational

**Description:** The list of Commerce Control List Categories

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| CCLCategory | TINYINT(3,0) | False |  | True |  | Commerce Control List Category. |
| Name | NVARCHAR(100) | False |  | False |  | Commerce Control List Category name. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_ECCN_CCL_CATEGORY** on `CCLCategory`

## Foreign Keys (this table -> other)

- **** —  (``)

## Referenced By (other tables -> this)

- **FK_ECCN_ECCN_CCL_CATEGORY** — ECCN -> ECCN_CCL_CATEGORY (`EccnCclCategory -> CCLCategory`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **** on ``
