# UpdateDispositionTest_v942

**Category:** Apriso/Quality/Inspection
**Class:** `FlexNet.BusinessFacade.Quality.DispositionTestManager`
**Assembly:** `FlexNet.BusinessFacade.Quality2`
**Status:** Active

## Description

This Business Component method is used to update the specification of the particular test against the specified Characteristic linked to the Disposition. All the validation and processing is the same as for the Create Disposition Test BC method.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | Additive | Boolean | No | This is applicable when partial samples are used (DISPOSITION_TEST_SAMPLE) indicating that the total size of the partial sample calculated based on the sample plan is increased by SampleSize of the test. |
| Input | Certificate | Boolean | No | Indicates that the Characteristic will be used in the certificate of analysis. |
| Input | Comment | Char | No | The text description of the test to be performed. |
| Input | DefectCode | Char | No | The default defect code when the value of the Characteristic is outside of specification limits (applicable only to Characteristics of the Variable type). |
| Input | Destructive | Boolean | No | If set to True, the sample quantity used for the test will be destroyed. |
| Input | DispositionTestID | Integer | Yes | The reference to the Disposition Test. |
| Input | LHL | Decimal | No | The lower coherence limit. NULL = Decimal.MinValue. |
| Input | LCL | Decimal | No | The lower control limit. NULL = Decimal.MinValue. |
| Input | LSL | Decimal | No | The lower specification limit. NULL = Decimal.MinValue. |
| Input | LSLDefectCode | Char | No | The default defect code when the value of the Characteristic is above the lower specification limit (applicable only to Characteristics of the Variable type). |
| Input | NoOfReadings | Integer | No | The number of readings of the value for the Characteristic. Applies only to tests that are executed by reading multiple values (DISPOSITION_READING). |
| Input | NoOfSamples | Integer | No | The total number of partial samples to be taken for the test. Treated as specified if greater than 0. |
| Input | OverrideSumResults | Boolean | No | If set to True, the summarized results will be populated manually instead of the automatic calculation based on multiple readings (DISPOSITION_READING). |
| Input | ReadingValidation | Integer | No | Indicates whether the number of readings for the Characteristic (DISPOSITION_READING) is one of the following: 1 - Is not verified, 2 - Must equal NoOfReadings, 3 - Can be smaller than NoOfReadings, 4 - Can be larger than NoOfReadings. |
| Input | RecordDefect | Boolean | No | This flag indicates if the Quality Defects are created automatically depending on the test result. |
| Input | RecordResultsOnSamples | Boolean | Yes | This flag indicates if the result recording occurs on the Disposition Test sample level. |
| Input | Required | Boolean | No | This flag indicates if the given test is required or optional. |
| Input | SamplePlanID | Integer | No | The identifier of the sample plan (SAMPLE_PLAN) used for the test. |
| Input | SampleQuantity | Decimal | No | The quantity of the product that represents a single sample unit. Treated as specified if SampleUomCode is provided. |
| Input | SampleSize | Integer | No | The number of units to be inspected. The sample size is provided manually or calculated automatically based on the sampling procedure. Treated as specified if greater than zero. |
| Input | SampleUomCode | Char | No | The unit of measure for the quantity per sample. |
| Input | ScheduledFinish | DateTime | No | The scheduled finish date and time of the the Quality Inspection test. NULL = 00:00:00.0000000, January 1, 0001. |
| Input | ScheduledStart | DateTime | No | The scheduled start date and time of the quality inspection test. NULL = 00:00:00.0000000, January 1, 0001. |
| Input | SeverityID | Integer | No | The severity of the Disposition Test. The valid severity types are: 1 - Normal, 2 - Minor, 3 - Major, 4 - Critical. |
| Input | SPCCharacteristic | Boolean | No | This flag indicates that the Characteristic will be used to calculate, display the control, or run charts. |
| Input | UCL | Decimal | No | The upper control limit. NULL = Decimal.MinValue. |
| Input | UHL | Decimal | No | The upper coherence limit. NULL = Decimal.MinValue. |
| Input | USL | Decimal | No | The upper specification limit. NULL = Decimal.MinValue. |
| Input | UHLDefectCode | Char | No | The default defect code when the value of the Characteristic is above the upper coherence limit (applicable only to Characteristics of the Variable type). |
| Input | USLDefectCode | Char | No | The default defect code when the value of the Characteristic is above the upper specification limit (applicable only to Characteristics of the Variable type). |
| Input | ResourceType | Short | No | The type of Resource that can be assigned to the Disposition Test. |
| Input | ResourceClassID | Integer | No | The Resource class that can be assigned to the Disposition Test. |
| Input | CalculateConformity | Boolean | Yes | Indicates that the conformity of the Characteristic is calculated by the DFC specified as ConformityOperationID or ConformityDFCRevisionFUID. |
| Input | ConformityOperationID | Integer | No | The DFC executed to calculate if the test is conforming. |

