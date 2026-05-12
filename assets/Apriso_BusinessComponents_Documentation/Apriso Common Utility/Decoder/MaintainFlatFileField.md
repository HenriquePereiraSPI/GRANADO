# MaintainFlatFileField

**Category:** Apriso/Common/Utility
**Class:** `FlexNet.BusinessFacade.FlatFileDecoding.Decoder`
**Assembly:** `FlexNet.BusinessFacade.FlatFileDecoding.dll`
**Status:** Active

## Description

This Business Component updates FLAT_FILE_FIELD table for the specified FlatFileFieldID or inserts new record.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | FlatFileFieldID | Integer | Yes | Unique Identifier for this flat file field. |
| Input | Name | Char | Yes | Name of the field |
| Input | Description | Char | No | Description of the field |
| Input | FlatFileEntityID | Char | Yes | Identifier of a flat file entity this flat file field is linked to. |
| Input | Mask | Char | Yes | Mask for this field if fixed length. |
| Input | FieldNumber | Integer | No | Field number if delimited. |
| Input | IsTranslated | Boolean | Yes | Specified if translation is defined. |
| Output | CreatedFlatFileFieldID | Integer | No | New or existing ID for which the flat file field record was added or updated respectively |

## Validations

- Name and FlatFileEntityID must be specified 
- The length of Mask cannot be longer than 2000.

## System Processing

- If the Flat File Definition has IsFixedLength true. 
 
- Mask must be defined of length LineCount*LineLength 
- Verify length of Mask must be less than or equal max length of Mask column 
- FieldNumber is ignored 
 
- Otherwise 
 
- Mask is ignored 
- FieldNumber must be defined >= 0

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| FLAT_FILE_FIELD | Name | Inputted Name |
|  | FlatFileEntityID | Inputted FlatFileEntityID |
|  | Medium | Inputted FlatFileEntityID |
|  | Mask | Inputted Mask |
|  | FieldNumber | Inputted FieldNumber |
|  | IsTranslated | Inputted IsTranslated |
