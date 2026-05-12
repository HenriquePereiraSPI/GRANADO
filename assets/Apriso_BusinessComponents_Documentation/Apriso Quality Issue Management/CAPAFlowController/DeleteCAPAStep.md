# DeleteCAPAStep

**Category:** Apriso/Quality/Issue Management
**Class:** `FlexNet.BusinessFacade.CAPA.CAPAFlowController`
**Assembly:** `FlexNet.BusinessFacade.CAPA`
**Status:** Active
**Keywords:** CAPA, NC, issue, incident, corrective, preventive, non-conformity, non-compliant, Step, CAPAStep, Delete

## Description

The purpose of this Business Component method is to delete an existing record from the CAPA_STEP table.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | CAPAStepID | Integer | Yes | The ID of the CAPA Step. |

## Validations

- The system validates that CAPAStepID is provided. 
- The system validates that the provided CAPAStepID exists in the CAPA_STEP table.

## System Processing

- The system deletes the record from the CAPA_STEP table. 
- If child records exist in the following tables, the system deletes them: 
 
- CAPA_TASK 
- CAPA_TASK_STATE 
- CAPA_STEP_STATE 
- CAPA_STEP_SEQUENCE 
- CAPA_STEP_SEQUENCE_PROP_REQ 
- CAPA_STEP_PROP_RESTRICTION

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| CAPA_STEP | ID | CAPAStepID |
| CAPA_TASK |  |  |
| CAPA_TASK_STATE |  |  |
| CAPA_STEP_STATE |  |  |
| CAPA_STEP_SEQUENCE |  |  |
| CAPA_STEP_SEQUENCE_PROP_REQ |  |  |
| CAPA_STEP_PROP_RESTRICTION |  |  |
