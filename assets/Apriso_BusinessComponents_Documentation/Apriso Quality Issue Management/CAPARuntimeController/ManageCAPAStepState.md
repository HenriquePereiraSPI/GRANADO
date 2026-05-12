# ManageCAPAStepState

**Category:** Apriso/Quality/Issue Management
**Class:** `FlexNet.BusinessFacade.CAPA.CAPARuntimeController`
**Assembly:** `FlexNet.BusinessFacade.CAPA`
**Status:** Active
**Keywords:** CAPA, NC, issue, incident, corrective, preventive, non-conformity, non-compliant, step, state, update

## Description

The purpose of this Business Component method is to create a new or update an existing record in the CAPA_STEP_STATE table. The table is populated on demand, when there is a need to set a runtime property or assign an entity to the CAPA Step. 
 

 This Business Component has a dynamic output UnitID, which may be used to assign to the Step, through the UNIT table, Documents, Attachments and other entities.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | CAPAID | Integer | Yes | The ID of the CAPA. |
| Input | CAPAStepID | Integer | Yes | The ID of the CAPA Step. |

## Description Parameters

| Name | Type | Description |
|------|------|-------------|
| DueDate | DateTime | The due date. |
| WarningDate | DateTime | The warning date. |
| CompletionDate | DateTime | The completion date. |
| SignatureHeaderID | Integer | The ID of the Signature Header. |
| Description | Char | The description of the CAPA Step State. |
| DisableHistory | Boolean | The flag that indicates if history records should not be generated. |

## Validations

- The system validates that CAPAID is provided and that it exists in the CAPA table. 
- The system validates that CAPAStepID is provided and that it exists in the CAPA_STEP table.

## System Processing

- The system checks if a record for the provided data exists in the database and depending on the result it either updates the existing record or creates a new one. 
- The new UNIT record is created for newly created CAPA Step State record. 
- The system writes historical information about the changes to the CAPA_HISTORY table, unless the DisableHistory input is set to true.

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
| CAPA_STEP_STATE | CAPAID | CAPAID |
|  | CAPAStepID | CAPAStepID |
|  | DueDate | DueDate |
|  | WarningDate | WarningDate |
|  | CompletionDate | CompletionDate |
|  | SignatureHeaderID | SignatureHeaderID |
|  | TextID | Link to the TEXT_TRANSLATION record. |
|  | UnitID | UnitID; Link to the UNIT record. |
| TEXT_TRANSLATION | Extended | Description |
| UNIT | ID | Record is created for the new CAPA Step State. |
