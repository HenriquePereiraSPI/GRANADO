# CreateResourceEquipment

**Category:** Apriso/Dispatching Board
**Class:** `FlexNet.BusinessFacade.DispatchingBoard.DispatchingBoardManager`
**Assembly:** `FlexNet.BusinessFacade.DispatchingBoard`
**Status:** Retired

## Description

This Business Component creates an assignment between an activity and a resource (Equipment).

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | WorkSpaceID | Integer | Yes | The Workspace ID. |
| Input | EquipmentID | Integer | No | The equipment ID. |
| Output | DBResourceID | Integer | No | The resource ID. |

## Validations

- Validates if the Workspace exists 
- Validates if the equipment exists 
- Validates if the equipment's referenced resource exists

## System Processing

- The system creates a Dispatching Board resource record by copying the value from the equipment

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| DB_RESOURCE | ALL | ALL |
