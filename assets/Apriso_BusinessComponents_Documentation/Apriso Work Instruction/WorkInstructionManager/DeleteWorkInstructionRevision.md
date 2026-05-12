# DeleteWorkInstructionRevision

**Category:** Apriso/Work Instruction
**Class:** `FlexNet.BusinessFacade.WorkInstruction.WorkInstructionManager`
**Assembly:** `FlexNet.BusinessFacade.WorkInstruction.dll`
**Status:** Active
**Keywords:** WorkInstructionRevisionParams

## Description

Deletes a WORK_INSTR_REVISION record.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | WorkInstructionRevisionID | Integer | Yes | ID of the work instruction revision to be deleted. |

## Validations

- Validation fails if WorkInstructionRevisionID corresponding to WORK_INSTR_REVISION does not exist.

## System Processing

-  System deletes the WORK_INSTR_REVISION record.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| WORK_INSTR_REVISION | All | N/A |
