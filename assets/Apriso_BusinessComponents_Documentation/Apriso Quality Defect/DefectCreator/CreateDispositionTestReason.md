# CreateDispositionTestReason

**Category:** Apriso/Quality/Defect
**Class:** `FlexNet.BusinessFacade.Quality.DefectCreator`
**Assembly:** `FlexNet.BusinessFacade.Quality2`
**Status:** Deprecated

## Description

The purpose of this Business Component allows the user to assign one or more reason codes and comments to a Disposition Test.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | DispositionTestID | Integer | Yes | ID of an existing Disposition test record. |
| Input | ReasonCode | Char | No | Valid reason code. |
| Input | Comment | Char | No | Text comment. |
| Input | LanguageID | Integer | No | Language ID for the Text Comment. |

## Validations

System verifies that the inputted Disposition Test is valid.

## System Processing

- ReasonSequenceNo is auto-incremented for each new entry. 
- System creates a new record in the DISPOSITION_TEST_REASON table with the inputs.

## History Recording in Production

For each record produced/updated in each "Quality" table, an entry is generated in both the TRANSACTION_HISTORY table and the TRANSACTION_HISTORY_QUALITY table.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| DISPOSITION_TEST_REASON | DispositionTestID | Input |
|  | ReasonSequenceNo | System generated (auto-increment) |
|  | ReasonCode | Input |
|  | TextID | TEXT.ID |
| TEXT | TextID | System Generated |
| TEXT_TRANSLATION | TextID | TEXT.ID |
|  | LanguageID | Input |
|  | Text | Inputted Comment |
