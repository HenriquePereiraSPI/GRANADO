# PROCESS_OPERATION

**Database:** Operational

**Description:** This table contains the Operations configured for a Process.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| AlternateSequenceNo | NVARCHAR(20) | True |  | False |  | The Operation's alternate Sequence number. |
| ClassificationID | BIGINT(19,0) | True |  | False |  | Unique identifier of the classification. Currently supported for the maximum INT value. |
| DesignModeDisabled | BIT | True |  | False |  | Indicates that all objects below the Step (e.g., Functions, Function Inputs) have been removed from the database. |
| DiscontinueDate | DATETIME | True | (getutcdate()) | False |  | The date when the entity shall be discontinued. |
| DocumentationID | INT(10,0) | True |  | False | PROCESS_DOCUMENTATION | The link to the Process Operation documentation. |
| DSID | NVARCHAR(100) | True |  | False |  | DELMIA 3DEXPERIENCE Universal Unique ID (Physical ID). |
| DSInstanceID | NVARCHAR(100) | True |  | False |  | DELMIA 3DEXPERIENCE Instance ID. |
| DSInstanceName | NVARCHAR(100) | True |  | False |  | DELMIA 3DEXPERIENCE Instance Name. |
| DSName | NVARCHAR(100) | True |  | False |  | DELMIA 3DEXPERIENCE Name. |
| EcoID | INT(10,0) | True |  | False | EC_ORDER | The engineering change order and its attributes unique identifier. |
| EffectiveDate | DATETIME | True | (getutcdate()) | False |  | The date when the entity shall become effective. |
| ExecutionTemplate | NVARCHAR(80) | True |  | False |  | Used to decide which Operation to use during explosion via the APR_PPR_EXPLOSION_OPERATION Determination. |
| FirstStepID | INT(10,0) | True |  | False | PROCESS_OPERATION_STEP | Indicates the first Step of the Operation at which the runtime should start the interpretation. |
| FUID | NVARCHAR(36) | True |  | False |  | For future use. |
| ID | INT(10,0) | False |  | True |  | The unique identifier of the Process Operation and its attributes. |
| InsideProcessFlag | BIT | True | (0) | False |  | Indicates if the Operation is performed inside the Facility or by outside processing. |
| KanbanCards | SMALLINT(5,0) | True | (0) | False |  | The number of kanban cards at the Operation. |
| KanbanLotSizes | DECIMAL(28,10) | True | (0.0) | False |  | The lot sizes of the kanban cards at the entity. |
| LaborProrateType | SMALLINT(5,0) | True |  | False | LABOR_PRORATE_TYPE | The link to the labor proration type. |
| LinkToProcessID | INT(10,0) | True |  | False | PROCESS | The unique identifier of the Process and its attributes. |
| MaxConcurrentResources | INT(10,0) | True |  | False |  | The maximum number of Resources of a given type and class allowed on this task as defined and controlled by the Process Operation definition or the Operation definition. |
| MaximumStepsToDisplay | INT(10,0) | False |  | False |  | The maximum number of steps to display in Work Instructions. |
| Milestone | BIT | True |  | False |  | Indicates if an Operation represents a milestone in the executed Process. |
| MinKanbanCards | SMALLINT(5,0) | True | (0) | False |  | The minimum number of kanban cards before Replenishment is required at the entity. |
| NextSequenceNo | NVARCHAR(20) | True |  | False |  | The Operation's next Sequence number. |
| Occupation | NVARCHAR(40) | True |  | False | OCCUPATION | For future use. |
| OperationActivityType | SMALLINT(5,0) | True |  | False | OPERATION_ACTIVITY_TYPE | Link to the OPERATION_ACTIVITY_TYPE table. |
| OperationID | INT(10,0) | True |  | False | OPERATION | The unique identifier of the Operation and its attributes. |
| OperationRevision | NVARCHAR(80) | True |  | False |  | The revision for the Operation. |
| OperationType | SMALLINT(5,0) | True |  | False |  | The enumeration of the values that describe the various types of Operations. |
| OprSequenceNo | NVARCHAR(20) | False |  | False |  | The WIP Operation number. |
| OwnerFacility | NVARCHAR(40) | True |  | False | FACILITY | The identifier for the Facility that controls the Process Operation. |
| Parameters | NVARCHAR | True |  | False |  | The parameters for the Process Operation. |
| PayPointFlag | BIT | True | (0) | False |  | Indicates whether the Operation is a pay point. |
| PPROperationID | NVARCHAR(250) | True |  | False |  | This column stores PPR Operation ID. PPR Operation ID is a unique identifier of PPR Operation from DELMIA. |
| PreviewStepID | INT(10,0) | True |  | False | PROCESS_OPERATION_STEP | For future use. |
| PreviousSequenceNo | NVARCHAR(20) | True |  | False |  | The Operation's previous Sequence number. |
| ProcessID | INT(10,0) | False |  | False | PROCESS | The unique identifier of the Process and its attributes. |
| ProgressStatus | INT(10,0) | True |  | False | PROGRESS_STATUS | The enumeration of the values that describe the status of progress for the Operation. |
| ReworkSequenceNo | NVARCHAR(20) | True |  | False |  | The Operation's rework Sequence number. |
| ReworkWorkCenter | NVARCHAR(40) | True |  | False | WORK_CENTER | The rework Work Center and its attributes. |
| SamplePlanID | INT(10,0) | True |  | False | SAMPLE_PLAN | The unique identifier of the sample plan and its attributes. |
| SpecificationID | INT(10,0) | True |  | False | SPECIFICATION | The unique identifier of the specification and its attributes. |
| StepsFlow | NVARCHAR | True |  | False |  | Stores the Step flow definition for all the Steps in the Operation. |
| Supplier | NVARCHAR(40) | True |  | False |  | The supplier and its attributes. |
| SupplierShipFrom | NVARCHAR(20) | True |  | False |  | The code describing the supplier shipping point. |
| TaskAllocationSequence | NVARCHAR(1000) | True |  | False |  | The Sequence for allocating tasks for the Operation. |
| TaskDispatchRule | NVARCHAR(1000) | True |  | False |  | The task dispatching rule for the Operation. |
| TaskStrategyType | SMALLINT(5,0) | True |  | False | TASK_STRATEGY_TYPE | Based on this field, the task will be populated and the TASK_MATERIAL_USE table will have SerialNo populated. Only types 1, 4, 5, and 6 are used. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |
| UnitID | INT(10,0) | True |  | False | UNIT | Unique identifier of the Unit. |
| UomCode | NVARCHAR(10) | True |  | False | UOM | The unit of measure code. |
| UserMaxNumberOfTasks | INT(10,0) | True |  | False |  | The maximum number of tasks a user can process when processing this Operation. |
| ValueAdd | BIT | True |  | False |  | Adds the value in manufacturing (true) or does not add the value in manufacturing (false). |
| Visible | BIT | True |  | False |  | This column indicates if the Work Instruction Explorer is visible. |
| WBSCode | NVARCHAR(32) | True |  | False |  | The work breakdown structure code. |
| WorkCenter | NVARCHAR(40) | True |  | False | WORK_CENTER | The Work Center and its attributes. |
| WorkLoadID | INT(10,0) | True |  | False | WORK_LOAD | The unique identifier of the work load and its attributes. |

