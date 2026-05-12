# CreateBasicDispositionTest

**Category:** Apriso/Quality/Inspection
**Class:** `FlexNet.BusinessFacade.Quality.DispositionTestManager`
**Assembly:** `FlexNet.BusinessFacade.Quality2`
**Status:** Active

## Description

Method is used to create the specification of the particular test against the specified revision of characteristic and linked to the Disposition. Depending on the configuration of the test its result recording can be different (classed, detailed, summarized, custom). The difference to the Create Disposition Test is that all the specific values are copied from the product specification or if not found then from the inspection characteristic.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | Comment | Char | No | Text description of the test to be performed. |
| Input | Disposition | Char | Yes | Reference to the Quality Inspection Disposition the test belongs to. |
| Input | Facility | Char | Yes | Reference to the facility Quality Inspection Disposition the test belongs to. |
| Input | InspectionCharacteristic | Char | Yes | Characteristic against which the test is executed (CHARACTERISTIC_REVISION). Characteristic must be revision controlled and must be of Usage: Quality Inspection (CHARACTERISITC.Usage_=2). |
| Input | CharacteristicRevision | Char | Yes | Revision of the characteristic against which the test is executed (CHARACTERISTIC_REVISION). |
| Input | LineSequenceNo | Integer | Yes | Reference to the Disposition line the test belongs to. |
| Input | RecordingType | Integer | Yes | Type of q result recording. Depending on this type the test results are recorded in the different form: (Detailed, Classed, Detailed, Summarized or Custom). |
| Input | SampleSize | Integer | No | A sum of all samples that need to be collected for the given test. Sample Size is provided manually or calculated automatically based on the sample plan. |
| Input | ScheduledFinish | DateTime | No | Scheduled Finish Date and Time of the quality inspection test. NULL = 00:00:00.0000000, January 1, 0001 to indicate. |
| Input | ScheduledStart | DateTime | No | Scheduled Start Date and Time of the quality inspection test. NULL = 00:00:00.0000000, January 1, 0001. |
| Input | SequenceNo | Integer | No | Unique sequential number of the test within the one disposition line. |
| Output | DispositionTestID | Integer | No | Unique identifier of the newly created disposition test. |

## Validations

- Facility exists in FACILITY table 
- DispositionNumber and Facility exist in DISPOSITION table 
- DispositionNumber, Facility and DispositionLineNumber exist in DISPOSITION_LINE table 
- Characteristic, CharacteristicRevision exists in CHARACTERISITC and CHARACTERISTIC_REVISION tables 
- Disposition resolved based on DispositionNumber, Facility is in the status (New, Released, Started) 
- Disposition Line resolved based on DispositionNumber, Facility, LineSequence is in the status (New, Released, Started) 
- Characteristic resolved based on Characteristic is of usage Inspection (CHARACTERISTIC.Usage = 2) 
- RecordingType is passed and for the characteristic of type Variable is not equal to Classed 
- If both passed then ScheduledFinish > ScheduledStart

## System Processing

- If SequenceNo is not passed then generate the new sequence number being the max+1 of sequences of all tests for the given disposition 
- Retrieve all the test parameters based on the product specification (product retrieved from Disposition). If no characteristic found in Product Characteristic then retrieve this information directly from the revision of the Characteristic. 
- Copy all test parameters from the product characteristic or directly from characteristic revision (including specification limits) 
 
- If characteristic is linked to the product specified in the Disposition (DISPOSITION.ProductId) by PRODUCT_CHARACTERISITC table then copy all limits from PRODUCT_CHARACTERISTIC table to DISPOSITION_TEST table 
- The rest of parameters copy from CHARACTERISTIC_REVISION table to DISPOSITION_TEST table 
 
- Create Disposition Test record passing all parameters of the test and all the retrieved configuration parameters (DISPOSITION_TEST) 
- Copy all attributes from the product characteristic attribute or directly from characteristic revision attribute and link it to the newly created disposition test based on the following order: 
 
- If characteristic is linked to the product specified in the Disposition (DISPOSITION.ProductId) by PRODUCT_CHARACTERISITC table then copy all attributes from PRODUCT_CHARACTERISTIC_ATTR table 
- Otherwise copy attributes from CHARACTERISTIC_REV_ATTRIBUTE table to DISPOSITION_TEST_ATTRIBUTE table 
 
- Copy all groups of reason codes and reason codes from CHARACTERISTIC_REV_CODE_GROUP to DISPOSITION_TEST_GROUP_CODE linked to the newly created disposition test

## Pre-Conditions

- Disposition and Disposition Line exists and are in the status (New, Started, Released), 
- Revision Characteristic exists in master data

## Published Events

Newly created disposition test ready to be released.

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
|  | SeverityID | CHARACTERISTIC_REVISION. SeverityID |
|  | Comment_ | Comment |
|  | UpperCoherenceLimit | CHARACTERISTIC_REVISION. UpperCoherenceLimit OR PRODUCT_CHARACTERISTIC. UpperCoherenceLimit |
|  | UpperSpecificationLimit | CHARACTERISTIC_REVISION. UpperSpecificationLimit OR PRODUCT_CHARACTERISTIC. UpperSpecificationLimit |
|  | UpperControlLimit | CHARACTERISTIC_REVISION. UpperControlLimit OR PRODUCT_CHARACTERISTIC. UpperControlLimit |
|  | TargetValue | CHARACTERISTIC_REVISION. TargetValue OR PRODUCT_CHARACTERISTIC. TargetValue |
|  | LowerControlLimit | CHARACTERISTIC_REVISION. LowerControlLimit OR PRODUCT_CHARACTERISTIC. LowerControlLimit |
|  | LowerSpecificationLimit | CHARACTERISTIC_REVISION. LowerSpecificationLimit OR PRODUCT_CHARACTERISTIC. LowerSpecificationLimit |
|  | LowerCoherenceLimit | CHARACTERISTIC_REVISION. LowerCoherenceLimit OR PRODUCT_CHARACTERISTIC. LowerCoherenceLimit |
|  | Required | CHARACTERISTIC_REVISION. Required |
|  | ReadingValidation | CHARACTERISTIC_REVISION. ReadingValidation |
|  | NoOfReadings | CHARACTERISTIC_REVISION. NoOfReadings |
|  | OverrideSumResults | CHARACTERISTIC_REVISION. OverrideSumResults |
|  | SPCCharacteristic | CHARACTERISTIC_REVISION. SPCCharacteristic |
|  | Destructive | CHARACTERISTIC_REVISION. Destructive |
|  | Additive | CHARACTERISTIC_REVISION.Additive |
|  | SampleSize | SampleSize |
|  | NoOfSamples | CHARACTERISTIC_REVISION. NoOfSamples |
|  | SampleQuantity | CHARACTERISTIC_REVISION. SampleQuantity |
|  | SampleUomCode | CHARACTERISTIC_REVISION. SampleUomCode |
|  | Certificate | CHARACTERISTIC_REVISION. Certificate |
|  | RecordDefect | CHARACTERISTIC_REVISION. RecordDefect |
|  | USLDefectReasonCode | CHARACTERISTIC_REVISION. USLDefectReasonCode |
|  | LSLDefectReasonCode | CHARACTERISTIC_REVISION. LSLDefectReasonCode |
|  | DefectReasonCode | CHARACTERISTIC_REVISION. DefectReasonCode |
|  | UHLDefectReasonCode | CHARACTERISTIC_REVISION. UHLDefectReasonCode |
|  | LHLDefectReasonCode | CHARACTERISTIC_REVISION. LHLDefectReasonCode |
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
