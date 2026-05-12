# DISPOSITION_LINE

**Database:** Operational

**Description:** This table presents information about the Quality tests to be performed on the given Disposition lot.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| ClassificationID | BIGINT(19,0) | True |  | False |  | Unique identifier of the classification. Currently supported for the maximum INT value. |
| Comment_ | NVARCHAR | True |  | False |  | The description of the group of tests to be performed. |
| Container | NVARCHAR(40) | True |  | False | CONTAINER | For future use. |
| CorrectiveActionReasonCode | NVARCHAR(20) | True |  | False | REASON_CODE | For future use. |
| CurrentDispositionSequenceNo | INT(10,0) | True |  | False |  | For future use. |
| Disposition | NVARCHAR(40) | False |  | True | DISPOSITION | The reference to the Disposition to which the given line belongs. |
| DispositionUserStatusID | INT(10,0) | True |  | False | DISPOSITION_USER_STATUS | The user status of the Disposition (Quality Inspection) defined in the DISPOSITION_USER_STATUS table. |
| EvaluationInspectorID | INT(10,0) | True |  | False | EMPLOYEE | ID of the employee. |
| ExecutionOprSequenceNo | NVARCHAR(20) | True |  | False | WIP_OPERATION | The Operation of the Execution Order referenced as ExecutionOrderNo. This is used when the given Disposition line is linked to the Operation executing all the tests (DISPOSITION_TEST) assigned to this line. |
| ExecutionOrderNo | NVARCHAR(40) | True |  | False | WIP_OPERATION | Indicates an order that executes the Quality Inspection that exists in the WIP_ORDER table . |
| ExecutionOrderType | SMALLINT(5,0) | True |  | False | WIP_OPERATION | The type of Execution Order referenced as ExecutionOrderNo. |
| Facility | NVARCHAR(40) | False |  | True | DISPOSITION | The reference to the Facility Quality Inspection (Disposition) to which the given line belongs. |
| FunctionSequenceNo | INT(10,0) | True |  | False |  | For future use. |
| GradeID | INT(10,0) | True |  | False | GRADE | For future use. |
| LineCode | NVARCHAR(40) | True |  | False |  | Line code of the disposition line. |
| LineSequenceNo | INT(10,0) | False |  | True |  | The unique Sequence number of the Disposition line. |
| LotNo | NVARCHAR(40) | True |  | False | LOT_NO | For future use. |
| MRBFinishDate | DATETIME | True |  | False |  | For future use. |
| MRBFinishEmployeeID | INT(10,0) | True |  | False | EMPLOYEE | For future use. |
| MRBStartDate | DATETIME | True |  | False |  | For future use. |
| MRBStartEmployeeID | INT(10,0) | True |  | False | EMPLOYEE | For future use. |
| OprSequenceNo | NVARCHAR(20) | True |  | False |  | The reference to the WIP Operation (in addition to the WIP Order and WIP Order type information). |
| OrderLineNo | NVARCHAR(40) | True |  | False |  | For future use. |
| OrderType | SMALLINT(5,0) | True |  | False | WIP_ORDER_TYPE | For future use. |
| ParentContainer | NVARCHAR(40) | True |  | False | CONTAINER | For future use. |
| ProductID | INT(10,0) | True |  | False | LOT_NO | For future use. |
| QualityStatusReasonCode | NVARCHAR(20) | True |  | False | REASON_CODE | For future use. |
| ReferenceDisposition | NVARCHAR(40) | True |  | False |  | The referenced Disposition (in case the Disposition record was created by duplicating another Disposition). |
| ReferenceDispositionLineSeqNo | INT(10,0) | True |  | False |  | The referenced Sequence number of the Disposition line (in case the Disposition record was created by duplicating another Disposition). |
| ReferenceFacility | NVARCHAR(40) | True |  | False |  | The referenced Facility (in case the Disposition record was created by duplicating another Disposition). |
| ResourceLifeCycle | INT(10,0) | True |  | False |  | For future use. |
| ResourceName | NVARCHAR(80) | True |  | False | RESOURCE_ | For future use. |
| ResourceType | SMALLINT(5,0) | True |  | False | RESOURCE_ | For future use. |
| RootCauseReasonCode | NVARCHAR(20) | True |  | False | REASON_CODE | For future use. |
| SampleFinishDate | DATETIME | True |  | False |  | For future use. |
| SampleFinishEmployeeID | INT(10,0) | True |  | False | EMPLOYEE | For future use. |
| SamplePlanID | INT(10,0) | True |  | False | SAMPLE_PLAN | The identifier of the default sample plan (SAMPLE_PLAN) used for the Quality Inspection |
| SampleStartDate | DATETIME | True |  | False |  | For future use. |
| SampleStartEmployeeID | INT(10,0) | True |  | False | EMPLOYEE | For future use. |
| SamplingProcedureID | INT(10,0) | True |  | False | SAMPLING_PROCEDURE | The link to the sampling procedure to be used to calculate the sample size. |
| ScheduledFinishDate | DATETIME | True |  | False |  | The scheduled end date and time of the test of the Disposition line. |
| ScheduledStartDate | DATETIME | True |  | False |  | The scheduled start date and time of the test of the Disposition line. |
| SerialNo | NVARCHAR(40) | True |  | False | SERIAL_NO | For future use. |
| SeverityID | INT(10,0) | True |  | False | DISPOSITION_SEVERITY | The severity of the defect. |
| SpecificationID | INT(10,0) | True |  | False | SPECIFICATION | The identifier of the specification used to define the set of tests to be executed for the given Disposition line. |
| SpecificationRevision | NVARCHAR(20) | True |  | False |  | For future use. |
| Status | SMALLINT(5,0) | False | (9) | False | DISPOSITION_LINE_STATUS | The system status of the Disposition line record. |
| StepSequenceNo | INT(10,0) | True |  | False |  | For future use. |
| TestEvaluationDate | DATETIME | True |  | False |  | The current UTC time. |
| TestingFinishDate | DATETIME | True |  | False |  | The actual end date and time of the test of the Disposition line. |
| TestingFinishEmployeeID | INT(10,0) | True |  | False | EMPLOYEE | For future use. |
| TestingStartDate | DATETIME | True |  | False |  | The actual start date and time of the test of the Disposition line. |
| TestingStartEmployeeID | INT(10,0) | True |  | False | EMPLOYEE | For future use. |
| UnitID | INT(10,0) | True |  | False | UNIT | Unique identifier of the Unit. |
| WipOprSequenceNo | NVARCHAR(20) | True |  | False | WIP_OPERATION | For future use. |
| WipOrderNo | NVARCHAR(40) | True |  | False | WIP_OPERATION | For future use. |
| WiporderType | SMALLINT(5,0) | True |  | False | WIP_OPERATION | For future use. |
| WorkCenter | NVARCHAR(40) | True |  | False | WORK_CENTER | The link to the Work Center. |

