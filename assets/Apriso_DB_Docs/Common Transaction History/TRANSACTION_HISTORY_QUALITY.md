# TRANSACTION_HISTORY_QUALITY

**Database:** Operational

**Description:** Record for Transaction History for Quality Transactions.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| AccountNo | NVARCHAR(40) | True |  | False |  | The account number of the partner linked with this disposition. |
| Characteristic | NVARCHAR(40) | True |  | False |  | Characteristic name and its attributes. |
| Comment_ | NVARCHAR | True |  | False |  | Comment |
| ConformingToControl | BIT | True |  | False |  | Indicates if the collected value conformed to control limits. |
| ConformingToSpecification | BIT | True |  | False |  | Indicates if the collected value conformed to specification limits. |
| Container | NVARCHAR(40) | True |  | False |  | Container that hold the defect. |
| ContainerSequenceNo | INT(10,0) | True |  | False |  | Disposition Container Sequence Number. |
| ContainerStatus | SMALLINT(5,0) | True |  | False |  | Disposition Container Status. |
| CorrectiveActiveReasonCode | NVARCHAR(20) | True |  | False |  | The Reason Code for action taken to remediate defects. |
| CurrentDispositionSequenceNo | INT(10,0) | True |  | False |  | Current Disposition Sequence Number. |
| Disposition | NVARCHAR(40) | True |  | False |  | Disposition and its attributes. |
| DispositionClassName | NVARCHAR(50) | True |  | False |  | Class name of the Disposition. |
| DispositionLineStatus | INT(10,0) | True |  | False |  | Enumeration of the values that describe the current status of a quality control disposition line. |
| DispositionSampleStatus | INT(10,0) | True |  | False |  | Enumeration of the values that describe the current status of a quality control sample. |
| DispositionStatus | INT(10,0) | True |  | False |  | Enumeration of the values that describe the current status of a quality control disposition. |
| DispositionType | SMALLINT(5,0) | True |  | False |  | Enumeration of the values that describe each type of quality control disposition. |
| DispositionUserStatusName | NVARCHAR(50) | True |  | False |  | The Name of the Dispositoin User Status as defined in DISPOSITION_USER_STATUS tabl.e |
| ErrorCode | SMALLINT(5,0) | True |  | False |  | Error code. |
| ExecutionOprSequenceNo | NVARCHAR(20) | True |  | False |  | Sequence number of the execution Operation. |
| ExecutionOrderNo | NVARCHAR(40) | True |  | False |  | WIP Order number. |
| ExecutionOrderType | SMALLINT(5,0) | True |  | False |  | WIP Order type. |
| Facility | NVARCHAR(40) | True |  | False |  | Facility where the defect occurred. |
| FunctionSequenceNo | INT(10,0) | True |  | False |  | Function sequence no of the disposition. |
| GradeCode | NVARCHAR(40) | True |  | False |  | The Grade code for this disposition. |
| GradeID | INT(10,0) | True |  | False |  | GradeID for the defect. |
| ID | BIGINT(19,0) | False |  | True |  | Unique identifier of the row. |
| LimitExceed | DECIMAL(28,10) | True |  | False |  | The Value that exceeded the limit. |
| LimitType | NVARCHAR(5) | True |  | False |  | Types of test limit. LSL - Lower Specification Limit, LCL - Lower Control Limit, USL - Upper specification Limit, UCL - Upper Control Limit. |
| LineSequenceNo | INT(10,0) | True |  | False |  | The disposition sequence number. |
| LotNo | NVARCHAR(40) | True |  | False |  | The Lot identifier or number. |
| LowerCoherenceLimit | DECIMAL(28,10) | True |  | False |  | Lower Coherence Limit of a characteristic. |
| LowerControlLimit | DECIMAL(28,10) | True |  | False |  | The lower control limit. |
| LowerSpecificationLimit | DECIMAL(28,10) | True |  | False |  | The upper specification limit. |
| MRBFinishDate | DATETIME | True |  | False |  | The date and time when the Material Review Board was completed. |
| MRBFinishEmployeeNo | NVARCHAR(50) | True |  | False |  | Employee and attributes unique identifier. |
| MRBStartDate | DATETIME | True |  | False |  | The date and time when the Material Review Board was started. |
| MRBStartEmployeeNo | NVARCHAR(50) | True |  | False |  | Employee and Attributes unique identifier. |
| OperationCode | NVARCHAR(80) | True |  | False |  | The Operation Code. |
| OperationRevision | NVARCHAR(80) | True |  | False |  | The Revision for the Operation. |
| OperationStatus | SMALLINT(5,0) | True |  | False |  | Enumeration of the values that describe the status of a work order operation. |
| OperationType | SMALLINT(5,0) | True |  | False |  | Enumeration of the values that describe various types of operations. |
| OprSequenceNo | NVARCHAR(20) | True |  | False |  | The Sequence Number of the Operation. |
| OrderLineNo | NVARCHAR(40) | True |  | False |  | Order Line Number. |
| OrderNo | NVARCHAR(40) | True |  | False |  | Order Number. |
| OrderType | SMALLINT(5,0) | True |  | False |  | Enumeration of the values that describe various order types. |
| PartnerID | INT(10,0) | True |  | False |  | ID of the Partner. |
| ProductNo | NVARCHAR(80) | True |  | False |  | Product identifier or number. |
| QualityStatusReasonCode | NVARCHAR(20) | True |  | False |  | Reason Code of the quality status. |
| Quantity | DECIMAL(28,10) | True |  | False |  | Size (population) of the quality inspection expressed in the unit of measure defined in UomCode field. |
| ReferenceDisposition | NVARCHAR(20) | True |  | False |  | Original disposition from which the defect was inherited. |
| ReferenceDispositionLineSeqNo | INT(10,0) | True |  | False |  | Original Disposition Line number from which the defect was inherited. |
| ReferenceDispositionType | SMALLINT(5,0) | True |  | False |  | Original disposition type from which the defect was inherited. |
| ReferenceFacility | NVARCHAR(40) | True |  | False |  | Facility where the defect was inherited. |
| ResourceLaborID | INT(10,0) | True |  | False |  | Resource labor record defining the machine event. |
| ResourceLaborRevision | INT(10,0) | True |  | False |  | Revision of the labor record approved. |
| ResourceLinkUnlinkFlag | BIT | True |  | False |  | Link or unlink flag indicator to the Resource Labor Record. |
| ResourceName | NVARCHAR(80) | True |  | False |  | Resource that hold the defect. |
| ResourceType | SMALLINT(5,0) | True |  | False |  | Type of resource that hold the defect. |
| RootCauseReasonCode | NVARCHAR(20) | True |  | False |  | The Reason Code for the underlying root cause of defects. |
| SampleFinishDate | DATETIME | True |  | False |  | The date and time when the sampling was completed. |
| SampleFinishEmployeeNo | NVARCHAR(50) | True |  | False |  | Employee and attributes unique identifier. |
| SamplePlanCode | NVARCHAR(40) | True |  | False |  | The Sample Plan Code. |
| SampleQuantity | DECIMAL(28,10) | True |  | False |  | The quantity sampled. |
| SampleRevision | NVARCHAR(20) | True |  | False |  | The sample plan revision identifier or number. |
| SampleSequenceNo | INT(10,0) | True |  | False |  | The unique identifier for a sample within a disposition. |
| SampleSize | DECIMAL(28,10) | True |  | False |  | Number of units to be inspected. Sample Size is provided manually or calculated automatically based on the Sampling Procedure. |
| SampleStartDate | DATETIME | True |  | False |  | The date and time when the first sample was drawn. |
| SampleStartEmployeeNo | NVARCHAR(50) | True |  | False |  | The employee identifier or number. |
| ScheduledFinishDate | DATETIME | True |  | False |  | The scheduled finish date and time of the transaction. |
| ScheduledStartDate | DATETIME | True |  | False |  | The schedule start date and time of the transaction. |
| SerialNo | NVARCHAR(40) | True |  | False |  | The Serial number for a product. |
| SeverityCode | NVARCHAR(40) | True |  | False |  | The Severity code for this disposition. |
| SeverityID | INT(10,0) | True |  | False |  | Associated severity for the defect. |
| Specification | NVARCHAR(40) | True |  | False |  | The specification identifier or name. |
| SpecificationRevision | NVARCHAR(20) | True |  | False |  | Revision for the Specification attached to the Order. |
| StepSequenceNo | INT(10,0) | True |  | False |  | The sequence number of the Step. |
| TargetValue | DECIMAL(28,10) | True |  | False |  | The target value of the characteristic. |
| TestAttribute | NVARCHAR(80) | True |  | False |  | Collected attribute. |
| TestingFinishDate | DATETIME | True |  | False |  | The date and time when the testing was completed. |
| TestingFinishEmployeeNo | NVARCHAR(50) | True |  | False |  | The employee identifier or number. |
| TestingStartDate | DATETIME | True |  | False |  | The date and time when testing started. |
| TestingStartEmployeeNo | NVARCHAR(50) | True |  | False |  | Employee and attributes unique identifier. |
| TestQuantity | DECIMAL(28,10) | True |  | False |  | Quantity tested. |
| TestReasonCode | NVARCHAR(20) | True |  | False |  | Test reason code. |
| TestReasonComment | NVARCHAR | True |  | False |  | Test reason comment. |
| TestUom | NVARCHAR(20) | True |  | False |  | Unit of Measure for the test value. |
| TestValue | DECIMAL(28,10) | True |  | False |  | The average (mean) collected variable value. |
| TransactionHistoryID | BIGINT(19,0) | False |  | False | TRANSACTION_HISTORY | Transaction history identifier. |
| UnitID | INT(10,0) | True |  | False |  | Unique identifier of the Unit. |
| UomCode | NVARCHAR(20) | True |  | False |  | Unit of measure for the size of the quality inspection. |
| UpperCoherenceLimit | DECIMAL(28,10) | True |  | False |  | Upper Coherence Limit of a characteristic. |
| UpperControlLimit | DECIMAL(28,10) | True |  | False |  | The upper control limit. |
| UpperSpecificationLimit | DECIMAL(28,10) | True |  | False |  | The upper specification limit. |
| WipOprSequence | NVARCHAR(20) | True |  | False |  | Operation sequence number of the WIP entity that hold the defect. |
| WipOrderNo | NVARCHAR(20) | True |  | False |  | Production/maintenance order number of the WIP entity that hold the defect. |
| WipOrderType | SMALLINT(5,0) | True |  | False |  | Type of production/maintenance order. |

## Primary Key

- **PK_TRANSACTION_HISTORY_QUALITY** on `ID`

## Foreign Keys (this table -> other)

- **FK_TRANSACTION_HISTORY_QUALITY_TRANSACTION_HISTORY** — TRANSACTION_HISTORY_QUALITY -> TRANSACTION_HISTORY (`TransactionHistoryID -> ID`)

## Referenced By (other tables -> this)

- **FK_TRANSACTION_HISTORY_QUAL_DIMEN_TRANSACTION_HISTORY_QUALITY** — TRANSACTION_HISTORY_QUAL_DIMEN -> TRANSACTION_HISTORY_QUALITY (`TransactionHistoryQualityID -> ID`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_TRANSACTION_HISTORY_QUALITY_TRANSACTION_HISTORY** on `TransactionHistoryID`
