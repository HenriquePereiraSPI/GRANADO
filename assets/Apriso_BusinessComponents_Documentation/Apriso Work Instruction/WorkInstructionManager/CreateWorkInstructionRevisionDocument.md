# CreateWorkInstructionRevisionDocument

**Category:** Apriso/Work Instruction
**Class:** `FlexNet.BusinessFacade.WorkInstruction.WorkInstructionManager`
**Assembly:** `FlexNet.BusinessFacade.WorkInstruction.dll`
**Status:** Active
**Keywords:** WorkInstructionRevisionDocument

## Description

Creates a new WORK_INSTR_REVISION_DOCUMENT record.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | WorkInstructionRevisionID | Integer | Yes | ID of the work instruction revision. |
| Input | DocumentID | Char | Yes | ID of the document. |

## Validations

- Validation fails if WorkInstructionRevisionID corresponding to WORK_INSTR_REVISION does not exist. 
- Validation fails if DocumentID corresponding DOCUMENT does not exist.

## System Processing

- System validates if all supplied inputs are valid. 
- System creates a new WORK_INSTR_REVISION_DOCUMENT record with provided inputs.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| WORK_INSTR_REVISION_DOCUMENT | WorkInstructionRevisionID | WorkInstructionRevisionID |
| WORK_INSTR_REVISION_DOCUMENT | DocumentID | DocumentID |
