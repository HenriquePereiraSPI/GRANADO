# SPC_CHART_ALERT_RULE

**Database:** Operational

**Description:** Stores the rules and alert configuration for SPC Charts calculations. If the SPC rule is broken during SPC calculation then an alert is generated.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| AlertClassID | INT(10,0) | True |  | False | ALERT_CLASS | The alert class used to create the alert for the SPC Chart |
| AlertType | SMALLINT(5,0) | True |  | False | ALERT_TYPE | The alert type used to create the alert for the SPC Chart |
| CheckAlternatingPoints | BIT | True |  | False |  | Check for alternating points (up,down,up,down,up,down etc). |
| CheckPointsInARow | BIT | True |  | False |  | Check for x number of points in a row increasing or decreasing consecutively |
| CheckPointsZoneA | BIT | True |  | False |  | Do you want to check the number of points in zone A? |
| CheckPointsZoneB | BIT | True |  | False |  | Do you want to check the number of points in zone B? |
| FUID | NVARCHAR(36) | False |  | False |  | Global unique indentifier for use within GPM |
| ID | INT(10,0) | False |  | True |  | Auto Increment PK |
| IsWECORule | BIT | True |  | False |  | Determines if the alert should use WECO rules or not |
| LastPointOutControlLimit | BIT | True |  | False |  | Trigger alert if the last point is outside the control limit |
| LastPointOutSpecLimit | BIT | True |  | False |  | Trigger alert if the last point is outside spec limit |
| Message | NVARCHAR(255) | True |  | False |  | Message to be displayed |
| Name | NVARCHAR(80) | True |  | False |  | Alert Name |
| NumberOfAlternatingPoints | INT(10,0) | True |  | False |  | Number of alternating points (check only when CheckAlternatingPoints = True) |
| NumberOfPointsInARow | INT(10,0) | True |  | False |  | Number of points in a row (Only check when CheckPointsInARow = True) |
| OnePointOutControlLimit | BIT | True |  | False |  | Trigger alert if one point is outside the control limit |
| OnePointOutSpecLimit | BIT | True |  | False |  | Trigger alert if one point is outside spec limit |
| PointsInARowZoneA | INT(10,0) | True |  | False |  | Number of points to check for in Zone A (only check when CheckPointsZoneA = True) |
| PointsInARowZoneB | INT(10,0) | True |  | False |  | Out of how many points to check for in Zone B. (only check when CheckPointsZoneB = True) |
| PointsRangeZoneA | INT(10,0) | True |  | False |  | Out of how many points to check for in Zone A. (only check when CheckPointsZoneA = True) |
| PointsRangeZoneB | INT(10,0) | True |  | False |  | Out of how many points to check for in Zone B. (only check when CheckPointsZoneB = True) |
| SPCChartID | INT(10,0) | True |  | False | SPC_CHART | The SPC Chart the alert is to be generated for |
| SPCChartPropertiesID | INT(10,0) | True |  | False | SPC_CHART_PROPERTIES | The SPC Chart properties the alert is to be generated for |

## Primary Key

- **PK_SPC_CHART_ALERT_RULE** on `ID`

## Foreign Keys (this table -> other)

- **FK_SPC_CHART_ALERT_RULE_ALERT_CLASS** — SPC_CHART_ALERT_RULE -> ALERT_CLASS (`AlertClassID -> ID`)
- **FK_SPC_CHART_ALERT_RULE_ALERT_TYPE** — SPC_CHART_ALERT_RULE -> ALERT_TYPE (`AlertType -> ID`)
- **FK_SPC_CHART_ALERT_RULE_SPC_CHART** — SPC_CHART_ALERT_RULE -> SPC_CHART (`SPCChartID -> ID`)
- **FK_SPC_CHART_ALERT_RULE_SPC_CHART_PROPERTIES** — SPC_CHART_ALERT_RULE -> SPC_CHART_PROPERTIES (`SPCChartPropertiesID -> ID`)

## Referenced By (other tables -> this)

- **FK_SPC_CHART_ALERT_SPC_CHART_ALERT_RULE** — SPC_CHART_ALERT -> SPC_CHART_ALERT_RULE (`SPCChartAlertRule -> ID`)

## Unique Indexes

- **UK_SPC_CHART_ALERT_RULE** on `FUID`

## Non-Unique Indexes

- **IF_SPC_CHART_ALERT_RULE_ALERT_CLASS** on `AlertClassID`
- **IF_SPC_CHART_ALERT_RULE_SPC_CHART** on `SPCChartID`
- **IF_SPC_CHART_ALERT_RULE_SPC_CHART_PROPERTIES** on `SPCChartPropertiesID`
