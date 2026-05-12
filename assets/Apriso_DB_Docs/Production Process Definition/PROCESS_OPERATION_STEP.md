# PROCESS_OPERATION_STEP

**Database:** Operational

**Description:** This table contains the Steps configured for Process Operations.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| ClassificationID | BIGINT(19,0) | True |  | False |  | Unique identifier of the classification. Currently supported for the maximum INT value. |
| ConsumptionPoint | BIT | True |  | False |  | Determines whether or not the Step is a consumption point for the Process. |
| DiscontinueDate | DATETIME | True | (getutcdate()) | False |  | The date when the entity shall be discontinued. |
| DispositionLineSequenceNo | INT(10,0) | True |  | False |  | The Disposition line Sequence number. |
| DocumentationID | INT(10,0) | True |  | False | PROCESS_DOCUMENTATION | The link to the Process Operation Step documentation. |
| DSID | NVARCHAR(100) | True |  | False |  | DELMIA 3DEXPERIENCE Universal Unique ID (Physical ID). |
| DSInstanceID | NVARCHAR(100) | True |  | False |  | DELMIA 3DEXPERIENCE Instance ID. |
| DSInstanceName | NVARCHAR(100) | True |  | False |  | DELMIA 3DEXPERIENCE Instance Name. |
| DSName | NVARCHAR(100) | True |  | False |  | DELMIA 3DEXPERIENCE Name. |
| EcoID | INT(10,0) | True |  | False | EC_ORDER | The unique identifier of the engineering change order and its attributes. |
| EffectiveDate | DATETIME | True | (getutcdate()) | False |  | The date when the entity shall become effective. |
| FUID | NVARCHAR(36) | True |  | False |  | For future use. |
| ID | INT(10,0) | False |  | True |  | The unique identifier of the Process Operation Step and its attributes. |
| LinkToProcessID | INT(10,0) | True |  | False | PROCESS | The unique identifier of the Process and its attributes. |
| NextSequenceNo | INT(10,0) | True |  | False |  | The next Step's Sequence number. |
| OperationActivityType | SMALLINT(5,0) | True |  | False | OPERATION_ACTIVITY_TYPE | Link to the OPERATION_ACTIVITY_TYPE table. |
| Parameters | NVARCHAR | True |  | False |  | The parameters for the Process Operation Step. |
| PPROperationID | NVARCHAR(250) | True |  | False |  | This column stores PPR Operation ID. PPR Operation ID is a unique identifier of PPR Operation from DELMIA. |
| PreviousSequenceNo | INT(10,0) | True |  | False |  | The previous Step's Sequence number. |
| ProcessOperationID | INT(10,0) | False |  | False | PROCESS_OPERATION | The unique identifier of the Process Operation and its attributes. |
| ProcessOperationStepXmlID | INT(10,0) | True |  | False | PROCESS_OPERATION_STEP_XML | For future use. |
| ProgressStatus | INT(10,0) | True |  | False | PROGRESS_STATUS | The enumeration of the values that describe the status of the progress of the PROCESS_OPERATION_STEP. |
| ReworkSequenceNo | INT(10,0) | True |  | False |  | The Step's rework Sequence number. |
| SamplePlanID | INT(10,0) | True |  | False | SAMPLE_PLAN | The sample plan and its attributes unique identifier. |
| SequenceNo | INT(10,0) | False |  | False |  | The Sequence number of the Step. |
| SpecificationID | INT(10,0) | True |  | False | SPECIFICATION | The unique identifier of the specification and its attributes. |
| StepName | NVARCHAR(80) | True |  | False |  | The name of the Step. |
| StepType | SMALLINT(5,0) | True |  | False | OPERATION_STEP_TYPE | The type of Step. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |
| Type | SMALLINT(5,0) | True |  | False |  | The enumeration of the values describing the type of Work Instruction text. |
| UnitID | INT(10,0) | True |  | False | UNIT | Unique identifier of the Unit. |
| ValueAdd | BIT | True |  | False |  | Adds value in manufacturing (true) or does not add value in manufacturing (false). |
| Visible | BIT | True |  | False |  | Indicates if the Work Instruction Explorer is visible. |
| WBSCode | NVARCHAR(40) | True |  | False |  | The work breakdown structure code. |
| WorkLoadID | INT(10,0) | True |  | False | WORK_LOAD | The unique identifier of the workload and its attributes. |

