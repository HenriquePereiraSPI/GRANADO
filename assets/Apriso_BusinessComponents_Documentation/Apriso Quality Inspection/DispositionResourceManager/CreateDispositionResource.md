# CreateDispositionResource

**Category:** Apriso/Quality/Inspection
**Class:** `FlexNet.BusinessFacade.Quality.DispositionResourceManager`
**Assembly:** `FlexNet.BusinessFacade.Quality2`
**Status:** Active

## Description

Method is used to create record in the Disposition Resource that indicates what instruments are required to execute the quality inspection. Such equipment can be linked to the Disposition, Disposition Line, Disposition Test or Disposition Test Sample.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | Disposition | Char | No | Disposition Number (DISPOSITION table) the Resource is linked to. |
| Input | DispositionTestID | Integer | No | Disposition Test Identifier (DISPOSITION_TEST table) the Resource is linked to. |
| Input | DispositionTestSampleID | Integer | No | Disposition Test Sample Identifier (DISPOSITION_TEST table) the Resource is linked to. |
| Input | Facility | Char | No | Facility of the Disposition the Resource is linked to. |
| Input | LineSequenceNo | Integer | No | Disposition Line Number (DISPOSITION_LINE table) the Resource is linked to. |
| Input | ResourceID | Integer | Yes | Identifier of the Resource linked to the given level of the Disposition hierarchy. |
| Output | DispositionResourceID | Integer | No | Unique identifier of the newly created disposition resource. |

## Validations

- Facility and Disposition must exist in DISPOSITION table. 
- DispositionTestID must exist in DISPOSITION_TEST table. 
- DispositionTestSampleID must exist in DISPOSITION_TEST_SAMPLE table. 
- ResourceID must exist in RESOURCE table.

## System Processing

- Validates that disposition status is 'New', 'Released' or 'Started' (DISPOSITION_STATUS table). 
- Validates that disposition line status is 'New', 'Released' or 'Started' (DISPOSITION_LINE_STATUS table). 
- Validates that disposition test status is 'New' or 'Started' (DISPOSITION_TEST_STATUS table). 
- Validates that disposition test sample status is 'New' or 'Started' (DISPOSITION_TEST_STATUS table). 
- Validates that the same resource has not already been assigned to the given disposition hierarchy (for example a disposition is considered as assigned to the given resource if there is a record in DISPOSITION_RESOURCE for ResourceID, Disposition, Facility and with LineSequeceNo, DispositionTestID, DispositionTestSampleID, DispositionReadingID set to Null). 
- Creates Disposition Resource as following: 
 
- Assigns ResourceID based on the inputted ResourceID parameter. 
- If DispositionTestSampleID is specified then Facility, Disposition, LineSequenceNo, DispositionTestID and DispositionTestSampleID are populated. Facility, Disposition, LineSequecneNo and DispositionTestID are retrieved from Disposition Test linked to the specified Disposition Test Sample record. 
- Else if DispositionTestID is specified then Facility, Disposition, LineSequenceNo and DispositionTestID are populated. Facility, Disposition and LineSequecneNo are retrieved from disposition test record given by DispositionTestID parameter. 
- Else disposition resource is populated based on the parameters specified.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| DISPOSITION_RESOURCE | ResourceID | Inputted ResourceID |
|  | Facility | Inputted Facility or DISPOSITION_TEST.Facility if DispositionTestID or DispositionTestSampleID is specified |
|  | Disposition | Inputted Disposition or DISPOSITION_TEST.Disposition if DispositionTestID or DispositionTestSampleID is specified |
|  | LineSequenceNo | Inputted LineSequenceNo or DISPOSITION_TEST.LineSequenceNo if DispositionTestID or DispositionTestSampleID is specified |
|  | DispositionTestID | Inputted DispositionTestID |
|  | DispositionTestSampleID | Inputted DispositionTestSampleID |
