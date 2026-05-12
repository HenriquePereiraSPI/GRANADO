# CreateResource

**Category:** Apriso/Common/Resource
**Class:** `FlexNet.BusinessFacade.Resources.ResourceCreator`
**Assembly:** `FlexNet.BusinessFacade.Resources.dll`
**Status:** Active

## Description

The purpose of this Business Component is to create a Resource.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | ResourceName | Char | Yes | Resource name. |
| Input | ResourceType | Integer | Yes | Resource type. |

## Validations

- System validates that ResourceName and ResourceType are specified and that the resource doesn't exist. 
- System validates that resource class exists (if ResourceClassID is specified). 
- System validates that department exists (if Department is specified). 
- System validates that facility exists (if Facility is specified). 
- System validates that the resource name exists as an entity based on the resource type: 
 
- If type is 1, then no validation. 
- If type is 3, there should be an employee = ResourceName 
- If type is 4, there should be an Building = ResourceName 
- If type is 5, there should be an Container= ResourceName 
- If type is 6, there should be an Equipment = ResourceName 
- If type is 7, there should be a Land = ResourceName 
 
- For any other value resource type is defaulted to 1.

## System Processing

- System creates a record in the RESOURCE table. 
- The component adds a record to UNIT table if the CreateUnit flag is set to true and outputs this value. 
- If ResourceClass is entered and RESOURCE_CLASS has unit characteristics (mean RESOURCE_CLASS.UnitID is not empty and UNIT_CHARACTERISTIC is not empty for given UnitID) then the characteristic is copied and assigned to the new resource (it is deep copy, not a link as reference).

## Pre-Conditions

A physical entity should exist when resource type is in the range 3..7

## History Recording in Production

History Records are produced in UNIT_CHARACTERISTIC_HISTORY when applicable.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| RESOURCE_ | ResourceType | Inputted ResourceType (Required) |
|  | ResourceName | Inputted ResourceName (Required) |
|  | ResourceClassID | Inputted ResourceClassID |
|  | TextID | TEXT_TRANSLATION.TextID |
|  | Department | Inputted Department |
|  | Facility | Inputted Facility |
| TEXT | ID | System generated |
| TEXT_TRANSLATION | TextID | TEXT.ID |
|  | LanguageID | ID of user language |
|  | Medium | Inputted Description |
| UNIT | ID | Created Unit ID (BC Output) |
| UNIT_CHARACTERISTIC_ | UnitID | UNIT.ID |
|  | Characteristic | Copied from Class Characteristic |
