# ApplyResourceActivities

**Category:** Apriso/Dispatching Board
**Class:** `FlexNet.BusinessFacade.DispatchingBoard.DispatchingBoardManager`
**Assembly:** `FlexNet.BusinessFacade.DispatchingBoard`
**Status:** Active

## Description

This Business Component is used to apply the assignment changes from Dispatching Board back to an DELMIA Apriso table (WIP_REQ_RESOURCE).

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | ResourceActivityIDList | ListofInteger | Yes | The resource activity ID. |

## Validations

- The system validates if ResourceActivity exists.  
- The system validates if DBResource exists. 
- The system validates that DBResource is not a WorkCenter. 
- The system validates if Activity exists.

## System Processing

The system iterates through the ResourceActivity list and applies the assigned Resource as a requested Resource to a WIP Order/Operation.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| WIP_REQ_RESOURCE | ALL | ALL |
