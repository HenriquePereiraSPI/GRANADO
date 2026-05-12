# ALERT_TYPE

**Database:** Operational

**Description:** Contains the various types of Alerts (pre-defined and user added) in the system.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| ID | SMALLINT(5,0) | False |  | True |  | Unique identifier of a record (key) in a table. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_ALERT_TYPE** on `ID`

## Foreign Keys (this table -> other)

- **** —  (``)

## Referenced By (other tables -> this)

- **FK_ALERT_ALERT_TYPE** — ALERT -> ALERT_TYPE (`AlertTypeID -> ID`)
- **FK_MAINT_TEMPLATE_TASK_ALERT_TYPE** — MAINT_TEMPLATE_TASK -> ALERT_TYPE (`AlertTypeID -> ID`)
- **FK_RESOURCE_MAINT_TASK_ALERT_TYPE** — RESOURCE_MAINT_TASK -> ALERT_TYPE (`AlertTypeID -> ID`)
- **FK_SPC_CHART_ALERT_RULE_ALERT_TYPE** — SPC_CHART_ALERT_RULE -> ALERT_TYPE (`AlertType -> ID`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **** on ``
