# CreateActivityDependency

**Category:** Apriso/Dispatching Board
**Class:** `FlexNet.BusinessFacade.DispatchingBoard.DispatchingBoardManager`
**Assembly:** `FlexNet.BusinessFacade.DispatchingBoard`
**Status:** Retired

## Description

This Business Component creates dependencies between activities.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | WorkSpaceID | Integer | Yes | The Workspace ID. |
| Input | ParentActivityIDList | Integer | No | The parent activity ID. |
| Input | ChildActivityIDList | Integer | No | The child activity ID. |
| Input | DispatchSequenceTypeList | Integer | No | The dependency type. |
| Input | LagInSecondsList | Integer | No | The lag time between activities. |
| Output | DBActivityDependencyIDList | Integer | No | The dependency between the activities ID. |

## Validations

- Validates if the Workspace exists 
- Validates if the parent activity is the same as the child activity

## System Processing

- The system creates the activity dependency records from the Inputs

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| DB_ACTIVITY_DEPENDENCY | ALL | ALL |
