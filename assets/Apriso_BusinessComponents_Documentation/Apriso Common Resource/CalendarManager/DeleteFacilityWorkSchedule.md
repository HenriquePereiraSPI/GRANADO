# DeleteFacilityWorkSchedule

**Category:** Apriso/Common/Resource
**Class:** `FlexNet.BusinessFacade.Resources.CalendarManager`
**Assembly:** `FlexNet.BusinessFacade.Resources.dll`
**Status:** Active

## Description

This method deletes a Facility's Work Schedule. It can be used in 2 different ways:
 
 
- If FacilityWorkScheduleID is not zero, the Business Component will try to find the specified record and delete it. If the record does not exist, an error will be returned, 
- If FacilityWorkScheduleID is zero, Facility must be provided. The Business Component will try to delete any record for the specified Facility and Pay Day. There will not be any error messages if the given date does not have any records. 
 

The DeleteBreakSchedule flag can be used to automatically delete all Break records that might exist for the Work Schedule. It will be applied in both scenarios.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | FacilityWorkScheduleID | Integer | No | Identifies the record to be deleted. |
| Input | Facility | Char | No | It can be used to delete all Work Schedules for a given Facility/Pay Day. |
| Input | PayDay | DateTime | No | It can be used to delete all Work Schedules for a given Facility/Pay Day. |
| Input | DeleteBreakSchedule | Boolean | No | When true, any Work Schedule Break records will also be deleted. |

## System Processing

- If FacilityWorkScheduleID != 0, 
 
 
- Validates Facility Work Schedule,  
- Checks if work schedule breaks exist,  
- If Yes and DeleteBreakSchedule = True,  
 
- Deletes Work_Schedule_break records, 
 
- Else 
 
- Error – Work Schedule has breaks, 
 
- Deletes Facility Work Schedule, 
 
 
- If FacilityWorkScheduleID == 0,  
 
 
- Validates Facility,  
- For all Work Schedule records where WORK_SCHEDULE.Facility = Facility and WORK_SCHEDULE.PayDay = PayDay,  
- Check if Work Schedule Breaks exist,  
- If Yes and DeleteBreakSchedule = True, 
 
- Deletes Work_Schedule_break records, 
 
- Else 
 
- Error – Work Schedule has breaks, 
 
- Deletes Facility Work Schedule.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| FACILITY_WORK_SCHEDULE | ID | Record is deleted. |