## Primary Key

- **PK_PROCESS_OPERATION** on `ID`

## Foreign Keys (this table -> other)

- **FK_PROCESS_OPERATION_EC_ORDER** — PROCESS_OPERATION -> EC_ORDER (`EcoID -> ID`)
- **FK_PROCESS_OPERATION_FACILITY** — PROCESS_OPERATION -> FACILITY (`OwnerFacility -> Facility`)
- **FK_PROCESS_OPERATION_LABOR_PRORATE_TYPE** — PROCESS_OPERATION -> LABOR_PRORATE_TYPE (`LaborProrateType -> LaborProrateType`)
- **FK_PROCESS_OPERATION_OCCUPATION** — PROCESS_OPERATION -> OCCUPATION (`OwnerFacility, Occupation -> Facility, Occupation`)
- **FK_PROCESS_OPERATION_OPERATION** — PROCESS_OPERATION -> OPERATION (`OperationID -> ID`)
- **FK_PROCESS_OPERATION_OPERATION_ACTIVITY_TYPE** — PROCESS_OPERATION -> OPERATION_ACTIVITY_TYPE (`OperationActivityType -> OperationActivityType`)
- **FK_PROCESS_OPERATION_PROC_OPER_STEP_2** — PROCESS_OPERATION -> PROCESS_OPERATION_STEP (`PreviewStepID -> ID`)
- **FK_PROCESS_OPERATION_PROCESS** — PROCESS_OPERATION -> PROCESS (`ProcessID -> ID`)
- **FK_PROCESS_OPERATION_PROCESS_DOCUMENTATION** — PROCESS_OPERATION -> PROCESS_DOCUMENTATION (`DocumentationID -> ID`)
- **FK_PROCESS_OPERATION_PROCESS_OPERATION_STEP** — PROCESS_OPERATION -> PROCESS_OPERATION_STEP (`FirstStepID -> ID`)
- **FK_PROCESS_OPERATION_PROCESS1** — PROCESS_OPERATION -> PROCESS (`LinkToProcessID -> ID`)
- **FK_PROCESS_OPERATION_PROGRESS_STATUS** — PROCESS_OPERATION -> PROGRESS_STATUS (`ProgressStatus -> ProgressStatus`)
- **FK_PROCESS_OPERATION_SAMPLE_PLAN** — PROCESS_OPERATION -> SAMPLE_PLAN (`SamplePlanID -> ID`)
- **FK_PROCESS_OPERATION_SPECIFICATION** — PROCESS_OPERATION -> SPECIFICATION (`SpecificationID -> ID`)
- **FK_PROCESS_OPERATION_TASK_STRATEGY_TYPE** — PROCESS_OPERATION -> TASK_STRATEGY_TYPE (`TaskStrategyType -> TaskStrategyType`)
- **FK_PROCESS_OPERATION_UNIT_ID** — PROCESS_OPERATION -> UNIT (`UnitID -> ID`)
- **FK_PROCESS_OPERATION_UOM** — PROCESS_OPERATION -> UOM (`UomCode -> UomCode`)
- **FK_PROCESS_OPERATION_WORK_LOAD** — PROCESS_OPERATION -> WORK_LOAD (`WorkLoadID -> ID`)
- **FK_ROUTE_OPERATIONS_WORK_CENTER** — PROCESS_OPERATION -> WORK_CENTER (`WorkCenter -> WorkCenter`)
- **FK_ROUTE_OPERATIONS_WORK_CENTER1** — PROCESS_OPERATION -> WORK_CENTER (`ReworkWorkCenter -> WorkCenter`)

