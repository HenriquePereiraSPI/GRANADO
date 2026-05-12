# TASK

**Database:** Operational

**Description:** This table contains the task records. In Complex Assembly, the master task is generated per WIP Operation/Serial Number.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| ActualDurationSeconds | INT(10,0) | True |  | False |  | The actual duration of the task in seconds. |
| ActualFinishDate | DATETIME | True |  | False |  | The actual date the when the task was completed. |
| ActualStartDate | DATETIME | True |  | False |  | The actual start date of the schedule. |
| AllocationFailed | TINYINT(3,0) | True |  | False |  | Indicates if the allocation has failed. |
| AllocationPending | TINYINT(3,0) | True |  | False |  | For future use. |
| EarliestStartDate | DATETIME | True |  | False |  | For future use. |
| EffectiveDate | DATETIME | True |  | False | WORK_PERIOD | The validity date (start) of the entity in UTC. |
| EmployeeID | INT(10,0) | True |  | False | EMPLOYEE | The ID of the Employee record with which this table is associated. This is populated for child tasks. |
| ExpectedDurationSeconds | INT(10,0) | True |  | False |  | The expected duration of the task. |
| ExpectedFinishDate | DATETIME | True |  | False |  | For future use. |
| ExpectedStartDate | DATETIME | True |  | False |  | For future use. |
| Facility | NVARCHAR(40) | True |  | False | FACILITY | The Facility in which the task will be visible. |
| FiCubeID | INT(10,0) | True |  | False |  | For internal use. |
| ID | INT(10,0) | False |  | True |  | The unique identifier of the task. |
| LastEmployeeID | INT(10,0) | True |  | False | EMPLOYEE | For future use. |
| LastTaskStatus | SMALLINT(5,0) | True |  | False | TASK_STATUS | The last status of the task |
| LatestStartDate | DATETIME | True |  | False |  | For future use. |
| MasterTaskID | INT(10,0) | True |  | False | TASK | The reference to a master task (if linked to a WIP Operation). This is populated for child tasks. |
| MaterialOrderLineNo | INT(10,0) | True |  | False | MATERIAL_ORDER_DETAIL | For future use. |
| MaterialOrderNo | NVARCHAR(40) | True |  | False | MATERIAL_ORDER_DETAIL | For future use. |
| MaterialOrderType | SMALLINT(5,0) | True |  | False | MATERIAL_ORDER_DETAIL | For future use. |
| MaxConcurrentResources | TINYINT(3,0) | True |  | False |  | The maximum number of users that might start a child task as a child of the master task. |
| NeedByDate | DATETIME | True |  | False |  | For future use. |
| NextTaskID | INT(10,0) | True |  | False | TASK | Link to the TASK table. |
| NoteID | INT(10,0) | True |  | False | NOTE | The reference to a note. |
| NumberCurrentResources | TINYINT(3,0) | True |  | False |  | The number of Resources that can start the task simultaneously. |
| OperationID | INT(10,0) | True |  | False | OPERATION | The ID of the Operation linked to the task. |
| OprSequenceNo | NVARCHAR(20) | True |  | False | WIP_OPERATION | The WIP Operation number. |
| OrderDistribution | INT(10,0) | True |  | False | INBOUND_ORDER_DISTRIBUTION | For future use. |
| OrderLineNo | INT(10,0) | True |  | False | INBOUND_ORDER_DISTRIBUTION | For future use. |
| OrderLineSchedule | INT(10,0) | True |  | False | INBOUND_ORDER_DISTRIBUTION | For future use. |
| OrderNo | NVARCHAR(20) | True |  | False | INBOUND_ORDER_DISTRIBUTION | For future use. |
| OrderType | SMALLINT(5,0) | True |  | False | INBOUND_ORDER_DISTRIBUTION | For future use. |
| PayRule | NVARCHAR(20) | True |  | False |  | The Pay Rule with which the task is associated. |
| PercentageCompleted | DECIMAL(28,10) | True |  | False |  | The percentage of work already completed for the order, Operation, etc. Valid values are in the range of 0 (nothing) to 1 (100%). |
| PreviousTaskID | INT(10,0) | True |  | False | TASK | Link to the TASK table. |
| Priority | NVARCHAR(20) | True | (100) | False |  | The priority of the task. |
| ProcessOperationID | INT(10,0) | True |  | False | PROCESS_OPERATION | The link to the Process Operation. |
| ReasonCode | NVARCHAR(20) | True |  | False | REASON_CODE | Link to the REASON_CODE table. |
| ResourceClassID | INT(10,0) | True |  | False | RESOURCE_CLASS | For future use. |
| ResourceName | NVARCHAR(80) | True |  | False | RESOURCE_ | For future use. |
| ResourceType | SMALLINT(5,0) | True |  | False | RESOURCE_ | The Resource type defined uniquely for the Resource. |
| RoleID | INT(10,0) | True |  | False | ROLE | For future use. |
| ScheduledDurationSeconds | INT(10,0) | True |  | False |  | The duration of the task in seconds. |
| ScheduledStartDate | DATETIME | True |  | False |  | The start date of the schedule. |
| ScheduleFinishDate | DATETIME | True |  | False |  | For future use. |
| Shift | NVARCHAR(20) | True |  | False | WORK_PERIOD | The shift in which the task was performed. |
| TaskGroupID | INT(10,0) | True |  | False | TASK_GROUP | For future use. |
| TaskProgressStatus | INT(10,0) | True |  | False | PROGRESS_STATUS | Link to the PROGRESS_STATUS table. |
| TaskStatus | SMALLINT(5,0) | False |  | False | TASK_STATUS | The status of the task. Only statuses 5, 6, 9, and 10 are used in Complex Assembly. |
| TaskType | SMALLINT(5,0) | False |  | False | TASK_TYPE | The type of task. Only type 1 is used in Complex Assembly. |
| Team | NVARCHAR(40) | True |  | False | TEAM | For future use. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |
| UnitID | INT(10,0) | True |  | False | UNIT | Unique identifier of the Unit. |
| UserMaxNumberOfTasks | INT(10,0) | True |  | False |  | The number of tasks that the user can process in parallel. |
| WipOrderNo | NVARCHAR(40) | True |  | False | WIP_OPERATION | The WIP Order number. |
| WipOrderType | SMALLINT(5,0) | True |  | False | WIP_OPERATION | The WIP Order type. |
| WipResource | INT(10,0) | True |  | False | WIP_REQ_RESOURCE | For future use. |
| WorkCenter | NVARCHAR(40) | True |  | False | WORK_CENTER | The assignment of the task to a Work Center. |
| WorkPeriod | NVARCHAR(20) | True |  | False | WORK_PERIOD | The Work Period with which the task is associated. |

