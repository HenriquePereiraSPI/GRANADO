# ApplyResourceActivity

**Category:** Apriso/Dispatching Board
**Class:** `FlexNet.BusinessFacade.DispatchingBoard.DispatchingBoardManager`
**Assembly:** `FlexNet.BusinessFacade.DispatchingBoard`
**Status:** Retired

## Description

This Business Component method is used to apply the assignment changes from Dispatching Board back to a DELMIA Apriso table (WIP_REQ_RESOURCE).

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | ResourceActivityID | Integer | Yes | The Resource activity ID. |

## Validations

- The system validates that ResourceActivity exists.  
- The system validates that DBResource exists. 
- The system validates that DBResource is not a Work Center. 
- The system validates that the activity exists

## System Processing

The system applies the assigned Resource as a requested Resource to a WIP Order/Operation.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| WIP_REQ_RESOURCE | ALL | ALL |
