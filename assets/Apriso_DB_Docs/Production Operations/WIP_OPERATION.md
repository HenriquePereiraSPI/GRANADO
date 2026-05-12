# WIP_OPERATION

**Database:** Operational

**Description:** This table contains the WIP Operations linked to the various WIP Orders in the system.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| ActualCompletionDate | DATETIME | True | (getutcdate()) | False |  | The actual completion date of the WIP Operation. |
| ActualDurationSeconds | INT(10,0) | True |  | False |  | The actual duration of the WIP Operation in seconds. |
| ActualStartDate | DATETIME | True | (getutcdate()) | False |  | The actual start date of the WIP Operation. |
| ClassificationID | BIGINT(19,0) | True |  | False |  | Unique identifier of the classification. Currently supported for the maximum INT value. |
| DeterminationStrategyUsed | TINYINT(3,0) | True |  | False |  | The Explosion strategy used for the WIP Operation. |
| DiscontinueDate | DATETIME | True |  | False |  | The end of the validity of the entity. |
| DSID | NVARCHAR(100) | True |  | False |  | DELMIA 3DEXPERIENCE Universal Unique ID (Physical ID). |
| DSInstanceID | NVARCHAR(100) | True |  | False |  | DELMIA 3DEXPERIENCE Instance ID. |
| DSInstanceName | NVARCHAR(100) | True |  | False |  | DELMIA 3DEXPERIENCE Instance Name. |
| DSName | NVARCHAR(100) | True |  | False |  | DELMIA 3DEXPERIENCE Name. |
| DurationRemainingSeconds | INT(10,0) | True |  | False |  | For future use. |
| EcoID | INT(10,0) | True |  | False | EC_ORDER | For future use. |
| EffectiveDate | DATETIME | True |  | False |  | The validity date (start) of the entity in UTC. |
| ExecutionTemplate | NVARCHAR(80) | True |  | False |  | Used to decide which Operation to use during Explosion via the APR_PPR_EXPLOSION_OPERATION Determination. |
| ExpectedCompletionDate | DATETIME | True |  | False |  | The expected completion date of the WIP Operation. |
| ExpectedDurationSeconds | INT(10,0) | True |  | False |  | The expected duration of the WIP Operation in seconds. |
| ExpectedStartDate | DATETIME | True | (getutcdate()) | False |  | The expected start date of the WIP Operation. |
| InsideProcessFlag | BIT | True | (0) | False |  | For future use. |
| KanbanCards | SMALLINT(5,0) | True | (0) | False |  | For future use. |
| KanbanLotSizes | DECIMAL(28,10) | True | (0.0) | False |  | For future use. |
| LaborProrateType | SMALLINT(5,0) | True |  | False | LABOR_PRORATE_TYPE | The labor prorate type to be used if the Employee works on WIP_OPERATION. This attribute is copied into the LABOR record. |
| LinkToProcessID | INT(10,0) | True |  | False | PROCESS | The reference to the ProcessID linked to the Operation at Explosion time. |
| Milestone | BIT | True |  | False |  | Indicates if the Operation represents a milestone in the executed Process. |
| MinKanbanCards | SMALLINT(5,0) | True | (0) | False |  | For future use. |
| NextSequenceNo | NVARCHAR(20) | True |  | False |  | For future use. |
| Occupation | NVARCHAR(40) | True |  | False | OCCUPATION | For future use. |
| OccupationFacility | NVARCHAR(40) | True |  | False | OCCUPATION | For future use. |
| OperationActivityType | SMALLINT(5,0) | True |  | False | OPERATION_ACTIVITY_TYPE | Link to the OPERATION_ACTIVITY_TYPE table. |
| OperationCode | NVARCHAR(80) | True |  | False |  | The code of the Operation linked to the WIP Operation. |
| OperationHeaderID | INT(10,0) | True |  | False | OPERATION_HEADER | Link to the OPERATION_HEADER table. |
| OperationID | INT(10,0) | True |  | False | OPERATION | The ID of the Operation linked to the WIP Operation. |
| OperationStatus | SMALLINT(5,0) | True |  | False | WIP_OPERATION_STATUS | The current status of the WIP Operation. |
| OperationType | SMALLINT(5,0) | True |  | False | OPERATION_TYPE | The type of Operation (Labor or Machine). |
| OprSequenceNo | NVARCHAR(20) | False |  | True |  | The WIP Operation number. |
| OverrideWI | BIT | True |  | False |  | Indicates whether the Work Instruction should be overridden. |
| Parameters | NVARCHAR | True |  | False |  | The parameters for the WIP Operation. |
| PercentageCompleted | DECIMAL(28,10) | True |  | False |  | The percentage of work already completed for an order or operation. The valid values are in the range of 0 (nothing) to 1 (100%). |
| PreviousSequenceNo | NVARCHAR(20) | True |  | False |  | This column is populated only when the WIP Operation is first in the Sequence (value: FIRST). |
| Process | NVARCHAR(80) | True |  | False |  | The link to a Process name (after explosion 1 or 3). |
| ProcessID | INT(10,0) | True |  | False | PROCESS | The link to a Process. |
| ProcessOperationID | INT(10,0) | True |  | False | PROCESS_OPERATION | The Process Operation for which the WIP Operation was created during Explosion (type 1). |
| ProductRoutingID | INT(10,0) | True |  | False |  | For future use. |
| ProgressStatus | INT(10,0) | True |  | False | PROGRESS_STATUS | The progress status of the Operation. |
| ResourceRoutingID | INT(10,0) | True |  | False |  | For future use. |
| SamplePlanID | INT(10,0) | True |  | False | SAMPLE_PLAN | For future use. |
| SAPControlKey | NVARCHAR(20) | True |  | False |  | The SAP control key downloaded from ERP. It can be used to map the right Operation to the WIP Operation (Explosion 2). |
| ScheduledCompletionDate | DATETIME | True |  | False |  | The targeted completion date of the WIP Operation. |
| ScheduledDurationSeconds | INT(10,0) | True |  | False |  | The amount of time it should take the WIP Operation to complete. |
| ScheduledStartDate | DATETIME | True | (getutcdate()) | False |  | The scheduled start date. |
| SpecificationID | INT(10,0) | True |  | False | SPECIFICATION | For future use. |
| StdEffortEarned | DECIMAL(28,10) | True |  | False |  | For future use. |
| StdRate | DECIMAL(28,10) | True |  | False |  | For future use. |
| StdTotalRunEffort | DECIMAL(28,10) | True |  | False |  | For future use. |
| TaskStrategyType | SMALLINT(5,0) | True |  | False |  | The strategy used to create a master task. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |
| UnitID | INT(10,0) | True |  | False | UNIT | Unique identifier of the Unit. |
| ValueAdd | BIT | True |  | False |  | When flagged, the Operation is a value-added Operation (for lean reporting purposes). |
| WBSCode | NVARCHAR(32) | True |  | False |  | The WBS code assigned to the Operation. |
| WipOrderNo | NVARCHAR(40) | False |  | True | WIP_ORDER | The WIP Order number. |
| WipOrderType | SMALLINT(5,0) | False |  | True | WIP_ORDER | The WIP Order type. |
| WorkCenter | NVARCHAR(40) | True |  | False | WORK_CENTER | The Work Center assigned to the WIP Operation. Populated from the Process. |
| WorkflowStatusID | INT(10,0) | True |  | False | WORK_FLOW_STATUS | For internal use. |
| WorkingTime | DECIMAL(28,10) | True |  | False |  | The time of WIP Operation execution from the ActualStartDate, excluding Hold time. The value is updated on each status change of the WIP Operation. |
| WorkLoadID | INT(10,0) | True |  | False | WORK_LOAD | For future use. |

