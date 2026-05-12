# BuildOperationStepsFlow

**Category:** Apriso/PB
**Class:** `FlexNet.BusinessFacade.Process.ProcessManager`
**Assembly:** `FlexNet.BusinessFacade.Process`
**Status:** Active
**Keywords:** Operation Steps Flow, Operation Steps, Flow

## Description

This Business Component method is used to build and update the Operation Step flow of each Operation defined for the given Process. The method is intended for Processes that are created outside of Process Builder.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | ProcessID | Integer | Yes | The ID of the Process for which the Process Operation Steps Flow requires a rebuild. |

## Validations

-  The system validates if the Process exists in the system. 
-  The system validates the revision status, which cannot be Prototype or Active. 
-  The system validates that at least one Process Operation exists in the system.

## System Processing

-  The system builds a Process Operation Step flow graph based on the Process Operation Step for each Process Operation. 
-  The system updates the Process Operation Step Flow with the Process Operation Step graph XML for each Process Operation defined for the Process.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| PROCESS_OPERATION | StepsFlow | The Process Operation Step graph XML. |
