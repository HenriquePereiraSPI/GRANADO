# DeleteResourceBreakSchedule

**Category:** Apriso/Common/Resource
**Class:** `FlexNet.BusinessFacade.Resources.CalendarManager`
**Assembly:** `FlexNet.BusinessFacade.Resources.dll`
**Status:** Active

## Description

This method deletes resource schedule breaks. There are 3 ways to delete breaks. Users can specify Resource Schedule Break ID or Resource Work Schedule ID or (Resource ID, Pay Day).If Resource Schedule Break ID is not equal 0, the business component will try to delete only the specified break record. An error message will be returned if the break record can't be found. If Resource Schedule Break ID is equal 0 and Resource Work Schedule ID is not equal 0, the business component will try to delete all breaks for the specified work schedule record. An error will be returned if the work schedule record does not exist. There won't be any error messages if the work schedule does not have any breaks. If Resource Schedule Break ID and Resource Work Schedule ID are both 0, Resource ID and Pay Day must be provided. The business component will try to delete any break records that might exist for any work schedule for the specified (Resource ID, Pay Day). There won't be any error messages returned if there are no work schedule records or break records. The BreakType will be used only when Resource Work Schedule ID or (Resource ID, Pay Day) has been provided. BreakType can be used to delete only a specific type of break or all (by passing zero).

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | ResourceBreakScheduleID | Integer | No | Identifies the resource break schedule record to be deleted. |
| Input | ResourceWorkScheduleID | Integer | No | It can be used to delete all breaks for a given resource work schedule. |
| Input | ResourceID | Integer | No | It can be used to delete all breaks for a given resource and payday. |
| Input | PayDay | DateTime | No | It can be used to delete all breaks for a given resource and payday. |
| Input | BreakType | Integer | No | The break type to be deleted (optional). If 0(Zero) is inputted, it will delete all breaks. It is used only when either ResourceWorkScheduleID or (ResourceID,PayDay) has been provided |

## System Processing

- If ResourceBreakScheduleID != 0. 
 
- Validate Resource Break Schedule. 
- Delete Resource Break Schedule. 
 
- If ResourceBreakScheduleID == 0 and ResourceWorkScheduleID != 0. 
 
- Validate Resource Work Schedule 
- Retrieve breaks 
- If BreaktType == 0 
 
- Delete all breaks. 
 
- If BreakType != 0 
 
- Delete break for the inputted type 
 
 
- If ResourceBreakScheduleID == 0 and ResourceWorkScheduleID == 0 
 
- For each Resource Work Schedule in the specified (resourceID, payday). 
- For each break in the resource work schedule 
- If BreakType == 0 
 
- Delete all break 
 
- If BreakType != 0 
 
- Delete break for inputted type

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| RESOURCE_BREAK_SCHEDULE | ID | Record deleted. |
