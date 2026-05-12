# EndSpan

**Category:** Apriso/WIP/Resource
**Class:** `FlexNet.BusinessFacade.MachineTime.ResourceLaborController`
**Assembly:** `FlexNet.BusinessFacade.MachineTime.dll`
**Status:** Active

## Description

The purpose of this business component is to close an open event of Span type for the resource passed as the parameter.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | ResourceName | Char | Yes | Resource name. |
| Input | ResourceType | Integer | Yes | Resource type. |
| Input | EmployeeID | Integer | No | Employee ID. |
| Input | ReasonCode | Char | No | Reason Code for the span. |
| Input | Comment | Char | No | Comment to associate with span. |
| Input | ActivityTime | DateTime | Yes | Activity time. The value should be specified as local (it will be automatically converted and stored as UTC). The records are saved with milliseconds accuracy. |

## Validations

- System checks if all required parameters have passed: 
 
- ActivityTime 
- Resource Name and Type 
 
- System checks if the appropriate master records exist in DELMIA Apriso when the Reason Code or the Employee ID are specified. 
- System checks if there is a closed record of Span type existing at a given time (based on the ActivityTime parameter). If such a record exists then the following error message is displayed: Cannot End Span Span Is Closed 
- System checks if there is an open record of Span type existing at the moment and if it contains closed child State records, which have End Times greater than ActivityTime. If such a record exists then the following error message is displayed: Cannot End Span Closed States Exist 
- System checks if there are multiple records of State type existing at the time. If so, then an error message is displayed: Multiple Open States Found In Span 
- System checks if there is exactly one open Span record existing at the given time. If not, then the following error message is displayed: Open Span Does Not Exist At Given Time.

## System Processing

- System closes open records in the RESOURCE_LABOR table for Labor Type = 7 (Span), found based on ResourceName, ResourceType, StartTime, LaborType. 
- System closes all open child State records linked to the open Span which have Start Times less or equal to ActivityTime.

## History Recording in Production

- TRANSACTION_HISTORY - Transaction Name: FlexNet.BusinessFacade.MachineTimenufacturing.ResourceLaborController 
- TRANSACTION_HISTORY_WIP 
- TRANSACTION_HISTORY_RESOURCE

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| RESOURCE_LABOR | ResourceName | * ResourceName |
|  | ResourceType | ResourceType* |
|  | StartedEmployeeId | EmployeeID |
|  | ReasonCode | ReasonCode |
|  | StartTime | StartTime* |
|  | EndTime | EndTime* |
|  | Status | 2 |
|  | NoteID | Comment |
