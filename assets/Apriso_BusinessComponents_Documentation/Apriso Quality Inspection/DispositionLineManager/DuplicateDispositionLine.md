# DuplicateDispositionLine

**Category:** Apriso/Quality/Inspection
**Class:** `FlexNet.BusinessFacade.Quality.DispositionLineManager`
**Assembly:** `FlexNet.BusinessFacade.Quality2`
**Status:** Deprecated

## Description

Method is used to create the copy of the Disposition Line that contains the main Disposition Line record as well as all the tests along with the specification.

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
| Input | SpecificationID | Integer | No | Identifier of the specification used to define the set of test to be executed for the given line. |
| Output | LineSequenceID | Integer | No | Unique identifier of the newly created disposition Line |

## Validations

- See DuplicateDispositionLine_v941.

## System Processing

- This method invokes DuplicateDispositionLine_v941 method passing all the parameters taken from DuplicateDispositionLine and 0 as SamplePlanID.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| See |  |  |
