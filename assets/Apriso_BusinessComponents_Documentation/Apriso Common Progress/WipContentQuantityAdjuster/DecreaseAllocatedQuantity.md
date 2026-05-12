# DecreaseAllocatedQuantity

**Category:** Apriso/Common/Progress
**Class:** `FlexNet.BusinessFacade.Manufacturing.WipContentQuantityAdjuster`
**Assembly:** `FlexNet.BusinessFacade.Manufacturing.dll`
**Status:** Active
**Keywords:** quantity, allocated, wip content

## Description

Allows the user to decrease allocated quantities in the WIP_CONTENT and WIP_CONTENT_DETAIL tables. 
 

 The user can decrease WIP_CONTENT.QuantityAllocated by n and WIP_CONTENT_DETAIL.QuantityAllocated by m.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | WipContentDetailID | List of Integer | Yes | List of wip content detail IDs to adjust the quantities. |
| Input | QtyAllocated | List of Decimal | Yes | List of values that are to decrease the allocated quantities in WIP_CONTENT. |
| Input | QtyAllocatedDetail | List of Decimal | Yes | List of values that are to decrease the allocated quantities in WIP_CONTENT_DETAIL. |

## Validations

-  Validation passes if all Input arrays have the same length.  
-  Validation passes if all WipContentDetailIDs are specified and wip content details exist.  
-  Validation passes if the QtyAllocated and QtyAllocatedDetail are not negative and do not exceed the quantities in WIP_CONTENT.QuantityAllocated and WIP_CONTENT_DETAIL.QuantityAllocated respectively.

## System Processing

-  System retrieves all WipContentDetailIDs passed as an Input and their parents WipContentIDs, and then decreases allocated quantities. WIP_CONTENT_DETAIL.QuantityAllocated is decreased by QtyAllocatedDetail and WIP_CONTENT.QuantityAllocated is decreased by QtyAllocated.  
-  System decreases WIP_CONTENT.TotalReceived and WIP_CONTENT_DETAIL.TotalReceived by QtyAllocated and QtyAllocatedDetail respectively.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| WIP_CONTENT_DETAIL | QuantityAllocated | QuantityAllocated = QuantityAllocated - Input.QtyAllocatedDetail |
|  | TotalReceived | TotalReceived = TotalReceived - Input.QtyAllocatedDetail |
| WIP_CONTENT | QuantityAllocated | QuantityAllocated = QuantityAllocated - Input.QtyAllocated |
|  | TotalReceived | TotalReceived = TotalReceived - Input.QtyAllocated |
