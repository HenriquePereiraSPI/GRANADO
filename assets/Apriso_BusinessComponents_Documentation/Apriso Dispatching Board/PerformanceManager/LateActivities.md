# LateActivities

**Category:** Apriso/Dispatching Board
**Class:** `FlexNet.BusinessFacade.DispatchingBoard.PerformanceManager`
**Assembly:** `FlexNet.BusinessFacade.DispatchingBoard`
**Status:** Active

## Description

This Business Component gets the number of late activities.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | WorkSpaceID | Integer | Yes | Workspace ID |

## Validations

- Validates if the Workspace exists.  
- Validates if the "LateActivities" Performance Class exists

## System Processing

- The system iterates through all the activities in the Workspace  
- The system counts the number of activities whose end date is greater than the due date  
- The system updates the performance value of the Workspace

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| DB_PERFORMANCE | ALL | The calculated result. |
