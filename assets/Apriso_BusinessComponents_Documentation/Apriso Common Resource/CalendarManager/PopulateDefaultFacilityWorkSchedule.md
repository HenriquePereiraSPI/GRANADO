# PopulateDefaultFacilityWorkSchedule

**Category:** Apriso/Common/Resource
**Class:** `FlexNet.BusinessFacade.Resources.CalendarManager`
**Assembly:** `FlexNet.BusinessFacade.Resources.dll`
**Status:** Active

## Description

This BC method populates default facility work schedule records for a Facility for the time range between StartDate and EndDate. The default facility work schedules are determined by the currently defined facility rotating schedule and current calendar configuration. Refer to GetFacilitySchedule BC documentation. 
 

 This BC method is intended to be invoked multiple times to populate default facility work schedules for all required Facility and time period.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | Facility | Char | Yes | Name of the Facility for which default schedule will be populated. Name from Facility column in FACILITY table. |
| Input | StartDate | DateTime | Yes | Start date of the schedule |
| Input | EndTime | DateTime | Yes | End date of the schedule |

## Validations

- Facility must exist in the FACILITY table.  
- Start Date must be before End Date.

## System Processing

- Delete all existing Default Facility Work Schedules for the user entered Facility and within the user entered time range. 
- Retrieve Facility Work Schedules using the same logic as in GetFacilitySchedule BC. 
- For each non-override facility work schedule returned by GetFacilitySchedule BC, add a new Facility Work Schedule with DefaultSchedule set to true.

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
| FACILITY_WORK_SCHEDULE | ID | Generated |
|  | FACILITY | FACILITY.Facility for Facility |
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
