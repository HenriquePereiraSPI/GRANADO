# DeleteFlatFileField

**Category:** Apriso/Common/Utility
**Class:** `FlexNet.BusinessFacade.FlatFileDecoding.Decoder`
**Assembly:** `FlexNet.BusinessFacade.FlatFileDecoding.dll`
**Status:** Active

## Description

This business component deletes record in FLAT_FILE_FIELD table for the specified FlatFileFieldID.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | FlatFileFieldID | Integer | Yes | Unique identifier for the flat file field to be deleted. |

## System Processing

Deletes record in FLAT_FILE_FIELD table for the specified FlatFileFieldID.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| FLAT_FILE_FIELD |  | Inputted FlatFileFieldID |
