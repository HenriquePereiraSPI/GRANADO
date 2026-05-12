# PopulateDefaultResourceWorkSchedule

**Category:** Apriso/Common/Resource
**Class:** `FlexNet.BusinessFacade.Resources.CalendarManager`
**Assembly:** `FlexNet.BusinessFacade.Resources.dll`
**Status:** Active

## Description

This BC method populates default resource work schedule records for a Resource Name and Resource Type for the time range between StartDate and EndDate. The default resource work schedules are determined by the currently defined resource rotating schedule and current calendar configuration. Refer to GetResourceSchedule BC documentation. 
 

 This BC method is intended to be invoked multiple times to populate default resource work schedules for all required Resource and time period.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | ResourceName | Char | Yes | Name of the resource for which default schedule will be populated. Name from ResourceName column in RESOURCE_ table. |
| Input | ResourceType | Integer | Yes | type of the resource for which default schedule will be populated |
| Input | StartDate | DateTime | Yes | Start date of the schedule |
| Input | EndTime | DateTime | Yes | End date of the schedule |

## Validations

- Resource Name and Resource Type must exist in the Resource_ table.  
- Start Date must be before End Date.

## System Processing

- Delete all existing Default Resource Work Schedules for the user entered Resource name, Resource Type and within the user entered time range. 
- Retrieve Resource Work Schedules using the same logic as in GetResourceSchedule BC. 
- For each non-override resource work schedule returned by GetResourceSchedule BC, add a new Resource Work Schedule with DefaultSchedule set to true.

## Pre-Conditions

None

## Published Events

None

## History Recording in Production

None

## Host Integration Support

None

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| RESOURCE_WORK_SCHEDULE | ID | Generated |
|  | RESOURCEID | RESOURCE_.ID for Resource Name and Resource Type |
|  | FACILITY |  |
|  | PAYDAY |  |
|  | SHIFT |  |
|  | WORKPERIOD |  |
|  | EFFECTIVEDATE |  |
|  | EARNCODE |  |
|  | STARTTIME |  |
|  | ENDTIME |  |
|  | SCHEDULEDHOURS |  |
|  | NONWORKING |  |
|  | DEFAULTSCHEDULE | TRUE |
