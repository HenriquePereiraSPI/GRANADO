# ManageCAPAPropertyValue

**Category:** Apriso/Quality/Issue Management
**Class:** `FlexNet.BusinessFacade.CAPA.CAPARuntimeController`
**Assembly:** `FlexNet.BusinessFacade.CAPA`
**Status:** Active
**Keywords:** CAPA, NC, issue, incident, corrective, preventive, non-conformity, non-compliant, change, property, value

## Description

The purpose of this Business Component method is to create a new or update an existing record in the CAPA_PROPERTY_VALUE table.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | CAPAPropertyValueID | Integer | No | The ID of the CAPA Property Value. |
| Input | CAPAID | Integer | Conditional | The ID of the CAPA. |
| Input | Property | Char | Conditional | The name of the property. |
| Input | PropertyIndex | Integer | No | The index of the property. |
| Input | DataType | Integer | Conditional | The data type (1 - Char, 2 - Int, 3 - Decimal, 4 - Boolean, 5 - DateTime). |
| Input | ValueChar | Char | Conditional | The Char value. |
| Input | ValueInt | Integer | Conditional | The Integer value. |
| Input | ValueDecimal | Decimal | Conditional | The Decimal value. |
| Input | ValueBool | Boolean | Conditional | The Boolean value. |
| Input | ValueDateTime | DateTime | Conditional | The Date Time value. |
| Output | CreatedCAPAPropertyValueID | Integer | Yes | The ID of the newly created record. |

## Description Parameters

| Name | Type | Description |
|------|------|-------------|
| DisableHistory | Boolean | The flag that indicates if history records should not be generated. |

## Validations

- If CAPAPropertyValueID is provided, the system validates that it exists in the CAPA_PROPERTY_VALUE table. 
- If CAPAPropertyValueID is not provided, the system validates that CAPAID, Property, and DataType are provided. 
- If DataType is provided, the system validates that DataType is one of the following: 
 
- 1 - Char (for this type ValueChar is required) 
- 2 - Integer (for this type ValueInt is required) 
- 3 - Decimal (for this type ValueDecimal is required) 
- 4 - Boolean (for this type ValueBool is required) 
- 5 - Date Time (for this type ValueDateTime is required) 
 
- The system validates that a match between DataType and Property exists in the CAPA_PROPERTY table

## System Processing

- If CAPAPropertyValueID is provided, the system updates the provided fields for the relevant record in the CAPA_PROPERTY_VALUE table. 
- If CAPAPropertyValueID is not provided, the system creates a new record in the CAPA_PROPERTY_VALUE table and returns the ID of the record. 
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
| CAPA_PROPERTY_VALUE | ID | CreatedCAPAPropertyValueID |
|  | CAPAID | CAPAID |
|  | Property | Property |
|  | PropertyIndex | PropertyIndex |
|  | DataType | DataType |
|  | ValueChar | ValueChar |
|  | ValueInt | ValueInt |
|  | ValueDecimal | ValueDecimal |
|  | ValueDateTime | ValueDateTime |
|  | ValueBool | ValueBool |
