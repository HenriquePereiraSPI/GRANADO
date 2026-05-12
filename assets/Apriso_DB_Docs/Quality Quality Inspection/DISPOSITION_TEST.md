# DISPOSITION_TEST

**Database:** Operational

**Description:** This table contains the complete specification of the test.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| AcceptanceNo | INT(10,0) | True |  | False |  | The highest number of nonconforming units that would still allow for accepting the test. |
| Additive | BIT | False | (0) | False |  | The flag applicable when partial samples are used (DISPOSITION_TEST_SAMPLE) indicating that the total size of the partial sample calculated based on the sample plan is increased by the SampleSize of the test. |
| CalculateConformity | BIT | True |  | False |  | Indicates that the conformity of the Characteristic is calculated by an DFC specified as ConformityDFCRevisionFUID. |
| Certificate | BIT | False | (0) | False |  | Indicates that the Characteristic will be used in the certificate of analysis. |
| Characteristic | NVARCHAR(40) | True |  | False | CHARACTERISTIC | The Characteristic against which the test is executed (CHARACTERISTIC_REVISION). The Characteristic must be revision-controlled and must be of this usage: Quality Inspection (CHARACTERISITC.Usage_=2). |
| CharacteristicDecimals | INT(10,0) | True |  | False |  | The Characteristic decimals. |
| CharacteristicRevision | NVARCHAR(40) | True |  | False | CHARACTERISTIC_REVISION | The revision of the Characteristic against which the test is executed (CHARACTERISTIC_REVISION). |
| ClassificationID | BIGINT(19,0) | True |  | False |  | Unique identifier of the classification. Currently supported for the maximum INT value. |
| Comment_ | NVARCHAR | True |  | False |  | The text description of the test to be performed. |
| ConformingToControl | BIT | True |  | False |  | For future use. |
| ConformingToSpecification | BIT | True |  | False |  | Indicates if the test value or attribute conform to the specification (upper and lower specification limits [DISPOSITION_TEST.UpperSpecificationLimit, DISPOSITION_TEST.LowerSpecificationLimit]) or the list of attributes (DISPOSITION_TEST_ATTRIBUTES.Conforming). |
| ConformityDFCRevisionFUID | NVARCHAR(36) | True |  | False |  | A reference to the FUID column in the DFC_REVISION table. The DFC is executed to calculate if the test is conforming. |
| ContainerSequenceNo | INT(10,0) | True |  | False | DISPOSITION_CONTAINER | For future use. |
| DefectReasonCode | NVARCHAR(20) | True |  | False | REASON_CODE | The default defect code when the value of the Characteristic is outside the specification limits (applicable only for Characteristics of the Variable type). |
| Destructive | BIT | False | (0) | False |  | Indicates that the sample quantity used for the test will be destroyed. |
| Disposition | NVARCHAR(40) | True |  | False | DISPOSITION | The reference to the Quality Inspection (Disposition) to which the given test belongs. |
| DispositionUserStatusID | INT(10,0) | True |  | False | DISPOSITION_USER_STATUS | The user status of the Disposition test defined in the DISPOSITION_USER_STATUS table. |
| EvaluationInspectorID | INT(10,0) | True |  | False | EMPLOYEE | ID of the employee. |
| ExecutionOprSequenceNo | NVARCHAR(20) | True |  | False | WIP_OPERATION_STEP | The Sequence Number of the related Operation |
| ExecutionOprStepSequenceNo | INT(10,0) | True |  | False | WIP_OPERATION_STEP | Related Operation sequence number of the step |
| ExecutionOrderNo | NVARCHAR(40) | True |  | False | WIP_OPERATION_STEP | Related work order identifier or number |
| ExecutionOrderType | SMALLINT(5,0) | True |  | False | WIP_OPERATION_STEP | Enumeration of the values that describe various order types |
| Facility | NVARCHAR(40) | True |  | False | DISPOSITION | The reference to the Facility Quality inspection (Disposition) to which the given test belongs. |
| GradeID | INT(10,0) | True |  | False | GRADE | For future use. |
| ID | BIGINT(19,0) | False |  | True |  | The unique identifier of the Disposition test record. |
| InspectorEmployeeNo | NVARCHAR(50) | True |  | False |  | For future use. |
| InspectorID | INT(10,0) | True |  | False | EMPLOYEE | The unique identifier of the Employee executing the test. |
| LHLDefectReasonCode | NVARCHAR(20) | True |  | False | REASON_CODE | Default defect code when the value of the charasteristic is Lower Coherence Limit (applicable only for characteristics of type: Variable). |
| LineSequenceNo | INT(10,0) | True |  | False | DISPOSITION_CONTAINER | The reference to the Disposition line to which the given test belongs. |
| LowerCoherenceLimit | DECIMAL(28,10) | True | ((0.0)) | False |  | The lower coherence limit. |
| LowerControlLimit | DECIMAL(28,10) | True |  | False |  | The lower control limit. |
| LowerSpecificationLimit | DECIMAL(28,10) | True |  | False |  | The lower specification limit. |
| LSLDefectReasonCode | NVARCHAR(20) | True |  | False | REASON_CODE | The default defect code when the value of the Characteristic is above the lower specification limit (applicable only for Characteristics of the Variable type). |
| MeanValue | DECIMAL(28,10) | True |  | False |  | The numeric mean value of the test. Applies only to tests of Characteristics of the Variable type. Used only when the values of the test are recorded in the detailed form (DISPOSITION_READING) or in the form of a summarized value. |
| NoOfReadings | INT(10,0) | True |  | False |  | The number of readings of the value for the Characteristic. Applies only for tests that are executed by reading multiple values (DISPOSITION_READING). |
| NoOfSamples | INT(10,0) | True |  | False |  | The total number of partial samples to be taken for the given test. |
| NoUnitAboveLimit | INT(10,0) | True |  | False |  | The number of measured values that are above the defined upper specification limit. |
| NoUnitBelowLimit | INT(10,0) | True |  | False |  | The number of measured values that are below the defined lower specification limit. |
| NoUnitInspected | INT(10,0) | True |  | False |  | The total number of inspected units. |
| NoUnitNonconforming | INT(10,0) | True |  | False |  | The total number of nonconforming measured values. For Characteristics of the Variable type, this is the sum of NoAboveLimit + NoBelowLimit. For Characteristics of the Attribute type, this is the number of units for which the attributive result is not conforming (based on DISPOSITION_TEST_ATTRIBUTE.Conforming). |
| OverrideSumResults | BIT | False | (0) | False |  | Indicates that the summarized results will be populated manually instead of with an automatic calculation based on multiple readings (DISPOSITION_READING). |
| ReadingValidation | SMALLINT(5,0) | False | (1) | False |  | Indicates whether the number of readings for the Characteristic (DISPOSITION_READING): 1 - Is not verified, 2 - Must be equal to NoOfReadings, 3 - Can be smaller than NoOfReadings, 4 - Can be larger than NoOfReadings. |
| ReasonCode | NVARCHAR(20) | True |  | False | REASON_CODE | For future use. |
| RecordDefect | BIT | False | (0) | False |  | Indicates if Quality Defects are created automatically depending on the test result. |
| RecordingType | SMALLINT(5,0) | True |  | False | RECORDING_TYPE | The type of result recording. Depending on this type, the test results are recorded in a different form (Detailed, Classed, Summarized, Custom). |
| RejectionNo | INT(10,0) | True |  | False |  | The lowest number of nonconforming units that would allow for rejecting the test. |
| Required | BIT | False | (0) | False |  | Indicates if the given test is required or optional. |
| ResourceClassID | INT(10,0) | True |  | False | RESOURCE_CLASS | Link to resource class. |
| ResourceType | SMALLINT(5,0) | True |  | False | RESOURCE_TYPE | Resource type. |
| ResultsOnSamples | BIT | True |  | False |  | Determines the use of the Disposition test samples or Disposition test results. |
| SamplePlanID | INT(10,0) | True |  | False | SAMPLE_PLAN | The identifier of the sample plan (SAMPLE_PLAN) used for the test. |
| SampleQuantity | DECIMAL(28,10) | True |  | False |  | The amount of product that represents a single sample unit. |
| SampleSequenceNo | INT(10,0) | True |  | False | DISPOSITION_CONTAINER | For future use. |
| SampleSize | INT(10,0) | True |  | False |  | The number of units to be inspected. The sample size is provided manually or calculated automatically based on the sampling procedure. |
| SampleUomCode | NVARCHAR(10) | True |  | False | UOM | The unit of measure for the quantity per sample. |
| SamplingProcedureID | INT(10,0) | True |  | False | SAMPLING_PROCEDURE | The link to the sampling procedure to be used to calculate the sample size. |
| ScheduledFinishDate | DATETIME | True |  | False |  | The scheduled finish date and time of the Quality Inspection test. |
| ScheduledStartDate | DATETIME | True |  | False |  | The scheduled start date and time of the Quality Inspection test. |
| SequenceNo | INT(10,0) | True |  | False |  | The unique sequential number of the test within the Disposition line. |
| SeverityID | INT(10,0) | True |  | False | DISPOSITION_SEVERITY | The severity of the Disposition test |
| SPCCharacteristic | BIT | False | (0) | False |  | Indicates that the Characteristic will be used to calculate and display the control or run charts. |
| Status | SMALLINT(5,0) | False |  | False | DISPOSITION_TEST_STATUS | The system status of the Disposition test. |
| TargetValue | DECIMAL(28,10) | True | ((0.0)) | False |  | The target value of the Characteristic. |
| TestAttribute | NVARCHAR(80) | True |  | False |  | Collected attribute. |
| TestEvaluationDate | DATETIME | True |  | False |  | The current UTC time. |
| TestingFinishDate | DATETIME | True |  | False |  | The actual finish date and time of the Quality Inspection test. |
| TestingStartDate | DATETIME | True |  | False |  | The actual start date and time of the Quality Inspection test. |
| TestMethod | NVARCHAR(40) | True |  | False |  | The name of the test method. |
| TestStdDeviation | DECIMAL(28,10) | True |  | False |  | The standard deviation of the test (the numeric mean value of the test). Applies only to tests of Characteristics of the Variable type. Used only when the values of the test are recorded in the detailed form (DISPOSITION_READING) or in the form of a summarized value. |
| TestValue | DECIMAL(28,10) | True | (0.0) | False |  | The numeric result of the test. Applies only to tests of Characteristics of the Variable type. |
| UHLDefectReasonCode | NVARCHAR(20) | True |  | False | REASON_CODE | Default defect code when the value of the charasteristic is Upper Coherence Limit (applicable only for characteristics of type: Variable). |
| UnitID | INT(10,0) | True |  | False | UNIT | Unique identifier of the Unit. |
| UomCode | NVARCHAR(10) | True |  | False | UOM | The unit of measure of the numeric value of the test. Applies only to tests of Characteristics of the Variable type. |
| UpperCoherenceLimit | DECIMAL(28,10) | True | ((0.0)) | False |  | The upper coherence limit. |
| UpperControlLimit | DECIMAL(28,10) | True |  | False |  | The upper control limit. |
| UpperSpecificationLimit | DECIMAL(28,10) | True |  | False |  | The upper specification limit. |
| USLDefectReasonCode | NVARCHAR(20) | True |  | False | REASON_CODE | The default defect code when the value of the Characteristic is above the upper specification limit (applicable only for Characteristics of the Variable type). |

