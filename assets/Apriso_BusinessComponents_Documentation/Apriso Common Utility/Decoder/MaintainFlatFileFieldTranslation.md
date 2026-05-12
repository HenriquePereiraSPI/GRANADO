# MaintainFlatFileFieldTranslation

**Category:** Apriso/Common/Utility
**Class:** `FlexNet.BusinessFacade.FlatFileDecoding.Decoder`
**Assembly:** `FlexNet.BusinessFacade.FlatFileDecoding.dll`
**Status:** Active

## Description

This BC updates FLAT_FILE_FIELD_TRANSLATION table for the specified FlatFileFieldTranslationID or inserts new record

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | FlatFileFieldTranslationID | Integer | Yes | Unique Identifier for this flat file field translation. |
| Input | FlatFileFieldID | Integer | Yes | Identifier of a flat file field this flat file field translation is linked to. |
| Input | FromValue | Char | No | The value to be translated rom. |
| Input | ToValue | Char | No | The value to be translated to. |
| Output | CreatedFlatFileFieldTranslationID | Integer | No | New or existing ID for which the flat file field translation record was added or updated respectively |

## System Processing

- FLAT_FILE_FIELD.IsTranslated must be true 
- FromValue and ToValue must be provided 
 
- There cannot be two FLAT_FILE_FIELD_TRANSLATION records with the same FlatFileFieldID and FromValue

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| FLAT_FILE_FIELD_TRANSLATION | FlatFileFieldID | Inputted FlatFileFieldID |
|  | FromValue | Inputted FromValue |
|  | ToValue | Inputted ToValue |
