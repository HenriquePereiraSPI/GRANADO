# DeleteResourceWorkSchedule

**Category:** Apriso/Common/Resource
**Class:** `FlexNet.BusinessFacade.Resources.CalendarManager`
**Assembly:** `FlexNet.BusinessFacade.Resources.dll`
**Status:** Active

## Description

This method deletes a resource's work schedule. It can be used in 2 different ways. If ResourceWorkScheduleID is not zero, the business component will try to find the specified record and delete it. If the record does not exist, an error will be returned.If ResourceWorkScheduleID is zero, Resource ID must be provided. The business component will try to delete any record for the specified (Resource ID,PayDay). There won't be any error messages if the given date does not have any records.The DeleteBreakSchedule flag can be used to automatically delete all break records that might exist for the work schedule. It will be applied in both scenarios.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | ResourceWorkScheduleID | Integer | No | Identifies the record to be deleted. |
| Input | ResourceID | Integer | No | It can be used to delete all work schedules for a given work center/payday. |
| Input | PayDay | DateTime | No | It can be used to delete all work schedules for a given resource/payday. |
| Input | DeleteBreakSchedule | Boolean | No | When true, any work schedule break records will also be deleted. |

## System Processing

- If ResourceWorkScheduleID != 0 
 
 
- Validate Resource Work Schedule. 
- Check if work schedule breaks exist. 
- If Yes and DeleteBreakSchedule = True 
- Delete Work_Schedule_break records 
- Else 
- Error - Work Schedule has breaks. 
- Deletes Resource Work Schedule. 
 
 
- If ResourceWorkScheduleID == 0 
 
 
- Validate ResourceID 
- For all work schedule records where WorkSchedule.ResourceID = ResourceID and WorkSchedule.PayDay = PayDay 
- Check if work schedule breaks exist. 
- If Yes and DeleteBreakSchedule = True 
- Delete Work_Schedule_break records 
- Else 
- Error - Work Schedule has breaks. 
- Deletes Resource Work Schedule.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| RESOURCE_WORK_SCHEDULE | ID | Record deleted. |
