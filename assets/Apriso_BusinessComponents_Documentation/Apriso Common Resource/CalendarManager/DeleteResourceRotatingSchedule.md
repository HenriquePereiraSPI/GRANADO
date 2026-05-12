# DeleteResourceRotatingSchedule

**Category:** Apriso/Common/Resource
**Class:** `FlexNet.BusinessFacade.Resources.CalendarManager`
**Assembly:** `FlexNet.BusinessFacade.Resources.dll`
**Status:** Active

## Description

This method deletes a record from Resource Rotating Schedule by its ID

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | ResourceRotatingScheduleID | Integer | Yes | Resource Rotating Schedule ID for the record to be deleted |

## Validations

- The system validates if Resource Rotating Schedule exists.

## System Processing

- The system validates Resource Rotating Schedule,  
- The system deletes Resource Rotating Schedule.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| RESOURCE_ROTATING_SCHEDULE |  | Record is deleted |
