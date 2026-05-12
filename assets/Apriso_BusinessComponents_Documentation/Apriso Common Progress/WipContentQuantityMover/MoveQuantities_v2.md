# MoveQuantities_v2

**Category:** Apriso/Common/Progress
**Class:** `FlexNet.BusinessFacade.Manufacturing.WipContentQuantityMover`
**Assembly:** `FlexNet.BusinessFacade.Manufacturing.dll`
**Status:** Active
**Keywords:** attachment, manage, create

## Description

The purpose of the component is to allow the user to force progress movement between buckets of a given Operation, between Operations of an Order and between Orders. 

 

 The component moves the progress from some buckets of WipContentDetail (input, output, allocated) and WipContent (input, output, allocated) to the input balance of the destination WipContent record and WipContentDetail. 
 

 The user has the ability to move a different allocated quantity (decrease WipContent.AllocatedQuantity by n and WipContentDetail.AllocatedQuantity by m) 
 

 This component is used, for example, to move progress when an Order is cancelled (move progress to a new Order) or when an Order is re-exploded with a new process or a new version of the process (the re-explosion with new process cancels the existing Operations and creates new ones, so it is required to manually re-allocate the existing progress to the new Operations). 
 

 This component is also used to move quantities in the cockpit

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | WipContentDetailID | Integer | Yes | Source Wip content detail ID to move the quantities from. |
| Input | QtyAvailable | Decimal | No | Available quantity to be moved from source to destination Wip content detail. Must not be negative or greater than Input Balance of the source Wip content detail. |
| Input | QtyAllocated | Decimal | No | Allocated quantity to be moved form source to destination Wip content. Must not be negative or greater than Quantity Allocated of the source Wip content. |
| Input | QtyAllocatedDetail | Decimal | No | Allocated quantity to be moved from source to destination Wip content detail. Must not be negative or greater than Quantity Allocated of the source Wip content detail. |
| Input | QtyCompleted | Decimal | No | Completed quantity to be moved from source to the destination Wip content detail. Must not be negative or greater than Output Balance of the source Wip content detail. |
| Input | DestWipOrderNo | Char | Yes | Wip Order number of the destination Wip content. |
| Input | DestWipOrderType | Integer | Yes | Wip Order type of the destination Wip Order. |
| Input | DestOprSequenceNo | Integer | Yes | Wip Operation sequence number of the destination Wip content. |
| Input | DestLotNo | Char | No | LotNo of the destination Wip content. |
| Input | UomCode | Char | No | UOM code of the quantities. |

## Validations

- System validates that WipContentDetailID is specified and Wip content detail exists.  
- System validates that DestWipOrderNo, DestWipOrderType and DestOprSequenceNo are specified and that Wip Operation exists. 
-  System validates that DestLotNo is specified and that LotNo exists.  
- If Wip_Content_Detail.UomCode is not null, system validates that UomCode is specified and it exists. 
- System validates that the quantities to be moved do not exceed the quantities in the particular buckets in source Wip content detail.

## System Processing

- System retrieves the WipContentDetail record passed as an Input, and its parent WipContent and then decreases the buckets by the quantities specified (QtyAllocatedDetail is used to decrement allocated bucked in Wip_Content_Detail and QtyAllocated in Wip_Content). 
 The quantities are converted from the Input UomCode to the source Wip_Content_Detail.UomCode if required. 
- System decreases retrieved Wip_Content.TotalReceived and Wip_Content_Detail.TotalRecieved by the sum of the provided quantities (after UOM conversion) 
- System retrieves the destination WipContent linked with the Input DestWipOrderNo, DestWipOrderType and DestOprSequenceNo, that have WipContentClass = 1 and no Reason code. If the destination Wip content does not exist, it is created. 
- System retrieves or creates (if the record does not exist) the WipContentDetail in the destination Operation (using ProductID, UomCode source WipContentDetail and DestLotNo if it is inputted; if not, then use LotNo from source WipContentDetail and the destination WipContentID retrieved/created just before). 
- System cumulates the quantities to be updated in both WipContent and WipContentDetail, and converts them from the Input UomCode to the destination Wip_Content_Detail.UomCode 
- System increases the destination Wip_Content.InputBalance, Wip_Content.TotalReceived, Wip_Content_Detail.InputBalance and Wip_Content.TotalReceived by the quantity calculated in the previous step. 
- If QtyAllocatedDetail is specified, system decreases the quantity allocated in Task_Material_Use (for source Wip content detail) by calling ModifyAllocatedQuantity Business Component. 
- Finally, system triggers Tasking so that the progress can be moved to the allocated bucket of Wip_Content and Wip_Content_Detail.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| WIP_CONTENT_DETAIL (source) | QtyAllocated | QtyAllocated = QtyAllocated - QtyAllocatedDetail |
|  | OutputBalance | OutputBalance = OutputBalance - QtyCompleted |
|  | InputBalance | InputBalance = InputBalance - QtyAvailable |
|  | TotalReceived | TotalReceived = TotalReceived - QtyAllocatedDetail - QtyCompleted - QtyAvailable |
| WIP_CONTENT_DETAIL (destination) | InputBalance | InputBalance = InputBalance +QtyAllocatedDetail + QtyAvailable + QtyCompleted |
|  | TotalReceived | TotalReceived = TotalReceived + QtyAllocatedDetail + QtyCompleted + QtyAvailable |
|  | LotNo | DestLotNo |
| WIP_CONTENT(source) | QuantityAllocated | QuantityAllocated = QuantityAllocated - QtyAllocated |
|  | InputBalance | InputBalance = InputBalance - QtyAvailable |
|  | OutputBalance | OutputBalance = OutputBalance - QtyCompleted. |
|  | TotalReceived | TotalReceived = TotalReceived - QtyAllocated - QtyCompleted - QtyAvailable |
| WIP_CONTENT(Destination) | InputBalance | InputBalance = InputBalance + QtyAvailable + QtyAllocated + QtyCompleted |
|  | TotalReceived | TotalReceived = TotalReceived + QtyAllocated + QtyCompleted + QtyAvailable |