## Referenced By (other tables -> this)

- **FK_PROCESS_COMPONENT_PROCESS_OPERATION** — PROCESS_COMPONENT -> PROCESS_OPERATION (`ProcessOperationID -> ID`)
- **FK_PROCESS_CONFIGURATION_XML_PROCESS_OPERATION** — PROCESS_CONFIGURATION_XML -> PROCESS_OPERATION (`ProcessOperationID -> ID`)
- **FK_PROCESS_DATA_COLLECT_PLAN_PROCESS_OPERATION** — PROCESS_DATA_COLLECT_PLAN -> PROCESS_OPERATION (`ProcessOperationID -> ID`)
- **FK_PROCESS_NOTICE_PROCESS_OPERATION_ID** — PROCESS_NOTICE -> PROCESS_OPERATION (`ProcessOperationID -> ID`)
- **FK_PROCESS_OPERATION_ADDRESS_PROCESS_OPERATION** — PROCESS_OPERATION_ADDRESS -> PROCESS_OPERATION (`ProcessOperationID -> ID`)
- **FK_PROCESS_OPERATION_CHECK_LIST_PROCESS_OPERATION** — PROCESS_OPERATION_CHECK_LIST -> PROCESS_OPERATION (`ProcessOperationID -> ID`)
- **FK_PROCESS_OPERATION_CONTACT_PROCESS_OPERATION** — PROCESS_OPERATION_CONTACT -> PROCESS_OPERATION (`ProcessOperationID -> ID`)
- **FK_PROCESS_OPERATION_DOC_PROCESS_OPERATION** — PROCESS_OPERATION_DOC -> PROCESS_OPERATION (`ProcessOperationID -> ID`)
- **FK_PROCESS_OPERATION_FACILITY_PROCESS_OPERATION** — PROCESS_OPERATION_FACILITY -> PROCESS_OPERATION (`ProcessOperationID -> ID`)
- **FK_PROCESS_OPERATION_SIGNATURE_PROCESS_OPERATION** — PROCESS_OPERATION_SIGNATURE -> PROCESS_OPERATION (`ProcessOperationID -> ID`)
- **FK_PROCESS_OPERATION_STEP_PROCESS_OPERATION** — PROCESS_OPERATION_STEP -> PROCESS_OPERATION (`ProcessOperationID -> ID`)
- **FK_PROCESS_OPERATION_WORK_INSTR_OPERARATION** — PROCESS_OPERATION_WORK_INSTR -> PROCESS_OPERATION (`ProcessOperationID -> ID`)
- **FK_PROCESS_REQ_RESOURCE_PROCESS_OPERATION** — PROCESS_REQ_RESOURCE -> PROCESS_OPERATION (`ProcessOperationID -> ID`)
- **FK_PROCESS_SEQUENCE_PROCESS_OPERATION** — PROCESS_SEQUENCE -> PROCESS_OPERATION (`ProcessOperationID -> ID`)
- **FK_PROCESS_SEQUENCE_PROCESS_OPERATION1** — PROCESS_SEQUENCE -> PROCESS_OPERATION (`DestinationProcessOperationID -> ID`)
- **FK_PROCESS_SIGNATURE_PROCESS_OPERATION** — PROCESS_SIGNATURE -> PROCESS_OPERATION (`ProcessOperationID -> ID`)
- **FK_PRODUCT_COMPONENT_PROCESS_USED_PROCESS_OPERATION** — PRODUCT_COMPONENT_PROCESS_USED -> PROCESS_OPERATION (`ProcessOperationID -> ID`)
- **FK_RECIPE_CHARACTERISTIC_PROCESS_OPERATION** — RECIPE_CHARACTERISTIC -> PROCESS_OPERATION (`ProcessOperationID -> ID`)
- **FK_RECIPE_COMPONENT_PROCESS_OPERATION** — RECIPE_COMPONENT -> PROCESS_OPERATION (`ProcessOperationID -> ID`)
- **FK_STEP_CHARACTERISTIC_PROCESS_OPERATION** — STEP_CHARACTERISTIC -> PROCESS_OPERATION (`ProcessOperationID -> ID`)
- **FK_TASK_PROCESS_OPERATION** — TASK -> PROCESS_OPERATION (`ProcessOperationID -> ID`)
- **FK_WIP_OPERATION_PROCESS_OPERATION** — WIP_OPERATION -> PROCESS_OPERATION (`ProcessOperationID -> ID`)
- **FK_WIP_OPERATION_SEQUENCE_PROCESS_OPERATION** — WIP_OPERATION_SEQUENCE -> PROCESS_OPERATION (`ProcessOperationID -> ID`)