## Primary Key

- **PK_TASK** on `ID`

## Foreign Keys (this table -> other)

- **FK_TASK_EMPLOYEE** — TASK -> EMPLOYEE (`EmployeeID -> ID`)
- **FK_TASK_EMPLOYEE1** — TASK -> EMPLOYEE (`LastEmployeeID -> ID`)
- **FK_TASK_FACILITY** — TASK -> FACILITY (`Facility -> Facility`)
- **FK_TASK_INBOUND_ORDER_DISTRIBUTION** — TASK -> INBOUND_ORDER_DISTRIBUTION (`OrderNo, OrderType, OrderLineNo, OrderLineSchedule, OrderDistribution -> OrderNo, OrderType, OrderLineNo, OrderLineSchedule, OrderDistribution`)
- **FK_TASK_MATERIAL_ORDER_DETAIL** — TASK -> MATERIAL_ORDER_DETAIL (`MaterialOrderNo, MaterialOrderType, MaterialOrderLineNo -> OrderNo, OrderType, OrderLineNo`)
- **FK_TASK_NOTE** — TASK -> NOTE (`NoteID -> ID`)
- **FK_TASK_OPERATION** — TASK -> OPERATION (`OperationID -> ID`)
- **FK_TASK_PROCESS_OPERATION** — TASK -> PROCESS_OPERATION (`ProcessOperationID -> ID`)
- **FK_TASK_PROGRESS_STATUS** — TASK -> PROGRESS_STATUS (`TaskProgressStatus -> ProgressStatus`)
- **FK_TASK_REASON_CODE** — TASK -> REASON_CODE (`ReasonCode -> ReasonCode`)
- **FK_TASK_RESOURCE_** — TASK -> RESOURCE_ (`ResourceType, ResourceName -> ResourceType, ResourceName`)
- **FK_TASK_RESOURCE_CLASS** — TASK -> RESOURCE_CLASS (`ResourceClassID -> ID`)
- **FK_TASK_ROLE** — TASK -> ROLE (`RoleID -> ID`)
- **FK_TASK_TASK** — TASK -> TASK (`MasterTaskID -> ID`)
- **FK_TASK_TASK_GROUP** — TASK -> TASK_GROUP (`TaskGroupID -> ID`)
- **FK_TASK_TASK_STATUS** — TASK -> TASK_STATUS (`TaskStatus -> TaskStatus`)
- **FK_TASK_TASK_STATUS1** — TASK -> TASK_STATUS (`LastTaskStatus -> TaskStatus`)
- **FK_TASK_TASK_TYPE** — TASK -> TASK_TYPE (`TaskType -> TaskType`)
- **FK_TASK_TASK1** — TASK -> TASK (`PreviousTaskID -> ID`)
- **FK_TASK_TASK2** — TASK -> TASK (`NextTaskID -> ID`)
- **FK_TASK_TEAM** — TASK -> TEAM (`Facility, Team -> Facility, Team`)
- **FK_TASK_UNIT** — TASK -> UNIT (`UnitID -> ID`)
- **FK_TASK_WIP_OPERATION** — TASK -> WIP_OPERATION (`WipOrderNo, WipOrderType, OprSequenceNo -> WipOrderNo, WipOrderType, OprSequenceNo`)
- **FK_TASK_WIP_REQ_RESOURCE** — TASK -> WIP_REQ_RESOURCE (`WipResource -> ID`)
- **FK_TASK_WORK_CENTER** — TASK -> WORK_CENTER (`WorkCenter -> WorkCenter`)
- **FK_TASK_WORK_PERIOD** — TASK -> WORK_PERIOD (`Facility, Shift, WorkPeriod, EffectiveDate -> Facility, Shift, WorkPeriod, EffectiveDate`)

