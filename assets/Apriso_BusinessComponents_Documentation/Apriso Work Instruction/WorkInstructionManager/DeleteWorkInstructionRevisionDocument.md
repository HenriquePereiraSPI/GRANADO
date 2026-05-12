# DeleteWorkInstructionRevisionDocument

**Category:** Apriso/Work Instruction
**Class:** `FlexNet.BusinessFacade.WorkInstruction.WorkInstructionManager`
**Assembly:** `FlexNet.BusinessFacade.WorkInstruction.dll`
**Status:** Active
**Keywords:** WorkInstructionRevisionDocument

## Description

Deletes a WORK_INSTR_REVISION_DOCUMENT record.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | WorkInstructionRevisionID | Integer | Yes | ID of the work instruction revision to be deleted. |
| Input | DocumentID | Char | Yes | ID of the document. |

## Validations

-  Validation fails if WorkInstructionRevisionID corresponding to WORK_INSTR_REVISION does not exist.  
-  Validation fails if DocumentID corresponding to DOCUMENT does not exist.

## System Processing

-  System deletes the WORK_INSTR_REVISION_DOCUMENT record.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| WORK_INSTR_REVISION_DOCUMENT | All | N/A |
