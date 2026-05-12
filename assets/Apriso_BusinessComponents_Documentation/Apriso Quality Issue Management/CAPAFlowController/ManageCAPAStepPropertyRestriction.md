# ManageCAPAStepPropertyRestriction

**Category:** Apriso/Quality/Issue Management
**Class:** `FlexNet.BusinessFacade.CAPA.CAPAFlowController`
**Assembly:** `FlexNet.BusinessFacade.CAPA`
**Status:** Active
**Keywords:** CAPA, NC, issue, incident, corrective, preventive, non-conformity, non-compliant, Step, CAPAStep, Create, Update, Property

## Description

The purpose of this Business Component method is to create a new or update an existing record in the CAPA_STEP_PROPERTY_RESTRICTION table.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | CAPAStepID | Integer | Yes | The ID of the CAPA Step. |
| Input | PropertyType | Integer | Yes | The type of the property. |
| Input | Property | Char | Yes | The name of the property. |
| Input | ReadOnly | Boolean | Yes | The flag that indicates if the property is read-only. |
| Input | Hidden | Boolean | Yes | The flag that indicates if the property is hidden. |
| Output | CreatedCAPAStepPropertyRestrictionID | Integer | Yes | The ID of the newly created record. |

## Validations

- The system validates that CAPAStepID is provided and that it exists in the CAPA_STEP table. 
- The system validates that PropertyType is provided and valid (1 - StandardProperty, 2 - CustomProperty). 
- The system validates that Property is provided. 
- If PropertyType is set to 2 (CustomProperty), the system checks if Property is defined in the CAPA_PROPERTY table. 
- If PropertyType is set to 1 (StandardProperty), the system checks if Property is on the list of standard properties: 
 
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
- CAPAFlowName

## System Processing

- The system checks if a record for the provided data exists in the database and depending on the result it either updates the existing record or creates a new one.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| CAPA_STEP_PROPERTY_RESTRICTION | CAPAStepID | CAPAStepID |
|  | PropertyType | PropertyType |
|  | Property | Property (if PropertyType is set to 2) |
|  | StandardProperty | Property (if PropertyType is set to 1) |
|  | ReadOnly | ReadOnly |
|  | Hidden | Hidden |
