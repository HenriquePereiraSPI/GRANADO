# CreateDispositionTest_v942

**Category:** Apriso/Quality/Inspection
**Class:** `FlexNet.BusinessFacade.Quality.DispositionTestManager`
**Assembly:** `FlexNet.BusinessFacade.Quality2`
**Status:** Active

## Description

This Business Component method is used to create a specification of a particular test against the specified revision of a characteristic that is then linked to the Disposition. The BC enables populating all the major parameters of a test based on which the test results can be recorded. It also enables creating tests for both types of Characteristics (Variables and Attributes). 
 

With Characteristics of the Attribute type, using the CreateDispositionTestAttribute BC to store a discrete list of possible values for the given Characteristic is also required. For all types of tests, there are also optional complementary BCs that can be used: 
 
 
- CreateDispositionTestGroupCode – this BC is used to store the list of quality Reason Codes specific to the given test. 
- CreateDispositionResource – this BC is used to store the list of Resources required during the given test. 
 

The difference with CreateDispositonTest_v941 is that additional Inputs are provided and SamplePlanID is replaced with SamplingProcedureID.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | AcceptanceNo | Integer | No | The acceptance number. This is optional (a negative value means that the parameter has not been specified). |
| Input | Additive | Boolean | No | This is applicable when partial samples are used (DISPOSITION_TEST_SAMPLE), indicating that the total size of partial samples calculated based on the sample plan is increased by the SampleSize of the test. |
| Input | CalculateConformity | Boolean | Yes | Indicates that the conformity of the Characteristic is calculated by the DFC specified as ConformityOperationID or ConformityDFCRevisionFUID. |
| Input | Certificate | Boolean | No | Indicates that the Characteristic will be used in the Certificate of Analysis. |
| Input | CharacteristicDecimals | Integer | No | The Characteristic decimals. This is optional (a negative value means that the parameter has not been specified). |
| Input | CharacteristicRevision | Char | Yes | The revision of the Characteristic against which the test is executed (CHARACTERISTIC_REVISION). |
| Input | Comment | Char | No | The text description of the test to be performed. |
| Input | ConformityOperationID | Integer | No | The DFC executed to calculate if the test is conforming. |
| Input | CopyAttributes | Boolean | Yes | If set to true, all the Attributes from the product Characteristic or directly from the Characteristic are copied and linked to the Disposition Test being created. |
| Input | CopyGroupCodes | Boolean | Yes | If set to true, all the groups of Reason Codes and the Reason Codes from CHARACTERISTIC_REV_CODE_GROUP are copied to the DISPOSITION_TEST_GROUP_CODE table linked to the Disposition Test being created. |
| Input | DefectCode | Char | No | The default defect code when the value of the Characteristic is outside the specification limits (applicable only for Characteristics of the Variable type). |
| Input | Destructive | Boolean | No | If set to true, the sample quantity used for the test will be destroyed. |
| Input | Disposition | Char | Yes | The reference to the Quality Inspection Disposition to which the test belongs`. |
| Input | Facility | Char | Yes | The reference to the Facility Quality Inspection Disposition to which the test belongs. |
| Input | InspectionCharacteristic | Char | Yes | The Characteristic against which the test is executed (CHARACTERISTIC_REVISION). The Characteristic must be revision-controlled and must be of the Quality Inspection usage (CHARACTERISITC.Usage_=2). |
| Input | LCL | DateTime | No | The lower control limit. |
| Input | LHL | Decimal | No | The lower coherence limit. |
| Input | LineSequenceNo | Integer | Yes | The reference to the Disposition Line to which the test belongs. |
| Input | LSL | DateTime | No | The lower specification limit. |
| Input | LHLDefectCode | Char | No | The default defect code when the value of the Characteristic is above the lower coherence limit (applicable only for Characteristics of the Variable type). |
| Input | LSLDefectCode | Char | No | The default defect code when the value of the Characteristic is above the lower specification limit (applicable only for Characteristics of the Variable type). |
| Input | NoOfReadings | Integer | No | The number of readings of the value for the Characteristic. Applies only for tests that are executed by reading multiple values (DISPOSITION_READING). |
| Input | NoOfSamples | Integer | No | The total number of partial samples to be taken for the test. |
| Input | OverrideSumResults | Boolean | No | If set to true, the summarized results will be populated manually instead of the automatic calculation based on multiple readings (DISPOSITION_READING). |
| Input | ReadingValidation | Integer | No | Indicates the reading validation of the number of readings for the Characteristic (DISPOSITION_READING): 1 - Is not verified, 2 - Must equal NoOfReadings, 3 - Can be smaller then NoOfReadings, 4 - Can be larger than NoOfReadings. |
| Input | RecordDefect | Boolean | No | Indicates if the quality defects are created automatically depending on the test result. |
| Input | RecordingType | Integer | Yes | The type of result recording. Depending on this type, the test results are recorded in the different form (Detailed, Classed, Detailed, Summarized, or Custom). |
| Input | RecordResultsOnSamples | Boolean | Yes | Indicates if the recording of the results occurs on the Disposition Test sample level. |
| Input | RejectionNo | Integer | No | The rejection number. This is optional (a negative value means that the parameter has not been specified). |
| Input | Required | Boolean | No | Indicates if the given test is required or optional. |
| Input | Resources | ListofInteger | No | The identifier of the Resource (or Resources) linked to the given level of the Disposition hierarchy. |
| Input | SamplingProcedureID | Integer | No | The identifier of the sampling procedure. |
| Input | SampleQuantity | Decimal | No | The quantity of the product that represents a single sample unit. |
| Input | SampleSize | Integer | No | The number of units to be inspected. The sample size is provided manually or calculated automatically based on the sampling procedure. |
| Input | SampleUomCode | Char | No | The unit of measure for the quantity per sample. |
| Input | ScheduledFinish | DateTime | No | The scheduled finish date and time of the Quality Inspection test. NULL = 00:00:00.0000000, January 1, 0001. |
| Input | ScheduledStart | DateTime | No | The scheduled start date and time of the Quality Inspection test. NULL = 00:00:00.0000000, January 1, 0001. |
| Input | SequenceNo | Integer | No | The unique sequential number of the test within the one Disposition Line. |
| Input | SeverityID | Integer | No | The severity of the Disposition Test. The valid severity types are: 1 - Normal, 2 - Minor, 3 - Major, 4 - Critical. |
| Input | SPCCharacteristic | Boolean | No | The flag indicating that the Characteristic will be used to calculate, display the control, or run charts. |
| Input | TargetValue | Decimal | No | The target value. |
| Input | TestMethod | Char | No | The test method. |
| Input | UCL | Decimal | No | The upper control limit. |
| Input | UHL | Decimal | No | The default defect code when the value of the Characteristic is above the upper specification limit (applicable only for Characteristics of the Variable type). |
| Input | USL | Decimal | No | The upper specification limit. |
| Input | UHLDefectCode | Char | No | The default defect code when the value of the Characteristic is above the upper specification limit (applicable only for Characteristics of the Variable type). |
| Input | USLDefectCode | Char | No | The default defect code when the value of the Characteristic is above the upper specification limit (applicable only for Characteristics of the Variable type). |
| Input | ResourceType | Short | No | The type of Resource that is allowed to be assigned to the Disposition Test. |
| Input | ResourceClassID | Integer | No | The class of Resource that is allowed to be assigned to the Disposition Test. |
| Output | DispositionTestID | Integer | No | The unique identifier of the newly created Disposition Test. |

## Description Parameters

| Name | Type | Description |
|------|------|-------------|
| ExecutionOprSequenceNo | Char | The Operation Sequence number of the execution Operation Step . |
| ExecutionOprStepSequenceNo | Integer | The Sequence number of the execution Operation Step. |
| ExecutionOrderNo | Char | The order number of the execution Operation Step. |
| ExecutionOrderType | Short | The order type of the execution Operation Step. |
| ConformityDFCRevisionFUID | Char | The DFC executed to calculate if the test is conforming. If provided it has higher precedence than ConformityOperationID |

## Validations

- The system validates that SamplingProcedureID (when specified) exists in the SAMPLING_PROCEDURE table. 
- The system validates that RejectionNo (if specified) is greater than AcceptanceNo (if specified).  
- The system validates that RejectionNo (if specfied) and AcceptanceNo (if specified) must not be greater than SampleSize (if specified).  
- The system validates that ConformityOperationID or ConformityDFCRevisionFUID is specified (if CalculateConformity is true) and exists in the DFC_REVISION table.  
- The system validates that Facility exists in the FACILITY table. 
- The system validates that DispositionNumber and Facility exist in the DISPOSITION table. 
- The system validates that DispositionNumber, Facility, and DispositionLineNumber exist in the DISPOSITION_LINE table. 
- The system validates that Characteristic and CharacteristicRevision exist in the CHARACTERISITC and CHARACTERISTIC_REVISION tables. 
- The system validates that ResourceType exists in the RESOURCE_TYPE table. 
- The system validates that ResourceClassID exists in the RESORCE_CLASS table. 
- The system validates that that if SeverityID>0, then SeverityID exists in the DISPOSITION_SEVERITY table. 
- The system validates that that if SamplePlanID>0, then SamplePlanID exists in the SAMPLE_PLAN table. 
- The system validates that if SampleUomCode is not empty, then SampleUomCode exists in the UOM table. 
- The system validates that if UHLDefectCode, USLDefectCode, LSLDefectCode, LHLDefectCode, and DefectCode are not empty, then they exist in the REASON_CODE table and are of the type Defect Code (REASON_CODE.ReasonType = 25). 
-  If the Resources list is not empty, then for every item, the system does the following: 
 
- The system validates that the Resource exists in the RESOURCE table. 
- The system validates that the Resoure type of the Resource matches the specified ResourceType (validated if provided). 
- The system validates that the Resource class of that Resource matches the specified ResourceClassID (validated if provided). 
- The system validates that the Resource is not already assigned to the Disposition Line. 
 
- The system validates that the Disposition resolved based on DispositionNumber and Facility is in the status New, Released, or Started. 
- The system validates that the Disposition line resolved based on DispositionNumber, Facility, and LineSequence is in the status New, Released, or Started. 
- The system validates that the Characteristic resolved based on the Characteristic is of the usage Inspection (CHARACTERISTIC.Usage = 2). 
- The system validates that UHL <= USL <= UCL <= TargetValue <= LCL <= LSL <= LHL (the value of Decimal.MinValue is treated as the parameter is not specified). 
- The system validates that RecordingType is passed and for a Characteristic of the Variable type is not equal to Classed. 
- The system validates that if both are passed, then ScheduledFinish is greater than ScheduledStart. 
- The system validates that Dynamic Inputs (ExecutionOprSequenceNo, ExecutionOprSequenceNo, ExecutionOrderNo, and ExecutionOrderType) are provided together or that none of them is provided. 
- If Dynamic Inputs are provided, the system validates that the WIP Operation Step exists in the WIP_OPERATION_STEP table for ExecutionOprSequenceNo, ExecutionOprSequenceNo, ExecutionOrderNo, and ExecutionOrderType values.

## System Processing

- The system validates if SequenceNo is passed. 
 
- If it has not been passed, then the system generates a new Sequence number of max. + 1 of the Sequences of all the tests for the given Disposition. 
 
- The system creates a Disposition test based on all the parameters passed (DISPOSITION_TEST). 
- The system validates if CopyAttributes is set to true and the characteristic is of the Attribute type. 
 
- If so, the system copies all the Attributes either from the product Characteristic or directly from the Characteristic and then links them to the newly created Disposition test based on the following order: 
 
- If the Characteristic is linked to the product specified in the Disposition (DISPOSITION.ProductId) by PRODUCT_CHARACTERISITC table, then the system copies all the Attributes from the PRODUCT_CHARACTERISTIC_ATTR table. 
- Otherwise, the system copies Attributes from the CHARACTERISTIC_REV_ATTRIBUTE table to the DISPOSITION_TEST_ATTRIBUTE table. 
 
 
- If CopyGroupCodes is set to true, then the system copies all the groups of Reason Codes and the Reason Codes from CHARACTERISTIC_REV_CODE_GROUP to DISPOSITION_TEST_GROUP_CODE linked to the newly created Disposition test. 
- For all the Resources passed as the Resources list, the system creates DISPOSITION_RESOURCE records linked to the newly created Disposition test.

## Pre-Conditions

The Disposition and Disposition line exists and are in the status New, Started, or Released. The revision Characteristic exists in the master data.

## Published Events

Newly created disposition test ready to be released

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| DISPOSITION_TEST | Disposition | Disposition |
|  | LineSequenceNo | LineSequenceNo |
|  | SequenceNo | SequenceNo |
|  | SamplingProcedureID | SamplingProcedureID |
|  | CharacteristicDecimals | CharacteristicDecimals |
|  | AcceptanceNo | AcceptanceNo |
|  | RejectionNo | RejectionNo |
|  | TestMethod | TestMethod |
|  | CalculateConformity | CalculateConformity |
|  | ConformityDFCRevisionFUID | ConformityDFCRevisionFUID |
|  | Facility | Facility |
|  | Characteristic | InspectionCharacteristic |
|  | CharacteristicRevision | CharacteristicRevision |
|  | RecordingType | RecordingType |
|  | ScheduledStartDate | ScheduledStart |
|  | ScheduledFinishDate | ScheduledFinish |
|  | SeverityID | SeverityID |
|  | Comment_ | Comment |
|  | UpperCoherenceLimit | UHL |
|  | UpperSpecificationLimit | USL |
|  | UpperControlLimit | UCL |
|  | TargetValue | TargetValue |
|  | LowerControlLimit | LCL |
|  | LowerSpecificationLimit | LSL |
|  | LowerCoherenceLimit | LHL |
|  | Required | Required |
|  | ReadingValidation | ReadingValidation |
|  | NoOfReadings | NoOfReadings |
|  | OverrideSumResults | OverrideSumResults |
|  | SPCCharacteristic | SPCCharacteristic |
|  | Destructive | Destructive |
|  | Additive | Additive |
|  | SamplePlanID | SamplePlanID |
|  | SampleSize | SampleSize |
|  | NoOfSamples | NoOfSamples |
|  | SampleQuantity | SampleQuantity |
|  | SampleUomCode | SampleUomCode |
|  | Certificate | Certificate |
|  | RecordDefect | RecordDefect |
|  | USLDefectReasonCode | USLDefectCode |
|  | LSLDefectReasonCode | LSLDefectCode |
|  | UHLDefectReasonCode | UHLDefectCode |
|  | LHLDefectReasonCode | LHLDefectCode |
|  | DefectReasonCode | DefectCode |
|  | ResourceType | ResourceType |
|  | ResourceClassID | ResourceClassID |
|  | ResultsOnSamples | ResultsOnSamples |
|  | ExecutionOprSequenceNo | ExecutionOprSequenceNo |
|  | ExecutionOprStepSequenceNo | ExecutionOprStepSequenceNo |
|  | ExecutionOrderNo | ExecutionOrderNo |
|  | ExecutionOrderType | ExecutionOrderType |
| DISPOSITION_RESOURCE | DispositionTestID | Newly created ID of Disposition Test |
|  | ResourceID | Resources |
|  | Disposition | Disposition |
|  | LineSequenceNo | LineSequenceNo |
| DISPOSITION_TEST_ATTRIBUTE | DispositionTestID | Newly created ID of Disposition Test |
|  | Attribute | PRODUCT_CHARACTERISTIC_ATTR. Attribute OR CHARACTERISTIC_REV_ATTRIBUTE. Attribute |
|  | Conforming | PRODUCT_CHARACTERISTIC_ATTR. Conforming OR CHARACTERISTIC_REV_ATTRIBUTE. Conforming |
| DISPOSITION_TEST_GROUP_CODE | DispositionTestID | Newly created ID of Disposition Test |
|  | Group_ | CHARACTERISTIC_REV_CODE_GROUP. Group_ |
|  | GroupType | CHARACTERISTIC_REV_CODE_GROUP. GroupType |
|  | GroupClassID | CHARACTERISTIC_REV_CODE_GROUP. GroupClassID |
|  | ReasonCode | CHARACTERISTIC_REV_CODE_GROUP. ReasonCode |
