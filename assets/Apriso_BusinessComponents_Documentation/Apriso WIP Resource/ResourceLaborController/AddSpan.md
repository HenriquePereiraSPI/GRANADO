# AddSpan

**Category:** Apriso/WIP/Resource
**Class:** `FlexNet.BusinessFacade.MachineTime.ResourceLaborController`
**Assembly:** `FlexNet.BusinessFacade.MachineTime.dll`
**Status:** Active

## Description

This Business Component method is used to create a closed event of the span type for the Resource passed as the parameter.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | ResourceName | Char | Yes | The Resource name. |
| Input | ResourceType | Integer | Yes | The Resource type. |
| Input | EmployeeID | Integer | No | The employee ID. |
| Input | ReasonCode | Char | No | The Reason Code for the span. |
| Input | Comment | Char | No | The comment to associate with span. |
| Input | StartTime | DateTime | Yes | The start time. The value should be specified as local (it will be automatically converted and stored as UTC). The records are saved with milliseconds accuracy. |
| Input | EndTime | DateTime | Yes | The end time. The value should be specified as local (it will be automatically converted and stored as UTC). The records are saved with milliseconds accuracy. |

## Validations

- The system validates if the record with a given ResourceName and ResourceType exists in the RESOURCE_ table. 
- The system validates if the given occupation exists in the same Facility as the Resource. 
- The system validates if the given Reason Code exists in the REASON_CODE table (it is not validated if it exists in the RESOURCE_REASON_CODE table).

## System Processing

The system creates a record in the RESOURCE_LABOR table for Labor Type = 7 (Span).

## History Recording in Production

- TRANSACTION_HISTORY – transaction name: FlexNet.BusinessFacade.MachineTimenufacturing.ResourceLaborController 
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
