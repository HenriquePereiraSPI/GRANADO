# AssignResourceLaborToState

**Category:** Apriso/WIP/Resource
**Class:** `FlexNet.BusinessFacade.MachineTime.ResourceLaborController`
**Assembly:** `FlexNet.BusinessFacade.MachineTime.dll`
**Status:** Active

## Description

The purpose of this Business Component is to assign an existing event of the order or product type to another event of the state type.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | StateResourceLaborID | Integer | Yes | The ID of the destination machine event record of the state type. |
| Input | ResourceLaborID | Integer | Yes | The ID of the machine event record of the order or product type. |

## Validations

- The system checks if StateResourceLaborID refers to the existing machine event record of the state type. If not, an error message is displayed. 
- The system checks if ResourceLaborID refers to the existing machine event record of the order or the product type. If not, an error message is displayed: the Resource labor type has to be product or order.

## System Processing

The system reassigns the order or product event being changed (identified by ResourceLaborID) to the new state event (identified by StateResourceLaborID) and does the following updates:
 
 
- StartTime must be equal to StartTime of the state event. 
- EndTime must be equal to EndTime of the state event (if the status of the State is Closed) or Null (if the status of the state is Open). 
- The status is equal to Open (if the status of the State is Open) or Closed (if the status of the State is Closed).

## History Recording in Production

- TRANSACTION_HISTORY – transaction name: FlexNet.BusinessFacade.MachineTimenufacturing.ResourceLaborController 
- TRANSACTION_HISTORY_WIP 
- TRANSACTION_HISTORY_RESOURCE

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| RESOURCE_LABOR | StartTime | The start time of the state event. |
|  | EndTime | The end time of the state event (if the status of the state is Closed), Null (if the status of the state is Open). |
|  | LaborType | The status is equal to Open (if the status of the state is Open), Closed (if the status of the state is Closed). |
|  | ParentID | DestinationResourceLaborID |
