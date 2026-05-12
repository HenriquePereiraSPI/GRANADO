# DecodeGIAI

**Category:** Apriso/Common/Code
**Class:** `FlexNet.BusinessFacade.EPC.EncodeDecode.Decoder`
**Assembly:** `FlexNet.BusinessFacade.EPC.EncodeDecode.dll`
**Status:** Active
**Keywords:** EPC, DOD, RFID, Decode

## Description

Decodes the given GIAI tag. Extracts all possible fields from the provided tag.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | Tag | Char | Yes | GIAI Tag in any representation |
| Output | Filter | Integer | No | Filter or -1. |
| Output | Partition | Integer | No | Partition or -1 |
| Output | CompanyPrefix | Char | No | CompanyPrefix |
| Output | IndividualAssetReference | Char | No | IndividualAssetReference |
| Output | EanUccGIAI | Char | No | EANUCC GIAI or empty |
| Output | BitSize | Integer | No | BitSize (-1, 96 or 202) |

## System Processing

- If Tag Hex 
 
- Tag = Binary(Hex) 
 
- System applies GRAI Regular expressions and tries to match 
 
- If no Match 
 
- Invalid GRAI Tag 
 
 
- System extracts data (Filter, CompanyPrefix, AssetType, SerialNumber, BitSize) from the tag 
- If possible, system validates Filter 
- If possible, system validates CompanyPrefix 
- If possible, system validates AssetType 
- If possible, system validates SerialNumber 
- If EanUccGIAI == null and CompanyPrefix != null 
 
- System builds EanUcc 
 
- If EanUccGIAI != null 
 
- System validates EanUccGIAI
