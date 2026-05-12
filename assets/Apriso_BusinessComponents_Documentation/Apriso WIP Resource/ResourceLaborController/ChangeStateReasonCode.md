# ChangeStateReasonCode

**Category:** Apriso/WIP/Resource
**Class:** `FlexNet.BusinessFacade.MachineTime.ResourceLaborController`
**Assembly:** `FlexNet.BusinessFacade.MachineTime.dll`
**Status:** Active

## Description

This Business Component method is used to change the Reason Code and the comment of events of the State type.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | ResourceLaborID | Integer | Yes | The Resource labor ID for the Resource labor being changed. |
| Input | ReasonCode | Char | Yes | The new Reason Code for the state. |
| Input | Comment | Char | No | The comment for the change. |

## Validations

- The system checks if the record identified by ResourceLaborID exists in the system and its type is State. 
- The system checks if the appropriate master record exists when the Reason Code is specified.

## System Processing

- The system updates the Reason Code and the comment of the record passed as the ResourceLaborID.

## History Recording in Production

- TRANSACTION_HISTORY – Transaction Name: FlexNet.BusinessFacade.MachineTimenufacturing.ResourceLaborController 
- TRANSACTION_HISTORY_WIP 
- TRANSACTION_HISTORY_RESOURCE

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| RESOURCE_LABOR | NoteID | The ID of the new or updated record from the NOTE table. |
|  | ReasonCode | The Reason Code. |
| NOTE | Description | The comment. |
