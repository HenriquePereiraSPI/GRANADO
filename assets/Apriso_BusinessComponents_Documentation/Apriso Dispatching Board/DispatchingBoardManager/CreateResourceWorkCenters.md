# CreateResourceWorkCenters

**Category:** Apriso/Dispatching Board
**Class:** `FlexNet.BusinessFacade.DispatchingBoard.DispatchingBoardManager`
**Assembly:** `FlexNet.BusinessFacade.DispatchingBoard`
**Status:** Active

## Description

This Business Component creates an assignment between an activity and a resource (Work Center).

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | WorkSpaceID | Integer | Yes | The Workspace ID. |
| Input | WorkCenterList | ListofChar | No | The Work Center. |
| Output | DBResourceIDList | ListofInteger | Yes | The resource ID. |

## Validations

- The system validates that the Workspace exists.  
- The system validates that the Work Center exists.

## System Processing

- The system iterates through the Work Center list 
- The system creates a Dispatching Board resource record by copying the value from the Work Center

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| DB_RESOURCE | ALL | ALL |
