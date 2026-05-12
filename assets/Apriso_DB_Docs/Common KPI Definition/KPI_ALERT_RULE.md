# KPI_ALERT_RULE

**Database:** Solution Authoring

**Description:** Contains the definition of rules used to determine if a KPI calculation generates an Alert

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| AlertClassName | NVARCHAR(255) | True |  | False |  | Reference to the Name column in the ALERT_CLASS table. |
| AlertType | SMALLINT(5,0) | True |  | False |  | The alert type used to create the alert for the KPI |
| ConstraintFilterString | NVARCHAR | True |  | False |  | Filter string for Alert Rule constraints |
| EnableMessaging | BIT | False | ((0)) | False |  | The flag indicating if Messaging is enabled on this KPI Alert Rule. |
| FUID | NVARCHAR(36) | True |  | False |  | Global unique indentifier for use within GPM |
| GenerateConsecutiveAlerts | BIT | True |  | False |  | Flag controlling whether alerts can be generated consecutively. |
| ID | INT(10,0) | False |  | True |  | Unique identifier of KPI Alert Rule |
| Message | NVARCHAR(255) | True |  | False |  | Message to be displayed |
| Name | NVARCHAR(50) | False |  | False |  | Alert Rule Name |

## Primary Key

- **PK_KPI_ALERT_RULE** on `ID`

## Foreign Keys (this table -> other)

- **** —  (``)

## Referenced By (other tables -> this)

- **FK_KPI_LINK_KPI_ALERT_RULE_KPI_ALERT_RULE** — KPI_LINK_KPI_ALERT_RULE -> KPI_ALERT_RULE (`KpiAlertRuleID -> ID`)

## Unique Indexes

- **UK_KPI_ALERT_RULE_FUID** on `FUID`
- **UK_KPI_ALERT_RULE_NAME** on `Name`

## Non-Unique Indexes

- **IF_KPI_ALERT_RULE_ALERT_CLASS** on `AlertClassName`
