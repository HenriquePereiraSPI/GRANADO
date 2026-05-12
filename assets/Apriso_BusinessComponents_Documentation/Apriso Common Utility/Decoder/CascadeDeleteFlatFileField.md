# CascadeDeleteFlatFileField

**Category:** Apriso/Common/Utility
**Class:** `FlexNet.BusinessFacade.FlatFileDecoding.Decoder`
**Assembly:** `FlexNet.BusinessFacade.FlatFileDecoding.dll`
**Status:** Active

## Description

This Business Component method is used to delete the record in the FLAT_FILE_FIELD table and all the related records in the FLAT_FILE_FIELD_TRANSLATION table for the specified FlatFileFieldID.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | FlatFileFieldID | Integer | Yes | The unique identifier for the flat file field to be deleted. |

## Validations

- The system verifies the parent entity is not in the Active status.

## System Processing

- The system deletes all the related records in the FLAT_FILE_FIELD_TRANSLATION table for the specified FlatFileFieldID. 
- The system deletes the record in the FLAT_FILE_FIELD table for the specified FlatFileFieldID.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| FLAT_FILE_FIELD |  | The inputted FlatFileFieldID. |
| FLAT_FILE_FIELD_TRANSLATION |  | The inputted FlatFileFieldID. |
