# UnlinkProduct

**Category:** Apriso/Common/Code
**Class:** `FlexNet.BusinessFacade.EPC.Associate.Associator`
**Assembly:** `FlexNet.BusinessFacade.EPC.Associate.dll`
**Status:** Active

## Description

Deletes any tag association that might exist for the inputted product. If no associations were found, Count will be zero.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | ProductID | Integer | Yes | ProductID |
| Output | Count | Integer | No | Number of records unlinked |

## System Processing

- System Validates ProductID 
- For each EpcTag in EPC_TAG(ProductID) 
 
- System updates EpcTag.ProductID = null 
- Count = Count + 1 
 
- System returns Count

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| EPC_TAG |  |  |
