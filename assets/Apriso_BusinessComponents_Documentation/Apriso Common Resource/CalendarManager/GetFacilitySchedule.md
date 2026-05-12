# GetFacilitySchedule

**Category:** Apriso/Common/Resource
**Class:** `FlexNet.BusinessFacade.Resources.CalendarManager`
**Assembly:** `FlexNet.BusinessFacade.Resources.dll`
**Status:** Active

## Description

GetFacilitySchedule returns Schedule information for a specified Facility and date range.
 

 **Note:** The GetFacilitySchedule method has been implemented in two steps. The first step loads all the data required to build the Schedule between the Start Date and End Date. The second step builds the Schedule based on the data previously loaded. For Debugging purpose, if the Debug log is enabled in DELMIA Apriso, GetFacilitySchedule will write the entire data loaded on the first step to the Debug log in XML format.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | Facility | Char | Yes | Facility for which the Schedule will be returned. |
| Input | StartDate | DateTime | Yes | Start Date for the Schedule. Only the date part will be used. |
| Input | EndDate | DateTime | Yes | End Date for the Schedule. Only the date part will be used. |
| Output | CalendarID | Integer | No | Calendar used internally to build the Schedule. |
| Output | PayDay | ListofDateTime | No | Pay Day of the Facility Schedule. |
| Output | Shift | ListofChar | No | Shift of the Facility Schedule. |
| Output | WorkPeriod | ListofChar | No | Work Period of the Facility Schedule. |
| Output | EffectiveDate | ListofDateTime | No | Effective date for the Work Period. |
| Output | EarnCode | ListofChar | No | Earn Code of the Facility Schedule. |
| Output | StartTime | ListofDateTime | No | Start Time of the Facility Schedule. |
| Output | EndTime | ListofDateTime | No | End Time of the Facility Schedule. |
| Output | HasTime | ListofBool | No | Indicates that the item has Start Time and End Time. Some Earn Codes do not allow Start Time and End Time. |
| Output | ScheduledHours | ListofDecimal | No | Scheduled hours. |
| Output | NonWorking | ListofBool | No | Indicates non-working hours. |
| Output | PaidBreakHours | ListofDecimal | No | Number of paid Break hours. |
| Output | UnpaidBreakHours | ListofDecimal | No | Number of unpaid Break hours. |
| Output | Override | ListofBool | No | Indicate that the current item was built based on an override. |
| Output | FacilityWorkScheduleID | ListofInteger | No | Facility Work Schedule ID when the item was built based on a Facility override. |
| Output | RotatingWorkScheduleID | ListofInteger | No | Rotating Work Schedule ID when the item was built based on a Rotating Schedule. |
| Output | RotatingWorkScheduleSequenceNo | ListofInteger | No | The sequence no for the Rotating Schedule detail record that was used to build the item. |
| Output | TotalScheduledHours | Decimal | No | Total scheduled hours between the Start Date and End Date. |
| Output | TotalPaidBreakHours | Decimal | No | Total paid break hours between the Start Date and End Date. |
| Output | TotalUnpaidBreakHours | Decimal | No | Total unpaid Break hours between the Start Date and End Date. |

## System Processing

- Validates Facility,  
- Gets Pay Rule assigned to Facility,  
- Validates Pay Rule,  
- Loads Calendar,  
 
- If Facility has calendar assigned to it, load Calendar(FACILITY.CalendarID), 
 
- Validate Calendar,  
- Creates a collection for storing the results,  
- For each date between StartDate and EndDate,  
 
- If Facility_Work_Schedule exists for the (Facility, date),  
 
- Builds new item using Facility Work Schedule record,  
- Adds new item to collection,  
- Calculates paid and unpaid Break hours from FACILITY_BREAK_SCHEDULE table and use WORK_SHIFT_BREAK table to determine which is paid and not paid,  
- Next day, 
 
- Gets Calendar record for the date,  
- Gets CALENDAR.EarnCode,  
- If CALENDAR.EarnCode != PAY_DAY.DefaultRegularEarnCode,  
 
- Builds new item using Calendar record using ScheduledHours = CALENDAR_DAY.Hours. There is no StartTime or EndTime,  
- Add new item to collection,  
- Paid and unpaid Break hours are not incremented,  
- If CALENDAR.EarnCode == PAY_DAY.DefaultHolidayEarnCode, 
 
 
 

 
 
 
 
 
- Set NonWorking = True, 
 
- Next day, 
 
- If Rotating Schedule exists for the Facility – Facility must be assigned to a Rotating Schedule through FACILITY_ROTATING_SCHEDULE table and Day >= FACILITY_ROTATING_SCHEDULE.EffectiveDate and (FACILITY_ROTATING_SCHEDULE.DiscontinueDate == null or Day <= FACILITY_ROTATING_SCHEDULE.DiscontinueDate, 
 
- Builds new item using Facility record, 
- Adds new item to collection, 
- Calculates paid and unpaid Break hours from WORK_PERIOD_BREAK table and the use WORK_SHIFT_BREAK table to determine which is paid and not paid, 
- Next day, 
 
- Else builds new item using Calendar record, 
 
- Adds new item to collection, 
- Paid and unpaid break hours are not incremented, 
- Next day.
