# CreateWorkInstruction

**Category:** Apriso/Work Instruction
**Class:** `FlexNet.BusinessFacade.WorkInstruction.WorkInstructionManager`
**Assembly:** `FlexNet.BusinessFacade.WorkInstruction.dll`
**Status:** Active
**Keywords:** WorkInstruction, WorkInstrRev

## Description

Creates a new WORK_INSTRUCTION record.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | Name | Char | Yes | Work instruction AssemblyNameame. |
| Input | WorkInstructionType | Integer | Yes | Work instruction type. Available values: 0 - Single, 1 - List. |
| Output | WorkInstructionID | Integer | Yes | New work instruction ID. |

## Description Parameters

| Name | Type | Description |
|------|------|-------------|
| WorkInstructionClassID | Integer | Work instruction class ID. |
| Short | Char | Short description. |
| Medium | Char | Medium description. |
| Extended | Char | Extended description. |

## Validations

- Validation fails if WorkInstructionType is not 0 or 1.

## System Processing

- System validates that Name is not empty and is unique compared to WORK_INSTRUCTION. 
- System validates that WorkInstructionClassID exists in WORK_INSTRUCTION_CLASS. 
- System generates a new FUID. 
- System creates a WORK_INSTRUCTION record. 
- System returns the ID of the newly created WORK_INSTRUCTION record.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| WORK_INSTRUCTION | Name | Name |
| WORK_INSTRUCTION | WorkInstructionClassID | WorkInstructionClassID |
| WORK_INSTRUCTION | WorkInstructionType | WorkInstructionType |
| TEXT_TRANSLATION | Short | Short |
| TEXT_TRANSLATION | Medium | Medium |
| TEXT_TRANSLATION | Extended | Extended |
