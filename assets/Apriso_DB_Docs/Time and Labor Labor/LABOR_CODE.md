# LABOR_CODE

**Database:** Operational

**Description:** Stores all Labor Codes available to Time Manaer. Labor Codes are an attribute that can be optionally set to each row persisted in the LABOR table.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| LaborCode | NVARCHAR(5) | False |  | True |  | Master list of Labor Codes. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_LABOR_CODE** on `LaborCode`

## Foreign Keys (this table -> other)

- **** —  (``)

## Referenced By (other tables -> this)

- **FK_LABOR_LABOR_CODE** — LABOR -> LABOR_CODE (`LaborCode -> LaborCode`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **** on ``
