# ResourceUtilizationTime

**Category:** Apriso/Dispatching Board
**Class:** `FlexNet.BusinessFacade.DispatchingBoard.PerformanceManager`
**Assembly:** `FlexNet.BusinessFacade.DispatchingBoard`
**Status:** Active

## Description

This Business Component gets the resource utilization time in hours.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | WorkSpaceID | Integer | Yes | The Workspace ID. |

## Validations

- Validates if the Workspace exists 
- Validates if the ResourceUtilizationTime Performance Class exists

## System Processing

- The system iterates through all the resources and creates/updates the performance value against each resource in the Workspace 
- The system finds all the assignments and adds up a sum for the total assigned working hours 
- The system updates the performance value with the resource utilization time of the Workspace

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| DB_PERFORMANCE | ALL | The calculated result. |
