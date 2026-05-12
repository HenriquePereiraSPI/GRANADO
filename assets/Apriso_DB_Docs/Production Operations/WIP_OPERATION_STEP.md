# WIP_OPERATION_STEP

**Database:** Operational

**Description:** This table contains the Steps of a WIP Operation. It is created by Explosion of type 3 and when Work Instructions are overwritten for Explosion 1 and 2.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| ActualCompletionDate | DATETIME | True | (getutcdate()) | False |  | The actual completion date of the WIP Operation Step. When complete, the Step populates this column as well as PercentageCompleted. |
| ActualDurationSeconds | INT(10,0) | True |  | False |  | The actual duration of the WIP Operation Step in seconds. |
| ActualStartDate | DATETIME | True | (getutcdate()) | False |  | The actual start date of the Operation Step. |
| ClassificationID | BIGINT(19,0) | True |  | False |  | Unique identifier of the classification. Currently supported for the maximum INT value. |
| DiscontinueDate | DATETIME | True |  | False |  | The end of validity of the entity. |
| DSID | NVARCHAR(100) | True |  | False |  | DELMIA 3DEXPERIENCE Universal Unique ID (Physical ID). |
| DSInstanceID | NVARCHAR(100) | True |  | False |  | DELMIA 3DEXPERIENCE Instance ID. |
| DSInstanceName | NVARCHAR(100) | True |  | False |  | DELMIA 3DEXPERIENCE Instance Name. |
| DSName | NVARCHAR(100) | True |  | False |  | DELMIA 3DEXPERIENCE Name. |
| DurationRemainingSeconds | INT(10,0) | True |  | False |  | The remaining duration of the WIP Operation Step in seconds. |
| EffectiveDate | DATETIME | True |  | False |  | The validity date (start) of the entity in UTC. |
| ExpectedCompletionDate | DATETIME | True |  | False |  | The WIP OperationGÇÖs expected completion date. |
| ExpectedDurationSeconds | INT(10,0) | True |  | False |  | The expected duration of the WIP Operation Step in seconds. |
| ExpectedStartDate | DATETIME | True | (getutcdate()) | False |  | For future use. |
| OperationActivityType | SMALLINT(5,0) | True |  | False | OPERATION_ACTIVITY_TYPE | Link to the OPERATION_ACTIVITY_TYPE table. |
| OprSequenceNo | NVARCHAR(20) | False |  | True | WIP_OPERATION | The WIP Operation number. |
| OverrideWI | BIT | True |  | False |  | Indicates whether the Work Instruction should be overridden. |
| Parameters | NVARCHAR | True |  | False |  | The parameters for the WIP Operation Step. |
| PercentageCompleted | DECIMAL(28,10) | True |  | False |  | The percentage of work already completed for either the order, the Operation, etc. For Complex Assembly, the valid values are either 0 (not started) or 100 (completed) (there are no values used between these two numbers). |
| ProgressStatus | INT(10,0) | True |  | False | PROGRESS_STATUS | The progress status of the Operation Step. |
| ScheduledCompletionDate | DATETIME | True |  | False |  | The actual completion date of the WIP Operation. |
| ScheduledDurationSeconds | INT(10,0) | True |  | False |  | For future use. |
| ScheduledStartDate | DATETIME | True | (getutcdate()) | False |  | For future use. |
| SequenceNo | INT(10,0) | False |  | True |  | The Sequence of Steps in the Operation. |
| StdEffortEarned | DECIMAL(28,10) | True |  | False |  | For future use. |
| StdTotalRunEffort | DECIMAL(28,10) | True |  | False |  | For future use. |
| StepName | NVARCHAR(80) | True |  | False |  | The name of the Step. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |
| UnitID | INT(10,0) | True |  | False | UNIT | Unique identifier of the Unit. |
| WipOrderNo | NVARCHAR(40) | False |  | True | WIP_OPERATION | The WIP Order number. |
| WipOrderType | SMALLINT(5,0) | False |  | True | WIP_OPERATION | The WIP Order type. |
| WorkLoadID | INT(10,0) | True |  | False | WORK_LOAD | The unique identifier of the workload and its attributes. |

## Primary Key

- **PK_WIP_OPERATION_STEP** on `WipOrderNo, WipOrderType, OprSequenceNo, SequenceNo`

## Foreign Keys (this table -> other)

