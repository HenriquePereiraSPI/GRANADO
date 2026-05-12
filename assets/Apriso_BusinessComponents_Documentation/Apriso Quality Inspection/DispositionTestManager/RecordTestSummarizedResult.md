# RecordTestSummarizedResult

**Category:** Apriso/Quality/Inspection
**Class:** `FlexNet.BusinessFacade.Quality.DispositionTestManager`
**Assembly:** `FlexNet.BusinessFacade.Quality2`
**Status:** Active

## Description

The method is used to record test results in the summarized form. It allows for recording results in two ways: Summarized (only the summarized value) or Custom.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | Comment | Char | No | Text description of the test performed. |
| Input | DispositionTestID | Integer | Conditional | Identifier of a Disposition Test for which the Test result is to be recorded. |
| Input | DispositionTestSampleID | Integer | Conditional | Identifier of a Disposition Test Sample belonging to a Test for which the Test result is to be recorded. |
| Input | InspectorID | Integer | No | Identifier of an employee performing the test. |
| Input | MeanValue | Decimal | No | Numeric, mean value of the test. Applies only for test of characteristic of type: Variable. |
| Input | NoUnitAboveLimit | Integer | No | Number of measured values that are above the defined upper specification limit. |
| Input | NoUnitBelowLimit | Integer | No | Number of measured values that are below the defined lower specification limit. |
| Input | NoUnitInspected | Integer | No | Total number of inspected units. |
| Input | NoUnitNonconforming | Integer | No | Total number of nonconforming measured values. In case of characteristics of type Variable: Sum of NoAboveLimit + NoBelowLimit. In case of characteristic of type Attribute: Number of units for which the attributive result is not conforming (based on DISPOSITION_TEST_ATTRIBUTE.Conforming). |
| Input | StandardDeviation | Decimal | No | Standard deviation of the test. Numeric, mean value of the test. Applies only for test of characteristic of type: Variable. |
| Input | TestAttribute | Char | No | Attributive result of the test. Applies only for test of characteristic of type: Attribute. This set of available statuses is determined by Disposition Test Attribute (DISPOSITION_TEST_ATTRIBUTE). |
| Input | UomCode | Char | No | Unit of measure of the numeric value of the test. Applies only for test of characteristic of type: Variable. |
| Input | Value | Decimal | No | Numeric result of the test. Applies only for test of characteristic of type: Variable. |

## Validations

- DispositionTestID must exist in DISPOSITION_TEST table. 
- DispositionTestSampleID must exist in DISPOSITION_TEST_SAMPLE table. 
- InspectorID must exist in EMPLOYEE table.

## System Processing

- If DispositionTestSampleID is specified then the method validates that it matches the DispositionTestID. 
- If Disposition Test Characteristic is of 'Attribute' type and TestAttribue is specified then the method validates that the DispositionTestID and TestAttribue exist in DISPOSITION_TEST_ATTRIBUTE table. 
 
- Else if characteristic is of 'Variable' type and UomCode is specified then the method validates that it exists in UOM table. 
- If UomCode (characteristic of type 'Variable') or TestAttribute (characteristic of type 'Attribute') is specified then the method invokes the logic of BC: Record Test Result. 
- Else it starts Disposition Test or Disposition Test Sample if it is not started yet by calling Change Disposition Test Status BC passing the following parameters: 
 
- DispositionTestID - inputted DispositionTestID 
- DispositionTestSampleID - inputted DispositionTestSampleID 
- DispositionTestStatus - 'Started' (DISPOSITION_TEST_STATUS) 
- Propagate - 'false' 
- EmployeeID - inputted InspectorID 
- Comment - not specified 
 
 
- Validates that NoUnitInspected is greater than 0 
- If DispositionTest is linked to a Characteristic of type Variable then it validates if the sum of NoUnitAboveLimit and NoUnitBelowLimit equals NoUnitNonconforming.  
- Validates that NoUnitNonconforming is not greater than NoUnitInspected 
- Validates that NoUnitInspected is not greater than sample size of disposition test or disposition test sample (when DispositionTestSampleID is specified). 
- Updates all the summarized values of the Disposition Test (if DispositionTestSampleID not passed) or Disposition Test Sample (if DispositionTestSampleID passed) based on inputs. 
- Sets flag OverrideSumResults of the Disposition Test or Disposition Test Sample to 'True' to indicate that the summarized values are recorded in the manual form. 
- Calculates Conforming value of the Disposition Test or Disposition Test Sample based on the TestValue or TestAttribute of the Disposition Test or Value or Attribute of the Disposition Test Sample. 
- If Conforming value is calculated then updates Disposition Test or Disposition Test Sample with that value.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| DISPOSITION_TEST | ConformingToSpecification | Calculated Conforming flag (if not calculated then not updated) |
|  | MeanValue | Inputted MeanValue (when characteristic if of 'Variable' type) |
|  | TestStdDeviation | Inputted StandardDeviation (when characteristic if of 'Variable' type) |
|  | NoUnitAboveLimit | Inputted NoUnitAboveLimit (when characteristic if of 'Variable' type) |
|  | NoUnitBelowLimit | Inputted NoUnitBelowLimit (when characteristic if of 'Variable' type) |
|  | NoUnitInpsected | Inputted NoUnitInspected |
|  | NoUnitNonconforming | Inputted NoUnitNonConforming |
|  | Comment_ | Inputted Comment |
|  | OverrideSumResults | 'true' |
| DISPOSITION_TEST_SAMPLE | Confroming | Calculated Conforming flag (if not calculated then not updated) |
|  | MeanValue | Inputted MeanValue (when characteristic if of 'Variable' type) |
|  | StandardDeviation | Inputted StandardDeviation (when characteristic if of 'Variable' type) |
|  | NoUnitAboveLimit | Inputted NoUnitAboveLimit (when characteristic if of 'Variable' type) |
|  | NoUnitBelowLimit | Inputted NoUnitBelowLimit (when characteristic if of 'Variable' type) |
|  | NoUnitInpsected | Inputted NoUnitInspected |
|  | NoUnitNonconforming | Inputted NoUnitNonConforming |
|  | Comment_ | Inputted Comment |
|  | OverrideSumResults | 'true' |
| [All tables populated by ChangeDispositionTestStatus method] |  |  |
| [All tables populated by RecordTestResult method] |  |  |
| [All tables populated by ChangeDispositionTestStatus method] |  |  |
