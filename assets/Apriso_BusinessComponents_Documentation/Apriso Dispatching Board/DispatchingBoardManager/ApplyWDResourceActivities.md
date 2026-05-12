# ApplyWDResourceActivities

**Category:** Apriso/Dispatching Board
**Class:** `FlexNet.BusinessFacade.DispatchingBoard.DispatchingBoardManager`
**Assembly:** `FlexNet.BusinessFacade.DispatchingBoard`
**Status:** Active

## Description

This Business Component method is used to apply assignment changes from Dispatching Board back to a DELMIA Apriso table (WEIGH_HEADER).

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | ResourceActivityIDList | ListofInteger | Yes | The Resource activity ID. |

## Validations

- The system validates that ResourceActivity exists. 
- The system validates that DBResource exists. 
- The system validates that DBResource is an employee or a scale station. 
- The system validates that the activity exists.

## System Processing

The system iterates through the ResourceActivity list and applies the assigned Resource as a scale station or an employee to the weigh header.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| WEIGH_HEADER | ScaleStationID | The ResourceID from the assigned Resource. |
|  | EmployeeID | The EmployeeID from the assigned Resource. |
