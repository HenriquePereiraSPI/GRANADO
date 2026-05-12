# CreateResourceActivity

**Category:** Apriso/Dispatching Board
**Class:** `FlexNet.BusinessFacade.DispatchingBoard.DispatchingBoardManager`
**Assembly:** `FlexNet.BusinessFacade.DispatchingBoard`
**Status:** Retired

## Description

This Business Component creates an assignment between an activity and a resource.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | WorkSpaceID | Integer | Yes | The Workspace ID. |
| Input | DBResourceID | Integer | No | The resource ID. |
| Input | DBActivityID | Integer | No | The activity ID. |
| Output | DBResourceActivityID | Integer | No | The resource-activity ID. |

## Validations

- Validates if the Workspace exists

## System Processing

- The system creates a resource-activity as an assignment between the inputted activity and resource

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| DB_RESOURCE_ACTIVITY | ALL | ALL |
