# GetResourceByTag

**Category:** Apriso/Common/Code
**Class:** `FlexNet.BusinessFacade.EPC.Retrieval.Retriever`
**Assembly:** `FlexNet.BusinessFacade.EPC.Retrieval.dll`
**Status:** Active

## Description

Returns resource associated to the tag.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | Tag | Char | Yes | Tag in any valid representation |
| Output | TagID | Integer | No | Tag ID or -1 when the tag does not exist |
| Output | ResourceID | Integer | No | ResourceID or -1 when the tag is not linked to any resource |

## System Processing

- Decode Tag 
- Encode Tag to get all possible representations 
- Search epc_tag using all representations 
- If Tag found 
 
- If ResourceID != null 
 
- Return ResourceID

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| EPC_TAG |  |  |
| EPC_TAG_GRAI |  |  |
