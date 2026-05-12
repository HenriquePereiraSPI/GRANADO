# CopyMultipleResourceLaborToState

**Category:** Apriso/WIP/Resource
**Class:** `FlexNet.BusinessFacade.MachineTime.ResourceLaborController`
**Assembly:** `FlexNet.BusinessFacade.MachineTime.dll`
**Status:** Active

## Description

The purpose of this business component is to copy all Order and Product events attached to the State event to another State event. Unlike AssignMultipleResourceLaborToState which moves all Order and Product events, this component creates a copy of the events and changes only their Start and End Times to match the destination State event.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | SourceResourceLaborID | Integer | Yes | Source state event ID. |
| Input | DestinationResourceLaborID | Integer | Yes | Destination state event ID. |

## Validations

- System checks if the identifier SourceResourceLaborID refers to the existing machine event record of State type. If not, an error message is displayed: Resource Labor is not of state type 
- System checks if the identifier DestinationResourceLaborID refers to the existing machine event record of State type. If not, an error message is displayed: Resource Labor is not of state type 
- System checks if, for the destination State event, there are any child Order events that exist for the same key: WipOrderNo, WipOrderType, OprSequenceNo, ProductID, LotNo. If there are some records found , an error message is displayed: Multiple order records found linked to the same state 
- System checks if, for the destination State event, there are any child Product events that exist for the same key: WorkCenter, ProductID, LotNo. If there are some records found, an error message is displayed: Multiple product records found linked to the same state.

## System Processing

For each Order and Product event that belongs to the State identified by the SourceResourceLaborID parameter, system creates its copy that is linked to the State identified by DestinationResourceLaborID. The only differences of such a copy are:
 
 
- ParentID - Parent State event equal to DestinationResourceLaborID 
- StartTime - Start Time of the destination State event 
- EndTime - End Time of the destination State event.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| RESOURCE_LABOR | RESOURCENAME | ResourceName of source Order/Product Event |
|  | RESOURCETYPE | ResourceType of source Order/Product Event |
|  | STARTEDEMPLOYEEID | EmployeeID of source Order/Product Event |
|  | LABORTYPE | LaborType of source Order/Product Event |
|  | STARTTIME | StartTime of destination State event |
|  | STATUS | Status of source Order/Product Event |
|  | WIPORDERNO | WipOrderNo of source Order/Product Event (copied only for LaborType is equal to 9) |
|  | WIPORDERTYPE | WipOrderType of source Order/Product Event (copied only for LaborType is equal to 9) |
|  | OPRSEQUENCENO | OprSequenceNo of source Order/Product Event (copied only for LaborType is equal to 9) |
|  | PARENTID | DestinationResourceLaborID (Required) |
|  | PRODUCTID | ProductID of source Order/Product Event |
|  | LOTNO | LotNo of source Order/Product Event |
|  | PRODUCTIONLINE | ProductionLine of source Order/Product Event |
|  | WORKCENTER | WorkCenter of source Order/Product Event |
|  | FACILITY | Facility of source Order/Product Event |
|  | OCCUPATIONCODE | OccupationCode of source Order/Product Event |
