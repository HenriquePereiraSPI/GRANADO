# DecodeSGLN

**Category:** Apriso/Common/Code
**Class:** `FlexNet.BusinessFacade.EPC.EncodeDecode.Decoder`
**Assembly:** `FlexNet.BusinessFacade.EPC.EncodeDecode.dll`
**Status:** Active
**Keywords:** EPC, DOD, RFID, Decode

## Description

Decodes a SGLN tag. Extracts all possible fields from the provided tag.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | Tag | Char | Yes | SGLN Tag in any representation |
| Output | Filter | Integer | No | Filter or -1 |
| Output | Partition | Integer | No | Partition or -1 |
| Output | CompanyPrefix | Char | No | Company prefix or empty |
| Output | Location reference or empty | Char | No | Location reference or empty |
| Output | ExtensionComponent | Char | No | Extension component or empty |
| Output | EanUccGLN | Char | No | EANUCC GLN or empty |
| Output | BitSize | Integer | No | BitSize (-1, 96 or 195) |

## System Processing

- If Tag Hex 
 
- Tag = Binary(Hex) 
 
- System applies SGLN Regular expressions and tries to match 
 
- If no Match 
 
- Invalid SGLN Tag 
 
 
- System extracts Data (Filter, CompanyPrefix, LocationReference, ExtensionComponent, BitSize) from the tag 
- If possible, system validates Filter 
- If possible, system validates CompanyPrefix 
- If possible, system validates LocationReference 
- If possible, system validates ExtensionComponent 
- If EanUcc == null and CompanyPrefix != null 
 
- System builds EanUcc 
 
- If EanUcc != null 
 
- System validates EanUcc
