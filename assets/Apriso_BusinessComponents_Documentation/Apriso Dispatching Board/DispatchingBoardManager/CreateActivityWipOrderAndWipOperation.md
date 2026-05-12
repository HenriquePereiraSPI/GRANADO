# CreateActivityWipOrderAndWipOperation

**Category:** Apriso/Dispatching Board
**Class:** `FlexNet.BusinessFacade.DispatchingBoard.DispatchingBoardManager`
**Assembly:** `FlexNet.BusinessFacade.DispatchingBoard`
**Status:** Retired

## Description

This Business Component creates an activity from a WIP Order and WIP Operation.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | WorkSpaceID | Integer | Yes | The Workspace ID. |
| Input | WipOrderNo | Char | No | The WIP Order number. |
| Input | WipOrderType | Integer | No | The WIP Order type. |
| Output | WipOrderActivityID | Integer | No | The WIP Order activity ID. |

## Validations

- Validates if the Workspace exists 
- Validates if the WIP Order exists 
- Validates if the WIP Operation exists

## System Processing

- The system creates an activity by copying the value from the WIP Order and the dependent WIP Operation 
- If the WIP Order status is not new, the system sets AllowChangeDuration and AllowChangeStartDate to False. If the WIP Order status is new, the system sets both to True.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| DB_ACTIVITY | ALL | ALL |
