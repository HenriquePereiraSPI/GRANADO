# ApplyWipOrders

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
- The system validates that DBActivity is a WIP Order. 
- The system validates that the WIP Order exists.

## System Processing

- The system iterates through ActivityIDList and updates the WIP Order values with changes from DBActivity.  
- The system sets the HasChange flag to false.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| WIP_ORDER | ALL | ALL |
| DB_ACTIVITY | HasChanges | FALSE |
