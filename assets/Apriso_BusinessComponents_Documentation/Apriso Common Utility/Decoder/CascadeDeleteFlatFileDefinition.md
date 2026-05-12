# CascadeDeleteFlatFileDefinition

**Category:** Apriso/Common/Utility
**Class:** `FlexNet.BusinessFacade.FlatFileDecoding.Decoder`
**Assembly:** `FlexNet.BusinessFacade.FlatFileDecoding.dll`
**Status:** Active

## Description

This Business Component method is used to delete the flat file definition and all the records in the child tables for the specified FlatFileDefinitionID.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | FlatFileDefinitionID | Integer | Yes | The unique identifier for the flat file definition to be deleted. |

## Validations

- The system validates the flat file definition is in the Active status.

## System Processing

- The system deletes the record in the FLAT_FILE_DEFINITION table for the specified FlatFileDefinitionID and all the related records in the child tables FLAT_FILE_ENTITY, FLAT_FILE_FIELD, and FLAT_FILE_FIELD_TRANSLATION for the specified FlatFileDefinitionID.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| FLAT_FILE_DEFINITION |  | The inputted FlatFileDefinitionID. |
| FLAT_FILE_ENTITY |  | The inputted FlatFileDefinitionID. |
| FLAT_FILE_FIELD |  | The inputted FlatFileDefinitionID. |
| FLAT_FILE_FIELD_TRANSLATION |  | The inputted FlatFileDefinitionID. |
