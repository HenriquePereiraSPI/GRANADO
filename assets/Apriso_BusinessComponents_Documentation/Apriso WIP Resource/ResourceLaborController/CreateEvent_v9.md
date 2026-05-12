# CreateEvent_v9

**Category:** Apriso/WIP/Resource
**Class:** `FlexNet.BusinessFacade.MachineTime.ResourceLaborController`
**Assembly:** `FlexNet.BusinessFacade.MachineTime.dll`
**Status:** Active

## Description

The purpose of this Business Component method is to create an open event of State type for the resource and at the same time pass parameters which indicate that the speed of the machine was changed.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | ResourceName | Char | Yes | String, the resource the event is to be created for (Resource Name). |
| Input | ResourceType | Integer | Yes | The resource the event is to be created for (Resource Type). |
| Input | EmployeeID | Integer | No | The employee who is creating the event. |
| Input | Speed | Decimal | No | The speed of the resource for this event. |
| Input | SpeedPercentage | Decimal | No | Decimal, the speed percentage for the resource for this event. |
| Input | SpeedUom | Char | No | The UOM of the speed for the resource for this event. |
| Input | ReasonCode | Char | No | The reason for creating the event. |
| Input | Comment | Char | No | Comment for the created event. |
| Input | ActivityTime | DateTime | Yes | The time the event was created. The records are saved with milliseconds accuracy. |
| Input | Occupation | Char | No | The occupation code for the created event. |
| Input | ReopenChildren | Boolean | Yes | Defines if any previous event is reopened. |

## Description Parameters

| Name | Type | Description |
|------|------|-------------|
| ActivityTimeUtc | DateTime | The time the event was created. The value should be specified as UTC (if provided, it will be used instead of the ActivityTime input). The records are saved with milliseconds accuracy. |

## Validations

- System checks if there are more than 1 previously opened states. If so, an error message appears: Multiple Open States Found 
- System checks if there is no open State found in the future. If such a record is found, an error message is displayed: Open State Found At Later Time 
- System checks if there is no other State event existing for the Activity Time passed as the parameter. If such a record is found, an error message is displayed: Start Time Within Another State 
- System checks if all required parameters have passed and if the following master records exist in DELMIA Apriso: 
 
- ActivityTime 
- Resource Name and Type 
- [Speed and Speed UOM] or [Speed Percentage] 
 
- System checks if the appropriate master records exist in DELMIA Apriso when Reason Code, Employee ID, Occupation, UOM Code are specified. 
- System verifies if there is exactly one Span record existing at the given moment. If there is more, an error message is displayed: Multiple Span Found.

## System Processing

- If the ReOpenChildren parameter is set to False, then the previous open State record and child records (Order/Product) linked to it are closed with an End Time equal to the ActivityTime parameter. 
- If there is no open Span existing, system creates it by invoking the BeginSpan BC method. 
- If an open State record exists, then, at the given moment, it is closed with a time equal to the ActivityTime parameter. 
- If the previous State being closed has some child records (Order/Product), then all the child records are closed, reopened and linked to the new State being created.

## History Recording in Production

- TRANSACTION_HISTORY - Transaction Name: FlexNet.BusinessFacade.MachineTimenufacturing.ResourceLaborController 
- TRANSACTION_HISTORY_WIP 
- TRANSACTION_HISTORY_RESOURCE

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| RESOURCE_LABOR | ResourceName | * ResourceName |
|  | ResourceType | ResourceType* |
|  | StartEmployeeId | EmployeeID |
|  | Speed | Speed |
|  | UomCode | SpeedUOM |
|  | SpeedPercentage | SpeedPercentage |
|  | ReasonCode | ReasonCode |
|  | NoteID | Comment |
|  | StartTime | ActivityTime* |
|  | Occupation | Occupation |
|  | Facility | RESOURCE_.Facility |
|  | Status | 1 |
|  | LaborType | 8 |
