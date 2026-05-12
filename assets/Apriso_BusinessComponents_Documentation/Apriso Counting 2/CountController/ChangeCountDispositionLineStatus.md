# ChangeCountDispositionLineStatus

**Category:** Apriso/Counting 2
**Class:** `FlexNet.BusinessFacade.Counting.CountController`
**Assembly:** `FlexNet.BusinessFacade.Counting.dll`
**Status:** Active
**Keywords:** Inventory Change Count Disposition Line Status

## Description

This Business Component method is used to update the status of the selected Count Disposition Line to the status from the Input.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | CountDispositionLineID | Integer | Yes | The ID of an existing Count Disposition Line from the COUNT_DISPOSITION_LINE table. |
| Input | CountDispositionLineStatus | Integer | Yes | The new value for the Count Disposition Line status. The statuses are stored in the COUNT_STATUS table. |

## Validations

- The system validates that the Count Disposition Line exists.

## System Processing

- The system updates the count status for the specified Count Disposition Line from the COUNT_DISPOSITION_LINE table. 
-  If the resulting Status is 1 - New, 2 - Started, or 14 - Released, then the actual completion date is reset to Null.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| COUNT_DISPOSITION_LINE | CountStatus | CountDispositionLineStatus |
|  | ActualCompletionDate | Set to Null if CountStatus is 1 - New, 2 - Started, or 14 - Released. |
