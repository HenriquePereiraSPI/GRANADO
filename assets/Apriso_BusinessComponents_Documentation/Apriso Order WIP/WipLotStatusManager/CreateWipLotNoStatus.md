# CreateWipLotNoStatus

**Category:** Apriso/Order/WIP
**Class:** `FlexNet.BusinessFacade.Manufacturing.WipLotStatusManager`
**Assembly:** `FlexNet.BusinessFacade.Manufacturing.dll`
**Status:** Active
**Keywords:** Wip, Lot, Status

## Description

Creates a status of combination of WIP Order/Operation/Step and Lot.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | WipOrderNo | Char | Yes | Number of the WIP Order. |
| Input | WipOrderType | Integer | Yes | Type of the WIP Order. |
| Input | OprSequenceNo | Char | No | Operation sequence number. |
| Input | StepSequenceNo | Integer | No | Operation Step sequence number. |
| Input | LotNo | Char | Yes | Lot number of WIP Order/operation/step. |
| Input | ProductID | Integer | Yes | ID of the product. |
| Input | ProgressStatus | Integer | Yes | Progress status of combination of WIP order/operation/step and lot. |

## Validations

- WipOrderNo, WipOrderType are valid and active in the WIP_ORDER table. Validation fails if they are null. 
- OprSequenceNo and StepSequenceNo are valid and active in the WIP_OPERATION and/or WIP_OPERATION_STEP tables when provided. 
- ProductID is valid and active in the PRODUCT table. Validation fails if it is 0. 
- LotNo is valid and active in the LOT_NO table. Validation fails if it is 0.

## System Processing

- Performs validations as stated above. 
- System creates a new record in WIP_LOT_NO_STATUS with inputted values.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| WIP_LOT_NO_STATUS | WipOrderNo | Related WIP Order Number. |
|  | OprSequenceNo | Related Operation Sequence Number. |
|  | StepSequenceNo | Related Operation Step Sequence Number. |
|  | LotNo | Related Lot number. |
|  | ProductID | Product ID. |
|  | ProgressStatus | Progress status of the WIP Order/operation/step and lot number. |
