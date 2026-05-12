# CreateResourceBreakSchedule

**Category:** Apriso/Common/Resource
**Class:** `FlexNet.BusinessFacade.Resources.CalendarManager`
**Assembly:** `FlexNet.BusinessFacade.Resources.dll`
**Status:** Active

## Description

Creates a break for a given resource work schedule.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | ResourceWorkScheduleID | Integer | Yes | Identifies the resource work schedule for which the break will be created. |
| Input | BreakType | Char | Yes | It must exist in the BREAK_TYPE table and it must be a valid break for the work shift break associated with the resource work schedule record. |
| Input | StartTime | DateTime | Yes | Start time for the break. |
| Input | EndTime | DateTime | Yes | End time for the break. |
| Output | ResourceBreakScheduleID | Integer | No | ID for the created resource break schedule record. |

## System Processing

- Validate Resource Work Schedule - Record must exist in RESOURCE_WORK_SCHEDULE table. 
- Check if Resource Work Schedule is a non working record. Non Working records don't allow breaks. 
- Validate if Earn Code for the Resource Work Schedule record allows Start Time and End Time. Earn codes that don't allow Start Time and End Time don't allow breaks as well. 
- Validate Break Type - Record must exist in BREAK_TYPE table. 
- Validate Break Type valid for Work Period. Check WORK_SHIFT_BREAK for the break type and the shift obtained from the schedule record. 
- Validate if a record for (ResourceWorkScheduleID,BreakType) already exists in RESOURCE_BREAK_SCHEDULE table. 
- Validate StartTime and EndTime. 
 
- StartTime < EndTime 
- StartTime >= WORK_CENTER_WORK_SCHEDULE.StartTime and StartTime <= WORK_CENTER_WORK_SCHEDULE.EndTime 
- EndTime >= WORK_CENTER_WORK_SCHEDULE.StartTime and EndTime <= WORK_CENTER_WORK_SCHEDULE.EndTime 
 
- Check for overlaps - We can't have breaks with overlapped dates. 
- Recalculate/Update RESOURCE_WORK_SCHEDULE.ScheduleHours. 
- Create Schedule Break record.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| RESOURCE_BREAK_SCHEDULE | ID | Generated. |
|  | RESOURCEWORKSCHEDULEID | Inputted |
|  | BREAKTYPE | Inputted |
|  | STARTTIME | Inputted |
|  | ENDTIME | Inputted |
