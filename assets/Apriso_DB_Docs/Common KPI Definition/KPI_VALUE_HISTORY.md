# KPI_VALUE_HISTORY

**Database:** Operational

**Description:** Stores the history for each value for each KPI calculated

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| AverageValue | DECIMAL(28,10) | True |  | False |  | Average value of KPI |
| CalculationTime | DATETIME | True |  | False |  | Time when current value was calculated |
| ClientName | NVARCHAR(100) | True |  | False | CLIENT | Owner of the KPI |
| ID | INT(10,0) | False |  | True |  | Identity  of the KPI value history |
| Indicator | SMALLINT(5,0) | True |  | False |  | Indicates if the value is within the specification or control limit. Valid values are 1 (Within Control Limit), 2 (Within Specification Limit) and 3 (Out of Limit) |
| KpiValueID | INT(10,0) | True |  | False | KPI_VALUE | KPI Value ID to which this history belongs |
| LowerControlLimit | DECIMAL(28,10) | True |  | False |  | The Lower Control  Limit at the time of calculation |
| LowerSpecLimit | DECIMAL(28,10) | True |  | False |  | The Lower Specification Limit at the time of calculation |
| PreviousValue | DECIMAL(28,10) | True |  | False |  | Previous value of the KPI |
| RefKPIValueHistoryID | INT(10,0) | True |  | False |  | The reference KPI Value History ID obtained from the external client system |
| StdDevValue | DECIMAL(28,10) | True |  | False |  | Standard Deviation of KPI |
| TargetValue | DECIMAL(28,10) | True |  | False |  | The Target Value at the time of calculation. |
| TimeFrom | DATETIME | True |  | False |  | KPI calculation from time |
| TimeTo | DATETIME | True |  | False |  | KPI calculation to time |
| Trend | INT(10,0) | True |  | False |  | Indicates the trend to KPI value change |
| TrendPercentage | DECIMAL(28,10) | True |  | False |  | Indicates the  KPI value change percentage |
| UpperControlLimit | DECIMAL(28,10) | True |  | False |  | The Upper Control Limit at the time of calculation |
| UpperSpecLimit | DECIMAL(28,10) | True |  | False |  | The Upper Specification Limit at the time of calculation |
| Value_ | DECIMAL(28,10) | True |  | False |  | Value |

## Primary Key

- **PK_KPI_VALUE_HISTORY** on `ID`

## Foreign Keys (this table -> other)

- **FK_KPI_VALUE_HISTORY_CLIENT** — KPI_VALUE_HISTORY -> CLIENT (`ClientName -> Name`)
- **FK_KPI_VALUE_HISTORY_KPI_VALUE** — KPI_VALUE_HISTORY -> KPI_VALUE (`KpiValueID -> ID`)

## Referenced By (other tables -> this)

- **FK_KPI_ALERT_KPI_VALUE_HISTORY** — KPI_ALERT -> KPI_VALUE_HISTORY (`KpiValueHistoryID -> ID`)
- **FK_KPI_TERM_HISTORY_KPI_VALUE_HISTORY** — KPI_TERM_HISTORY -> KPI_VALUE_HISTORY (`KPIValueHistoryID -> ID`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_KPI_VALUE_HISTORY_CLIENT** on `ClientName`
- **IF_KPI_VALUE_HISTORY_KPI_VALUE** on `KpiValueID`
