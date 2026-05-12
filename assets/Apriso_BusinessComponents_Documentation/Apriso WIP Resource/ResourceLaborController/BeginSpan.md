# BeginSpan

**Category:** Apriso/WIP/Resource
**Class:** `FlexNet.BusinessFacade.MachineTime.ResourceLaborController`
**Assembly:** `FlexNet.BusinessFacade.MachineTime.dll`
**Status:** Active

## Description

The purpose of this business component is to create an open event of Span type for the resource passed as the parameter.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | ResourceName | Char | Yes | The Resource name. |
| Input | ResourceType | Integer | Yes | The Resource type. |
| Input | EmployeeID | Integer | No | The employee ID. |
| Input | ReasonCode | Char | No | The Reason Code for the span. |
| Input | Comment | Char | No | The comment to associate with the span. |
| Input | ActivityTime | DateTime | Yes | The activity time. The value should be specified as local (it will be automatically converted and stored as UTC). The records are saved with milliseconds accuracy. |

## Description Parameters

| Name | Type | Description |
|------|------|-------------|
| ActivityTimeUtc | DateTime | The time the event was created. The value should be specified as UTC (if provided, it will be used instead of the ActivityTime input). The records are saved with milliseconds accuracy. |

## Validations

- The system checks if all the required parameters have passed: 
 
- ActivityTime 
- Resource name and type 
 
- The system checks if the appropriate master records exist in DELMIA Apriso when the Reason Code or the employee ID are specified. 
- The system checks if there is another record of the span type existing at the moment (based on the ActivityTime parameter) or later in time.

## System Processing

- The system creates an open record in the RESOURCE_LABOR table for Labor Type = 7 (Span). 
- The system closes the previously open span, adjusts the end time of all the child records (state), and creates new child records that are the same linked to the span being created. 
- The system copies the WipOrderNo, WipOrderType, OprSequenceNo, ProductionLine, LotNo, and ProductID values for the child (state) record if it is split.

## History Recording in Production

- TRANSACTION_HISTORY – transaction name: FlexNet.BusinessFacade.MachineTimenufacturing.ResourceLaborController  
- TRANSACTION_HISTORY_WIP  
- TRANSACTION_HISTORY_RESOURCE

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| RESOURCE_LABOR | ResourceName | ResourceName |
|  | ResourceType | ResourceType |
|  | StartedEmployeeId | EmployeeID |
|  | ReasonCode | ReasonCode |
|  | StartTime | UTC time of ActivityTime |
|  | EndTime | UTC time of ActivityTime (EndTime for previous open span) |
|  | Status | 2 for Span that is closed, 1 for new Span |
|  | NoteID | Comment |
|  | WipOrderNo | For the child state record copied while it is split. |
|  | WipOrderType | For the child state record copied while it is split. |
|  | OprSequenceNo | For the child state record copied while it is split. |
|  | ProductID | For the child state record copied while it is split. |
|  | LotNo | For the child state record copied while it is split. |
|  | ProductionLine | For the child state record copied while it is split. |
