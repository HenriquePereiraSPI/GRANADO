# DeleteFlatFileFieldTranslationforFlatFileFieldID

**Category:** Apriso/Common/Utility
**Class:** `FlexNet.BusinessFacade.FlatFileDecoding.Decoder`
**Assembly:** `FlexNet.BusinessFacade.FlatFileDecoding.dll`
**Status:** Active

## Description

This Business Component deletes all records in FLAT_FILE_FIELD_TRANSLATION table for the specified FlatFileFieldID.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | FlatFileFieldID | Integer | Yes | Unique identifier for the flat file field links to the flat file field translations to be deleted. |

## System Processing

System deletes all records in FLAT_FILE_FIELD_TRANSLATION table for the specified FlatFileFieldID

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| FLAT_FILE_FIELD_TRANSLATION |  | Inputted FlatFileFieldID |
