# CreateActivityDependencies

**Category:** Apriso/Dispatching Board
**Class:** `FlexNet.BusinessFacade.DispatchingBoard.DispatchingBoardManager`
**Assembly:** `FlexNet.BusinessFacade.DispatchingBoard`
**Status:** Active

## Description

This Business Component creates dependencies between activities.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | WorkSpaceID | Integer | Conditional | The Workspace ID. |
| Input | ParentActivityIDList | ListofInteger | No | The parent activity ID. |
| Input | ChildActivityIDList | ListofInteger | No | The child activity ID. |
| Input | DispatchSequenceTypeList | ListofInteger | No | The dependency type. |
| Input | LagInSecondsList | ListofInteger | No | The lag time between activities. |
| Output | DBActivityDependencyIDList | ListofInteger | No | The dependency between the activities ID. |

## Validations

- Validates if the Workspace exists  
- Validates if the parent activity is the same as the child activity

## System Processing

- The system iterates through the Input list and creates activity dependency records from the inputs

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| DB_ACTIVITY_DEPENDENCY | ALL | ALL |
