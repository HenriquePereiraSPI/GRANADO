# EncodeSGTIN

**Category:** Apriso/Common/Code
**Class:** `FlexNet.BusinessFacade.EPC.EncodeDecode.Encoder`
**Assembly:** `FlexNet.BusinessFacade.EPC.EncodeDecode.dll`
**Status:** Active
**Keywords:** EPC, DOD, RFID, Encode

## Description

This Business Component encodes the inputted data using SGTIN encode type. It does not create any records in DELMIA Apriso. All possible representations with the inputted data will be generated.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | BitSize | Integer | Yes | Bit size (-1, 96 or 198). |
| Input | Filter | Integer | Yes | Filter or -1. |
| Input | CompanyPrefix | Char | No | Company Prefix or empty. |
| Input | ItemReference | Char | No | Item Reference or empty. |
| Input | EanUccGTIN14 | Char | No | EANUCC GTIN14 or empty. |
| Input | CompanyPrefixLength | Integer | No | Company Prefix length or -1. |
| Input | SerialNumber | Char | Yes | Serial Number or empty. |
| Output | BinaryString | Char | No | The Binary representation of the EPC tag. |
| Output | HexString | Char | No | The Hexadecimal representation of the EPC tag. |
| Output | TagEncodingString | Char | No | The Tag Encoding representation of the EPC tag. |
| Output | PureIdentityString | Char | No | The Pure Identity representation of the EPC tag. |
| Output | LegacyString | Char | No | The Legacy representation of the EPC tag. |
| Output | OnsString | Char | No | The ONS of the EPC tag. |

## System Processing

- If CompanyPrefix != null then CompanyPrefixLength = CompanyPrefix.length  
- If SerialNumber == null 
 
- Invalid Serial Number. 
 
- Search for Parameters (BitSize, CompanyPrefixLength). If it is not found then an error is displayed: "Parameters Not Found".  
- If EanUccGTIN14 is provided and there are enough parameters: 
 
- Validate EanUccGTIN14, 
- Extract CompanyPrefix and ItemReference. 
 
- If possible, system validates CompanyPrefix (*). 
- If possible, system validates ItemReference (*). 
- If possible, system validates SerialNumber (*). 
- If EanUccGTIN14 is not provided and CompanyPrefix and ItemReference has been provided: 
 
- Build EanUccGTIN14. 
 
- If BitSize, Filter, CompanyPrefix and ItemReference have been provided: 
 
- Validate Filter, 
- Create Binary, 
- Create Hex, 
- Create TagEncoding. 
 
- If there are CompanyPrefix and ItemReference: 
 
- Create PureIdentity, 
- Create Ons. 
 
- If there is EanUccGTIN14; 
 
- Create Legacy. 
 
 

* - Based on the inputs provided to the BC, some validations cannot be performed. For example, if the BC is invoked and only the EANUCCGTIN14 has been provided, the BC still can generate the Legacy representation but it will not be able to validate the Company Prefix.