## Primary Key

- **PK_PROCESS_OPERATION_STEP** on `ID`

## Foreign Keys (this table -> other)

- **FK_PROCESS_OPERATION_STEP_EC_ORDER** — PROCESS_OPERATION_STEP -> EC_ORDER (`EcoID -> ID`)
- **FK_PROCESS_OPERATION_STEP_OPERATION_ACTIVITY_TYPE** — PROCESS_OPERATION_STEP -> OPERATION_ACTIVITY_TYPE (`OperationActivityType -> OperationActivityType`)
- **FK_PROCESS_OPERATION_STEP_OPERATION_STEP_TYPE** — PROCESS_OPERATION_STEP -> OPERATION_STEP_TYPE (`StepType -> StepType`)
- **FK_PROCESS_OPERATION_STEP_PROCESS** — PROCESS_OPERATION_STEP -> PROCESS (`LinkToProcessID -> ID`)
- **FK_PROCESS_OPERATION_STEP_PROCESS_DOCUMENTATION** — PROCESS_OPERATION_STEP -> PROCESS_DOCUMENTATION (`DocumentationID -> ID`)
- **FK_PROCESS_OPERATION_STEP_PROCESS_OPERATION** — PROCESS_OPERATION_STEP -> PROCESS_OPERATION (`ProcessOperationID -> ID`)
- **FK_PROCESS_OPERATION_STEP_PROCESS_OPERATION_STEP_XML** — PROCESS_OPERATION_STEP -> PROCESS_OPERATION_STEP_XML (`ProcessOperationStepXmlID -> ID`)
- **FK_PROCESS_OPERATION_STEP_PROGRESS_STATUS** — PROCESS_OPERATION_STEP -> PROGRESS_STATUS (`ProgressStatus -> ProgressStatus`)
- **FK_PROCESS_OPERATION_STEP_SAMPLE_PLAN** — PROCESS_OPERATION_STEP -> SAMPLE_PLAN (`SamplePlanID -> ID`)
- **FK_PROCESS_OPERATION_STEP_SPECIFICATION** — PROCESS_OPERATION_STEP -> SPECIFICATION (`SpecificationID -> ID`)
- **FK_PROCESS_OPERATION_STEP_UNIT_ID** — PROCESS_OPERATION_STEP -> UNIT (`UnitID -> ID`)
- **FK_PROCESS_OPERATION_STEP_WORK_LOAD** — PROCESS_OPERATION_STEP -> WORK_LOAD (`WorkLoadID -> ID`)

## Referenced By (other tables -> this)

