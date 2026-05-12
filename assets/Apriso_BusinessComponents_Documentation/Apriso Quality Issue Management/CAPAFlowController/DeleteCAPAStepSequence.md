# DeleteCAPAStepSequence

**Category:** Apriso/Quality/Issue Management
**Class:** `FlexNet.BusinessFacade.CAPA.CAPAFlowController`
**Assembly:** `FlexNet.BusinessFacade.CAPA`
**Status:** Active
**Keywords:** CAPA, NC, issue, incident, corrective, preventive, non-conformity, non-compliant, Step, CAPAStep, Link, Unlink

## Description

The purpose of this Business Component method is to delete an existing link between CAPA Steps from the CAPA_STEP_SEQUENCE table.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | CAPAStepSequenceID | Integer | Yes | The ID of the CAPA Step Sequence. |

## Validations

- The system validates that CAPAStepSequenceID exists in the CAPA_STEP_SEQUENCE table.

## System Processing

- The system deletes the record from the CAPA_STEP_SEQUENCE table. 
- If child records exist in the CAPA_STEP_SEQUENCE_PROP_REQ table, the system deletes them.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| CAPA_STEP_SEQUENCE | ID | CAPAStepSequenceID |
| CAPA_STEP_SEQUENCE_PROP_REQ | CAPAStepSequenceID | CAPAStepSequenceID |
