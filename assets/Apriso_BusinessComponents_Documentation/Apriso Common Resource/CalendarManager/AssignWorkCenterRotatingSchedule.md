# AssignWorkCenterRotatingSchedule

**Category:** Apriso/Common/Resource
**Class:** `FlexNet.BusinessFacade.Resources.CalendarManager`
**Assembly:** `FlexNet.BusinessFacade.Resources.dll`
**Status:** Active

## Description

This Business Component method is used to assign a Rotating Schedule to a Work Center.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | WorkCenter | Char | Yes | The Work Center. |
| Input | RotatingWorkScheduleID | Integer | Yes | The Rotating Schedule to be assigned to the Work Center. |
| Input | EffectiveDate | DateTime | Yes | The effective date of the assignment. |
| Input | DiscontinueDate | DateTime | No | The discontinue date of the assignment. |
| Input | DiscontinueDateProvided | Boolean | No | Indicates whether the discontinue date has been provided. |
| Output | WorkCenterRotatingScheduleID | Integer | No | The ID of the new record created in the WORK_CENTER_ROTATING_SCHEDULE table. |

## Validations

- The system validates the Work Center. 
- The system validates the work schedule.

## System Processing

- The system updates the discontinue date of the previous assignment if it is null. 
- The system creates a new assignment in the Work Center Rotating Schedule.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| WORK_CENTER_ROTATING_SCHEDULE |  | A new record is created. |
