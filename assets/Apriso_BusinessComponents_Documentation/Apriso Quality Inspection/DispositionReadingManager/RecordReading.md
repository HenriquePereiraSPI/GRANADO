# RecordReading

**Category:** Apriso/Quality/Inspection
**Class:** `FlexNet.BusinessFacade.Quality.DispositionReadingManager`
**Assembly:** `FlexNet.BusinessFacade.Quality2`
**Status:** Active

## Description

The method is used to create new Disposition Test Reading linked to either Disposition Test or Disposition Test Sample. This represents the actual reading performed for the given test.
 

The method is also used to record test results in the classed form which represents the number of nonconformance units per given attribute (e.g. 2 units of Red, 3 units of Blue, etc.).

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | Attribute | Char | No | Attribute value of the reading. |
| Input | Comment | Char | No | Text description of the test to be performed. |
| Input | Container | Char | No | Container Number the reading was executed on. |
| Input | DispositionTestID | Integer | Yes | Disposition Test the reading is linked with. |
| Input | DispositionTestSampleID | Integer | No | Unique identifier of the Disposition Test Sample (used when the Disposition Test Samples are used for partial samples). |
| Input | InspectorID | Integer | No | Unique identifier of an employee executing the test. |
| Input | LotNo | Char | No | Lot Number the reading was executed on. |
| Input | NoUnit | Integer | No | Number of units tested within the single reading. |
| Input | ProductID | Integer | No | Unique product identifier for the specified Serial Number. |
| Input | ReadingSequenceNo | Integer | No | Sequence number (for future use). |
| Input | ResourceID | Integer | No | Unique identifier of the resource (equipment) used to collect the reading value. |
| Input | Sample | Char | No | Number of the Sample. |
| Input | SerialNo | Char | No | Serial Number the reading was executed on. |
| Input | UomCode | Char | No | Unit of measure of the numeric value of the test reading. |
| Input | Value | Decimal | No | Reading value collected. |
| Output | DispositionReadingID | Integer | No | Unique identifier of the newly created disposition test reading. |

## Validations

- DispositionTestID must exist in DISPOSITON_TEST table. 
- DispositionTestSample must exist in DISPOSITION_TEST_SAMPLE table. 
- Attribute and DispositonTestID must exist in DISPOSITON_TEST_ATTRIBUTE. 
- UomCode must exist in UOM table. 
- InspectorID must exist in EMPLOYEE table. 
- ResourceID must exist in RESOURCE table. 
- ProductID must exist in PRODUCT table. 
- ProductID and SerialNo exist in SERIAL_NO table. 
- ProductID and LotNo exist in LOT_NO table. 
- Container must exist in CONTAINER table.

## System Processing

System:
 
 
- If characteristic linked to the disposition test (DISPOSITION_TEST.Characteristic) is of type Attribute then validates that Attribute has been specified. 
- Else if the characteristic is of type Variable then validates that UomCode has been specified. 
- Validates that ProductID is specified if SerialNo has been specified. 
- Validates that ProductID is specified if LotNo has been specified. 
- Validates that disposition test status (DISPOSITION_TEST.Status) is 'New' or 'Started' (DISPOSITON_TEST_STATUS). 
- If DispositionTestSampleID is specified then validates that the status of disposition test sample (DISPOSITON_TEST_SAMPLE.DispositionTestStatus) is NOT 'New', 'Completed' or 'Evaluated' (DISPOSITION_TEST_STATUS). 
- If the status of Disposition Test or Disposition Test Sample is 'Released' then invokes BC method: Change Disposition Test Status passing the following values: 
 
- DispositionTestID - inputed DispositionTestID 
- DisposiitonTestSampleID - inputted DispositionTestSampleID 
- DispositionTestStatus - 'Started' (DISPOSITION_TEST_STATUS) 
- Propagate - 'False' 
- EmloyeeID - inputted InspectorID 
- Comment - inputted Comment 
 
- Calculates Conforming value of Disposition Reading record based on the specification limits (variable characteristic) or attributes (attributive characteristic). The limits are defined in DISPOSITION_TEST table (UpperSpecificationLimit and LowerSpecificationLimit). For attribute characteristic DISPOSITON_TEST_ATTRIBUTE.Conforming field specifies if the disposition reading for such attribute is conforming or not. 
- If ReadingSequenceNo is not provided (not greater than 0) then obtains the next sequence number being the maximum sequence number for the given disposition test/sample + 1. 
- Creates Disposition Reading record and populates it with all inputs passed as parameters to the BC method.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| DISPOSITION_READING | DispositionTestID | Inputted DispositionTestID |
|  | DispositionTestSampleID | Inputted DispositionTestSampleID |
|  | ReadingSequenceNo | Inputted ReadingSequenceNo or generated if not specified. |
|  | NoUnit | Inputted NoUnit or 1 if less than 0 |
|  | InpectorID | Inputted InspectorID |
|  | Comment | Inputted Comment |
|  | ResourceID | Inputted ResourceID |
|  | ProductID | Inputted ProductID |
|  | SerialNo | Inputted SerialNo |
|  | LotNo | Inputted LotNo |
|  | Container | Inputted Container |
|  | UomCode | Inputted UomCode |
|  | CollectedValue | Inputted Value - persisted only if UomCode is specified |
|  | SampleNo | Inputted Sample |
|  | CollectedAttribute | Inputted Attribute |
|  | Conforming | Value calculated while processing |
