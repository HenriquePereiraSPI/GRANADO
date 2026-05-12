# DeleteWorkInstructionRevisionParameter

**Category:** Apriso/Work Instruction
**Class:** `FlexNet.BusinessFacade.WorkInstruction.WorkInstructionManager`
**Assembly:** `FlexNet.BusinessFacade.WorkInstruction.dll`
**Status:** Active
**Keywords:** DeleteWorkInstructionRevisionParameter

## Description

Deletes a WORK_INSTR_REVISION_PARAMS record.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | WorkInstructionRevisionParameterID | Integer | Yes | ID of the work instruction revision parameter to be deleted. |

## Validations

- Validation fails if WorkInstructionRevisionParameterID corresponding to WORK_INSTR_REVISION_PARAMS does not exist.

## System Processing

- System deletes the WORK_INSTR_REVISION_PARAMS record.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| WORK_INSTR_REVISION_PARAMS | All | N/A |
