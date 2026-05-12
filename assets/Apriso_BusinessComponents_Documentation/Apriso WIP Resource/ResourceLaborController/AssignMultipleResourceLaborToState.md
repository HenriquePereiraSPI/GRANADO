# AssignMultipleResourceLaborToState

**Category:** Apriso/WIP/Resource
**Class:** `FlexNet.BusinessFacade.MachineTime.ResourceLaborController`
**Assembly:** `FlexNet.BusinessFacade.MachineTime.dll`
**Status:** Active

## Description

This Business Component is used to reassign all the existing events of an order or product type assigned to a state event to another event of the state type.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | SourceResourceLaborID | Integer | Yes | The ID of the source machine event record of the state type. |
| Input | DestinationResourceLaborID | Integer | Yes | The ID of the destination machine event record of the state type. |

## Validations

- The system checks if SourceResourceLaborID refers to an existing machine event record of the state type. If it does not, an error message is displayed. 
- The system checks if DestinationResourceLaborID refers to an existing machine event record of the state type. If it does not, an error message is displayed. 
- The system checks if there are any child Order events that exist for the same key (WipOrderNo, WipOrderType, OprSequenceNo, ProductID, LotNo) for the destination state event. If any records are found, an error message is displayed. 
- The system checks if there are any child Product events that exist for the same key (WorkCenter, ProductID, LotNo) for the destination state event. If any records are found, an error message is displayed.

## System Processing

The system reassigns all the order/product events that belong to the source state record (identified by SourceResourceLaborID) to the new State event (identified by DestinationResourceLaborID) by updating the ParentID field and making the following updates for each event: 
 
 
- StartTime must be equal to StartTime of the state event.  
- EndTime must be equal to the EndTime of the state event (if the status of the state is Closed) or to Null (if the status of the state is Open).  
- The status must be equal to Open (if the status of the state is Open) or to Closed (if the status of the State is Closed).

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| RESOURCE_LABOR | StartTime | StartTime of the state event. |
|  | EndTime | EndTime of the state event (if the status of the state is Closed), Null (if the status of the state is Open). |
|  | LaborType | The status is equal to Open (if the status of the state is Open), Closed (if the status of the state is Closed). |
|  | ParentID | DestinationResourceLaborID |
