# UpdateWipLotNoStatus

**Category:** Apriso/Order/WIP
**Class:** `FlexNet.BusinessFacade.Manufacturing.WipLotStatusManager`
**Assembly:** `FlexNet.BusinessFacade.Manufacturing.dll`
**Status:** Active
**Keywords:** Wip, Lot, Status

## Description

Updates status of combination of WIP order, operation, step, and lot.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | WipLotNoStatusID | Integer | Yes | Progress status of combination of WIP order, operation, step, and lot. |
| Input | WipOrderNo | Char | No | Number of the WIP order. |
| Input | WipOrderType | Integer | No | Type of the WIP order. |
| Input | OprSequenceNo | Char | No | Operation sequence number. |
| Input | StepSequenceNo | Integer | No | Operation step sequence number. |
| Input | LotNo | Char | No | Lot number of WIP order, operation, step. |
| Input | ProductID | Integer | No | ID of the product. |
| Input | ProgressStatus | Integer | No | Progress status of combination of WIP order, operation, step, and lot. |

## Description Parameters

| Name | Type | Description |
|------|------|-------------|
| Facility | String | Facility to check if product is lot-tracked. |

## Validations

- WipLotNoStatus is valid. Validation fails if it is null. 
- WipOrderNo, WipOrderType are valid and active in the WIP_ORDER table when provided. 
- OprSequenceNo and StepSequenceNo are valid and active in the WIP_OPERATION and/or WIP_OPERATION_STEP tables when provided. 
- ProductID is valid and active in the PRODUCT table when provided. 
- LotNo is valid and active in the LOT_NO table when provided. 
- ProgressStatus is valid when provided. 
- Facility is valid when provided. Otherwise, the system uses the facility of the logged in employee. 
- To determine if the provided product is lot-tracked, the system performs the following: 
 
- Validates if a valid product was supplied. 
- If the facility was provided, this value is used. Otherwise, the system uses the facility of the logged in employee. 
- Using the facility and product from the previous step, the system retrieves the PRODUCT_FACILITY data. 
- If PRODUCT_FACILITY records exist, the system uses the LotTrackingCode from this table. Otherwise, it uses the LotTrackingCode from the PRODUCT table. 
- If the LotTrackingCode identifies the product as lot-tracked, then the LotNo input is checked. 
- If a value was supplied for LotNo, the system validates that the LotNo is valid. 
- Otherwise, the system returns an error.

## System Processing

- Performs validations as stated in the Validation section. 
- System updates the record in WIP_LOT_NO_STATUS with inputted values.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| WIP_LOT_NO_STATUS | WipOrderNo | Related WIP order number. |
|  | OprSequenceNo | Related operation sequence number. |
|  | StepSequenceNo | Related operation step sequence number. |
|  | LotNo | Related lot number. |
|  | ProductID | Product ID. |
|  | ProgressStatus | Progress status of the WIP order, operation, step, and lot number. |
