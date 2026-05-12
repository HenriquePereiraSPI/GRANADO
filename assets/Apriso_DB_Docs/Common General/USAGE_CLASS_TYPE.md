# USAGE_CLASS_TYPE

**Database:** Operational

**Description:** The table contains Usage Class Types for various entities.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |
| UsageClassType | INT(10,0) | False |  | True |  | A unique class type. |

## Primary Key

- **PK_USAGE_CLASS_TYPE** on `UsageClassType`

## Foreign Keys (this table -> other)

- **** —  (``)

## Referenced By (other tables -> this)

- **FK_USAGE_CLASS_USAGE_CLASS_TYPE** — USAGE_CLASS -> USAGE_CLASS_TYPE (`UsageClassType -> UsageClassType`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **** on ``
