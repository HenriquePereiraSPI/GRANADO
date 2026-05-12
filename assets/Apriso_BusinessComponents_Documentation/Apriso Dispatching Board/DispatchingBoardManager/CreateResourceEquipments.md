# CreateResourceEquipments

**Category:** Apriso/Dispatching Board
**Class:** `FlexNet.BusinessFacade.DispatchingBoard.DispatchingBoardManager`
**Assembly:** `FlexNet.BusinessFacade.DispatchingBoard`
**Status:** Active

## Description

This Business Component creates a database resource as well as an assignment (based on WIP_REQ_RESOURCE) between an activity and a resource (Equipment).

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | WorkSpaceID | Integer | Yes | The Workspace ID. |
| Input | EquipmentIDList | ListofInteger | No | The equipment ID. |
| Output | DBResourceIDList | ListofInteger | No | The resource ID. |

## Validations

- Validates if the Workspace exists 
- Validates if the equipment exists 
- Validates if the equipment's referenced resource exists

## System Processing

- The system iterates through the equipment list 
- The system creates a Dispatching Board resource record by copying the value from the equipment

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| DB_RESOURCE | ALL | ALL |
