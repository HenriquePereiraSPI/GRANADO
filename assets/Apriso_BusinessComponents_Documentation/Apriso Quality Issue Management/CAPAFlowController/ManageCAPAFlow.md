# ManageCAPAFlow

**Category:** Apriso/Quality/Issue Management
**Class:** `FlexNet.BusinessFacade.CAPA.CAPAFlowController`
**Assembly:** `FlexNet.BusinessFacade.CAPA`
**Status:** Active
**Keywords:** CAPA, NC, issue, incident, corrective, preventive, non-conformity, non-compliant, Flow, CAPAFlow, Create, Update

## Description

The purpose of this Business Component method is to create a new or update an existing record in the CAPA_FLOW table.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | CAPAFlowID | Integer | No | The ID of the CAPA Flow. |
| Input | Name | Char | Conditional | The name of the new CAPA Flow. In the update mode, the empty value does not affect the existing record. |
| Input | Revision | Char | Conditional | The revision of the new CAPA Flow. In the update mode, the empty value does not affect the existing record. |
| Input | Type | Integer | Conditional | The type of the CAPA Flow (1 - Template, 2 - Runtime). In the update mode, the '0' value does not affect the existing record. |
| Input | EffectiveDate | DateTime | Conditional | The date from which the flow is valid. In the update mode, the empty value does not affect the existing record. |
| Output | CreatedCAPAFlowID | Integer | Yes | The ID of the newly created record. |

## Description Parameters

| Name | Type | Description |
|------|------|-------------|
| CAPAFlowClassID | Integer | The Class ID of the CAPA Flow. |
| DiscontinueDate | DateTime | The date at which the flow is no longer valid. |
| WarningPeriod | Integer | The warning period in hours. |
| VisualProperties | Char | Properties of the flow containing information about the visual representation. |
| Description | Char | The description of the CAPA Flow. |

## Validations

- If CAPAFlowID is provided, the system validates that it exists in the CAPA_FLOW table. 
- If CAPAFlowID is not provided, the system validates that Name, Revision, Type, and EffectiveDate are provided. 
- The system validates that the provided CAPAFlowClassID exists in the CAPA_FLOW_CLASS table. 
- In the update mode, if Type is provided and the CAPA Flow is used by a CAPA record, the system validates that the Type is not 1 (template).

## System Processing

- If CAPAFlowID is provided, the system updates the provided fields for the relevant record in the CAPA_FLOW table. 
- In the update mode, the empty value (DateTime.MinValue for fields of the DateTime type) of a given field changes to 'null', except for the fields that cannot have the 'null' value (Name, Revision, Type, EffectiveDate). 
- If CAPAFlowID is not provided, the system creates a new record in the CAPA_FLOW table and returns the ID of the record.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| CAPA_FLOW | ID | CAPAFlowID/CreatedCAPAFlowID |
|  | Name | Name |
|  | Revision | Revision |
|  | Type | Type |
|  | CAPAFlowClassID | CAPAFlowClassID |
|  | EffectiveDate | EffectiveDate |
|  | DiscontinueDate | DiscontinueDate |
|  | WarningPeriod | WarningPeriod |
|  | VisualProperties | VisualProperties |
| TEXT_TRANSLATION | Extended | Description |
