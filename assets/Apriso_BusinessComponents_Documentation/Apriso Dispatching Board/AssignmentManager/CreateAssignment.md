# CreateAssignment

**Category:** Apriso/Dispatching Board
**Class:** `FlexNet.BusinessFacade.DispatchingBoard.AssignmentManager`
**Assembly:** `FlexNet.BusinessFacade.DispatchingBoard`
**Status:** Active

## Description

This Business Component creates assignments for a Workspace.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | WorkSpaceID | Integer | Yes | The Workspace ID. |
| Input | Activities | ListofInteger | Yes | The list of activity IDs. |
| Input | ResourceIDs | ListofInteger | Yes | The list of DB resource IDs. |

## Validations

- Validates if the Workspace exists 
- Validates if the activities are empty 
- Validates if the ResourceIDs are empty

## System Processing

- The system iterates through the list and creates assignments between activities and the resource list

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| DB_RESOURCE_ACTIVITY | ALL | Activity ResourceIDs. |
