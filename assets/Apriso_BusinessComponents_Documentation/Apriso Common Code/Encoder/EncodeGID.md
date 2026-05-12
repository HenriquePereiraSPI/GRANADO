# EncodeGID

**Category:** Apriso/Common/Code
**Class:** `FlexNet.BusinessFacade.EPC.EncodeDecode.Encoder`
**Assembly:** `FlexNet.BusinessFacade.EPC.EncodeDecode.dll`
**Status:** Active
**Keywords:** EPC, DOD, RFID, Encode

## Description

This Business Component method encodes the inputted data using GID encode type. It does not create any records in DELMIA Apriso. All possible representations with the inputted data will be generated.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | BitSize | Integer | Yes | Bit size (-1, 96). |
| Input | GeneralManagerNumber | Integer | No | General Manager Number. |
| Input | ObjectClass | Integer | No | Object Class. |
| Input | SerialNumber | Char | Yes | Serial Number. |
| Output | BinaryString | Char | No | The Binary representation of the EPC tag. |
| Output | HexString | Char | No | The Hexadecimal representation of the EPC tag. |
| Output | TagEncodingString | Char | No | The Tag Encoding representation of the EPC tag. |
| Output | PureIdentityString | Char | No | The Pure Identity representation of the EPC tag. |
| Output | LegacyString | Char | No | The Legacy representation of the EPC tag. |
| Output | OnsString | Char | No | The ONS of the EPC tag. |

## System Processing

- System searches for Parameters (BitSize). If they are not found then an error is displayed: "Parameters Not Found".  
- System validates GeneralManagerNumber. 
- System validates ObjectClass. 
- System validates SerialNumber. 
- If BitSize != -1: 
 
- System creates Binary, 
- System creates Hex, 
- System creates TagEncoding, 
- System creates PureIdentity. 
 
- System creates Ons. 
- System creates Legacy.
