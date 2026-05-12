# CreateActivityWeighHeader

**Category:** Apriso/Dispatching Board
**Class:** `FlexNet.BusinessFacade.DispatchingBoard.DispatchingBoardManager`
**Assembly:** `FlexNet.BusinessFacade.DispatchingBoard`
**Status:** Retired

## Description

This Business Component creates an activity from the Weigh Header.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | WorkSpaceID | Integer | Yes | The Workspace ID. |
| Input | WeighHeaderID | Integer | No | The Weigh Header ID. |
| Output | ActivityID | Integer | No | The activity ID. |

## Validations

- Validates if the Workspace exists 
- Validates if the Weigh Header exists

## System Processing

- The system checks if there is a WIP Order assigned to the Weigh Header 
- The system checks if there is a WIP Operation assigned to the Weigh Header 
 
- If yes, then the system creates the activity from the assigned WIP Operation 
 
- Otherwise, the system creates the activity from the assigned WIP Order

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| DB_ACTIVITY | ALL | ALL |
