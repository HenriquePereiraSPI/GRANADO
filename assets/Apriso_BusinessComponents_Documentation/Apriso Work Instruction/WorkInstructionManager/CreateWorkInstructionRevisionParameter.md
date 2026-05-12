# CreateWorkInstructionRevisionParameter

**Category:** Apriso/Work Instruction
**Class:** `FlexNet.BusinessFacade.WorkInstruction.WorkInstructionManager`
**Assembly:** `FlexNet.BusinessFacade.WorkInstruction.dll`
**Status:** Active
**Keywords:** WorkInstructionRevisionParameter

## Description

Creates a new WORK_INSTR_REVISION_PARAMS record.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | WorkInstructionRevisionID | Integer | Yes | ID of the work instruction revision. |
| Input | Name | Char | Yes | Name of the parameter. |
| Output | WorkInstructionRevisionParameterID | Integer | Yes | ID of the new work instruction revision parameter. |

## Description Parameters

| Name | Type | Description |
|------|------|-------------|
| Type | Integer | Type of parameter. |
| Value | Char | Value of parameter. |

## Validations

- Validation fails if WorkInstructionRevisionID corresponding to WORK_INSTR_REVISION does not exist. 
- Validation fails if WorkInstructionRevisionID and Name already exist in WORK_INSTR_REVISION. 
- Validation fails if Type is not a valid Process Builder InputOutputType.

## System Processing

- System validates if all supplied inputs are valid. 
- System creates a new WORK_INSTR_REVISION_PARAMS record with provided inputs.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| WORK_INSTR_REVISION_PARAMS | WorkInstructionRevisionID | WorkInstructionRevisionID |
| WORK_INSTR_REVISION_PARAMS | Name | Name |
| WORK_INSTR_REVISION_PARAMS | Type | Type |
| WORK_INSTR_REVISION_PARAMS | Value | Value |
