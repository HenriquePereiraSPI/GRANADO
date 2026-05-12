# GetWorkCenterScheduleForDateTime

**Category:** Apriso/Common/Resource
**Class:** `FlexNet.BusinessFacade.Resources.CalendarManager`
**Assembly:** `FlexNet.BusinessFacade.Resources.dll`
**Status:** Active

## Description

This method returns Schedule information for a specified Work Center and Date/Time. It is just a wrapper for the GetWorkCenterSchedule method.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | WorkCenter | Char | Yes | WorkCenter for which the Schedule information will be returned. |
| Input | LocalDateTime | DateTime | Yes | Local Date Time for which the Schedule will be returned. |
| Output | CalendarID | Integer | No | Schedule Calendar ID. |
| Output | CalendarID | Integer | No | Calendar was used internally to build the Schedule. |
| Output | PayDay | DateTime | No | Schedule Pay Day. |
| Output | Shift | Char | No | Schedule Shift. |
| Output | WorkPeriod | Char | No | Schedule Work Period. |
| Output | EffectiveDate | DateTime | No | Schedule Effective Date. |
| Output | EarnCode | Char | No | Schedule Earn Code. |
| Output | StartTime | DateTime | No | Schedule Start Time. |
| Output | EndTime | DateTime | No | Schedule End Time. |
| Output | HasTime | Boolean | No | Indicates whether the Schedule has Star Time and End Time. |
| Output | ScheduledHours | Decimal | No | Schedule Hours. |
| Output | NonWorking | Boolean | No | Non-working flag. |
| Output | Override | Boolean | No | It indicates that the Schedule was built based on override information. |
| Output | WorkCenterWorkScheduleID | Integer | No | It will have the Work Center Work Schedules ID if the Schedule was built based on a Work Center override. |
| Output | FacilityWorkScheduleID | Integer | No | It will have the Facility Work Schedules ID if the Schedule was built based on a Facility override. |
| Output | RotatingWorkScheduleID | Integer | No | If the Schedule was built based on a Rotating Work Schedule, this field will have the Rotating Work Schedules ID. |
| Output | RotatingWorkScheduleSequenceNo | Integer | No | It the Schedule was build based on a Rotating Work Schedule, this field will have the sequence number in the Rotating Schedule |
| Output | InBreak | Boolean | No | When true, indicates that the date/time is inside a Break. |
| Output | PaidBreak | Boolean | No | When true, indicates that the Break is a paid Break. |
| Output | BreakHours | Decimal | No | Number of Break hours. |
| Output | BreakStartTime | DateTime | No | When InBreak is true, this field will have the Break Start Time. |
| Output | BreakEndTime | DateTime | No | When InBreak is true, this field will have the Break End Time. |

## Validations

Refer to the documentation for GetWorkCenterSchedule for detailed information

## System Processing

- The system determines the Pay Day for the inputted date/time, then: 
- Calls GetWorkCenterSchedule using the Pay Day as Start Date and End Date,  
- Searches in the result list the item in which the inputted date/time fits in. 
 

Refer to the documentation for GetWorkCenterSchedule for detailed information.
