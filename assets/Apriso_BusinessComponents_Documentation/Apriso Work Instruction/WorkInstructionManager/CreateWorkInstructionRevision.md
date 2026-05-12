# CreateWorkInstructionRevision

**Category:** Apriso/Work Instruction
**Class:** `FlexNet.BusinessFacade.WorkInstruction.WorkInstructionManager`
**Assembly:** `FlexNet.BusinessFacade.WorkInstruction.dll`
**Status:** Active
**Keywords:** WorkInstruction, WorkInstrRev

## Description

Creates a new WORK_INSTR_REVISION record.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | WorkInstructionID | Integer | Yes | Work instruction ID. |
| Input | Revision | Char | Yes | Work instruction revision. |
| Output | WorkInstructionRevisionID | Integer | Yes | ID of the created work instruction revision. |

## Description Parameters

| Name | Type | Description |
|------|------|-------------|
| DefaultRevision | Boolean | Indicates the default revision. Only one revision for a given work instruction can be the default. |
| EffectiveStartDate | DateTime | Effective start date for the work instruction revision. |
| EffectiveEndDate | DateTime | Effective end date for the work instruction revision. |
| Status | Integer | Status for the work instruction revision. |
| ProgressStatus | Integer | Progress status for the work instruction revision when the status is set to Validating. |
| Description | Char | Description for the work instruction revision. |
| Content | Char | Content of the work instruction revision. |

## Validations

- Validation fails if Status is not between the values 1 and 6.

## System Processing

- System validates if all supplied inputs are valid. 
- System validates ProgressStatus exists in PROGRESS_STATUS when Status is Validating.  
-  When DefaultRevision input is true, system updates DefaultRevision to true and updates other revisions for the same WORK_INSTRUCTION to false. System ensures only one WORK_INSTR_REVISION may be active for any given WORK_INSTRUCTION.  
- When DefaultRevision is not provided, System sets DefaultRevision to true if no other WORK_INSTR_REVISION with the same WorkInstructionID 
- System validates if EffectiveEndDate is later than or at the same time as EffectiveStartDate if both are provided. 
- System generates FUID. 
- System updates a WORK_INSTR_REVISION record with provided inputs.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| WORK_INSTR_REVISION | ID | ID |
| WORK_INSTR_REVISION | DefaultRevision | DefaultRevision |
| WORK_INSTR_REVISION | EffectiveStartDate | EffectiveStartDate |
| WORK_INSTR_REVISION | EffectiveEndDate | EffectiveEndDate |
| WORK_INSTR_REVISION | Status | Status |
| WORK_INSTR_REVISION | ProgressStatus | ProgressStatus |
| WORK_INSTR_REVISION | Description | Description |
| WORK_INSTR_REVISION | Content | Content |
