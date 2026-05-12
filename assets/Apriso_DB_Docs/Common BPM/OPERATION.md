# OPERATION

**Database:** Operational

**Description:** Stores the Operation definition.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| AllowPrototypeEdit | BIT | False | ((1)) | False |  | Indicates if the entity can be edited in the Prototype status. |
| Checksum | NVARCHAR(36) | False |  | False |  | The entity's checksum used for specific entity version comparison between Apriso databases. It changes every time the entity changes. |
| CompilationDate | DATETIME | True |  | False |  | Compilation date. |
| CompilationHost | NVARCHAR(40) | True |  | False |  | A string identifying computer where compilation (release) was done. Name of the last environment where the entity's status was changed to Active or Prototype. |
| CompilationMask | NVARCHAR(40) | True |  | False |  | Contains string with the asterisk '*' character. |
| CompilationStatus | SMALLINT(5,0) | True |  | False |  | Compilation status for an Operation. It can be 1- Compiled 2- Regeneration Failed 3- Requires Synchronization (For For future use..). |
| CompilationVersion | INT(10,0) | True |  | False |  | An auto incremented number of an entity's version increased whenever the entity's status is changed to Active or Prototype |
| DesignModeDisabled | BIT | True |  | False |  | Indicates that all objects below the Step (e.g., Functions, Function Input) have been removed from the database. |
| DiscontinueDate | DATETIME | True |  | False |  | Date when the entity is discontinued. |
| DocumentationID | INT(10,0) | True |  | False | PROCESS_DOCUMENTATION | Link to the Operation documentation. |
| EcoID | INT(10,0) | True |  | False | EC_ORDER | Unique identifier of the Engineering Change Order and its attributes. |
| EffectiveDate | DATETIME | True |  | False |  | Date when the entity becomes effective. |
| EntityCreatedOn | DATETIME | False |  | False |  | Date the entity was created on. |
| FirstStepID | INT(10,0) | True |  | False | OPERATION_STEP | Indicates the first Step of the Operation at which runtime should start an interpretation. |
| FUID | NVARCHAR(36) | False |  | False |  | Unique identifier of an Operation. |
| HasChanges | BIT | True | ((0)) | False |  | Indicates if the Operation was changed after last build. |
| ID | INT(10,0) | False |  | True |  | Unique identifier of a record (key) in a table. |
| IsDefaultRevision | BIT | False | ((0)) | False |  | Indicates if a revision is default or not. |
| IsTemplate | BIT | True | ((0)) | False |  | Indicates if the Operation is a template. |
| KanbanCards | SMALLINT(5,0) | True | (0) | False |  | The number of the Kanban Cards at the Operation. |
| KanbanLotSizes | DECIMAL(28,10) | True | (0.0) | False |  | The lot sizes of the Kanban Cards at the entity. |
| LaborProrateType | SMALLINT(5,0) | True |  | False | LABOR_PRORATE_TYPE | Used to determine labor proration when more than one resource of the employee type is tracking labor against a Process. |
| LastAuthorBy | NVARCHAR(50) | True |  | False |  | The user which last updated the entity. |
| LastAuthorOn | DATETIME | True |  | False |  | The date when the entity was last updated. |
| LastExecutionDay | DATETIME | True |  | False |  | The last day the Operation was executed. |
| LinkToProcessID | INT(10,0) | True |  | False | PROCESS | Link to the Process. |
| MaxConcurrentResources | INT(10,0) | True |  | False |  | The maximum number of resources of a given type and class, allowed on this task, as defined and controlled by the Process Operation definition or the Operation definition. |
| MaximumStepsToDisplay | INT(10,0) | False |  | False |  | The maximum number of Steps to be displayed in Work Instructions. |
| Milestone | BIT | True |  | False |  | Indicates if an Operation represents a milestone in the executed Process. |
| MinKanbanCards | SMALLINT(5,0) | True | (0) | False |  | The minimum number of Kanban Cards before Replenishment is required at the entity. |
| Occupation | NVARCHAR(40) | True |  | False | OCCUPATION | The default occupation used in labor for this Operation. |
| OccupationFacility | NVARCHAR(40) | True |  | False | OCCUPATION | The occupation code defined within a certain Facility. |
| OperationCode | NVARCHAR(80) | False |  | False |  | Internal name of the Operation. |
| OperationHeaderID | INT(10,0) | True |  | False | OPERATION_HEADER | Link to the OPERATION_HEADER table. |
| OperationRevision | NVARCHAR(80) | True |  | False |  | Operation revision. |
| OperationType | SMALLINT(5,0) | True |  | False | OPERATION_TYPE | Type of the Operation. It can be: 1 - Labor, 2 - Machine, 3 - Background. |
| Parameters | NVARCHAR | True |  | False |  | Parameters of the Operation. |
| ParentOperationID | INT(10,0) | True |  | False | OPERATION | Identifier of the Operation from which the current revision was created. |
| PreviewStepID | INT(10,0) | True |  | False | OPERATION_STEP | Identifier of the Step that will be previewed. |
| ProgressStatus | INT(10,0) | True |  | False | PROGRESS_STATUS | The stage of the production course that the Operation handles. |
| RevisionControlFlag | BIT | True |  | False |  | Indicates whether or not the entity is revision-controlled. |
| RevisionStatusID | SMALLINT(5,0) | True |  | False |  | Status of the Operation revision. It can be: 0 - Design in Progress, 1 - Active, 2 - Cancelled, 3 - On Hold, 4 - Prototype, 5 - Compiling In Process, 6 - Development in Progress. |
| SamplePlanID | INT(10,0) | True |  | False | SAMPLE_PLAN | Unique identifier of the Sample Plan and its attributes. |
| SourceOperationID | INT(10,0) | True |  | False |  | Identifier of the source Operation. |
| SpecificationID | INT(10,0) | True |  | False | SPECIFICATION | Unique identifier of the Specification and its attributes. |
| StepsFlow | NVARCHAR | True |  | False |  | Stores a Step flow definition for all Steps in the Operation. |
| Supplier | NVARCHAR(40) | True |  | False |  | Supplier and its attributes. |
| SupplierShipFrom | NVARCHAR(20) | True |  | False |  | Code describing the supplier shipping point. |
| TaskAllocationSequence | NVARCHAR(1000) | True |  | False |  | The sequence for allocating tasks for the Operation. |
| TaskDispatchRule | NVARCHAR(1000) | True |  | False |  | Task dispatching rule for the Operation. |
| TaskStrategyType | SMALLINT(5,0) | True |  | False | TASK_STRATEGY_TYPE | Defines the tasking strategy for the various types of quantities reported for this Operation. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |
| TotalEditTime | INT(10,0) | True |  | False |  | The time the user spent working on the Operation. |
| UnitID | INT(10,0) | True |  | False | UNIT | Unique identifier of the Unit. |
| UomCode | NVARCHAR(10) | True |  | False | UOM | Unit of Measure code. |
| UserMaxNumberOfTasks | INT(10,0) | True |  | False |  | The maximum number of tasks a user can process when processing this Operation. |
| ValueAdd | BIT | True |  | False |  | Adds the value in manufacturing (true) or does not add the value in manufacturing (false). |
| Visible | BIT | True |  | False |  | Indicates if the Work Instruction Explorer is visible. |
| WBSCode | NVARCHAR(32) | True |  | False |  | Work Breakdown Structure code. |
| WorkLoadID | INT(10,0) | True |  | False | WORK_LOAD | Unique identifier of the Work Load and its attributes. |

