# AllocateEquipment

**Category:** Apriso/Common/Employee
**Class:** `FlexNet.BusinessFacade.Security.LoginManager`
**Assembly:** `FlexNet.BusinessFacade.Security.dll`
**Status:** Active

## Description

This Business Component method is used to allocate an equipment to an employee.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | ResourceID | Integer | Yes | The ID of the resource linked to the equipment to be allocated. |
| Input | EmployeeID | Integer | Yes | ID of the employee allocating the equipment. |

## Validations

- The system validates if the Resource exists.  
- The system validates if the Equipment exists. 
- The system validates if the Employee exists. 
- The system validates that the Equipment is not allocated to any Employee.

## System Processing

- The system retrieves a Resource.  
- The system retrieves an Equipment linked to Resource.  
- The system validates that the Equipment is not allocated.  
- The system retrieves an Employee.  
- The system assigns an Employee to the Equipment.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| EQUIPMENT | CurrentEmployeeID | EmployeeID |
