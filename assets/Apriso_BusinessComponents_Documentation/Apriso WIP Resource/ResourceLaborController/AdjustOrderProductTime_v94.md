# AdjustOrderProductTime_v94

**Category:** Apriso/WIP/Resource
**Class:** `FlexNet.BusinessFacade.MachineTime.ResourceLaborController`
**Assembly:** `FlexNet.BusinessFacade.MachineTime.dll`
**Status:** Active

## Description

This Business Component method is used to adjust the start time and/or end time of the machine event of the order/product type. The BC can be used to update the Reason Code and/or the Occupation Code.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | ResourceLaborID | Integer | Yes | The resource labor ID for the product or order that is being adjusted. |
| Input | ChangeStartTimeFlag | Boolean | Yes | Indicates if the start time is to be changed. If set to true, the adjustment will update the start time for the order or product with the value passed in NewStartTime. |
| Input | NewStartTime | DateTime | Conditional | The new start time. The value should be specified as local (it will be automatically converted and stored as UTC). The records are saved with milliseconds accuracy. |
| Input | ChangeEndTimeFlag | Boolean | Yes | Indicates if the end time is to be changed. If set to true, the adjustment will update the end time for the order or product with the value passed in NewEndTime. |
| Input | NewEndTime | DateTime | Conditional | The new end time. The value should be specified as local (it will be automatically converted and stored as UTC). The records are saved with milliseconds accuracy. |
| Input | OccupationCode | Char | No | The Occupation Code to be used for the resource labor. |
| Input | ReasonCode | Char | No | The Reason Code to be used for the resource labor. |

## Validations

- The system checks if both the start and end time are passed and then if the start time is less than the end time. If it is not, an error message is displayed stating that the start time greater than the end time. 
- The system checks if the end time is less than the end time of the span. If it is not, an error message is displayed stating that the end time is greater than the end time of the span. 
- The system checks if the ResourceLaborID identifier refers to the existing machine event record of the order or product type. If it is not, an error message is displayed stating that the resource labor type has to be product or order 
- The system validates that the order/product with the new start or end time will not overlap with another order/product.

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
|  | ReasonCode | Inputted ReasonCode |
|  | OccupationCode | Inputted OccupationCode |
