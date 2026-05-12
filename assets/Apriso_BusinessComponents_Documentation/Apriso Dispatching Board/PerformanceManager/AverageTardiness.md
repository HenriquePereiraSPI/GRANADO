# AverageTardiness

**Category:** Apriso/Dispatching Board
**Class:** `FlexNet.BusinessFacade.DispatchingBoard.PerformanceManager`
**Assembly:** `FlexNet.BusinessFacade.DispatchingBoard`
**Status:** Active

## Description

This Business Component method is used to get the average tardiness time in hours.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | WorkSpaceID | Integer | Yes | The Workspace ID. |

## Validations

- The system validates that the Workspace exists. 
- The system validates that the AverageTardiness Performance Class exists.

## System Processing

- The system iterates through all of the activities in the Workspace.  
- The system calculates and sums up the tardiness time of each activity.  
- The system calculates the average value of the tardiness hours.  
- The system updates the performance value of the Workspace.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| DB_PERFORMANCE | All | The calculated result. |
