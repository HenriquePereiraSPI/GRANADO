# InsertCAPAHistory

**Category:** Apriso/Quality/Issue Management
**Class:** `FlexNet.BusinessFacade.CAPA.CAPARuntimeController`
**Assembly:** `FlexNet.BusinessFacade.CAPA`
**Status:** Active
**Keywords:** CAPA, NC, issue, incident, corrective, preventive, non-conformity, non-compliant, history, insert

## Description

The purpose of this Business Component method is to write history records for CAPA changes.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | CAPAID | Integer | Yes | The ID of the CAPA. |
| Input | PropertyTypeList | ListofChar | No | The types of properties, that is standard (CAPA), custom (CAPA_PROPERTY_VALUE), link (CAPA_LINK), notification (CAPA_NOTIFICATION), annotation (UNIT_ANNOTATION), document (UNIT_DOCUMENT), etc. |
| Input | PropertyList | ListofChar | No | The names of properties (or a part of the multi-value property). |
| Input | DataTypeList | Integer | No | The data types (1 - Char, 2 - Integer, 3 - Decimal, 4 - Boolean, 5 - DateTime). |
| Output | CreatedCAPAHistoryIDList | ListofInteger | Yes | The IDs of newly created records. |

## Description Parameters

| Name | Type | Description |
|------|------|-------------|
| FlowName | Char | The name of the source CAPA Flow. |
| FlowRevision | Char | The revision of the CAPA Flow. |
| CurrentStepName | Char | The name of the current CAPA Step. |
| StepName | Char | The name of the CAPA Step affected by the change. |
| TaskName | Char | The name of the CAPA Task affected by the change. |
| SignatureHeaderID | Integer | The ID of the Signature Header used for signing a CAPA Task or Step. |
| TextID | Integer | The link to the TEXT table. |
| ReferenceID | Integer | The referenceID property of the CAPA_HISTORY table. |
| ChangeLineNoList | ListofInteger | The numbers ordering changed properties (and grouping multi-value properties). |
| PropertyIndexList | ListofInteger | The indexes of properties of the list type. For future use of the list type properties. |
| ValueCharList | ListofChar | The String values of properties before the change. |
| ValueIntList | ListofInteger | The Integer values of properties before the change. |
| ValueDecimalList | ListofDecimal | The Decimal values of properties before the change. |
| ValueBoolList | ListofBool | The Boolean values of properties before the change. |
| ValueDateTimeList | ListofDateTime | The Date Time values of properties before the change. |
| ToValueCharList | ListofChar | The String values of properties after the change. |
| ToValueIntList | ListofInteger | The Integer values of properties after the change. |
| ToValueDecimalList | ListofDecimal | The Decimal values of properties after the change. |
| ToValueBoolList | ListofBool | The Boolean values of properties after the change. |
| ToValueDateTimeList | ListofDateTime | The Date Time values of the properties after the change. |
| DescriptionList | ListofChar | The descriptions. |

## Validations

- The system validates that CAPAID is provided and that it exists in the CAPA table. 
- If SignatureHeaderID is provided, the system validates that it exists in the SIGNATURE_HEADER table. 
- The system validates that the provided input lists are of the same size. Empty lists from Dynamic Inputs are ignored.

## System Processing

- The system sets the name of the logged-in Employee as the EmployeeNo in the CAPA_HISTORY table. 
- The system sets the ChangeDate as the actual date in the CAPA_HISTORY table. 
- The system generates a unique identifier and assigns it to the ChangeFUID column in the CAPA_HISTORY table. 
- If FlowName, FlowRevision or CurrentStepName are not provided, the system retrieves this information from the CAPA table based on CAPAID. 
- The system creates new records in the CAPA_HISTORY table for elements on all the provided lists and returns their IDs. When all input lists are empty, the records are not generated.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| CAPA_HISTORY | ID | CreatedCAPAHistoryID |
|  | CAPAID | CAPAID |
|  | EmployeeNo | The name of the Employee who is logged into the system. |
|  | ChangeDate | The current UTC time. |
|  | ChangeFUID | The automatically generated unique ID of the change. |
|  | FlowName | FlowName. If it is not provided, it is populated automatically based on CAPAID. |
|  | FlowRevision | FlowRevision. If it is not provided, it is populated automatically based on CAPAID. |
|  | CurrentStepName | CurrentStepName. If it is not provided, it is populated automatically based on CAPAID. |
|  | StepName | StepName |
|  | TaskName | TaskName |
|  | SignatureHeaderID | SignatureHeaderID |
|  | ChangeLineNo | Item from ChangeLineNoList. If the list is empty, the column is populated by subsequent numbers starting from zero. |
|  | PropertyType | Item from PropertyTypeList. |
|  | Property | Item from PropertyList. |
|  | PropertyIndex | Item from PropertyIndexList. |
|  | DataType | Item from DataTypeList. |
|  | ValueChar | Item from ValueCharList. |
|  | ValueInt | Item from ValueIntList. |
|  | ValueDecimal | Item from ValueDecimalList. |
|  | ValueDateTime | Item from ValueDateTimeList. |
|  | ValueBool | Item from ValueBoolList. |
|  | ToValueChar | Item from ToValueCharList. |
|  | ToValueInt | Item from ToValueIntList. |
|  | ToValueDecimal | Item from ToValueDecimalList. |
|  | ToValueDateTime | Item from ToValueDateTimeList. |
|  | ToValueBool | Item from ToValueBoolList. |
|  | TextID | Link to the TEXT_TRANSLATION record. |
| TEXT_TRANSLATION | Extended | Item from DescriptionList. |
