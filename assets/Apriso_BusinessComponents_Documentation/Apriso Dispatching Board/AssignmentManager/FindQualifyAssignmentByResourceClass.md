# FindQualifyAssignmentByResourceClass

**Category:** Apriso/Dispatching Board
**Class:** `FlexNet.BusinessFacade.DispatchingBoard.AssignmentManager`
**Assembly:** `FlexNet.BusinessFacade.DispatchingBoard`
**Status:** Active

## Description

This Business Component finds the qualified resource with the specified resource class.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | WorkSpaceID | Integer | Yes | The Workspace ID. |

## Validations

- Validates if the Workspace exists

## System Processing

- The system iterates through all of the activities in the Workspace  
- The system checks if the resource class is specified  
- The system finds the first available resource is in the specified resource class  
- The system adds the activity to the activity list and adds the found resource to the resource list
