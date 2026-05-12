# CreateUnitForQualityDefect

**Category:** Apriso/Common/Characteristic
**Class:** `FlexNet.BusinessFacade.Characteristic.UnitCreator`
**Assembly:** `FlexNet.BusinessFacade.Quality2.dll`
**Status:** Deprecated

## Description

The method is used to create a UnitID and to link the ID to the Quality Defect entity.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | QualityDefectID | Integer | Yes | Unique identifier of a Defect for which the unit is to be created. |
| Output | UnitID | Integer | No | Unique identifier of a newly created Unit. |

## Validations

QualityDefectID (ID field) must exist in QUALITY_DEFECT table.

## System Processing

If unit identifier is already assigned to the Defect (QUALITY_DEFECT.UnitID is not NULL) then the method populates a UnitID parameter with that value.
 

Else the method creates new unit identifier, assigns it to the Defect and populates UnitID parameter with that value.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| QUALITY_DEFECT | UnitID | Inputted UnitID of a newly created entity. |