## Primary Key

- **PK_WIP_ORDER_OPERATION** on `WipOrderNo, WipOrderType, OprSequenceNo`

## Foreign Keys (this table -> other)

- **FK_WIP_OPERATION_EC_ORDER** — WIP_OPERATION -> EC_ORDER (`EcoID -> ID`)
- **FK_WIP_OPERATION_LABOR_PRORATE_TYPE** — WIP_OPERATION -> LABOR_PRORATE_TYPE (`LaborProrateType -> LaborProrateType`)
- **FK_WIP_OPERATION_OCCUPATION** — WIP_OPERATION -> OCCUPATION (`OccupationFacility, Occupation -> Facility, Occupation`)
- **FK_WIP_OPERATION_OPERATION** — WIP_OPERATION -> OPERATION (`OperationID -> ID`)
- **FK_WIP_OPERATION_OPERATION_ACTIVITY_TYPE** — WIP_OPERATION -> OPERATION_ACTIVITY_TYPE (`OperationActivityType -> OperationActivityType`)
- **FK_WIP_OPERATION_OPERATION_HEADER** — WIP_OPERATION -> OPERATION_HEADER (`OperationHeaderID -> ID`)
- **FK_WIP_OPERATION_OPERATION_TYPE** — WIP_OPERATION -> OPERATION_TYPE (`OperationType -> OperationType`)
- **FK_WIP_OPERATION_PROCESS** — WIP_OPERATION -> PROCESS (`LinkToProcessID -> ID`)
- **FK_WIP_OPERATION_PROCESS_OPERATION** — WIP_OPERATION -> PROCESS_OPERATION (`ProcessOperationID -> ID`)
- **FK_WIP_OPERATION_PROCESS1** — WIP_OPERATION -> PROCESS (`ProcessID -> ID`)
- **FK_WIP_OPERATION_PROGRESS_STATUS** — WIP_OPERATION -> PROGRESS_STATUS (`ProgressStatus -> ProgressStatus`)
- **FK_WIP_OPERATION_SAMPLE_PLAN** — WIP_OPERATION -> SAMPLE_PLAN (`SamplePlanID -> ID`)
- **FK_WIP_OPERATION_SPECIFICATION** — WIP_OPERATION -> SPECIFICATION (`SpecificationID -> ID`)
- **FK_WIP_OPERATION_UNIT** — WIP_OPERATION -> UNIT (`UnitID -> ID`)
- **FK_WIP_OPERATION_WORK_CENTER** — WIP_OPERATION -> WORK_CENTER (`WorkCenter -> WorkCenter`)
- **FK_WIP_OPERATION_WORK_FLOW_STATUS** — WIP_OPERATION -> WORK_FLOW_STATUS (`WorkflowStatusID -> ID`)
- **FK_WIP_OPERATION_WORK_LOAD** — WIP_OPERATION -> WORK_LOAD (`WorkLoadID -> ID`)
- **FK_WIP_ORDER_OPERATION_WIP_ORDER1** — WIP_OPERATION -> WIP_ORDER (`WipOrderNo, WipOrderType -> WipOrderNo, WipOrderType`)
- **FK_WORK_ORDER_OPERATION_WORK_ORDER_OPERATION_STATUS** — WIP_OPERATION -> WIP_OPERATION_STATUS (`OperationStatus -> OperationStatus`)

