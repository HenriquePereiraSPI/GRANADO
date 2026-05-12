# SPC_CHART_DATA_STATUS

**Database:** Operational

**Description:** This table contains the valid statusÆ of a point. This allows for statusÆ to be recorded placed on the point

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| SPCChartDataStatus | SMALLINT(5,0) | False |  | True |  | The SPC Chart Data Status |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_SPC_CHART_DATA_STATUS** on `SPCChartDataStatus`

## Foreign Keys (this table -> other)

- **** —  (``)

## Referenced By (other tables -> this)

- **FK_SPC_CHART_DATA_SPC_CHART_DATA_STATUS** — SPC_CHART_DATA -> SPC_CHART_DATA_STATUS (`ChartDataStatus -> SPCChartDataStatus`)
- **FK_SPC_CHART_XAXIS_VALUE_SPC_CHART_DATA_STATUS** — SPC_CHART_XAXIS_VALUE -> SPC_CHART_DATA_STATUS (`ChartDataStatus -> SPCChartDataStatus`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **** on ``
