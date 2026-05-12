# ConsumeDetailAllocatedQuantity

**Category:** Apriso/Common/Progress
**Class:** `FlexNet.BusinessFacade.Manufacturing.WipContentDetailProcessor`
**Assembly:** `FlexNet.BusinessFacade.Manufacturing.dll`
**Status:** Active

## Description

This Business Component method is used to decrease the allocated quantity of a WipContentDetail record.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | WipContentDetailID | Integer | Yes | The ID of the WIP content detail. |
| Input | DeltaAllocatedQty | Decimal | Yes | The quantity used to subtract the quantity allocated. |
| Input | UomCode | Char | Yes | The unit of meaure of the quantity specified. |

## Validations

- The system validates that the WipContentDetail record exists.  
- The system validates DeltaAllocatedQty.

## Pre-Conditions

This Business Component is used to convert the DeltaAllocatedQty Input from the UomCode Input into the UOM of the WIP_CONTENT record selected as the Input.
 

This BC decreases (or increases if the Input is negative) the allocated quantity of the inputted WipContentDetail record by the converted DeltaAllocated quantity. The BC is useful for tracking the consumption of WIP in an Operation (not the consumption of components managed in inventory, as this is tracked via the Adjust BC in the WIP_ORDER_CONTENT table).
 

Using this BC, it is possible to keep an exact image of the component consumed at a given time, especially when the component is lot-tracked (as the WIP content will keep track only of the product).

## Published Events

The WipContentDetail was created using the ReportOrder BC.

## History Recording in Production

Yes

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| WIP_CONTENT_DETAIL | QuantityAllocated | QuantityAllocated is decreased by the converted DeltaAllocatedQty quantity. |
