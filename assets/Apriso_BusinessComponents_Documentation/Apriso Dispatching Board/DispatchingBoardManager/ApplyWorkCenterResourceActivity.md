# ApplyWorkCenterResourceActivity

**Category:** Apriso/Dispatching Board
**Class:** `FlexNet.BusinessFacade.DispatchingBoard.DispatchingBoardManager`
**Assembly:** `FlexNet.BusinessFacade.DispatchingBoard`
**Status:** Retired

## Description

This Business Component is used to apply assignment changes from Dispatching Board back to a DELMIA Apriso table (WIP_OPERATION).

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | ResourceActivityID | Integer | Yes | The resource activity ID. |

## Validations

- The system validates that DBResourceActivity exists. 
- The system validates that DBResource exists. 
- The system validates iof DBResource is a Work Center. 
- The system validates that DBActivity exists. 
- The system validates that the WIP Operation exists.

## System Processing

The system iterates through ResourceActivityList and updates WorkCenter in the WIP Operation record.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| WIP_OPERATION | WorkCenter | The assigned Work Center. |
