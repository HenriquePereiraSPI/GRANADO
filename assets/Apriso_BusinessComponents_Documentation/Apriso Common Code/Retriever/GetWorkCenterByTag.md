# GetWorkCenterByTag

**Category:** Apriso/Common/Code
**Class:** `FlexNet.BusinessFacade.EPC.Retrieval.Retriever`
**Assembly:** `FlexNet.BusinessFacade.EPC.Retrieval.dll`
**Status:** Active

## Description

Returns the work center associated with the tag.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | Tag | Char | Yes | Tag in any valid representation |
| Output | TagID | Integer | No | Tag ID or -1 when the tag does not exist |
| Output | WorkCenter | Char | No | Work center or empty when the tag is not linked to any work center |

## System Processing

- System decodes Tag 
- System encodes Tag to get all possible representations 
- System searches epc_tag using all representations 
- If Tag found 
 
- If WorkCenter != null 
 
- System returns WorkCenter

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| EPC_TAG |  |  |
| EPC_TAG_GRAI |  |  |
