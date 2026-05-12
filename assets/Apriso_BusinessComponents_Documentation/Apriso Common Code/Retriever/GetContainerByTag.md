# GetContainerByTag

**Category:** Apriso/Common/Code
**Class:** `FlexNet.BusinessFacade.EPC.Retrieval.Retriever`
**Assembly:** `FlexNet.BusinessFacade.EPC.Retrieval.dll`
**Status:** Active

## Description

Returns the container associated to the tag.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | Tag | Char | Yes | Tag in any valid representation |
| Output | TagID | Integer | No | Tag ID or -1 when the tag does not exist |
| Output | ContainerNo | Char | No | Container Number or empty when the tag is not linked to any container |

## System Processing

- System decodes Tag 
- System encodes Tag to get all possible representations 
- System searches epc_tag using all representations 
- If Tag found 
 
- If ContainerNo != null 
 
- System returns ContainerNo