## Primary Key

- **PK_OPERATION** on `ID`

## Foreign Keys (this table -> other)

- **FK_OPERATION_LABOR_PRORATE_TYPE** — OPERATION -> LABOR_PRORATE_TYPE (`LaborProrateType -> LaborProrateType`)
- **FK_OPERATION_OCCUPATION** — OPERATION -> OCCUPATION (`OccupationFacility, Occupation -> Facility, Occupation`)
- **FK_OPERATION_OPERATION** — OPERATION -> OPERATION (`ParentOperationID -> ID`)
- **FK_OPERATION_OPERATION_HEADER** — OPERATION -> OPERATION_HEADER (`OperationHeaderID -> ID`)
- **FK_OPERATION_OPERATION_STEP** — OPERATION -> OPERATION_STEP (`FirstStepID -> ID`)
- **FK_OPERATION_OPERATION_STEP_2** — OPERATION -> OPERATION_STEP (`PreviewStepID -> ID`)
- **FK_OPERATION_OPERATION_TYPE** — OPERATION -> OPERATION_TYPE (`OperationType -> OperationType`)
- **FK_OPERATION_PROCESS** — OPERATION -> PROCESS (`LinkToProcessID -> ID`)
- **FK_OPERATION_PROCESS_DOCUMENTATION** — OPERATION -> PROCESS_DOCUMENTATION (`DocumentationID -> ID`)
- **FK_OPERATION_PROGRESS_STATUS** — OPERATION -> PROGRESS_STATUS (`ProgressStatus -> ProgressStatus`)
- **FK_OPERATION_SAMPLE_PLAN** — OPERATION -> SAMPLE_PLAN (`SamplePlanID -> ID`)
- **FK_OPERATION_SPECIFICATION** — OPERATION -> SPECIFICATION (`SpecificationID -> ID`)
- **FK_OPERATION_TASK_STRATEGY_TYPE** — OPERATION -> TASK_STRATEGY_TYPE (`TaskStrategyType -> TaskStrategyType`)
- **FK_OPERATION_UNIT_ID** — OPERATION -> UNIT (`UnitID -> ID`)
- **FK_OPERATION_UOM** — OPERATION -> UOM (`UomCode -> UomCode`)
- **FK_OPERATION_WORK_LOAD** — OPERATION -> WORK_LOAD (`WorkLoadID -> ID`)
- **FK_OPERATIONS_ENGINEERING_CHANGE_ORDER** — OPERATION -> EC_ORDER (`EcoID -> ID`)

