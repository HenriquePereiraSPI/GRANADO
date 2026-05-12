# GetEncodingType

**Category:** Apriso/Common/Code
**Class:** `FlexNet.BusinessFacade.EPC.EncodeDecode.Decoder`
**Assembly:** `FlexNet.BusinessFacade.EPC.EncodeDecode.dll`
**Status:** Active

## Description

This Business Component method returns the encoding type for a given tag. It also returns all possible representations for the inputted tag. If the encoding type cannot be determined, GetEncodingType will not return an error message.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | Tag | Char | No | DoD Tag in any representation. |
| Output | EncodingType | Char | No | EncodingType. Valid values are: GID, SGTIN, SGLN, SSCC, GRAI, GIAI, DOD. The encoding type can also be empty if DELMIA Apriso could not match the tag to any supported format. |
| Output | Binary | Char | No | Binary representation. |
| Output | Hex | Char | No | Hex representation. |
| Output | TagEncoding | Char | No |  |
| Output | PureIdentity | Char | No | Pure identity representation. |
| Output | Legacy | Char | No | Legacy representation. |
| Output | Ons | Char | No | Legacy representation. |

## System Processing

- System decodes the given tag. 
- System returns all possible representations for the give tag and the encoding type.