## Referenced By (other tables -> this)

- **FK_ALERT_DETAIL_WIP_OPERATION** — ALERT_DETAIL -> WIP_OPERATION (`WipOrderNo, WipOrderType, OprSequenceNo -> WipOrderNo, WipOrderType, OprSequenceNo`)
- **FK_CAPA_LINK_WIP_OPERATION** — CAPA_LINK -> WIP_OPERATION (`WipOrderNo, WipOrderType, OprSequenceNo -> WipOrderNo, WipOrderType, OprSequenceNo`)
- **FK_CHECK_LIST_HISTORY_WIP_OPERATION** — CHECK_LIST_HISTORY -> WIP_OPERATION (`WipOrderNo, WipOrderType, OprSequenceNo -> WipOrderNo, WipOrderType, OprSequenceNo`)
- **FK_COST_DETAIL_WIP_OPERATION** — COST_DETAIL -> WIP_OPERATION (`WipOrderNo, WipOrderType, OprSequenceNo -> WipOrderNo, WipOrderType, OprSequenceNo`)
- **FK_COST_WIP_OPERATION** — COST -> WIP_OPERATION (`WipOrderNo, WipOrderType, OprSequenceNo -> WipOrderNo, WipOrderType, OprSequenceNo`)
- **FK_COUNT_DISPOSITION_LINE_WIP_OPERATION** — COUNT_DISPOSITION_LINE -> WIP_OPERATION (`WipOrderNo, WipOrderType, OprSequenceNo -> WipOrderNo, WipOrderType, OprSequenceNo`)
- **FK_COUNT_DISPOSITION_WIP_OPERATION** — COUNT_DISPOSITION -> WIP_OPERATION (`WipOrderNo, WipOrderType, OprSequenceNo -> WipOrderNo, WipOrderType, OprSequenceNo`)
- **FK_DISPATCH_SEQUENCE_WIP_OPERATION** — DISPATCH_SEQUENCE -> WIP_OPERATION (`FromWipOrderNo, FromWipOrderType, FromOprSequenceNo -> WipOrderNo, WipOrderType, OprSequenceNo`)
- **FK_DISPATCH_SEQUENCE_WIP_OPERATION_2** — DISPATCH_SEQUENCE -> WIP_OPERATION (`ToWipOrderNo, ToWipOrderType, ToOprSequenceNo -> WipOrderNo, WipOrderType, OprSequenceNo`)
- **FK_DISPOSITION_CONTENT_WIP_OPERATION** — DISPOSITION_CONTENT -> WIP_OPERATION (`WipOrderNo, WipOrderType, OprSequenceNo -> WipOrderNo, WipOrderType, OprSequenceNo`)
- **FK_DISPOSITION_LINE_WIP_OPERATION** — DISPOSITION_LINE -> WIP_OPERATION (`WipOrderNo, WiporderType, WipOprSequenceNo -> WipOrderNo, WipOrderType, OprSequenceNo`)
- **FK_DISPOSITION_LINE_WIP_OPERATION1** — DISPOSITION_LINE -> WIP_OPERATION (`ExecutionOrderNo, ExecutionOrderType, ExecutionOprSequenceNo -> WipOrderNo, WipOrderType, OprSequenceNo`)
- **FK_DISPOSITION_WIP_OPERATION** — DISPOSITION -> WIP_OPERATION (`WipOrderNo, WiporderType, WipOprSequenceNo -> WipOrderNo, WipOrderType, OprSequenceNo`)
- **FK_ECA_OBJECT_HISTORY_WIP_OPERATION** — ECA_OBJECT_HISTORY -> WIP_OPERATION (`WipOrderNo, WipOrderType, OprSequenceNo -> WipOrderNo, WipOrderType, OprSequenceNo`)
- **FK_ECA_OBJECT_WIP_OPERATION** — ECA_OBJECT -> WIP_OPERATION (`WipOrderNo, WipOrderType, OprSequenceNo -> WipOrderNo, WipOrderType, OprSequenceNo`)
- **FK_INVENTORY2_ALLOCATION_WIP_OPERATION** — INVENTORY2_ALLOCATION -> WIP_OPERATION (`WipOrderNo, WipOrderType, OprSequenceNo -> WipOrderNo, WipOrderType, OprSequenceNo`)
- **FK_KANBAN_CARD_WipOperation** — KANBAN_CARD -> WIP_OPERATION (`WipOrderType, WipOrderNo, OprSequenceNo -> WipOrderType, WipOrderNo, OprSequenceNo`)
- **FK_LITE_LABOR_WIP_OPERATION** — LITE_LABOR -> WIP_OPERATION (`WipOrderNo, WipOrderType, OprSequenceNo -> WipOrderNo, WipOrderType, OprSequenceNo`)
- **FK_ORDER_DATE_WIP_OPERATION** — ORDER_DATE -> WIP_OPERATION (`OrderType, WipOrderNo, OprSequenceNo -> WipOrderType, WipOrderNo, OprSequenceNo`)
- **FK_ORDER_DETAIL_WIP_OPERATION** — ORDER_DETAIL -> WIP_OPERATION (`WipOrderNo, WipOrderType, OprSequenceNo -> WipOrderNo, WipOrderType, OprSequenceNo`)
- **FK_ORDER_HEADER_WIP_OPERATION** — ORDER_HEADER -> WIP_OPERATION (`WipOrderNo, WipOrderType, OprSequenceNo -> WipOrderNo, WipOrderType, OprSequenceNo`)
- **FK_PRODUCTION_FACT_WIP_OPERATION** — PRODUCTION_FACT -> WIP_OPERATION (`WipOrderNo, WipOrderType, OprSequenceNo -> WipOrderNo, WipOrderType, OprSequenceNo`)
- **FK_QUALITY_DEFECT_WIP_OPERATION** — QUALITY_DEFECT -> WIP_OPERATION (`WipOrderNo, WipOrderType, OprSequenceNo -> WipOrderNo, WipOrderType, OprSequenceNo`)
- **FK_RESOURCE_CONTENT_WIP_OPERATION** — RESOURCE_CONTENT -> WIP_OPERATION (`WipOrderNo, WipOrderType, OprSequenceNo -> WipOrderNo, WipOrderType, OprSequenceNo`)
- **FK_RESOURCE_LABOR_WIP_OPERATION** — RESOURCE_LABOR -> WIP_OPERATION (`WipOrderNo, WipOrderType, OprSequenceNo -> WipOrderNo, WipOrderType, OprSequenceNo`)
- **FK_TASK_WIP_OPERATION** — TASK -> WIP_OPERATION (`WipOrderNo, WipOrderType, OprSequenceNo -> WipOrderNo, WipOrderType, OprSequenceNo`)
- **FK_WEIGH_HEADER_WIP_OPERATION** — WEIGH_HEADER -> WIP_OPERATION (`WipOrderNo, WipOrderType, OprSequenceNo -> WipOrderNo, WipOrderType, OprSequenceNo`)
- **FK_WEIGH_LINE_WIP_OPERATION** — WEIGH_LINE -> WIP_OPERATION (`WipOrderNo, WipOrderType, OprSequenceNo -> WipOrderNo, WipOrderType, OprSequenceNo`)
- **FK_WIP_CHECK_LIST_WIP_OPERATION** — WIP_CHECK_LIST -> WIP_OPERATION (`WipOrderNo, WipOrderType, OprSequenceNo -> WipOrderNo, WipOrderType, OprSequenceNo`)
- **FK_WIP_CONTENT_WIP_OPERATION** — WIP_CONTENT -> WIP_OPERATION (`WipOrderNo, WipOrderType, OprSequenceNo -> WipOrderNo, WipOrderType, OprSequenceNo`)
- **FK_WIP_DATA_COLLECT_PLAN_WIP_OPERATION** — WIP_DATA_COLLECT_PLAN -> WIP_OPERATION (`WipOrderNo, WipOrderType, OprSequenceNo -> WipOrderNo, WipOrderType, OprSequenceNo`)
- **FK_WIP_DATA_COLLECT_READING_WIP_OPERATION** — WIP_DATA_COLLECT_READING -> WIP_OPERATION (`WipOrderNo, WipOrderType, OprSequenceNo -> WipOrderNo, WipOrderType, OprSequenceNo`)
- **FK_WIP_DOCUMENT_WIP_OPERATION** — WIP_DOCUMENT -> WIP_OPERATION (`WipOrderNo, WipOrderType, OprSequenceNo -> WipOrderNo, WipOrderType, OprSequenceNo`)
- **FK_WIP_NOTICE_WIP_OPERATION** — WIP_NOTICE -> WIP_OPERATION (`WipOrderNo, WipOrderType, OprSequenceNo -> WipOrderNo, WipOrderType, OprSequenceNo`)
- **FK_WIP_OPERATION_SEQUENCE_WIP_OPERATION** — WIP_OPERATION_SEQUENCE -> WIP_OPERATION (`WipOrderNo, WipOrderType, OprSequenceNo -> WipOrderNo, WipOrderType, OprSequenceNo`)
- **FK_WIP_OPERATION_SEQUENCE_WIP_OPERATION1** — WIP_OPERATION_SEQUENCE -> WIP_OPERATION (`DestinationWipOrderNo, DestinationWipOrderType, DestinationOprSequenceNo -> WipOrderNo, WipOrderType, OprSequenceNo`)
- **FK_WIP_OPERATION_STEP_CHAR_WIP_OPERATION** — WIP_OPERATION_STEP_CHAR -> WIP_OPERATION (`WipOrderNo, WipOrderType, OprSequenceNo -> WipOrderNo, WipOrderType, OprSequenceNo`)
- **FK_WIP_OPERATION_STEP_WIP_OPERATION** — WIP_OPERATION_STEP -> WIP_OPERATION (`WipOrderNo, WipOrderType, OprSequenceNo -> WipOrderNo, WipOrderType, OprSequenceNo`)
- **FK_WIP_OPERATION_WORK_INSTR_WIP_OPERATION** — WIP_OPERATION_WORK_INSTR -> WIP_OPERATION (`WipOrderNo, WipOrderType, OprSequenceNo -> WipOrderNo, WipOrderType, OprSequenceNo`)
- **FK_WIP_ORDER_BOM_WIP_ORDER_OPERATION** — WIP_COMPONENT -> WIP_OPERATION (`WipOrderNo, WipOrderType, OprSequenceNo -> WipOrderNo, WipOrderType, OprSequenceNo`)
- **FK_WIP_ORDER_CONTENT_WIP_OPERATION** — WIP_ORDER_CONTENT -> WIP_OPERATION (`WipOrderNo, WipOrderType, OprSequenceNo -> WipOrderNo, WipOrderType, OprSequenceNo`)
- **FK_WIP_ORDER_DETAIL_WIP_OPERATION** — WIP_ORDER_DETAIL -> WIP_OPERATION (`WipOrderNo, WipOrderType, OprSequenceNo -> WipOrderNo, WipOrderType, OprSequenceNo`)
- **FK_WIP_ORDER_OPERATION_ADDRESSES_WIP_ORDER_OPERATION** — WIP_OPERATION_ADDRESS -> WIP_OPERATION (`WipOrderNo, WipOrderType, OprSequenceNo -> WipOrderNo, WipOrderType, OprSequenceNo`)
- **FK_WIP_ORDER_OPERATION_CONTACTS_WIP_ORDER_OPERATION** — WIP_OPERATION_CONTACT -> WIP_OPERATION (`WipOrderNo, WipOrderType, OprSequenceNo -> WipOrderNo, WipOrderType, OprSequenceNo`)
- **FK_WIP_ORDER_OPERATION_HOLDS_WIP_ORDER_OPERATION** — WIP_OPERATION_HOLD -> WIP_OPERATION (`WipOrderNo, WipOrderType, OprSequenceNo -> WipOrderNo, WipOrderType, OprSequenceNo`)
- **FK_WIP_ORDER_SIGNATURE_WIP_OPERATION** — WIP_ORDER_SIGNATURE -> WIP_OPERATION (`WipOrderNo, WipOrderType, OprSequenceNo -> WipOrderNo, WipOrderType, OprSequenceNo`)
- **FK_WIP_ORDER_WIP_OPERATION** — WIP_ORDER -> WIP_OPERATION (`ParentWIPOrderNo, ParentWIPOrderType, ParentOprSequenceNo -> WipOrderNo, WipOrderType, OprSequenceNo`)
- **FK_WIP_REQ_RESOURCE_WIP_OPERATION** — WIP_REQ_RESOURCE -> WIP_OPERATION (`WipOrderNo, WipOrderType, OprSequenceNo -> WipOrderNo, WipOrderType, OprSequenceNo`)
- **FK_WIP_SIGNATURE_WIP_OPERATION** — WIP_SIGNATURE -> WIP_OPERATION (`WipOrderNo, WipOrderType, OprSequenceNo -> WipOrderNo, WipOrderType, OprSequenceNo`)

