# CreateDispositionWithReference

**Category:** Apriso/Quality/Defect
**Class:** `FlexNet.BusinessFacade.Quality.DefectCreator`
**Assembly:** `FlexNet.BusinessFacade.Quality2`
**Status:** Deprecated

## Description

This Business Component creates a deep copy of a disposition and assigns it to another entity or updates an existing disposition with a deep copy of disposition lines of the referenced disposition.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | Facility | Char | Yes | Facility of which the disposition occurred. |
| Input | Disposition | Char | Yes | New disposition number to be created |
| Input | ReferenceDisposition | Char | Yes | Existing disposition number to be referenced. |
| Input | DispositionType | Integer | Yes | Disposition type for the new dispostion. |

## Validations

System verifies that the DISPOSITION table does not contains a record for the inputted Facility + Disposition.

## System Processing

- System creates a record in the DISPOSITION table with the data from Referenced Disposition. 
- System creates new record(s) in the DISPOSITION_LINE table with data from DISPOSITION_LINE for the Referenced Disposition. 
- System creates new record(s) in the DISPOSITION_LINE_TEST table with data from DISPOSITION_LINE_TEST for the Referenced Disposition. 
- System creates new record(s) in the DISPOSITION_LINE_TEST_REASON table with data from DISPOSITION_LINE_TEST_REASON for the Referenced Disposition. 
- System also populates the field "reference Disposition", "reference Disposition Line Sequence No' and "reference Facility" in the new Disposition line records.

## History Recording in Production

For each record produced/updated in each "Quality" table, an entry is generated in the TRANSACTION_HISTORY table, the TRANSACTION_HISTORY_QUALITY table.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| DISPOSITION | Facility | Input (Required) |
|  | Disposition | Input (Required) |
|  | DispositionType | Input (=3 for DEFECT) (Required) |
|  | All other fields | Copied from Reference Disposition |
| DISPOSITION_LINE | Facility | Input |
|  | Disposition | Input |
|  | LineSequenceNo | Auto-increment |
|  | ReferenceFacility | Facility from ReferenceDisposition |
|  | ReferenceDisposition | Inputted ReferenceDisposition |
|  | ReferenceDispositionLineSeqNo | LineSequenceNo from ReferenceDisposition |
|  | All other fields | Copied from Reference Disposition |
| DISPOSITION_TEST | Facility | Input |
|  | Disposition | Input |
|  | All other fields | Copied from Reference Disposition |
| DISPOSITION_TEST_REASON | ReasonSequenceNo | Copied from Reference Disposition |
|  | ReasonCode | Copied from Reference Disposition |
