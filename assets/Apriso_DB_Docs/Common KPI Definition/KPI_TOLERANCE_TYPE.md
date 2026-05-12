# KPI_TOLERANCE_TYPE

**Database:** Operational

**Description:** At what level the tolerance is defined at

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| KpiToleranceType | SMALLINT(5,0) | False |  | True |  | Type of the tolerance |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_KPI_TOLERANCE_TYPE** on `KpiToleranceType`

## Foreign Keys (this table -> other)

- **** —  (``)

## Referenced By (other tables -> this)

- **FK_KPI_TOLERANCE_KPI_TOLERANCE_TYPE** — KPI_TOLERANCE -> KPI_TOLERANCE_TYPE (`KpiToleranceType -> KpiToleranceType`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **** on ``
