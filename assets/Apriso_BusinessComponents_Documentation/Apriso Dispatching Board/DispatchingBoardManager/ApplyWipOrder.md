# ApplyWipOrder

**Category:** Apriso/Dispatching Board
**Class:** `FlexNet.BusinessFacade.DispatchingBoard.DispatchingBoardManager`
**Assembly:** `FlexNet.BusinessFacade.DispatchingBoard`
**Status:** Retired

## Description

This Business Component is used to apply activity changes back to a DELMIA Apriso table (WIP_ORDER).

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | ActivityID | Integer | Yes | The activity ID. |

## Validations

- The system validates that DBActivity exists. 
- The system validates if DBActivity is a WIP Order. 
- The system validates that the WIP Order exists.

## System Processing

- The system updates the WIP Order values with changes from DBActivity.  
- The system sets the HasChange flag to false.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| WIP_ORDER | ALL | ALL |
| DB_ACTIVITY | HasChanges | False |
