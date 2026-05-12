# EvaluateDispositionTest_v96

**Category:** Apriso/Quality/Inspection
**Class:** `FlexNet.BusinessFacade.Quality.DispositionTestStatusManager`
**Assembly:** `FlexNet.BusinessFacade.Quality2.dll`
**Status:** Active

## Description

The Business Component method is used to complete Disposition Test and perform the final evaluation of this test. Evaluation means calculating the Accept/Reject status of the test calculated automatically based on the Sample Plan or manual decision.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | Comment | Char | No | Free-text (no translation) description of the change. |
| Input | Conforming | Integer | Yes | Indicates if disposition test is conforming to the specification (0 - non-conforming, 1 - conforming, different than 0 or 1 then treated as not specified). |
| Input | DispositionTestID | Integer | Yes | Unique identifier of the Disposition Test that is to have its status changed. |
| Input | DispositionTestSampleID | Integer | No | Unique identifier of the Disposition Test Sample that is to have its status changed if required. |
| Input | Force | Boolean | Yes | If set to "True", causes the status to be changed for all child entities (Samples) without performing additional validation (Propagate flag for Change Disposition Test Status is set to "True"). |
| Input | EmployeeID | Integer | No | Identifier of the Employee evaluating the Disposition Test/Disposition Test Sample. |

## Validations

- DispositionTestID exists in DISPOSITION_TEST table, 
- DispositionTestSampleID exists in DISPOSITION_TEST_SAMPLE table, 
- EmployeeID must exist in EMPLOYEE table.

## System Processing

- If the status of the Disposition Test or Sample is not 'Completed' then system invokes the logic of BC method CompleteDispositionTest_v94 passing the following arguments: 
 
- DispositionTestID - inputted DispositionTestID, 
- DispositionTestSampleID - inputted DispositionTestSampleID, 
- Force - inputted Force, 
- Comment - inputted Comment, 
- Conforming - 1 if the inputted Conforming is true and 0 if false, 
- EmploeeID - inputted EmployeeID,  
 
- If Force flag is set to True then updates Disposition Test or Disposition Test Sample record with the inputted Conforming (DISPOSITION_TEST.ConformingToSpecification, or DISPOSITION_TEST_SAMPLE.Conforming), 
- If Force flag is set to False then: 
 
- Calculates Conforming value of the disposition test or disposition test sample based on the TestValue or TestAttribute of the disposition test or Value or Attribute of the disposition test sample, 
- If Conforming value is calculated then updates Disposition Test or Disposition Test Sample with that value,  
 
- System updates disposition test or disposition test sample with the inputted Comment, 
- System invokes the logic of the BC method ChangeDispositionTestStatus passing the following parameters: 
 
- DispositionTestID - inputted DispositionTestID, 
- DispositionTestSampleID - inputted DispositionTestSampleID, 
- EmployeeID - inputted EmployeeID, 
- Comment - inputted Comment, 
- DispositionTestStatus - 'Evaluated' (DISPOSITION_TEST_STATUS).

## History Recording in Production

FlexNet.BusinessFacade.Quality.DispositionTestStatusManager.EvaluateDispositionTest.xsd

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| DISPOSITION_TEST | ConformingToSpecification | Inputted Conforming if Force is true; otherwise the calculated one (in both cases this happens only if DispositionTestSampleID is not specified) |
|  | Comment | Inputted Comment |
| DISPOSITION_TEST_SAMPLE | Conforming | Inputted Conforming if Force is true; otherwise the calculated one (in both cases this happens only if DispositionTestSampleID is specified) |
|  | Comment | Inputted Comment |
| All tables populated by the CompleteDispositionTest_v94 method. |  |  |
| All tables populated by the ChangeDispositionTestStatus method. |  |  |
