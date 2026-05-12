# COMPONENT_INTEGR_METHOD

**Database:** Operational

**Description:** Contains the various ways to introduce a product during the production process (e.g. from a tank, pipe or container). Users can define their own values.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| ComponentIntegrMethodClassId | INT(10,0) | True |  | False | COMPONENT_INTEGR_METHOD_CLASS | Method used to introduce the component (e.g. from a pipe, container). User-defined. |
| ID | INT(10,0) | False |  | True |  | Unique identifier of a record (key) in a table. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_COMPONENT_INTEGR_METHOD** on `ID`

## Foreign Keys (this table -> other)

- **FK_COMPONENT_INTEGR_METHOD_COMPONENT_INTEGR_METHOD_CLASS** — COMPONENT_INTEGR_METHOD -> COMPONENT_INTEGR_METHOD_CLASS (`ComponentIntegrMethodClassId -> ID`)

## Referenced By (other tables -> this)

- **FK_PROCESS_COMPONENT_COMPONENT_INTEGR_METHOD** — PROCESS_COMPONENT -> COMPONENT_INTEGR_METHOD (`ComponentIntegrMethodID -> ID`)
- **FK_PRODUCT_COMPONENT_COMPONENT_INTEGR_METHOD** — PRODUCT_COMPONENT -> COMPONENT_INTEGR_METHOD (`ComponentIntegrMethodID -> ID`)
- **FK_RECIPE_COMPONENT_COMPONENT_INTEGR_METHOD** — RECIPE_COMPONENT -> COMPONENT_INTEGR_METHOD (`ComponentIntegrMethodID -> ID`)
- **FK_WIP_COMPONENT_COMPONENT_INTEGR_METHOD** — WIP_COMPONENT -> COMPONENT_INTEGR_METHOD (`ComponentIntegrMethodID -> ID`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_COMPONENT_INTEGR_METHOD_COMPONENT_INTEGR_METHOD_CLASS** on `ComponentIntegrMethodClassId`
