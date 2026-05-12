# GetWorkCenterSchedule

**Category:** Apriso/Common/Resource
**Class:** `FlexNet.BusinessFacade.Resources.CalendarManager`
**Assembly:** `FlexNet.BusinessFacade.Resources.dll`
**Status:** Active

## Description

GetWorkCenterSchedule returns Schedule information for a specified Work Center and date range.
 

 **Note:** The GetWorkCenterSchedule method has been implemented in two steps. The first step loads all the data required to build the Schedule between the Start Date and End Date. The second step builds the Schedule based on the previously loaded data. For Debugging purpose, if the Debug log is enabled in DELMIA Apriso, GetWorkCenterSchedule will write the entire data loaded on the first step to the Debug log in XML format.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | WorkCenter | Char | Yes | Work Center for which the Schedule will be returned. |
| Input | StartDate | DateTime | Yes | Start Date for the Schedule. Only the date part will be used. |
| Input | EndDate | DateTime | Yes | End Date for the Schedule. Only the date part will be used. |
| Output | CalendarID | Integer | No | Calendar used internally to build the Schedule. |
| Output | PayDay | ListofDateTime | No | Pay Day for Work Center Schedule. |
| Output | Shift | ListofChar | No | Shift for Work Center Schedule. |
| Output | WorkPeriod | ListofChar | No | Work Period for Work Center Schedule. |
| Output | EffectiveDate | ListofDateTime | No | Effective date for the Work Period. |
| Output | EarnCode | ListofChar | No | Earn Code for Work Center Schedule. |
| Output | StartTime | ListofDateTime | No | Start Time for Work Center Schedule. |
| Output | EndTime | ListofDateTime | No | End Time for Work Center Schedule. |
| Output | HasTime | ListofBool | No | Indicates that the item has Start Time and End Time. Some Earn Codes do not allow Start Time and End Time. |
| Output | ScheduledHours | ListofDecimal | No | Scheduled hours. |
| Output | NonWorking | ListofBool | No | Indicates non-working hours. |
| Output | PaidBreakHours | ListofDecimal | No | Number of paid Break hours. |
| Output | UnpaidBreakHours | ListofDecimal | No | Number of unpaid Break hours. |
| Output | Override | ListofBool | No | Indicate that the current item was built based on an override. |
| Output | WorkCenterWorkScheduleID | ListofInteger | No | Work Center Work Schedule ID when the item was built based on a Work Center override. |
| Output | FacilityWorkScheduleID | ListofInteger | No | Facility Work Schedule ID when the item was built based on a Work Center override. |
| Output | RotatingWorkScheduleID | ListofInteger | No | Rotating Work Schedule ID when the item was built based on a Rotating Schedule. |
| Output | RotatingWorkScheduleSequenceNo | ListofInteger | No | The sequence number for the Rotating Schedule detail record that was used to build the item. |
| Output | TotalScheduledHours | Decimal | No | Total scheduled hours between the Start Date and End Date. |
| Output | TotalPaidBreakHours | Decimal | No | Total paid Break hours between the Start Date and End Date. |
| Output | TotalUnpaidBreakHours | Decimal | No | Total unpaid Break hours between the Start Date and End Date. |

## System Processing

- Validates Work Center,  
- Gets Facility assigned to Work Center,  
- Validates Facility,  
- Gets Pay Rule assigned to WorkCenter,  
- Validates Pay Rule,  
- Loads Calendar,  
 
- If Work Center has Calendar assigned to it, load Calendar(WORK_CENTER.CalendarID),  
- If Work Center does not have Calendar assigned to it, try to load Calendar(FACILITY.CalendarID), 
 
- Validates Calendar, 
- Creates a collection for storing the results,  
- For each date between StartDate and EndDate,  
 
- Work_Center_Work_Schedule exists for the (WorkCenter, date),  
 
- Builds new item using Work Center Work Schedule record,  
- Adds new item to collection,  
- Calculates paid and unpaid Break hours from Work Center Schedule Break table and use Work Shift Break table to determine which is paid and not paid, 
- Next day, 
 
- Gets Calendar Record for the date, 
- Gets CALENDAR.EarnCode, 
- If CALENDAR.EarnCode != PAY_RULE.DefaultRegularEarnCode, 
 
- Builds new item using Calendar record using ScheduledHours = CALENDAR_DAY.Hours. There is no StartTime or EndTime, 
- Adds new item to collection, 
- Paid and unpaid Break hours are not incremented, 
- If CALENDAR.EarnCode == PAY_RULE.DefaultHolidayEarnCode, 
 
 
 

 
 
 
 
 
- Sets NonWorking = True, 
 
- Next day, 
 
- If Rotating Schedule exists for the Work Center – Work Center must be assigned to a Rotating Schedule through WORK_CENTER_ROTATING_SCHEDULE table and Day >= WORK_CENTER_ROTATING_SCHEDULE.EffectiveDate and (WORK_CENTER_ROTATING_SCHEDULE.DiscontinueDate == null or Day <= WORK_CENTER_ROTATING_SCHEDULE.DiscontinueDate, 
 
- Builds new item using Work Period record, 
- Adds new item to collection, 
- Calculates paid and unpaid Break hours from WORK_PERIOD_BREAK table and the use WORK_SHIFT_BREAK table to determine which is paid and not paid, 
- Next day, 
 
- Facility_Work_Schedule exists for the (Facility, date), 
 
- Builds new item using Facility Work Schedule record, 
- Adds new item to collections 
- Calculates paid and unpaid break hours from WORK_CENTER_BREAK_SCHEDULE table and use WORK_SHIFT_BREAK table to determine which is paid and not paid, 
- Next day. 
 
- If Rotating Schedule exists for the Facility – FACILITY.RotatingScheduleID != null and Day >= ROTATING_WORK_SCHEDULE(FACILITY.RotatingScheduleID).EffectiveDate and (ROTATING_WORK_SCHEDULE(FACILITY.RotatingScheduleID).DiscontinueDate == null or Day < ROTATING_WORK_SCHEDULE(FACILITY.RotatingScheduleID).DiscontinueDate), 
 
- Builds new item using Work Period record, 
- Adds new item to collection, 
- Calculates paid and unpaid break hours from WORK_PERIOD_BREAK table and use WORK_SHIFT_BREAK table to determine which is paid and not paid, 
- Next day, 
 
- Builds new item using Calendar record, 
 
- Adds new item to collection, 
- Paid and unpaid Break hours are not incremented, 
- Next day.
