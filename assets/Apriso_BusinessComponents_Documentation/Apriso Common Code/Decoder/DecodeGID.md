# DecodeGID

**Category:** Apriso/Common/Code
**Class:** `FlexNet.BusinessFacade.EPC.EncodeDecode.Decoder`
**Assembly:** `FlexNet.BusinessFacade.EPC.EncodeDecode.dll`
**Status:** Active
**Keywords:** EPC, DOD, RFID, Decode

## Description

Decodes a GID tag. Extracts all possible fields from the provided tag.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | Tag | Char | Yes | GIAI Tag in any representation |
| Output | GeneralManagerNumber | Integer | No | The General manager number for the given EPC tag |
| Output | ObjectClass | Integer | No | The Object Class for the given EPC tag |
| Output | SerialNumber | Char | No | The Serial Number for the given EPC tag |
| Output | BitSize | Integer | No | The BitSize (-1 or 96) for the given EPC tag |

## Validations

- If Tag Hex 
 
- Tag = Binary(Hex) 
 
- System applies GID Regular expressions and tries to match 
 
- If no Match 
 
- Invalid GID Tag 
 
 
- Systen extracts Data from the tag 
- If possible, system validates GeneralManagerNumber 
- If possible, system validates ObjectClass 
- If possible, system validates SerialNumber
