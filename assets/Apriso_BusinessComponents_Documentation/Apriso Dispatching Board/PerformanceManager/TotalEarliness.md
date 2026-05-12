# TotalEarliness

**Category:** Apriso/Dispatching Board
**Class:** `FlexNet.BusinessFacade.DispatchingBoard.PerformanceManager`
**Assembly:** `FlexNet.BusinessFacade.DispatchingBoard`
**Status:** Active

## Description

This Business Component gets the total earliness time in hours.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | WorkSpaceID | Integer | Yes | The Workspace ID. |

## Validations

- Validates if the Workspace exists  
- Validates if the "TotalEarliness" Performance Class exists

## System Processing

- The system iterates through all of the activities in the Workspace 
- The system sums up the total earliness hours of all of the activities (that is, the due date minus the end date) 
- The system updates the performance value with the total earliness hours of the Workspace

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| DB_PERFORMANCE | ALL | The calculated result. |
