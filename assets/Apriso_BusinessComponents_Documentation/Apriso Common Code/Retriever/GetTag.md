# GetTag

**Category:** Apriso/Common/Code
**Class:** `FlexNet.BusinessFacade.EPC.Retrieval.Retriever`
**Assembly:** `FlexNet.BusinessFacade.EPC.Retrieval.dll`
**Status:** Active

## Description

Returns the DELMIA Apriso Tag ID. TagID will have -1 if the tag could not be found in DELMIA Apriso.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | Tag | Char | Yes | Tag in any valid representation |
| Output | TagID | Integer | No | Tag ID or -1 when the tag does not exist |

## System Processing

- System decodes Tag 
- System encodes Tag to get all possible representations 
- System searches Epc_tag record using all representations.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| EPC_TAG |  |  |
| EPC_TAG_GRAI |  |  |
