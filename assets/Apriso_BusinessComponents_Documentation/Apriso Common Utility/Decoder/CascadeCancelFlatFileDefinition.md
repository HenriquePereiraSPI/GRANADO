# CascadeCancelFlatFileDefinition

**Category:** Apriso/Common/Utility
**Class:** `FlexNet.BusinessFacade.FlatFileDecoding.Decoder`
**Assembly:** `FlexNet.BusinessFacade.FlatFileDecoding.dll`
**Status:** Active

## Description

This Business Component method is used to set the revision status to Cancel in the FLAT_FILE_DEFINITION table and all the related child tables for the specified FlatFileDefinitionID.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | FlatFileDefinitionID | Integer | Yes | The unique identifier for an existing flat file definition that is to be canceled. |

## System Processing

- The system updates RevisionStatusID to 2 (Cancel) in the FLAT_FILE_DEFINITION table for the specified FlatFileDefintionID. 
- The system updates RevisionStatusID to 2 (Cancel) in the FLAT_FILE_ENTITY table for the specified FlatFileDefintionID.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| FLAT_FILE_DEFINITION | RevisionStatusID | 2 |
| FLAT_FILE_ENTITY | RevisionStatusID | 2 |
