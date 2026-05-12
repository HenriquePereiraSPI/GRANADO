# ManageCAPAStepSequencePropertyRequired

**Category:** Apriso/Quality/Issue Management
**Class:** `FlexNet.BusinessFacade.CAPA.CAPAFlowController`
**Assembly:** `FlexNet.BusinessFacade.CAPA`
**Status:** Active
**Keywords:** CAPA, NC, issue, incident, corrective, preventive, non-conformity, non-compliant, sequence, step

## Description

The purpose of this Business Component method is to create a new or delete an existing record in the CAPA_STEP_SEQUENCE_PROP_REQ table.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | CAPAStepSequenceID | Integer | Yes | The ID of the CAPA Step Sequence. |
| Input | PropertyType | Integer | Yes | The type of the property. |
| Input | Property | Char | Yes | The name of the property. |
| Input | Required | Boolean | Yes | The flag that indicates if the provided property is required in the provided CAPA Step Sequence. |
| Output | CreatedCAPAStepSequenceID | Integer | Yes | The ID of the newly created record. |

## Validations

- The system validates that CAPAStepSequenceID is provided and that it exists in the CAPA_STEP_SEQUENCE table. 
- The system validates that PropertyType is provided and valid (1 - StandardProperty, 2 - CustomProperty). 
- The system validates that Property is provided. 
- If PropertyType is set to 2 (Custom Property), the system checks if the Property is defined in the CAPA_PROPERTY table. 
- If PropertyType is set to 1 (Standard Property), the system checks if the Property is on the list of standard properties: 
 
- RecordNo 
- Priority 
- Severity 
- CAPAStatus 
- ProgressStatus 
- RootCauseReasonCode 
- RootCauseDescription 
- CorrectiveActionReasonCode 
- CorrectiveActionDescription 
- PreventiveActionReasonCode 
- PreventiveActionDescription 
- DueDate 
- WarningDate 
- OwnerEmployee 
- OwnerGroup 
- AssignedEmployee 
- AssignedGroup 
- Title 
- Description 
- CAPAClass

## System Processing

- If Required is set to true, the system creates a record. in the CAPA_STEP_SEQUENCE_PROP_REQ table provided that the record does not already exist. 
- If Required is set to false, the system deletes the record from the CAPA_STEP_SEQUENCE_PROP_REQ table provided that the record exists.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| CAPA_STEP_SEQUENCE_PROP_REQ | CAPAStepSequenceID | CAPAStepSequenceID |
|  | PropertyType | PropertyType |
|  | Property | Property (if PropertyType is set to 2) |
|  | StandarProperty | Property (if PropertyType is set to 1) |
