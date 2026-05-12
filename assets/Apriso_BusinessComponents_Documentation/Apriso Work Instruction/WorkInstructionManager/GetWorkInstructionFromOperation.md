# GetWorkInstructionFromOperation

**Category:** Apriso/Work Instruction
**Class:** `FlexNet.BusinessFacade.WorkInstruction.WorkInstructionManager`
**Assembly:** `FlexNet.BusinessFacade.WorkInstruction.dll`
**Status:** Active
**Keywords:** GetWorkInstructionFromOperation, Get, WorkInstruction, Work, Instruction, Operation

## Description

Retrieves a list of work instructions from an operation. The list contains either Name (work instructions retrieved dynamically) or FUID (for a specific work instruction revision).

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | OperationFUID | Char | Yes | The operation ID. |
| Input | StepNo | Integer | No | The step number. The default value is 0. |
| Output | WorkInstructions | Char | Yes | Retrieved work instruction. |

## Validations

- The system validates that OperationFUID is a valid FUID in the OPERATION table. 
- The system validates that StepNo is a valid step number for the operation in the OPERATION_STEP table or is 0.

## System Processing

- The system retrieves the work instruction from an operation if StepNo = 0. Otherwise, the work instruction is retrieved from an operation step. 
- The system returns the work instruction.
