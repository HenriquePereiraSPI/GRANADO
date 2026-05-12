# TRANSACTION_HISTORY_QUAL_TEST

**Database:** Operational

**Description:** Record for Transaction History for Quality Test Transactions.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| ActualFinishDate | DATETIME | True |  | False |  | Actual Finish Date and Time of the quality inspection test. |
| ActualStartDate | DATETIME | True |  | False |  | Actual Start Date and Time of the quality inspection test. |
| Additive | BIT | True | (0) | False |  | For For future use.. Flag applicable when partial samples are used (DISPOSITION_TEST_SAMPLE) indicating that total size of partial sample calculated based on the sample plan is increased by Sample Size of test. |
| Attribute_ | NVARCHAR(80) | True |  | False |  | Collected attribute. |
| Certificate | BIT | True | (0) | False |  | For For future use.. Flag indicating that the characteristic will be used in the Certificate of Analysis. |
| Characteristic | NVARCHAR(40) | True |  | False |  | Characteristic against which the test is executed. |
| CharacteristicRevision | NVARCHAR(40) | True |  | False |  | Revision of the characteristic against which the test is executed. |
| CollectedAttribute | NVARCHAR(80) | True |  | False |  | Collected attribute. |
| CollectedValue | DECIMAL(28,10) | True | (0.0) | False |  | Numeric value of the test reading. |
| Comment_ | NVARCHAR | True |  | False |  | Text description of the test to be performed. |
| Conforming | BIT | True |  | False |  | Flag indicating if the test value or attribute are conforming to the specification: Upper and Lower Specification Limits . |
| ConformingToControl | BIT | True |  | False |  | Not used. |
| ConformingToSpecification | BIT | True |  | False |  | Flag indicating if the test value or attribute are conforming to the specification: Upper and Lower Specification Limits or list of attributes. |
| Container | NVARCHAR(40) | True |  | False |  | Container Number the reading was executed on. |
| ContainerSequenceNo | INT(10,0) | True |  | False |  | Not used. |
| DefectReasonCode | NVARCHAR(20) | True |  | False |  | Default defect code when the value of the characteristic is outside of specification limits (applicable only for characteristics of type: Variable). |
| Destructive | BIT | True | (0) | False |  | For For future use.. Flag indicating that the characteristic will be used to calculate, display the control or run charts Flag indicating that the sample quantity used for the test will be destroyed. |
| Disposition | NVARCHAR(40) | True |  | False |  | Reference to the quality inspection (Disposition) the given test belongs to. |
| DispositionReadingID | INT(10,0) | True |  | False |  | Disposition Reading Identifier. |
| DispositionTestSampleID | INT(10,0) | True |  | False |  | Disposition Test Sample Identifier. |
| DispositionTestStatusName | NVARCHAR(50) | True |  | False |  | System status of the disposition test. |
| DispositionUserStatusName | NVARCHAR(50) | True |  | False |  | User status of the disposition test defined in DISPOSITION_USER_STATUS table. |
| Facility | NVARCHAR(40) | True |  | False |  | Reference to the facility quality inspection (Disposition) the given test belongs to. |
| GradeCode | NVARCHAR(20) | True |  | False |  | Not used. |
| Group_ | NVARCHAR(40) | True |  | False |  | Unique identifier of group of attributes the current one is assigned to. |
| GroupClass | INT(10,0) | True |  | False |  | Unique identifier of group class of attributes the current one is assigned to. |
| GroupType | SMALLINT(5,0) | True |  | False |  | Unique identifier of group type of attributes the current one is assigned to. |
| ID | BIGINT(19,0) | False |  | True |  | Unique identifier of the row. |
| InputSequenceNo | INT(10,0) | True |  | False |  | For future use. |
| InspectorEmployeeNo | NVARCHAR(50) | True |  | False |  | Employee number of whom executing the test. |
| LineSequenceNo | INT(10,0) | True |  | False |  | Reference to the Disposition line the given test belongs to. |
| LotNo | NVARCHAR(40) | True |  | False |  | Lot Number the reading was executed on. |
| LowerControlLimit | DECIMAL(28,10) | True |  | False |  | Lower Control Limit. |
| LowerSpecificationLimit | DECIMAL(28,10) | True |  | False |  | Lower Specification Limit. |
| LSLDefectReasonCode | NVARCHAR(20) | True |  | False |  | Default defect code when the value of the characteristic is above the Lower Specification Limit (applicable only for characteristics of type: Variable). |
| MeanValue | DECIMAL(28,10) | True |  | False |  | Numeric mean value of the test.  Applies only for test of characteristic of type: Variable. |
| NoOfReadings | INT(10,0) | True |  | False |  | Number of readings of the value for the characteristic. Applies only for test that are executed by reading multiple values (DISPOSITION_READING). |
| NoOfSamples | INT(10,0) | True |  | False |  | Total number of partial samples to be taken for the given test. |
| NoUnit | INT(10,0) | True |  | False |  | Number of units tested within the single reading. |
| NoUnitAboveLimit | INT(10,0) | True |  | False |  | Number of measured values that are above the defined upper specification limit. |
| NoUnitBelowLimit | INT(10,0) | True |  | False |  | Number of measured values that are below the defined lower specification limit. |
| NoUnitInspected | INT(10,0) | True |  | False |  | Total number of inspected units. |
| NoUnitNonconforming | INT(10,0) | True |  | False |  | Total number of nonconforming measured values. |
| Number_ | NVARCHAR(40) | True |  | False |  | Sample number. |
| OverrideSumResults | BIT | True | (0) | False |  | Flag indicating that the summarized results will be populated manually instead of the automatic calculation based on multiple readings (DISPOSITION_READING). |
| ProductNo | NVARCHAR(80) | True |  | False |  | Unique product identifier for the specified Serial Number. |
| ReadingSequenceNo | INT(10,0) | True |  | False |  | Sequence number in this disposition reading. |
| ReadingValidation | SMALLINT(5,0) | True | (1) | False |  | Flag indicating whether the number of readings for the characteristic. |
| ReasonCode | NVARCHAR(20) | True |  | False |  | Not used. |
| RecordDefect | BIT | True | (0) | False |  | Flag indicating if quality defects are created automatically depending on the test result. |
| RecordingType | SMALLINT(5,0) | True |  | False |  | Type of result recording. Depending on this type the test results are recorded in the different form. |
| Required | BIT | True | (0) | False |  | Flag indicating if the given test is required or optional. |
| ResourceID | INT(10,0) | True |  | False |  | Unique identifier of the resource (equipment) used to collect the reading value. |
| ResourceName | NVARCHAR(80) | True |  | False |  | The Resource used for this disposition test. |
| ResourceType | SMALLINT(5,0) | True |  | False |  | The Resource type used for this disposition test. |
| SampleNo | NVARCHAR(40) | True |  | False |  | For future use. |
| SamplePlanCode | NVARCHAR(40) | True |  | False |  | Code of the Sample Plan (SAMPLE_PLAN) used for the test. |
| SampleQuantity | DECIMAL(28,10) | True |  | False |  | Amount of product that represents a single sample unit. |
| SampleSequenceNo | INT(10,0) | True |  | False |  | Not used. |
| SampleSize | DECIMAL(28,10) | True |  | False |  | Number of units to be inspected. |
| SampleUomCode | NVARCHAR(10) | True |  | False |  | Unit of measure for quantity per sample. |
| ScheduledFinishDate | DATETIME | True |  | False |  | Scheduled Finish Date and Time of the quality inspection test. |
| ScheduledStartDate | DATETIME | True |  | False |  | Scheduled Start Date and Time of the quality inspection test. |
| SequenceNo | INT(10,0) | True |  | False |  | Unique sequential number of the test within the one disposition line. |
| SerialNo | NVARCHAR(40) | True |  | False |  | Serial Number the reading was executed on. |
| SeverityCode | NVARCHAR(40) | True |  | False |  | Severity of the disposition test. |
| SPCCharacteristic | BIT | True | (0) | False |  | For For future use.. Flag indicating that the characteristic will be used to calculate, display the control or run charts. |
| StandardDeviation | DECIMAL(28,10) | True |  | False |  | Standard deviation of the test. Numeric mean value of the test. Applies only for test of characteristic of type: Variable. |
| TestAttribute | NVARCHAR(80) | True |  | False |  | Collected attribute. |
| TestingFinishDate | DATETIME | True |  | False |  | Actual Finish Date and Time of the quality inspection test. |
| TestingStartDate | DATETIME | True |  | False |  | Actual Start Date and Time of the quality inspection test. |
| TestStdDeviation | DECIMAL(28,10) | True |  | False |  | Standard deviation of the test. Numeric mean value of the test. Applies only for test of characteristic of type: Variable. |
| TestValue | DECIMAL(28,10) | True | (0.0) | False |  | Numeric result of the test. Applies only for test of characteristic of type: Variable. |
| TransactionHistoryID | BIGINT(19,0) | False |  | False | TRANSACTION_HISTORY | Transaction history identifier. |
| UnitID | INT(10,0) | True |  | False |  | Unique identifier of the Unit. |
| UomCode | NVARCHAR(10) | True |  | False |  | Unit of measure of the numeric value of the test. Applies only for test of characteristic of type: Variable. |
| UpperControlLimit | DECIMAL(28,10) | True |  | False |  | Upper Control Limit. |
| UpperSpecificationLimit | DECIMAL(28,10) | True |  | False |  | Upper Specification Limit. |
| USLDefectReasonCode | NVARCHAR(20) | True |  | False |  | Default defect code when the value of the characteristic is above the Upper Specification Limit (applicable only for characteristics of type: Variable). |
| Value_ | DECIMAL(28,10) | True |  | False |  | Numeric result of the test. Applies only for test of characteristic of type: Variable. |

## Primary Key

- **PK_TRANSACTION_HISTORY_QUAL_TEST** on `ID`

## Foreign Keys (this table -> other)

- **FK_TRANSACTION_HISTORY_QUAL_TEST_TRANSACTION_HISTORY** — TRANSACTION_HISTORY_QUAL_TEST -> TRANSACTION_HISTORY (`TransactionHistoryID -> ID`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_TRANSACTION_HISTORY_QUAL_TEST_TRANSACTION_HISTORY** on `TransactionHistoryID`
