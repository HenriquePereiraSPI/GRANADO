# UpdateWipStepContent

**Category:** Apriso/Order/WIP
**Class:** `FlexNet.BusinessFacade.Manufacturing.WipStepContentManager`
**Assembly:** `FlexNet.BusinessFacade.Manufacturing.dll`
**Status:** Active
**Keywords:** Wip, Step, Content, Update

## Description

Updates specified WIP operation step content record to track quantity movement with a lot number at an operation step level.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | WipStepContentID | Integer | Yes | ID of WIP step content record. |
| Input | WipOrderNo | Char | No | Number of the WIP order. |
| Input | WipOrderType | Integer | No | Type of the WIP order. |
| Input | OprSequenceNo | Char | No | Operation sequence number. |
| Input | StepSequenceNo | Integer | No | Operation step sequence number. |
| Input | WipContentDetailID | Integer | No | ID of associated WIP content detail. |
| Input | LotNo | Char | No | Lot number of WIP order, operation, step. |
| Input | ProductID | Integer | No | Product ID. |
| Input | QuantityAllocated | Decimal | No | Quantity allocated to the WIP operation step. |
| Input | QuantityCompleted | Decimal | No | Quantity completed by the WIP operation step. |
| Input | TotalProcessed | Decimal | No | Total processed quantity by the WIP operation step. |
| Input | ReasonCode | Char | No | Reason code. |
| Input | UnitID | Integer | No | Unit ID. |

## Description Parameters

| Name | Type | Description |
|------|------|-------------|
| Facility | String | Facility to check if product is lot-tracked. |

## Validations

- WipStepContentID is valid. Validation fails if it is 0. 
- WipOrderNo, WipOrderType, OprSequenceNo and StepSequenceNo are valid and active in the WIP_ORDER, WIP_OPERATION, and WIP_OPERATION_STEP tables when provided. 
- WipContentDetailID is valid when provided. 
- ProductID is valid and active in the PRODUCT table when provided. 
- LotNo is valid and active in the LOT_NO table when provided. 
- ReasonCode is valid when provided. 
- Facility is valid when provided. Otherwise, the system uses the facility of a logged in employee. 
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
- System updates the specified record in WIP_STEP_CONTENT with inputted values.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| WIP_STEP_CONTENT | WipOrderNo | Related WIP order number. |
|  | OprSequenceNo | Related operation sequence number. |
|  | StepSequenceNo | Related operation step sequence number. |
|  | WipContentDetailID | ID of associated WIP content detail. |
|  | LotNo | Related lot number. |
|  | ProductID | Product ID. |
|  | TotalProcessed | Total processed quantity for the operation step. |
|  | QuantityAllocated | Quantity allocated to the operation step. |
|  | QuantityCompleted | Quantity completed in this operation step. |
|  | ReasonCode | Reason code. |
|  | UnitID | Unit ID. |
