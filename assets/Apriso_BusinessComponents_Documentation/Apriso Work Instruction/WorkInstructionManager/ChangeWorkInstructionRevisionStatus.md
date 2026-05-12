# ChangeWorkInstructionRevisionStatus

**Category:** Apriso/Work Instruction
**Class:** `FlexNet.BusinessFacade.WorkInstruction.WorkInstructionManager`
**Assembly:** `FlexNet.BusinessFacade.WorkInstruction.dll`
**Status:** Active

## Description

Updates the work instruction revision status.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | RevisionID | Integer | Yes | The work instruction revision ID. |
| Input | Status | Integer | Yes | The revision status (Design - 1, Prototype - 2, Validating - 3, Active - 4, OnHold - 5, Cancelled - 6). |

## Validations

- The system validates if the status is supported.  
- The system validates if work instruction revision exists. 
- The system validates if the change revision status is allowed. 
- The system validates if the employee has the Work Instruction Author role.

## System Processing

- The system updates the work instruction revision status. If the Operation Step cache is enabled, the changes will be visible to the user after the cache refresh.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
|  | Status | Status |
