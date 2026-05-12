# BinaryToHex

**Category:** Apriso/Common/Code
**Class:** `FlexNet.BusinessFacade.EPC.Translation.Translator`
**Assembly:** `FlexNet.BusinessFacade.EPC.Translation.dll`
**Status:** Active

## Description

This Business Component is used to receive a tag in binary representation and convert it to its hexadecimal representation.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | binaryString | Char | Yes | The binary string to be transformed to the HexBinary string to be transformed to the Hex. |
| Output | hexString | Char | No | Returns the hexadecimal representation. |

## System Processing

- The system validates binaryString is not empty. 
- The system validates binaryString is a binary string. 
- The system adjusts the binaryString length (making sure that the size is dividable by 4). 
 
- padLength = binaryString.Length % 4 
- binaryString = binaryString.PadLeft(binaryString.Length + (4-padLength),'0') 
 
- The system converts binaryString to hexString.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| EPC_TAG |  |  |
| EPC_TAG_GRAI |  |  |
