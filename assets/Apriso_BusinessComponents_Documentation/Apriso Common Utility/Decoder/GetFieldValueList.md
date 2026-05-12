# GetFieldValueList

**Category:** Apriso/Common/Utility
**Class:** `FlexNet.BusinessFacade.FlatFileDecoding.Decoder`
**Assembly:** `FlexNet.BusinessFacade.FlatFileDecoding.dll`
**Status:** Active

## Description

This business component returns a list of the same size and same order as the input FlatFileFieldIDList, with the corresponding value decoded and translated from the CodeString

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | FlatFileFieldIDList | ListofInteger | Yes | List of FLAT_FILE_FIELD.ID |
| Input | CodeString | Char | No | The flat file message to be used for decoding. |
| Output | ValueList | ListofChar | No | Returns list of values or translated values corresponding to the list of FLAT_FILE_FIELD.ID from input parameter |

## Validations

- System verifies the CodeString is not empty 
-  

System verifies the FlatFileFieldIDList contains one or more values.

## System Processing

- System removes carriage return character from CodeString. 
- For each FlatFileField in the list, this BC will: 
 
- If FlatFileDefinition.IsFixedLength 
 
- MaskedString = Apply FlatFileField.Mask to the CodeString 
 
- Else 
 
- MaskedString = Crop CodeString between the nth and (n+1)th occurrence of FlatFileDefinition.FieldDelimiter, where n is FlatFileField.FieldNumber. May be an empty string if, for example, CodeString contains less than n occurrences of the delimiter. The delimiters themselves are not part of MaskedString 
 
- If FlatFileField.IsTranslated 
 
- For each FlatFileFieldTranslation in FlatFileField 
 
- If MaskedString = FromValue 
 
- Add FlatFileFieldTranslation.ToValue to ValueList and finish the loop 
 
 
- If MaskedValue is not found in the translation 
 
 
- Add empty string to ValueList 
 
 
 
- Else 
 
- Add MaskedString to ValueList
