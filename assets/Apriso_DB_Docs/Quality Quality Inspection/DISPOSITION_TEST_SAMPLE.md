# DISPOSITION_TEST_SAMPLE

**Database:** Operational

**Description:** Disposition Test Sample keeps all the actual value of the test of the single sample

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| ActualFinishDate | DATETIME | True |  | False |  | Actual Finish Date and Time of the quality inspection test |
| ActualStartDate | DATETIME | True |  | False |  | Actual Start Date and Time of the quality inspection test |
| Attribute_ | NVARCHAR(80) | True |  | False |  | Collected attribute. |
| Comment_ | NVARCHAR | True |  | False |  | Text description of the test to be performed |
| Conforming | BIT | True |  | False |  | Flag indicating if the test value or attribute are conforming to the specification: Upper and Lower Specification Limits (DISPOSITION_TEST.UpperSpecificationLimit, DISPOSITION_TEST.UpperSpecificationL |
| DispositionTestID | BIGINT(19,0) | False |  | False | DISPOSITION_TEST | Unique identifier of the disposition test |
| DispositionTestStatus | SMALLINT(5,0) | False |  | False | DISPOSITION_TEST_STATUS | System status of the test |
| DispositionUserStatusID | INT(10,0) | True |  | False | DISPOSITION_USER_STATUS | User status of the disposition test defined in DISPOSITION_USER_STATUS table |
| ID | BIGINT(19,0) | False |  | True |  | Unique identifier of the disposition test sample |
| InspectorID | INT(10,0) | True |  | False | EMPLOYEE | Unique identifier of an employee executing the test |
| MeanValue | DECIMAL(28,10) | True |  | False |  | Numeric mean value of the test. Applies only for test of characteristic of type: Variable. Used only when the values of the test are recorded in the detailed form (DISPOSITION_READING) or in the form |
| NoUnitAboveLimit | INT(10,0) | True |  | False |  | Number of measured values that are above the defined upper specification limit |
| NoUnitBelowLimit | INT(10,0) | True |  | False |  | Number of measured values that are below the defined lower specification limit |
| NoUnitInspected | INT(10,0) | True |  | False |  | Total number of inspected units |
| NoUnitNonconforming | INT(10,0) | True |  | False |  | Total number of nonconforming measured values. In case of characteristics of type Variable: Sum of NoAboveLimit + NoBelowLimit. In case of characteristic of type Attribute: Number of units for which t |
| Number_ | NVARCHAR(40) | True |  | False |  | Sample number |
| OverrideSumResults | BIT | False | (0) | False |  | Flag indicating that the summarized results will be populated manually instead of the automatic calculation based on multiple readings (DISPOSITION_READING) |
| SampleQuantity | DECIMAL(28,10) | True |  | False |  | Amount of product that represents a single sample unit. |
| SampleSize | DECIMAL(28,10) | True |  | False |  | Number of units to be inspected. Sample Size is provided manually or calculated automatically based on the Sampling Procedure. |
| SequenceNo | INT(10,0) | True |  | False |  | Sequence number of the sample |
| StandardDeviation | DECIMAL(28,10) | True |  | False |  | Standard deviation of the test. Numeric mean value of the test. Applies only for test of characteristic of type: Variable. Used only when the values of the test are recorded in the detailed form (DISP |
| UnitID | INT(10,0) | True |  | False | UNIT | Unique identifier of the Unit. |
| UomCode | NVARCHAR(10) | True |  | False | UOM | Unit of measure of the numeric value of the test. Applies only for test of characteristic of type: Variable |
| Value_ | DECIMAL(28,10) | True |  | False |  | Numeric result of the test. Applies only for test of characteristic of type: Variable |

## Primary Key

- **PK_DISPOSITION_TEST_SAMPLE** on `ID`

## Foreign Keys (this table -> other)

- **FK_DISPOSITION_TEST_SAMPLE_DISPOSITION_TEST** — DISPOSITION_TEST_SAMPLE -> DISPOSITION_TEST (`DispositionTestID -> ID`)
- **FK_DISPOSITION_TEST_SAMPLE_DISPOSITION_TEST_STATUS** — DISPOSITION_TEST_SAMPLE -> DISPOSITION_TEST_STATUS (`DispositionTestStatus -> DispositionTestStatus`)
- **FK_DISPOSITION_TEST_SAMPLE_DISPOSITION_USER_STATUS** — DISPOSITION_TEST_SAMPLE -> DISPOSITION_USER_STATUS (`DispositionUserStatusID -> ID`)
- **FK_DISPOSITION_TEST_SAMPLE_EMPLOYEE** — DISPOSITION_TEST_SAMPLE -> EMPLOYEE (`InspectorID -> ID`)
- **FK_DISPOSITION_TEST_SAMPLE_UNIT** — DISPOSITION_TEST_SAMPLE -> UNIT (`UnitID -> ID`)
- **FK_DISPOSITION_TEST_SAMPLE_UOM** — DISPOSITION_TEST_SAMPLE -> UOM (`UomCode -> UomCode`)

## Referenced By (other tables -> this)

- **FK_DISPOSITION_READING_DISPOSITION_TEST_SAMPLE** — DISPOSITION_READING -> DISPOSITION_TEST_SAMPLE (`DispositionTestSampleID -> ID`)
- **FK_DISPOSITION_RESOURCE_DISPOSITION_TEST_SAMPLE** — DISPOSITION_RESOURCE -> DISPOSITION_TEST_SAMPLE (`DispositionTestSampleID -> ID`)
- **FK_QUALITY_DEFECT_DISPOSITION_TEST_SAMPLE** — QUALITY_DEFECT -> DISPOSITION_TEST_SAMPLE (`DispositionTestSampleID -> ID`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_DISPOSITION_TEST_SAMPLE_DISPOSITION_TEST** on `DispositionTestID`
- **IF_DISPOSITION_TEST_SAMPLE_DISPOSITION_TEST_STATUS** on `DispositionTestStatus`
- **IF_DISPOSITION_TEST_SAMPLE_DISPOSITION_USER_STATUS** on `DispositionUserStatusID`
- **IF_DISPOSITION_TEST_SAMPLE_UNIT** on `UnitID`
