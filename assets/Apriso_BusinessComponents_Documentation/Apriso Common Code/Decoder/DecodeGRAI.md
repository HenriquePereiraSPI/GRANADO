# DecodeGRAI

**Category:** Apriso/Common/Code
**Class:** `FlexNet.BusinessFacade.EPC.EncodeDecode.Decoder`
**Assembly:** `FlexNet.BusinessFacade.EPC.EncodeDecode.dll`
**Status:** Active
**Keywords:** EPC, DOD, RFID, Decode

## Description

It decodes a GRAI tag. It extracts all possible fields from the provided tag.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | Tag | Char | Yes | GRAI Tag in any representation. |
| Output | Filter | Integer | No | The Filter for the given EPC tag. -1 if it cannot be calculated. |
| Output | Partition | Integer | No | The Partition for the given EPC tag. -1 if it cannot be calculated. |
| Output | CompanyPrefix | Char | No | The Company Prefix for the given EPC tag. Empty if it cannot be calculated. |
| Output | AssetType | Char | No | The Asset Type for the given EPC tag. Empty if it cannot be calculated. |
| Output | SerialNumber | Char | No | The Serial Number for the given EPC tag. Empty if it cannot be calculated. |
| Output | EanUccGRAI | Char | No | The EanUcc GRAI for the given EPC tag. Empty if it cannot be calculated. |
| Output | BitSize | Integer | No | The BitSize for the given EPC tag. (-1, 96 or 170) |

## System Processing

- If Tag Hex 
 
- Tag = Binary(Hex) 
 
- System applies GRAI Regular expressions and try to match 
 
- If no Match 
 
- Invalid GRAI Tag 
 
 
- System extracts data (Filter, CompanyPrefix, AssetType, SerialNumber, BitSize) from the tag 
- If possible, system validates Filter 
- If possible, system validates CompanyPrefix 
- If possible, system validates AssetType 
- If possible, system validates SerialNumber 
- If EanUcc == null and CompanyPrefix != null 
 
- System builds EanUcc 
 
- If EanUcc != null 
 
- System validates EanUcc
