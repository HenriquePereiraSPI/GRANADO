# EncodeSSCC

**Category:** Apriso/Common/Code
**Class:** `FlexNet.BusinessFacade.EPC.EncodeDecode.Encoder`
**Assembly:** `FlexNet.BusinessFacade.EPC.EncodeDecode.dll`
**Status:** Active
**Keywords:** EPC, DOD, RFID, Encode

## Description

This Business Component method encodes the inputted data using an SSCC encode type. It does not create any records in DELMIA Apriso. All possible representations with the inputted data will be generated.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | BitSize | Integer | Yes | Bit size (-1, 96). |
| Input | Filter | Integer | Yes | Filter or -1. |
| Input | CompanyPrefix | Char | No | Company Prefix or empty. |
| Input | SerialReference | Char | Yes | Serial Number or empty. |
| Input | EanUccSSCC | Char | No | EANUCC SSCC or empty. |
| Input | CompanyPrefixLength | Integer | No | Company Prefix length or -1. |
| Output | BinaryString | Char | No | The Binary representation of the EPC tag. |
| Output | HexString | Char | No | The Hexadecimal representation of the EPC tag. |
| Output | TagEncodingString | Char | No | The Tag Encoding representation of the EPC tag. |
| Output | PureIdentityString | Char | No | The Pure Identity representation of the EPC tag. |
| Output | LegacyString | Char | No | The Legacy representation of the EPC tag. |
| Output | OnsString | Char | No | The ONS of the EPC tag. |

## System Processing

- If CompanyPrefix != null 
 
- CompanyPrefixLength = CompanyPrefix.length 
 
- If SerialNumber != null 
 
- Invalid Serial Number. 
 
- System searches for Parameters (BitSize, CompanyPrefixLength). If it is not then an error is displayed: "Parameters Not Found". 
- If EanUccSSCC provided, system validates EanUccSSCC. If there are not enough parameters: 
 
- System extracts CompanyPrefix and SerialReference.  
 
- If possible, system validates CompanyPrefix. 
- If possible, system validates SerialReference. 
- If EanUccSSCC is not provided and CompanyPrefix and SerialReference have been provided then: 
 
- System builds EanUcc. 
 
- If there are BitSize, Filter, CompanyPrefix and SerialReference: 
 
- System validates Filter, 
- System creates Binary, 
- System creates Hex, 
- System creates TagEncoding. 
 
- If there are CompanyPrefix and SerialReference: 
 
- System creates PureIdentity, 
- System creates Ons. 
 
- If there is EanUccSSCC: 
 
- System creates Legacy.
