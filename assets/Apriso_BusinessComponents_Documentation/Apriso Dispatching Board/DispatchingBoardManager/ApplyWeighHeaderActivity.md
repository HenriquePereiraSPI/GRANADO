# ApplyWeighHeaderActivity

**Category:** Apriso/Dispatching Board
**Class:** `FlexNet.BusinessFacade.DispatchingBoard.DispatchingBoardManager`
**Assembly:** `FlexNet.BusinessFacade.DispatchingBoard`
**Status:** Retired

## Description

This Business Component method is used to apply activity changes back to a DELMIA Apriso table (WEIGH_HEADER).

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | ActivityID | Integer | Yes | The activity ID. |

## Validations

- The system validates that DBActivity exists. 
- The system validates that the weigh header exists.

## System Processing

The system updates the corresponding weigh header with the changes from the activity.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| WEIGH_HEADER | ALL | ALL |
