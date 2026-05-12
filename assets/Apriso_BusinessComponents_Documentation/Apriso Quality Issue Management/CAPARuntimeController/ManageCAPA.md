# ManageCAPA

**Category:** Apriso/Quality/Issue Management
**Class:** `FlexNet.BusinessFacade.CAPA.CAPARuntimeController`
**Assembly:** `FlexNet.BusinessFacade.CAPA`
**Status:** Active
**Keywords:** CAPA, NC, issue, incident, corrective, preventive, non-conformity, non-compliant, create, update

## Description

The purpose of this Business Component method is to create a new or update an existing record in the CAPA table. This Business Component has a dynamic output UnitID.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | CAPAID | Integer | No | The ID of the CAPA. |
| Input | RecordNo | Char | Conditional | The unique name of the CAPA. |
| Input | Priority | Integer | Conditional | The priority. |
| Input | Severity | Integer | Conditional | The severity. |
| Input | CAPAStatus | Integer | Conditional | The CAPA status. |
| Input | ProgressStatus | Integer | Conditional | The Progress Status. |
| Input | CAPAFlowID | Integer | Conditional | The ID of the CAPA Flow. |
| Input | DueDate | DateTime | Conditional | The due date. |
| Input | WarningDate | DateTime | Conditional | The warning date. |
| Output | CreatedCAPAID | Integer | Yes | The ID of the newly created record. |

## Description Parameters

| Name | Type | Description |
|------|------|-------------|
| DueDate | DateTime | The due Date. |
| WarningDate | DateTime | The warning Date. |
| OwnerEmployeeID | Integer | The ID of the Owner Employee. |
| OwnerGroup | Char | The Owner Group. |
| OwnerGroupType | Integer | The type of the Owner Group. |
| OwnerGroupClassID | Integer | The Class ID of the Owner Group. |
| AssignedEmployeeID | Integer | The ID of the Assigned Employee. |
| AssignedGroup | Char | The Assigned Group. |
| AssignedGroupType | Integer | The type of the Assigned Group. |
| AssignedGroupClassID | Integer | The Class ID of the Assigned Group. |
| RootCauseReasonCode | Char | The Root Cause Reason Code. |
| RootCauseDescription | Char | The description for the Root Cause Reason Code. |
| CorrectiveActionReasonCode | Char | The Reason Code of the Corrective Action. |
| CorrectiveActionDescription | Char | The description for the Action Reason Code. |
| PreventiveActionReasonCode | Char | The Preventive Action Reason Code. |
| PreventiveActionDescription | Char | The description for the Preventive Action Reason Code. |
| UseProgressTransitionRules | Boolean | The flag enables the validation that a change of the Progress Status has to be defined as the entry in the PROGRESS_TRANSITION_RULE table. |
| UseStatusTransitionRules | Boolean | The flag enables the rules of transitions between CAPA Statuses. |
| Title | Char | The title. |
| Description | Char | The description. |
| DisableHistory | Boolean | The flag that indicates if history records should not be generated. |
| CAPAClassID | Integer | The Class ID of the CAPA. |
| Category | Integer | The category. |
| ContainmentID | Integer | The ID of the Containment. |
| Frequency | Integer | The frequency. |
| LocationDescription | Char | The description for the Location. |
| Reference | Integer | The reference. |
| Scope | Integer | The scope. |
| Source | Integer | The source. |

## Validations

- If CAPAID is provided, the system validates that it exists in the CAPA table. 
- If CAPAID is not provided, the system validates that RecordNo, Priority, Severity, CAPAStatus, ProgressStatus are provided, and that the RecordNo doesn't already exist. 
- The system validates that the provided ProgressStatus exists in the PROGRESS_STATUS table. 
- If the UseProgressTransitionRules flag is set to true and ProgressStatus is provided, the system checks if ProgressStatus can be changed from the actual status to the new one, based on the PROGRESS_TRANSITION_RULES table. 
- The system validates that the provided CAPAStatus is proper (1 - New, 2 - Started, 3 - Completed, 4 - Held, 5 - Cancelled, 6 - Closed). 
- The system validates that the provided Severity exists in the CAPA_SEVERITY table (1 - Critical, 2 - High, 3 - Normal, 4 - Minor). 
- If the UseStatusTransitionRules flag is set to true and CAPAStatus is provided, the system allows only for the following, predefined transitions: 
 
