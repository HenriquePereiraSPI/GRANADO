# DeleteFlatFileFieldTranslation

**Category:** Apriso/Common/Utility
**Class:** `FlexNet.BusinessFacade.FlatFileDecoding.Decoder`
**Assembly:** `FlexNet.BusinessFacade.FlatFileDecoding.dll`
**Status:** Active
**Keywords:** This business component deletes the record in FLAT_FILE_FIELD_TRANSLATION table for the specified FlatFileFieldTranslationID

## Description

This business component method deletes the record in FLAT_FILE_FIELD_TRANSLATION table for the specified FlatFileFieldTranslationID

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | FlatFileFieldTranslationID | Integer | Yes | Unique identifier for the flat file field translation to be deleted. |

## System Processing

System deletes the record in FLAT_FILE_FIELD_TRANSLATION table for the specified FlatFileFieldTranslationID

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| FLAT_FILE_FIELD_TRANSLATION |  | Inputted FlatFileFieldTranslationID |
