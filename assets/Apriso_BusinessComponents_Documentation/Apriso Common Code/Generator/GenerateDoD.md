# GenerateDoD

**Category:** Apriso/Common/Code
**Class:** `FlexNet.BusinessFacade.EPC.Generate.Generator`
**Assembly:** `FlexNet.BusinessFacade.EPC.Generate.dll`
**Status:** Active
**Keywords:** EPC, DoD, Generate, RFID

## Description

This Business Component method creates a DoD tag in DELMIA Apriso.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | BitSize | Integer | Yes | BitSize (-1, 96) |
| Input | Filter | Integer | Yes | Filter or -1 |
| Input | CageCode | Char | Yes | Government Managed Identified. |
| Input | SerialNumber | Char | Yes | Serial number or empty. |
| Output | TagID | Integer | No | Returns the TagID for the given DoD EPC Tag. |
| Output | BinaryString | Char | No | Returns the Binary representation for the created EPC Tag. |
| Output | HexString | Char | No | Returns the Hex representation for the created EPC Tag. |
| Output | TagEncodingString | Char | No | Returns the Tag Encoding representation for the created EPC Tag. |
| Output | PureIdentityString | Char | No | Returns the Pure identity representation for the created EPC Tag |
| Output | LegacyString | Char | No | Returns the Legacy representation for the created EPC Tag. |
| Output | OnsString | Char | No | Returns the ONS for the created EPC Tag. |

## System Processing

- System encodes Data and creates all possible representations. 
- System checks if tag already exists using all representations.  
- System generates epc_tag record.  
- System generates epc_tag_dod record.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| EPC_TAG | All fields |  |
| EPC_TAG_DOD | All fields |  |
