# CreateWorkCenterBreakSchedule

**Category:** Apriso/Common/Resource
**Class:** `FlexNet.BusinessFacade.Resources.CalendarManager`
**Assembly:** `FlexNet.BusinessFacade.Resources.dll`
**Status:** Active

## Description

This Business Component method is used to create a break for a given Work Center work schedule.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | WorkCenterWorkScheduleID | Integer | Yes | Identifies the Work Center work schedule for which the break will be created. |
| Input | BreakType | Char | Yes | Must exist in the BREAK_TYPE table and must be a valid break for the Work Shift Break associated with the Work Center work schedule record. |
| Input | StartTime | DateTime | Yes | The start time for the break. |
| Input | EndTime | DateTime | Yes | The end time for the break. |
| Output | WorkCenterBreakScheduleID | Integer | No | The ID for the created Resource break schedule record. |

## Validations

- The system checks if the Work Shift Break effective date and discontinue date are defined. 
- The system checks if the StartTime and EndTime Inputs are within the effective and discontinue time range.

## System Processing

- The system validate that the Work Center work schedule record exists in the WORK_CENTER_WORK_SCHEDULE table. 
- The system checks if the Work Center work schedule is a non-working record (non-working records do not allow for breaks). 
- The system validate if the Earn Code for the Resource work schedule record allows a start time and end time. The Earn Codes that do not allow for start times and end times do not allow for breaks either. 
- The system validate that the break type record exists in the BREAK_TYPE table. 
- The system validates the break type valid for the Work Period. The system checks WORK_SHIFT_BREAK for the break type and the shift obtained from the schedule record. 
- The system validates if the records for WorkCenterWorkScheduleID and BreakType already exist in the WORK_CENTER_BREAK_SCHEDULE table. 
- The system validates StartTime and EndTime: 
 
- StartTime < EndTime 
- StartTime >= WORK_CENTER_WORK_SCHEDULE.StartTime and StartTime <= WORK_CENTER_WORK_SCHEDULE.EndTime 
- EndTime >= WORK_CENTER_WORK_SCHEDULE.StartTime and EndTime <= WORK_CENTER_WORK_SCHEDULE.EndTime 
 
- The system checks for overlaps (there can be no breaks with overlapping dates). 
- The system recalculate and updates WORK_CENTER _WORK_SCHEDULE.ScheduleHours. 
- The system creates the schedule break record.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| WORK_CENTER_BREAK_SCHEDULE | ID | Generated. |
|  | WORKCENTERWORKSCHEDULEID | Inputted |
|  | BREAKTYPE | Inputted |
|  | STARTTIME | Inputted |
|  | ENDTIME | Inputted |
