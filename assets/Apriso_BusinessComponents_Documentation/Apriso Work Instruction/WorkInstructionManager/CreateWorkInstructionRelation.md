# CreateWorkInstructionRelation

**Category:** Apriso/Work Instruction
**Class:** `FlexNet.BusinessFacade.WorkInstruction.WorkInstructionManager`
**Assembly:** `FlexNet.BusinessFacade.WorkInstruction.dll`
**Status:** Active
**Keywords:** CreateWorkInstructionRelation

## Description

Creates a new WORK_INSTR_WORK_INSTR record.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | ParentWorkInstructionRevisionID | Integer | Yes | ID of the parent work instruction revision. |
| Output | WorkInstructionRevisionRelationID | Integer | Yes | ID of the new work instruction revision relation. |

## Description Parameters

| Name | Type | Description |
|------|------|-------------|
| WorkInstructionID | Integer | ID of the work instruction. |
| WorkInstructionRevisionID | Integer | ID of the work instruction revision. |
| Sequence | Integer | Position of the relation between parent and child work instructions. |

## Validations

- Validation fails if ParentWorkInstructionRevisionID corresponding to WORK_INSTR_REVISION does not exist or the type of WORK_INSTRUCTION is not 1.  
-  Validation fails if WorkInstructionID corresponding to WORK_INSTRUCTION does not exist or the type is not 1.  
-  Validation fails if WorkInstructionRevisionID corresponding to WORK_INSTR_REVISION does not exist or the type of WORK_INSTRUCTION is not 1.  
-  Validation fails if both WorkInstructionID and WorkInstructionRevisionID are provided.  
- Validation fails if the status of ParentWorkInstructionRevisionID corresponding to WORK_INSTR_REVISION is cancelled.  
- Validation fails if the status of WorkInstructionRevisionID corresponding to WORK_INSTR_REVISION is cancelled.  
- Validation fails if Sequence is less than 1.

## System Processing

-  System ensures all WORK_INSTR_WORK_INSTR records for the same ParentWorkInstructionRevisionID are sequential and incremental by 1 starting at 1.  
-  System creates the WORK_INSTR_WORK_INSTR record with provided inputs.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| WORK_INSTR_WORK_INSTR | ParentWorkInstructionRevisionID | ParentWorkInstructionRevisionID |
| WORK_INSTR_WORK_INSTR | WorkInstructionID | WorkInstructionID |
| WORK_INSTR_WORK_INSTR | WorkInstructionRevisionID | WorkInstructionRevisionID |
| WORK_INSTR_WORK_INSTR | Sequence | Sequence |
