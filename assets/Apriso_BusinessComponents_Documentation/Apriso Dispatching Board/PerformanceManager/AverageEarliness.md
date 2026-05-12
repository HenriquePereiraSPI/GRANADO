# AverageEarliness

**Category:** Apriso/Dispatching Board
**Class:** `FlexNet.BusinessFacade.DispatchingBoard.PerformanceManager`
**Assembly:** `FlexNet.BusinessFacade.DispatchingBoard`
**Status:** Active

## Description

This Business Component method is used to get the average earliness time in hours.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | WorkSpaceID | Integer | Yes | The Workspace ID. |

## Validations

- The system validates that the Workspace exists. 
- The system validates that the AverageEarliness Performance Class exists.

## System Processing

- The system iterates through all of the activities in the Workspace 
- The system calculates and sums up the hours difference between the DueDate and EndDate of each activity. 
- The system calculates the average value of the earliness hours. 
- The system updates the performance value of the Workspace.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| DB_PERFORMANCE | ALL | The calculated result. |
