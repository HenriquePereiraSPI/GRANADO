# RESOURCE_MAINT_TASK_SC_EX_RULE

**Database:** Operational

**Description:** This table contains exception rules (based on specified Earn Codes) for generating Maintenance Orders.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| EarnCode | NVARCHAR(20) | False |  | False | EARN_CODE | Earn code for which exception rule is defined. |
| ExceptionType | INT(10,0) | False |  | False |  | Exception Type: 1 - do not generate Maintenance Order, 2 - generate Maintenance Order before scheduled time, 3 - generate Maintenance Order after scheduled time. |
| GenerateOrderDaysOffset | INT(10,0) | False |  | False |  | Maintenance Order generation offset defined in days. Depending on the value of the ExceptionType, the Maintenance Order will be generated a given number of days before the scheduled time or after the scheduled time. |
| ID | INT(10,0) | False |  | True |  | Unique ID of the row. |
| ResourceMaintTaskScheduleID | INT(10,0) | False |  | False | RESOURCE_MAINT_TASK_SCHEDULE | ID of the Maintenance Procedure Schedule. |

## Primary Key

- **PK_RESOURCE_MAINT_TASK_SC_EX_RULE** on `ID`

## Foreign Keys (this table -> other)

- **FK_RESOURCE_MAINT_TASK_SC_EX_RULE_01** — RESOURCE_MAINT_TASK_SC_EX_RULE -> EARN_CODE (`EarnCode -> EarnCode`)
- **FK_RESOURCE_MAINT_TASK_SC_EX_RULE_02** — RESOURCE_MAINT_TASK_SC_EX_RULE -> RESOURCE_MAINT_TASK_SCHEDULE (`ResourceMaintTaskScheduleID -> ID`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **UK_RESOURCE_MAINT_TASK_SC_EX_RULE** on `EarnCode, ResourceMaintTaskScheduleID`

## Non-Unique Indexes

- **IF_RESOURCE_MAINT_TASK_SC_EX_RULE_02** on `ResourceMaintTaskScheduleID`
