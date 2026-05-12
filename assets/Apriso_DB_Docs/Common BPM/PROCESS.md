# PROCESS

**Database:** Operational

**Description:** Stores the Process details.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| AllowPrototypeEdit | BIT | False | ((1)) | False |  | Indicates if the entity can be edited in the Prototype status (For For future use..). |
| Checksum | NVARCHAR(36) | False |  | False |  | The entity's checksum used for specific entity version comparison between Apriso databases. It changes every time the entity changes. |
| ClassificationID | BIGINT(19,0) | True |  | False |  | Unique identifier of the classification. Currently supported for the maximum INT value. |
| Company | NVARCHAR(40) | True |  | False | COMPANY | Link to the COMPANY table. |
| CompilationDate | DATETIME | True |  | False |  | Compilation date. |
| CompilationHost | NVARCHAR(40) | True |  | False |  | A string identifying computer where compilation (release) was done. Name of the last environment where the entity's status was changed to Active or Prototype. |
| CompilationMask | NVARCHAR(40) | True |  | False |  | Contains string with the asterisk '*' character. |
| CompilationStatus | SMALLINT(5,0) | True |  | False |  | Compilation status for a Process. It can be: 1- Compiled 2- Regeneration Failed 3- Requires Synchronization (For For future use..). |
| CompilationVersion | INT(10,0) | True |  | False |  | An auto incremented number of an entity's version increased whenever the entity's status is changed to Active or Prototype. |
| DesignModeDisabled | BIT | True |  | False |  | Indicates that all objects below the Step (e.g., Functions, Function Input) have been removed from the database. |
| DiscontinueDate | DATETIME | True | (getutcdate()) | False |  | Date when the entity is discontinued. |
| DocumentationID | INT(10,0) | True |  | False | PROCESS_DOCUMENTATION | Link to the Process documentation. |
| DSID | NVARCHAR(100) | True |  | False |  | DELMIA 3DEXPERIENCE Universal Unique ID (Physical ID). |
| DSName | NVARCHAR(100) | True |  | False |  | DELMIA 3DEXPERIENCE Universal Unique ID (Physical ID). |
| EcoID | INT(10,0) | True |  | False | EC_ORDER | Unique identifier of the Engineering Change Order and its attributes. |
| EffectiveDate | DATETIME | True | (getutcdate()) | False |  | Date when the entity becomes effective. |
| EnforceSequence | BIT | True |  | False |  | Enforces a Sequence of Operations in the Process. |
| EntityCreatedOn | DATETIME | False |  | False |  | Date the entity was created on. |
| ExternallyManaged | BIT | False | ((0)) | False |  | Set when the Process is imported and managed by an external system (e.g., DELMIA). |
| ExternalSystemName | NVARCHAR(80) | True |  | False |  | The name of the external system when a Process is imported and managed by an external system. |
| FUID | NVARCHAR(36) | False |  | False |  | Unique identifier of a Process. |
| HasChanges | BIT | True | ((0)) | False |  | Indicates if the Process was changed after last build. |
| ID | INT(10,0) | False |  | True |  | Unique identifier of a Process and its attributes. |
| IsDefaultRevision | BIT | False | ((0)) | False |  | Indicates if a revision is default or not. |
| IsTemplate | BIT | True | ((0)) | False |  | The flag indicating if a Process is a template. |
| LaborProrateType | SMALLINT(5,0) | True |  | False | LABOR_PRORATE_TYPE | Used to determine labor proration when more than one resource of the employee type is tracking labor against a Process. |
| LastAuthorBy | NVARCHAR(50) | True |  | False |  | The user which last updated the entity. |
| LastAuthorOn | DATETIME | True |  | False |  | The date when the entity was last updated. |
| OperationFlowLayout | NVARCHAR | True |  | False |  | Stores the visual layout of a Process. |
| OwnerFacility | NVARCHAR(40) | True |  | False | FACILITY | Unique identifier of the Facility that controls the Process. |
| ParentProcessID | INT(10,0) | True |  | False | PROCESS | Unique identifier of the Process from which the current revision was created. |
| PPRProcessID | NVARCHAR(250) | True |  | False |  | The PPR Process ID. The unique identifier of a PPR Process from DELMIA. |
| Process | NVARCHAR(80) | False |  | False |  | Unique Process identifier. |
| ProcessClassID | INT(10,0) | True |  | False | PROCESS_CLASS | Values representing Process Classes. Link to the PROCESS_CLASS table. |
| ProcessRevision | NVARCHAR(80) | True |  | False |  | Revision of a Process. |
| ProcessType | SMALLINT(5,0) | False |  | False | PROCESS_TYPE | The Process type. Link to the PROCESS_TYPE table. |
| ProjectID | INT(10,0) | True |  | False | PROJECT | The Project code associated with the Process. |
| RestrictedTo | SMALLINT(5,0) | True |  | False |  | Indicates the product, equipment, group type, and/or group class the Process is valid for. |
| RevisionControlFlag | BIT | True |  | False |  | Indicates whether or not the entity is revision-controlled. |
| RevisionStatusID | SMALLINT(5,0) | True |  | False |  | Status of the Process revision. It can be: 0 - Design in Progress, 1 - Active, 2 - Cancelled, 3 - On Hold, 4 - Prototype, 5 - Compiling In Process, 6 - Development in Progress. |
| SamplePlanID | INT(10,0) | True |  | False | SAMPLE_PLAN | Unique identifier of the Sample Plan and its attributes |
| SourceProcessID | INT(10,0) | True |  | False | PROCESS | Identifier of the source Process (For For future use..). |
| SpecificationID | INT(10,0) | True |  | False | SPECIFICATION | Unique identifier of the Specification and its attributes. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |
| TotalEditTime | INT(10,0) | True |  | False |  | The time the user spent working on the Process. |
| UnitID | INT(10,0) | True |  | False | UNIT | Unique identifier of the Unit. |
| ValueAdd | BIT | True |  | False |  | Adds the value in manufacturing (true) or does not add the value in manufacturing (false). |
| WBSCode | NVARCHAR(32) | True |  | False |  | Work Breakdown Structure code. |

