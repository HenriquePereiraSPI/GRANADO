# ApplyWipOperations

**Category:** Apriso/Dispatching Board
**Class:** `FlexNet.BusinessFacade.DispatchingBoard.DispatchingBoardManager`
**Assembly:** `FlexNet.BusinessFacade.DispatchingBoard`
**Status:** Active

## Description

This Business Component method is used to apply activity changes back to a DELMIA Apriso table (WIP_ORDER).

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | ActivityIDList | ListofInteger | Yes | The activity ID list. |

## Validations

- The system validates that DBActivity exists. 
- The system validates that DBActivity is a WIP Operation. 
- The system validates that that the WIP Order/Operation exists.

## System Processing

The system iterates through the updated WIP Order/Operation values with changes from DBActivity.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| WIP_ORDER | ALL | ALL |
| WIP_OPERATION | ALL | ALL |
