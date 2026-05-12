# LABOR_STATUS

**Database:** Operational

**Description:** Labor status

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| LaborStatus | SMALLINT(5,0) | False |  | True |  | Master list of Labor statuses. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_LABOR_STATUS** on `LaborStatus`

## Foreign Keys (this table -> other)

- **** —  (``)

## Referenced By (other tables -> this)

- **FK_LABOR_DETAILS_LABOR_STATUS** — LABOR_DETAIL -> LABOR_STATUS (`LaborStatus -> LaborStatus`)
- **FK_LABOR_LABOR_STATUS** — LABOR -> LABOR_STATUS (`LaborStatus -> LaborStatus`)
- **FK_RESOURCE_LABOR_DETAIL_LABOR_STATUS** — RESOURCE_LABOR_DETAIL -> LABOR_STATUS (`Status -> LaborStatus`)
- **FK_RESOURCE_LABOR_LABOR_STATUS** — RESOURCE_LABOR -> LABOR_STATUS (`Status -> LaborStatus`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **** on ``
