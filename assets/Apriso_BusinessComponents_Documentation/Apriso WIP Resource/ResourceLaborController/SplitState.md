# SplitState

**Category:** Apriso/WIP/Resource
**Class:** `FlexNet.BusinessFacade.MachineTime.ResourceLaborController`
**Assembly:** `FlexNet.BusinessFacade.MachineTime.dll`
**Status:** Deprecated

## Description

The purpose of this business component is to split an event of State type into two separate events that may have different reason codes, occupations and comments.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | ResourceLaborID | Integer | Yes | The resource labor ID for the event to be split. |
| Input | EmployeeID | Integer | No | Employee ID. |
| Input | Speed | Decimal | Yes | The new speed for the event. |
| Input | SpeedPercentage | Decimal | Yes | The new speed percentage for the event. |
| Input | SpeedUom | Char | Yes | The new UOM for the speed. |
| Input | ReasonCode | Char | No | The reason why the event is being split. |
| Input | Comment | Char | No | Comment about the split. |
| Input | Occupation | Char | No | The new occupation code for the event. |
| Input | SplittingTime | DateTime | Yes | The time the split occurred. The records are saved with milliseconds accuracy. |
| Input | SplitBefore | Boolean | Yes | Indicates if the new values are before or after splitting time. |

## Validations

- System checks if the appropriate event identified by the ResourceLaborID parameter exists and its type is State. 
- System checks if the splitting time is greater or equal to the Start Time of the State event and that it is less or equal to the End Time of the State. If not, an error message is displayed: Splitting Time out of range 
- System checks if Reason Code, Employee ID, Occupation, UOM Code are specified and, if they are, appropriate master records exist in DELMIA Apriso.

## System Processing

- System updates the State record being split with the new End Time equal to the splitting time, 
- System creates a new State record with a Start Time equal to SplittingTime and an End Time equal to the original End Time of the State being split. 
- If the SplitBefore parameter is set to True, then all attributes of the State that are passed as parameters of the BC method are updated for the original State record (which End Time is equal to SplittingTime). Otherwise all those attributes are updated for the new State record (which Start Time is equal to SplittingTime), 
- If there are some closed child Order/Product records existing for the State being split then all of them are split as well.

## History Recording in Production

- TRANSACTION_HISTORY - Transaction Name: FlexNet.BusinessFacade.MachineTimenufacturing.ResourceLaborController 
- TRANSACTION_HISTORY_WIP 
- TRANSACTION_HISTORY_RESOURCE
