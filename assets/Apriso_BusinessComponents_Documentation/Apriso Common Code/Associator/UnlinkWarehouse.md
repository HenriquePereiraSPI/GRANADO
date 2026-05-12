# UnlinkWarehouse

**Category:** Apriso/Common/Code
**Class:** `FlexNet.BusinessFacade.EPC.Associate.Associator`
**Assembly:** `FlexNet.BusinessFacade.EPC.Associate.dll`
**Status:** Active

## Description

Deletes any tag association that might exist for the inputted warehouse. If no associations were found, Count will be zero.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | Facility | Char | Yes | Facility |
| Input | Warehouse | Char | Yes | Warehouse |
| Output | Count | Integer | No | Count |

## System Processing

- System validates Warehouse 
- For each EpcTag in EPC_TAG(Facility,Warehouse) 
 
- System updates EpcTag.Facility = null 
- System updates EpcTag.Warehouse = null 
- Count = Count + 1 
 
- System returns Count
