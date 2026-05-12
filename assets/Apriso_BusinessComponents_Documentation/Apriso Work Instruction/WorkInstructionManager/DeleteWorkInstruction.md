# DeleteWorkInstruction

**Category:** Apriso/Work Instruction
**Class:** `FlexNet.BusinessFacade.WorkInstruction.WorkInstructionManager`
**Assembly:** `FlexNet.BusinessFacade.WorkInstruction.dll`
**Status:** Active
**Keywords:** DeleteWorkInstruction

## Description

Deletes a WORK_INSTRUCTION record.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | WorkInstructionID | Integer | Yes | ID of the work instruction. |

## Validations

- Validation fails if WorkInstructionID corresponding to WORK_INSTRUCTION does not exist.

## System Processing

- System deletes the WORK_INSTRUCTION record with provided inputs.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| WORK_INSTRUCTION | All | N/A |
