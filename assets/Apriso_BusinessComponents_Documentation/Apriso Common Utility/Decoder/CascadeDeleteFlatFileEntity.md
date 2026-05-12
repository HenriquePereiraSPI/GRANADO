# CascadeDeleteFlatFileEntity

**Category:** Apriso/Common/Utility
**Class:** `FlexNet.BusinessFacade.FlatFileDecoding.Decoder`
**Assembly:** `FlexNet.BusinessFacade.FlatFileDecoding.dll`
**Status:** Active

## Description

This Business Component method is used to delete all the records related to the flat file entity for the specified FlatFileEntityID.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | FlatFileEntityID | Integer | Yes | The unique identifier for the flat file entity to be deleted. |

## Validations

- The system validates the flat file entity is not in the Active status.

## System Processing

- The system deletes the record in the FLAT_FILE_ENTITY table for the specified FlatFileEntityID and all the related records in the child tables FLAT_FILE_FIELD and FLAT_FILE_FIELD_TRANSLATION for the specified FlatFileEntityID.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| FLAT_FILE_ENTITY |  | The inputted FlatFileEntityID. |
| FLAT_FILE_FIELD |  | The inputted FlatFileEntityID. |
| FLAT_FILE_FIELD_TRANSLATION |  | The inputted FlatFileEntityID. |
