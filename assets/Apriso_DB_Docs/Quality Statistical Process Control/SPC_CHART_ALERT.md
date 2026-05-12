# SPC_CHART_ALERT

**Database:** Operational

**Description:** This table contains the alerts found in the chart calculation

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| AlertID | INT(10,0) | True |  | False | ALERT | The alert to be generated |
| ID | INT(10,0) | False |  | True |  | Auto Increment PK |
| SPCChartAlertRule | INT(10,0) | True |  | False | SPC_CHART_ALERT_RULE | The rule that was violated for the alert.  Will only be populated if WECORuleViolation is False |
| SPCChartCalculationID | INT(10,0) | True |  | False | SPC_CHART_CALCULATION | The spc calculation the alert was generated for |
| SPCChartDataID | INT(10,0) | True |  | False | SPC_CHART_DATA | The point data that the alert was generated for |
| SPCChartID | INT(10,0) | True |  | False | SPC_CHART | The SPC Chart the alert was generated for |
| SPCChartPropertiesType | SMALLINT(5,0) | True |  | False | SPC_CHART_PROPERTIES_TYPE | The upper or lower chart the alert was generated for |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |
| WECORuleViolation | BIT | True |  | False |  | Determines if this alert was generated via WECO rule violations, or by a custom violation |

## Primary Key

- **PK_SPC_CHART_ALERT** on `ID`

## Foreign Keys (this table -> other)

- **FK_SPC_CHART_ALERT_ALERT** — SPC_CHART_ALERT -> ALERT (`AlertID -> ID`)
- **FK_SPC_CHART_ALERT_SPC_CHART** — SPC_CHART_ALERT -> SPC_CHART (`SPCChartID -> ID`)
- **FK_SPC_CHART_ALERT_SPC_CHART_ALERT_RULE** — SPC_CHART_ALERT -> SPC_CHART_ALERT_RULE (`SPCChartAlertRule -> ID`)
- **FK_SPC_CHART_ALERT_SPC_CHART_CALCULATION** — SPC_CHART_ALERT -> SPC_CHART_CALCULATION (`SPCChartCalculationID -> ID`)
- **FK_SPC_CHART_ALERT_SPC_CHART_DATA** — SPC_CHART_ALERT -> SPC_CHART_DATA (`SPCChartDataID -> ID`)
- **FK_SPC_CHART_ALERT_SPC_CHART_PROPERTIES_TYPE** — SPC_CHART_ALERT -> SPC_CHART_PROPERTIES_TYPE (`SPCChartPropertiesType -> SPCChartPropertiesType`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_SPC_CHART_ALERT_ALERT** on `AlertID`
- **IF_SPC_CHART_ALERT_SPC_CHART** on `SPCChartID`
- **IF_SPC_CHART_ALERT_SPC_CHART_ALERT_RULE** on `SPCChartAlertRule`
- **IF_SPC_CHART_ALERT_SPC_CHART_CALCULATION** on `SPCChartCalculationID`
- **IF_SPC_CHART_ALERT_SPC_CHART_DATA** on `SPCChartDataID`
