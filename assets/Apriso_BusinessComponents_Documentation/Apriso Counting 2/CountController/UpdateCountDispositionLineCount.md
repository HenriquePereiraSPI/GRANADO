# UpdateCountDispositionLineCount

**Category:** Apriso/Counting 2
**Class:** `FlexNet.BusinessFacade.Counting.CountController`
**Assembly:** `FlexNet.BusinessFacade.Counting.dll`
**Status:** Active
**Keywords:** Inventory Update Count Disposition Line Number NoOfCounts Counts

## Description

This Business Component method updates Number of Counts of the selected Count Disposition Line to the value from the input.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | CountDispositionLineID | Integer | Yes | ID of an existing Count Disposition Line from table COUNT_DISPOSITION_LINE. |
| Input | NoOfCounts | Integer | Yes | New value of Number of Counts for Count Disposition Line. |

## Validations

- System validates if the Count Disposition Line exists.  
- System validates if the Number of Counts is greater than zero.

## System Processing

- System updates NoOfCounts for the specified Count Disposition Line from the COUNT_DISPOSITION_LINE table.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| COUNT_DISPOSITION_LINE | NoOfCounts | NoOfCounts, greater than zero |
