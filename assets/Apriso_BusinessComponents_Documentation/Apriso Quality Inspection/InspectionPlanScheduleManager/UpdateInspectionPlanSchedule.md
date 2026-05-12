# UpdateInspectionPlanSchedule

**Category:** Apriso/Quality/Inspection
**Class:** `FlexNet.BusinessFacade.Quality.InspectionPlanScheduleManager`
**Assembly:** `FlexNet.BusinessFacade.Quality2`
**Status:** Active

## Description

Updates Inspection Plan Schedule runtime values such as:
 
 
- Inspection Counter 
- Date of the last execution.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | InspectionPlanScheduleID | Integer | No | ID of the inspection plan schedule the runtime values are to be updated |
| Input | InspectionCounter | Integer | No | Inspection counter |
| Input | LastExecutedOn | DateTime | No | Date time of the last execution. |
| Input | Reset | Boolean | No | Flag indicating if Inspection Counter and LastExecutedOn should reset (set to null in database). |

## Validations

System validates that Inspection Plan Schedule exists for the inputted ID (INSPECTION_PLAN_SCHEDULE) and Inspection Counter is not less than 0.

## System Processing

-  After validations is done input parameters will be persisted into INSPECTION_PLAN_SCHEDULE.  
-  If Reset flag is set to true then regardless of the value of InspectionCounter and LastExecutedOn inputs the corresponding fields in INSPECTION_PLAN_SCHEDULE will be set to DB Null

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| INSPECTION_PLAN_SCHEDULE | InspectionCounter | Inputted InspectionCouner or DBNull if Reset falg is true |
|  | LastExecutedOn | Inputted LastExecutedOn or DBNull if Reset flag is true |
