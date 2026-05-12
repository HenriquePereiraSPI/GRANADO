# DeleteWorkSpace

**Category:** Apriso/Dispatching Board
**Class:** `FlexNet.BusinessFacade.DispatchingBoard.DispatchingBoardManager`
**Assembly:** `FlexNet.BusinessFacade.DispatchingBoard`
**Status:** Active

## Description

This Business Component deletes a Workspace record.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | WorkSpaceID | Integer | Yes | The Workspace ID. |

## Validations

- Validates if the Workspace exists

## System Processing

- The system deletes the Workspace and all of the linked activities and resources

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| DB_WORK_SPACE | ALL | WorkSpaceID |