## Description Parameters

| Name | Type | Description |
|------|------|-------------|
| ExecutionOprSequenceNo | Char | The Operation Sequence number of the execution Operation Step . |
| ExecutionOprStepSequenceNo | Integer | Thwe Sequence number of the execution Operation Step. |
| ExecutionOrderNo | Char | The order number of the execution Operation Step. |
| ExecutionOrderType | Short | The order type of the execution Operation Step. |
| ConformityDFCRevisionFUID | Char | The DFC executed to calculate if the test is conforming. If provided it has higher precedence than ConformityOperationID |

## Validations

- DispositionTestID must exist in the DISPOSITION_TEST table. 
- SeverityID and DispositionTestID must exist in the DISPOSITION_SEVERITY table. 
- SamplePlanID must exist in the SAMPLE_PLAN table. 
- SampleUomCode must exist in the UOM table. 
- USLDefectCode must exist in the REASON_CODE table. 
- LSLDefectCode must exist in the REASON_CODE table. 
- DefectCode must exist in the REASON_CODE table. 
- ResourceType must exist in the RESOURCE_TYPE table. 
- ResourceClassID must exist in the RESOURCE_CLASS table. 
- The system validates that the Dynamic Inputs (ExecutionOprSequenceNo, ExecutionOprSequenceNo, ExecutionOrderNo and ExecutionOrderType) are provided together or that none of them are provided. 
 
- If Dynamic Inputs are provided, the system validates that the WIP Operation Step exists in the WIP_OPERATION_STEP table for the ExecutionOprSequenceNo, ExecutionOprSequenceNo, ExecutionOrderNo, and ExecutionOrderType values.

## System Processing

- The system validates that the Disposition Test status (DISPOSITION_TEST.Status) is New, Released, or Started (DISPOSITION_TEST_STATUS). 
- The system validates that the Disposition Test status is New when the following parameters are being changed: UHL, USL, UCL, TargetValue, LCL, LSL, LHL, Required, ReadingValidation, NoOfReadings, SPCCharacteristic, Destructive, Additive, SampleSize, SamplePlanID, SampleQuantity, SampleUomCode, RecordDefect, USLDefectCode, LSLDefectCode, UHLDefectCode, LHLDefectCode, and DefectCode. 
- If RecordingType is Classed, Single, or Summarized, the system validates that ReadingValidation is "Not verified." 
- If ScheduledStart and ScheduledFinish are specified (and are something other than 00:00:00.0000000, January 1, 0001), the system validates that ScheduledStart is not greater than ScheduledFinish. 
- If the Characteristic linked to the Disposition Test is of the Variable type, then UHL <= USL <= UCL <= TargetValue <= LCL <= LSL <= LHL (the value of Decimal.MinValue treated as the parameter is not specified). 
- If USLDefectCode is specified, the system validates that the Reason Code type is DefectCode (REASON_TYPE - value of 25). 
 
