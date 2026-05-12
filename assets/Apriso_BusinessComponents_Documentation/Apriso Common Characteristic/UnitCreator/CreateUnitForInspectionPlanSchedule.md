# CreateUnitForInspectionPlanSchedule

**Category:** Apriso/Common/Characteristic
**Class:** `FlexNet.BusinessFacade.Quality.UnitCreator`
**Assembly:** `FlexNet.BusinessFacade.Quality2`
**Status:** Deprecated
**Keywords:** Unit, Inspection Plan Schedule

## Description

The purpose of this Business Component is to generate or retrieve a UnitID for a given Inspection Plan Schedule. This UnitID can then be used to link characteristics to the given Inspection Plan Schedule.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | InspectionPlanScheduleID | Integer | Yes | Unique identifier of an Inspection Plan Schedule for which the entity is to be created. |
| Output | UnitID | Integer | No | Inputted UnitID of a newly created entity |

## Validations

System verifies that an Inspection Plan Schedule record is found for the inputted 

InspectionPlanScheduleID. If record is not found, an error message is displayed.

## System Processing

- System retrieves the Inspection Plan Schedule record from INSPECTION_PLAN_SCHEDULE table using the input. 
- System checks if a UnitID is linked to this Inspection Plan Schedule: 
 
- If a UnitId is already linked to the Inspection Plan Schedule, then this UnitID is outputted. 
- Else system generates a UnitID for this Inspection Plan Schedule: system creates a record in UNIT table and updates the INSPECTION_PLAN_SCHEDULE.UnitID with the UnitID just created. 
 
- System outputs the UnitID.

## Pre-Conditions

The Inspection Plan Schedule record exists.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| INSPECTION_PLAN_SCHEDULE | UnitID | Inputted UnitID of a newly created entity |
|  | ID | Inputted InspectionPlanScheduleID (required input) |
| UNIT | ID | Outputted UnitID |
