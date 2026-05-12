# CreateDispositionTest_v94

**Category:** Apriso/Quality/Inspection
**Class:** `FlexNet.BusinessFacade.Quality.DispositionTestManager`
**Assembly:** `FlexNet.BusinessFacade.Quality2`
**Status:** Deprecated

## Description

Method is used to create the specification of the particular test against the specified revision of characteristic and linked to the Disposition. It allows populating all major parameters of the test based on which the test results can be recorded. This method allows creation of test for both types of characteristics: Variable and Attribute. In case of characteristic of type Attribute it is also required to use the Create Disposition Test Attribute component that is used to store the discrete list of possible values for the given characteristic. For all types of tests there are also optional, complementary components that can be used:
 
 
- Create Disposition Test Group Code - to store the list of quality reason codes specific for the given test. 
- Create Disposition Resource - to store the list of resources required during the given test

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | Additive | Boolean | No | Applicable when partial samples are used (DISPOSITION_TEST_SAMPLE) indicating that total size of partial sample calculated based on the sample plan is increased by SampleSize of the test. |
| Input | Certificate | Boolean | No | Indicates that the characteristic will be used in the Certificate of Analysis. |
| Input | CharacteristicRevision | Char | Yes | Revision of the characteristic against which the test is executed (CHARACTERISTIC_REVISION). |
| Input | Comment | Char | No | Text description of the test to be performed. |
| Input | CopyAttributes | Boolean | Yes | If set to 'true', all attributes from the product characteristic or directly from characteristic are copied and linked to the Disposition Test being created. |
| Input | CopyGroupCodes | Boolean | Yes | If set to 'true', all groups of reason codes and reason codes from CHARACTERISTIC_REV_CODE_GROUP are copied to DISPOSITION_TEST_GROUP_CODE linked to the Disposition Test being created. |
| Input | DefectCode | Char | No | Default defect code when the value of the characteristic is outside of specification limits (applicable only for characteristics of type: Variable). |
| Input | Destructive | Boolean | No | If set to 'true', the sample quantity used for the test will be destroyed. |
| Input | Disposition | Char | Yes | Reference to the Quality Inspection Disposition the test belongs to. |
| Input | Facility | Char | Yes | Reference to the facility Quality Inspection Disposition the test belongs to. |
| Input | InspectionCharacteristic | Char | Yes | Characteristic against which the test is executed (CHARACTERISTIC_REVISION). Characteristic must be revision controlled and must be of Usage: Quality Inspection (CHARACTERISITC.Usage_=2). |
| Input | LCL | DateTime | No | Lower Control Limit. |
| Input | LHL | Decimal | No | Lower Coherence Limit. |
| Input | LineSequenceNo | Integer | Yes | Reference to the Disposition line the test belongs to. |
| Input | LSL | DateTime | No | Lower Specification Limit. |
| Input | LHLDefectCode | Char | No | Default defect code when the value of the characteristic is above the Lower Coherence Limit (applicable only for characteristics of type: Variable) |
| Input | LSLDefectCode | Char | No | Default defect code when the value of the characteristic is above the Lower Specification Limit (applicable only for characteristics of type: Variable) |
| Input | NoOfReadings | Integer | No | Number of readings of the value for the characteristic. Applies only for test that are executed by reading multiple values (DISPOSITION_READING). |
| Input | NoOfSamples | Integer | No | Total number of partial samples to be taken for the test. |
| Input | OverrideSumResults | Boolean | No | If set to 'true', the summarized results will be populated manually instead of the automatic calculation based on multiple readings (DISPOSITION_READING). |
| Input | ReadingValidation | Integer | No | Indicates whether the number of readings for the characteristic (DISPOSITION_READING): 1 - Is not verified, 2 - Must Equal to NoOfReadings, 3 - Can be smaller then NoOfReadings, 4 - Can be larger then NoOfReadings. |
| Input | RecordDefect | Boolean | No | Flag indicating if quality defects are created automatically depending on the test result. |
| Input | RecordingType | Integer | Yes | Type of q result recording. Depending on this type the test results are recorded in the different form: (Detailed, Classed, Detailed, Summarized or Custom). |
| Input | RecordResultsOnSamples | Boolean | Yes | Flag indicating if results' recording occurs on disposition test sample level. |
| Input | Required | Boolean | No | Flag indicating if the given test is required or optional. |
| Input | Resources | ListofInteger | No | Identifier of the resource (or resources) linked to the given level of the disposition hierarchy. |
| Input | SamplePlanID | Integer | No | Identifier of the Sample Plan (SAMPLE_PLAN) used for the test. |
| Input | SampleQuantity | Decimal | No | Quantity of product that represents a single sample unit. |
| Input | SampleSize | Integer | No | Number of units to be inspected. Sample Size is provided manually or calculated automatically based on the Sampling Procedure. |
| Input | SampleUomCode | Char | No | Unit of measure for quantity per sample. |
| Input | ScheduledFinish | DateTime | No | Scheduled Finish Date and Time of the quality inspection test. NULL = 00:00:00.0000000, January 1, 0001 to indicate. |
| Input | ScheduledStart | DateTime | No | Scheduled Start Date and Time of the quality inspection test. NULL = 00:00:00.0000000, January 1, 0001. |
| Input | SequenceNo | Integer | No | Unique sequential number of the test within the one disposition line. |
| Input | SeverityID | Integer | No | Severity of the disposition test. The valid severity types are: 1 - Normal, 2 - Minor, 3 - Major, 4 - Critical. |
| Input | SPCCharacteristic | Boolean | No | Flag indicating that the characteristic will be used to calculate, display the control or run charts. |
| Input | TargetValue | Decimal | No | Target value. |
| Input | UCL | Decimal | No | Upper Control Limit |
| Input | UHL | Decimal | No | Upper Coherence Limit. |
| Input | USL | Decimal | No | Upper Specification Limit. |
| Input | UHLDefectCode | Char | No | Default defect code when the value of the characteristic is above the Upper Specification Limit (applicable only for characteristics of type: Variable). |
| Input | USLDefectCode | Char | No | Default defect code when the value of the characteristic is above the Upper Specification Limit (applicable only for characteristics of type: Variable). |
| Output | DispositionTestID | Integer | No | Unique identifier of the newly created disposition test. |