## Primary Key

- **PK_DISPOSITION_TEST** on `ID`

## Foreign Keys (this table -> other)

- **FK_CHARACTERISTIC_REVISION_REASON_CODE5** — DISPOSITION_TEST -> REASON_CODE (`LHLDefectReasonCode -> ReasonCode`)
- **FK_DISPOSITION_LINE_SAMPLE_CONTAINER_TEST_CHARACTERISTIC** — DISPOSITION_TEST -> CHARACTERISTIC (`Characteristic -> Characteristic`)
- **FK_DISPOSITION_TEST_CHARACTERISTIC_REVISION** — DISPOSITION_TEST -> CHARACTERISTIC_REVISION (`Characteristic, CharacteristicRevision -> Characteristic, Revision`)
- **FK_DISPOSITION_TEST_DISPOSITION** — DISPOSITION_TEST -> DISPOSITION (`Facility, Disposition -> Facility, Disposition`)
- **FK_DISPOSITION_TEST_DISPOSITION_CONTAINER** — DISPOSITION_TEST -> DISPOSITION_CONTAINER (`Facility, Disposition, LineSequenceNo, SampleSequenceNo, ContainerSequenceNo -> Facility, Disposition, LineSequenceNo, SampleSequenceNo, ContainerSequenceNo`)
- **FK_DISPOSITION_TEST_DISPOSITION_SEVERITY** — DISPOSITION_TEST -> DISPOSITION_SEVERITY (`SeverityID -> ID`)
- **FK_DISPOSITION_TEST_DISPOSITION_TEST_STATUS** — DISPOSITION_TEST -> DISPOSITION_TEST_STATUS (`Status -> DispositionTestStatus`)
- **FK_DISPOSITION_TEST_DISPOSITION_USER_STATUS** — DISPOSITION_TEST -> DISPOSITION_USER_STATUS (`DispositionUserStatusID -> ID`)
- **FK_DISPOSITION_TEST_EMPLOYEE** — DISPOSITION_TEST -> EMPLOYEE (`InspectorID -> ID`)
- **FK_DISPOSITION_TEST_EMPLOYEE_INSPECTOR** — DISPOSITION_TEST -> EMPLOYEE (`EvaluationInspectorID -> ID`)
- **FK_DISPOSITION_TEST_GRADE** — DISPOSITION_TEST -> GRADE (`GradeID -> ID`)
- **FK_DISPOSITION_TEST_REASON_CODE** — DISPOSITION_TEST -> REASON_CODE (`ReasonCode -> ReasonCode`)
- **FK_DISPOSITION_TEST_REASON_CODE1** — DISPOSITION_TEST -> REASON_CODE (`DefectReasonCode -> ReasonCode`)
- **FK_DISPOSITION_TEST_REASON_CODE2** — DISPOSITION_TEST -> REASON_CODE (`LSLDefectReasonCode -> ReasonCode`)
- **FK_DISPOSITION_TEST_REASON_CODE3** — DISPOSITION_TEST -> REASON_CODE (`USLDefectReasonCode -> ReasonCode`)
- **FK_DISPOSITION_TEST_REASON_CODE4** — DISPOSITION_TEST -> REASON_CODE (`UHLDefectReasonCode -> ReasonCode`)
- **FK_DISPOSITION_TEST_RECORDING_TYPE** — DISPOSITION_TEST -> RECORDING_TYPE (`RecordingType -> RecordingType`)
- **FK_DISPOSITION_TEST_RESOURCE_CLASS** — DISPOSITION_TEST -> RESOURCE_CLASS (`ResourceClassID -> ID`)
- **FK_DISPOSITION_TEST_RESOURCE_TYPE** — DISPOSITION_TEST -> RESOURCE_TYPE (`ResourceType -> ResourceType`)
- **FK_DISPOSITION_TEST_SAMPLE_PLAN** — DISPOSITION_TEST -> SAMPLE_PLAN (`SamplePlanID -> ID`)
- **FK_DISPOSITION_TEST_SAMPLING_PROCEDURE** — DISPOSITION_TEST -> SAMPLING_PROCEDURE (`SamplingProcedureID -> ID`)
- **FK_DISPOSITION_TEST_UNIT** — DISPOSITION_TEST -> UNIT (`UnitID -> ID`)
- **FK_DISPOSITION_TEST_UOM** — DISPOSITION_TEST -> UOM (`SampleUomCode -> UomCode`)
- **FK_DISPOSITION_TEST_UOM1** — DISPOSITION_TEST -> UOM (`UomCode -> UomCode`)
- **FK_DISPOSITION_TEST_WIP_OPERATION_STEP** — DISPOSITION_TEST -> WIP_OPERATION_STEP (`ExecutionOrderNo, ExecutionOrderType, ExecutionOprSequenceNo, ExecutionOprStepSequenceNo -> WipOrderNo, WipOrderType, OprSequenceNo, SequenceNo`)

