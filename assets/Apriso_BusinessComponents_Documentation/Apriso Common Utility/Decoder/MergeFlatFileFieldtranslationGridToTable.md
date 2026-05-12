# MergeFlatFileFieldtranslationGridToTable

**Category:** Apriso/Common/Utility
**Class:** `FlexNet.BusinessFacade.FlatFileDecoding.Decoder`
**Assembly:** `FlexNet.BusinessFacade.FlatFileDecoding.dll`
**Status:** Active

## Description

This business component deletes all records in FLAT_FILE_FIELD_TRANSLATION for the specified FlatFileFieldID then inserts the specified list of translation values (FromValueList and ToValueList).

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | FlatFileFieldID | Integer | Yes | Identifier of a flat file field the flat file translations are for. |
| Input | FromValueList | ListOfChar | Yes | List of values to be translation from. |
| Input | ToValueList | ListOfChar | Yes | List of values to be translation to that correspond to the values in the same order as in FromValueList. |

## Validations

- FLAT_FILE_FIELD.IsTranslated for the specified FlatFileFieldID must be true. 
- FromValueList and ToValueList must have one or more values

## System Processing

- Deletes all records in FLAT_FILE_FIELD_TRANSLATION for the specified FlatFileFieldID. 
- There cannot be two FLAT_FILE_FIELD_TRANSLATION records with the same FlatFileFieldID and FromValue 
- For each value in FromValueList 
 
- Insert a new record to FLAT_FILE_FIELD_TRANSLATION with FromValue and ToValue for FlatFileFieldID

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| FLAT_FILE_FIELD_TRANSLATION | FlatFileFieldID | Inputted FlatFileFieldID |
|  | FromValue | Inputted FromValue |
|  | ToValue | Inputted ToValue |