## Referenced By (other tables -> this)

- **FK_CAPA_LINK_OPERATION** — CAPA_LINK -> OPERATION (`OperationID -> ID`)
- **FK_COST_DETAIL_OPERATION** — COST_DETAIL -> OPERATION (`OperationID -> ID`)
- **FK_COST_OPERATION** — COST -> OPERATION (`OperationID -> ID`)
- **FK_DESIGN_NOTE_OPERATION** — DESIGN_NOTE -> OPERATION (`OperationID -> ID`)
- **FK_DISPATCH_CHANGE_DETAIL_OPERATION** — DISPATCH_CHANGE_DETAIL -> OPERATION (`SourceOperationID -> ID`)
- **FK_ECM_ORDER_OPERATION_OPERATION_DST** — ECM_ORDER_OPERATION -> OPERATION (`OperationDestinationID -> ID`)
- **FK_ECM_ORDER_OPERATION_OPERATION_SRC** — ECM_ORDER_OPERATION -> OPERATION (`OperationID -> ID`)
- **FK_OPERATION_ADDRESS_OPERATION** — OPERATION_ADDRESS -> OPERATION (`OperationID -> ID`)
- **FK_OPERATION_COMPONENT_OPERATION** — OPERATION_COMPONENT -> OPERATION (`OperationID -> ID`)
- **FK_OPERATION_CONFIGURATION_OPERATION** — OPERATION_CONFIGURATION -> OPERATION (`OperationID -> ID`)
- **FK_OPERATION_CONTACT_OPERATION** — OPERATION_CONTACT -> OPERATION (`OperationID -> ID`)
- **FK_OPERATION_DOC_OPERATION** — OPERATION_DOC -> OPERATION (`OperationID -> ID`)
- **FK_OPERATION_GROUP_OPERATION** — OPERATION_GROUP -> OPERATION (`OperationID -> ID`)
- **FK_OPERATION_OPER_CATEGORY_OPERATION** — OPERATION_OPER_CATEGORY -> OPERATION (`OperationID -> ID`)
- **FK_OPERATION_OPERATION** — OPERATION -> OPERATION (`ParentOperationID -> ID`)
- **FK_OPERATION_REQ_RESOURCE_OPERATION** — OPERATION_REQ_RESOURCE -> OPERATION (`OperationID -> ID`)
- **FK_OPERATION_STEP_OPERATION** — OPERATION_STEP -> OPERATION (`OperationID -> ID`)
- **FK_OPERATION_WORK_INSTR_OPERARATION** — OPERATION_WORK_INSTR -> OPERATION (`OperationID -> ID`)
- **FK_PROCESS_CHANGE_OPERATION** — PROCESS_CHANGE -> OPERATION (`OperationID -> ID`)
- **FK_PROCESS_CHANGE_OPERATION1** — PROCESS_CHANGE -> OPERATION (`SourceOperationID -> ID`)
- **FK_PROCESS_CHANGE_OPERATION2** — PROCESS_CHANGE -> OPERATION (`DestinationOperationID -> ID`)
- **FK_PROCESS_CONFIGURATION_XML_OPERATION** — PROCESS_CONFIGURATION_XML -> OPERATION (`OperationID -> ID`)
- **FK_PROCESS_OPERATION_BATCH_OPERATION** — PROCESS_OPERATION_BATCH -> OPERATION (`OperationID -> ID`)
- **FK_PROCESS_OPERATION_CHECK_LIST_OPERATION** — PROCESS_OPERATION_CHECK_LIST -> OPERATION (`OperationID -> ID`)
- **FK_PROCESS_OPERATION_OPERATION** — PROCESS_OPERATION -> OPERATION (`OperationID -> ID`)
- **FK_PROCESS_OPERATION_SIGNATURE_OPERATION** — PROCESS_OPERATION_SIGNATURE -> OPERATION (`OperationID -> ID`)
- **FK_PROCESS_SEQUENCE_OPERATION** — PROCESS_SEQUENCE -> OPERATION (`DestinationOperationID -> ID`)
- **FK_PROCESS_SEQUENCE_OPERATION2** — PROCESS_SEQUENCE -> OPERATION (`OperationID -> ID`)
- **FK_PRODUCT_ROUTING_OPERATION** — PRODUCT_ROUTING -> OPERATION (`OperationID -> ID`)
- **FK_RESOURCE_ROUTING_OPERATION** — RESOURCE_ROUTING -> OPERATION (`OperationID -> ID`)
- **FK_STEP_CHARACTERISTIC_OPERATION** — STEP_CHARACTERISTIC -> OPERATION (`OperationID -> ID`)
- **FK_TASK_OPERATION** — TASK -> OPERATION (`OperationID -> ID`)
- **FK_UNIT_DOCUMENT_USAGE_OPERATION** — UNIT_DOCUMENT_USAGE -> OPERATION (`OperationID -> ID`)
- **FK_WIP_OPERATION_OPERATION** — WIP_OPERATION -> OPERATION (`OperationID -> ID`)
- **FK_WIP_OPERATION_SEQUENCE_OPERATION** — WIP_OPERATION_SEQUENCE -> OPERATION (`OperationID -> ID`)

