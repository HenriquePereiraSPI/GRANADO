# DeleteWorkCenterWorkSchedule

**Category:** Apriso/Common/Resource
**Class:** `FlexNet.BusinessFacade.Resources.CalendarManager`
**Assembly:** `FlexNet.BusinessFacade.Resources.dll`
**Status:** Active

## Description

This method deletes a work center's work schedule. It can be used in 2 different ways. If WorkCenterWorkScheduleID is not zero, the business component will try to find the specified record and delete it. If the record does not exist, an error will be returned.If WorkCenterWorkScheduleID is zero, Work Center must be provided. The business component will try to delete any record for the specified (Work Center,PayDay). There won't be any error messages if the given date does not have any records.The DeleteBreakSchedule flag can be used to automatically delete all break records that might exist for the work schedule. It will be applied in both scenarios.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | WorkCenterWorkScheduleID | Integer | No | Identifies the record to be deleted. |
| Input | WorkCenter | Char | No | It can be used to delete all work schedules for a given resource/payday. |
| Input | PayDay | DateTime | No | It can be used to delete all work schedules for a given resource/payday. |
| Input | DeleteBreakSchedule | Boolean | No | When true, any work schedule break records will also be deleted. |

## System Processing

- If WorkCenterWorkScheduleID != 0 
 
 
- Validate Work Center Work Schedule. 
- Check if work schedule breaks exist. 
- If Yes and DeleteBreakSchedule = True 
 
- Delete Work_Schedule_break records 
 
- Else 
 
- Error - Work Schedule has breaks. 
- Deletes Work Center Work Schedule. 
 
 
 
- If WorkCenterWorkScheduleID == 0 
 
 
- Validate Work Center 
- For all work schedule records where WorkSchedule.WorkCenter = WorkCenter and WorkSchedule.PayDay = PayDay 
- Check if work schedule breaks exist. 
- If Yes and DeleteBreakSchedule = True 
 
- Delete Work_Schedule_break records 
 
- Else 
 
- Error - Work Schedule has breaks. 
- Deletes Resource Work Schedule.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| WORK_CENTER_WORK_SCHEDULE | ID | Record deleted. |
