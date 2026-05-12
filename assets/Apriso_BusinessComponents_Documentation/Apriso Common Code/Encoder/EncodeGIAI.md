# EncodeGIAI

**Category:** Apriso/Common/Code
**Class:** `FlexNet.BusinessFacade.EPC.EncodeDecode.Encoder`
**Assembly:** `FlexNet.BusinessFacade.EPC.EncodeDecode.dll`
**Status:** Active
**Keywords:** EPC, DOD, RFID, Encode

## Description

This Business Component method encodes the inputted data using GIAI encode type. It does not create any records in DELMIA Apriso. All possible representationse with the inputted data will be generated.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | BitSize | Integer | Yes | Bit size (-1, 96 or 202). |
| Input | Filter | Integer | Yes | Filter or -1. |
| Input | CompanyPrefix | Char | No | Company Prefix or empty. |
| Input | IndividualAssetReference | Char | No | Individual Asset Reference. |
| Input | EanUccGIAI | Char | No | EANUCC GIAI or empty. |
| Input | CompanyPrefixLength | Integer | No | Company Prefix length or -1. |
| Output | BinaryString | Char | No | The Binary representation of the EPC tag. |
| Output | HexString | Char | No | The Hexadecimal representation of the EPC tag. |
| Output | TagEncodingString | Char | No | The Tag Encoding representation of the EPC tag. |
| Output | PureIdentityString | Char | No | The Pure Identity representation of the EPC tag. |
| Output | LegacyString | Char | No | The Legacy representation of the EPC tag. |
| Output | OnsString | Char | No | The ONS of the EPC tag. |

## System Processing

- If CompanyPrefix != null then CompanyPrefixLength = CompanyPrefix.length 
- System searches for Parameters (BitSize, CompanyPrefixLength). If they are not found then an error is displayed: "Parameters Not Found" 
- If EanUcc is provided and there are enough parameters, then: 
 
- System extracts CompanyPrefix and IndividualAssetReference. 
 
- If possible, system validates CompanyPrefix. 
- If possible, system validates IndividualAssetReference. 
- If EanUcc is not provided and CompanyPrefix has been provided then: 
 
- System builds EanUcc. 
 
- If there are BitSize, Filter, CompanyPrefix, IndividualAssetReference: 
 
- System validates Filter, 
- System creates Binary, 
- System creates Hex, 
- System creates TagEncoding. 
 
- If there are CompanyPrefix and IndividualAssetReference: 
 
- System creates PureIdentity, 
- System creates Ons. 
 
- If theer is EanUcc: 
 
- System creates Legacy.
