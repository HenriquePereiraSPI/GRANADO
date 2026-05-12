# SetWeighHeaderEmployee

**Category:** Apriso/Weighing and Dispensing
**Class:** `FlexNet.BusinessFacade.WD.WeighManager`
**Assembly:** `FlexNet.BusinessFacade.WD.dll`
**Status:** Active
**Keywords:** Weighing Dispensing Weigh Header Employee Assign Set

## Description

This method assigns an Employee to the Weigh Header.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | Transaction | Char | No | Transaction name. |
| Input | WeighHeaderID | Integer | Yes | The ID of Weigh Group header record. |
| Input | EmployeeID | Integer | Yes | The ID of an Employee. |

## Validations

- System validates if the Weigh Header exists. 
- System validates if the Employee exists.

## System Processing

- System assigns the Employee to the Weigh Header. If EmployeeID is 0, current assignment is removed (it is set to a null value).  
- System creates XML for Transaction History. When Transaction name is not specified, default class and method name of BC is used.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| WEIGH_HEADER | ID | WeighHeaderID |
|  | EmployeeID | EmployeeID |
