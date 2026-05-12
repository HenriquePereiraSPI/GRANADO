# GetResourceSchedule

**Category:** Apriso/Common/Resource
**Class:** `FlexNet.BusinessFacade.Resources.CalendarManager`
**Assembly:** `FlexNet.BusinessFacade.Resources.dll`
**Status:** Active

## Description

GetResourceSchedule returns schedule information for a specified Resource and date range.
 

 **Note:** The GetResourceSchedule method has been implemented in two steps. The first step loads all the data required to build the Schedule between the Start Date and End Date. The second step builds the Schedule based on the data previously loaded. For Debugging purpose, if the Debug log is enabled in DELMIA Apriso, GetResourceSchedule will write the entire data loaded on the first step to the Debug log in a XML format.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | ResourceID | Integer | Yes | Resource for which the Schedule will be returned. |
| Input | StartDate | DateTime | Yes | Start Date for the Schedule. Only the date part will be used. |
| Input | EndDate | DateTime | Yes | End Date for the Schedule. Only the date part will be used. |
| Output | CalendarID | Integer | No | Calendar used internally to build the Schedule. |
| Output | PayDay | ListofDateTime | No | Pay Day of the Resource Schedule. |
| Output | Shift | ListofChar | No | Shift of the Resource Schedule. |
| Output | WorkPeriod | ListofChar | No | Work Period of the Resource Schedule. |
| Output | EffectiveDate | ListofDateTime | No | Effective date for the Work Period. |
| Output | EarnCode | ListofChar | No | Earn Code of the Resource Schedule. |
| Output | StartTime | ListofDateTime | No | Start Time of the Resource Schedule. |
| Output | EndTime | ListofDateTime | No | End Time of the Resource Schedule. |
| Output | HasTime | ListofBool | No | Indicates that the item has Start Time and End Time. Some Earn Codes do not allow Start Time and End Time. |
| Output | ScheduledHours | ListofDecimal | No | Scheduled hours. |
| Output | NonWorking | ListofBool | No | Indicates non-working hours. |
| Output | PaidBreakHours | ListofDecimal | No | Number of paid Break hours. |
| Output | UnpaidBreakHours | ListofDecimal | No | Number of unpaid Break hours. |
| Output | Override | ListofBool | No | Indicate that the current item was built based on an override. |
| Input | ResourceWorkScheduleID | ListofInteger | No | Resource Work Schedule ID when the item was built based on a Resource override. |
| Output | WorkCenterWorkScheduleID | ListofInteger | No | Work Center Work Schedule ID when the item was built based on a Work Center override. |
| Output | FacilityWorkScheduleID | ListofInteger | No | Facility Work Schedule ID when the item was built based on a Facility override. |
| Output | RotatingWorkScheduleID | ListofInteger | No | Rotating Work Schedule ID when the item was built based on a Rotating Schedule. |
| Output | RotatingWorkScheduleSequenceNo | ListofInteger | No | The sequence no for the Rotating Schedule detail record that was used to build the item. |
| Output | TotalScheduledHours | Decimal | No | Total scheduled hours between the Start Date and End Date. |
| Output | TotalPaidBreakHours | Decimal | No | Total paid Break hours between the Start Date and End Date. |
| Output | TotalUnpaidBreakHours | Decimal | No | Total unpaid Break hours between the Start Date and End Date. |

## Validations

- Validates Resource.

## System Processing

- Validate Resource. 
- Get Facility that will be used to load the Calendar,  
 
- If Resource is assigned to a Facility, use Resource's Facility,  
- If Resource is assigned to a Work Center and Work Center is assigned to Facility, use Work Center's Facility, 
 
- Validates Facility – checks if Facility could be loaded (either Resource or Work Center),  
- Gets Pay Rule,  
 
- If Resource has Pay Rule assigned to it, loads PayRule(RESOURCE.Facility, RESOURCE.PayRule), 
- If Resource is assigned to Work Center and Work Center has Pay Rule assigned to it, loads PayRule(WORK_CENTER.Facility, WORK_CENTER.PayRule),  
- If Resource is assigned to Facility and Facility has Pay Rule assigned to it, loads PayRule(RESOURCE.Facility, FACILITY.PayRule), 
 
- Validates Pay Rule – checks if Pay Rule could be loaded (either Resource, Work Center or Facility), 
- Load Calendar, 
 
