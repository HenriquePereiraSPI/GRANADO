# MaintainEvent

**Category:** Apriso/WIP/Resource
**Class:** `FlexNet.BusinessFacade.MachineTime.ResourceLaborController`
**Assembly:** `FlexNet.BusinessFacade.MachineTime.dll`
**Status:** Active

## Description

The purpose of this Business Component is to update the following attributes of a State type event:
 
 
-  

Speed
  
-  

Speed UOM
  
-  

Speed Percentage
  
-  

Reason Code
  
-  

Comment
  
-  

Occupation

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | ResourceLaborID | Integer | Yes | The resource labor ID for the event to be maintained. |
| Input | Speed | Decimal | Yes | Tthe new speed for the event. |
| Input | SpeedPercentage | Decimal | Yes | The new speed percentage for the event. |
| Input | SpeedUom | Char | No | The new UOM for the speed. |
| Input | ReasonCode | Char | No | The reason why the event is being changed. |
| Input | Comment | Char | No | Comment about the change. |
| Input | Occupation | Char | No | The new occupation code for the event. |

## Validations

System checks if the appropriate master records exist in DELMIA Apriso when the Reason Code, SpeedUOM and Occupation are specified.

## System Processing

System retrieves the Facility based on the Resource for which the event exists and updates all passed attributes.

## History Recording in Production

- TRANSACTION_HISTORY - Transaction Name: FlexNet.BusinessFacade.MachineTimenufacturing.ResourceLaborController 
- TRANSACTION_HISTORY_WIP 
- TRANSACTION_HISTORY_RESOURCE

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| RESOURCE_LABOR | Speed | Speed |
|  | UomCode | SpeedUOM |
|  | SpeedPercentage | SpeedPercentage |
|  | ReasonCode | ReasonCode |
|  | NoteID | Comment |
|  | Occupation | Occupation |
|  | Facility | RESOURCE_.Facility |
