# AssignResourceRotatingSchedule

**Category:** Apriso/Common/Resource
**Class:** `FlexNet.BusinessFacade.Resources.CalendarManager`
**Assembly:** `FlexNet.BusinessFacade.Resources.dll`
**Status:** Active

## Description

This Business Component method assigns a rotating schedule to a Resource.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | ResourceName | Char | Yes | The Resource name. |
| Input | ResourceType | Integer | Yes | The Resource type. |
| Input | RotatingWorkScheduleID | Integer | Yes | The rotating schedule to be assigned to the Resource. |
| Input | EffectiveDate | DateTime | Yes | The effective date of the assignment. |
| Input | DiscontinueDate | DateTime | No | The discontinue date of the assignment. |
| Input | DiscontinueDateProvided | Boolean | No | This indicates whether the discontinue date has been provided. |
| Output | ResourceRotatingScheduleID | Integer | No | The ID of the new record created in Resource rotating schedule table. |

## Validations

- The system validates the Resource.  
- The system validates the work schedule.

## System Processing

- The system validates the Resource.  
- The system validates the work schedule. 
- The system updates the discontinue date of the previous assignment if it is null. 
- The system creates a new assignment in the Resource rotating schedule.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| RESOURCE_ROTATING_SCHEDULE |  | A new record is created. |
