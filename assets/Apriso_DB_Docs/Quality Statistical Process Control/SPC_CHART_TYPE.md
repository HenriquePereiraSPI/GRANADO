# SPC_CHART_TYPE

**Database:** Operational

**Description:** The valid types for SPC Charts

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| AllowControlLimitFactor | BIT | True |  | False |  | allow for the control limit factor for the calculation (q) |
| AllowCustomAlerts | BIT | True |  | False |  | Determines if the chart allows custom alerts to be set |
| AllowInControlStdDeviation | BIT | True |  | False |  | allow for used to factor in the values of the control limits |
| AllowWECOCalculation | BIT | True |  | False |  | Determines if the chart allows WECO rule calculation |
| AllowWeightingFactor | BIT | True |  | False |  | allow for the weighting factor for the calculation (w) |
| CalculateQuery | NVARCHAR | True |  | False |  | The default calculation query used to retrieve the data to calculate the SPC Chart points |
| DisplayQuery | NVARCHAR | True |  | False |  | The default display query used to retrieve the SPC Chart points for display |
| HasTwoDisplays | BIT | True |  | False |  | Determines if the chart have an upper and lower display |
| RequiresSubGroup | BIT | True |  | False |  | Determines if the chart requires a subgroup for calculation |
| SPCChartType | SMALLINT(5,0) | False |  | True |  | The chart type identifier |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_SPC_CHART_TYPE** on `SPCChartType`

## Foreign Keys (this table -> other)

- **** —  (``)

## Referenced By (other tables -> this)

- **FK_SPC_CHART_SPC_CHART_TYPE** — SPC_CHART -> SPC_CHART_TYPE (`SPCChartType -> SPCChartType`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **** on ``
