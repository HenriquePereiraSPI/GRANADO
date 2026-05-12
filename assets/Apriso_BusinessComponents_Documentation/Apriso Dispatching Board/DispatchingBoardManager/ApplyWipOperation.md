# ApplyWipOperation

**Category:** Apriso/Dispatching Board
**Class:** `FlexNet.BusinessFacade.DispatchingBoard.DispatchingBoardManager`
**Assembly:** `FlexNet.BusinessFacade.DispatchingBoard`
**Status:** Retired

## Description

This Business Component applies activity changes back to a DELMIA Apriso table (WIP_ORDER, WIP_OPERATION).

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | ActivityID | Integer | Yes | The activity ID. |

## Validations

- The system validates that DBActivity exists. 
- The system validates that DBActivity is a WIP Operation. 
- The system validates that the WIP Order/Operation exists.

## System Processing

The system updates the WIP Order/Operation values with changes from DBActivity.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| WIP_ORDER | ALL | ALL |
| WIP_OPERATION | ALL | ALL |
