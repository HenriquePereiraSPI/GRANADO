# UnAssignImageFromGroup

**Category:** Apriso/Quality/Defect
**Class:** `FlexNet.Maintenance.BusinessRules.Quality.ImageManager`
**Assembly:** `FlexNet.Maintenance.BusinessRules.dll`
**Status:** Active
**Keywords:** Quality Defect Tracking Image Visual Assign Remove

## Description

This Business Component method removes the assignment between the Group and the Document with a bitmap image.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | Group | Integer | Yes | Group name to unlink the Image from. |
| Input | GroupType | Short | Yes | Group type to unlink the Image from. |
| Input | GroupClassID | Integer | Yes | Group class to unlink the Image from. |
| Input | ImageName | Char | Yes | Name of the Image to unlink from the Group |

## Validations

- System validates that the Group exists for the specified Group, GroupType and GroupClassID. 
- System validates that assignment of Image and Group exists in the UNIT_DOCUMENT table.

## System Processing

- System removes the record from the UNIT_DOCUMENT table for the inputted ImageName and Group.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| UNIT_DOCUMENT | UnitID | GROUP_.UnitID |
| UNIT_DOCUMENT | Name | ImageName |
