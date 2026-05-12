# GetResourceScheduleForDateTime

**Category:** Apriso/Common/Resource
**Class:** `FlexNet.BusinessFacade.Resources.CalendarManager`
**Assembly:** `FlexNet.BusinessFacade.Resources.dll`
**Status:** Active

## Description

This method returns Schedule information for a specified Resource and Date/Time. It is just a wrapper for the GetResourceSchedule method.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | ResourceID | Integer | Yes | Resource ID for which the Schedule will be returned. |
| Input | LocalDateTime | DateTime | No | Local date time for which the Schedule will be returned. |
| Output | CalendarID | Integer | No | Calendar was used internally to build the Schedule. |
| Output | PayDay | DateTime | No | Schedule Pay Day. |
| Output | Shift | Char | No | Schedule Shift. |
| Output | WorkPeriod | Char | No | Schedule Work Period. |
| Output | EffectiveDate | DateTime | No | Schedule Effective Date. |
| Output | EarnCode | Char | No | Schedule Earn Code. |
| Output | StartTime | DateTime | No | Schedule Start Time. |
| Output | EndTime | DateTime | No | Schedule End Time. |
| Output | HasTime | Boolean | No | Indicates whether Schedule has Start Time and End Time. |
| Output | ScheduledHours | Decimal | No | Scheduled Hours. |
| Output | NonWorking | Boolean | No | Non-working flag. |
| Output | Override | Boolean | No | It indicates that the Schedule was built based either on a ResourceWorkSchedule record or WorkCenterWorkSchedule record. |
| Output | ResourceWorkScheduleID | Integer | No | It will have the Resource Work Schedules ID if the Schedule was built based on a Resource's override. |
| Output | WorkCenterWorkScheduleID | Integer | No | It will have the Work Center Work Schedules ID if the Schedule was built based on a Work Center override. |
| Output | FacilityWorkScheduleID | Integer | No | It will have the Facility Work Schedules ID if the Schedule was built based on a Facility override. |
| Output | RotatingWorkScheduleID | Integer | No | If the Schedule was built based on a Rotating Work Schedule, this field will have the Rotating Work Schedules ID. |
| Output | RotatingWorkScheduleSequenceNo | Integer | No | It the Schedule was build based on a Rotating Work Schedule, this field will have the sequence number in the Rotating Schedule. |
| Output | InBreak | Boolean | No | When true, indicates that the date/time is inside a Break. |
| Output | PaidBreak | Boolean | No | When true, indicates that the Break is a paid Break. |
| Output | BreakHours | Decimal | No | Number of Break hours. |
| Output | BreakStartTime | DateTime | No | When InBreak is true, this field will have the Break Start Time. |
| Output | BreakEndTime | DateTime | No | When InBreak is true, this field will have the Break End Time. |

## Validations

Refer to the documentation for GetResourceSchedule for detailed information.

## System Processing

- The system determines the Pay Day for the inputted date/time, then: 
- Calls GetResourceSchedule using the Pay Day as Start Date and End Date, 
- Searches in the result list the item in which the inputted date/time fits in.  
 

Refer to the documentation for GetResourceSchedule for detailed information.
