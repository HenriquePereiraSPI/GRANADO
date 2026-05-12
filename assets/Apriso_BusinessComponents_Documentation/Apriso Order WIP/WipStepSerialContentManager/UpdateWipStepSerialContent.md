# UpdateWipStepSerialContent

**Category:** Apriso/Order/WIP
**Class:** `FlexNet.BusinessFacade.Manufacturing.WipStepSerialContentManager`
**Assembly:** `FlexNet.BusinessFacade.Manufacturing.dll`
**Status:** Active
**Keywords:** Wip Step Serial Content Update

## Description

Updates specified WIP Operation Step Content record to track quantity movement with a Serial Number at an Operation Step level.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | WipStepSerialContentID | Integer | Yes | ID of WIP Step Serial Content record. |
| Input | WipOrderNo | Char | No | WIP Order number. |
| Input | WipOrderType | Integer | No | WIP Order type. |
| Input | OprSequenceNo | Char | No | Operation sequence number. |
| Input | StepSequenceNo | Integer | No | Operation Step sequence number. |
| Input | WipSerialNoContentID | Integer | No | ID of WIP Serial No content. |
| Input | SerialNo | Char | No | The Serial number of WIP Order, Operation, or Step. |
| Input | ProductID | Integer | No | The reference to the Product. |
| Input | InputBucket | Boolean | No | The WIP Serial Number received but not yet allocated. |
| Input | OutputBucket | Boolean | No | The Serial Number that was processed and is to be pushed to another Operation. |
| Input | AllocatedBucket | Boolean | No | Flagged if the Serial Number is allocated to the WIP Order. |
| Input | CommittedBucket | Boolean | No | For future use. |
| Input | CompletedBucket | Boolean | No | For future use. |
| Input | ReasonCode | Char | No | Reason code. |
| Input | UnitID | Integer | No | Unique identifier of the Unit. |

## Validations

- System validates WipStepSerialContentID is valid. 
- System validates the following when provided: 
 
- WipOrderNo, WipOrderType, OprSequenceNo and StepSequenceNo are valid and active in the WIP_ORDER, WIP_OPERATION and WIP_OPERATION_STEP tables. 
- WipSerialNoContentID is valid. 
- Product for the serial exists. 
- Product is serial tracked. 
- ReasonCode is valid. 
- UnitID is valid.

## System Processing

- System updates a specified record in the WIP_STEP_SERIAL_CONTENT with inputted values.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| WIP_STEP_SERIAL_CONTENT | WipOrderNo | WIP Order Number. |
|  | OprSequenceNo | Operation sequence number. |
|  | StepSequenceNo | Operation Step sequence number. |
|  | WipContentDetailID | ID of associated WIP Content Detail. |
|  | SerialNo | The Serial Number consumed or reported, or the Serial Number to be processed. |
|  | ProductID | The reference to the Product. |
|  | InputBucket | The WIP Serial Number received but not yet allocated. |
|  | OutputBucket | The Serial Number that was processed and is to be pushed to another Operation. |
|  | AllocatedBucket | Flagged if the Serial Number is allocated to the WIP Order. |
|  | CommittedBucket | For future use. |
|  | CompletedBucket | For future use. |
|  | ReasonCode | Reason code. |
|  | UnitID | Unique identifier of the Unit. |
