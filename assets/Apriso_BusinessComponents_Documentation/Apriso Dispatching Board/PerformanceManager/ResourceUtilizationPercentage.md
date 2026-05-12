# ResourceUtilizationPercentage

**Category:** Apriso/Dispatching Board
**Class:** `FlexNet.BusinessFacade.DispatchingBoard.PerformanceManager`
**Assembly:** `FlexNet.BusinessFacade.DispatchingBoard`
**Status:** Active

## Description

This Business Component gets the resource utilization as a percentage of the total available time.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | WorkSpaceID | Integer | Yes | The Workspace ID. |

## Validations

- Validates if the Workspace exists 
- Validates if the ResourceUtilizationPercentage Performance Class exists

## System Processing

- The system calculates the total available working hours of the Workspace with a specified time range and a binded working schedule 
- The system iterates through all the resources and creates/updates the performance value against each resource in the Workspace 
- The system finds all the assignments and adds up a sum for the total assigned working hours 
- The system calculates the resource utilization percentage of the total assigned working hours for the total available working hours 
- The system updates the performance value with the resource utilization percentage hours of the Workspace

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| DB_PERFORMANCE | ALL | The calculated result. |
