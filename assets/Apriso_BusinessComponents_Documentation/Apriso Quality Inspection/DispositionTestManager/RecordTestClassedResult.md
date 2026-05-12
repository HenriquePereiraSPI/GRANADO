# RecordTestClassedResult

**Category:** Apriso/Quality/Inspection
**Class:** `FlexNet.BusinessFacade.Quality.DispositionTestManager`
**Assembly:** `FlexNet.BusinessFacade.Quality2`
**Status:** Active

## Description

The method is used to record test results in the classed form which represents the number of units per given attribute (e.g. 2 units of Red, 3 units of Blue, etc.).

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | Attributes | ListofChar | No | List of attributive characteristics defined in Disposition Test. |
| Input | Comments | ListofChar | No | List of text descriptions of the Disposition Test performed. |
| Input | DispositionTestID | Integer | Yes | Identifier of a Disposition Test for which the Test result is to be recorded. |
| Input | DispositionTestSampleID | Integer | No | Identifier of a Disposition Test Sample belonging to a Test for which the Test result is to be recorded. |
| Input | InspectorID | Integer | No | Identifier of an employee performing the test. |
| Input | NoUnits | ListofInteger | No | Number of units tested within the single reading. |

## Validations

- DispositionTestID must exist in DISPOSITION_TEST table. 
- DispositionTestSampleID must exist in DISPOSITION_TEST_SAMPLE table. 
- InspectorID must exist in EMPLOYEE table. 
- Each attribute (inputted in Attributes parameter) and DispositionTestID must exist in DISPOSITION_TEST_ATTRIBUTE table.

## System Processing

- Validates that the Disposition Test Status (DISPOSITION_TEST.Status) is 'Released' or 'Started' (DISPOSITION_TEST_STATUS). 
- Validates that Disposition Test Characteristic is of 'Attribute' type. 
- Validates that inputted arrays of attributes (Attributes) and number of units (NoUnits) are not empty (at least one element has to exist in each of the arrays) and that they have the same dimensions. 
- If DispositionTestSampleID is specified then: 
 
- Validates that it matches the inputted DispositionTestID, 
- Validates that Disposition Test Sample Status (DISPOSITION_TEST_SAMPLE.DispositionTestStatus) is 'Released' or 'Started' (DISPOSITION_TEST_STATUS). 
 
- Validates that recording type of the Disposition Test (DISPOSITION_TEST.RecordingType) is 'Classed' or 'Custom' (value of 2 and 4). 
- If the status of Disposition Test or Disposition Test Sample is 'Released' then invokes the method Change Disposition Test Status passing the following arguments: 
 
- DispositionTestID - inputted DispositionTestID, 
- DispositionTestSampleID - inputted DispositionTestSampleID, 
- DispositionTestStatus - 'Started' (DISPOSITION_TEST_STATUS), 
- Propagate - 'false', 
- EmployeeID - inputted InspectorID, 
- Comment - not specified 
 
- For each Disposition Test attribute (given by the inputted DispositiontTestID and the array of attributes) executes the following logic: 
 
- Check if the Disposition Reading with the same attribute (DISPOSITION_READING.CollectedAttribute) already exists for the inputted DispostionTestID or DispositionTestSampleID (if specified): 
 
- If the record exists then updates the disposition reading record by calling Update Reading BC with the following parameters: 
 
- NoUnit 
- InspectorID 
- Comment (might not be specified) 
 
- If the record does not exist then invokes the logic of BC method: Record Reading with the following parameters: 
 
- NoUnit 
- InspectorID 
- Comment (might not be specified) 
 
 
 
- Calculates Conforming value of the disposition test or disposition test sample based on the TestValue or TestAttribute of the Disposition Test or Value or Attribute of the Disposition Test Sample. 
- If Conforming value is calculated then updates Disposition Test or Disposition Test Sample with that value.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| DISPOSITION_TEST | ConformingToSpecification | Calculated Conforming flag (if not calculated then not updated) |
| DISPOSITION_TEST_SAMPLE | Confroming | Calculated Conforming flag (if not calculated then not updated) |
| DISPOSITION_READING | Comment | Inputted Comment (taken from Comments) |
|  | InspectorID | Inputted InspectorID |
|  | NoUnit | Imputted NoUnits |
