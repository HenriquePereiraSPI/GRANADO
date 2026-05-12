# DuplicateWorkSpace

**Category:** Apriso/Dispatching Board
**Class:** `FlexNet.BusinessFacade.DispatchingBoard.DispatchingBoardManager`
**Assembly:** `FlexNet.BusinessFacade.DispatchingBoard`
**Status:** Active

## Description

This Business Component duplicates a Workspace with the linked activities, resources, and assignment relationships between activities and resources.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | WorkSpaceID | Integer | Yes | The Workspace ID. |
| Input | NewWorkSpaceName | Integer | Yes | The new Workspace name. |
| Input | NewWorkSpaceDescription | Char | No | The new Workspace Description |
| Input | StartDate | DateTime | No | The start date of the Workspace. |
| Input | EndDate | DateTime | No | The end date of the Workspace. |
| Output | NewWorkSpaceID | Integer | No | The new Workspace ID. |

## Validations

- Validates if the Workspace exists 
- Validates if the same Workspace name created by the same employee exists

## System Processing

- The system duplicates the Workspace records 
- The system duplicates all the linked activity records and links them to the new Workspace 
 
 
 
- The system duplicates all the linked activity dependency records and links them to the new Workspace 
- The system duplicates all the linked resource records and links them to the new Workspace 
- The system duplicates all the linked resource activity records and links them to the new Workspace

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| DB_WORK_SPACE | ALL | ALL |
| DB_ACTIVITY | ALL | ALL |
| DB_ACTIVITY_DEPENDENCY | ALL | ALL |
| DB_RESOURCE | ALL | ALL |
| DB_RESOURCE_ACTIVITY | ALL | ALL |
