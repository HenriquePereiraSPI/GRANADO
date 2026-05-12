# DeleteFacilityRotatingSchedule

**Category:** Apriso/Common/Resource
**Class:** `FlexNet.BusinessFacade.Resources.CalendarManager`
**Assembly:** `FlexNet.BusinessFacade.Resources.dll`
**Status:** Active

## Description

This method deletes a record from Facility Rotating Schedule by its ID.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | FacilityRotatingScheduleID | Integer | Yes | Facility Rotating Schedule ID for the record to be deleted. |

## Validations

- System validates if Facility Rotating Schedule exists.

## System Processing

- System validates Facility Rotating Schedule, 
- System deletes Facility Rotating Schedule.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| FACILITY_ROTATING_SCHEDULE |  | Record is deleted. |
