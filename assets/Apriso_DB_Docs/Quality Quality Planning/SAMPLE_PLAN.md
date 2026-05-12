# SAMPLE_PLAN

**Database:** Operational

**Description:** The SAMPLE_PLAN table is used by quality to store all the data for a sample plan where a sample plan is a tactic for sampling based on Product or Process events.  Standard sample plans would include the following sample methods Percentage based, Fixed based, Aliquot based (not implemented), Probability based (not implemented).

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| AdjustmentFactor | INT(10,0) | True |  | False |  | For future use. |
| AdjustmentType | INT(10,0) | True |  | False |  | For future use. |
| AliquotsToSample | INT(10,0) | True |  | False |  | For future use. |
| DestructiveFlag | BIT | True |  | False |  | A flag to indicate that the sample will be destructive.   For example the sample (a power) had to be mixed with a liquid to perform the test.  After the test, the sample cannot be reused. |
| DiscontinueDate | DATETIME | True |  | False |  | End of validity of the entity |
| EcoID | INT(10,0) | True |  | False | EC_ORDER | For future use. |
| EffectiveDate | DATETIME | True |  | False |  | Validity date (start) of the entity in UTC |
| FailurePercentage | DECIMAL(28,10) | True |  | False |  | For future use. |
| FUID | NVARCHAR(36) | True |  | False |  | Unique identifier of the entity across multiple Apriso instances |
| HistoryTypeFlag | BIT | True |  | False |  | For future use. |
| ID | INT(10,0) | False |  | True |  | Unique identifier of a record (key) in a table |
| LabelContainerFlag | BIT | True |  | False |  | A flag to indicate that you will be doing labeling with this sample. |
| LabelXMLSchemaName | NVARCHAR(255) | True |  | False |  | The label schema to be used. |
| MovingAverageDays | INT(10,0) | True |  | False |  | For future use. |
| OwnerFacility | NVARCHAR(40) | True |  | False | FACILITY | For future use. |
| RevisionControlled | BIT | True |  | False |  | A flag indicating if this entity is revision controlled.  Check indicates that this sample plan product is revision controlled. |
| SamplePlanCode | NVARCHAR(40) | False |  | False |  | The unique identifier of the Sample Plan |
| SampleQuantityPerContainer | DECIMAL(28,10) | True |  | False |  | The samples per container ratio. |
| SampleRevision | NVARCHAR(20) | True |  | False |  | (Reference Only) The revision of the entity. |
| SamplingPercentage | DECIMAL(28,10) | True |  | False |  | Sets the sample percentage amount. |
| SamplingRuleCode | NVARCHAR(40) | True |  | False | SAMPLE_RULE | For future use. |
| SerialContainerFlag | BIT | True |  | False |  | A flag to indicate that serialized containers will be used with this sample. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |
| UomCode | NVARCHAR(10) | True |  | False | UOM | The UOM code of the Sample plan. |
| UseFailurePercentageHistory | BIT | True |  | False |  | For future use. |

## Primary Key

- **PK_SAMPLE_PLAN** on `ID`

## Foreign Keys (this table -> other)

- **FK_SAMPLE_PLAN_EC_ORDER** — SAMPLE_PLAN -> EC_ORDER (`EcoID -> ID`)
- **FK_SAMPLE_PLAN_FACILITY** — SAMPLE_PLAN -> FACILITY (`OwnerFacility -> Facility`)
- **FK_SAMPLE_PLAN_SAMPLE_RULE** — SAMPLE_PLAN -> SAMPLE_RULE (`SamplingRuleCode -> SamplingRuleCode`)
- **FK_SAMPLE_PLAN_UOM** — SAMPLE_PLAN -> UOM (`UomCode -> UomCode`)

## Referenced By (other tables -> this)

- **FK_DISPOSITION_LINE_SAMPLE_PLAN** — DISPOSITION_LINE -> SAMPLE_PLAN (`SamplePlanID -> ID`)
- **FK_DISPOSITION_SAMPLE_PLAN** — DISPOSITION -> SAMPLE_PLAN (`SamplePlanID -> ID`)
- **FK_DISPOSITION_TEST_SAMPLE_PLAN** — DISPOSITION_TEST -> SAMPLE_PLAN (`SamplePlanID -> ID`)
- **FK_OPERATION_SAMPLE_PLAN** — OPERATION -> SAMPLE_PLAN (`SamplePlanID -> ID`)
- **FK_OPERATION_STEP_SAMPLE_PLAN** — OPERATION_STEP -> SAMPLE_PLAN (`SamplePlanID -> ID`)
- **FK_PROCESS_OPERATION_SAMPLE_PLAN** — PROCESS_OPERATION -> SAMPLE_PLAN (`SamplePlanID -> ID`)
- **FK_PROCESS_OPERATION_STEP_SAMPLE_PLAN** — PROCESS_OPERATION_STEP -> SAMPLE_PLAN (`SamplePlanID -> ID`)
- **FK_PROCESS_SAMPLE_PLAN** — PROCESS -> SAMPLE_PLAN (`SamplePlanID -> ID`)
- **FK_PRODUCT_ROUTING_SAMPLE_PLAN** — PRODUCT_ROUTING -> SAMPLE_PLAN (`SamplePlanID -> ID`)
- **FK_PRODUCT_ROUTING_STEP_SAMPLE_PLAN** — PRODUCT_ROUTING_STEP -> SAMPLE_PLAN (`SamplePlanID -> ID`)
- **FK_RESOURCE_ROUTING_SAMPLE_PLAN** — RESOURCE_ROUTING -> SAMPLE_PLAN (`SamplePlanID -> ID`)
- **FK_RESOURCE_ROUTING_STEP_SAMPLE_PLAN** — RESOURCE_ROUTING_STEP -> SAMPLE_PLAN (`SamplePlanID -> ID`)
- **FK_SAMPLE_PLAN_DISPOSITION_SAMPLE_PLAN** — SAMPLE_PLAN_DISPOSITION -> SAMPLE_PLAN (`SamplePlanID -> ID`)
- **FK_SAMPLE_PLAN_FACILITY_SAMPLE_PLAN** — SAMPLE_PLAN_FACILITY -> SAMPLE_PLAN (`SamplePlanID -> ID`)
- **FK_WIP_OPERATION_SAMPLE_PLAN** — WIP_OPERATION -> SAMPLE_PLAN (`SamplePlanID -> ID`)
- **FK_WIP_ORDER_SAMPLE_PLAN** — WIP_ORDER -> SAMPLE_PLAN (`SamplePlanID -> ID`)

## Unique Indexes

- **UK_SAMPLE_PLAN** on `FUID`

## Non-Unique Indexes

- **IF_SAMPLE_PLAN_EC_ORDER** on `EcoID`
- **IF_SAMPLE_PLAN_SAMPLE_RULE** on `SamplingRuleCode`
- **IXD_SamplePlanCode** on `SamplePlanCode`
