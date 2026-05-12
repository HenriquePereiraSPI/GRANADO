# LinkSerial

**Category:** Apriso/Common/Code
**Class:** `FlexNet.BusinessFacade.EPC.Associate.Associator`
**Assembly:** `FlexNet.BusinessFacade.EPC.Associate.dll`
**Status:** Active

## Description

This Business Component method associates a tag with a DELMIA Apriso Serial Number.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | TagID | Integer | Yes | DELMIA Apriso TagID. |
| Input | SerialNo | Char | Yes | DELMIA Apriso Serial Number. |
| Input | ProductID | Integer | Yes | ProductID. |

## System Processing

- System validates Serial. 
- System checks if Tag is already linked to another Serial. 
- If Epc_Tag.ProductID != null 
 
- If Epc_Tag.ProductID != ProductID 
 
- Tag is already linked to another Product. 
 
 
- System updates Epc_Tag.ProductID and Epc_Tag.SerialNo.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| EPC_TAG |  |  |
