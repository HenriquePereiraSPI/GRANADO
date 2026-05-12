# DeleteWorkCenterBreakSchedule

**Category:** Apriso/Common/Resource
**Class:** `FlexNet.BusinessFacade.Resources.CalendarManager`
**Assembly:** `FlexNet.BusinessFacade.Resources.dll`
**Status:** Active

## Description

This method deletes Work Center schedule breaks. There are 3 ways to delete breaks. Users can specify WorkCenterBreakScheduleID or WorkCenterWorkScheduleID or both WorkCenter and PayDay.
 

If WorkCenterBreakScheduleID is not equal to 0, the business component will try to delete only the specified break record. An error message will be returned if the break record cannot be found.
 

If WorkCenterBreakScheduleID is equal to 0 and WorkCenterWorkScheduleID is not equal to 0, the business component will try to delete all breaks for the specified work schedule record. An error will be returned if the work schedule record does not exist. There will not be any error messages if the work schedule does not have any breaks.
 

If WorkCenterBreakScheduleID and WorkCenterWorkScheduleID are both 0, WorkCenter and PayDay must be provided. The business component will try to delete any break records that might exist for any work schedule for the specified WorkCenter and PayDay. There will not be any error messages returned if there are no work schedule records or break records.
 

BreakType will be used only when the user provided WorkCenterWorkScheduleID or both WorkCenter and PayDay. BreakType can be used to delete only a specific type of break or all (by passing zero).

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | WorkCenterBreakScheduleID | Integer | No | Identifies the work center break schedule record to be deleted. |
| Input | WorkCenterWorkScheduleID | Integer | No | It can be used to delete all breaks for a given work center work schedule. |
| Input | WorkCenter | Char | No | It can be used to delete all breaks for a given work center and payday. |
| Input | PayDay | DateTime | No | It can be used to delete all breaks for a given work center and payday. |
| Input | BreakType | Integer | No | The break type to be deleted. If 0(Zero) is inputted, it will delete all breaks. It is used only when either WorkCenterWorkScheduleID or (WorkCenter,PayDay) has been provided |

## System Processing

- If WorkCenterBreakScheduleID != 0. 
 
 
- Validate Work Center Break Schedule. 
- Delete Work Center Break Schedule. 
 
 
- If WorkCenterBreakScheduleID == 0 and WorkCenterWorkScheduleID != 0. 
 
 
- Validate Work Center Work Schedule 
- Retrieve breaks 
- If BreaktType == 0 
 
- Delete all breaks. 
 
- If BreakType != 0 
 
- Delete break for the inputted type 
 
 
 
- If WorkCenterBreakScheduleID == 0 and WorkCenterWorkScheduleID == 0 
 
- For each Work Center Work Schedule in the specified (work center, payday). 
 
 
- For each break in the work center work schedule 
 
- If BreakType == 0 
 
- Delete all break 
 
- If BreakType != 0 
 
- Delete break for inputted type

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| WORK_CENTER_BREAK_SCHEDULE | ID | Record deleted. |
