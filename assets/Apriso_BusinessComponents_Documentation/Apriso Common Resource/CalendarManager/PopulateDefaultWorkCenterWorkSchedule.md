# PopulateDefaultWorkCenterWorkSchedule

**Category:** Apriso/Common/Resource
**Class:** `FlexNet.BusinessFacade.Resources.CalendarManager`
**Assembly:** `FlexNet.BusinessFacade.Resources.dll`
**Status:** Active

## Description

This BC method populates default work center work schedule records for a WorkCenter for the time range between StartDate and EndDate. The default work center work schedules are determined by the currently defined work center rotating schedule and current calendar configuration. Refer to GetWorkCenterSchedule BC documentation. 
 

 This BC method is intended to be invoked multiple times to populate default work center work schedules for all required WorkCenter and time period.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | WorkCenter | Char | Yes | Name of the work center for which default schedule will be populated. Name from WorkCenter column in WORK_CENTER table. |
| Input | StartDate | DateTime | Yes | Start date of the schedule |
| Input | EndTime | DateTime | Yes | End date of the schedule |

## Validations

- Work Center must exist in the WORK_CENTER table.  
- Start Date must be before End Date.

## System Processing

- Delete all existing Default Work Center Work Schedules for the user entered Work Center and within the user entered time range. 
- Retrieve Work Center Work Schedules using the same logic as in GetWorkCenterSchedule BC. 
- For each non-override work center work schedule returned by GetWorkCenterSchedule BC, add a new Work Center Work Schedule with DefaultSchedule set to true.

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
| WORK_CENTER_WORK_SCHEDULE | ID | Generated |
|  | WORKCENTER | WORK_CENTER.WORKCENTER for Work Center |
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
