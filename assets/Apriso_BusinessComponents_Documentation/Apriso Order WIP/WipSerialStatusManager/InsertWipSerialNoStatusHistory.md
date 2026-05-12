# InsertWipSerialNoStatusHistory

**Category:** Apriso/Order/WIP
**Class:** `FlexNet.BusinessFacade.Manufacturing.WipSerialStatusManager`
**Assembly:** `FlexNet.BusinessFacade.Manufacturing.dll`
**Status:** Active
**Keywords:** Wip Serial Status

## Description

Stores history of Progress Status changes for Serial No associated with the following entities:
 
 
- WIP Orders 
- WIP Operations 
- WIP Operation Steps 
 

The BC creates records in the WIP_SERIAL_NO_STATUS_HISTORY table which describes the changes of progress status for a Serial No for entity.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | WipOrderNo | Char | Yes | WIP Order number. |
| Input | WipOrderType | Integer | Yes | WIP Order type. |
| Input | OprSequenceNo | Char | No | Operation sequence number. |
| Input | StepSequenceNo | Integer | No | Operation step sequence number. |
| Input | SerialNo | Char | Yes | The serial number of WIP order/operation/step |
| Input | ProductNo | Char | Yes | The product number |
| Input | FromProgressStatusName | Char | Yes | Name of the previous progress status. |
| Input | FromProgressStatusClassName | Char | Yes | Class name of the previous progress status. |
| Input | ToProgressStatusName | Char | Yes | Name of current progress status |
| Input | ToProgressStatusClassName | Char | Yes | Class name of current progress status |
| Input | DurationInSeconds | Integer | Yes | Duration between progress status change in seconds. |
| Input | ReasonCode | Char | No | Reason code for change of progress status |
| Input | Comment | Char | No | comment |
| Input | EmployeeNo | Char | Yes | Employee who perform the progress status change. |
| Input | ResourceName | Char | No | Resource perform the progress status change. |
| Input | UnitID | Integer | No | Unit ID |

## Validations

- System validates the following when provided: 
 
- System validates WipOrderNo, WipOrderType, OprSequenceNo(if provided) and StepSequenceNo(if provided) are valid and active in the WIP_ORDER, WIP_OPERATION or WIP_OPERATION_STEP tables. 
- System validates that the product for the serial exists. 
- System validates that the product is serial tracked. 
- System validates that the ReasonCode is valid if provided. 
- System validates that the EmployeeNo is valid. 
- System validates that the From/To ProgressStatusName and ProgressStatusClassName are valid. 
- System validates that the DurationInSeconds is larger than 0. 
- System validates that the Resource Name is valid if provided. 
- System validates that the UnitID is valid

## System Processing

- System creates a new record in WIP_SERIAL_NO_STATUS_HISTORY with inputted values.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| WIP_SERIAL_NO_STATUS_HISTORY | WipOrderNo | The related WIP Order Number. |
|  | OprSequenceNo | The related Operation Sequence Number. |
|  | StepSequenceNo | The related Operation Step Sequence Number. |
|  | SerialNo | The related Lot number/ |
|  | ProductNo | Product ID |
|  | FromProgressStatusName | Name of previous Progress status of the WIP order/operation/step and lot number |
|  | FromProgressStatusClassName | Class name of previous Progress status of the WIP order/operation/step and lot number |
|  | ToProgressStatusName | Name of current progress status |
|  | ToProgressStatusClassName | Class name of current progress status |
|  | DurationInSeconds | Duration between progress status change in seconds. |
|  | ReasonCode | Reason code for change of progress status |
|  | Comment_ | Comment |
|  | EmployeeNo | Employee who perform the progress status change. |
|  | ResourceName | Resource perform the progress status change. |
|  | UnitID | Unit ID |
