# GenerateGRAI

**Category:** Apriso/Common/Code
**Class:** `FlexNet.BusinessFacade.EPC.Generate.Generator`
**Assembly:** `FlexNet.BusinessFacade.EPC.Generate.dll`
**Status:** Active
**Keywords:** EPC, GRAI, Generate, RFID

## Description

This Business Component method creates a GRAI tag in DELMIA Apriso.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | BitSize | Integer | Yes | BitSize (-1, 96). |
| Input | Filter | Integer | Yes | Filter or -1. |
| Input | CompanyPrefix | Char | No | Company prefix or empty. |
| Input | AssetType | Char | No | Asset Type. |
| Input | EanUccGRAI | Char | No | EANUCC GRAI or empty. |
| Input | CompanyPrefixLength | Integer | No | Company Prefix length or -1. |
| Input | SerialNumber | Char | No | Serial number or empty. |
| Output | TagID | Integer | No | Returns the TagID for the given GRAI EPC Tag. |
| Output | BinaryString | Char | No | Returns the Binary representation for the created EPC Tag. |
| Output | HexString | Char | No | Returns the Hex representation for the created EPC Tag. |
| Output | TagEncodingString | Char | No | Returns the Tag Encoding representation for the created EPC Tag. |
| Output | PureIdentityString | Char | No | Returns the Pure identity representation for the created EPC Tag. |
| Output | LegacyString | Char | No | Returns the Legacy representation for the created EPC Tag. |
| Output | OnsString | Char | No | Returns the ONS for the created EPC Tag. |

## System Processing

- System encodes data and creates all possible representations. 
- System checks if tag already exists using all representations. 
- System generates epc_tag record. 
- System generates epc_tag_grai record.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| EPC_TAG | All fields |  |
| EPC_TAG_GRAI | All fields |  |
