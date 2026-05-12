# UnlinkWarehouseLocation

**Category:** Apriso/Common/Code
**Class:** `FlexNet.BusinessFacade.EPC.Associate.Associator`
**Assembly:** `FlexNet.BusinessFacade.EPC.Associate.dll`
**Status:** Active

## Description

Deletes any tag association that might exist for the inputted warehouse location. If no associations were found, Count will be zero.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | WarehouseLocationID | Integer | Yes | Warehouse jocation |
| Output | Count | Integer | No | Number of records unlinked |

## System Processing

- System validates WarehouseLocation 
- For each EpcTag in EPC_TAG(WarehouseLocation) 
 
- System updates EpcTag.WarehouseLocationID = null 
- Count = Count + 1 
 
- System returns Count

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| EPC_TAG |  |  |
