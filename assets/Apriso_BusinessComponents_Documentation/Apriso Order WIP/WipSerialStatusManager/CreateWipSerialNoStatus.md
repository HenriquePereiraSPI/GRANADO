# CreateWipSerialNoStatus

**Category:** Apriso/Order/WIP
**Class:** `FlexNet.BusinessFacade.Manufacturing.WipSerialStatusManager`
**Assembly:** `FlexNet.BusinessFacade.Manufacturing.dll`
**Status:** Active
**Keywords:** Wip Step Serial Status

## Description

Creates a status of combination of WIP Order, Operation or Step and Serial.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | WipOrderNo | Char | Yes | Number of the WIP Order. |
| Input | WipOrderType | Integer | Yes | Type of the WIP Order. |
| Input | OprSequenceNo | Char | No | The Operation sequence number. |
| Input | StepSequenceNo | Integer | No | The Operation Step sequence number. |
| Input | SerialNo | Char | Yes | The Serial Number of WIP Order, Operation, or Step. |
| Input | ProductID | Integer | Yes | The ID of the Product. |
| Input | ProgressStatus | Integer | Yes | The progress status of combination of WIP Order, Operation, or Step and Serial. |

## Validations

- System validates if the provided WIP Serial No Status does not already exist. 
- System validates if the inputted WIP Order exists. 
- System validates if the inputted Operation exists. 
- System validates that the Product for the Serial exists. 
- System validates that the Product is Serial tracked.

## System Processing

- System creates a new record in WIP_SERIAL_NO_STATUS with inputted values.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| WIP_SERIAL_NO_STATUS | WipOrderNo | The related WIP Order Number. |
|  | OprSequenceNo | The related Operation Sequence Number. |
|  | StepSequenceNo | The related Operation Step Sequence Number. |
|  | SerialNo | The related Serial Number. |
|  | ProductID | The ID of the Product. |
|  | ProgressStatus | Progress status of the WIP Order, Operation or Step and Serial Number. |
