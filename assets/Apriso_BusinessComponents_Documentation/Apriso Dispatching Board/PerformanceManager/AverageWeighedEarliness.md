# AverageWeighedEarliness

**Category:** Apriso/Dispatching Board
**Class:** `FlexNet.BusinessFacade.DispatchingBoard.PerformanceManager`
**Assembly:** `FlexNet.BusinessFacade.DispatchingBoard`
**Status:** Active

## Description

This Business Component method is used to get the average weighed earliness time in hours.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | WorkSpaceID | Integer | Yes | The Workspace ID. |

## Validations

- The system validates that the Workspace exists. 
- The system validates that the AverageWeighedEarliness Performance Class exists.

## System Processing

- The system iterates through all of the activities in the Workspace.  
- The system calculate the hours difference between DueDate and EndDate and then multiplies by the priority of each activity. 
- The system sums up the weighed earliness hours for all of the activities. 
- The system calculates the average value of the weighed earliness hours. 
- The system updates the performance value of the Workspace.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| DB_PERFORMANCE | ALL | The calculated result. |
