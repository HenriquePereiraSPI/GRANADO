# ManageProject

**Category:** Apriso/Order/WIP
**Class:** `FlexNet.BusinessFacade.Manufacturing.ProductionProjectManager`
**Assembly:** `FlexNet.BusinessFacade.Manufacturing.dll`
**Status:** Active
**Keywords:** create insert update project

## Description

The purpose of this Business Component method is to create or update a record in the PROJECT table.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | ProjectID | Integer | No | ID of Project record to be updated. Zero if a new record should be created. |
| Input | ProjectCode | Char | Yes | The Project code. |
| Input | WBSElement | Char | No | The Work Breakdown Structure element. |
| Input | Facility | Char | No | Facility name. |
| Input | Department | Char | No | Department name. |
| Input | WorkCenter | Char | No | Work Center name. |
| Output | CreatedProjectID | Integer | Yes | ID of created Project record. |
| Output | UnitID | Integer | Yes | ID of Unit linked to the Project record. |

## Description Parameters

| Name | Type | Description |
|------|------|-------------|
| MediumDescription | Char | The medium description of the Project. |
| ExtendedDescription | Char | The extended description of the Project. |

## Validations

- If ProjectID is provided, the system verifies that it exists in the PROJECT table. 
- The system validates that the provided Facility, Department and Work Center exist in the database.

## System Processing

- The system creates (or updates if ProjectID is provided) a record in the PROJECT table. It also creates a related UNIT record (if it did not exist) and updates or inserts the description in the TEXT_TRANSLATION table (if Description was provided).  
 
- The empty strings provided on inputs are treated as null values.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| PROJECT | ID | ProjectID/CreatedProjectID |
|  | ProjectCode | ProjectCode |
|  | WBSElement | WBSElement |
|  | Facility | Facility |
|  | Department | Department |
|  | WorkCenter | WorkCenter |
|  | UnitID | Link to UNIT table. |
|  | TextID | Link to TEXT table. |
| UNIT | ID | UnitID |
| TEXT | ID | (system generated) |
| TEXT_TRANSLATION | TextID | Link to TEXT table. |
|  | LanguageID | Current user's language. |
|  | Medium | MediumDescription |
|  | Extended | ExtendedDescription |
