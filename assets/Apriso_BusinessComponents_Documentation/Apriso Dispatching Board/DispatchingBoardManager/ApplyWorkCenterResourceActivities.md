# ApplyWorkCenterResourceActivities

**Category:** Apriso/Dispatching Board
**Class:** `FlexNet.BusinessFacade.DispatchingBoard.DispatchingBoardManager`
**Assembly:** `FlexNet.BusinessFacade.DispatchingBoard`
**Status:** Active

## Description

This Business Component method is used to apply the assignment changes from Dispatching Board back to a DELMIA Apriso table (WIP_OPERATION).

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | ResourceActivityIDList | ListofInteger | Yes | The resource activity ID. |

## Validations

- The system validates if DBResourceActivity exists.  
- The system validates if DBResource exists.  
- The system validates if DBResource is a Work Center.  
- The system validates if DBActivity exists.  
- The system validates if the WIP Operation exists.

## System Processing

- The system iterates through ResourceActivityList and updates WorkCenter in the WIP Operation record.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| WIP_OPERATION | WorkCenter | The assigned Work Center. |
