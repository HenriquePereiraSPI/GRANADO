# SUBSTITUTE_TYPE

**Database:** Operational

**Description:** List the various subtitution types that can be used in the system (for components and products). As business logic is defined in the process, reccords can be added to the existing list. (existing reccords can also be deleted if required)

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| SubstituteType | SMALLINT(5,0) | False |  | True |  | Type of substitution |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_SUBSTITUTION_TYPE** on `SubstituteType`

## Foreign Keys (this table -> other)

- **** —  (``)

## Referenced By (other tables -> this)

- **FK_BOM_SUBSTITE_SUBSTITUTE_TYPE** — COMPONENT_SUBSTITUTE -> SUBSTITUTE_TYPE (`SubstituteType -> SubstituteType`)
- **FK_PRODUCT_SUBSTITUTE_SUBSTITUTE_TYPE** — PRODUCT_SUBSTITUTE -> SUBSTITUTE_TYPE (`SubstituteType -> SubstituteType`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **** on ``