- If Resource has Calendar assigned to it, loads Calendar(RESOURCE.CalendarID), 
- If Resource is assigned to Work Center and Work Center has Calendar assigned to it, loads Calendar (WORK_CENTER.CalendarID), 
- If Resource is assigned to a Facility and Facility has a Calendar assigned to it, loads Calendar (Resource's FACILITY.CalendarID), 
- If Resource is assigned to a Work Center and Work Center is assigned to Facility and Facility has Calendar assigned to it, loads Calendar (WorkCenter's FACILITY.CalendarID), 
 
- Creates a collection for storing the results, 
- For each date between StartDate and EndDate, 
 
- If Resource_Work_Schedule exists for the (ResourceID, date), 
 
- Builds new item using Resource Work Schedule record, 
- Adds new item to collection, 
- Calculates paid and unpaid break hours from RESOURCE_BREAK_SCHEDULE table and the Work Shift Break table to determine which is paid and not paid, 
- Next day, 
 
- Gets Calendar Record for the date, 
- Gets CALENDAR.EarnCode, 
- If CALENDAR.EarnCode != PAY_RULE.DefaultRegularEarnCode, 
 
- Builds new item using Calendar record using ScheduledHours = Calendar_Day.Hours. There is no StartTime or EndTime, 
- Adds new item to collection, 
- Paid and unpaid break hours are not incremented, 
- If CALENDAR.EarnCode == PAY_RULE.DefaultHolidayEarnCode, 
 
- Sets NonWorking = True, 
 
- Next day, 
 
- If Rotating Schedule exists for the Resource – Resource must be assigned to a Rotating Schedule through RESOURCE_ROTATING_SCHEDULE table and Day >= RESOURCE_ROTATING_SCHEDULE.EffectiveDate and (RESOURCE_ROTATING_SCHEDULE.DiscontinueDate == null or Day <= RESOURCE_ROTATING_SCHEDULE.DiscontinueDate, 
 
- Builds new item using Work Period record, 
- Adds new item to collection, 
- Calculates paid and unpaid Break hours from WORK_PERIOD_BREAK table and use Work Shift Break table to determine which is paid and not paid, 
- Next day, 
 
- If Resource is assigned to a WorkCenter, 
- If Work_Center_Work_Schedule exists for the (WorkCenter, date), 
 
- Builds new item using Work Center Work Schedule record, 
- Adds new item to collection, 
- Calculates paid and unpaid Break hours from WORK_CENTER_BREAK_SCHEDULE table and the WORK_SHIFT_BREAK table to determine which is paid and not paid, 
- Next day, 
 
- If Rotating Schedule exists for the WorkCenter – Work Center must be assigned to a Rotating Schedule through WORK_CENTER_ROTATING_SCHEDULE table and Day >= WORK_CENTER_ROTATING_SCHEDULE.EffectiveDate and (WORK_CENTER_ROTATING_SCHEDULE.DiscontinueDate == null or Day <= WORK_CENTER_ROTATING_SCHEDULE.DiscontinueDate, 
 
- Builds new item using Work Period record, 
- Adds new item to collection, 
- Calculates paid and unpaid Break hours from WOKR_PERIOD_BREAK table and the WORK_SCHIFT_BREAK table to determine which is paid and not paid, 
- Next day, 
 
- If Resource is assigned to a Facility, 
- If Facility_Work_Schedule exists for the (Facility, date), 
 
- Builds new item using Facility Work Schedule record, 
- Adds new item to collection, 
- Calculates paid and unpaid Break hours from FACILITY_BREAK_SCHEDULE table and the WORK_SHIFT_BREAK table to determine which is paid and not paid, 
- Next day, 
 
- If Rotating Schedule exists for the Facility – FACILITY.RotatingScheduleID != null and Day >= ROTATING_WORK_SCHEDULE(FACILITY.RotatingScheduleID).EffectiveDate and (ROTATING_WORK_SCHEDULE(FACILITY.RotatingScheduleID).DiscontinueDate == null or Day < ROTATING_WORK_SCHEDULE(FACILITY.RotatingScheduleID).DiscontinueDate) 
 
- Builds new item using Work Period record, 
- Adds new item to collection, 
- Calculates paid and unpaid Break hours from WORK_PERIOD_BREAK table and use WORK_SHIFT_BREAK table to determine which is paid and not paid, 
- Next day, 
 
- Builds new item using Calendar record, 
 
- Adds new item to collection, 
- Paid and unpaid Break hours are not incremented, 
- Next day.
