# HexToBinary

**Category:** Apriso/Common/Code
**Class:** `FlexNet.BusinessFacade.EPC.Translation.Translator`
**Assembly:** `FlexNet.BusinessFacade.EPC.Translation.dll`
**Status:** Active

## Description

Receives a tag in hexadecimal and converts it to its binary representation.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | hexString | Char | Yes | Hexadecimal string to be transformed to binary |
| Output | binaryString | Char | No | Returns the binary representation |

## System Processing

- System validates hexString is a hexadecimal string. 
- For each char c in hexString 
 
- binaryString = binaryString + Binary(c);  
 
- System returns binaryString

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| EPC_TAG |  |  |
| EPC_TAG_GRAI |  |  |
