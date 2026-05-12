# CompleteDispositionTest_v94

**Category:** Apriso/Quality/Inspection
**Class:** `FlexNet.BusinessFacade.Quality.DispositionTestStatusManager`
**Assembly:** `FlexNet.BusinessFacade.Quality2.dll`
**Status:** Deprecated

## Description

This Business Component method is used to validate the completeness of the Disposition Test and to mark the test as Completed.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | Comment | Char | No | The free-text (no translation) description of the change. |
| Input | Conforming | Integer | Yes | Indicates if the Disposition Test conforms to the specification (0 - non-conforming, 1 - conforming; numbers other than 0 and 1 treated as not specified). |
| Input | DispositionTestID | Integer | Yes | The unique identifier of the Disposition Test that is to have its status changed. |
| Input | DispositionTestSampleID | Integer | No | The unique identifier of the Disposition Test Sample that is to have its status changed if required. |
| Input | Force | Boolean | Yes | If set to True, causes the status to be changed for all child entities (Samples) without performing additional validation (Propagate flag for Change Disposition Test Status is set to True). |
| Input | EmployeeID | Integer | No | The identifier of the employee completing the Disposition Test/Disposition Test Sample. |

## Validations

- DispositionTestID must exist in the DISPOSITION_TEST table.  
- DispositionTestSampleID must exist in the DISPOSITION_TEST_SAMPLE table. 
- EmployeeID must exist in the EMPLOYEE table.

## System Processing

- The system executes the logic of the CalculateDispositionTestResult BC and passes the following parameters: 
 
- DispositionTestID – the inputted DispositionTestID 
- DispositionTestSampleID – the inputted DispositionTestSampleID 
 
- If the Force flag is set to True, the system invokes the logic of the ChangeDispositionTestStatus BC and passes the following parameters: 
 
- DispositionTestID – the inputted DispositionTestID 
- DispositionTestSampleID – the inputted DispositionTestSampleID 
- DispositionTestStatus – Completed (DISPOSITION_TEST_STATUS) 
- Propagate – True 
- EmployeeID – the inputted EmployeeID 
- Comment – the inputted Comment 
 
- If the Force flag is set to False, the system does the following: 
 
- If the reading validation (DISPOSITION_TEST.ReadingValidation) is not Not Verified (value of 1) and NoOfReadings for the Disposition Test (DISPOSITION_TEST.NoOfReadings) is greater than 0, the system validates the number of active Disposition Reading records linked to the DispositionTestID or DispositionTestSampleID (when specified) in the following way: 
 
- If Reading Validation = Must Equal (value of 2), the system checks if NoOfReading = the number of active Disposition Reading records. 
- If Reading Validation = Can be smaller (value of 3), the system checks if NoOfReadings >= number of active Disposition Reading records. 
- If Reading Validation = Can be larger (value of 4), the system checks if NoOfReadings <= number of active Disposition Reading records. 
 
- The system validates that if the Required flag (DISPOSITION_TEST.Required) is set to True and DispositionTestSampleID is not passed, the test value (or Test Attribute in the case of an Attribute Characteristic) of the Disposition Test is recorded: 
 
- If Recording Type = Classed, the system checks if NoUnitInspected, NoUnitNonconforming, or NoUnit(DISPOSITION_TEST_ATTRIBUTE.NoUnit) are set. 
- If Recording Type <> Classed, the system checks if (NoUnitInspected and NoUnitNonconforming) or (Value and UomCode, for a Variable Characteristic) or (Attribute, for an Attribute Characteristic) are set. 
 
- The system validates that if the Required flag (DISPOSITION_TEST.Required) is set to True and DispostionTestSampleID is passed, the Value (or Attribute in the case of an Attribute Characteristic) of the Disposition Test Sample is recorded: 
 
- If Recording Type = Classed, the system checks if NoUnitInspected, NoUnitNonconforming, or NoUnit (DISPOSITION_TEST_ATTRIBUTE.NoUnit) are set. 
- If Recording Type <> Classed, the system checks if (NoUnitInspected and NoUnitNonconforming) or (Value and UomCode, for a Characteristic variable ) or (Attribute, for an Attribute Characteristic) are set. 
 
- If DispostionTestSampleID not passed, the system does the following: 
 
- The system validates that all the Disposition Samples linked to the inputted DispositionTestID are in the status Cancelled, Skipped, Completed, or Evaluated (DISPOSITION_TEST_STATUS). 
 
- Invokes the logic of the ChangeDispositionTestStatus BC and passes the following arguments: 
 
- DispositionTestID – inputted DispositionTestID 
- DispositionTestSampleID – inputted DispositionTestSampleID 
- DispositionTestStatus – Completed (DISPOSITION_TEST_STATUS) 
- EmployeeID – inputted EmployeeID 
- Propagate – False 
 
- If Conforming is specified (0 or 1) and DispositionTestSampleID is not specified, the system updates the Disposition Test conformity (DISPOSITION_TEST.ConformingToSpecification). 
- If RecordResultsOnSamples flag = True, then when completing the test or sample, the system checks if the sample is recorded excluding the records on the Disposition Test level. 
- If RecordResultsOnSamples flag = false, then when completing the test, the system checks if the test is recorded. 
 
 

 **Note**: the test or sample is recorded when the Value or Attribute or (NoUnitInspected and NoUnitNonconforming) or (NoUnitInspected and NoUnitAboveLimit) or (NoUnitInspected and NoUnitBelowLimit) = True.

## History Recording in Production

FlexNet.BusinessFacade.Quality.DispositionTestStatusManager.CompleteDispositionTest.xsd

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| DISPOSITION_TEST | ConformingToSpecification | True if inputted Conforming is 1, False if Conforming is 0; otherwise, not updated. |
| [All tables populated by |  |  |
| [All tables populated by |  |  |
