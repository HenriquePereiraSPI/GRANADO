# UpdateWorkInstructionRevision

**Category:** Apriso/Work Instruction
**Class:** `FlexNet.BusinessFacade.WorkInstruction.WorkInstructionManager`
**Assembly:** `FlexNet.BusinessFacade.WorkInstruction.dll`
**Status:** Active
**Keywords:** WorkInstruction, WorkInstrRev

## Description

Updates a WORK_INSTR_REVISION record.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | WorkInstructionRevisionID | Integer | Yes | ID of the work instruction revision to be updated. |

## Description Parameters

| Name | Type | Description |
|------|------|-------------|
| DefaultRevision | Boolean | Indicates if the revision is default. A work instruction can have only one default revision. |
| EffectiveStartDate | DateTime | Date when the work instruction revision becomes valid. |
| EffectiveEndDate | DateTime | Date when the work instruction revision stops being valid. |
| Status | Integer | Status of the work instruction revision. Available values: 1 - Design in Progress, 2 - Prototype, 3 - Validating, 4 - Active, 5 - On Hold, 6 - Cancelled. |
| ProgressStatus | Integer | Progress status of the work instruction revision. Only valid when the status of the work instruction revision is set to 3-Validating. |
| Description | Char | Description of the work instruction revision. Up to 255 characters. |
| Content | Char | Content of the work instruction revision. |

## Validations

- Validation passes if Status value is between 1 and 6. 
- Validation passes if dynamic inputs are provided when the Status is 1- Design in Progress, 2 - Prototype, or 3 - Validating. Otherwise, only Status can be modified (except for 6 - Cancelled).

## System Processing

- System validates if all provided inputs are valid. 
- System validates the following Status transition that are allowed: 
 
- For 1 - Design in Progress: 2 - Prototype, 4 - Active, 6 - Cancelled 
- For 2 - Prototype: 1 - Design in Progress, 3 - Validating, 4 - Active, 6 - Cancelled 
- For 3 - Validating: 1 - Design in Progress, 2 -Prototype, 4 - Active, 5 - On Hold, 6 - Cancelled 
- For 4 - Active: 5 - On Hold, 6 - Cancelled 
- For 5 - On Hold: 4 - Active, 6 - Cancelled 
- For 6 - Cancelled: No transition allowed. 
 
- System validates ProgressStatus exists in PROGRESS_STATUS when transitioning to 3 - Validating.  
- System updates ProgressStatus to null when Status is transitioning from 3 - Validating to a new status. 
- When DefaultRevision is set to true, system updates the DefaultRevision of other revisions of the same WORK_INSTRUCTION to false. System ensures only one WORK_INSTR_REVISION is active for any WORK_INSTRUCTION.  
- System validates if EffectiveEndDate is later than EffectiveStartDate if both are provided. 
- System updates a WORK_INSTR_REVISION record with provided inputs.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| WORK_INSTR_REVISION | WorkInstructionRevisionID | WorkInstructionRevisionID |
| WORK_INSTR_REVISION | DefaultRevision | DefaultRevision |
| WORK_INSTR_REVISION | EffectiveStartDate | EffectiveStartDate |
| WORK_INSTR_REVISION | EffectiveEndDate | EffectiveEndDate |
| WORK_INSTR_REVISION | Status | Status |
| WORK_INSTR_REVISION | ProgressStatus | ProgressStatus |
| WORK_INSTR_REVISION | Description | Description |
| WORK_INSTR_REVISION | Content | Content |
