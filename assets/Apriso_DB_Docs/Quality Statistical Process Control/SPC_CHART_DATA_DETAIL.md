# SPC_CHART_DATA_DETAIL

**Database:** Operational

**Description:** Stores the subgroup information for each table. This has a foreign key link to the SPC Point information so that SPC users can view what information was used to calculate the information.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| CharacteristicResult | DECIMAL(28,10) | True |  | False |  | This is used for run charts to store the characteristic value. |
| ID | INT(10,0) | False |  | True |  | The ID of the chart point detail. |
| NumberOfNonConforming | DECIMAL(28,10) | True |  | False |  | The number of nonconforming samples. |
| NumberOfSamples | DECIMAL(28,10) | True |  | False |  | The number of samples. |
| SPCChartDataID | INT(10,0) | False |  | False | SPC_CHART_DATA | The chart point that the subgroup is calculated on. |

## Primary Key

- **PK_SPC_CHART_DATA_DETAIL** on `ID`

## Foreign Keys (this table -> other)

- **FK_SPC_CHART_DATA_DETAIL_SPC_CHART_DATA** — SPC_CHART_DATA_DETAIL -> SPC_CHART_DATA (`SPCChartDataID -> ID`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_SPC_CHART_DATA_DETAIL_SPC_CHART_DATA** on `SPCChartDataID`
