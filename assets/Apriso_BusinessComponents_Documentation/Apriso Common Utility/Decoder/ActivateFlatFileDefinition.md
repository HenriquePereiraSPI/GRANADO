# ActivateFlatFileDefinition

**Category:** Apriso/Common/Utility
**Class:** `FlexNet.BusinessFacade.FlatFileDecoding.Decoder`
**Assembly:** `FlexNet.BusinessFacade.FlatFileDecoding.dll`
**Status:** Active

## Description

This Business Component method is used to set RevisionStatus to Active in the FLAT_FILE_DEFINITION table for the specified FlatFileDefinitionID.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | FlatFileDefinitionId | Integer | Yes | The unique identifier for the existing flat file definition that is to be activated. |

## Validations

- The specified flat file definition must exist. 
- There must be no overlapping validity date range between different revisions of the same definition name.

## System Processing

The system updates RevisionStatusID to 1 (Active) in the FLAT_FILE_DEFINITION for the specified FlatFileDefinitionId.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| FLAT_FILE_DEFINITION | RevisionStatusID | '1' |
