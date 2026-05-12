# DeleteCountDispositionLine

**Category:** Apriso/Counting 2
**Class:** `FlexNet.BusinessFacade.Counting.CountController`
**Assembly:** `FlexNet.BusinessFacade.Counting.dll`
**Status:** Active
**Keywords:** Delete Count Disposition Line

## Description

This Business Component method deletes Count Disposition Line together with all Count Records linked with it.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | CountDispositionLineID | Integer | Yes | ID of the existing Disposition Line Count. |

## Validations

- System validates that the Count Disposition Line ID is provided and exists in the database.

## System Processing

- System deletes all Count Records (COUNT_RECORD table) linked with the Count Disposition Line and then deletes the line from COUNT_DISPOSITION_LINE table.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| COUNT_DISPOSITION_LINE | ID | CountDispositionLineID |
| COUNT_RECORD | CountDispositionLineID | All records deleted for the inputted CountDispositionLineID |