## Unique Indexes

- **UK_OPERATION** on `OperationHeaderID, OperationRevision`

## Non-Unique Indexes

- **IF_OPERATION_OCCUPATION** on `Occupation, OccupationFacility`
- **IF_OPERATION_OPERATION** on `ParentOperationID`
- **IF_OPERATION_OPERATION_STEP** on `FirstStepID`
- **IF_OPERATION_OPERATION_STEP_2** on `PreviewStepID`
- **IF_OPERATION_OPERATION1** on `SourceOperationID`
- **IF_OPERATION_OPERATIONCODE** on `OperationCode`
- **IF_OPERATION_PROCESS** on `LinkToProcessID`
- **IF_OPERATION_PROCESS_DOCUMENTATION** on `DocumentationID`
- **IF_OPERATION_PROGRESS_STATUS** on `ProgressStatus`
- **IF_OPERATION_REVISION_STATUS** on `RevisionStatusID`
- **IF_OPERATION_SAMPLE_PLAN** on `SamplePlanID`
- **IF_OPERATION_SPECIFICATION** on `SpecificationID`
- **IF_OPERATION_UNIT_ID** on `UnitID`
- **IF_OPERATION_WORK_LOAD** on `WorkLoadID`
- **IF_OPERATIONS_ENGINEERING_CHANGE_ORDER** on `EcoID`
- **IXD_FUID** on `FUID`
