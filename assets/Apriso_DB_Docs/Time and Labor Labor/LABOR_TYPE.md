# LABOR_TYPE

**Database:** Operational

**Description:** Labor types

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |
| Type | SMALLINT(5,0) | False |  | True |  | Master list of Labor types. |

## Primary Key

- **PK_LABOR_TYPE** on `Type`

## Foreign Keys (this table -> other)

- **** —  (``)

## Referenced By (other tables -> this)

- **FK_INSPECTION_PLAN_SCHEDULE_LABOR_TYPE** — INSPECTION_PLAN_SCHEDULE -> LABOR_TYPE (`EventType -> Type`)
- **FK_LABOR_LABOR_TYPE** — LABOR -> LABOR_TYPE (`LaborType -> Type`)
- **FK_LITE_LABOR_LABOR_TYPE** — LITE_LABOR -> LABOR_TYPE (`LaborType -> Type`)
- **FK_RESOURCE_EVENT_LINK_LABOR_TYPE** — RESOURCE_EVENT_LINK -> LABOR_TYPE (`ParentLaborType -> Type`)
- **FK_RESOURCE_EVENT_LINK_LABOR_TYPE_2** — RESOURCE_EVENT_LINK -> LABOR_TYPE (`ChildLaborType -> Type`)
- **FK_RESOURCE_LABOR_LABOR_TYPE** — RESOURCE_LABOR -> LABOR_TYPE (`LaborType -> Type`)
- **FK_RESOURCE_REASON_CODE_LABOR_TYPE** — RESOURCE_REASON_CODE -> LABOR_TYPE (`LaborType -> Type`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **** on ``
