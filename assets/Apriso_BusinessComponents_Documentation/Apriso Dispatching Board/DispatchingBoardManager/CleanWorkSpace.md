# CleanWorkSpace

**Category:** Apriso/Dispatching Board
**Class:** `FlexNet.BusinessFacade.DispatchingBoard.DispatchingBoardManager`
**Assembly:** `FlexNet.BusinessFacade.DispatchingBoard`
**Status:** Active

## Description

This Business Component is used to remove all of the data from the specified Workspace and cleans all of the linked records.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | WorkSpaceID | Char | Yes | The Workspace ID. |

## Validations

- The system validates if the Workspace exists.

## System Processing

- The system deletes all of the linked activities, linked activity dependencies, and Resources with the linked Resource activities. 
- The system deletes all of the linked performance records. 
- The system deletes all of the linked working time records.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| DB_ACTIVITY | ALL | WorkSpaceID. |
| DB_ACTIVITY_DEPENDENCY | ALL | WorkSpaceID. |
| DB_RESOURCE | ALL | WorkSpaceID. |
| DB_RESOURCE_ACTIVITY | ALL | WorkSpaceID. |
| DB_PERFORMANCE | ALL | WorkSpaceID. |
| DB_WORKING_TIME | ALL | WorkSpaceID. |
