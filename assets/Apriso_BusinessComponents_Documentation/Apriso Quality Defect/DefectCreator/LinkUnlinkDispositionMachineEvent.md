# LinkUnlinkDispositionMachineEvent

**Category:** Apriso/Quality/Defect
**Class:** `FlexNet.BusinessFacade.Quality.DefectCreator`
**Assembly:** `FlexNet.BusinessFacade.Quality2`
**Status:** Deprecated

## Description

This Business Component is used to link or unlink a machine event to a defect using the LinkUnlink flag.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | Facility | Char | Yes | Facility of which the disposition occurred. |
| Input | Disposition | Char | Yes | New disposition number to be created |
| Input | LineSequenceNo | Integer | Yes | Disposition Line Sequence No. |
| Input | ResourceLaborID | Integer | Yes | Resource Labor ID. |
| Input | LinkUnlinkFlag | Boolean | Yes | True to ink and False to unlink |

## Validations

The system verifies that the inputted Disposition Test exists in the DISPOSITION_TEST table.

## System Processing

- If inputted LinkUnlink flag = TRUE, system creates a record in the DISPOSITION_LINE_MACHINE_EVENT table with the inputs. 
- If inputted LinkUnlink flag = FALSE, system retrieves the record matching the inputs in the DISPOSITION_LINE_MACHINE_EVENT table and deletes it.

## History Recording in Production

For each record produced/updated in each "Quality" table, an entry is generated in the TRANSACTION_HISTORY table, the TRANSACTION_HISTORY_QUALITY table.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| DISPOSITION_LINE_MACHINE_EVENT | Facility | Input |
|  | Disposition | Input |
|  | LineSequenceNo | Input |
|  | ResourceLaborID | Input |
