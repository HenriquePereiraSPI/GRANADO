# RemoveDispositionLineSignatures

**Category:** Apriso/Common/Signatures
**Class:** `FlexNet.BusinessFacade.Signature.SignatureManager`
**Assembly:** `FlexNet.BusinessFacade.Signature.dll`
**Status:** Active
**Keywords:** SignatureManager RemoveDispositionLineSignatures Signature SignatureDetail CountDispositionLine

## Description

This Business Component method removes signature by updating fields in the SIGNATURE_DETAIL table.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | CountDispositionLineID | Integer | Conditional | CountDispositionLine ID |

## System Processing

- This Business Component method removes signature by updating fields in the SIGNATURE_DETAIL table.

## Pre-Conditions

**Pre-Conditions** 
 

Containment and Lot must exist.
 

 **Post-Conditions** 
 

 

Lot added to Containment.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| COUNT_DISPOSITION_LINE | SignatureHeaderID | SignatureHeaderID |
