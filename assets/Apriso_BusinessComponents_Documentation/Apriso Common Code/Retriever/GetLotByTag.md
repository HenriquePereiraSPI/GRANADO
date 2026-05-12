# GetLotByTag

**Category:** Apriso/Common/Code
**Class:** `FlexNet.BusinessFacade.EPC.Retrieval.Retriever`
**Assembly:** `FlexNet.BusinessFacade.EPC.Retrieval.dll`
**Status:** Active

## Description

Returns the lot associated to the tag.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | Tag | Char | Yes | Tag in any valid representation |
| Output | TagID | Integer | No | Tag ID or -1 when the tag does not exist |
| Output | LotNo | Char | No | Lot Number or empty when the tag is not linked to any lot |
| Output | ProductID | Integer | No | ProductID or -1 when the tag is not liked to any lot |

## System Processing

- Decode Tag 
- Encode Tag to get all possible representations 
- Search epc_tag using all representations 
- If Tag found 
 
- If LotNo != null && ProductID != null 
 
- Return LotNo and ProductID

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| EPC_TAG |  |  |
| EPC_TAG_GRAI |  |  |