- **FK_PROCESS_COMPONENT_PROCESS_OPERATION_STEP** — PROCESS_COMPONENT -> PROCESS_OPERATION_STEP (`ProcessOperationStepID -> ID`)
- **FK_PROCESS_DATA_COLLECT_PLAN_PROCESS_OPERATION_STEP** — PROCESS_DATA_COLLECT_PLAN -> PROCESS_OPERATION_STEP (`ProcessOperationStepID -> ID`)
- **FK_PROCESS_NOTICE_PROCESS_OPERATION_STEP_ID** — PROCESS_NOTICE -> PROCESS_OPERATION_STEP (`ProcessOperationStepID -> ID`)
- **FK_PROCESS_OPERATION_CHECK_LIST_PROCESS_OPERATION_STEP** — PROCESS_OPERATION_CHECK_LIST -> PROCESS_OPERATION_STEP (`ProcessOperationStepID -> ID`)
- **FK_PROCESS_OPERATION_PROC_OPER_STEP_2** — PROCESS_OPERATION -> PROCESS_OPERATION_STEP (`PreviewStepID -> ID`)
- **FK_PROCESS_OPERATION_PROCESS_OPERATION_STEP** — PROCESS_OPERATION -> PROCESS_OPERATION_STEP (`FirstStepID -> ID`)
- **FK_PROCESS_OPERATION_SIGNATURE_PROCESS_OPERATION_STEP** — PROCESS_OPERATION_SIGNATURE -> PROCESS_OPERATION_STEP (`ProcessOperationStepID -> ID`)
- **FK_PROCESS_OPERATION_STEP_ADDRESS_PROCESS_OPERATION_STEP** — PROCESS_OPERATION_STEP_ADDRESS -> PROCESS_OPERATION_STEP (`ProcessOperationStepID -> ID`)
- **FK_PROCESS_OPERATION_STEP_CONTACT_PROCESS_OPERATION_STEP** — PROCESS_OPERATION_STEP_CONTACT -> PROCESS_OPERATION_STEP (`ProcessOperationStepID -> ID`)
- **FK_PROCESS_OPERATION_STEP_DOC_PROCESS_OPERATION_STEP** — PROCESS_OPERATION_STEP_DOC -> PROCESS_OPERATION_STEP (`ProcessOperationStepID -> ID`)
- **FK_PROCESS_OPERATION_STEP_WI_OPERARATION** — PROCESS_OPERATION_STEP_WI -> PROCESS_OPERATION_STEP (`ProcessOperationStepID -> ID`)
- **FK_PROCESS_REQ_RESOURCE_PROCESS_OPERATION_STEP** — PROCESS_REQ_RESOURCE -> PROCESS_OPERATION_STEP (`ProcessOperationStepID -> ID`)
- **FK_PROCESS_SIGNATURE_PROCESS_OPERATION_STEP** — PROCESS_SIGNATURE -> PROCESS_OPERATION_STEP (`ProcessOperationStepID -> ID`)
- **FK_PRODUCT_COMPONENT_PROCESS_USED_PROCESS_OPERATION_STEP** — PRODUCT_COMPONENT_PROCESS_USED -> PROCESS_OPERATION_STEP (`ProcessOperationStepID -> ID`)
- **FK_RECIPE_CHARACTERISTIC_PROCESS_OPERATION_STEP** — RECIPE_CHARACTERISTIC -> PROCESS_OPERATION_STEP (`ProcessOperationStepID -> ID`)
- **FK_RECIPE_COMPONENT_PROCESS_OPERATION_STEP** — RECIPE_COMPONENT -> PROCESS_OPERATION_STEP (`ProcessOperationStepID -> ID`)
- **FK_STEP_CHARACTERISTIC_PROCESS_OPERATION_STEP** — STEP_CHARACTERISTIC -> PROCESS_OPERATION_STEP (`ProcessOperationStepID -> ID`)

## Unique Indexes

- **UK_PROCESS_OPERATION_STEP** on `FUID`

## Non-Unique Indexes

- **IDX_PROCESS_OPERATION_STEP_CLASSIFICATIONID** on `ClassificationID`
- **IF_PROCESS_OPERATION_STEP_DSID** on `DSID`
- **IF_PROCESS_OPERATION_STEP_DSInstanceID** on `DSInstanceID`
- **IF_PROCESS_OPERATION_STEP_EC_ORDER** on `EcoID`
- **IF_PROCESS_OPERATION_STEP_PROCESS** on `LinkToProcessID`
- **IF_PROCESS_OPERATION_STEP_PROCESS_DOCUMENTATION** on `DocumentationID`
- **IF_PROCESS_OPERATION_STEP_PROCESS_OPERATION** on `ProcessOperationID`
- **IF_PROCESS_OPERATION_STEP_PROCESS_OPERATION_STEP_XML** on `ProcessOperationStepXmlID`
- **IF_PROCESS_OPERATION_STEP_PROGRESS_STATUS** on `ProgressStatus`
- **IF_PROCESS_OPERATION_STEP_SAMPLE_PLAN** on `SamplePlanID`
- **IF_PROCESS_OPERATION_STEP_SPECIFICATION** on `SpecificationID`
- **IF_PROCESS_OPERATION_STEP_UNIT_ID** on `UnitID`
- **IF_PROCESS_OPERATION_STEP_WORK_LOAD** on `WorkLoadID`