## Referenced By (other tables -> this)

- **FK_ALERT_DETAIL_TASK** — ALERT_DETAIL -> TASK (`SourceTaskID -> ID`)
- **FK_ALERT_RECIPIENT_TASK** — ALERT_RECIPIENT -> TASK (`TaskID -> ID`)
- **FK_DISPATCH_SEQUENCE_TASK** — DISPATCH_SEQUENCE -> TASK (`FromTaskID -> ID`)
- **FK_DISPATCH_SEQUENCE_TASK_2** — DISPATCH_SEQUENCE -> TASK (`ToTaskID -> ID`)
- **FK_INVENTORY2_ALLOCATION_TASK** — INVENTORY2_ALLOCATION -> TASK (`TaskID -> ID`)
- **FK_NOTICE_ACKNOWLEDGEMENT_TASK** — NOTICE_ACKNOWLEDGEMENT -> TASK (`TaskID -> ID`)
- **FK_ORDER_DETAIL_TASK** — ORDER_DETAIL -> TASK (`TaskID -> ID`)
- **FK_ORDER_HEADER_TASK** — ORDER_HEADER -> TASK (`TaskID -> ID`)
- **FK_SEQUENCE_QUEUE_ITEM_TASK** — SEQUENCE_QUEUE_ITEM -> TASK (`TaskID -> ID`)
- **FK_TASK_EQUIPMENT_USE_TASK** — TASK_EQUIPMENT_USE -> TASK (`TaskID -> ID`)
- **FK_TASK_MATERIAL_USE_TASK** — TASK_MATERIAL_USE -> TASK (`TaskID -> ID`)
- **FK_TASK_NOTE_TASK** — TASK_NOTE -> TASK (`TaskID -> ID`)
- **FK_TASK_RESOURCE_USE_TASK** — TASK_RESOURCE_USE -> TASK (`TaskID -> ID`)
- **FK_TASK_STEP_TASK** — TASK_STEP -> TASK (`TaskID -> ID`)
- **FK_TASK_TASK** — TASK -> TASK (`MasterTaskID -> ID`)
- **FK_TASK_TASK1** — TASK -> TASK (`PreviousTaskID -> ID`)
- **FK_TASK_TASK2** — TASK -> TASK (`NextTaskID -> ID`)

## Check Constraints

- **CK_TASK_PercentageCompleted**: 

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_TASK_INBOUND_ORDER_DISTRIBUTION** on `OrderNo, OrderType, OrderLineNo, OrderLineSchedule, OrderDistribution`
- **IF_TASK_MATERIAL_ORDER_DETAIL** on `MaterialOrderNo, MaterialOrderType, MaterialOrderLineNo`
- **IF_TASK_NOTE** on `NoteID`
- **IF_TASK_OPERATION** on `OperationID`
- **IF_TASK_PROCESS_OPERATION** on `ProcessOperationID`
- **IF_TASK_PROGRESS_STATUS** on `TaskProgressStatus`
- **IF_TASK_RESOURCE_** on `ResourceName, ResourceType`
- **IF_TASK_RESOURCE_CLASS** on `ResourceClassID`
- **IF_TASK_ROLE** on `RoleID`
- **IF_TASK_TASK** on `MasterTaskID`
- **IF_TASK_TASK_GROUP** on `TaskGroupID`
- **IF_TASK_TASK_STATUS** on `TaskStatus`
- **IF_TASK_TASK_STATUS1** on `LastTaskStatus`
- **IF_TASK_TASK1** on `PreviousTaskID`
- **IF_TASK_TASK2** on `NextTaskID`
- **IF_TASK_TEAM** on `Facility, Team`
- **IF_TASK_UNIT** on `UnitID`
- **IF_TASK_WIP_REQ_RESOURCE** on `WipResource`
- **IF_TASK_WORK_PERIOD** on `Shift, Facility, WorkPeriod, EffectiveDate`
- **IXD_EmployeeID_TaskStatus_MasterTaskID** on `EmployeeID, TaskStatus, MasterTaskID`
- **IXD_WipOrderNo_WipOrderType_OprSequenceNo_EmployeeID** on `WipOrderNo, WipOrderType, OprSequenceNo, EmployeeID`
