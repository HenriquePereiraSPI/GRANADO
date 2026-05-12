# CreateUnitForInspectionPlan

**Category:** Apriso/Common/Characteristic
**Class:** `FlexNet.BusinessFacade.Quality.UnitCreator`
**Assembly:** `FlexNet.BusinessFacade.Quality2`
**Status:** Deprecated
**Keywords:** UnitID

## Description

The purpose of this Business Component is to generate or retrieve a UnitID for a given Inspection Plan. This UnitID can then be used to link characteristics to the given Inspection Plan.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | InspectionPlanID | Integer | Yes | Inspection Plan ID to create the Unit for. |
| Output | UnitID | Integer | No | Created or retrieved UnitID |

## Validations

System verifies that a Inspection Plan record is found for the inputted InspectionPlanID. If record is not found, an error message is displayed.

## System Processing

- System retrieves the Inspection Plan record from INSPECTION_PLAN table using the input. 
- System checks if a UnitID is linked to this Inspection Plan: 
 
- if a UnitID is already linked to the Inspection Plan, then this UnitID is outputted 
- else system generates a UnitID for this Inspection Plan: system creates a record in UNIT table and updates the INSPECTION_PLAN.UnitID with the UnitID just created 
 
- System outputs the UnitID.

## Pre-Conditions

The Inspection Plan exists.

## Extension Points

CreateUnitForInspectionPlan FlexNet.BusinessRules.Quality.Units.UnitCreator FlexNet.BusinessRules.Quality.Units.IUnitCreator Enables providing custom component to create unit in UNIT table.    CreateUnitForInspectionPlan FlexNet.BusinessRules.Quality.Units.UnitAssigner FlexNet.BusinessRules.Quality.Units.IUnitAssigner Enables providing custom component to assign a created unit into an entity such as Inspection Plan.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| INSPECTION_PLAN | UnitID | Inputted UnitID of a newly created entity |
|  | ID | Inputted InspectionPlanID (required input) |
| UNIT | ID | Outputted UnitID |
