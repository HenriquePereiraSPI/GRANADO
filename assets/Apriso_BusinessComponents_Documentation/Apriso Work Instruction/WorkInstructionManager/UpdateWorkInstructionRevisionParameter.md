# UpdateWorkInstructionRevisionParameter

**Category:** Apriso/Work Instruction
**Class:** `FlexNet.BusinessFacade.WorkInstruction.WorkInstructionManager`
**Assembly:** `FlexNet.BusinessFacade.WorkInstruction.dll`
**Status:** Active
**Keywords:** WorkInstructionRevisionParameter

## Description

Updates a WORK_INSTR_REVISION_PARAMS record.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | WorkInstructionRevisionParameterID | Integer | Yes | ID of the work instruction revision parameter to update. |
| Input | Value | Char | Yes | Parameter value. |

## Description Parameters

| Name | Type | Description |
|------|------|-------------|
| Name | Char | Parameter name. |
| Type | Integer | Parameter type. |

## Validations

- Validation fails if WorkInstructionRevisionParameterID corresponding to WORK_INSTR_REVISION_PARAMS does not exist. 
- Validation fails if WorkInstructionRevisionParameterID and Name already exist in WORK_INSTR_REVISION_PARAMS. 
- Validation fails if Type is not a valid Process Builder InputOutputType.

## System Processing

- System validates if all provided inputs are valid. 
- System updates a WORK_INSTR_REVISION_PARAMS record with provided inputs.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| WORK_INSTR_REVISION_PARAMS | WorkInstructionRevisionID | WorkInstructionRevisionID |
| WORK_INSTR_REVISION_PARAMS | Name | Name |
| WORK_INSTR_REVISION_PARAMS | Type | Type |
| WORK_INSTR_REVISION_PARAMS | Value | Value |
