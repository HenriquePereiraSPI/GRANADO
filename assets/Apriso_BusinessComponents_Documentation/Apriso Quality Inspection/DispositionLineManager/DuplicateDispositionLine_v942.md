# DuplicateDispositionLine_v942

**Category:** Apriso/Quality/Inspection
**Class:** `FlexNet.BusinessFacade.Quality.DispositionLineManager`
**Assembly:** `FlexNet.BusinessFacade.Quality2`
**Status:** Active

## Description

Method is used to create the copy of the Disposition Line that contains the main Disposition Line record as well as all the tests along with the specification.
 

The difference between DuplicateDispositonLine_v941 is that SamplingProcedureID replaces SamplePlanID and Work Center input is added.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | ReferenceDisposition | Char | Yes | Referenced Disposition (in case the Disposition record was created by duplicating another Disposition). |
| Input | ReferenceFacility | Char | Yes | Referenced Facility (in case the Disposition record was created by duplicating another Disposition). |
| Input | ReferenceSequenceNo | Integer | Yes | Referenced SequenceNo of the Disposition Line (in case the Disposition record was created by duplicating another Disposition). |
| Input | Comment | Char | No | Description of the group of test to be performed. |
| Input | Disposition | Char | Yes | Description of the group of test to be performed. |
| Input | ExecutionOprSequenceNo | Char | No | Reference to the Disposition the given line belongs to. |
| Input | ExecutionOrderNo | Char | No | Operation of the execution order referenced as ExecutionOrderNo used when the given disposition line is linked to the operation executing all tests (DISPOSITION_TEST) assigned to this line. |
| Input | ExecutionOrderType | Integer | No | Type of the execution order referenced as ExecutionOrderNo. |
| Input | Facility | Char | Yes | Reference to the facility quality inspection (Disposition) the given line belongs to. |
| Input | ScheduledFinish | DateTime | No | Scheduled End Date and Time of the test of the Disposition Line. |
| Input | ScheduledStart | DateTime | No | Scheduled Start Date and Time of the test of the Disposition Line. |
| Input | SequenceNo | Integer | No | Unique sequence number of the Disposition Line. |
| Input | SeverityID | Integer | No | Severity of the defect. |
| Input | LineCode | Char | No | Line Code of the Disposition Line. |
| Input | SamplingProcedureID | Integer | No | ID of the Sampling Procedure |
| Input | WorkCenter | Char | No | Work Center |
| Input | SpecificationID | Integer | No | Identifier of the specification used to define the set of test to be executed for the given line. |
| Output | LineSequenceID | Integer | No | Unique identifier of the newly created disposition Line |

## Validations

- ReferenceFacility must exist in FACILITY table. 
- ReferenceFacility and ReferenceDisposition must exist in DISPOSITION table. 
- ReferenceFacility, ReferenceDisposition, ReferenceSequenceNo must exist in DISPOSITION_LINE table. 
- Execution order operation must belong to execution order defined on disposition level.

## System Processing

- Invokes the logic of the BC method: Create Disposition Line (v941) passing all the parameters except the following: 
 
- ReferenceDisposition 
- ReferenceFacility 
- ReferenceSequenceNo 
 
- Links the created line with the source disposition line (ReferenceFacility, ReferenceDisposition, ReferenceLineSeqNo) 
- Copies custom attributes linked to source disposition line into new line. 
- Copies the content of source Disposition Resource records (those assigned to disposition line only) 
- Retrieves all active Disposition Tests assigned to the referenced Disposition Line (given by ReferenceFacility, ReferenceDisposition, ReferenceSequenceNo) and for every record found: 
 
- Invokes the code of BC method: Create Disposition Test passing all data retrieved from the source Disposition Test records except SequenceNo which is generated as a unique value for the disposition line. SequenceNo is generated only if SpecificationID is provided. If Specifcation ID is not provided then the created disposition tests will have assigned the same Sequence Numbers as in source disposition tests thus it will be possible to track the source disposition test. 
- Copies custom attributes from source disposition test record. 
- Copies the content of source Disposition Test Attribute records. 
- Copies the content of source Disposition Resource records (those assigned to disposition test

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| DISPOSITION_TEST_ATTRIBUTE | [All] | Copied form source disposition test attribute record, DispositionTestID altered by the ID of the duplicated disposition test |
| DISPOSITION_TEST_GROUP_CODE | [All] | Copied form source disposition test group code record, DispositionTestID altered by the ID of the duplicated disposition test |
| DISPOSITION_RESOURCE | [All] | Copied from source disposition resource records. For source disposition tests DispositionTestID altered by the ID of the duplicated disposition test and for source disposition line LineSequenceNo altered by the sequence number of the line created. |
| UNIT | ID | Created and assigned for new disposition line (DISPOSITION_LINE.UnitID) and all duplicated disposition tests (DISPOSITION_TEST.UnitID) |
| UNIT_CHARACTERISTIC | [All] | Created and assigned for new disposition line (DISPOSITION_LINE.UnitID) and all duplicated disposition tests (DISPOSITION_TEST.UnitID) |
| [Tables populated by CreateDispositionLine_v942] |  |  |
| [Tables populated by CreateDispositionTest_v942] |  |  |
