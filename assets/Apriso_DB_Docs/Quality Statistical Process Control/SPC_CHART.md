# SPC_CHART

**Database:** Operational

**Description:** Stores the chart configuration parameters for a particular SPC chart and process. The SPC Chart may be associated to zero or at most one Machine Integrator data acquisition point.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| CalculateQuery | NVARCHAR | True |  | False |  | The default calculation query used to retrieve the data to calculate the SPC Chart points |
| Characteristic | NVARCHAR(40) | True |  | False | CHARACTERISTIC | The default characteristic for the chart calculation and display |
| CharacteristicRevisionID | INT(10,0) | True |  | False | CHARACTERISTIC_REVISION | The characteristic revision associated with the SPC Chart.  Either this or the characteristic value should be supplied. |
| ControlLimitFactor | DECIMAL(28,10) | True |  | False |  | The control limit factor for the calculation (q) |
| DisplayQuery | NVARCHAR | True |  | False |  | The default calculation query used to retrieve the data to calculate the SPC Chart points |
| FUID | NVARCHAR(36) | False |  | False |  | Global unique indentifier for use within GPM |
| ID | INT(10,0) | False |  | True |  | The unique ID for the SPC chart definition. |
| InControlStdDeviation | DECIMAL(28,10) | True |  | False |  | Used to factor in the values of the control limits |
| LowerSpecificationLimit | DECIMAL(28,10) | True |  | False |  | Lower Specification Limit. |
| Name | NVARCHAR(80) | False |  | False |  | SPC Chart Name. |
| ProductID | INT(10,0) | True |  | False | PRODUCT | The default product for the chart calculation and display |
| Properties | NVARCHAR | True |  | False |  | An XML representation of all the configuration parameters for a particular charting framework. Since two or more frameworks may be supported by Apriso, the structure or schema of the XML configuration will be unique to the charting framework. |
| SPCChartSpecCalcType | SMALLINT(5,0) | False |  | False | SPC_CHART_SPEC_CALC_TYPE | How the specifications for the chart should be calculated. 1 - Manually Defined, 2 - From Characteristic, 3 - ▒ 3 Sigma, 4 - ▒ 2 Sigma, 5 - ▒ 1 Sigma. |
| SPCChartType | SMALLINT(5,0) | True |  | False | SPC_CHART_TYPE | The type of the SPC Chart |
| SubGroupSize | INT(10,0) | True |  | False |  | Size of the subgroup. This is required to be set if SPC_CHART_TYPE. RequiresSubGroup = true |
| TargetSpecificationLimit | DECIMAL(28,10) | True |  | False |  | Target Specification Limit. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |
| UpperSpecificationLimit | DECIMAL(28,10) | True |  | False |  | Upper Specification Limit. |
| UseDynamicSubGroup | BIT | True |  | False |  | 'false' if using set subgroup sizes, 'true' for Dynamic subgroups. |
| WeightingFactor | DECIMAL(28,10) | True |  | False |  | The weighting factor for the calculation (w) |

## Primary Key

- **PK_SPC_CHART** on `ID`

## Foreign Keys (this table -> other)

- **FK_SPC_CHART_CHARACTERISTIC** — SPC_CHART -> CHARACTERISTIC (`Characteristic -> Characteristic`)
- **FK_SPC_CHART_CHARACTERISTIC_REVISION** — SPC_CHART -> CHARACTERISTIC_REVISION (`CharacteristicRevisionID -> ID`)
- **FK_SPC_CHART_PRODUCT** — SPC_CHART -> PRODUCT (`ProductID -> ID`)
- **FK_SPC_CHART_SPC_CHART_SPEC_CALC_TYPE** — SPC_CHART -> SPC_CHART_SPEC_CALC_TYPE (`SPCChartSpecCalcType -> SPCChartSpecCalcType`)
- **FK_SPC_CHART_SPC_CHART_TYPE** — SPC_CHART -> SPC_CHART_TYPE (`SPCChartType -> SPCChartType`)

## Referenced By (other tables -> this)

- **FK_COMMON_CHARACTERISTIC_SPC_CHART** — COMMON_CHARACTERISTIC -> SPC_CHART (`ChartID -> ID`)
- **FK_SPC_CHART_ALERT_RULE_SPC_CHART** — SPC_CHART_ALERT_RULE -> SPC_CHART (`SPCChartID -> ID`)
- **FK_SPC_CHART_ALERT_SPC_CHART** — SPC_CHART_ALERT -> SPC_CHART (`SPCChartID -> ID`)
- **FK_SPC_CHART_CALCULATION_SPC_CHART** — SPC_CHART_CALCULATION -> SPC_CHART (`SPCChartID -> ID`)
- **FK_SPC_CHART_DATA_SPC_CHART** — SPC_CHART_DATA -> SPC_CHART (`SPCChartID -> ID`)
- **FK_SPC_CHART_PROPERTIES_SPC_CHART** — SPC_CHART_PROPERTIES -> SPC_CHART (`SPCChartID -> ID`)
- **FK_SPC_CHART_XAXIS_VALUE_SPC_CHART** — SPC_CHART_XAXIS_VALUE -> SPC_CHART (`ChartID -> ID`)

## Unique Indexes

- **UK_SPC_CHART** on `FUID`
- **UK_SPC_CHART_2** on `Name, SPCChartType`

## Non-Unique Indexes

- **IF_SPC_CHART_CHARACTERISTIC** on `Characteristic`
- **IF_SPC_CHART_CHARACTERISTIC_REVISION** on `CharacteristicRevisionID`
- **IF_SPC_CHART_PRODUCT** on `ProductID`
