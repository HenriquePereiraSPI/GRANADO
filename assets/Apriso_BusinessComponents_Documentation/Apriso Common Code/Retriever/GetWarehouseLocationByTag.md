# GetWarehouseLocationByTag

**Category:** Apriso/Common/Code
**Class:** `FlexNet.BusinessFacade.EPC.Retrieval.Retriever`
**Assembly:** `FlexNet.BusinessFacade.EPC.Retrieval.dll`
**Status:** Active

## Description

Returns the warehouse location associated with the tag.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | Tag | Char | Yes | Tag in any valid representation |
| Output | TagID | Integer | No | Tag ID or -1 when the tag does not exist |
| Output | WarehouseLocation | Integer | No | Warehouse location or -1 when the tag is not linked to any warehouse location |

## System Processing

- System decodes Tag 
- System encodes Tag to get all possible representations 
- System searches epc_tag using all representations 
- If Tag found 
 
- If WarehouseLocation != null 
 
- System returns WarehouseLocation

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| EPC_TAG |  |  |
| EPC_TAG_GRAI |  |  |