## Unique Indexes

- **UK_PROCESS_OPERATION** on `FUID`

## Non-Unique Indexes

- **IDX_PROCESS_OPERATION_CLASSIFICATIONID** on `ClassificationID`
- **IF_PROCESS_OPERATION_DSID** on `DSID`
- **IF_PROCESS_OPERATION_DSInstanceID** on `DSInstanceID`
- **IF_PROCESS_OPERATION_EC_ORDER** on `EcoID`
- **IF_PROCESS_OPERATION_OCCUPATION** on `Occupation, OwnerFacility`
- **IF_PROCESS_OPERATION_OPERATION** on `OperationID`
- **IF_PROCESS_OPERATION_PROC_OPER_STEP_2** on `PreviewStepID`
- **IF_PROCESS_OPERATION_PROCESS_DOCUMENTATION** on `DocumentationID`
- **IF_PROCESS_OPERATION_PROCESS_OPERATION_STEP** on `FirstStepID`
- **IF_PROCESS_OPERATION_PROCESS1** on `LinkToProcessID`
- **IF_PROCESS_OPERATION_PROGRESS_STATUS** on `ProgressStatus`
- **IF_PROCESS_OPERATION_SAMPLE_PLAN** on `SamplePlanID`
- **IF_PROCESS_OPERATION_SPECIFICATION** on `SpecificationID`
- **IF_PROCESS_OPERATION_UNIT_ID** on `UnitID`
- **IF_PROCESS_OPERATION_WORK_LOAD** on `WorkLoadID`
- **IXD_ProcessID_OprSequenceNo** on `ProcessID, OprSequenceNo`
