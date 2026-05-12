# CreateWorkCenterWorkSchedule

**Category:** Apriso/Common/Resource
**Class:** `FlexNet.BusinessFacade.Resources.CalendarManager`
**Assembly:** `FlexNet.BusinessFacade.Resources.dll`
**Status:** Active

## Description

Creates a new work schedule for a given work center.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | WorkCenter | Integer | Yes | Work center for which the work schedule will be created. |
| Input | Shift | Char | Yes | Shift for the work schedule. |
| Input | WorkPeriod | Char | Yes | Work period for the work schedule. |
| Input | EffectiveDate | DateTime | Yes | Effective date for the work schedule. |
| Input | EarnCode | Char | Yes | Earn code for the work schedule. |
| Input | StartTime | DateTime | Yes | It will be used as the start time for the work schedule when the earn code allows start time and end time otherwise it will be used only to calculate the payday. |
| Input | EndTime | DateTime | No | Used only if the earn code allows start time and end time. |
| Input | ScheduledHours | Decimal | No | It must be provided only when the earn code does not allow start time and end time. |
| Input | MediumDescription | Char | No | Work schedule description. |
| Input | ExtendedDescription | Char | No | Work schedule description. |
| Input | LanguageID | Integer | No | Language for the description fields. |
| Input | NonWorking | Boolean | No | It indicates non working hours. |
| Output | WorkCenterWorkScheduleID | Integer | No | ID for the created work center work schedule record. |

## System Processing

- Validate WorkCenter 
- Get Facility - Work Center must be assigned to a facility 
- Get Pay Rule - Work Center must have a pay rule assigned to it. 
- Validate Facility,Shift must exist in WORK_SHIFT table. 
- Validate Facility,Shift,WorkPeriod,EffectiveDate must exist in WORK_PERIOD table. 
- Validate EarnCode. It must be a valid earn code for the facility (It must exist in PAY_RULE_EARN_CODE TABLE. 
- Validate LanguageID, MediumDescription and ExtendedDescription. If MediumDescription or ExtendedDescription provided, LanguageID must be provided. 
- If Earn Code Allows Start Time and End time 
 
- Validate StartTime and EndTime 
 
- StartTime < EndTime 
- (EndTime - StartTime) < PayRule.MaxAttendancePerpayday 
- ScheduledHours must be zero. 
- If Earn Code does not allow Start Time and End Time 
 
- ScheduledHours must be > 0 and < PayRule.MaxAttendancePerpayday 
 
- If Earn Code allows Start Time and End Time. 
 
- Validate Overlaps - Date/Time can't be overlapped with other records. 
 
- Calculate PayDay for Work Center (refer to GetWorkCenterPayDayfor details). 
- If Earn Code allows Start Time and End Time 
 
- Calculate ScheduledHours using StartTime and EndTime. 
- ScheduledHours = (EndTime - StartTime) - (Total Of Unpaid Break hours) 
 
- If Earn Code does not allow start time and end time. 
 
- ScheduledHours = inputted ScheduledHours (not calculation required). 
 
- Create new record in the WORK_CENTER_WORK_SCHEDULE.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| WORK_CENTER_WORK_SCHEDULE | ID | Generated |
|  | PAYDAY | Calculated |
|  | FACILITY | Calculated. |
|  | SHIFT | Inputted |
|  | WORKPERIOD | Inputted |
|  | EFFECTIVEDATE | Inputted |
|  | EARNCODE | Inputted |
|  | STARTTIME | Inputted or payday |
|  | ENDTIME | Inputted or payday |
|  | SCHEDULEDHOURS | Inputted or calculated |
|  | NONWORKING | Inputted |
