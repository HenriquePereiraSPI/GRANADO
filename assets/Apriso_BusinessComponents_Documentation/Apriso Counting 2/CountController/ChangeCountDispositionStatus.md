# ChangeCountDispositionStatus

**Category:** Apriso/Counting 2
**Class:** `FlexNet.BusinessFacade.Counting.CountController`
**Assembly:** `FlexNet.BusinessFacade.Counting.dll`
**Status:** Active
**Keywords:** Inventory Update Count CountStatus Disposition

## Description

This Business Component method is used to change the status of the Count Disposition.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | CountDispositionID | Integer | Yes | The ID of an existing Count Disposition record from the COUNT_DISPOSITION table. |
| Input | CountDispositionStatus | Integer | Yes | The status from the COUNT_STATUS table: New = 1, Started = 2, InProgress = 3, Passed = 4, OutofTolerance = 5, Adjusted = 6, Completed = 7, Closed = 8, Cancelled = 9, Recount = 10, Move = 11, EmptyContainerFound = 12, Counted = 13, Released = 14, Approved = 15, Reconciled = 16. |

## Validations

- The system validates if the CountDisposition record exists. 
-  If the resulting Status is 1 - New, 2 - Started, or 14 - Released, then the actual completion date is reset to Null.

## System Processing

- The system updates the status of the Count Disposition record with the value from the Input.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| COUNT_DISPOSITION | CountStatus | CountDispoisitionStatus |
|  | ActualCompletionDate | Set to Null if CountStatus is 1 - New, 2 - Started, or 14 - Released. |
