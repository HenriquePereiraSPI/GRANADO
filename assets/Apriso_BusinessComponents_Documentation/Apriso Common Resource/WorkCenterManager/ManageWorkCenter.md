# ManageWorkCenter

**Category:** Apriso/Common/Resource
**Class:** `FlexNet.BusinessFacade.Resources.WorkCenterManager`
**Assembly:** `FlexNet.BusinessFacade.Resources`
**Status:** Active
**Keywords:** create Work Center

## Description

Creates a new record in the WORK_CENTER table. Updates an existing Work Center.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | WorkCenter | Char | Yes | Work Center name. |
| Input | Facility | Char | No | Facility name. |
| Input | Department | Char | No | Department name. |
| Output | UnitID | Integer | Yes | Unique identifier of the Unit. |

## Description Parameters

| Name | Type | Description |
|------|------|-------------|
| Company | Char | The Company name. |
| Building | Char | The Building name. |
| Division | Char | The Division name. |
| CostCenter | Char | The Cost Center name (requires Division name). |
| ExternalID | Char | The ID of Work Center from external system. |
| DescriptionList | ListofChar | The list of descriptions in different languages. |
| LanguageIDList | ListofInteger | The list of languages for descriptions. Zero in the list means current user's language. |
| WorkCenterName | Char | The name of the Work Center that is non-unique. |

## Validations

- System validates if provided Work Center already does not exist. 
- System validates that Division is provided when CostCenter is specified. 
- System validates that DescriptionList and LanguageIDList are provided together and have equal lengths. 
- System validates that provided Facility, Department, Company, Building, Division, and Cost Center exist in the database.

## System Processing

- System creates a new record in the WORK_CENTER table or updates an existing Work Center. It also creates a related UNIT record and descriptions in the TEXT_TRANSLATION table.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| WORK_CENTER | WorkCenter | The Work Center |
|  | Facility | The Facility that the Work Center is in. |
|  | Department | The assignment of the Work Center to a Department. |
|  | Company | The company to which the Work Center belongs. |
|  | Building | Building |
|  | Division | The assignment of the Work Center to a division. |
|  | CostCenter | The assignment of the Work Center to a cost center. |
|  | ExternalID | The unique identifier from the external system. |
|  | UnitID | Unique identifier of the Unit. |
|  | TextID | Unique identifier of the Text. |
|  | WorkCenterName | Provide optional field to store Work Center name which is duplicable. |
| TEXT | ID | (system generated) |
| TEXT_TRANSLATION | TextID | Unique identifier of the Text. |
|  | Medium | Subsequent elements from DescriptionList. |
|  | LanguageID | Subsequent elements from LanguageIDList (zero in the list means current user's language). |
| UNIT | ID | The unique ID of the record (key) in the table. |
