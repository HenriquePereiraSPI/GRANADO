# SPC_CHART_PROPERTIES

**Database:** Operational

**Description:** This stores the chart display and calculation properties. A chart can have at MAX two configurations, one for the upper chart and one for the lower chart. For the attribute charts this will always be one.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| FUID | NVARCHAR(36) | False |  | False |  | Global unique indentifier for use within GPM |
| ID | INT(10,0) | False |  | True |  | Auto Increment PK |
| LowerControlLimit | DECIMAL(28,10) | True |  | False |  | Value of the lower control limit for the chart. Set to -1 to have the chart calculate it. |
| Properties | NVARCHAR | True |  | False |  | Generic field for extendibility or to store additional fields. |
| SPCChartID | INT(10,0) | True |  | False | SPC_CHART | The SPC Chart this properties is for |
| SPCChartPropertiesType | SMALLINT(5,0) | True |  | False | SPC_CHART_PROPERTIES_TYPE | The SPC Chart properties type |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |
| UpperControlLimit | DECIMAL(28,10) | True |  | False |  | Value of the upper control limit for the chart. Set to -1 to have the chart calculate it. |

## Primary Key

- **PK_SPC_CHART_PROPERTIES** on `ID`

## Foreign Keys (this table -> other)

- **FK_SPC_CHART_PROPERTIES_SPC_CHART** — SPC_CHART_PROPERTIES -> SPC_CHART (`SPCChartID -> ID`)
- **FK_SPC_CHART_PROPERTIES_SPC_CHART_PROPERTIES_TYPE** — SPC_CHART_PROPERTIES -> SPC_CHART_PROPERTIES_TYPE (`SPCChartPropertiesType -> SPCChartPropertiesType`)

## Referenced By (other tables -> this)

- **FK_SPC_CHART_ALERT_RULE_SPC_CHART_PROPERTIES** — SPC_CHART_ALERT_RULE -> SPC_CHART_PROPERTIES (`SPCChartPropertiesID -> ID`)

## Unique Indexes

- **UK_SPC_CHART_PROPERTIES** on `FUID`

## Non-Unique Indexes

- **IF_SPC_CHART_PROPERTIES_SPC_CHART** on `SPCChartID`
