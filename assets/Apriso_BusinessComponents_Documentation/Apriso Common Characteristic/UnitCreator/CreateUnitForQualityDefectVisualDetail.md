# CreateUnitForQualityDefectVisualDetail

**Category:** Apriso/Common/Characteristic
**Class:** `FlexNet.BusinessFacade.Characteristic.UnitCreator`
**Assembly:** `FlexNet.BusinessFacade.Characteristic.dll`
**Status:** Deprecated
**Keywords:** Unit Characteristic, Quality Defect Visual Detail, Unit

## Description

The purpose of this method is to generate or retrieve a UnitID for a given Quality Defect Visual Detail. This UnitID can then be used to link characteristics to the given Quality Defect Visual Detail.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | QualityDefectVisualDetailID | Integer | Yes | The Quality Defect Visual Detail for which the UniID is greated. |
| Output | UnitID | Integer | No | Created UnitID. |

## Validations

System verifies that a Quality Defect Visual Detail record is found for the inputted QualityDefectVisualDetailID. If record is not found, an error message is displayed.

## System Processing

- System retrieves the Quality Defect Visual Detail record from QUALITY_DEFECT_VISUAL_DETAIL table using the input. 
- System checks if a UnitID is linked to this Quality Defect Visual Detail: 
 
- if a UnitID is already linked to the Quality Defect Visual Detail, then this UnitID is outputted. 
- otherwise, the system generates a UnitID for this Quality Defect Visual Detail: system creates a record in UNIT table and updates the QUALITY_DEFECT_VISUAL_DETAIL.UnitID with the UnitID that was created. 
 
- System outputs the UnitID.

## Pre-Conditions

The Quality Defect Visual Detail exists.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| QUALITY_DEFECT_VISUAL_DETAIL | ID | Inputted QualityDefectVisualDetailID. |
|  | UnitID | Created UnitID. |
| UNIT | ID | Created UnitID. |
