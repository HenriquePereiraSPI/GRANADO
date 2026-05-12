# UpdateDispositionLine

**Category:** Apriso/Quality/Inspection
**Class:** `FlexNet.BusinessFacade.Quality.DispositionLineManager`
**Assembly:** `FlexNet.BusinessFacade.Quality2`
**Status:** Deprecated

## Description

Method is used to update the subset of quality inspection used when the further grouping of quality test is required (e.g. based on the specification). It updates the record in Disposition Line.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | Comment | Char | No | Description of the group of test to be performed. |
| Input | Disposition | Char | Yes | Sequence number of the Quality Inspection Disposition (QID). |
| Input | ExecutionOprSequenceNo | Char | No | Operation of the execution order referenced as ExecutionOrderNo used when the given disposition line is linked to the operation executing all tests (DISPOSITION_TEST) assigned to this line. |
| Input | ExecutionOrderNo | Char | No | Execution Order Number indicates an order that executes the quality inspection existing in WIP_ORDER table. |
| Input | ExecutionOrderType | Integer | No | Type of the execution order referenced as ExecutionOrderNo. |
| Input | Facility | Char | Yes | Reference to the facility quality inspection (Disposition) the given line belongs to. |
| Input | ScheduledFinish | DateTime | No | Scheduled End Date and Time of the test of the Disposition Line. |
| Input | ScheduledStart | DateTime | No | Scheduled Start Date and Time of the test of the Disposition Line. |
| Input | SequenceNo | Integer | Yes | Unique sequence number of the Disposition Line. |
| Input | SeverityID | Integer | No | Severity of the defect. |
| Input | SpecificationID | Integer | No | Identifier of the specification used to define the set of test to be executed for the given line. |
| Input | SamplePlanID | Integer | No | Identifier of Sample Plan |

## Validations

- Facility must exist in FACILITY table. 
- Facility and Disposition must exist in DISPOSITION table. 
- Facility, Disposition and SequenceNo must exist in DISPOSITION_LINE table. 
- SpecificationID must exist in SPECIFICATION table. 
- SeverityID must exit in DISPOSITION_SEVERITY table. 
- ExecutionOrderType and ExecutionOrderNo must exist in WIP_ORDER table. 
- ExecutionOrderType, ExecutionOrderNo and ExecutionOprSequenceNo must exist in WIP_OPERATION table. 
- SamplePlanID exists in SAMPLE_PLAN table. 
- Execution order operation must belong to execution order defined on disposition level

## System Processing

- Validates that disposition line status (DISPOSITION_LINE.Status) is 'New', 'Released' or 'Started' (DISPOSITION_LINE_STATUS). 
- Validates that ScheduledStart is not greater than ScheduledFinish. This validation occurs when both dates are specified (different than DateTime.MinValue = 00:00:00.0000000, January 1, 0001). 
- Validates that execution order is not completed (WIP_ORDER.WorkOrderStatus different than 3 (WIP_ORDER_STATUS)). 
- Validates that execution operation is not completed (WIP_OPERATION.OperationStatus different than 5 (WIP_OPERATION_STATUS)) 
- System updates the Disposition Line with all the parameters of the BC method.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| DISPOSITION_LINE | SpecificationID | Inputted SpecificationID or Null if not specified (not greater than 0). |
|  | ScheduledStartDate | ScheduledStart or Null if not specified (00:00:00.0000000, January 1, 0001). |
|  | ScheduledFinishDate | Inputted ScheduledFinish or Null if not specified (00:00:00.0000000, January 1, 0001). |
|  | SeverityID | Inputted SeverityID or Null if not specified (not greater than 0). |
|  | ExecutionOrderNo | Inputted ExecutionOrderNo or Null if not specified. |
|  | ExecutionOrderType | Inputted ExecutionOrderType or Null if not specified (not greater than 0). |
|  | ExecutionOprSequenceNo | Inputted ExecutionOprSequenceNo or Null if not specified. |
|  | Comment | Inputted Comment or Null if not specified. |
|  | SamplePlanID | Inputted SamplePlanID or Null if not specified. |