## Check Constraints

- **CK_WIP_OPERATION_PercentageCompleted**: 

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IDX_WIP_OPERATION_CLASSIFICATIONID** on `ClassificationID`
- **IF_WIP_OPERATION_DSID** on `DSID`
- **IF_WIP_OPERATION_EC_ORDER** on `EcoID`
- **IF_WIP_OPERATION_OCCUPATION** on `Occupation, OccupationFacility`
- **IF_WIP_OPERATION_OPERATION** on `OperationID`
- **IF_WIP_OPERATION_OPERATION_HEADER** on `OperationHeaderID`
- **IF_WIP_OPERATION_PROCESS** on `LinkToProcessID`
- **IF_WIP_OPERATION_PROCESS_OPERATION** on `ProcessOperationID`
- **IF_WIP_OPERATION_PROCESS1** on `ProcessID`
- **IF_WIP_OPERATION_PROGRESS_STATUS** on `ProgressStatus`
- **IF_WIP_OPERATION_SAMPLE_PLAN** on `SamplePlanID`
- **IF_WIP_OPERATION_SPECIFICATION** on `SpecificationID`
- **IF_WIP_OPERATION_UNIT** on `UnitID`
- **IF_WIP_OPERATION_WORK_FLOW_STATUS** on `WorkflowStatusID`
- **IF_WIP_OPERATION_WORK_LOAD** on `WorkLoadID`
- **IF_WORK_ORDER_OPERATION_WORK_ORDER_OPERATION_STATUS** on `OperationStatus`
- **IXD_ActualCompletionDate_ActualStartDate** on `ActualCompletionDate, ActualStartDate`
- **IXD_ActualStartDate_ActualCompletionDate** on `ActualStartDate, ActualCompletionDate`
- **IXD_ExpectedCompletionDate_ExpectedStartDate** on `ExpectedCompletionDate, ExpectedStartDate`
- **IXD_ExpectedStartDate_ExpectedCompletionDate** on `ExpectedStartDate, ExpectedCompletionDate`
- **IXD_ScheduledCompletionDate_ScheduledStartDate** on `ScheduledCompletionDate, ScheduledStartDate`
- **IXD_ScheduledStartDate_ScheduledCompletionDate** on `ScheduledStartDate, ScheduledCompletionDate`
- **IXD_WipOrderNo_WipOrderType_OprSequenceNo_OperationStatus** on `WipOrderNo, WipOrderType, OprSequenceNo, OperationStatus`
- **IXD_WorkCenter** on `WorkCenter`
