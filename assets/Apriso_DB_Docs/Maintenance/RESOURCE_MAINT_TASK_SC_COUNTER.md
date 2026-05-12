# RESOURCE_MAINT_TASK_SC_COUNTER

**Database:** Operational

**Description:** This table contains schedule definition for counters in the given Equipment.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| ID | INT(10,0) | False |  | True |  | Unique ID of the row. |
| LastCounterValue | DECIMAL(28,10) | True |  | False |  | Last value of the Counter. |
| ResourceCounterID | INT(10,0) | False |  | False | RESOURCE_COUNTER | ID of the Resource Counter. |
| ResourceMaintTaskScheduleID | INT(10,0) | False |  | False | RESOURCE_MAINT_TASK_SCHEDULE | ID of the Maintenance Procedure Schedule. |
| TriggerValue | DECIMAL(28,10) | True |  | False |  | Value of the Counter. |

## Primary Key

- **PK_RESOURCE_MAINT_TASK_SC_COUNTER** on `ID`

## Foreign Keys (this table -> other)

- **FK_RESOURCE_MAINT_TASK_SC_COUNTER_RESOURCE_COUNTER** — RESOURCE_MAINT_TASK_SC_COUNTER -> RESOURCE_COUNTER (`ResourceCounterID -> ID`)
- **FK_RESOURCE_MAINT_TASK_SC_COUNTER_RESOURCE_MAINT_TASK_SCHEDULE** — RESOURCE_MAINT_TASK_SC_COUNTER -> RESOURCE_MAINT_TASK_SCHEDULE (`ResourceMaintTaskScheduleID -> ID`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **UK_RESOURCE_MAINT_TASK_SC_COUNTER** on `ResourceCounterID, ResourceMaintTaskScheduleID`

## Non-Unique Indexes

- **IF_RESOURCE_MAINT_TASK_SC_COUNTER_RESOURCE_MAINT_TASK_SCHEDULE** on `ResourceMaintTaskScheduleID`
