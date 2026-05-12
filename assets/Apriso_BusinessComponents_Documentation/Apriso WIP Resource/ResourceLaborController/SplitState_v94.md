# SplitState_v94

**Category:** Apriso/WIP/Resource
**Class:** `FlexNet.BusinessFacade.MachineTime.ResourceLaborController`
**Assembly:** `FlexNet.BusinessFacade.MachineTime.dll`
**Status:** Active
**Keywords:** splitstate

## Description

The purpose of this Business Component method is to split an event of State type into two separate events that may have different Reason Codes, occupations and comments.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | ResourceLaborID | Integer | Yes | The resource labor ID for the event to be split. |
| Input | EmployeeID | Integer | No | Employee ID. |
| Input | Speed | Decimal | No | The new speed for the event. |
| Input | SpeedPercentage | Decimal | No | The new speed percentage for the event. |
| Input | SpeedUom | Char | Conditional | The new UOM for the speed. If the UOM exists in the database and passes the validation, the UOM is set for the new State with the given SpeedUom value. If not, the previous UOM is used from the original State. |
| Input | ReasonCode | Char | No | The reason why the event is being split. |
| Input | Comment | Char | No | Comment about the split. |
| Input | Occupation | Char | No | The new occupation code for the event. |
| Input | SplittingTime | DateTime | Yes | The time the split occurred. The value should be specified as local (it will be automatically converted and stored as UTC). The records are saved with milliseconds accuracy. |
| Input | SplitBefore | Boolean | Yes | Indicates if the new values are before or after splitting time. |
| Output | CreatedResourceLaborID | Integer | No | Returns ID of created record |

## Validations

- System checks if the appropriate event identified by the ResourceLaborID parameter exists and its type is State. 
- System checks if the splitting time is greater than the Start Time of the State event and that it is less than the End Time of the State. If not, an error message is displayed: Splitting Time out of range. 
- System checks if Reason Code, Employee ID, Occupation, UOM Code are specified and, if they are, appropriate master records exist in DELMIA Apriso. 
- System checks if Speed UOM is provided if Speed is provided.

## System Processing

- System updates the State record being split with the new End Time equal to the splitting time. 
- System creates a new State record with a Start Time equal to SplittingTime and an End Time equal to the original End Time of the State being split. 
- System copies WipOrderNo, WipOrderType, OprSequenceNo, ProductionLine, LotNo, ProductID values if they are defined. 
- If the SplitBefore parameter is set to True, then all attributes of the State that are passed as parameters of the BC method are updated for the original State record (which End Time is equal to SplittingTime). Otherwise all those attributes are updated for the new State record (the Start Time of which is equal to SplittingTime). 
- If there are some closed child Order/Product records existing for the State being split then all of them are split as well.

## History Recording in Production

- TRANSACTION_HISTORY - Transaction Name: FlexNet.BusinessFacade.MachineTimenufacturing.ResourceLaborController 
- TRANSACTION_HISTORY_WIP 
- TRANSACTION_HISTORY_RESOURCE

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| RESOURCE_LABOR | StartTime | SplittingTime |
|  | StartedEmployeeID | EmployeeID |
|  | EndEmployeeID | EmployeeID |
|  | Speed | Speed |
|  | SpeedPercentage | SpeedPercentage |
|  | UomCode | SpeedUom |
|  | ReasonCode | ReasonCode |
|  | Occupation | Occupation |
|  | Facility | Facility from Occupation |
|  | NoteID | Id of created Note |
|  | WipOrderNo | copied if defined for original record |
|  | WipOrderType | copied if defined for original record |
|  | OprSequenceNo | copied if defined for original record |
|  | ProductID | copied if defined for original record |
|  | LotNo | copied if defined for original record |
|  | ProductionLine | copied if defined for original record |
| NOTE | ID |  |
|  | Description | Comment |
