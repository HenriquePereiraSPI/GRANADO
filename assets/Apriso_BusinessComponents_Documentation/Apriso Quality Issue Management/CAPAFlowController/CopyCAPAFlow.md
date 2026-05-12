# CopyCAPAFlow

**Category:** Apriso/Quality/Issue Management
**Class:** `FlexNet.BusinessFacade.CAPA.CAPAFlowController`
**Assembly:** `FlexNet.BusinessFacade.CAPA`
**Status:** Active
**Keywords:** CAPA, NC, issue, incident, corrective, preventive, non-conformity, non-compliant, Flow, CAPAFlow, Create, Update

## Description

The purpose of this Business Component method is to create a copy of a CAPA Flow with all configuration links.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | CAPAFlowID | Integer | Yes | The ID of the CAPA Flow. |
| Input | Name | Char | No | The name of the new CAPA Flow. |
| Input | Revision | Char | Yes | The revision of the new CAPA Flow. |
| Input | CopyAsTemplate | Boolean | Yes | The flag that indicates if the copied CAPA Flow should be a template (Type: 1) or not (Type: 2). |
| Output | CreatedCAPAFlowID | Integer | Yes | The ID of the newly created record. |

## Validations

- The system validates that CAPAFlowID is provided and that it exists in the CAPA_FLOW table. 
- The system validates that Revision is provided.

## System Processing

- The system makes a copy of the existing CAPA Flow (based on CAPAFlowID) with Name and Revision provided in inputs. 
- If Name is not provided, the system uses the name of the copied CAPA Flow. 
- The system returns the ID of the newly created CAPA Flow. 
- The system also copies data from child tables: 
 
- CAPA_STEP 
- CAPA_STEP_SEQUENCE 
- CAPA_TASK 
- CAPA_STEP_PROP_RESTRICTION 
- CAPA_STEP_SEQUENCE_PROP_REQ

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| CAPA_FLOW | ID | CopiedCAPAFlowID |
|  | Name | Name |
|  | Revision | Revision |
|  | Type | Based on the CopyAsTemplate flag. |
| TEXT_TRANSLATION |  |  |
| CAPA_STEP |  |  |
| CAPA_STEP_SEQUENCE |  |  |
| CAPA_TASK |  |  |
| CAPA_STEP_PROP_RESTRICTION |  |  |
| CAPA_STEP_SEQUENCE_PROP_REQ |  |  |
