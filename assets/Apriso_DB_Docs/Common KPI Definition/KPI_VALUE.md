# KPI_VALUE

**Database:** Operational

**Description:** Stores generic KPI values for wide variety of different contexts. A context consists of one or more fields (e.g., product number, work order, machine, employee, etc.) stored in the PRODUCTION_FACT table

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| AverageValue | DECIMAL(28,10) | True |  | False |  | Average value of KPI |
| CalculationTime | DATETIME | True |  | False |  | Time when current value was calculated |
| ClientName | NVARCHAR(100) | True |  | False | CLIENT | Owner of the KPI |
| ID | INT(10,0) | False |  | True |  | Identity  of the KPI value |
| Indicator | SMALLINT(5,0) | True |  | False |  | Indicates if the value is within the specification or control limit. Valid values: 1 - Within Control Limit, 2 - Within Specification Limit, 3 - Out of Limit. |
| Key1 | NVARCHAR(100) | True |  | False |  | Context value 1 associated with KPI |
| Key10 | NVARCHAR(100) | True |  | False |  | Context value 10 associated with KPI |
| Key2 | NVARCHAR(100) | True |  | False |  | Context value 2 associated with KPI |
| Key3 | NVARCHAR(100) | True |  | False |  | Context value 3 associated with KPI |
| Key4 | NVARCHAR(100) | True |  | False |  | Context value 4 associated with KPI |
| Key5 | NVARCHAR(100) | True |  | False |  | Context value 5 associated with KPI |
| Key6 | NVARCHAR(100) | True |  | False |  | Context value 6 associated with KPI |
| Key7 | NVARCHAR(100) | True |  | False |  | Context value 7 associated with KPI |
| Key8 | NVARCHAR(100) | True |  | False |  | Context value 8 associated with KPI |
| Key9 | NVARCHAR(100) | True |  | False |  | Context value 9 associated with KPI |
| KpiName | NVARCHAR(50) | False |  | False |  | Unique identifier of KPI. |
| LastCalculationTime | DATETIME | True |  | False |  | Time when previous value was calculated |
| LowerControlLimit | DECIMAL(28,10) | True |  | False |  | The Lower Control Limit at the time of calculation |
| LowerSpecLimit | DECIMAL(28,10) | True |  | False |  | The Lower Specification Limit at the time of calculation |
| PreviousValue | DECIMAL(28,10) | True |  | False |  | Previous value of the KPI |
| RefKPIValueID | INT(10,0) | True |  | False |  | The reference KPI Value ID obtained from the external client system |
| StdDevValue | DECIMAL(28,10) | True |  | False |  | Standard Deviation of KPI |
| TargetValue | DECIMAL(28,10) | True |  | False |  | The Target Value at the time of calculation |
| TimeFrom | DATETIME | True |  | False |  | KPI calculation from time |
| TimeTo | DATETIME | True |  | False |  | KPI calculation to time |
| Trend | INT(10,0) | True |  | False |  | Indicates the trend to KPI value change |
| TrendPercentage | DECIMAL(28,10) | True |  | False |  | Indicates the  KPI value change percentage |
| UomCode | NVARCHAR(10) | True |  | False | UOM | Uom Code |
| UpperControlLimit | DECIMAL(28,10) | True |  | False |  | The Upper Control Limit at the time of calculation |
| UpperSpecLimit | DECIMAL(28,10) | True |  | False |  | The Upper Specification Limit at the time of calculation |
| Value_ | DECIMAL(28,10) | True |  | False |  | Value of the KPI calculation |

## Primary Key

- **PK_KPI_VALUE** on `ID`

## Foreign Keys (this table -> other)

- **FK_KPI_VALUE_CLIENT** — KPI_VALUE -> CLIENT (`ClientName -> Name`)
- **FK_KPI_VALUE_UOM** — KPI_VALUE -> UOM (`UomCode -> UomCode`)

## Referenced By (other tables -> this)

- **FK_KPI_VALUE_HISTORY_KPI_VALUE** — KPI_VALUE_HISTORY -> KPI_VALUE (`KpiValueID -> ID`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_KPI_VALUE_KPI** on `KpiName`
- **IF_KPI_VALUE_KPI_OWNERSHIP** on `ClientName`
