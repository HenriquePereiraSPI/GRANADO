# UpdateReading

**Category:** Apriso/Quality/Inspection
**Class:** `FlexNet.BusinessFacade.Quality.DispositionReadingManager`
**Assembly:** `FlexNet.BusinessFacade.Quality2`
**Status:** Active

## Description

The method is used to remove a reading from the collection of actual readings for the given Disposition Test or Disposition Test Sample.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | Attribute | Char | No | Attribute value of the reding. |
| Input | Comment | Char | No | Text description of the test to be performed. |
| Input | Container | Char | No | Container Number the reading was executed on. |
| Input | DispositionReadingID | Integer | Yes | Unique identifier of the disposition test reading to be updated. |
| Input | DispositionSample | Char | No | Disposition sample number the reading was executed on (free text - is not referenced by any table). |
| Input | InspectorID | Integer | No | Unique identifier of an employee executing the test. |
| Input | LotNo | Char | No | Lot Number the reading was executed on. |
| Input | NoUnit | Integer | No | Number of units tested within the single reading. |
| Input | ProductID | Integer | No | Unique product identifier for the specified Serial Number. |
| Input | ResourceID | Integer | No | Unique identifier of an employee executing the test. |
| Input | SerialNo | Char | No | Lot Number the reading was executed on. |
| Input | UomCode | Char | No | Number of units tested within the single reading. |
| Input | Value | Decimal | No | Unique product identifier for the specified Serial Number. |

## Validations

- DispositionReadingID must exist in DISPOSITION_READING table. 
- Attribute and ID of the disposition test referenced by disposition reading must exist in DISPOSITION_TEST_ATTRIBUTE table. 
- UomCode must exist in UOM table. 
- InspectorID must exist in EMPLOYEE table. 
- ResourceID must exist in RESOURCE table. 
- ProductID must exist in PRODUCT table. 
- ProductID and SerialNo must exist in SERIAL_NO table. 
- ProductID and LotNo must exist in LOT_NO table. 
- Container must exist in CONTAINER table.

## System Processing

- Validates that neither disposition test nor disposition test sample status referenced by disposition reading is NOT 'New', 'Evaluated' or 'Completed' (DISPOSITION_TEST_STATUS). 
- If characteristic linked to the disposition test (DISPOSITION_TEST.Characteristic) is of type Attribute then validates that Attribute has been specified. 
- Else if the characteristic is of type Variable then validates that UomCode has been specified. 
- Validates that NoUnit <= DISPOSITON_TEST.SampleSize. 
- Validates that ProductID is specified if SerialNo has been specified. 
- Validates that ProductID is specified if LotNo has been specified. 
- Calculates Conforming value of Disposition Reading record based on the specification limits (variable characteristic) or attributes (attributive characteristic). The limits are defined in DISPOSITION_TEST table (UpperSpecificationLimit and LowerSpecificationLimit). For attribute characteristic DISPOSITON_TEST_ATTRIBUTE.Conforming field specifies if the disposition reading for such attribute is conforming or not. 
- Updates Disposition Reading record and populates it with all inputs passed as parameters to the BC method.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| DISPOSITION_READING | NoUnit | Inputted NoUnit or 1 if less than 0 |
|  | InpsectorID | Inputted InspectorID or Null if not specified |
|  | Comment | Inputted Comment or Null if not specified |
|  | ResourceID | Inputted ResourceID or Null if not specified |
|  | ProductID | Inputted ProductID or Null if not specified |
|  | SerialNo | Inputted SerialNo or Null if not specified |
|  | LotNo | Inputted LotNo or Null if not specified |
|  | Container | Inputted Container or Null if not specified |
|  | UomCode | Inputted UomCode or Null if not specified |
|  | CollectedValue | Inputted Value or Null if UomCode not specified |
|  | SampleNo | Inputted Disposition Sample or Null if not specified |
|  | CollectedAttribute | Inputted Attribute or Null if not specified |
|  | Conforming | Value calculated while processing |
