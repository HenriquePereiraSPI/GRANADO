# UpdateDispositionTest

**Category:** Apriso/Quality/Inspection
**Class:** `FlexNet.BusinessFacade.Quality.DispositionTestManager`
**Assembly:** `FlexNet.BusinessFacade.Quality2`
**Status:** Deprecated

## Description

The method is used to update the specification of the particular test against the specified characteristic and linked to the Disposition. All the validation and processing is the same as for the BC method: Create Disposition Test.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | Additive | Boolean | Yes | Applicable when partial samples are used (DISPOSITION_TEST_SAMPLE) indicating that total size of partial sample calculated based on the sample plan is increased by SampleSize of the test. |
| Input | Certificate | Boolean | No | Indicates that the characteristic will be used in the Certificate of Analysis. |
| Input | Comment | Char | No | Text description of the test to be performed. |
| Input | DefectCode | Char | No | Default defect code when the value of the characteristic is outside of specification limits (applicable only for characteristics of type: Variable). |
| Input | Destructive | Boolean | No | If set to 'true', the sample quantity used for the test will be destroyed. |
| Input | DispositionTestID | Integer | Yes | Reference to the Disposition Test. |
| Input | LCL | Decimal | No | Lower Control Limit. NULL = Decimal.MinValue. |
| Input | LSL | Decimal | No | Lower Specification Limit. NULL = Decimal.MinValue. |
| Input | LSLDefectCode | Char | No | Default defect code when the value of the characteristic is above the Lower Specification Limit (applicable only for characteristics of type: Variable) |
| Input | NoOfReadings | Integer | No | Number of readings of the value for the characteristic. Applies only for test that are executed by reading multiple values (DISPOSITION_READING). |
| Input | NoOfSamples | Integer | No | Total number of partial samples to be taken for the test. Treated as specified if greater than 0. |
| Input | OverrideSumResults | Boolean | No | If set to 'true', the summarized results will be populated manually instead of the automatic calculation based on multiple readings (DISPOSITION_READING). |
| Input | ReadingValidation | Integer | No | Indicates whether the number of readings for the characteristic (DISPOSITION_READING): 1 - Is not verified, 2 - Must Equal to NoOfReadings, 3 - Can be smaller then NoOfReadings, 4 - Can be larger then NoOfReadings. |
| Input | RecordDefect | Boolean | No | Flag indicating if quality defects are created automatically depending on the test result. |
| Input | Required | Boolean | No | Flag indicating if the given test is required or optional. |
| Input | SamplePlanID | Integer | No | Identifier of the Sample Plan (SAMPLE_PLAN) used for the test. |
| Input | SampleQuantity | Decimal | No | Quantity of product that represents a single sample unit. Treated as specified if SampleUomCode is provided. |
| Input | SampleSize | Integer | No | Number of units to be inspected. Sample Size is provided manually or calculated automatically based on the Sampling Procedure. Treated as specified if greater than zero. |
| Input | SampleUomCode | Char | No | Unit of measure for quantity per sample. |
| Input | ScheduledFinishDate | DateTime | No | Scheduled Finish Date and Time of the quality inspection test. NULL = 00:00:00.0000000, January 1, 0001 to indicate. |
| Input | ScheduledStartDate | DateTime | No | Scheduled Start Date and Time of the quality inspection test. NULL = 00:00:00.0000000, January 1, 0001. |
| Input | SeverityID | Integer | No | Severity of the disposition test. The valid severity types are: 1 - Normal, 2 - Minor, 3 - Major, 4 - Critical. |
| Input | SPCCharacteristic | Boolean | No | Flag indicating that the characteristic will be used to calculate, display the control or run charts. |
| Input | UCL | Decimal | No | Upper Control Limit. NULL = Decimal.MinValue. |
| Input | USL | Decimal | No | Upper Specification Limit. NULL = Decimal.MinValue. |
| Input | USLDefectCode | Char | No | Default defect code when the value of the characteristic is above the Upper Specification Limit (applicable only for characteristics of type: Variable). |

## Validations