- **FK_WIP_OPERATION_STEP_OPERATION_ACTIVITY_TYPE** — WIP_OPERATION_STEP -> OPERATION_ACTIVITY_TYPE (`OperationActivityType -> OperationActivityType`)
- **FK_WIP_OPERATION_STEP_PROGRESS_STATUS** — WIP_OPERATION_STEP -> PROGRESS_STATUS (`ProgressStatus -> ProgressStatus`)
- **FK_WIP_OPERATION_STEP_UNIT** — WIP_OPERATION_STEP -> UNIT (`UnitID -> ID`)
- **FK_WIP_OPERATION_STEP_WIP_OPERATION** — WIP_OPERATION_STEP -> WIP_OPERATION (`WipOrderNo, WipOrderType, OprSequenceNo -> WipOrderNo, WipOrderType, OprSequenceNo`)
- **FK_WIP_OPERATION_STEP_WORK_LOAD** — WIP_OPERATION_STEP -> WORK_LOAD (`WorkLoadID -> ID`)

## Referenced By (other tables -> this)

- **FK_ALERT_DETAIL_STEPSEQUENCENO** — ALERT_DETAIL -> WIP_OPERATION_STEP (`WipOrderNo, WipOrderType, OprSequenceNo, StepSequenceNo -> WipOrderNo, WipOrderType, OprSequenceNo, SequenceNo`)
- **FK_CAPA_LINK_WIP_OPERATION_STEP** — CAPA_LINK -> WIP_OPERATION_STEP (`WipOrderNo, WipOrderType, OprSequenceNo, StepSequenceNo -> WipOrderNo, WipOrderType, OprSequenceNo, SequenceNo`)
- **FK_CHECK_LIST_HISTORY_WIP_OPERATION_STEP** — CHECK_LIST_HISTORY -> WIP_OPERATION_STEP (`WipOrderNo, WipOrderType, OprSequenceNo, StepSequenceNo -> WipOrderNo, WipOrderType, OprSequenceNo, SequenceNo`)
- **FK_COST_DETAIL_WIP_OPERATION_STEP** — COST_DETAIL -> WIP_OPERATION_STEP (`WipOrderNo, WipOrderType, OprSequenceNo, SequenceNo -> WipOrderNo, WipOrderType, OprSequenceNo, SequenceNo`)
- **FK_COST_WIP_OPERATION_STEP** — COST -> WIP_OPERATION_STEP (`WipOrderNo, WipOrderType, OprSequenceNo, SequenceNo -> WipOrderNo, WipOrderType, OprSequenceNo, SequenceNo`)
- **FK_DISPOSITION_TEST_WIP_OPERATION_STEP** — DISPOSITION_TEST -> WIP_OPERATION_STEP (`ExecutionOrderNo, ExecutionOrderType, ExecutionOprSequenceNo, ExecutionOprStepSequenceNo -> WipOrderNo, WipOrderType, OprSequenceNo, SequenceNo`)
- **FK_ECA_OBJECT_HISTORY_WIP_OPERATION_STEP** — ECA_OBJECT_HISTORY -> WIP_OPERATION_STEP (`WipOrderNo, WipOrderType, OprSequenceNo, StepSequenceNo -> WipOrderNo, WipOrderType, OprSequenceNo, SequenceNo`)
- **FK_ECA_OBJECT_WIP_OPERATION_STEP** — ECA_OBJECT -> WIP_OPERATION_STEP (`WipOrderNo, WipOrderType, OprSequenceNo, StepSequenceNo -> WipOrderNo, WipOrderType, OprSequenceNo, SequenceNo`)
- **FK_INVENTORY2_ALLOCATION_WIP_OPERATION_STEP** — INVENTORY2_ALLOCATION -> WIP_OPERATION_STEP (`WipOrderNo, WipOrderType, OprSequenceNo, StepSequenceNo -> WipOrderNo, WipOrderType, OprSequenceNo, SequenceNo`)
- **FK_LITE_LABOR_WIP_OPERATION_STEP** — LITE_LABOR -> WIP_OPERATION_STEP (`WipOrderNo, WipOrderType, OprSequenceNo, StepSequenceNo -> WipOrderNo, WipOrderType, OprSequenceNo, SequenceNo`)
- **FK_QUALITY_DEFECT_WIP_OPERATION_STEP** — QUALITY_DEFECT -> WIP_OPERATION_STEP (`WipOrderNo, WipOrderType, OprSequenceNo, StepSequenceNo -> WipOrderNo, WipOrderType, OprSequenceNo, SequenceNo`)
- **FK_TASK_STEP_WIP_OPERATION_STEP** — TASK_STEP -> WIP_OPERATION_STEP (`WipOrderNo, WipOrderType, OprSequenceNo, SequenceNo -> WipOrderNo, WipOrderType, OprSequenceNo, SequenceNo`)
- **FK_WIP_CHECK_LIST_WIP_OPERATION_STEP** — WIP_CHECK_LIST -> WIP_OPERATION_STEP (`WipOrderNo, WipOrderType, OprSequenceNo, StepSequenceNo -> WipOrderNo, WipOrderType, OprSequenceNo, SequenceNo`)
- **FK_WIP_DATA_COLLECT_PLAN_WIP_OPERATION_STEP** — WIP_DATA_COLLECT_PLAN -> WIP_OPERATION_STEP (`WipOrderNo, WipOrderType, OprSequenceNo, StepSequenceNo -> WipOrderNo, WipOrderType, OprSequenceNo, SequenceNo`)
- **FK_WIP_DATA_COLLECT_READING_WIP_OPERATION_STEP** — WIP_DATA_COLLECT_READING -> WIP_OPERATION_STEP (`WipOrderNo, WipOrderType, OprSequenceNo, StepSequenceNo -> WipOrderNo, WipOrderType, OprSequenceNo, SequenceNo`)
- **FK_WIP_DOCUMENT_WIP_OPERATION_STEP** — WIP_DOCUMENT -> WIP_OPERATION_STEP (`WipOrderNo, WipOrderType, OprSequenceNo, StepSequenceNo -> WipOrderNo, WipOrderType, OprSequenceNo, SequenceNo`)
- **FK_WIP_LOT_NO_STATUS_WIP_OPERATION_STEP** — WIP_LOT_NO_STATUS -> WIP_OPERATION_STEP (`WipOrderNo, WipOrderType, OprSequenceNo, StepSequenceNo -> WipOrderNo, WipOrderType, OprSequenceNo, SequenceNo`)
- **FK_WIP_NOTICE_WIP_OPERATION_STEP** — WIP_NOTICE -> WIP_OPERATION_STEP (`WipOrderNo, WipOrderType, OprSequenceNo, StepSequenceNo -> WipOrderNo, WipOrderType, OprSequenceNo, SequenceNo`)
- **FK_WIP_OPERATION_STEP_CHAR_WIP_OPERATION_STEP** — WIP_OPERATION_STEP_CHAR -> WIP_OPERATION_STEP (`WipOrderNo, WipOrderType, OprSequenceNo, SequenceNo -> WipOrderNo, WipOrderType, OprSequenceNo, SequenceNo`)
- **FK_WIP_OPERATION_STEP_HOLD_WIP_OPERATION_STEP** — WIP_OPERATION_STEP_HOLD -> WIP_OPERATION_STEP (`WipOrderNo, WipOrderType, OprSequenceNo, StepSequenceNo -> WipOrderNo, WipOrderType, OprSequenceNo, SequenceNo`)
- **FK_WIP_OPERATION_STEP_WORK_INSTR_WIP_OPERATION_STEP** — WIP_OPERATION_STEP_WORK_INSTR -> WIP_OPERATION_STEP (`WipOrderNo, WipOrderType, OprSequenceNo, SequenceNo -> WipOrderNo, WipOrderType, OprSequenceNo, SequenceNo`)
- **FK_WIP_ORDER_SIGNATURE_WIP_OPERATION_STEP** — WIP_ORDER_SIGNATURE -> WIP_OPERATION_STEP (`WipOrderNo, WipOrderType, OprSequenceNo, StepSequenceNo -> WipOrderNo, WipOrderType, OprSequenceNo, SequenceNo`)
- **FK_WIP_SERIAL_NO_STATUS_WIP_OPERATION_STEP** — WIP_SERIAL_NO_STATUS -> WIP_OPERATION_STEP (`WipOrderNo, WipOrderType, OprSequenceNo, StepSequenceNo -> WipOrderNo, WipOrderType, OprSequenceNo, SequenceNo`)
- **FK_WIP_SIGNATURE_WIP_OPERATION_STEP** — WIP_SIGNATURE -> WIP_OPERATION_STEP (`WipOrderNo, WipOrderType, OprSequenceNo, StepSequenceNo -> WipOrderNo, WipOrderType, OprSequenceNo, SequenceNo`)
- **FK_WIP_STEP_CONTENT_WIP_OPERATION_STEP** — WIP_STEP_CONTENT -> WIP_OPERATION_STEP (`WipOrderNo, WipOrderType, OprSequenceNo, StepSequenceNo -> WipOrderNo, WipOrderType, OprSequenceNo, SequenceNo`)
- **FK_WIP_STEP_SERIAL_CONTENT_WIP_OPERATION_STEP** — WIP_STEP_SERIAL_CONTENT -> WIP_OPERATION_STEP (`WipOrderNo, WipOrderType, OprSequenceNo, StepSequenceNo -> WipOrderNo, WipOrderType, OprSequenceNo, SequenceNo`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IDX_WIP_OPERATION_STEP_CLASSIFICATIONID** on `ClassificationID`
- **IF_WIP_OPERATION_STEP_DSID** on `DSID`
- **IF_WIP_OPERATION_STEP_PROGRESS_STATUS** on `ProgressStatus`
- **IF_WIP_OPERATION_STEP_UNIT** on `UnitID`
- **IF_WIP_OPERATION_STEP_WORK_LOAD** on `WorkLoadID`
