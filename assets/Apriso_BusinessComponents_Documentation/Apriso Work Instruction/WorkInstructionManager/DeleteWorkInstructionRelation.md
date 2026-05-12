# DeleteWorkInstructionRelation

**Category:** Apriso/Work Instruction
**Class:** `FlexNet.BusinessFacade.WorkInstruction.WorkInstructionManager`
**Assembly:** `FlexNet.BusinessFacade.WorkInstruction.dll`
**Status:** Active
**Keywords:** DeleteWorkInstructionRelation

## Description

Deletes a WORK_INSTR_WORK_INSTR record.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | WorkInstructionRelationID | Integer | Yes | ID of the work instruction relation to be deleted. |

## Validations

-  Validation fails if WorkInstructionRelationID corresponding to WORK_INSTR_WORK_INSTR does not exist.

## System Processing

-  System deletes the WORK_INSTR_WORK_INSTR record.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| WORK_INSTR_WORK_INSTR | All | N/A |
