# CreateDispositionLine_v941

**Category:** Apriso/Quality/Inspection
**Class:** `FlexNet.BusinessFacade.Quality.DispositionLineManager`
**Assembly:** `FlexNet.BusinessFacade.Quality2.dll`
**Status:** Deprecated

## Description

Method is used to create the subset of quality inspection used when the further grouping of quality test is required (e.g. based on the specification). It creates the record in Disposition Line and allows automatically generate Disposition Test records in case Specification is passed as the parameter to the BC method.

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
| Input | SequenceNo | Integer | No | Unique sequence number of the Disposition Line. |
| Input | LineCode | Char | No | Line code of the disposition line to be created. |
| Input | SeverityID | Integer | No | Severity of the defect. |
| Input | SpecificationID | Integer | No | Identifier of the specification used to define the set of test to be executed for the given line. |
| Input | SamplePlanID | Integer | No | Identifier of Sample Plan |
| Output | LineSequenceNo | Integer | No | Unique identifier of the newly created disposition Line. |

## Validations

- Facility must exist in FACILITY table. 
- Facility and Disposition must exist in DISPOSITION table. 
- SpecificationID must exist in SPECIFICATION table. 
- SeverityID must exist in DISPOSITION_SEVERITY table. 
- ExecutionOrderType and ExecutionOrderNo must exist in WIP_ORDER table. 
- ExecutionOrderType, ExecutionOrderNo and ExecutionOprSequenceNo must exist in WIP_OPERATION table. 
- SamplePlanID exists in SAMPLE_PLAN table. 
- Execution order operation must belong to execution order defined on disposition level

## System Processing

- Validates that disposition status (DISPOSTION_LINE.Status) is 'New', 'Released' or 'Started' (DISPOSITION_LINE_STATUS table). 
- If SequenceNo is not passed System generates the unique sequence number within the disposition. Otherwise it verifies that no other Disposition Line exists for the given Disposition. 
- Validates that ScheduledStart is not greater than ScheduledFinish. This validation occurs when both dates are specified (different than DateTime.MinValue = 00:00:00.0000000, January 1, 0001). 
- Validates that execution order is not completed (WIP_ORDER.WorkOrderStatus different than 3 (WIP_ORDER_STATUS)). 
- Validates that execution operation is not completed (WIP_OPERATION.OperationStatus different than 5 (WIP_OPERATION_STATUS)). 
- Creates Disposition Line with status defaulted to 'New' passing all the parameters of the BC method. 
- If SpecificationID is passed then system creates automatically all the Disposition Test records based on the information from 'inspection' characteristics (CHARACTERISTIC.Usage = 2) assigned to the specification (SPECIFICATION_CHARACTERISTIC) by invoking the BC method: Create Disposition Test. Information taken from a given inspection characteristic might be altered by the characteristic linked to the product at the material master level (PRODUCT_CHARACTERISTIC).

## Pre-Conditions

- Disposition and Disposition Line exists and are in the status (New, Started, Released), 
- Revision Characteristic exists in master data.

## Published Events

Newly created disposition test ready to be released

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| DISPOSITION_LINE | Facility | Inputted Facility |
|  | Disposition | Inputted Disposition |
|  | LineSequenceNo | Inputted SequenceNo or generated. |
|  | SpecificationID | Inputted SpecificationID |
|  | SpecificationRevision | SPECIFICATION.SpecificationRevision for the inputted SpecificationID |
|  | ScheduledStartDate | Inputted ScheduledStart |
|  | ScheduledFinishDate | Inputted ScheduledFinish |
|  | SeverityID | Inputted SeverityID |
|  | ExecutionOrderNo | Inputted ExecutionOrderNo |
|  | ExecutionOrderType | Inputted ExecutionOrderType (populated only if ExecutionOrderNo is specified) |
|  | ExecutionOprSequenceNo | Inputted ExecutionOprSequenceNo (populated only if ExecutionOrderNo and ExecutionOrderType are specified) |
|  | Comment | Inputted Comment |
|  | Status | 'New' (DISPOSITION_LINE_STATUS) |
|  | DispositionUserStatusID | Populated from DispositionUserStatusID field if it is already defined for the status in the DISPOSITION_LINE_STATUS table |
|  | SamplePlanID | Inputted SamplePlanID |
|  | LineCode | Inputted LineCode |
| [All tables populated by CreateDispositionTest_v94 method] |  |  |
