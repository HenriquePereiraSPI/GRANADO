# MoveToCAPAStep

**Category:** Apriso/Quality/Issue Management
**Class:** `FlexNet.BusinessFacade.CAPA.CAPARuntimeController`
**Assembly:** `FlexNet.BusinessFacade.CAPA`
**Status:** Active
**Keywords:** CAPA, NC, issue, incident, corrective, preventive, non-conformity, non-compliant, step, state, update

## Description

The purpose of this Business Component method is to create a new or update an existing record in the CAPA_STEP_STATE table and change CurrentCapaStepID in the CAPA table.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | CAPAID | Integer | Yes | The ID of the CAPA. |
| Input | CAPAStepID | Integer | Conditional | The ID of the CAPA Step. |

## Description Parameters

| Name | Type | Description |
|------|------|-------------|
| DisableHistory | Boolean | The flag that indicates if history records should not be generated. |

## Validations

- The system validates that CAPAID is provided and that it exists in the CAPA table. 
- If CAPAStepID is provided, the system validates that it exists in the CAPA_STEP table. 
- If CAPAStepID is not provided, the system checks if CurrentCAPAStep in the CAPA table is the last step. 
- The system validates that ActualStep and NewStep are linked (a record in the CAPA_STEP_SEQUENCE table). 
- The system validates that all required CAPA Tasks linked to ActualStep are in TargetProgressStatus. 
- The system validates that the Properties required to move from ActualStep to NewStep are provided. 
- If ActualStep has the LastStep flag set to true, the system allows for the 'null' value in the CAPAStepID input.

## System Processing

- The system checks if a record for the provided data exists in the database and depending on the result it either updates the existing record or creates a new one. 
- The system changes CurrentCAPAStepID in the CAPA table. 
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
|  | CAPAStepID | CAPA.CurrentCAPAStepID |
| CAPA | CurrentCAPAStepID | CAPAStepID |