- From empty to New or Started 
- From New to Started, Held, Closed or Cancelled 
- From Started to Completed, Held, Closed or Cancelled 
- From Held to New or Started 
 
- If CAPAFlowID is provided, the system validates that the provided CAPAFlowID exists in the CAPA_FLOW table and that it is not a template (CAPA Flows with Type equal to 1 are treated as templates); additionally, the system validates that the CAPAFlowID is not already linked to other record in the CAPA table. 
- If OwnerEmployeeID is provided, the system validates that it exists in the EMPLOYEE table. 
- If OwnerGroup is provided, the system validates that it exists in the GROUP table. 
- The system validates that OwnerGroup is provided together with OwnerGroupType and OwnerGroupClassID. 
- If AssignedEmployeeID is provided, the system validates that it exists in the EMPLOYEE table. 
- If AssignedGroup is provided, the system validates that it exists in the GROUP table. 
- The system validates that AssignedGroup is provided together with AssignedGroupType and AssignedGroupClassID. 
- If RootCauseReasonCode is provided, the system validates that it exists in the REASON_CODE table. 
- If CorrecitveActionReasonCode is provided, the system validates that it exists in the REASON_CODE table. 
- If PreventiveActionReasonCode is provided, the system validates that it exists in the REASON_CODE table. 
- If CAPAClassID is provided, the system validates that it exists in the CAPA_CLASS table. 
- If ContainmentID is provided, the system validates that it exists in the CONTAINMENT table.

## System Processing

- If CAPAID is provided, the system updates the provided fields for the relevant record in the CAPA table. 
- If CAPAID is not provided, the system creates a new record in the CAPA table and returns the ID of the record. 
- When the CAPA Flow is assigned to the CAPA record, the system creates empty records in the CAPA_STEP_STATE and CAPA_TASK_STATE tables (for each step and task of the assigned CAPA Flow respectively). The state records for the previously used CAPA Flow are deleted. 
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
| CAPA | ID | CAPAID/CreatedCAPAID |
|  | RecordNo | RecordNo |
|  | Priority | Priority |
|  | Severity | Severity |
|  | CAPAStatus | CAPAStatus |
|  | ProgressStatus | ProgressStatus |
|  | CAPAFlowID | CAPAFlowID |
|  | DueDate | DueDate |
|  | WarningDate | WarningDate |
|  | OwnerEmployeeID | OwnerEmployeeID |
|  | OwnerGroup | OwnerGroup |
|  | OwnerGroupType | OwnerGroupType |
|  | OwnerGroupClassID | OwnerGroupClassID |
|  | AssignedEmployeeID | AssignedEmployeeID |
|  | AssignedGroup | AssignedGroup |
|  | AssignedGroupType | AssignedGroupType |
|  | AssignedGroupClassID | AssignedGroupClassID |
|  | RootCauseReasonCode | RootCauseReasonCode |
|  | CorrectiveActionReasonCode | CorrectiveActionReasonCode |
|  | PreventiveActionReasonCode | PreventiveActionReasonCode |
|  | CAPAClassID | CAPAClassID |
|  | TextID | Link to the TEXT_TRANSLATION record with the Title and Description. |
|  | RootCauseTextID | Link to the TEXT_TRANSLATION record with the RootCauseComment. |
|  | CorrectiveActionTextID | Link to the TEXT_TRANSLATION record with the CorrectiveActionComment. |
|  | PreventiveActionTextID | Link to the TEXT_TRANSLATION record with the PreventiveActionComment. |
|  | ContainmentID | ContainmentID |
|  | LocationTextID | Link to the TEXT_TRANSLATION record with the LocationDescription. |
|  | Scope | Scope |
|  | Frequency | Frequency |
|  | Reference | Reference |
|  | Category | Category |
|  | Source | Source |
| CAPA_STEP_STATE | CAPAID | CreatedCAPAID, records added (and deleted if required) on CAPA Flow assignment. |
| CAPA_TASK_STATE | CAPAID | CreatedCAPAID, records added (and deleted if required) on CAPA Flow assignment. |
| TEXT_TRANSLATION | Extended | LocationDescription |
| TEXT_TRANSLATION | Medium | Title |
| TEXT_TRANSLATION | Extended | Description |
| TEXT_TRANSLATION | Extended | RootCauseDescription |
| TEXT_TRANSLATION | Extended | CorrectiveActionDescription |
| TEXT_TRANSLATION | Extended | PreventiveActionDescription |
