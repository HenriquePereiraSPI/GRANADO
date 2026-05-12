# CreateResourceWorkSchedule

**Category:** Apriso/Common/Resource
**Class:** `FlexNet.BusinessFacade.Resources.CalendarManager`
**Assembly:** `FlexNet.BusinessFacade.Resources.dll`
**Status:** Active

## Description

Creates a new work schedule for a given resource.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | ResourceID | Integer | Yes | Resource ID for which the work schedule will be created. |
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
| Input | NonWorking | Integer | No | It indicates non working hours. |
| Output | ResourceWorkScheduleID | Boolean | No | ID for the created resource work schedule record. |

## System Processing

- Delete all records in RESOURCE_WORK_SCHEDULE for the given resource and time range where DefaultSchedule is TRUE. 
- Validate ResourceID, 
- Get Facility. 
 
- If Resource is assigned to a facility, use resource's facility 
- If Resource is assigned to a work center and work center is assigned to facility, use work center's facility. 
 
- Validate Facility - Check if Facility could be loaded (either resource or work center). 
- Get Pay Rule. 
 
- If Resource has Pay Rule assigned to it, load PayRule(Resource.Facility, Resource.PayRule) 
- If Resource is assigned to work Center and work center has pay rule assigned to it, load PayRule(WorkCenter.Facility, WorkCenter.PayRule). 
 
- Validate Pay Rule - Check if Pay Rule could be loaded (either resource or work center). 
- Validate Facility,Shift must exist in WORK_SHIFT table. 
- Validate Facility,Shift,WorkPeriod,EffectiveDate must exist in WORK_PERIOD table. 
- Validate EarnCode. It must be a valid earn code for the facility (It must exist in PAY_RULE_EARN_CODE TABLE. 
- Validate LanguageID, MediumDescription and ExtendedDescription. 
 
- If MediumDescription or ExtendedDescription provided, LanguageID must be provided. 
 
- If Earn Code Allows Start Time and End time 
 
- Validate StartTime and EndTime 
 
- StartTime < EndTime 
- (EndTime - StartTime) < PayRule.MaxAttendancePerpayday 
- ScheduledHours must be zero. 
 
 
- If Earn Code does not allow Start Time and End Time 
 
- ScheduledHours must be > 0 and < PayRule.MaxAttendancePerpayday 
 
- If Earn Code allows Start Time and End Time. 
 
- Validate Overlaps - Date/Time can't be overlapped with other records. 
 
- Calculate PayDay for Resource (refer to GetResourcePayDayfor details). 
- If Earn Code allows Start Time and End Time 
 
- Calculate ScheduledHours using StartTime and EndTime. 
- ScheduledHours = (EndTime - StartTime) - (Total Of Unpaid Break hours) 
 
- If Earn Code does not allow start time and end time. 
 
- ScheduledHours = inputted ScheduledHours (not calculation required). 
 
- Create new record in the RESOURCE_WORK_SCHEDULE with DefaultSchedule remains null.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| RESOURCE_WORK_SCHEDULE | ID | Generated |
|  | PAYDAY | Calculated |
|  | FACILITY | Calculated |
|  | SHIFT | Inputted |
|  | WORKPERIOD | Inputted |
|  | EFFECTIVEDATE | Inputted |
|  | EARNCODE | Inputted |
|  | STARTTIME | Inputted or payday |
|  | ENDTIME | Inputted or payday |
|  | SCHEDULEDHOURS | Inputted or calculated |
|  | NONWORKING | Inputted |
|  |  | Deleted records for which DefaultSchedule == TRUE |
