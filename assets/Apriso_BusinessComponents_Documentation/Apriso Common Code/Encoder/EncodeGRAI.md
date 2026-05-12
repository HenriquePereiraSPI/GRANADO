# EncodeGRAI

**Category:** Apriso/Common/Code
**Class:** `FlexNet.BusinessFacade.EPC.EncodeDecode.Encoder`
**Assembly:** `FlexNet.BusinessFacade.EPC.EncodeDecode.dll`
**Status:** Active
**Keywords:** EPC, DOD, RFID, Encode

## Description

This Business Component method encodes the inputted data using GRAI encode type. It does not create any records in DELMIA Apriso. All possible representations with the inputted data will be generated.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | BitSize | Integer | Yes | Bit size (-1, 96 or 170). |
| Input | Filter | Integer | Yes | Filter or -1. |
| Input | CompanyPrefix | Char | No | Company Prefix or empty. |
| Input | AssetType | Char | No | Asset Type. |
| Input | EanUccGRAI | Char | No | EANUCC GRAI or empty. |
| Input | CompanyPrefixLength | Integer | No | Company Prefix Length. |
| Input | SerialNumber | Char | No | Serial Number. |
| Output | BinaryString | Char | No | The Binary representation of the EPC tag. |
| Output | HexString | Char | No | The Hexadecimal representation of the EPC tag. |
| Output | TagEncodingString | Char | No | The Tag Encoding representation of the EPC tag. |
| Output | PureIdentityString | Char | No | The Pure Identity representation of the EPC tag. |
| Output | LegacyString | Char | No | The Legacy representation of the EPC tag. |
| Output | OnsString | Char | No | The ONS of the EPC tag. |

## System Processing

- If CompanyPrefix != null then CompanyPrefixLength = CompanyPrefix.length 
- System searches for Parameters (BitSize, CompanyPrefixLength). If they are not found then an error is displayed: "Parameters Not Found". 
- If EanUcc is provided: 
 
- System validates EanUccGRAI. If there areenough parameters: 
 
 

 

 
 
 
 
- System extracts the CompanyPrefix and AssetType and SerialNumber. 
 
 
 
 
 
 
- If possible, system validates CompanyPrefix. 
- If possible, system validates AssetType. 
- If possible, system validates SerialNumber. 
- If EanUccGRAI is not provided and CompanyPrefix has been provided then:  
 
- System builds EanUccGRAI. 
 
- If BitSize, Filter, CompanyPrefix, AssetType and SerialNumber have been provided then: 
 
- System validates Filter, 
- System creates Binary, 
- System creates Hex, 
- System creates TagEncoding. 
 
- If theer are CompanyPrefix and LocationReference and ExtensionComponent: 
 
- System creates PureIdentity, 
- System creates Ons. 
 
- If there is EanUccGRAI: 
 
- System creates Legacy.
