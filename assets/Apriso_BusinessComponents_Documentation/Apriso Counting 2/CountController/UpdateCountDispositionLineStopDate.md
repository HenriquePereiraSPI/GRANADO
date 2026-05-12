# UpdateCountDispositionLineStopDate

**Category:** Apriso/Counting 2
**Class:** `FlexNet.BusinessFacade.Counting.CountController`
**Assembly:** `FlexNet.BusinessFacade.Counting.dll`
**Status:** Active
**Keywords:** Inventory Update Count Disposition Line Actual Completion Date

## Description

This Business Component method updates Actual Completion Date of the selected Count Disposition Line to the value from the input.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | CountDispositionLineID | Integer | Yes | ID of an existing Count Disposition Line from COUNT_DISPOSITION_LINE. |
| Input | ActualCompletionDate | DateTime | Yes | New value for Count Disposition Line Actual Completion Date. |

## Validations

- System validates if the Count Disposition Line exists.

## System Processing

- System updates actual completion date for the specified Count Disposition Line from the COUNT_DISPOSITION_LINE table.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| COUNT_DISPOSITION_LINE | ActualCompletionDate | ActualCompletionDate |