- If LSLDefectCode is specified, the system does the same validation as for USLDefectCode (above). 
- If DefectCode is specified, the system does the same validation as for USLDefectCode (above). 
- If UHLDefectCode is specified, the system does the same validation as for USLDefectCode (above). 
- If LHLDefectCode is specified, the system does the same validation as for USLDefectCode (above). 
 
- If ResourceType and/or ResourceClassID is specified, then the system validates that the Resources already assigned to the Disposition Test and all of its Disposition Test samples are of that type and class. 
- The system updates the Disposition Test record, passing all the Input parameters, and if a parameter is not specified, then the corresponding value in the database is set to NULL.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| DISPOSITION_TEST | ScheduledStartDate | The inputted ScheduledStartDate, or Null if "00:00:00.0000000, January 1, 0001." |
|  | ScheduledEndDate | The inputted ScheduledEndDate, or Null if "00:00:00.0000000, January 1, 0001." |
|  | Comment | The inputted Comment, or Null if not specified. |
|  | UpperCoherenceLimit | The inputted UHL, or Null if Decimal.MinValue. |
|  | LowerCoherenceLimit | The inputted LHL, or Null if Decimal.MinValue. |
|  | UpperSpecificationLimit | The inputted USL, or Null if Decimal.MinValue. |
|  | LowerSpecificationLimit | The inputted LSL, or Null if Decimal.MinValue. |
|  | UpperControlLimit | The inputted UCL, or Null if Decimal.MinValue. |
|  | LowerControlLimit | The inputted LCL, or Null if Decimal.MinValue. |
|  | TargetValue | The inputted TargetValue, or Null if Decimal.MinValue. |
|  | SeverityID | The inputted SeverityID, or Null if less than or equal to 0. |
|  | Required | The inputted Required. |
|  | ReadingValidation | The inputted ReadingValidation. |
|  | NoOfReadings | The inputted NoOfReadings. |
|  | OverrideSumResults | The inputted OverrideSumResults. |
|  | SPCCharacteristic | The inputted SpcCharacteristic. |
|  | Destructive | The inputted Destructive. |
|  | Additive | The inputted Additive. |
|  | SamplePlanID | The inputted SamplePlanID, or Null if less than or equal to 0. |
|  | NoOfSamples | The inputted NoOfSamples, or Null if less than or equal to 0. |
|  | SampleQuantity | The inputted SampleQuantity, or Null if SampleUomCode is not specified. |
|  | SampleUomCode | The inputted SampleUomCode, or Null if not specified. |
|  | SampleSize | The inputted SampleSize, or Null if less than or equal to 0. |
|  | Certificate | The inputted Certificate. |
|  | RecordDefect | The inputted RecordDefect. |
|  | USLDefectReasonCode | The inputted USLDefectCode, or Null if not specified. |
|  | LSLDefectReasonCode | The inputted LSLDefectCode, or Null if not specified. |
|  | LHLDefectReasonCode | The inputted LHLDefectCode, or null if not specified. |
|  | UHLDefectReasonCode | The inputted UHLDefectCode, or null if not specified. |
|  | ResultsOnSamples | The inputted RecordResultsOnSamples. |
|  | DefectCode | The inputted DefectCode, or Null if not specified. |
|  | ResourceType | The inputted ResourceType, or Null if less than or equal to 0. |
|  | ResourceClassID | The inputted ResourceClassID, or Null if less than or equal to 0. |
|  | ResultsOnSamples | The inputted RecordResultsOnSamples. |
|  | ExecutionOprSequenceNo | The inputted ExecutionOprSequenceNo. |
|  | ExecutionOprStepSequenceNo | The inputted ExecutionOprStepSequenceNo. |
|  | ExecutionOrderNo | The inputted ExecutionOrderNo. |
|  | ExecutionOrderType | The inputted ExecutionOrderType. |
