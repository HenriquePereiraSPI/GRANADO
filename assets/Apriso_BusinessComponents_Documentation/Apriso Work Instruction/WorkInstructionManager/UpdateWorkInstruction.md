# UpdateWorkInstruction

**Category:** Apriso/Work Instruction
**Class:** `FlexNet.BusinessFacade.WorkInstruction.WorkInstructionManager`
**Assembly:** `FlexNet.BusinessFacade.WorkInstruction.dll`
**Status:** Active
**Keywords:** WorkInstruction, WorkInstrRev

## Description

Updates a WORK_INSTRUCTION record.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | WorkInstructionID | Integer | Yes | ID of the work instruction to be updated. |

## Description Parameters

| Name | Type | Description |
|------|------|-------------|
| WorkInstructionClassID | Integer | Work instruction class ID. |
| Short | Char | Short description, up to 80 characters. |
| Medium | Char | Medium description, up to 255 characters. |
| Extended | Char | Extended description, up to 2000 characters. |

## Validations

- Validation passes if WorkInstructionType value of the WORK_INSTRUCTION record is 0 or 1.

## System Processing

- System validates if all inputs are valid. 
- System validates that WorkInstructionClassID exists in WORK_INSTRUCTION_CLASS. 
- System updates a WORK_INSTRUCTION record with the provided inputs.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| WORK_INSTRUCTION | WorkInstructionClassID | WorkInstructionClassID |
| TEXT_TRANSLATION | Short | Short |
| TEXT_TRANSLATION | Medium | Medium |
| TEXT_TRANSLATION | Extended | Extended |
