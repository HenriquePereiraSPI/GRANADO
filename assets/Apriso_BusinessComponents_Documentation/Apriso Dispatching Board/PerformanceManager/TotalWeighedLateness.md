# TotalWeighedLateness

**Category:** Apriso/Dispatching Board
**Class:** `FlexNet.BusinessFacade.DispatchingBoard.PerformanceManager`
**Assembly:** `FlexNet.BusinessFacade.DispatchingBoard`
**Status:** Active

## Description

This Business Component gets the total weighed lateness time in hours.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | WorkSpaceID | Integer | Yes | The Workspace ID. |

## Validations

- Validates if the Workspace exists  
- Validates if the "TotalWeighedLateness" Performance Class exists

## System Processing

- The system iterates through all of the activities in the Workspace  
- The system calculates the hours difference between DueDate and EndDate and then multiplies by the priority of each activity  
- The system sums up the weighed lateness of all of the activities  
- The system updates the performance value of the Workspace

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| DB_PERFORMANCE | ALL | The calculated result. |
