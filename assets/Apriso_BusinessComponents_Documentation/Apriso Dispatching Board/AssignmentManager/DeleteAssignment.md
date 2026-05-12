# DeleteAssignment

**Category:** Apriso/Dispatching Board
**Class:** `FlexNet.BusinessFacade.DispatchingBoard.AssignmentManager`
**Assembly:** `FlexNet.BusinessFacade.DispatchingBoard`
**Status:** Active

## Description

This Business Component deletes all of the assignments in a Workspace.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | WorkSpaceID | Integer | Yes | The Workspace ID. |

## Validations

- Validates if the Workspace exists

## System Processing

- Removes all of the assignments of the Workspace

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| DB_RESOURCE_ACTIVITY | ALL | WorkspaceID. |
