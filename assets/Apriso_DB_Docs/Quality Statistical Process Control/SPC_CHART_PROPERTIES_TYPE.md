# SPC_CHART_PROPERTIES_TYPE

**Database:** Operational

**Description:** Sets the configuration for the upper or lower display types

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| SPCChartPropertiesType | SMALLINT(5,0) | False |  | True |  | The SPC Chart Properties Type |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_SPC_CHART_PROPERTIES_TYPE** on `SPCChartPropertiesType`

## Foreign Keys (this table -> other)

- **** —  (``)

## Referenced By (other tables -> this)

- **FK_SPC_CHART_ALERT_SPC_CHART_PROPERTIES_TYPE** — SPC_CHART_ALERT -> SPC_CHART_PROPERTIES_TYPE (`SPCChartPropertiesType -> SPCChartPropertiesType`)
- **FK_SPC_CHART_PROPERTIES_SPC_CHART_PROPERTIES_TYPE** — SPC_CHART_PROPERTIES -> SPC_CHART_PROPERTIES_TYPE (`SPCChartPropertiesType -> SPCChartPropertiesType`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **** on ``
