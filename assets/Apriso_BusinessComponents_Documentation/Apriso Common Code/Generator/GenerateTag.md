# GenerateTag

**Category:** Apriso/Common/Code
**Class:** `FlexNet.BusinessFacade.EPC.Generate.Generator`
**Assembly:** `FlexNet.BusinessFacade.EPC.Generate.dll`
**Status:** Active
**Keywords:** EPC, Generate, RFID

## Description

This Business Component method can be used to inform DELMIA Apriso of an existing tag. Users can call the MaintainTag method at any time during their processes to insert or update a tag in DELMIA Apriso. If a tag already exists in the DELMIA Apriso database, MaintainTag checks if any extra information has been provided and updates the existing record. Users can provide their tags using binary, pure-identity, tag-encoding or legacy representations. MaintainTag will try to convert the input representation to all possible representations and search for the tag. If the tag already exists, it is updated with all possible information that might be extracted from the provided representation.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | Tag | Char | Yes | Tag in any valid representation |
| Output | TagID | Integer | No | Tag ID for the created or updated EPC record |

## Validations

System validates if Tag is empty or null.

## System Processing

- System decodes Tag (see decode methods). 
- System encodes Tag (see encode methods). 
 

If Tag already exists:
 
 
- System updates epc_tag and epc_tag_<tag_type> records. 
 

Else:
 
 
- System creates epc_tag and epc_tag_<tag_type> records.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| EPC_TAG | All fields |  |
| EPC_TAG_GID | All fields |  |
| EPC_TAG_SGTIN | All fields |  |
| EPC_TAG_SSCC | All fields |  |
| EPC_TAG_SGLN | All fields |  |
| EPC_TAG_GRAI | All fields |  |
| EPC_TAG_GIAI | All fields |  |
| EPC_TAG_DOD | All fields |  |
