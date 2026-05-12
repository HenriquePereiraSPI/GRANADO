# RecordTestResult

**Category:** Apriso/Quality/Inspection
**Class:** `FlexNet.BusinessFacade.Quality.DispositionTestManager`
**Assembly:** `FlexNet.BusinessFacade.Quality2`
**Status:** Active

## Description

The method is used to record simplified test results as Disposition Test or Disposition Test Sample (exclusively). It is used when the test results are recorded in the basic form (single value).

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | DispositionTestID | Integer | Yes | Identifier of a Disposition Test for which the Test result is to be recorded. |
| Input | DispositionTestSampleID | Integer | No | Identifier of a Disposition Test Sample belonging to a Test for which the Test result is to be recorded. |
| Input | InspectorID | Integer | No | Identifier of an employee performing the test. |
| Input | TestAttribute | Char | No | Attributive result of the test. Applies only for test of characteristic of type: Attribute. This set of available statuses is determined by Disposition Test Attribute (DISPOSITION_TEST_ATTRIBUTE table) |
| Input | UomCode | Char | No | Unit of measure of the numeric value of the test. Applies only for test of characteristic of type: Variable. |
| Input | Value | Decimal | No | Numeric result of the test. Applies only for test of characteristic of type: Variable. |

## Validations

- DispositionTestID must exist in DISPOSITION_TEST table. 
- DispositionTestSampleID must exist in DISPOSITION_TEST_SAMPLE table. 
- InspectorID must exist in EMPLOYEE table. 
- If Disposition Test Characteristic is of 'Variable' type then the method validates that UomCode exists in UOM table. 
- Else if Disposition Test Characteristic is of 'Attribute' type then the method validates that TestAttribute and DispositionTestID exist in DISPOSITION_TEST_ATTRIBUTE table.

## System Processing

System:
 
 
- Validates that DispositionTestSampleID matches DispositionTestID. 
- Validates that disposition test status (DISPOSITION_TEST.Status) is 'Released' or 'Started' (DISPOSITION_TEST_STATUS). 
- Validates that disposition test sample status (DISPOSITION_TEST_SAMPLE.DispositionTestStatus) is 'Released' or 'Started' (DISPOSITION_TEST_STATUS). 
- Validates that UomCode is specified when disposition test characteristic is of 'Variable' type. 
- Validates that TestAttribute is specified when disposition test characteristic is of 'Attribute' type. 
- If the status of Disposition Test or Disposition Test Sample is 'Released' then invokes BC method Change Disposition Test Status passing the following arguments: 
 
- DispositionTestID - inputted DispositionTestID, 
- DispositionTestSampleID - inputted DispositionTestSampleID, 
- DispositionTestStatus - 'Started' (DISPOSITION_TEST_STATUS), 
- Propagate - 'false', 
- EmployeeID - inputted InspectorID, 
- Comment - not specified 
 
- If DispositionTestSampleID is not specified then updates Disposition Test record with the following parameters: 
 
- Value converted from the inputted UomCode to uom code of the disposition test (DISPOSITION_TEST.UomCode). Conversion occurs for the product defined at the disposition level (DISPOSITION.ProductID). 
- UomCode (is set when it wasn't set yet) 
- TestAttribute 
- InspectorID 
- InspectorEmloyeeNo (retrieved based on InspectorID from EMPLOYEE.EmployeeNo) 
 
- If DispositionTestSampleID is specified updates Disposition Test Sample record with the following parameters: 
 
- Value converted from the inputted UomCode to uom code of the disposition test sample (DISPOSITION_TEST_SAMPLE.UomCode). Conversion occurs for the product defined at the Disposition level (DISPOSITION.ProductID). 
- UomCode (is set when it wasn't set yet) 
- TestAttribute 
- InspectorID

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| DISPOSITION_TESTFields updated when DispositionTestSamleID is NOT specified. | TestAttribute | Inputted TestAttribute (when disposition test characteristic type is 'Attribute') |
|  | TestValue | Inputted Value converted to disposition test uom based on the ProductID defined at the disposition level. Updated when characteristic is of 'Variable' type. |
|  | UomCode | Inputted UomCode (when it was not set yet). Updated when characteristic is of 'Variable' type. |
|  | InspectorID | Inputted InspectorID |
|  | InspectorEmployeeNo | Retrieved base on InpsectorID from |
| DISPOSITION_TEST_SAMPLEFields updated when DispositionTestSampleID is specified. | Attribute | Inputted TestAttribute (when disposition test characteristic type is 'Attribute') |
|  | Value | Inputted Value converted to disposition test sample uom based on the ProductID defined at the disposition level. Updated when characteristic is of 'Variable' type. |
|  | UomCode | Inputted UomCode (when it was not set yet). Updated when characteristic is of 'Variable' type. |
|  | InspectorID | Inputted InspectorID |
