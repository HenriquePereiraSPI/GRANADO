# TRANSACTION_HISTORY_WIP

**Database:** Operational

**Description:** This table is a specialization of the transaction history, storing data unique to materials involved in production or inventory.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| ActivityAction | NVARCHAR(10) | True |  | False |  | Database action performed for an activity. |
| ActualCompletionDate | DATETIME | True |  | False |  | The date and time when the order was completed. |
| ActualDurationSeconds | INT(10,0) | True |  | False |  | The actual duration of the WIP in seconds. |
| ActualPotencyPercent | DECIMAL(28,10) | True |  | False |  | Actual Potency percent. |
| ActualStartDate | DATETIME | True |  | False |  | The date and time when the order was started. |
| AvailabilityDate | DATETIME | True |  | False |  | Availability date and time. |
| BestAfterDate | DATETIME | True |  | False |  | Best after date and time of the entity. |
| BestBeforeDate | DATETIME | True |  | False |  | Best before date and time of the entity. |
| ChildLotNo | NVARCHAR(40) | True |  | False |  | The child lot number that caused the hold. |
| ChildProductNo | NVARCHAR(80) | True |  | False |  | The child product number that caused the hold. |
| ChildSerialNo | NVARCHAR(40) | True |  | False |  | The child serial number that caused the hold. |
| Company | NVARCHAR(40) | True |  | False |  | Company. |
| CompletedQuantity | DECIMAL(28,10) | True |  | False |  | Quantity that have been completed so far against the WIP Order. |
| Confirmation | NVARCHAR(5) | True |  | False |  | SAP specify confirmation code. L20 = Partial confirmation, L40 = Final confirmation, P10 = clock-in, P20=Clock out, P15=Begin recess, P25 = End recess. |
| Container | NVARCHAR(40) | True |  | False |  | Container and attributes identifier. |
| ContainerClassID | INT(10,0) | True |  | False |  | The Class of the Container. |
| Containment | NVARCHAR(80) | True |  | False |  | The containment associated with their history. |
| Description | NVARCHAR | True |  | False |  | Text Description for this WIP Order. |
| DueDate | DATETIME | True |  | False |  | The date and time when the work order is due for completion. |
| EmployeeNo | NVARCHAR(50) | True |  | False |  | Employee number. |
| EngineeringChangeNo | NVARCHAR(40) | True |  | False |  | Engineering Change Number assigned for changes to the WIP Order. |
| ExpectedCompletionDate | DATETIME | True |  | False |  | The expected completion date for the WIP. |
| ExpectedDurationSeconds | INT(10,0) | True |  | False |  | The expected duration of the WIP in seconds. |
| ExpectedStartDate | DATETIME | True |  | False |  | The date and time when the operation expected to start. |
| ExpirationDate | DATETIME | True |  | False |  | The expired date and time. |
| Facility | NVARCHAR(40) | True |  | False |  | Facility. |
| FacilityPrinted | NVARCHAR(40) | True |  | False |  | Identifier for the Facility where the label was printed. |
| FromContentClass | SMALLINT(5,0) | True |  | False |  | From WIP Content Class. |
| FromReasonCode | NVARCHAR(20) | True |  | False |  | From Reason Code and its Attributes. |
| FromReasonType | SMALLINT(5,0) | True |  | False |  | The enumeration of the from value representing types of reasons for occurrences. |
| GradeID | INT(10,0) | True |  | False |  | GradeID. |
| HoldReasonCode | NVARCHAR(20) | True |  | False |  | Reason code for hold status. |
| HoldReasonType | SMALLINT(5,0) | True |  | False |  | Reason type for hold status. |
| ID | BIGINT(19,0) | False |  | True |  | Unique identifier of the row. |
| LabelFunction | NVARCHAR(100) | True |  | False |  | Label function. |
| LabelName | NVARCHAR(80) | True |  | False |  | Name of the Label that was printed. |
| LabelRevision | INT(10,0) | True |  | False |  | The revision number of the label format. |
| LabelType | SMALLINT(5,0) | True |  | False |  | Type of label. |
| LastInspectionDate | DATETIME | True |  | False |  | Last inspection date and time. |
| LotNo | NVARCHAR(40) | True |  | False |  | The Lot identifier or number. |
| NextInspectionDate | DATETIME | True |  | False |  | Next inspection date and time. |
| NumberOfLabels | SMALLINT(5,0) | True |  | False |  | Number of Labels Printed. |
| OperationActualCompletionDate | DATETIME | True |  | False |  | Date that the WIP Order actually completed. |
| OperationActualStartDate | DATETIME | True |  | False |  | Date that the WIP Order actually started. |
| OperationCode | NVARCHAR(80) | True |  | False |  | The Operation Code. |
| OperationDurationSeconds | INT(10,0) | True |  | False |  | Duration for the WIP Operation. |
| OperationExpectedStartDate | DATETIME | True |  | False |  | Date that the WIP Order is expected to start. |
| OperationRevision | NVARCHAR(80) | True |  | False |  | The Revision for the Operation. |
| OperationScheduledStartDate | DATETIME | True |  | False |  | Date that the WIP Operation is scheduled to Start. |
| OperationStatus | SMALLINT(5,0) | True |  | False |  | Enumeration of the values that describe the status of a work order operation. |
| OperationType | SMALLINT(5,0) | True |  | False |  | Enumeration of the values that describe various types of operations. |
| OprSequenceNo | NVARCHAR(20) | True |  | False |  | The Sequence Number of the Operation. |
| OrderLineNo | INT(10,0) | True |  | False |  | Reference to the order line no. |
| OrderNo | NVARCHAR(20) | True |  | False |  | Reference to the Order header (in addition to Order Type). |
| OrderQuantity | DECIMAL(28,10) | True |  | False |  | Total Quantity for the WIP Order at the time this transaction was performed. |
| OrderType | SMALLINT(5,0) | True |  | False |  | Reference to the order type. |
| ParentLotNo | NVARCHAR(40) | True |  | False |  | The parent lot number that caused the hold. |
| ParentOprSequenceNo | NVARCHAR(20) | True |  | False |  | Parent Operation Sequence Number. |
| ParentProductNo | NVARCHAR(80) | True |  | False |  | The parent product number that caused the hold. |
| ParentSerialNo | NVARCHAR(40) | True |  | False |  | The parent serial number that caused the hold. |
| ParentStepSequenceNo | INT(10,0) | True |  | False |  | Parent WIP Operation Step sequence number. |
| ParentWipOrderNo | NVARCHAR(40) | True |  | False |  | Parent WIP Order number. |
| ParentWipOrderType | SMALLINT(5,0) | True |  | False |  | Parent WIP Order type. |
| PartnerID | INT(10,0) | True |  | False |  | Partner ID. |
| PrinterUsed | NVARCHAR(50) | True |  | False |  | The Name of the Printer that was used. |
| Priority | SMALLINT(5,0) | True |  | False |  | WIP Order Priority at the time this transaction was performed. |
| ProcessID | INT(10,0) | True |  | False |  | Process ID relates to the current WIP Order OriginalProcessID - (int) - original process ID relates to the current WIP Order. |
| ProductID | INT(10,0) | True |  | False |  | Product ID. |
| ProductionLineNo | NVARCHAR(40) | True |  | False |  | The Production Line identifier or number. |
| ProductNo | NVARCHAR(80) | True |  | False |  | Product identifier or number. |
| ProductRevision | NVARCHAR(50) | True |  | False |  | Product Revision. |
| ProjectCode | NVARCHAR(40) | True |  | False |  | Project code. |
| Quantity | DECIMAL(28,10) | True |  | False |  | Quantity of that product. History information that comes from LABOR_DETAIL and WIP_CONTENT. |
| QuantityUomCode | NVARCHAR(10) | True |  | False |  | Unit Of Measure Code for the quantity. |
| RecipeID | BIT | True |  | False |  | Recipe ID. |
| ReleaseFacility | NVARCHAR(40) | True |  | False |  | Facility for release status. |
| ReleaseReasonCode | NVARCHAR(20) | True |  | False |  | Reason code for release status. |
| ReleaseReasonType | SMALLINT(5,0) | True |  | False |  | Reason type for release status. |
| ReleaseStartDate | DATETIME | True |  | False |  | Date that the WIP Order is to be released. |
| ResourceName | NVARCHAR(80) | True |  | False |  | The identifier or name of the resource. |
| ResourceType | SMALLINT(5,0) | True |  | False |  | Enumeration of the values representing various resource types. |
| ReworkQuantity | DECIMAL(28,10) | True |  | False |  | Quantity rework. |
| RotationDate | DATETIME | True |  | False |  | Rotation date and time. |
| SamplePlanCode | NVARCHAR(40) | True |  | False |  | The Sample Plan Code. |
| SampleRevision | NVARCHAR(20) | True |  | False |  | The sample plan revision identifier or number. |
| ScheduledCompletionDate | DATETIME | True |  | False |  | The scheduled completion date for the WIP. |
| ScheduledDurationSeconds | INT(10,0) | True |  | False |  | The scheduled duration of the wip in seconds. |
| ScheduledStartDate | DATETIME | True |  | False |  | The date and time when the work order is scheduled to start. |
| ScheduleName | NVARCHAR(40) | True |  | False |  | The name for a given Production line schedule. |
| SchedulePayDay | DATETIME | True |  | False |  | The payday the order was created for. |
| ScrapQuantity | DECIMAL(28,10) | True |  | False |  | Quantity scrap. |
| SerialNo | NVARCHAR(40) | True |  | False |  | The Serial number for a product. |
| SkuCode | NVARCHAR(50) | True |  | False |  | SKU code. |
| Specification | NVARCHAR(40) | True |  | False |  | The specification identifier or name. |
| SpecificationRevision | NVARCHAR(20) | True |  | False |  | Revision for the Specification attached to the WIP Order. |
| StepSequenceNo | INT(10,0) | True |  | False |  | WIP Operation Step sequence number. |
| Supplier | NVARCHAR(40) | True |  | False |  | Supplier. |
| SupplierShipFrom | NVARCHAR(20) | True |  | False |  | Supplier shipping point code. |
| ToContentClass | SMALLINT(5,0) | True |  | False |  | To WIP Content Class. |
| ToReasonCode | NVARCHAR(20) | True |  | False |  | To Reason Code and its Attributes. |
| ToReasonType | SMALLINT(5,0) | True |  | False |  | The enumeration of the to value representing types of reasons for occurrences. |
| TransactionHistoryID | BIGINT(19,0) | False |  | False | TRANSACTION_HISTORY | Transaction history identifier. |
| UomCode | NVARCHAR(10) | True |  | False |  | Unit Of Measure for the quantity on the WIP Order. |
| UPCCode | NVARCHAR(50) | True |  | False |  | UPC code. |
| WBSCode | NVARCHAR(32) | True |  | False |  | The work breakdown structure code. |
| WipContentType | SMALLINT(5,0) | True |  | False |  | The type of work order content. |
| WipOperationCompleteFlag | BIT | True |  | False |  | Indicates whether or not the operation is complete. |
| WipOrderCompleteFlag | BIT | True |  | False |  | Indicates whether or not the work order is complete. |
| WipOrderNo | NVARCHAR(40) | True |  | False |  | The work order identifier or number. |
| WipOrderStatus | SMALLINT(5,0) | True |  | False |  | Enumeration of the values that describe the status of work orders. |
| WipOrderType | SMALLINT(5,0) | True |  | False |  | Enumeration of the values that describe various order types. |
| WorkCenter | NVARCHAR(40) | True |  | False |  | Work Center and its attributes. |
| WorkflowStatusID | INT(10,0) | True |  | False |  | Work flow status. |
| XMLLocation | NVARCHAR(240) | True |  | False |  | Location for the XML Document. |
| XMLSchemaName | NVARCHAR(50) | True |  | False |  | Name for the XML Document. |

## Primary Key

- **PK_TRANSACTION_HISTORY_WIP** on `ID`

## Foreign Keys (this table -> other)

- **FK_TRANSACTION_HISTORY_WIP_TRANSACTION_HISTORY** — TRANSACTION_HISTORY_WIP -> TRANSACTION_HISTORY (`TransactionHistoryID -> ID`)

## Referenced By (other tables -> this)

- **FK_SPC_CHART_DATA_TRANSACTION_HISTORY_WIP** — SPC_CHART_DATA -> TRANSACTION_HISTORY_WIP (`TransactionHistoryID -> ID`)
- **FK_TRANSACTION_HISTORY_WIP_RESV_TRANSACTION_HISTORY_WIP** — TRANSACTION_HISTORY_WIP_RESV -> TRANSACTION_HISTORY_WIP (`TransactionHistoryWipID -> ID`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_TRANSACTION_HISTORY_WIP_TRANSACTION_HISTORY** on `TransactionHistoryID`
- **IXD_WipOrderNo_WipOrderType_OprSequenceNo** on `WipOrderNo, WipOrderType, OprSequenceNo`
