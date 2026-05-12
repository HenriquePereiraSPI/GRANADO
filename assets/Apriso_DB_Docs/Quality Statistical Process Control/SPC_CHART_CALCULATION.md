# SPC_CHART_CALCULATION

**Database:** Operational

**Description:** Stores the calculation of the SPC Chart. Calculated Points are then joined to this table for display

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| Average | DECIMAL(28,10) | True |  | False |  | Average value of the points. |
| CalculationQuery | NVARCHAR | True |  | False |  | The query used to calculate the SPC Chart data points |
| CalculationTime | DATETIME | True |  | False |  | The SPC Chart the calculation is for |
| Capability | DECIMAL(28,10) | True |  | False |  | Value of the Process Capability. |
| CapabilityIndex | DECIMAL(28,10) | True |  | False |  | Value of the Capability Index (Cpk). |
| ControlLimitFactor | DECIMAL(28,10) | True |  | False |  | The control limit factor for the calculation (q) |
| ID | INT(10,0) | False |  | True |  | Auto Increment PK |
| InControlStdDeviation | DECIMAL(28,10) | True |  | False |  | Used to factor in the values of the control limits |
| IsLastCalculation | BIT | True |  | False |  | Is the last calculation performed for the SPC Chartl |
| Key1 | NVARCHAR(50) | True |  | False |  | Custom value used for querying. |
| Key2 | NVARCHAR(50) | True |  | False |  | Custom value used for querying. |
| Key3 | NVARCHAR(50) | True |  | False |  | Custom value used for querying. |
| Key4 | NVARCHAR(50) | True |  | False |  | Custom value used for querying. |
| Key5 | NVARCHAR(50) | True |  | False |  | Custom value used for querying. |
| LowerSpecificationLimit | DECIMAL(28,10) | True |  | False |  | Lower Specification Limit. |
| Maximum | DECIMAL(28,10) | True |  | False |  | Maximum value of the points. |
| Minimum | DECIMAL(28,10) | True |  | False |  | Minimum value of the points. |
| Negative1Sigma | DECIMAL(28,10) | True |  | False |  | -1 Sigma / Standard deviation. |
| Negative2Sigma | DECIMAL(28,10) | True |  | False |  | -2 Sigma / Standard deviation. |
| Negative3Sigma | DECIMAL(28,10) | True |  | False |  | -3 Sigma / Standard deviation. |
| Normality | DECIMAL(28,10) | True |  | False |  | The normality of the chart. |
| Performance | DECIMAL(28,10) | True |  | False |  | Value of the Process Performance. |
| PerformanceIndex | DECIMAL(28,10) | True |  | False |  | Value of the Performance Index (Ppk). |
| Positive1Sigma | DECIMAL(28,10) | True |  | False |  | 1 Sigma / Standard deviation. |
| Positive2Sigma | DECIMAL(28,10) | True |  | False |  | 2 Sigma / Standard deviation. |
| Positive3Sigma | DECIMAL(28,10) | True |  | False |  | 3 Sigma / Standard deviation. |
| SPCChartID | INT(10,0) | True |  | False | SPC_CHART | The chart identifier. |
| TargetSpecificationLimit | DECIMAL(28,10) | True |  | False |  | Target Specification Limit. |
| UpperSpecificationLimit | DECIMAL(28,10) | True |  | False |  | Upper Specification Limit. |
| WeightingFactor | DECIMAL(28,10) | True |  | False |  | The weighting factor for the calculation (w) |

## Primary Key

- **PK_SPC_CHART_CALCULATION** on `ID`

## Foreign Keys (this table -> other)

- **FK_SPC_CHART_CALCULATION_SPC_CHART** — SPC_CHART_CALCULATION -> SPC_CHART (`SPCChartID -> ID`)

## Referenced By (other tables -> this)

- **FK_SPC_CHART_ALERT_SPC_CHART_CALCULATION** — SPC_CHART_ALERT -> SPC_CHART_CALCULATION (`SPCChartCalculationID -> ID`)
- **FK_SPC_CHART_DATA_SPC_CHART_CALCULATION** — SPC_CHART_DATA -> SPC_CHART_CALCULATION (`SPCChartCalculationID -> ID`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_SPC_CHART_CALCULATION_SPC_CHART** on `SPCChartID`
