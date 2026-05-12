# ManageCAPATaskState

**Category:** Apriso/Quality/Issue Management
**Class:** `FlexNet.BusinessFacade.CAPA.CAPARuntimeController`
**Assembly:** `FlexNet.BusinessFacade.CAPA`
**Status:** Active
**Keywords:** CAPA, NC, issue, incident, corrective, preventive, non-conformity, non-compliant, task, state, update

## Description

The purpose of this Business Component method is to create a new or update an existing record in the CAPA_TASK_STATE table. The table is populated on demand, when there is a need to set a runtime property or assign an entity to the CAPA Task.
 

This Business Component has a dynamic output UnitID, which may be used to assign to the Task, through the UNIT table, Documents, Attachments and other entities.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | CAPAID | Integer | Yes | The ID of the CAPA. |
| Input | CAPATaskID | Integer | Yes | The ID of the CAPA Task. |

## Description Parameters

| Name | Type | Description |
|------|------|-------------|
| CAPAStatus | Integer | The status of the task. |
| ProgressStatus | Integer | The Progress Status. |
| DueDate | DateTime | The due date. |
| WarningDate | DateTime | The warning date. |
| AssignedEmployeeID | Integer | The ID of the Assigned Employee. |
| AssignedGroup | Char | The Assigned Group. |
| AssignedGroupType | Integer | The type of the Assigned Group. |
| AssignedGroupClassID | Integer | The Class ID of the Assigned Group. |
| SignatureHeaderID | Integer | The ID of the Signature Header. |
| PlannedEffortSeconds | Integer | The planned effort in seconds. |
| ActualEffortSeconds | Integer | The actual effort in seconds. |
| UseProgressTransitionRules | Boolean | The flag enables the validation that a change of the Progress Status has to be defined as the entry in the PROGRESS_TRANSITION_RULE table. |
| UseStatusTransitionRules | Boolean | The flag enables the rules of transitions between CAPA Statuses. |
| Description | Char | The description of the CAPA Task State. |
| DisableHistory | Boolean | The flag that indicates if history records should not be generated. |

## Validations

- The system validates that CAPAID is provided and that it exists in the CAPA table. 
- The system validates that CAPATaskID is provided and that it exists in the CAPA_TASK table. 
- The system validates that provided ProgressStatus exists in the PROGRESS_STATUS table. 
- If UseProgressTransitionRules flag is set to true and ProgressStatus is provided, the system checks if ProgressStatus can be changed from the actual status to new one (based on the PROGRESS_TRANSITION_RULES table). 
- The system validates that provided CAPAStatus is proper (1 - New, 2 - Started, 3 - Completed, 4 - Held, 5 - Cancelled, 6 - Closed). 
- If UseStatusTransitionRules flag is set to true and CAPAStatus is provided, the system allows only for the following, predefined transitions: 
 
- from empty to New or Started 
- from New to Started, Held, Closed or Cancelled 
- from Started to Completed, Held, Closed or Cancelled 
- from Held to New or Started 
 
- If AssignedEmployeeID is provided, the system validates that it exists in the EMPLOYEE table. 
- If AssignedGroup is provided, the system validates that it exists in the GROUP table. 
- The system validates that AssignedGroup is provided together with AssignedGroupType and AssignedGroupClassID. 
- If SignatureHeaderID is provided, the system validates that it exists in the SIGNATURE_HEADER table.

## System Processing

- The system checks if a record for the provided data exists in the database and depending on the result it either updates the existing record or creates a new one.  
-  The new UNIT record is created for newly created CAPA Task State record.  
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
| CAPA_TASK_STATE | CAPAID | CAPAID |
|  | CAPATaskID | CAPATaskID |
|  | CAPAStatus | CAPAStatus |
|  | ProgressStatus | ProgressStatus |
|  | DueDate | DueDate |
|  | WarningDate | WarningDate |
|  | CompletionDate | Populated with the current UTC time when the task enters into the CAPA Status equal Completed (3). |
|  | AssignedEmployeeID | AssignedEmployeeID |
|  | AssignedGroup | AssignedGroup |
|  | AssignedGroupType | AssignedGroupType |
|  | AssignedGroupClassID | AssignedGroupClassID |
|  | SignatureHeaderID | SignatureHeaderID |
|  | PlannedEffortSeconds | PlannedEffortSeconds |
|  | ActualEffortSeconds | ActualEffortSeconds |
|  | TextID | Link to the TEXT_TRANSLATION record. |
|  | UnitID | UnitID; Link to the UNIT record. |
| TEXT_TRANSLATION | Extended | Description |
| UNIT | ID | Record is created for the new CAPA Task State. |
