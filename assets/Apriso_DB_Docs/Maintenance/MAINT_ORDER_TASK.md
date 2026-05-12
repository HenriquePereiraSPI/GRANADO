# MAINT_ORDER_TASK

**Database:** Operational

**Description:** The table contains links between WIP Orders and Maintenance Procedures (formerly named Maintenance Tasks).

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| ActualTeam | NVARCHAR(40) | True |  | False | TEAM | Team that is currently assigned to execute Maintenance Order. By default it's the same as Scheduled Team but can be manually changed. |
| ActualWorkPeriod | NVARCHAR(20) | True |  | False | WORK_PERIOD | Actual Work Period. |
| ActualWorkPeriodEffDate | DATETIME | True |  | False | WORK_PERIOD | Actual Work Period Effective Date. |
| ActualWorkPeriodFacility | NVARCHAR(40) | True |  | False | WORK_PERIOD | Actual Work Period Facility. |
| ActualWorkPeriodShift | NVARCHAR(20) | True |  | False | WORK_PERIOD | Actual Work Period Shift. |
| BlockResource | BIT | True |  | False |  | Indicates if the Resource should be blocked. |
| CheckListID | INT(10,0) | True |  | False | CHECK_LIST | Link to the CHECK_LIST table. |
| Comment_ | NVARCHAR(2000) | True |  | False |  | Comment given by Maintenance Worker with aim that it can be useful for another Maintenance Worker who will be executing the same Maintenance Procedure. Used mostly for Maintenance Preventive Orders to give e.g. suggestions of improvements. |
| CompletionComment | NVARCHAR(2000) | True |  | False |  | Comment provided when the Order is completed. |
| DisableReschedule | BIT | False | ((0)) | False |  | The flag indicates if created Maintenance Order can be rescheduled. |
| ReasonCode | NVARCHAR(20) | True |  | False | REASON_CODE | Reason Code of the Maintenance Order. For Maintenance Preventive Orders Reason Code indicates area to which the comment refer. For Maintenance Reactive Orders it indicates why the correction maintenance was needed. For the purpose of Maintenance, only Reason Codes of Reason Type = 11 (Plant Maintenance) and Usage = 8 (Maintenance) will be allowed. |
| ResourceFacility | NVARCHAR(40) | True |  | False | TEAM | Facility of the Resource. |
| ResourceMaintTaskID | INT(10,0) | False |  | True | RESOURCE_MAINT_TASK | Maintenance Procedure (formerly named Maintenance Task) for which the Maintenance Order was created. |
| ResourceMaintTaskScheduleID | INT(10,0) | True |  | False | RESOURCE_MAINT_TASK_SCHEDULE | ID of the Maintenance Procedure Schedule. |
| ScheduledTeam | NVARCHAR(40) | True |  | False | TEAM | Team that is scheduled to execute Maintenance Order. |
| ScheduledWorkPeriod | NVARCHAR(20) | True |  | False | WORK_PERIOD | Schedule Work Period. |
| ScheduledWorkPeriodEffDate | DATETIME | True |  | False | WORK_PERIOD | Scheduled Work Period Effective Date. |
| ScheduledWorkPeriodFacility | NVARCHAR(40) | True |  | False | WORK_PERIOD | Scheduled Work Period Facility. |
| ScheduledWorkPeriodShift | NVARCHAR(20) | True |  | False | WORK_PERIOD | Scheduled Work Period Shift. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |
| UnitID | INT(10,0) | True |  | False | UNIT | Unique identifier of the Unit. |
| VerificationRequired | BIT | True |  | False |  | Indicates if verification is required. |
| WipOrderNo | NVARCHAR(40) | False |  | True | WIP_ORDER | Link to the WIP Order. |
| WipOrderType | SMALLINT(5,0) | False |  | True | WIP_ORDER | Link to the WIP Order Type. |

## Primary Key

- **PK_MAINT_ORDER_TASK** on `WipOrderNo, WipOrderType, ResourceMaintTaskID`

## Foreign Keys (this table -> other)

