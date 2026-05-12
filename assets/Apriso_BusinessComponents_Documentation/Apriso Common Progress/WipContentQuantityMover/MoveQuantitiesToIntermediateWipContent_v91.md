# MoveQuantitiesToIntermediateWipContent_v91

**Category:** Apriso/Common/Progress
**Class:** `FlexNet.BusinessFacade.Manufacturing.WipContentQuantityMover`
**Assembly:** `FlexNet.BusinessFacade.Manufacturing.dll`
**Status:** Active

## Description

This component is used to move the quantities of the various buckets of WipContent and WipContentDetail to the other bucket that is processed by the Pull navigation (inputbalance with WipClass = 0 and Reason Code = 0).
 

This component is required because it can be needed to move the progress to some operations, but also to use that move to pull the progress of other operations. (See example below).
 

 

 **Example
 **Operation 10 produces pen.
 Operation 20 produces cap.
 Operation 30 is assembly of pen & cap.
 Operation 10 pushes progress to Operation 30.
 Operation 20 pushes the progress to Operation 30 also, in min mode (minimum progress of Operations 10 and 20 is passed to Operation 30 as the quantity that can be assemble is the min of the available caps and pens).
 If Operation 10 has produced 100 and Operation 20 has produced 25, then 25 can be assembled.
 The progress pushed to Operation 30 is 25, with 75 waiting for pull from Operation 10 and 0 waiting for pull from Operation 20.
 If for any reason someone needs to move some progress from another Wiporder that was producing the same pens, he needs to be able to move caps or pens or both. 
 If we assume that only caps are moved, they must grow the 75 coming from Operation 10, and not the 0 coming from Operation 20.
 The user will then reference the Operation 10 as source so that system knows what bucket is to be increased.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | WipContentDetailID | Integer | No | Source wip content detail id to move the quantities from. |
| Input | QtyAvailable | Decimal | No | Available quantity to be moved from source to destination wip content detail. Must not be negative and not be greater than Input Balance of the source wip content detail. |
| Input | QtyAllocated | Decimal | No | Allocated quantity to be moved form source to destination wip content. Must not be negative and not be greater than Quantity Allocated of the source wip content. |
| Input | QtyAllocatedDetail | Decimal | No | Allocated quantity to be moved from source to destination wip content detail. Must not be negative and not be greater than Quantity Allocated of the source wip content detail. |
| Input | QtyCompleted | Decimal | No | Completed quantity to be moved from source to the destination wip content detail. Must not be negative and not be greter than Output Balance of the source wip content detail. |
| Input | DestWipOrderNo | Char | Yes | Wip order number of the destination wip content. |
| Input | DestWipOrderType | Integer | No | Wip order type of the destination wip order. |
| Input | DestOprSequenceNo | Char | Yes | Wip operation sequence number of the destination wip content (of class). |
| Input | UomCode | Char | No | Uom code of the quantities. |
| Input | PreviousOprSequenceNo | Char | No | Previous operation sequence number. Required when there are multiple previous operations for the specified destination wip opertion. |

## Validations

- System validates that WipContentDetailID is specified and wip content detail exists. 
- System validates that DestWipOrderNo, DestWipOrderType and DestOprSequenceNo are specified and that wip operation exists. 
- If Wip_Content_Detail.UomCode is not null, system validates that UomCode is specified and it exists. 
- If PreviousOperationSequenceNo is specified, system validates that it exists. 
- Else system validates that there is only one previous wip operation sequence for the DestWipOrderNo, DestWipOrderType and DestOprSequenceNo specified 
- System validates that the quantities to be moved don't exceed the quantities in the particular buckets in source wip content detail.

## System Processing

This component works exactly the same way as the MoveQuantity_v91 component except for the fact that the quantity moved out the buckets of the source Wip_Content (WC) and Source WipContentDetail (WCD) are not moved to the input balance bucket of WC or WCD with WipClass = 1 and Reason Code = Null, but in WC and WCD that have WipClass = 0 and Reason Code = null (if intermediate wip content is not found, it is created).
 

In order to populate properly the table and to give system the ability to navigate the quantities properly, the system requires the user to also enter the PreviousOprSequenceNo as an input so that system is able to retrieve the WC.SourceWipContentID looking for the WipContent records that match the input destination WipOrder, WipOrdertype, PreviousOpsSequenceNo, WipClass = 1 and ReasonCode = null.
 

When quantities are moved to the intermediate wip content, system notifies Work Flow sending navigation pull event.

## Pre-Conditions

See validations.

## Published Events

- Tasking system is notified to create appropriate tasks. 
- Work Flow receives navigation pull event.

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
| WipContent(destination) | InputBalance | InputBalance = InputBalance + QtyAvailable + QtyAllocated + QtyCompleted |
|  | TotalReceived | TotalReceived = TotalReceived + QtyAllocated + QtyCompleted + QtyAvailable |
|  | SourceWipContentID | ID of the Wipcontent that match destWiporder, destWipOrderType, PreviousOprSequenceNo as OperationSequenceNo, WipClass = 1 and Reason Code = 0 |
| The destination WipContent is retrieved using the DestWiporder, DestWipOrderType, DestOprSequenceNo , WipContentClass = 0 and ReasonCode = 0 and SourceWipContentID as defined in the above table. |  |  |
