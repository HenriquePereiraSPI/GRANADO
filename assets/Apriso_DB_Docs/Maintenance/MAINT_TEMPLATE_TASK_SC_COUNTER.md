# MAINT_TEMPLATE_TASK_SC_COUNTER

**Database:** Operational

**Description:** This table contains schedule definition for counters in the given Template.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| CounterID | INT(10,0) | False |  | False | COUNTER | ID of the Counter. |
| ID | INT(10,0) | False |  | True |  | Unique ID of the row. |
| MaintTemplateTaskScheduleID | INT(10,0) | False |  | False | MAINT_TEMPLATE_TASK_SCHEDULE | ID of the Maintenance Template Schedule. |
| TriggerValue | DECIMAL(28,10) | True |  | False |  | Value of the Counter. |

## Primary Key

- **PK_MAINT_TEMPLATE_TASK_SC_COUNTER** on `ID`

## Foreign Keys (this table -> other)

- **FK_MAINT_TEMPLATE_TASK_SC_COUNTER_COUNTER** — MAINT_TEMPLATE_TASK_SC_COUNTER -> COUNTER (`CounterID -> ID`)
- **FK_MAINT_TEMPLATE_TASK_SC_COUNTER_MAINT_TEMPLATE_TASK_SCHEDULE** — MAINT_TEMPLATE_TASK_SC_COUNTER -> MAINT_TEMPLATE_TASK_SCHEDULE (`MaintTemplateTaskScheduleID -> ID`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **UK_MAINT_TEMPLATE_TASK_SC_COUNTER** on `CounterID, MaintTemplateTaskScheduleID`

## Non-Unique Indexes

- **IF_MAINT_TEMPLATE_TASK_SC_COUNTER_MAINT_TEMPLATE_TASK_SCHEDULE** on `MaintTemplateTaskScheduleID`