## Primary Key

- **PK_DISPOSITION_LINE** on `Facility, Disposition, LineSequenceNo`

## Foreign Keys (this table -> other)

- **FK_DISPOSITION_LINE_CONTAINER** — DISPOSITION_LINE -> CONTAINER (`Container -> Container`)
- **FK_DISPOSITION_LINE_CONTAINER1** — DISPOSITION_LINE -> CONTAINER (`ParentContainer -> Container`)
- **FK_DISPOSITION_LINE_DISPOSITION** — DISPOSITION_LINE -> DISPOSITION (`Facility, Disposition -> Facility, Disposition`)
- **FK_DISPOSITION_LINE_DISPOSITION_LINE_STATUS** — DISPOSITION_LINE -> DISPOSITION_LINE_STATUS (`Status -> Status`)
- **FK_DISPOSITION_LINE_DISPOSITION_SEVERITY** — DISPOSITION_LINE -> DISPOSITION_SEVERITY (`SeverityID -> ID`)
- **FK_DISPOSITION_LINE_DISPOSITION_USER_STATUS** — DISPOSITION_LINE -> DISPOSITION_USER_STATUS (`DispositionUserStatusID -> ID`)
- **FK_DISPOSITION_LINE_EMPLOYEE** — DISPOSITION_LINE -> EMPLOYEE (`SampleStartEmployeeID -> ID`)
- **FK_DISPOSITION_LINE_EMPLOYEE_INSPECTOR** — DISPOSITION_LINE -> EMPLOYEE (`EvaluationInspectorID -> ID`)
- **FK_DISPOSITION_LINE_EMPLOYEE1** — DISPOSITION_LINE -> EMPLOYEE (`SampleFinishEmployeeID -> ID`)
- **FK_DISPOSITION_LINE_EMPLOYEE2** — DISPOSITION_LINE -> EMPLOYEE (`TestingStartEmployeeID -> ID`)
- **FK_DISPOSITION_LINE_EMPLOYEE3** — DISPOSITION_LINE -> EMPLOYEE (`TestingFinishEmployeeID -> ID`)
- **FK_DISPOSITION_LINE_EMPLOYEE4** — DISPOSITION_LINE -> EMPLOYEE (`MRBStartEmployeeID -> ID`)
- **FK_DISPOSITION_LINE_EMPLOYEE5** — DISPOSITION_LINE -> EMPLOYEE (`MRBFinishEmployeeID -> ID`)
- **FK_DISPOSITION_LINE_GRADE** — DISPOSITION_LINE -> GRADE (`GradeID -> ID`)
- **FK_DISPOSITION_LINE_LOT_NO** — DISPOSITION_LINE -> LOT_NO (`ProductID, LotNo -> ProductID, LotNo`)
- **FK_DISPOSITION_LINE_PRODUCT** — DISPOSITION_LINE -> PRODUCT (`ProductID -> ID`)
- **FK_DISPOSITION_LINE_REASON_CODE** — DISPOSITION_LINE -> REASON_CODE (`RootCauseReasonCode -> ReasonCode`)
- **FK_DISPOSITION_LINE_REASON_CODE1** — DISPOSITION_LINE -> REASON_CODE (`CorrectiveActionReasonCode -> ReasonCode`)
- **FK_DISPOSITION_LINE_REASON_CODE2** — DISPOSITION_LINE -> REASON_CODE (`QualityStatusReasonCode -> ReasonCode`)
- **FK_DISPOSITION_LINE_RESOURCE_** — DISPOSITION_LINE -> RESOURCE_ (`ResourceName, ResourceType -> ResourceName, ResourceType`)
- **FK_DISPOSITION_LINE_SAMPLE_PLAN** — DISPOSITION_LINE -> SAMPLE_PLAN (`SamplePlanID -> ID`)
- **FK_DISPOSITION_LINE_SAMPLING_PROCEDURE** — DISPOSITION_LINE -> SAMPLING_PROCEDURE (`SamplingProcedureID -> ID`)
- **FK_DISPOSITION_LINE_SERIAL_NO** — DISPOSITION_LINE -> SERIAL_NO (`ProductID, SerialNo -> ProductID, SerialNo`)
- **FK_DISPOSITION_LINE_SPECIFICATION** — DISPOSITION_LINE -> SPECIFICATION (`SpecificationID -> ID`)
- **FK_DISPOSITION_LINE_UNIT** — DISPOSITION_LINE -> UNIT (`UnitID -> ID`)
- **FK_DISPOSITION_LINE_WIP_OPERATION** — DISPOSITION_LINE -> WIP_OPERATION (`WipOrderNo, WiporderType, WipOprSequenceNo -> WipOrderNo, WipOrderType, OprSequenceNo`)
- **FK_DISPOSITION_LINE_WIP_OPERATION1** — DISPOSITION_LINE -> WIP_OPERATION (`ExecutionOrderNo, ExecutionOrderType, ExecutionOprSequenceNo -> WipOrderNo, WipOrderType, OprSequenceNo`)
- **FK_DISPOSITION_LINE_WIP_ORDER** — DISPOSITION_LINE -> WIP_ORDER (`WipOrderNo, WiporderType -> WipOrderNo, WipOrderType`)
- **FK_DISPOSITION_LINE_WIP_ORDER_TYPE** — DISPOSITION_LINE -> WIP_ORDER_TYPE (`OrderType -> WipOrderType`)
- **FK_DISPOSITION_LINE_WIP_ORDER1** — DISPOSITION_LINE -> WIP_ORDER (`ExecutionOrderNo, ExecutionOrderType -> WipOrderNo, WipOrderType`)
- **FK_DISPOSITION_LINE_WORK_CENTER** — DISPOSITION_LINE -> WORK_CENTER (`WorkCenter -> WorkCenter`)

