# BuildOperationFlowLayout

**Category:** Apriso/PB
**Class:** `FlexNet.BusinessFacade.Process.ProcessManager`
**Assembly:** `FlexNet.BusinessFacade.Process`
**Status:** Active
**Keywords:** BuildOperationFlowLayout, Operation Flow, Layout

## Description

This Business Component method is used to build and update the Operation flow layout of the Operations defined for the given Process. This method is intended for Processes that are created outside of Process Builder.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | ProcessID | Integer | Yes | The ID of the Process for which the Process Operation Flow Layout requires a rebuild. |

## Validations

- The system validates if the Process exists in the system.  
- The system validates the revision status, which cannot be Prototype or Active.  
- The system validates that at least one Process Operation exists in the system.

## System Processing

- The system determines which Process Sequence is the first Operation. When no Process Sequence is defined, all the Process Operations are treated as the first Operation. 
- The system builds an Operation Sequence graph based on the Process Operation and Process Sequences. 
- The system identifies merge operations by inspecting all possible navigation flows and determines whether multiple operations navigating to the same operation should be MERGE or ADD to the next operation. Operation navigation paths that include alternative, fail, and scrap cannot be MERGE as it indicates these flows need to be completed before navigating to the next operation which are not logically possible. 
- The system updates the Process Operation Flow Layout with the Operation Sequence graph XML.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| PROCESS | OperationFlowLayout | The new Operation Flow Layout XML. |