- **FK_MAINT_ORDER_TASK_ACTUAL_TEAM** — MAINT_ORDER_TASK -> TEAM (`ActualTeam, ResourceFacility -> Team, Facility`)
- **FK_MAINT_ORDER_TASK_CHECK_LIST** — MAINT_ORDER_TASK -> CHECK_LIST (`CheckListID -> ID`)
- **FK_MAINT_ORDER_TASK_REASON_CODE** — MAINT_ORDER_TASK -> REASON_CODE (`ReasonCode -> ReasonCode`)
- **FK_MAINT_ORDER_TASK_RESOURCE_FACILITY** — MAINT_ORDER_TASK -> FACILITY (`ResourceFacility -> Facility`)
- **FK_MAINT_ORDER_TASK_RESOURCE_MAINT_TASK** — MAINT_ORDER_TASK -> RESOURCE_MAINT_TASK (`ResourceMaintTaskID -> ID`)
- **FK_MAINT_ORDER_TASK_RESOURCE_MAINT_TASK_SCHEDULE** — MAINT_ORDER_TASK -> RESOURCE_MAINT_TASK_SCHEDULE (`ResourceMaintTaskScheduleID -> ID`)
- **FK_MAINT_ORDER_TASK_SCHEDULED_TEAM** — MAINT_ORDER_TASK -> TEAM (`ScheduledTeam -> Team`)
- **FK_MAINT_ORDER_TASK_UNIT** — MAINT_ORDER_TASK -> UNIT (`UnitID -> ID`)
- **FK_MAINT_ORDER_TASK_WIP_ORDER** — MAINT_ORDER_TASK -> WIP_ORDER (`WipOrderNo, WipOrderType -> WipOrderNo, WipOrderType`)
- **FK_MAINT_ORDER_TASK_WORK_PERIOD_01** — MAINT_ORDER_TASK -> WORK_PERIOD (`ScheduledWorkPeriodShift, ScheduledWorkPeriodFacility, ScheduledWorkPeriod, ScheduledWorkPeriodEffDate -> Shift, Facility, WorkPeriod, EffectiveDate`)
- **FK_MAINT_ORDER_TASK_WORK_PERIOD_02** — MAINT_ORDER_TASK -> WORK_PERIOD (`ActualWorkPeriodShift, ActualWorkPeriodFacility, ActualWorkPeriod, ActualWorkPeriodEffDate -> Shift, Facility, WorkPeriod, EffectiveDate`)
- **FK_MAINT_ORDER_TASK_WORK_SHIFT_01** — MAINT_ORDER_TASK -> WORK_SHIFT (`ScheduledWorkPeriodShift, ScheduledWorkPeriodFacility -> Shift, Facility`)
- **FK_MAINT_ORDER_TASK_WORK_SHIFT_02** — MAINT_ORDER_TASK -> WORK_SHIFT (`ActualWorkPeriodShift, ActualWorkPeriodFacility -> Shift, Facility`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_MAINT_ORDER_TASK_ACTUAL_TEAM** on `ResourceFacility, ActualTeam`
- **IF_MAINT_ORDER_TASK_CHECK_LIST** on `CheckListID`
- **IF_MAINT_ORDER_TASK_RESOURCE_MAINT_TASK** on `ResourceMaintTaskID`
- **IF_MAINT_ORDER_TASK_RESOURCE_MAINT_TASK_SCHEDULE** on `ResourceMaintTaskScheduleID`
- **IF_MAINT_ORDER_TASK_SCHEDULED_TEAM** on `ResourceFacility, ScheduledTeam`
- **IF_MAINT_ORDER_TASK_UNIT** on `UnitID`
- **IF_MAINT_ORDER_TASK_WORK_PERIOD_01** on `ScheduledWorkPeriodShift, ScheduledWorkPeriodFacility, ScheduledWorkPeriod, ScheduledWorkPeriodEffDate`
- **IF_MAINT_ORDER_TASK_WORK_PERIOD_02** on `ActualWorkPeriodShift, ActualWorkPeriodFacility, ActualWorkPeriod, ActualWorkPeriodEffDate`