## Referenced By (other tables -> this)

- **FK_ALERT_DETAIL_DISPOSITION_TEST** — ALERT_DETAIL -> DISPOSITION_TEST (`DispositionTestID -> ID`)
- **FK_DISPOSITION_DIMENSION_DISPOSITION_TEST** — DISPOSITION_DIMENSION -> DISPOSITION_TEST (`DispositionTestID -> ID`)
- **FK_DISPOSITION_READING_DISPOSITION_TEST** — DISPOSITION_READING -> DISPOSITION_TEST (`DispositionTestID -> ID`)
- **FK_DISPOSITION_RESOURCE_DISPOSITION_TEST** — DISPOSITION_RESOURCE -> DISPOSITION_TEST (`DispositionTestID -> ID`)
- **FK_DISPOSITION_TEST_ATTRIBUTE_DISPOSITION_TEST** — DISPOSITION_TEST_ATTRIBUTE -> DISPOSITION_TEST (`DispositionTestID -> ID`)
- **FK_DISPOSITION_TEST_GROUP_CODE_DISPOSITION_TEST** — DISPOSITION_TEST_GROUP_CODE -> DISPOSITION_TEST (`DispositionTestID -> ID`)
- **FK_DISPOSITION_TEST_REASON_DISPOSITION_TEST** — DISPOSITION_TEST_REASON -> DISPOSITION_TEST (`DispositionTestID -> ID`)
- **FK_DISPOSITION_TEST_SAMPLE_DISPOSITION_TEST** — DISPOSITION_TEST_SAMPLE -> DISPOSITION_TEST (`DispositionTestID -> ID`)
- **FK_QUALITY_DEFECT_DISPOSITION_TEST** — QUALITY_DEFECT -> DISPOSITION_TEST (`DispositionTestID -> ID`)

