# DecodeDoD

**Category:** Apriso/Common/Code
**Class:** `FlexNet.BusinessFacade.EPC.EncodeDecode.Decoder`
**Assembly:** `FlexNet.BusinessFacade.EPC.EncodeDecode.dll`
**Status:** Active
**Keywords:** EPC, DOD, RFID, Decode

## Description

Decodes a DoD tag. Extracts all possible fields from the provided tag.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | Tag | Char | Yes | The EPC tag to decode |
| Output | Filter | Integer | No | The Filter for the inputted EPC tag |
| Output | CageCode | Char | No | The Cage Code for the inputted EPC tag |
| Output | SerialNumber | Char | No | The Serial Number for the inputted EPC tag |
| Output | BitSize | Integer | No | The BitSize (-1, 96) for the inputted EPC tag |

## System Processing

- If Tag Hex 
 
- Tag = Binary(Hex) 
 
- System applies DoD Regular expressions and tries to match 
 
- If no Match 
 
- Invalid DoD Tag 
 
 
- System extracts Data (Filter, CageCode, SerialNumber, BitSize) from the tag 
- If possible, system validates Filter 
- If possible, system validates CageCode 
- If possible, system validates SerialNumber
