# CreateResourceActivities

**Category:** Apriso/Dispatching Board
**Class:** `FlexNet.BusinessFacade.DispatchingBoard.DispatchingBoardManager`
**Assembly:** `FlexNet.BusinessFacade.DispatchingBoard`
**Status:** Active

## Description

This Business Component creates an assignment between an activity and a resource.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | WorkSpaceID | Integer | Yes | The Workspace ID. |
| Input | DBResourceIDList | ListofInteger | No | The resource ID. |
| Input | DBActivityIDList | ListofInteger | No | The activity ID. |
| Output | DBResourceActivityIDList | ListofInteger | No | The resource activity ID. |

## Validations

- Validates if the Workspace exists

## System Processing

- The system iterates through the activity/resource list 
- The system creates the resource-activity as an assignment between the inputted activity and resource

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| DB_RESOURCE_ACTIVITY | ALL | ALL |
