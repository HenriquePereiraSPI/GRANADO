# AdjustOrderProductTime

**Category:** Apriso/WIP/Resource
**Class:** `FlexNet.BusinessFacade.MachineTime.ResourceLaborController`
**Assembly:** `FlexNet.BusinessFacade.MachineTime.dll`
**Status:** Deprecated

## Description

This Business Component method is used to adjust the start time and/or end time of a machine event of the order/product type.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | ResourceLaborID | Integer | Yes | The resource labor ID for the product or order that is being adjusted. |
| Input | ChangeStartTimeFlag | Boolean | Yes | Indicates if the start time is to be changed. |
| Input | NewStartTime | DateTime | No | The new end time. |
| Input | ChangeEndTimeFlag | Boolean | Yes | Indicates if the end time is to be changed. |
| Input | NewEndTime | DateTime | No | The new end time. |

## Validations

- The system checks if both start and end time are passed and then if the start time is less than the end time. If it is not, an error message is displayed stating that the start time is greater than the end time. 
- The system checks if the ResourceLaborID identifier refers to the existing machine event record of the order or product type. If it is not, an error message is displayed stating that the resource labor type has to be product or order.

## System Processing

- If the StartTime parameter is passed and ChangeStartTimeFlag is set, then the system updates the StartTime of the machine event identified by the ResourceLaborID parameter. 
- If the EndTime parameter is passed and ChangeEndTimeFlag is set, then the system updates the EndTime parameter of the machine event identified by the ResourceLaborID parameter and sets its status to Closed.

## History Recording in Production

- TRANSACTION_HISTORY – transaction name: FlexNet.BusinessFacade.MachineTimenufacturing.ResourceLaborController 
- TRANSACTION_HISTORY_WIP 
- TRANSACTION_HISTORY_RESOURCE

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| RESOURCE_LABOR | StartTime | StartTime |
|  | EndTime | EndTime |
|  | LaborType | Order (9) or Product (10) |
