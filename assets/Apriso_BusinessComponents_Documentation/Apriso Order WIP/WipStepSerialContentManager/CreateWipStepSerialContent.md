# CreateWipStepSerialContent

**Category:** Apriso/Order/WIP
**Class:** `FlexNet.BusinessFacade.Manufacturing.WipStepSerialContentManager`
**Assembly:** `FlexNet.BusinessFacade.Manufacturing.dll`
**Status:** Active
**Keywords:** Wip Step SerialNo Content

## Description

Creates a WIP Operation Step Serial Content record to track quantity movement with a Serial Number at an Operation Step level.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | WipOrderNo | Char | Yes | WIP Order number. |
| Input | WipOrderType | Integer | Yes | WIP Order type. |
| Input | OprSequenceNo | Char | Yes | Operation sequence number. |
| Input | StepSequenceNo | Integer | Yes | Operation Step sequence number. |
| Input | WipSerialNoContentID | Integer | Yes | ID of WIP Serial No content. |
| Input | SerialNo | Char | Yes | The Serial Number of WIP Order, Operation, or Step. |
| Input | ProductID | Integer | Yes | The reference to the Product. |
| Input | ReasonCode | Char | No | Reason code. |
| Input | UnitID | Integer | No | Unique identifier of the Unit. |

## Validations

System validates the following: 
 
- Provided WIP Step Serial Content does not already exist.  
- WipOrderNo, WipOrderType, OprSequenceNo and StepSequenceNo are valid and active in the WIP_ORDER, WIP_OPERATION and WIP_OPERATION_STEP tables. 
- WipSerialNoContentID is valid. 
- Product for the serial exists. 
- Product is serial tracked when provided. 
- ReasonCode is valid when provided. 
- UnitID is valid when provided.

## System Processing

- System sets AllocatedBucket to true. 
- System creates a new record in the WIP_STEP_SERIAL_CONTENT table with inputted values.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| WIP_STEP_SERIAL_CONTENT | WipOrderNo | WIP Order number. |
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
