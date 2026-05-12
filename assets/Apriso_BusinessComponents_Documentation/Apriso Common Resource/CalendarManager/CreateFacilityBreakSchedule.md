# CreateFacilityBreakSchedule

**Category:** Apriso/Common/Resource
**Class:** `FlexNet.BusinessFacade.Resources.CalendarManager`
**Assembly:** `FlexNet.BusinessFacade.Resources.dll`
**Status:** Active

## Description

Creates a break for a given Facility Work Schedule.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | FacilityWorkScheduleID | Integer | Yes | Identifies the Facility Work Schedule for which the break will be created. |
| Input | BreakType | Char | Yes | It must exist in the BREAK_TYPE table and it must be a valid break for the Work Shift Break associated with the Facility Work Schedule record. |
| Input | StartTime | DateTime | Yes | Start Time for the Break. |
| Input | EndTime | DateTime | Yes | End Time for the Break. |
| Output | FacilityBreakScheduleID | Integer | No | ID for the created Facility Break Schedule record. |

## System Processing

- Validates Facility Work Schedule – record must exist in FACILITY_WORK_SCHEDULE table, 
- Checks if Facility Work Schedule is a non-working record. Non-working records do not allow Breaks, 
- Validates if Earn Code for the Facility Work Schedule record allows Start Time and End Time. Earn Codes that do not allow Start Time and End Time do not allow Breaks as well, 
- Validates Break Type – record must exist in BREAK_TYPE table, 
- Validates Break Type valid for Work Period. Check WORK_SHIFT_BREAK for the Break type and the shift obtained from the schedule record, 
- Validates if a record for (FacilityWorkScheduleID,BreakType) already exists in FACILITY_BREAK_SCHEDULE table, 
- Validates StartTime and EndTime, 
 
- StartTime < EndTime, 
- StartTime >= FACILITY_WORK_SCHEDULE.StartTime and StartTime <= FACILITY_WORK_SCHEDULE.EndTime, 
- EndTime >= FACILITY_WORK_SCHEDULE.StartTime and EndTime <= FACIILTY_WORK_SCHEDULE.EndTime, 
 
- Checks for overlaps – we cannot have Breaks with overlapped dates, 
- Recalculates/updates FACILITY_WORK_SCHEDULE.ScheduleHours, 
- Creates Schedule Break record.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| FACILITY_BREAK_SCHEDULE | ID | Generated |
|  | FACILITYWORKSCHEDULEID | Inputted |
|  | BREAKTYPE | Inputted |
|  | STARTTIME | Inputted |
|  | ENDTIME | Inputted |
