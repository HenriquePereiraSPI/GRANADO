# KPI_LINK_KPI_ALERT_RULE

**Database:** Solution Authoring

**Description:** Contains the necessary link between a KPI and its Alert Rules

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| KpiAlertRuleID | INT(10,0) | False |  | True | KPI_ALERT_RULE | Unique identifier of KPI Alert Rule |
| KpiName | NVARCHAR(50) | False |  | True | KPI | Unique identifier of KPI |

## Primary Key

- **PK_KPI_LINK_KPI_ALERT_RULE** on `KpiName, KpiAlertRuleID`

## Foreign Keys (this table -> other)

- **FK_KPI_LINK_KPI_ALERT_RULE_KPI** — KPI_LINK_KPI_ALERT_RULE -> KPI (`KpiName -> Name`)
- **FK_KPI_LINK_KPI_ALERT_RULE_KPI_ALERT_RULE** — KPI_LINK_KPI_ALERT_RULE -> KPI_ALERT_RULE (`KpiAlertRuleID -> ID`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_KPI_LINK_KPI_ALERT_RULE_KPI_ALERT_RULE** on `KpiAlertRuleID`
