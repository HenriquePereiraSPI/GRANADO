# ReopenResourceLabor

**Category:** Apriso/WIP/Resource
**Class:** `FlexNet.BusinessFacade.MachineTime.ResourceLaborController`
**Assembly:** `FlexNet.BusinessFacade.MachineTime.dll`
**Status:** Active

## Description

The purpose of this business component is to re-open closed machine event records of Order, Span and State type, as well as optionally re-open all child records.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | ResourceLaborID | Integer | Yes | ID of the resource labor to be opened. |
| Input | ReopenChildren | Boolean | No | Indicates if the resource labor children are to be opened. |

## Validations

The System checks if the record identified by the ResourceLaborID identifier exists in system and its type is Order, Span or State. If not, an error message is displayed: Resource Labor has to be of Span, State or Order type.

## System Processing

- If the machine event type is equal to Order, State or Span then system updates its status to Open and sets End Time = NULL. 
- If the machine event type is equal to State or Span and the ReOpenChildren flag is set to True, then all child records are also re-opened.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| RESOURCE_LABOR | ResourceLaborID | ResourceLaborID |
|  | EndTime | NULL |
|  | Status | 1 |
