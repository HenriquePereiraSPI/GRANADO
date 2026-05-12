# CalculateDispositionTestResult

**Category:** Apriso/Quality/Inspection
**Class:** `FlexNet.BusinessFacade.Quality.DispositionTestManager`
**Assembly:** `FlexNet.BusinessFacade.Quality2`
**Status:** Active

## Description

This Business Component method is used to calculate the key values representing the results of the Disposition Test or Disposition Test Sample and determine their conformity to the control parameters.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | DispositionTestID | Integer | Yes | The ID of the Disposition Test for which the test result is to be calculated. |
| Input | DispositionTestSampleID | Integer | No | The ID of the Disposition Test Sample belonging to the test for which the test result is to be calculated. |

## Validations

- DispositionTestID must exist in the DISPOSITION_TEST table. 
- DispositionTestSampleID must exist in the DISPOSITION_TEST_SAMPLE table and match DispositionTestID.

## System Processing

- The system validates that the Disposition Test status is Released or Started (DISPOSITON_TEST_STATUS). 
- If DispositionTestSampleID is specified (and is greater than 0), then the method validates that the Disposition Test Sample status (DISPOSITION_TEST_SAMPLE.DispositionTestStatus) is Released or Started (DISPOSITION_TEST_STATUS). 
- The system starts the Disposition Test or Disposition Test Sample (if DispositionTestSampleID is provided) if they have not been started yet (by calling the StartDispositionTest BC). 
- The system determines OverrideSumResults (if DispspositionTestSample is specified, then DISPOSITION_TEST_SAMPLE.OverrideSumResults; otherwise, DISPOSITION_TEST.OverrideSumResults). 
- If the Characteristic being tested is calculated (CHARACTERISTIC_REVISION.Calculated = 'true'), then the following applies: 
 
- The system calculates based on the defined formula (CHARACTERISTIC_REVISION.DFCRevisionFUID): 
 
- Value, MeanValue, StandardDeviation, NoUnitInspected, NoUnitNonconforming, NoUnitAboveLimit, and NoUnitBelowLimit are populated when the Characteristic is of the Variable type. In this case, the formula has to comply with the following rules: 
 
- The value must be populated. 
- If any of the NoUnitInspected, NoUnitNonconforming, NoUnitAboveLimit, or NoUnitBelowLimit parameters are populated, then all of these parameters must be populated (no partial calculation is allowed). 
- NoUnitNonconforming cannot by greater than NoUnitInspected. 
- NoUnitNonconforming must be equal to NoUnitAboveLimit + NoUnitBelowLimit. 
 
- Attribute, NoUnitInspected, and NoUnitNonconforming are populated when the Characteristic is of the Attribute type. In this case, the formula has to comply with the following rules: 
 
- The Attribute must be populated and exist in the DISPOSITON_TEST_ATTRIBUTE table. 
- NoUnitInspected and NoUnitNonconforming must both either be populated or not populated (no partial calculation is allowed). 
- If NoUnitNonconforming is populated, then it cannot be greater than NoUnitInspected. 
 
 
- The system records the calculated values in DISPOSITION_TEST or DISPOSITION_TEST_SAMPLE (if DispositionTestSampleID is specified). For Characteristics of the Variable type and of the Detailed recording type, MeanValue (if not calculated) is defaulted from Value, and if calculated, then Value = MeanValue (it is overridden). 
 
- If Value has not been calculated by a DFC, OverrideSumResults is set to False, and the Characteristic being tested is of the Variable type, then the system calculates all the factors and updates the Disposition Test or Disposition Test Sample (if DispositionTestSampleID passed): 
 
- Mean value: 
 
- n – the number of active Disposition Reading records 
- R – the value of the Disposition Reading converted to the unit of measure of the Disposition Test 
 
- Standard deviation:  
 
- n – the number of active Disposition Reading records 
- R – the value of the Disposition Reading converted to the unit of measure of the Disposition Test 
- μ – the mean value 
 
- Value – the mean value. 
- NoUnitInspected – the number of active Disposition Reading records. 
- NoUnitAboveLimit – the number of active Disposition Reading for which the value is above the USL. 
- NoUnitBelowLimit – the number of active Disposition Reading for which the value is below the LSL. 
- NoUnitNonconforming – NoUnitAboveLimit + NoUnitBelowLimit. 
 
- If OverrideSumResults is set to False and the Characteristic being tested is of the Attribute type, then the method calculates all the factors: 
 
- NoUnitInspected – the number of active Disposition Reading records or the sum of all the NoUnit of all the Disposition records (when the recording type is Classed [value of 2]). 
- NoUnitNonconforming – the number of active Disposition Reading records for which the attributive value is non-conforming or the sum of all nonconforming NoUnit (when the recording type is Classed [value of 2]). 
 
- The system calculates the Conforming value of the Disposition Test or Disposition Test Sample using the CalculateDispositionTestConformity BC. 
- If the Conforming value is calculated, then the method updates Disposition Test or Disposition Test Sample with that value.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| DISPOSITION_TEST | MeanValue | Calculated based on the active Disposition reading records |
|  | TestValue | The mean value. |
|  | TestStdDeviation | Calculated based on the active Disposition reading records. |
|  | NoUnitInspected | Calculated based on the active Disposition reading records |
|  | NoUnitNonconforming | Calculated based on the active Disposition reading records. |
|  | NoUnitAboveLimit | Calculated based on the active Disposition reading records. |
|  | NoUnitBelowLimit | Calculated based on the active Disposition reading records. |
|  | ConformingToSpecification | The calculated Conforming flag (if not calculated, then it is not updated). |
| DISPOSITION_TEST_SAMPLE | MeanValue | Calculated based on the active Disposition reading records. |
|  | Value | The mean value. |
|  | StandardDeviation | Calculated based on the active Disposition reading records. |
|  | NoUnitInspected | Calculated based on the active Disposition reading records. |
|  | NoUnitNonconforming | Calculated based on the active Disposition reading records. |
|  | NoUnitAboveLimit | Calculated based on the active Disposition reading records. |
|  | NoUnitBelowLimit | Calculated based on the active Disposition reading records. |
|  | Conforming | The calculated Conforming flag (if not calculated then not updated). |
| [All tables populated by RecordTestResult method. Invoked when the Characteristic is calculated through call to the DFC defined at the Characteristic revision level.] |  |  |
| [All tables populated by StartDispositionTest method. Invoked when the Disposition Test or Disposition Test Sample has not started yet.] |  |  |
