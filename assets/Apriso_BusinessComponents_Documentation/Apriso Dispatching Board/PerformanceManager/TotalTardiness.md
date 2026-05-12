# TotalTardiness

**Category:** Apriso/Dispatching Board
**Class:** `FlexNet.BusinessFacade.DispatchingBoard.PerformanceManager`
**Assembly:** `FlexNet.BusinessFacade.DispatchingBoard`
**Status:** Active

## Description

This Business Component gets the total tardiness time in hours.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | WorkSpaceID | Integer | Yes | The Workspace ID. |

## Validations

- Validates if the Workspace exists 
- Validates if the TotalTardiness Performance Class exists

## System Processing

- The system iterates through all the activities in the Workspace 
-  The system calculates the difference in hours between DueDate and EndDate  
 
-  If the EndDate is earlier than the DueDate, then the value is skipped  
 
- The system calculates and adds up the tardiness time of all the activities 
- The system updates the performance value with the total tardiness time of the Workspace

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| DB_PERFORMANCE | ALL | The calculated result. |