## Business Keys (this table -> other)

- DISPOSITION_TEST -> DFC_REVISION (`ConformityDFCRevisionFUID -> FUID`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IDX_DISPOSITION_TEST_CLASSIFICATIONID** on `ClassificationID`
- **IF_DISPOSITION_TEST_CHARACTERISTIC_REVISION** on `Characteristic, CharacteristicRevision`
- **IF_DISPOSITION_TEST_DISPOSITION** on `Disposition, Facility`
- **IF_DISPOSITION_TEST_DISPOSITION_CONTAINER** on `Facility, Disposition, LineSequenceNo, SampleSequenceNo, ContainerSequenceNo`
- **IF_DISPOSITION_TEST_DISPOSITION_SAMPLE** on `Disposition, SampleSequenceNo, Facility, LineSequenceNo`
- **IF_DISPOSITION_TEST_DISPOSITION_SEVERITY** on `SeverityID`
- **IF_DISPOSITION_TEST_DISPOSITION_TEST_STATUS** on `Status`
- **IF_DISPOSITION_TEST_DISPOSITION_USER_STATUS** on `DispositionUserStatusID`
- **IF_DISPOSITION_TEST_GRADE** on `GradeID`
- **IF_DISPOSITION_TEST_OPERATION** on `ConformityDFCRevisionFUID`
- **IF_DISPOSITION_TEST_RESOURCE_CLASS** on `ResourceClassID`
- **IF_DISPOSITION_TEST_SAMPLE_PLAN** on `SamplePlanID`
- **IF_DISPOSITION_TEST_SAMPLING_PROCEDURE** on `SamplingProcedureID`
- **IF_DISPOSITION_TEST_UNIT** on `UnitID`
- **IF_DISPOSITION_TEST_WIP_OPERATION_STEP** on `ExecutionOrderNo, ExecutionOrderType, ExecutionOprSequenceNo, ExecutionOprStepSequenceNo`
- **IXD_Disposition_Characteristic_Facility** on `Disposition, Characteristic, Facility`
