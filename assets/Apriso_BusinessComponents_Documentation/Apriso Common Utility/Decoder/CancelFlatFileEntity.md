# CancelFlatFileEntity

**Category:** Apriso/Common/Utility
**Class:** `FlexNet.BusinessFacade.FlatFileDecoding.Decoder`
**Assembly:** `FlexNet.BusinessFacade.FlatFileDecoding.dll`
**Status:** Active

## Description

This Business Component method sets RevisionStatus to Cancel in the FLAT_FILE_ENTITY table for the specified FlatFileEntityID.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | FlatFileEntityId | Integer | Yes | The unique identifier for an existing flat file entity that is to be canceled. |

## System Processing

- The system updates RevisionStatusID to 2 (Cancel) in FLAT_FILE_ENTITY for the specified FlatFileEntityId.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| FLAT_FILE_ENTITY | RevisionStatusID | 2 |
