# CreateDispositionSample

**Category:** Apriso/Quality/Defect
**Class:** `FlexNet.BusinessFacade.Quality.DefectCreator`
**Assembly:** `FlexNet.BusinessFacade.Quality2`
**Status:** Retired

## Description

The purpose of this Business Component is to be able to create a new disposition sample in the "DISPOSITION_SAMPLE" table.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | Facility | Char | Yes | Facility of which the disposition occurred. |
| Input | Disposition | Char | Yes | Disposition number |
| Input | LineSequenceNo | Integer | Yes | Disposition line sequence no. |
| Input | SampleSequenceNo | Integer | No | Disposition sample sequence no. If not specified, automatically increment to the next sequence number. |
| Input | SampleQuantity | Decimal | No | Sample quantity of tested product. |
| Input | UomCode | Char | No | Code in which sample quantity is expressed. |
| Input | DestructiveFlag | Boolean | No | flag indicating that the sample will be destroyed during test. |
| Input | Status | Integer | No | current status of the sample - reference to DISPOSITION_SAMPLE_STATUS |
| Output | ScheduledStartDate | Decimal | No |  |
| Output | ScheduledFinishDate | Decimal | No |  |
| Output | SampleStartDate | Decimal | No |  |
| Output | SampleStartEmployeeID | Integer | No |  |

## System Processing

- System determines if a disposition sample for the specified inputs already exists, if so it will update the record with the inputs, otherwise it will insert a new record. 
- System uses the inputs to the business component and updates or inserts a disposition sample.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| DISPOSITION_SAMPLE | Facility | Inputted Facility (Required) |
|  | Disposition | Inputted Disposition (Required) |
|  | LineSequenceNo | Inputted LineSequenceNo (Required) |
|  | SampleSequenceNo | Inputted SampleSequenceNo (Required) |
|  | SampleQuantity | Inputted SampleQuantity |
|  | UomCode | Inputted UomCode |
|  | DestructiveFlag | Inputted DestructiveFlag |
|  | Status | Inputted Status |
|  | ScheduledStartDate | Inputted ScheduledStartDate |
|  | ScheduledFinishDate | Inputted ScheduleFinishDate |
|  | SampleStartDate | Inputted SampleStartDate |
|  | SampleStartEmployeeID | Inputted SampleStartEmployeeID |
