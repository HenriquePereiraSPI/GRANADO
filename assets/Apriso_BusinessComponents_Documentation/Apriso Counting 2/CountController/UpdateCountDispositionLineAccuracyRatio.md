# UpdateCountDispositionLineAccuracyRatio

**Category:** Apriso/Counting 2
**Class:** `FlexNet.BusinessFacade.Counting.CountController`
**Assembly:** `FlexNet.BusinessFacade.Counting.dll`
**Status:** Active
**Keywords:** Inventory Update Count Disposition Line Accuracy Ratio Cycle Count

## Description

This Business Component method updates Inventory Accuracy Ratio of a given Count Disposition Line.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | CountDispositionLineID | Integer | Yes | ID of an existing Count Disposition Line. |
| Input | InventoryAccuracyRatio | Decimal | Yes | New value of Inventory Accuracy Ratio. |

## Validations

- System validates if the Count Disposition Line exists. 
- System validates if specified Inventory Accuracy Ratio is between 0 and 1.

## System Processing

- System updates Inventory Accuracy Ratio for the specified Count Disposition Line from the COUNT_DISPOSITION_LINE table.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| COUNT_DISPOSITION_LINE | ID | CountDispositionLineID |
|  | InventoryAccuracyRatio | InventoryAccuracyRatio |
