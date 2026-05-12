# DeleteTag

**Category:** Apriso/Common/Code
**Class:** `FlexNet.BusinessFacade.EPC.Generate.Generator`
**Assembly:** `FlexNet.BusinessFacade.EPC.Generate.dll`
**Status:** Active
**Keywords:** DeleteTag

## Description

This Business Component method can be used to delete a tag using the TagID.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | TagID | Integer | No | Tag to be deleted. |

## System Processing

- System validates TagID.  
- System deletes epc_tag. 
- System deletes epc_tag_gid.  
- System deletes epc_tag_sgtin.  
- System deletes epc_tag_sscc.  
- System deletes epc_tag_sgln.  
- System deletes epc_tag_grai.  
- System deletes epc_tag_giai.  
- System deletes epc_tag_dod.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| EPC_TAG | All Fields |  |
| EPC_TAG_GID | All Fields |  |
| EPC_TAG_SGTIN | All Fields |  |
| EPC_TAG_SSCC | All Fields |  |
| EPC_TAG_SGLN | All Fields |  |
| EPC_TAG_GRAI | All Fields |  |
| EPC_TAG_GIAI | All Fields |  |
| EPC_TAG_DOD | All Fields |  |
