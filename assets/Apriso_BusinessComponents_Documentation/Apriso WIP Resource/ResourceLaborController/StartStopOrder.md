# StartStopOrder

**Category:** Apriso/WIP/Resource
**Class:** `FlexNet.BusinessFacade.MachineTime.ResourceLaborController`
**Assembly:** `FlexNet.BusinessFacade.MachineTime.dll`
**Status:** Retired

## Description

The purpose of this business component is to create a closed event of Order type. It utilizes the following BC methods invoked in one call:
 
 
-  

StartOrder_v91
  
-  

StopOrder

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | WipOrderNo | Char | Yes | WIP Order number. |
| Input | WipOrderType | Integer | Yes | WIP Order type. |
| Input | OprSequenceNo | Char | Yes | Operation sequence number. |
| Input | ResourceName | Char | No | Resource name. |
| Input | ResourceType | Integer | No | Resource type. |
| Input | ProductionLine | Char | No | Production line number. |
| Input | WorkCenter | Char | No | Work center. |
| Input | EmployeeID | Integer | No | Employee id. |
| Input | ProductID | Integer | No | Product ID. |
| Input | LotNo | Char | No | Lot number. |
| Input | StartTime | DateTime | Yes | Local start time. The value should be specified as local (it will be automatically converted and stored as UTC). |
| Input | StopTime | DateTime | Yes | Local stop time. The value should be specified as local (it will be automatically converted and stored as UTC). |
| Input | OccupationCode | Char | No | Occupation code. |

## Validations

- The system validates that the attendance, break, or labor entities created or modified would not violate the Pay Rule Max Attendance Per Payday setting.
