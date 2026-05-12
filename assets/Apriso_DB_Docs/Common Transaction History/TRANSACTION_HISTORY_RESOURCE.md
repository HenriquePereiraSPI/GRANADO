# TRANSACTION_HISTORY_RESOURCE

**Database:** Operational

**Description:** This table is a specialization of the transaction history, storing data unique to equipment resource types.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| ActualCompletionDate | DATETIME | True |  | False |  | The date and time when the task was completed. |
| ActualStartDate | DATETIME | True |  | False |  | The date and time when the task was started. |
| AdjustedEndTime | DATETIME2 | True |  | False |  | Adjusted End Time when the Resource ended. |
| AdjustedStartTime | DATETIME2 | True |  | False |  | Adjusted Start Time when the Resource started. |
| AssetNumber | NVARCHAR(40) | True |  | False |  | The asset tag number. |
| AutoCharge | BIT | True |  | False |  | Automatic Charge Flag: 1 - automatic charge, 2 - no automatic charge. |
| ChildPartsPerParent | DECIMAL(28,10) | True |  | False |  | The ratio of production units for the operation or step to its parent. |
| CostCenter | NVARCHAR(70) | True |  | False |  | Cost Center name and attributes. |
| Department | NVARCHAR(40) | True |  | False |  | Department name and its Attributes. |
| Description | NVARCHAR | True |  | False |  | Comments. |
| EfficiencyFactor | DECIMAL(28,10) | True |  | False |  | The expected ratio of productive time to total working time. |
| EndEmployeeNo | NVARCHAR(50) | True |  | False |  | The end employee number. |
| EndTime | DATETIME2 | True |  | False |  | The stop time of the labor record. |
| ExcludeFromPlanning | BIT | True |  | False |  | Indicates whether or not the resource is excluded from planning. |
| Facility | NVARCHAR(40) | True |  | False |  | Facility. |
| FromContentClass | SMALLINT(5,0) | True |  | False |  | From WIP Content Class. |
| ID | BIGINT(19,0) | False |  | True |  | Transaction History Resource and its Attributes unique identifier. |
| LastMaintenanceDate | DATETIME | True |  | False |  | The date and time when the last maintenance of the resource was completed. |
| LastPositionReport | DATETIME | True |  | False |  | The date and time when the most recent geographic location report was received. |
| LoadTime | DATETIME2 | True |  | False |  | Load Time when the Resource was Loaded. History information that comes from the RESOURCE and the TASK_LABOR tables. |
| MaxUnitsPerHour | DECIMAL(28,10) | True |  | False |  | The maximum possible design speed (units per hour). |
| MobilityFlag | BIT | True |  | False |  | Indicates whether or not the resource is mobile. |
| NextMaintenanceDate | DATETIME | True |  | False |  | The next scheduled maintenance date and time. |
| NextPositionReport | DATETIME | True |  | False |  | The date and time when the next geographic location report is expected. |
| OperationCode | NVARCHAR(80) | True |  | False |  | The Operation Code. |
| OperationRevision | NVARCHAR(80) | True |  | False |  | The Revision for the Operation. |
| OperationStatus | SMALLINT(5,0) | True |  | False |  | Enumeration of the values that describe the status of a work order operation. |
| OperationType | SMALLINT(5,0) | True |  | False |  | Enumeration of the values that describe various types of operations. |
| OprSequenceNo | NVARCHAR(20) | True |  | False |  | The Sequence Number of the Operation. |
| PlanningUomCode | NVARCHAR(10) | True |  | False |  | Planning Unit of Measure Code for the Resource. |
| ReasonCode | NVARCHAR(20) | True |  | False |  | Reason Code and its Attributes. |
| ResourceClassID | INT(10,0) | True |  | False |  | Enumeration of the values representing various resource classes within a resource type. |
| ResourceLaborActivity | NVARCHAR(50) | True |  | False |  | Literal that describes the resource labor activity. |
| ResourceLaborRevision | INT(10,0) | True |  | False |  | The revision number of the resource labor record. |
| ResourceLaborStatus | SMALLINT(5,0) | True |  | False |  | Enumeration of the values representing the labor record status. |
| ResourceName | NVARCHAR(80) | True |  | False |  | The identifier or name of the resource. |
| ResourceType | SMALLINT(5,0) | True |  | False |  | Enumeration of the values representing various resource types. |
| ShiftsPerDay | SMALLINT(5,0) | True |  | False |  | The number of shifts per day. |
| StartedEmployeeNo | NVARCHAR(50) | True |  | False |  | The employee identifier or number. |
| StartTime | DATETIME2 | True |  | False |  | The date and time when the labor record started. |
| StdRate | DECIMAL(28,10) | True |  | False |  | The design speed (output parts in relation to resource planning units, according to StdUnitsChildBasis). |
| StdShiftHours | DATETIME | True |  | False |  | The standard hours per shift. |
| ToContentClass | SMALLINT(5,0) | True |  | False |  | To WIP content class. |
| TotalFailQuantity | DECIMAL(28,10) | True |  | False |  | Total Fail Quantity reported against that Resource. |
| TotalGoodQuantity | DECIMAL(28,10) | True |  | False |  | Total Good Quantity reported against that Resource. |
| TotalHeldQuantity | DECIMAL(28,10) | True |  | False |  | Total Held Quantity reported against that Resource. |
| TotalReworkQuantity | DECIMAL(28,10) | True |  | False |  | Total Rework Quantity reported against that Resource. |
| TotalScrapQuantity | DECIMAL(28,10) | True |  | False |  | Total Scrap Quantity reported against that Resource. |
| TrackingUomCode | NVARCHAR(10) | True |  | False |  | Tracking UOM Code for the Resource. |
| TransactionCode | NVARCHAR(10) | True |  | False |  | Code describing the transaction performed. |
| TransactionHistoryID | BIGINT(19,0) | False |  | False | TRANSACTION_HISTORY | Transaction history identifier. |
| UnloadTime | DATETIME2 | True |  | False |  | The time required for unloading, as in unloading a kiln. |
| UomCode | NVARCHAR(20) | True |  | False |  | UOM code of quantity reported. |
| WipOrderNo | NVARCHAR(40) | True |  | False |  | The work order identifier or number. |
| WipOrderType | SMALLINT(5,0) | True |  | False |  | Enumeration of the values that describe various order types. |
| WorkCenter | NVARCHAR(40) | True |  | False |  | Work Center and its Attributes. |

## Primary Key

- **PK_TRANSACTION_HISTORY_RESOURCE** on `ID`

## Foreign Keys (this table -> other)

- **FK_TRANSACTION_HISTORY_FM_RESOURCE_TRANSACTION_HISTORY** — TRANSACTION_HISTORY_RESOURCE -> TRANSACTION_HISTORY (`TransactionHistoryID -> ID`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_TRANSACTION_HISTORY_FM_RESOURCE_TRANSACTION_HISTORY** on `TransactionHistoryID`
- **IXD_WipOrderNo_WipOrderType_OprSequenceNo** on `WipOrderNo, WipOrderType, OprSequenceNo`
