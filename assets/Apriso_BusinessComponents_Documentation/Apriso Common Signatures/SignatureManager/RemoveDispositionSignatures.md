# RemoveDispositionSignatures

**Category:** Apriso/Common/Signatures
**Class:** `FlexNet.BusinessFacade.Signature.SignatureManager`
**Assembly:** `FlexNet.BusinessFacade.Signature.dll`
**Status:** Active
**Keywords:** SignatureManager RemoveDispositionSignatures Signature SignatureDetail CountDisposition

## Description

This Business Component method removes signature by updating fields in the SIGNATURE_DETAIL table.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | CountDispositionID | Integer | Conditional | CountDisposition ID |

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
| COUNT_DISPOSITION | SignatureHeaderID | SignatureHeaderID |
