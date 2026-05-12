# UpdateWipSerialNoStatus

**Category:** Apriso/Order/WIP
**Class:** `FlexNet.BusinessFacade.Manufacturing.WipSerialStatusManager`
**Assembly:** `FlexNet.BusinessFacade.Manufacturing.dll`
**Status:** Active
**Keywords:** Wip, Serial, Status

## Description

Updates the status of a combination of WIP Order, Operation, or Step and Serial.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | WipSerialNoStatusID | Integer | Yes | The progress status of a combination of WIP order, Operation, or Step and Serial. |
| Input | WipOrderNo | Char | No | Number of the WIP Order. |
| Input | WipOrderType | Integer | No | Type of the WIP Order. |
| Input | OprSequenceNo | Char | No | The operation sequence number. |
| Input | StepSequenceNo | Integer | No | The operation Step sequence number. |
| Input | SerialNo | Char | No | The serial number of WIP Order, Operation or Step. |
| Input | ProductID | Integer | No | The ID of the Product. |
| Input | ProgressStatus | Integer | No | The progress status of a combination of WIP Order, Operation, or Step and Lot. |

## Validations

- System validates WipSerialNoStatusID is valid. 
- System validates the following when provided: 
 
- System validates WipOrderNo, WipOrderType, OprSequenceNo and StepSequenceNo are valid and active in the WIP_ORDER, WIP_OPERATION and WIP_OPERATION_STEP tables. 
- System validates that the product for the serial exists. 
- System validates that the product is serial tracked. 
- System validates that the ProgressStatus is valid.

## System Processing

- System updates record in WIP_SERIAL_NO_STATUS with inputted values.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| WIP_SERIAL_NO_STATUS | WipOrderNo | The related WIP Order Number. |
|  | OprSequenceNo | The related Operation Sequence Number. |
|  | StepSequenceNo | The related Operation Step Sequence Number. |
|  | Serial No | The related Serial Number. |
|  | ProductID | ID of the Product. |
|  | ProgressStatus | Progress status of the WIP Order, Oeration, or Step and Serial Number. |
