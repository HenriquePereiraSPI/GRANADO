# UpdateCountDispositionLineStartDate

**Category:** Apriso/Counting 2
**Class:** `FlexNet.BusinessFacade.Counting.CountController`
**Assembly:** `FlexNet.BusinessFacade.Counting.dll`
**Status:** Active
**Keywords:** Inventory Update Count Disposition Line Actual Start Date

## Description

This Business Component method updates Actual Start Date of the selected Count Disposition Line to the value from the input.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | CountDispositionLineID | Integer | Yes | ID of an existing Count Disposition Line from COUNT_DISPOSITION_LINE. |
| Input | ActualStartDate | DateTime | Yes | New value for Count Disposition Line Actual Start Date. |

## Validations

- System validates if the Count Disposition Line exists.

## System Processing

- System updates actual start date for the specified Count Disposition Line from the COUNT_DISPOSITION_LINE table.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| COUNT_DISPOSITION_LINE | ActualStartDate | ActualStartDate |
