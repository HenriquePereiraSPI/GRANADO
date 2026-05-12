# DecodeSGTIN

**Category:** Apriso/Common/Code
**Class:** `FlexNet.BusinessFacade.EPC.EncodeDecode.Decoder`
**Assembly:** `FlexNet.BusinessFacade.EPC.EncodeDecode.dll`
**Status:** Active
**Keywords:** EPC, DOD, RFID, Decode

## Description

DecodesSGTIN tag. Extracts all possible fields from the provided tag.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | Tag | Char | Yes | SGTIN Tag in any representation |
| Output | Filter | Integer | No | Filter or -1 |
| Output | Partition | Integer | No | Partition or -1 |
| Output | CompanyPrefix | Char | No | Company prefix or empty |
| Input | ItemReference | Char | No | Item reference or empty |
| Output | SerialNumber | Char | No | Serial number or empty |
| Output | EanUccGTIN14 | Char | No | EANUCC SGTIN14 or empty |
| Output | BitSize | Integer | No | BitSize (-1 or 96) |

## System Processing

- If Tag Hex 
 
- Tag = Binary(Hex) 
 
- System appliesSGTIN Regular expressions and tries to match 
 
- If no Match 
 
- InvalidSGTIN Tag 
 
 
- System extracts data (Filter, CompanyPrefix, ItemReference, SerialNumber, EanUcc, BitSize) from the tag 
- If possible, system validates Filter 
- If possible, system validates CompanyPrefix 
- If possible, system validates ItemReference 
- If possible, system validates SeriaNumber 
- If EanUcc == null and CompanyPrefix != null and ItemReference != null 
 
- System builds EanUcc 
 
- If EanUcc != null 
 
- System validates EanUcc
