# ActivateFlatFileEntity

**Category:** Apriso/Common/Utility
**Class:** `FlexNet.BusinessFacade.FlatFileDecoding.Decoder`
**Assembly:** `FlexNet.BusinessFacade.FlatFileDecoding.dll`
**Status:** Active

## Description

This Business Component method is used to set RevisionStatus to Active in the FLAT_FILE_ENTITY table for the specified FlatFileEntityID.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | FlatFileEntityId | Integer | Yes | The unique identifier for the existing flat file entity that is to be activated. |

## Validations

- The flat file entity specified must exist. 
- There must be no overlapping validity date range between different revisions of the same entity name. 
- The parent definition must be in the Active status. 
- DiscontinueDate must be greater than EffectiveDate. When DiscontinueDate is null, it means there is no expiration date. 
- The time span specified by EffectiveDate and DiscontinueDate must not overlap between revisions and must be within the time span of the parent definition.

## System Processing

The system updates RevisionStatusID to 1 (Active) in FLAT_FILE_ENTITY for the specified FlatFileEntityId.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| FLAT_FILE_ENTITY | RevisionStatusID | '1’ |
