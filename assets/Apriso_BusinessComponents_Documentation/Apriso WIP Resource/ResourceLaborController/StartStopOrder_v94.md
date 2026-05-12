# StartStopOrder_v94

**Category:** Apriso/WIP/Resource
**Class:** `FlexNet.BusinessFacade.MachineTime.ResourceLaborController`
**Assembly:** `FlexNet.BusinessFacade.MachineTime.dll`
**Status:** Active

## Description

The purpose of this business component is to create a closed event of Order type. It utilizes the following BC methods invoked in one call:
 
-  

StartOrder_v2
  
-  

StopOrder_v2

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | WipOrderNo | Char | Yes | WIP order number. |
| Input | WipOrderType | Integer | Yes | WIP order type. |
| Input | OprSequenceNo | Char | Yes | Operation sequence number. |
| Input | ResourceName | Char | No | Resource name. |
| Input | ResourceType | Integer | No | Resource type. |
| Input | ProductionLine | Char | No | Production line number. |
| Input | WorkCenter | Char | No | Work center. |
| Input | EmployeeID | Integer | No | Employee id. |
| Input | ProductID | Integer | No | Product ID. |
| Input | LotNo | Char | No | Lot number. |
| Input | StartTime | DateTime | Yes | Order start time. The value should be specified as local (it will be automatically converted and stored as UTC). The records are saved with milliseconds accuracy. |
| Input | StopTime | DateTime | Yes | Order stop time. The value should be specified as local (it will be automatically converted and stored as UTC). The records are saved with milliseconds accuracy. |
| Input | OccupationCode | Char | No | Occupation code. |
| Input | ReasonCode | Char | No | Reason code. |

## Validations

- The system validates that the attendance, break, or labor entities created or modified would not violate the Pay Rule Max Attendance Per Payday setting.
