# ManageCAPAStepSequence

**Category:** Apriso/Quality/Issue Management
**Class:** `FlexNet.BusinessFacade.CAPA.CAPAFlowController`
**Assembly:** `FlexNet.BusinessFacade.CAPA`
**Status:** Active
**Keywords:** CAPA, NC, issue, incident, corrective, preventive, non-conformity, non-compliant, step, link, sequence

## Description

The purpose of this Business Component method is to create new or update an existing link between two CAPA Steps. The links are stored in the CAPA_STEP_SEQUENCE table.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | CAPAStepSequenceID | Integer | No | The ID of the CAPA Step Sequence. |
| Input | CAPAStepID | Integer | Conditional | The ID of the CAPA Step. |
| Input | NextCAPAStepID | Integer | No | The ID of the next CAPA Step. |
| Output | CreatedCAPAStepSequenceID | Integer | Yes | The ID of the newly created record. |

## Description Parameters

| Name | Type | Description |
|------|------|-------------|
| SignatureHeaderDefinitionID | Integer | The ID of the Signature Header Definition. |
| VisualProperties | Char | Properties of the link related to its visual representation. |

## Validations

- If CAPAStepSequenceID is provided, the system validates that it exists in the CAPA_STEP_SEQUENCE table. 
- If CAPAStepSequenceID is not provided, the system validates that CAPAStepID is provided and exists in the CAPA_STEP table. 
- If NextCAPAStepID is provided, the system validates that it exists in the CAPA_STEP table. 
- The system validates that the pair CAPAStepID and NextCAPAStepID is unique.  
- If SignatureHeaderDefinitionID is provided, the system validates that it exists in the SIGNATURE_HEADER_DEFINITION table.

## System Processing

- If CAPAStepSequenceID is provided, the system updates the provided fields for the relevant record in the CAPA_STEP_SEQUENCE table.  
- If CAPAStepSequenceID is not provided, the system creates a new record in the CAPA_STEP_SEQUENCE table and returns the ID of the record.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| CAPA_STEP_SEQUENCE | ID | CAPAStepSequenceID |
|  | CAPAStepID | CAPAStepID |
|  | NextCAPAStepID | NextCAPAStepID |
|  | SignatureHeaderDefinitionIDE | SignatureHeaderDefinitionID |
|  | VisualProperties | VisualProperties |