- DispositionTestID must exist in DISPOSITION_TEST table. 
- SeverityID and DispositionTestID exist in DISPOSITION_SEVERITY table. 
- SamplePlanID must exist in SAMPLE_PLAN table. 
- SampleUomCode must exist in UOM table. 
- USLDefectCode must exist in REASON_CODE table. 
- LSLDefectCode must exist in REASON_CODE table. 
- DefectCode must exist in REASON_CODE table.

## System Processing

- Validates that disposition test status (DISPOSITION_TEST.Status) is 'New', 'Released' or 'Started' (DISPOSITION_TEST_STATUS). 
- Validates that disposition test status is 'New' when the following parameters are being changed: USL, UCL, TargetValue, LCL, LSL, Required, ReadingValidation, NoOfReadings, SPCCharacteristic, Destructive, Additive, SampleSize, SamplePlanID, SampleQuantity, SampleUomCode, RecordDefect, USLDefectCode, LSLDefectCode, DefectCode.  
- If RecordingType is 'Classed', 'Single', 'Summarized' then validates that ReadingValidation is 'Not verified' 
- If ScheduledStartDate and ScheduledFinishDate are specified (different than 00:00:00.0000000, January 1, 0001) then validates that ScheduledStartDate is not greater than ScheduledFinishDate). 
- If characteristic linked to the disposition test is of 'Variable' type then: 
- USL <= UCL <= TargetValue <= LCL <= LSL (value of Decimal.MinValue treated as the parameter is not specified) 
- If USLDefectCode is specified then validates that the reason code type is 'DefectCode' (REASON_TYPE - value of 25) 
- If LSLDefectCode is specified then does the same validation as for USLDefectCode 
- If DefectCode is specified then does the same validation as for USLDefectCode 
- Test record passing all input parameters - if a parameter is not specified then the corresponding value in the DB is set to NULL.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| DISPOSITION_TEST | ScheduledStartDate | Inputted ScheduledStartDate or Null if '00:00:00.0000000, January 1, 0001' |
|  | ScheduledEndDate | Inputted ScheduledEndDate of Null if '00:00:00.0000000, January 1, 0001' |
|  | Comment | Inputted Comment or Null if not specified. |
|  | UpperSpecificationLimit | Inputted USL or Null if Decimal.MinValue |
|  | LowerSpecificationLimit | Inputted LSL or Null if Decimal.MinValue |
|  | UpperControlLimit | Inputted UCL or Null if Decimal.MinValue. |
|  | LowerControlLimit | Inputted LCL or Null if Decimal.MinValue. |
|  | TargetValue | Inputted TargetValue or Null if Decimal.MinValue |
|  | SeverityID | Inputted SeverityID or Null if less or equal 0 |
|  | Required | Inputted Required |
|  | ReadingValidation | Inputted ReadingValidation |
|  | NoOfReadings | Inputted NoOfReadings |
|  | OverrideSumResults | Inputted OverrideSumResults |
|  | SPCCharacteristic | Inputted SpcCharacteristic |
|  | Destructive | Inputted Destructive |
|  | Additive | Inputted Additive |
|  | SamplePlanID | Inputted SamplePlanID or Null if less or equal 0 |
|  | NoOfSamples | Inputted NoOfSamples or Null if less or equal 0 |
|  | SampleQuantity | Inputted SampleQuantity or Null if SampleUomCode not specified |
|  | SampleUomCode | Inputted SampleUomCode or Null if not specified |
|  | SampleSize | Inputted SampleSize or Null if less or equal 0 |
|  | Certificate | Inputted Certificate |
|  | RecordDefect | Inputted RecordDefect |
|  | USLDefectReasonCode | Inputed USLDefectCode or Null if not specified |
|  | LSLDefectReasonCode | Inputted LSLDefectCode or Null if not specified |
|  | ResultsOnSamples | Inputted RecordResultsOnSamples |
|  | DefectCode | Inputted DefectCode or Null if not specified |
|  | ResultsOnSamples | Inputted RecordResultsOnSamples |
