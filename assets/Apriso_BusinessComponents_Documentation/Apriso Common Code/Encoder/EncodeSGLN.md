# EncodeSGLN

**Category:** Apriso/Common/Code
**Class:** `FlexNet.BusinessFacade.EPC.EncodeDecode.Encoder`
**Assembly:** `FlexNet.BusinessFacade.EPC.EncodeDecode.dll`
**Status:** Active
**Keywords:** EPC, DOD, RFID, Encode

## Description

This Business Component method encodes the inputted data using an SGLN encode type. It does not create any records in DELMIA Apriso. All possible representations with the inputted data will be generated.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | BitSize | Char | Yes | Bit size (-1, 96 or 195). |
| Input | Filter | Char | Yes | Filter or -1. |
| Input | CompanyPrefix | Char | No | Company Prefix or empty. |
| Input | LocationReference | Char | No | Location Reference or empty. |
| Input | EanUccGLN | Char | No | EANUCC GLN or empty. |
| Input | CompanyPrefixLength | Integer | No | Company Prefix length or -1. |
| Input | ExtensionComponent | Char | Yes | Extension Component or empty. |
| Output | BinaryString | Char | No | The Binary representation of the EPC tag. |
| Output | HexString | Char | No | The Hexadecimal representation of the EPC tag. |
| Output | TagEncodingString | Char | No | The Tag Encoding representation of the EPC tag. |
| Output | PureIdentityString | Char | No | The Pure Identity representation of the EPC tag. |
| Output | LegacyString | Char | No | The Legacy representation of the EPC tag. |
| Output | OnsString | Char | No | The ONS of the EPC tag. |

## System Processing

- If CompanyPrefix != null then CompanyPrefixLength = CompanyPrefix.length 
- If ExtensionComponent == null 
 
- Invalid Extension Component. 
 
- System searches for Parameters (BitSize, CompanyPrefixLength). If they are not found then an error is displayed: "Parameters Not Found". 
- If EanUccGLN is provided: 
 
- System validates EanUccGLN. If theer are not enough parameters:  
 
 

 
 
 
 
- System extracts CompanyPrefix and ItemReference. 
 
 
 
 
 
- If possible, system validates CompanyPrefix. 
- If possible, system validates LocationReference. 
- If possible, system validates ExtensionComponent. 
- If EanUccGLN is not provided and CompanyPrefix has been provided: 
 
- System builds EanUccGLN. 
 
- If there are BitSize, Filter, CompanyPrefix, LocationReference and ExtensionComponent: 
 
- System validates Filter, 
- System creates Binary, 
- System creates Hex, 
- System creates TagEncoding. 
 
- If there are CompanyPrefix and LocationReference and ExtensionComponent: 
 
- System creates PureIdentity, 
- System creates Ons. 
 
- If theer is EanUccGLN: 
 
- System creates Legacy.
