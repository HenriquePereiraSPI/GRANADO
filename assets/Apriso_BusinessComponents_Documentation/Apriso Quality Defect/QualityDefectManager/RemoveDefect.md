# RemoveDefect

**Category:** Apriso/Quality/Defect
**Class:** `FlexNet.BusinessFacade.Quality.QualityDefectManager`
**Assembly:** `FlexNet.BusinessFacade.Quality2`
**Status:** Active

## Description

The method is used to remove Quality Defect and un-assign it from the entity it is currently assigned to.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | QualityDefectID | Integer | Yes | Identifier of a Quality Defect record to be removed. |

## Validations

QualityDefectID must exist in QUALITY_DEFECT table.

## System Processing

- Finds the Quality Defect based on QualityDefectID. 
- Removes all the links between the Defect and corresponding entity (Unit Characteristic, Unit Attachment). 
- Removes the Quality Defect and all its details (locations, dimensions, etc.).

## Pre-Conditions

Pre: Valid Quality Defects exists in the system.
 

Post: Quality Defect is removed from the system.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| QUALITY_DEFECT | [All] |  |
| QUALITY_DEFECT_LOCATION | [All] |  |
| QUALITY_DEFECT_LOC_DIMENSION | [All] |  |
| UNIT | [All] |  |
| UNIT_CHARACTERISTIC | [All] |  |
| UNIT_ATTACHMENT | [All] |  |
