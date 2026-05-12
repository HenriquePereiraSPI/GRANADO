# ALERT_CLASS

**Database:** Operational

**Description:** Contains the user-defined classes of Alerts.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| FUID | NVARCHAR(36) | False |  | False |  | Unique identifier of the entity across multiple DELMIA Apriso instances. |
| ID | INT(10,0) | False |  | True |  | Unique identifier of a record (key) in a table. |
| Name | NVARCHAR(255) | False |  | False |  | Name of the Alert Class. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_ALERT_CLASS** on `ID`

## Foreign Keys (this table -> other)

- **** —  (``)

## Referenced By (other tables -> this)

- **FK_ALERT_ALERT_CLASS** — ALERT -> ALERT_CLASS (`AlertClassID -> ID`)
- **FK_JOB_ALERT_CLASS** — JOB -> ALERT_CLASS (`AlertClassID -> ID`)
- **FK_MAINT_TEMPLATE_TASK_ALERT_CLASS** — MAINT_TEMPLATE_TASK -> ALERT_CLASS (`AlertClassID -> ID`)
- **FK_RESOURCE_MAINT_TASK_ALERT_CLASS** — RESOURCE_MAINT_TASK -> ALERT_CLASS (`AlertClassID -> ID`)
- **FK_SPC_CHART_ALERT_RULE_ALERT_CLASS** — SPC_CHART_ALERT_RULE -> ALERT_CLASS (`AlertClassID -> ID`)

## Unique Indexes

- **UK_ALERT_CLASS** on `FUID`
- **UK_ALERT_CLASS_Name** on `Name`

## Non-Unique Indexes

- **** on ``
