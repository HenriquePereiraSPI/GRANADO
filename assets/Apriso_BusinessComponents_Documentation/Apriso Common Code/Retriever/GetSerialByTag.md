# GetSerialByTag

**Category:** Apriso/Common/Code
**Class:** `FlexNet.BusinessFacade.EPC.Retrieval.Retriever`
**Assembly:** `FlexNet.BusinessFacade.EPC.Retrieval.dll`
**Status:** Active

## Description

This Business Component method returns the serial number associated with the tag.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | Tag | Char | Yes | Tag in any valid representation. |
| Output | TagID | Integer | No | Tag ID or -1 when the tag does not exist. |
| Output | SerialNo | Char | No | Serial Number or empty when the tag is not linked with any Serial. |
| Output | ProductID | Integer | No | ProductID or -1 when the tag is not linked with any Serial. |

## System Processing

- System decodes Tag.  
- System encodes Tag to get all possible representations.  
- System searches epc_tag using all representations.  
- If Tag is found:  
 
- If SerialNo != null && ProductID != null 
 
- System returns SerialNo and ProductID.
