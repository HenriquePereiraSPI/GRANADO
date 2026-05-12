# AssignFacilityRotatingSchedule

**Category:** Apriso/Common/Resource
**Class:** `FlexNet.BusinessFacade.Resources.CalendarManager`
**Assembly:** `FlexNet.BusinessFacade.Resources.dll`
**Status:** Active

## Description

This Business Component method is used to assign a rotating schedule to a Facility.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | Facility | Char | Yes | The Facility to which the rotating schedule is assigned. |
| Input | RotatingWorkScheduleID | Integer | Yes | The rotating schedule to be assigned to the Facility. |
| Input | EffectiveDate | DateTime | Yes | The effective date of the assignment. |
| Input | DiscontinueDate | DateTime | No | The discontinue date of the assignment. |
| Input | DiscontinueDateProvided | Boolean | No | Indicates whether the discontinue date has been provided. |
| Output | FacilityRotatingScheduleID | Integer | No | The ID of the new record created in the Facility rotating schedule table. |

## Validations

- The system validates the Facility.  
- The system validates the work schedule.

## System Processing

- The system validates the Facility. 
- The system validates the work schedule. 
- The system updates the discontinue date of the previous assignment if it is null. 
- The system creates a new assignment in the Facility rotating schedule.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| FACILITY_ROTATING_SCHEDULE |  | A new record is created. |
