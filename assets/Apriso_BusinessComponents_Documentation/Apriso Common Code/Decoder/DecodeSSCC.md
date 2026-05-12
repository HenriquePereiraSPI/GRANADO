# DecodeSSCC

**Category:** Apriso/Common/Code
**Class:** `FlexNet.BusinessFacade.EPC.EncodeDecode.Decoder`
**Assembly:** `FlexNet.BusinessFacade.EPC.EncodeDecode.dll`
**Status:** Active
**Keywords:** EPC, DOD, RFID, Decode

## Description

Decodes SSCC tag. Extracts all possible fields from the provided tag.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | Tag | Char | Yes | SSCC Tag in any representation |
| Output | Filter | Integer | No | Filter or -1 |
| Output | Partition | Integer | No | Partition or -1 |
| Output | CompanyPrefix | Char | No | Company prefix or empty |
| Output | SerialReference | Char | No | Serial reference or empty |
| Output | EanUccSSCC | Char | No | EANUCC SSCC or empty |
| Output | BitSize | Integer | No | BitSize (-1 or 96) |

## System Processing

- If Tag Hex 
 
- Tag = Binary(Hex) 
 
- System applies SSCC Regular expressions and tries to match 
 
- If no Match 
 
- Invalid SSCC Tag 
 
 
- System extracts data (Filter, CompanyPrefix, SerialReference, EanUcc, BitSize) from the tag 
- If possible, system validates Filter 
- If possible, system validates CompanyPrefix 
- If possible, system validates SerialReference 
- If EanUcc == null and CompanyPrefix != null and SerialReference != null 
 
- System builds EanUcc 
 
- If EanUcc != null 
 
- System validates EanUcc
