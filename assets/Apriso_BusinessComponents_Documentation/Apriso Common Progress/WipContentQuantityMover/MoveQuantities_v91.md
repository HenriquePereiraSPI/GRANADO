# MoveQuantities_v91

**Category:** Apriso/Common/Progress
**Class:** `FlexNet.BusinessFacade.Manufacturing.WipContentQuantityMover`
**Assembly:** `FlexNet.BusinessFacade.Manufacturing.dll`
**Status:** Active

## Description

The purpose of the component is to allow the user to force progress movement between buckets of a given operation, between operations of an order and between orders.
 

The component moves the progress from some buckets of WipContentDetail (input, output, allocated) and WipContent (input, output, allocated) to the input balance of the destination WipContent record and WipContentDetail.
 

The user has the ability to move a different allocated quantity (decrease WipContent.AllocatedQuantity by n and WipContentDetail.AllocatedQuantity by m)
 

This component is used for example to move progress when an order is cancelled (move progress to a new order) or when an order is re-exploded with a new process or a new version of the process (the re-explosion with new process cancels the existing operations and creates new ones, so it is required to manually re-allocate the existing progress to the new operations).
 

This component is also used to move quantities in the cockpit.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | WipContentDetailID | Integer | Yes | Source wip content detail id to move the quantities from. |
| Input | QtyAvailable | Decimal | No | Available quantity to be moved from source to destination wip content detail. Must not be negative and not be greater than Input Balance of the source wip content detail. |
| Input | QtyAllocated | Decimal | No | Allocated quantity to be moved form source to destination wip content. Must not be negative and not be greater than Quantity Allocated of the source wip content. |
| Input | QtyAllocatedDetail | Decimal | No | Allocated quantity to be moved from source to destination wip content detail. Must not be negative and not be greater than Quantity Allocated of the source wip content detail. |
| Input | QtyCompleted | Decimal | No | Completed quantity to be moved from source to the destination wip content detail. Must not be negative and not be greter than Output Balance of the source wip content detail. |
| Input | DestWipOrderNo | Char | Yes | Wip order number of the destination wip content. |
| Input | DestWipOrderType | Integer | Yes | Wip order type of the destination wip order. |
| Input | DestOprSequenceNo | Char | Yes | Wip operation sequence number of the destination wip content. |
| Input | UomCode | Char | No | Uom code of the quantities. |

## Validations

- System validates that WipContentDetailID is specified and wip content detail exists. 
- System validates that DestWipOrderNo, DestWipOrderType and DestOprSequenceNo are specified and that wip operation exists. 
- If Wip_Content_Detail.UomCode is not null, system validates that UomCode is specified and it exists. 
- System validates that the quantities to be moved don't exceed the quantities in the particular buckets in source wip content detail.

## System Processing

- System retrieves the WipContentDetail record passed as an input, and its parent WipContent and then decreases the buckets by the quantities specified (QtyAllocatedDetail is used to decrement allocated bucked in Wip_Content_Detail and QtyAllocated in Wip_Content). 
 The quantities are converted from the input UomCode to the source Wip_Content_Detail.UomCode if required. 
- System decreases retrieved Wip_Content.TotalReceived and Wip_Content_Detail.TotalRecieved by the sum of the provided quantities (after uom conversion) 
- System retrieves the destination WipContent linked with the input DestWipOrderNo, DestWipOrderType and DestOprSequenceNo, that have WipContentClass = 1 and no Reason code. If the destination wip content doesn't exist, it is created. 
- System retrieves or creates (if the record doesn't exist) the WipContentDetail in the destination operation (using the LotNo, ProductID and UomCode of source WipContentDetail and the destination WipContentID retrieved/created just before). 
- System cumulates the quantities to be updated in both WipContent and WipContentDetail, and converts them from the input UomCode to the destination Wip_Content_Detail.UomCode 
- System increases the destination Wip_Content.InputBalance, Wip_Content.TotalReceived, Wip_Content_Detail.InputBalance and Wip_Content.TotalReceived by the quantity calculated in the previous step. 
- If QtyAllocatedDetail is specified, system decreases the quantity allocated in Task_Material_Use (for source wip content detail) by calling ModifyAllocatedQuantity business component. 
- Finally system triggers Tasking so that the progress can be moved to the allocated bucket of Wip_Content and Wip_Content_Detail.

## Pre-Conditions

See validations.

## Published Events

To Tasking for the tasks to be created.

## History Recording in Production

Yes

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| WipContentDetail (source) | QtyAllocated | QtyAllocated = QtyAllocated - QtyAllocatedDetail |
|  | OutputBalance | OutputBalance = OutputBalance - QtyCompleted |
|  | InputBalance | InputBalance = InputBalance - QtyAvailable |
|  | TotalReceived | TotalReceived = TotalReceived - QtyAllocatedDetail - QtyCompleted - QtyAvailable |
| WipContentDetail (destination) | InputBalance | InputBalance = InputBalance +QtyAllocatedDetail + QtyAvailable + QtyCompleted |
|  | TotalReceived | TotalReceived = TotalReceived + QtyAllocatedDetail + QtyCompleted + QtyAvailable |
| WipContent(source) | QuantityAllocated | QuantityAllocated = QuantityAllocated - QtyAllocated |
|  | InputBalance | InputBalance = InputBalance - QtyAvailable |
|  | OutputBalance | OutputBalance = OutputBalance - QtyCompleted |
|  | TotalReceived | TotalReceived = TotalReceived - QtyAllocated - QtyCompleted - QtyAvailable |
| WipContent(Destination) | InputBalance | InputBalance = InputBalance + QtyAvailable + QtyAllocated + QtyCompleted |
|  | TotalReceived | TotalReceived = TotalReceived + QtyAllocated + QtyCompleted + QtyAvailable |
