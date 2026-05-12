# ManageCAPATask

**Category:** Apriso/Quality/Issue Management
**Class:** `FlexNet.BusinessFacade.CAPA.CAPAFlowController`
**Assembly:** `FlexNet.BusinessFacade.CAPA`
**Status:** Active
**Keywords:** CAPA, NC, issue, incident, corrective, preventive, non-conformity, non-compliant, Task, CAPATask, Create, Update

## Description

The purpose of this Business Component method is to create a new or update an existing record in the CAPA_TASK table.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | CAPATaskID | Integer | No | The ID of the CAPA Task. |
| Input | Name | Char | Conditional | The name of the CAPA Task. In the update mode, the empty value does not affect the existing record. |
| Input | CAPAStepID | Integer | Conditional | The ID of the CAPA Step. In the update mode, the '0' value does not affect the existing record. |
| Input | Type | Integer | Conditional | The type of the CAPA Task. In the update mode, the '0' value does not affect the existing record. |
| Output | CreatedCAPATaskID | Integer | Yes | The ID of the newly created record. |

## Description Parameters

| Name | Type | Description |
|------|------|-------------|
| NextCAPATaskID | Integer | The ID of the next CAPA Task. |
| SignatureHeaderDefinitionID | Integer | The ID of the Signature Header Definition. |
| Required | Boolean | The flag that indicates if the task is required. |
| VisualProperties | Char | Properties of the task containing information about the visual representation. |
| Description | Char | The description of the CAPA Step. |
| DisableHistory | Boolean | The flag that indicates if history records should not be generated. |

## Validations

- If CAPATaskID is provided, the system validates that it exists in the CAPA_TASK table. 
- If CAPATaskID is not provided, the system validates that Name, CAPAStepID, and Type are provided. 
- If Type is provided, the system validates that it exists in CAPA_TASK_TYPE table. 
- If CAPAStepID is provided, the system validates that it exists in the CAPA_STEP table. 
- If NextCAPATaskID is provided, the system validates that it exists in the CAPA_TASK table. 
- If SignatureHeaderDefinitionID is provided, the system validates that it exists in the SIGNATURE_HEADER_DEFINITION table.

## System Processing

- If CAPATaskID is provided, the system updates the provided fields for the relevant record in the CAPA_TASK table. 
- In the update mode, the empty value of a given field changes to 'null', except for the fields that cannot have the 'null' value (Name, CAPAStepID, Type). 
- If CAPATaskID is not provided, the system creates a new record into the CAPA_TASK table and returns the ID of the record. 
 
- If the CAPA Flow containing the new Task is assigned to a CAPA record, a new record for the task is added to the CAPA_TASK_STATE table. 
 
- If the edited task is in a flow that is linked to a CAPA (is used in runtime), the system writes historical information about the changes to the CAPA_HISTORY table, unless the DisableHistory input is set to true.

## History Recording in Production

The history of runtime CAPA changes is stored in the CAPA_HISTORY table:
 
 
- The CAPAID, FlowName, FlowRevision, and CurrentStepName columns store information about the context of changes. 
- Change in the value of every column creates a new record in the CAPA_HISTORY table. 
- The Property field stores information about the name of the changed column, the Value[DataType] and ToValue[DataType] fields store information about the change. 
- DataType depends on the type of the changed column (1 - Char, 2 - Integer, 3 - Decimal, 4 - Boolean, 5 - DateTime). 
- All history records created within one run of the Business Component are grouped by the ChangeFUID column followed by the increased value of ChangeLineNo.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| CAPA_TASK | ID | CAPATaskID/CreatedCAPATaskID |
|  | Name | Name |
|  | CAPAStepID | CAPAStepID |
|  | CAPATaskType | Type |
|  | NextCAPATaskID | NextCAPATaskID |
|  | SignatureHeaderDefinitionID | SignatureHeaderDefinitionID |
|  | Required | Required |
|  | VisualProperties | VisualProperties |
| CAPA_TASK_STATE | CAPATaskID | The ID of the newly created CAPA_TASK record. |
|  | CAPAID | The ID of the CAPA record that uses the CAPA Flow containing the created CAPA Task. |
| TEXT_TRANSLATION | Extended | Description |