## Validations

- Facility exists in FACILITY table 
- DispositionNumber and Facility exist in DISPOSITION table 
- DispositionNumber, Facility and DispositionLineNumber exist in DISPOSITION_LINE table 
- Characteristic, CharacteristicRevision exists in CHARACTERISITC and CHARACTERISTIC_REVISION tables 
- ResourceType exists in RESOURCE_TYPE table. 
- ResourceClassID exists in RESORCE_CLASS table. 
- If SeverityID>0 then SeverityID exists in DISPOSITION_SEVERITY table 
- If SamplePlanID>0 then SamplePlanID exists in SAMPLE_PLAN table 
- If SampleUomCode not empty then SampleUomCode exists in UOM table 
- If UHLDefectCode, USLDefectCode, LSLDefectCode, LHLDefectCode, DefectCode not empty then exist in REASON_CODE table and are of type Defect Codes (REASON_CODE.ReasonType = 25) 
- If Resources list is not empty then for every item validates that: 
- Resource exists in RESOURCE table 
- Resoure type of that resource match the specified ResourceType (validated if provided) 
- Resource class of that resource match the specified ResourceClassID (validated if provided). 
- Resource is not already assigned to disposition line. 
- Disposition resolved based on DispositionNumber, Facility is in the status (New, Released, Started) 
- Disposition Line resolved based on DispositionNumber, Facility, LineSequence is in the status (New, Released, Started) 
- Characteristic resolved based on Characteristic is of usage Inspection (CHARACTERISTIC.Usage = 2) 
- UHL <= USL <= UCL <= TargetValue <= LCL <= LSL <= LHL (value of Decimal.MinValue treated as the parameter is not specified) 
- RecordingType is passed and for the characteristic of type Variable is not equal to Classed 
- If both passed then ScheduledFinish > ScheduledStart

## System Processing

- If SequenceNo is not passed then generate the new sequence number being the max+1 of sequences of all tests for the given disposition 
- Create Disposition Test based on all parameters passed (DISPOSITION_TEST) 
- If CopyAttributes is set to True and the characteristic is of type: Attribute then copy all attributes from the product characteristic or directly from characteristic and link it to the newly created disposition test based on the following order: 
 
- If characteristic is linked to the product specified in the Disposition (DISPOSITION.ProductId) by PRODUCT_CHARACTERISITC table then copy all attributes from PRODUCT_CHARACTERISTIC_ATTR table 
- Otherwise copy attributes from CHARACTERISTIC_REV_ATTRIBUTE table to DISPOSITION_TEST_ATTRIBUTE table 
 
- If CopyGroupCodes is set to True then copy all groups of reason codes and reason codes from CHARACTERISTIC_REV_CODE_GROUP to DISPOSITION_TEST_GROUP_CODE linked to the newly created disposition test 
- For all resources passed as Resources list create DISPOSITION_RESOURCE records linked to the newly created disposition test

## Pre-Conditions

- Disposition and Disposition Line exists and are in the status (New, Started, Released). 
- Revision Characteristic exists in master data.

## Published Events

Newly created disposition test ready to be released

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| DISPOSITION_TEST | Disposition | Disposition |
|  | LineSequenceNo | LineSequenceNo |
|  | SequenceNo | SequenceNo |
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
