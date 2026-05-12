# SPC_CHART_DATA

**Database:** Operational

**Description:** Statistical process control chart current values

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| _2Sigma | DECIMAL(28,10) | True |  | False |  | 2 Sigma / Standard deviations |
| _3Sigma | DECIMAL(28,10) | True |  | False |  | 3 Sigma / Standard deviations |
| Average | DECIMAL(28,10) | True |  | False |  | The arithmetic mean of the data points |
| Characteristic | NVARCHAR(40) | True |  | False | COMMON_CHARACTERISTIC | Characteristic name and its attributes |
| ChartDataStatus | SMALLINT(5,0) | True |  | False | SPC_CHART_DATA_STATUS | The status of the SPC Chart Point |
| ControlValue1 | DECIMAL(28,10) | True |  | False |  | The target value of the upper chart, (or the centerline value). |
| ControlValue2 | DECIMAL(28,10) | True |  | False |  | The target value of the upper chart, (or the centerline value). |
| CustomPoint1 | DECIMAL(28,10) | True |  | False |  | Custom point field |
| CustomPoint2 | DECIMAL(28,10) | True |  | False |  | Custom point field |
| CustomPoint3 | DECIMAL(28,10) | True |  | False |  | Custom point field |
| CustomPoint4 | DECIMAL(28,10) | True |  | False |  | Custom point field |
| CustomPoint5 | DECIMAL(28,10) | True |  | False |  | Custom point field |
| FirstMeasuredOn | DATETIME | True |  | False |  | When was the samples started for the subgroup |
| ID | INT(10,0) | False |  | True |  | Unique identifier for the sub group |
| LastMeasuredOn | DATETIME | True |  | False |  | When was the last sample measured |
| LCLValue1 | DECIMAL(28,10) | True |  | False |  | Lower Control Limit on the top chart |
| LCLValue2 | DECIMAL(28,10) | True |  | False |  | Lower Control Limit on the bottom chart |
| Median | DECIMAL(28,10) | True |  | False |  | The median value of all data points on the chart |
| NoteID | INT(10,0) | True |  | False | NOTE | Any associated note for the SPC Chart Point |
| PlottedValue1 | DECIMAL(28,10) | True |  | False |  | Value to be plotted on the Top Chart |
| PlottedValue2 | DECIMAL(28,10) | True |  | False |  | Value to be plotted on the bottom chart |
| Range | DECIMAL(28,10) | True |  | False |  | The range of data point values |
| Sigma | DECIMAL(28,10) | True |  | False |  | One standard deviation |
| SPCChartCalculationID | INT(10,0) | True |  | False | SPC_CHART_CALCULATION | The SPC data calculation that the data point was calculated from |
| SPCChartID | INT(10,0) | False |  | False | COMMON_CHARACTERISTIC | The chart identifier |
| SubgroupSize | INT(10,0) | True |  | False |  | The size of the sub group |
| TransactionHistoryID | BIGINT(19,0) | True |  | False | TRANSACTION_HISTORY_WIP | Transaction history identifier |
| UCLValue1 | DECIMAL(28,10) | True |  | False |  | Upper Control Limit on the top chart |
| UCLValue2 | DECIMAL(28,10) | True |  | False |  | Upper Control Limit on the bottom chart |
| XAxisValue | NVARCHAR(50) | True |  | False |  | The value of the X-Axis |
| XAxisValueID | INT(10,0) | True |  | False | SPC_CHART_XAXIS_VALUE | The X-Axis value ID. |

## Primary Key

- **PK_SPC_CHART_DATA** on `ID`

## Foreign Keys (this table -> other)

- **FK_SPC_CHART_DATA_COMMON_CHARACTERISTIC** — SPC_CHART_DATA -> COMMON_CHARACTERISTIC (`SPCChartID, Characteristic -> ChartID, Characteristic`)
- **FK_SPC_CHART_DATA_NOTE** — SPC_CHART_DATA -> NOTE (`NoteID -> ID`)
- **FK_SPC_CHART_DATA_SPC_CHART** — SPC_CHART_DATA -> SPC_CHART (`SPCChartID -> ID`)
- **FK_SPC_CHART_DATA_SPC_CHART_CALCULATION** — SPC_CHART_DATA -> SPC_CHART_CALCULATION (`SPCChartCalculationID -> ID`)
- **FK_SPC_CHART_DATA_SPC_CHART_DATA_STATUS** — SPC_CHART_DATA -> SPC_CHART_DATA_STATUS (`ChartDataStatus -> SPCChartDataStatus`)
- **FK_SPC_CHART_DATA_SPC_CHART_XAXIS_VALUE** — SPC_CHART_DATA -> SPC_CHART_XAXIS_VALUE (`XAxisValueID -> ID`)
- **FK_SPC_CHART_DATA_TRANSACTION_HISTORY_WIP** — SPC_CHART_DATA -> TRANSACTION_HISTORY_WIP (`TransactionHistoryID -> ID`)

## Referenced By (other tables -> this)

- **FK_SPC_CHART_ALERT_SPC_CHART_DATA** — SPC_CHART_ALERT -> SPC_CHART_DATA (`SPCChartDataID -> ID`)
- **FK_SPC_CHART_DATA_DETAIL_SPC_CHART_DATA** — SPC_CHART_DATA_DETAIL -> SPC_CHART_DATA (`SPCChartDataID -> ID`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_SPC_CHART_DATA_COMMON_CHARACTERISTIC** on `SPCChartID, Characteristic`
- **IF_SPC_CHART_DATA_NOTE** on `NoteID`
- **IF_SPC_CHART_DATA_SPC_CHART_CALCULATION** on `SPCChartCalculationID`
- **IF_SPC_CHART_DATA_SPC_CHART_DATA_STATUS** on `ChartDataStatus`
- **IF_SPC_CHART_DATA_SPC_CHART_XAXIS_VALUE** on `XAxisValueID`
- **IF_SPC_CHART_DATA_TRANSACTION_HISTORY_WIP** on `TransactionHistoryID`