## Referenced By (other tables -> this)

- **FK_DISPOSITION_GROUP_CODE_DISPOSITION_LINE** — DISPOSITION_GROUP_CODE -> DISPOSITION_LINE (`Facility, Disposition, LineSequenceNo -> Facility, Disposition, LineSequenceNo`)
- **FK_DISPOSITION_LINE_COMMENT_DISPOSITION_LINE** — DISPOSITION_LINE_COMMENT -> DISPOSITION_LINE (`Facility, Disposition, LineSequenceNo -> Facility, Disposition, LineSequenceNo`)
- **FK_DISPOSITION_LINE_CONTACT_DISPOSITION_LINE** — DISPOSITION_LINE_CONTACT -> DISPOSITION_LINE (`Facility, Disposition, LineSequenceNo -> Facility, Disposition, LineSequenceNo`)
- **FK_DISPOSITION_LINE_MACHINE_EVENT_DISPOSITION_LINE** — DISPOSITION_LINE_MACHINE_EVENT -> DISPOSITION_LINE (`Facility, Disposition, LineSequenceNo -> Facility, Disposition, LineSequenceNo`)
- **FK_DISPOSITION_RESOURCE_DISPOSITION_LINE** — DISPOSITION_RESOURCE -> DISPOSITION_LINE (`Disposition, Facility, LineSequenceNo -> Disposition, Facility, LineSequenceNo`)
- **FK_DISPOSITION_SAMPLE_DISPOSITION_LINE** — DISPOSITION_SAMPLE -> DISPOSITION_LINE (`Facility, Disposition, LineSequenceNo -> Facility, Disposition, LineSequenceNo`)
- **FK_DISPOSITION_TEST_REASON_DISPOSITION_LINE** — DISPOSITION_TEST_REASON -> DISPOSITION_LINE (`Facility, Disposition, LineSequenceNo -> Facility, Disposition, LineSequenceNo`)
- **FK_QUALITY_DEFECT_DISPOSITION_LINE** — QUALITY_DEFECT -> DISPOSITION_LINE (`Facility, Disposition, LineSequenceNo -> Facility, Disposition, LineSequenceNo`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IDX_DISPOSITION_LINE_CLASSIFICATIONID** on `ClassificationID`
- **IF_DISPOSITION_LINE_CONTAINER** on `Container`
- **IF_DISPOSITION_LINE_CONTAINER1** on `ParentContainer`
- **IF_DISPOSITION_LINE_DISPOSITION_LINE** on `ReferenceDisposition, ReferenceFacility, ReferenceDispositionLineSeqNo`
- **IF_DISPOSITION_LINE_DISPOSITION_LINE_STATUS** on `Status`
- **IF_DISPOSITION_LINE_DISPOSITION_SEVERITY** on `SeverityID`
- **IF_DISPOSITION_LINE_DISPOSITION_USER_STATUS** on `DispositionUserStatusID`
- **IF_DISPOSITION_LINE_GRADE** on `GradeID`
- **IF_DISPOSITION_LINE_LOT_NO** on `LotNo, ProductID`
- **IF_DISPOSITION_LINE_PRODUCT** on `ProductID`
- **IF_DISPOSITION_LINE_RESOURCE_** on `ResourceName, ResourceType`
- **IF_DISPOSITION_LINE_SAMPLE_PLAN** on `SamplePlanID`
- **IF_DISPOSITION_LINE_SAMPLING_PROCEDURE** on `SamplingProcedureID`
- **IF_DISPOSITION_LINE_SERIAL_NO** on `SerialNo, ProductID`
- **IF_DISPOSITION_LINE_SPECIFICATION** on `SpecificationID`
- **IF_DISPOSITION_LINE_UNIT** on `UnitID`
- **IF_DISPOSITION_LINE_WIP_OPERATION** on `WipOrderNo, WiporderType, WipOprSequenceNo`
- **IF_DISPOSITION_LINE_WIP_OPERATION1** on `ExecutionOrderNo, ExecutionOrderType, ExecutionOprSequenceNo`
- **IXD_Disposition_OprSequenceNo** on `Disposition, OprSequenceNo`
