# COMPONENT_USAGE_TYPE

**Database:** Operational

**Description:** Defines the use type of the component in the BOM.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |
| Type | SMALLINT(5,0) | False |  | True |  | Defines how the quantity of the component should be considered. Available types include dependant of final product quantity, constant or incidental. Defined on the BOM Maintenance screen. |

## Primary Key

- **PK_COMPONENT_USAGE_TYPE** on `Type`

## Foreign Keys (this table -> other)

- **** —  (``)

## Referenced By (other tables -> this)

- **FK_COMPONENT_COMPONENT_USAGE_TYPE** — COMPONENT -> COMPONENT_USAGE_TYPE (`UsageType -> Type`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **** on ``
