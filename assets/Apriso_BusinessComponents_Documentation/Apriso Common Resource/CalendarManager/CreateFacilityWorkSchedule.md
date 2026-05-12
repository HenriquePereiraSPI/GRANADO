# CreateFacilityWorkSchedule

**Category:** Apriso/Common/Resource
**Class:** `FlexNet.BusinessFacade.Resources.CalendarManager`
**Assembly:** `FlexNet.BusinessFacade.Resources.dll`
**Status:** Active

## Description

Creates a new Work Schedule for a given Facility.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | Facility | Integer | Yes | Facility for which the work schedule will be created. |
| Input | Shift | Char | Yes | Shift for the Work Schedule. |
| Input | WorkPeriod | Char | Yes | Work period for the Work Schedule. |
| Input | EffectiveDate | DateTime | Yes | Effective date for the Work Schedule. It must equal EffectiveDate for the chosen WorkPeriod in the WORK_PERIOD table. |
| Input | EarnCode | Char | Yes | Earn Code for the Work Schedule. |
| Input | StartTime | DateTime | Yes | It will be used as the Start Time for the Work Schedule when the Earn Code allows Start Time and End Time; otherwise, it will be used only to calculate the Pay Day. |
| Input | EndTime | DateTime | No | Used only if the Earn Code allows Start Time and End Time. |
| Input | ScheduledHours | Decimal | No | It must be provided only when the Earn Code does not allow Start Time and End Time. |
| Input | MediumDescription | Char | No | Work Schedule description. |
| Input | ExtendedDescription | Char | No | Work Schedule description. |
| Input | LanguageID | Integer | No | Language for the description fields. |
| Input | NonWorking | Boolean | No | It indicates non-working hours. |
| Output | FacilityWorkScheduleID | Integer | No | ID for the created Facility Work Schedule record. |

## Validations

- Validates Facility, 
- Validates if Facility and Shift exists in WORK_SHIFT table, 
- Validates if Facility, Shift, WorkPeriod and EffectiveDate exists in WORK_PERIOD table, 
- Validates if EarnCode exists in PAY_RULE_EARN_CODE table.

## System Processing

- Validates Facility, 
- Gets Pay Rule – Facility must have a Pay Rule assigned to it, 
- Facility, Shift must exist in WORK_SHIFT table, 
- Facility, Shift, WorkPeriod, EffectiveDate must exist in WORK_PERIOD table, 
- Validates EarnCode. It must be a valid Earn Code for the Facility (it must exist in PAY_RULE_EARN_CODE TABLE), 
- Validates LanguageID, MediumDescription and ExtendedDescription. If MediumDescription or ExtendedDescription is provided, LanguageID must be provided, 
- If Earn Code Allows Start Time and End time, 
 
- Validates StartTime and EndTime, 
 
- StartTime < EndTime, 
- (EndTime - StartTime) < PAY_RULE.MaxAttendancePerpayday, 
- ScheduledHours must be zero, 
- If Earn Code does not allow Start Time and End Time, 
 
- ScheduledHours must be > 0 and < PAY_RULE.MaxAttendancePerpayday, 
 
- If Earn Code allows Start Time and End Time, 
 
- Validate Overlaps – Date/Time cannot be overlapped with other records, 
 
- Calculates PayDay for Facility (refer to GetFacilityPayDayfor details), 
- If Earn Code allows Start Time and End Time, 
 
- Calculates ScheduledHours using StartTime and EndTime, 
- ScheduledHours = (EndTime - StartTime) - (Total Of Unpaid Break hours), 
 
- If Earn Code does not allow Start Time and End Time, 
 
- ScheduledHours = inputted ScheduledHours (not calculation required), 
 
- Creates new record in the FACILITY_WORK_SCHEDULE.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| FACILITY_WORK_SCHEDULE | ID | Generated |
|  | PAYDAY | Calculated |
|  | FACILITY | Inputted |
|  | SHIFT | Inputted |
|  | WORKPERIOD | Inputted |
|  | EFFECTIVEDATE | Inputted |
|  | EARNCODE | Inputted |
|  | STARTTIME | Inputted or payday |
|  | ENDTIME | Inputted or payday |
|  | SCHEDULEDHOURS | Inputted or calculated |
|  | NONWORKING | Inputted |
