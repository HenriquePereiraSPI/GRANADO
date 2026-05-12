# CreateWipStepContent

**Category:** Apriso/Order/WIP
**Class:** `FlexNet.BusinessFacade.Manufacturing.WipStepContentManager`
**Assembly:** `FlexNet.BusinessFacade.Manufacturing.dll`
**Status:** Active
**Keywords:** Wip, Step, Content

## Description

Creates a WIP operation step content record to track quantity movement with a lot number at an operation step level.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | WipOrderNo | Char | Yes | Number of the WIP Order. |
| Input | WipOrderType | Integer | Yes | Type of the WIP Order. |
| Input | OprSequenceNo | Char | Yes | Operation sequence number. |
| Input | StepSequenceNo | Integer | Yes | Operation Step sequence number. |
| Input | WipContentDetailID | Integer | Yes | ID of associated WIP content detail. |
| Input | LotNo | Char | No | Lot number of WIP Order/operation/step. |
| Input | ProductID | Integer | No | Product ID. |
| Input | QuantityAllocated | Decimal | No | Quantity allocated to the WIP operation step. |
| Input | QuantityCompleted | Decimal | No | Quantity completed by the WIP operation step. |
| Input | TotalProcessed | Decimal | No | Total processed quantity by the WIP operation step. |
| Input | ReasonCode | Char | No | Reason code. |
| Input | UnitID | Integer | No | Unit ID. |

## Validations

- WipOrderNo, WipOrderType, OprSequenceNo and StepSequenceNo are valid and active in the WIP_ORDER , WIP_OPERATION and WIP_OPERATION_STEP tables. Validation fails if they are null. 
- WipContentDetailID is valid. Validation fails if it is 0. 
- ProductID is valid and active in the PRODUCT table when provided. 
- LotNo is valid and active in the LOT_NO table when provided. 
- ReasonCode is valid when provided.

## System Processing

- Performs validations as stated above. 
- System creates record in WIP_STEP_CONTENT with inputted values.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| WIP_STEP_CONTENT | WipOrderNo | Related WIP Order Number. |
|  | OprSequenceNo | Related Operation Sequence Number. |
|  | StepSequenceNo | Related Operation Step Sequence Number. |
|  | WipContentDetailID | ID of associated Wip Content Detail. |
|  | LotNo | Related Lot number. |
|  | ProductID | Product ID. |
|  | TotalProcessed | Total processed quantity for the operation step. |
|  | QuantityAllocated | Quantity allocated to the operation step. |
|  | QuantityCompleted | Quantity completed in this operation step. |
|  | ReasonCode | Reason code. |
|  | UnitID | Unit ID. |
