# ManageCAPAStep

**Category:** Apriso/Quality/Issue Management
**Class:** `FlexNet.BusinessFacade.CAPA.CAPAFlowController`
**Assembly:** `FlexNet.BusinessFacade.CAPA`
**Status:** Active
**Keywords:** CAPA, NC, issue, incident, corrective, preventive, non-conformity, non-compliant, Step, CAPAStep, Create, Update

## Description

The purpose of this Business Component method is to create a new or update an existing record in the CAPA_STEP table.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | CAPAStepID | Integer | No | The ID of the CAPA Step. |
| Input | Name | Char | Conditional | The name of the CAPA Step. In the update mode, the empty value does not affect the existing record. |
| Input | CAPAFlowID | Integer | Conditional | The ID of the CAPA Flow. In the update mode, the '0' value does not affect the existing record. |
| Input | FirstStep | Boolean | Yes | The flag that indicates if this is the first step. |
| Input | LastStep | Boolean | Yes | The flag that indicates if this is the last step. |
| Output | CreatedCAPAStepID | Integer | Yes | The ID of the newly created record. |

## Description Parameters

| Name | Type | Description |
|------|------|-------------|
| VisualProperties | Char | Properties of the step containing information about the visual representation. |
| Description | Char | The description of the CAPA Step. |

## Validations

- If CAPAStepID is provided, the system validates that it exists in the CAPA_STEP table. 
- If CAPAStepID is not provided, the system validates that Name and CAPAFlowID are provided. 
- If CAPAFlowID is provided, the system validates that it exists in the CAPA_FLOW table.

## System Processing

- If CAPAStepID is provided, the system updates the provided fields for the relevant record in the CAPA_STEP table. 
- In the update mode, the empty value of a given field changes to 'null', except for the fields that cannot have the 'null' value (Name, CAPAFlowID). 
- If CAPAStepID is not provided, the system creates a new record in the CAPA_STEP table and returns the ID of the record. 
 
- If the CAPA Flow containing the new Step is assigned to a CAPA record, a new record for the step is added to the CAPA_STEP_STATE table.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| CAPA_STEP | ID | CAPAStepID, CreatedCAPAStepID |
|  | Name | Name |
|  | CAPAFlowID | CAPAFlowID |
|  | FirstStep | FirstStep |
|  | LastStep | LastStep |
|  | VisualProperties | VisualProperties |
| CAPA_STEP_STATE | CAPAStepID | The ID of the newly created CAPA_STEP record. |
|  | CAPAID | The ID of the CAPA record that uses the CAPA Flow containing the created CAPA Step. |
| TEXT_TRANSLATION | Extended | Description |