## Primary Key

- **PK_PROCESS** on `ID`

## Foreign Keys (this table -> other)

- **FK_PROCESS_COMPANY** — PROCESS -> COMPANY (`Company -> Company`)
- **FK_PROCESS_EC_ORDER** — PROCESS -> EC_ORDER (`EcoID -> ID`)
- **FK_PROCESS_FACILITY** — PROCESS -> FACILITY (`OwnerFacility -> Facility`)
- **FK_PROCESS_LABOR_PRORATE_TYPE** — PROCESS -> LABOR_PRORATE_TYPE (`LaborProrateType -> LaborProrateType`)
- **FK_PROCESS_PROCESS** — PROCESS -> PROCESS (`ParentProcessID -> ID`)
- **FK_PROCESS_PROCESS_CLASS** — PROCESS -> PROCESS_CLASS (`ProcessClassID -> ID`)
- **FK_PROCESS_PROCESS_DOCUMENTATION** — PROCESS -> PROCESS_DOCUMENTATION (`DocumentationID -> ID`)
- **FK_PROCESS_PROCESS_TYPE** — PROCESS -> PROCESS_TYPE (`ProcessType -> ProcessType`)
- **FK_PROCESS_PROCESS1** — PROCESS -> PROCESS (`SourceProcessID -> ID`)
- **FK_PROCESS_PROJECT** — PROCESS -> PROJECT (`ProjectID -> ID`)
- **FK_PROCESS_SAMPLE_PLAN** — PROCESS -> SAMPLE_PLAN (`SamplePlanID -> ID`)
- **FK_PROCESS_SPECIFICATION** — PROCESS -> SPECIFICATION (`SpecificationID -> ID`)
- **FK_PROCESS_UNIT_ID** — PROCESS -> UNIT (`UnitID -> ID`)

