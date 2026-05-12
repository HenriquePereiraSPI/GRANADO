# DeleteWorkCenterRotatingSchedule

**Category:** Apriso/Common/Resource
**Class:** `FlexNet.BusinessFacade.Resources.CalendarManager`
**Assembly:** `FlexNet.BusinessFacade.Resources.dll`
**Status:** Active

## Description

This method deletes a record from Work Center Rotating Schedule by its ID.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | WorkCenterRotatingScheduleID | Integer | Yes | Work Center Rotating Schedule ID for the record to be deleted |

## Validations

- The system validates if Work Center Rotating Schedule exists.

## System Processing

- The system validates Work Center Rotating Schedule,  
- The system deletes Work Center Rotating Schedule.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| WORK_CENTER_ROTATING_SCHEDULE |  | Record is deleted |
