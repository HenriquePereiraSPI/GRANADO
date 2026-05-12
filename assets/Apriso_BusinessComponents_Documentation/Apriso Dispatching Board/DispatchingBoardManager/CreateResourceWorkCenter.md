# CreateResourceWorkCenter

**Category:** Apriso/Dispatching Board
**Class:** `FlexNet.BusinessFacade.DispatchingBoard.DispatchingBoardManager`
**Assembly:** `FlexNet.BusinessFacade.DispatchingBoard`
**Status:** Retired

## Description

This Business Component creates an assignment between an activity and a resource (Work Center).

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | WorkSpaceID | Integer | Yes | The Workspace ID. |
| Input | WorkCenter | Char | No | The Work Center. |
| Output | DBResourceID | Integer | No | The resource ID |

## Validations

- Validates if the Workspace exists 
- Validates if the Work Center exists

## System Processing

- The system creates a Dispatching Board resource record by copying the value from the Work Center

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| DB_RESOURCE | ALL | ALL |
