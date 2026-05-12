# UnlinkLot

**Category:** Apriso/Common/Code
**Class:** `FlexNet.BusinessFacade.EPC.Associate.Associator`
**Assembly:** `FlexNet.BusinessFacade.EPC.Associate.dll`
**Status:** Active

## Description

Deletes any tag association that might exist for the inputted lot. If no associations were found, Count will be zero.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | Facility | Char | Yes | Facility |
| Input | ProductID | Integer | Yes | ProductID |
| Output | Count | Integer | No | Number of records unlinked |

## System Processing

- System validates LotNo 
- For each EpcTag in EPC_TAG(LotNo,ProductID) 
 
- System updates EpcTag.LotNo = null 
- System updates EpcTag.ProductID = null 
- Count = Count + 1 
 
- System returns Count

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| EPC_TAG |  |  |
