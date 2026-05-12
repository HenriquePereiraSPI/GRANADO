# GenerateSSCC

**Category:** Apriso/Common/Code
**Class:** `FlexNet.BusinessFacade.EPC.Generate.Generator`
**Assembly:** `FlexNet.BusinessFacade.EPC.Generate.dll`
**Status:** Active
**Keywords:** EPC, SSCC, Generate, RFID

## Description

This Business Component method creates an SSCC tag in DELMIA Apriso.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | BitSize | Integer | Yes | BitSize (-1, 96). |
| Input | Filter | Integer | Yes | Filter or -1. |
| Input | CompanyPrefix | Char | No | Company Prefix or empty. |
| Input | SerialReference | Char | Yes | Serial Number or empty. |
| Input | EanUccSSCC | Char | No | EANUCC SSCC or empty. |
| Input | CompanyPrefixLength | Integer | No | Company Prefix length or -1. |
| Output | TagID | Integer | No | Returns the TagID for the given SSCC EPC Tag. |
| Output | BinaryString | Char | No | Returns the Binary representation for the created EPC Tag. |
| Output | HexString | Char | No | Returns the Hexadecimal representation for the created EPC Tag. |
| Output | TagEncodingString | Char | No | Returns the Tag Encoding representation for the created EPC Tag. |
| Output | PureIdentityString | Char | No | Returns the Pure identity representation for the created EPC Tag. |
| Input | LegacyString | Char | No | Returns the Legacy representation for the created EPC Tag. |
| Output | OnsString | Char | No | Returns the ONS for the created EPC Tag. |

## System Processing

- System encodes Data and creates all possible representations. 
- System checks if tag already exists using all representations. 
- System generates epc_tag record. 
- System generates epc_tag_sscc record.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| EPC_TAG | All fields |  |
| EPC_TAG_SSCC | All fields |  |
