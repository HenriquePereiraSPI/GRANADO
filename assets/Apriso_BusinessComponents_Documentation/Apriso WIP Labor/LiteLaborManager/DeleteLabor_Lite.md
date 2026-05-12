# DeleteLabor_Lite

**Category:** Apriso/WIP/Labor
**Class:** `FlexNet.BusinessFacade.LiteLabor.LiteLaborManager`
**Assembly:** `FlexNet.BusinessFacade.LiteLabor`
**Status:** Active
**Keywords:** Delete, Lite, DeleteLabor, DeleteLabor_Lite, Labor, LiteLabor

## Description

Deletes a LITE_LABOR record.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | LiteLaborID | Integer | Yes | Lite Labor ID. |

## Validations

Validation fails if:
 
 
- The LITE_LABOR record does not exist, or is not active.

## System Processing

- Inputs are run through all validations. 
- The LITE_LABOR record is deleted.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| LITE_LABOR | All | LiteLaborID (record deleted) |