## Referenced By (other tables -> this)

- **FK_COST_DETAIL_PROCESS** — COST_DETAIL -> PROCESS (`ProcessID -> ID`)
- **FK_COST_PROCESS** — COST -> PROCESS (`ProcessID -> ID`)
- **FK_DESIGN_NOTE_PROCESS** — DESIGN_NOTE -> PROCESS (`ProcessID -> ID`)
- **FK_ECM_ORDER_PROCESS_PROCESS_DST** — ECM_ORDER_PROCESS -> PROCESS (`ProcessDestinationID -> ID`)
- **FK_ECM_ORDER_PROCESS_PROCESS_SRC** — ECM_ORDER_PROCESS -> PROCESS (`ProcessID -> ID`)
- **FK_GROUP_PROCESS_PROCESS** — GROUP_PROCESS -> PROCESS (`ProcessID -> ID`)
- **FK_MAINT_TEMPLATE_TASK_PROCESS** — MAINT_TEMPLATE_TASK -> PROCESS (`ProcessID -> ID`)
- **FK_OPERATION_PROCESS** — OPERATION -> PROCESS (`LinkToProcessID -> ID`)
- **FK_OPERATION_STEP_PROCESS** — OPERATION_STEP -> PROCESS (`LinkToProcessID -> ID`)
- **FK_PROCESS_CHANGE_PROCESS** — PROCESS_CHANGE -> PROCESS (`ProcessID -> ID`)
- **FK_PROCESS_CHANGE_PROCESS1** — PROCESS_CHANGE -> PROCESS (`DestinationProcessID -> ID`)
- **FK_PROCESS_COMPONENT_PROCESS** — PROCESS_COMPONENT -> PROCESS (`ProcessID -> ID`)
- **FK_PROCESS_DATA_COLLECT_PLAN_PROCESS** — PROCESS_DATA_COLLECT_PLAN -> PROCESS (`ProcessID -> ID`)
- **FK_PROCESS_DOC_PROCESS** — PROCESS_DOC -> PROCESS (`ProcessID -> ID`)
- **FK_PROCESS_FACILITY_PROCESS** — PROCESS_FACILITY -> PROCESS (`ProcessID -> ID`)
- **FK_PROCESS_GROUP_PROCESS** — PROCESS_GROUP -> PROCESS (`ProcessID -> ID`)
- **FK_PROCESS_NOTICE_PROCESS_ID** — PROCESS_NOTICE -> PROCESS (`ProcessID -> ID`)
- **FK_PROCESS_OPER_CATEGORY_PROCESS** — PROCESS_OPER_CATEGORY -> PROCESS (`ProcessID -> ID`)
- **FK_PROCESS_OPERATION_BATCH_PROCESS** — PROCESS_OPERATION_BATCH -> PROCESS (`ProcessID -> ID`)
- **FK_PROCESS_OPERATION_CHECK_LIST_PROCESS** — PROCESS_OPERATION_CHECK_LIST -> PROCESS (`ProcessID -> ID`)
- **FK_PROCESS_OPERATION_PROCESS** — PROCESS_OPERATION -> PROCESS (`ProcessID -> ID`)
- **FK_PROCESS_OPERATION_PROCESS1** — PROCESS_OPERATION -> PROCESS (`LinkToProcessID -> ID`)
- **FK_PROCESS_OPERATION_SIGNATURE_PROCESS** — PROCESS_OPERATION_SIGNATURE -> PROCESS (`ProcessID -> ID`)
- **FK_PROCESS_OPERATION_STEP_PROCESS** — PROCESS_OPERATION_STEP -> PROCESS (`LinkToProcessID -> ID`)
- **FK_PROCESS_PROCESS** — PROCESS -> PROCESS (`ParentProcessID -> ID`)
- **FK_PROCESS_PROCESS1** — PROCESS -> PROCESS (`SourceProcessID -> ID`)
- **FK_PROCESS_REQ_RESOURCE_PROCESS** — PROCESS_REQ_RESOURCE -> PROCESS (`ProcessID -> ID`)
- **FK_PROCESS_SIGNATURE_PROCESS** — PROCESS_SIGNATURE -> PROCESS (`ProcessID -> ID`)
- **FK_PRODUCT_COMPONENT_PROCESS_USED_PROCESS** — PRODUCT_COMPONENT_PROCESS_USED -> PROCESS (`ProcessID -> ID`)
- **FK_PRODUCT_PROCESS_PROCESS** — PRODUCT_PROCESS -> PROCESS (`ProcessID -> ID`)
- **FK_PRODUCT_ROUTING_PROCESS** — PRODUCT_ROUTING -> PROCESS (`LinkToProcessID -> ID`)
- **FK_PRODUCT_ROUTING_STEP_PROCESS** — PRODUCT_ROUTING_STEP -> PROCESS (`LinkToProcessID -> ID`)
- **FK_QUALITY_DEFECT_PROCESS** — QUALITY_DEFECT -> PROCESS (`ProcessID -> ID`)
- **FK_RECIPE_PROCESS** — RECIPE -> PROCESS (`ProcessID -> ID`)
- **FK_RESOURCE_MAINT_TASK_PROCESS** — RESOURCE_MAINT_TASK -> PROCESS (`ProcessID -> ID`)
- **FK_RESOURCE_PROCESS_PROCESS** — RESOURCE_PROCESS -> PROCESS (`ProcessID -> ID`)
- **FK_RESOURCE_ROUTING_PROCESS** — RESOURCE_ROUTING -> PROCESS (`LinkToProcessID -> ID`)
- **FK_RESOURCE_ROUTING_STEP_PROCESS** — RESOURCE_ROUTING_STEP -> PROCESS (`LinkToProcessID -> ID`)
- **FK_UNIT_DOCUMENT_USAGE_PROCESS** — UNIT_DOCUMENT_USAGE -> PROCESS (`ProcessID -> ID`)
- **FK_WAREHOUSE_PROCESS** — WAREHOUSE -> PROCESS (`ProcessID -> ID`)
- **FK_WIP_OPERATION_PROCESS** — WIP_OPERATION -> PROCESS (`LinkToProcessID -> ID`)
- **FK_WIP_OPERATION_PROCESS1** — WIP_OPERATION -> PROCESS (`ProcessID -> ID`)
- **FK_WIP_OPERATION_SEQUENCE_PROCESS** — WIP_OPERATION_SEQUENCE -> PROCESS (`ProcessID -> ID`)
- **FK_WIP_ORDER_PROCESS** — WIP_ORDER -> PROCESS (`OriginalProcessID -> ID`)
- **FK_WIP_ORDER_PROCESS1** — WIP_ORDER -> PROCESS (`ProcessID -> ID`)

## Unique Indexes

- **UK_PROCESS** on `Process, ProcessRevision`

## Non-Unique Indexes

- **IDX_PROCESS_CLASSIFICATIONID** on `ClassificationID`
- **IF_PROCESS_DSID** on `DSID`
- **IF_PROCESS_EC_ORDER** on `EcoID`
- **IF_PROCESS_PROCESS** on `ParentProcessID`
- **IF_PROCESS_PROCESS_CLASS** on `ProcessClassID`
- **IF_PROCESS_PROCESS_DOCUMENTATION** on `DocumentationID`
- **IF_PROCESS_PROCESS1** on `SourceProcessID`
- **IF_PROCESS_PROJECT** on `ProjectID`
- **IF_PROCESS_REVISION_STATUS** on `RevisionStatusID`
- **IF_PROCESS_SAMPLE_PLAN** on `SamplePlanID`
- **IF_PROCESS_SPECIFICATION** on `SpecificationID`
- **IF_PROCESS_UNIT_ID** on `UnitID`
- **IXD_FUID** on `FUID`
