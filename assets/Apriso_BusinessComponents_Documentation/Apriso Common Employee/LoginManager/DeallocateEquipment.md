# DeallocateEquipment

**Category:** Apriso/Common/Employee
**Class:** `FlexNet.BusinessFacade.Security.LoginManager`
**Assembly:** `FlexNet.BusinessFacade.Security.dll`
**Status:** Active

## Description

This method releases an equipment if it is allocated to an employee.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | ResourceID | Integer | Yes | ID of the resource linked to the equipment which, in turn, is allocated to an employee that is to be un-assigned. |

## Validations

- Validates resource exists 
- Validates equipment exists

## System Processing

- System retrieves resource, 
- System retrieves equipment linked to the resource, 
- System un-assigns employee from equipment.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| Equipment | CurrentEmployeeID | NULL |
