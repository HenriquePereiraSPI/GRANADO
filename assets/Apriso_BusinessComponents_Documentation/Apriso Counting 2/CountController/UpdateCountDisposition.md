# UpdateCountDisposition

**Category:** Apriso/Counting 2
**Class:** `FlexNet.BusinessFacade.Counting.CountController`
**Assembly:** `FlexNet.BusinessFacade.Counting.dll`
**Status:** Active
**Keywords:** UpdateCountDisposition UpdateCountDispositionLine Update CountDisposition CountDispositionLine

## Description

This Business Component method updates SignatureHeaderID or Description in the COUNT_DISPOSITION table, or SignatureHeaderID in the COUNT_DISPOSITION_LINE table.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | CountDispositionID | Integer | Conditional | CountDisposition ID |
| Input | CountDispositionLineID | Integer | Conditional | CountDispositionLine ID |
| Input | SignatureHeaderID | Integer | Conditional | SignatureHeader ID |
| Input | Description | Char | Conditional | Description |

## System Processing

- System updates SignatureHeaderID or Description in COUNT_DISPOSITION table, or SignatureHeaderID in COUNT_DISPOSITION_LINE table.

## Pre-Conditions

**Pre-Conditions** 
 

Containment and Lot must exist.
 

 **Post-Conditions** 
 

 

Lot added to Containment.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| COUNT_DISPOSITION | SignatureHeaderID | SignatureHeaderID |
|  | Description | Description |
| COUNT_DISPOSITION_LINE | SignatureHeaderID | SignatureHeaderID |
