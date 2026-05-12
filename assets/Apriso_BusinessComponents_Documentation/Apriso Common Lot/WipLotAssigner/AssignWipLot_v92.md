# AssignWipLot_v92

**Category:** Apriso/Common/Lot
**Class:** `FlexNet.BusinessFacade.Manufacturing.WipLotAssigner`
**Assembly:** `FlexNet.BusinessFacade.Manufacturing.dll`
**Status:** Deprecated

## Description

This Business Component method is used to assign the specified Lot Number to the specified WIP order number.
 

These features are supported:
 
 
- Placing a product on one or more hold Reason Codes 
- Product validation 
- Product revision independence (product placed on hold independent of product revision) 
- Hold Reason Code validation 
- Transaction history recorded

*Activity Diagram*

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | ProductID | Integer | No | The product ID of the lot being assinged. |
| Input | LotNo | Char | No | The Lot Number to be assigned to the WIP Order. If it does not exist, it will be created. |
| Input | WipOrderNo | Char | No | The WIP Order number to assign the Lot Number to. It must exist in the system. |
| Input | WipOrderType | Integer | No | The WIP Order type. |
| Input | PrimaryLotNo | Boolean | No | Indicates if the WIP Order lot is to be the primary lot (WIP_ORDER_LOT.PrimaryLotNo). |

## Validations

- The system validates that the Lot Number exists.  
- The system validates that the WIP Oder exists.

## System Processing

- If the lot did not exist, the system creates it in the LOT_NO table. 
- The system populates the WIP_ORDER_LOT, associating the Lot Number to the WIP Order.

## Pre-Conditions

The WIP Order must exist.

## History Recording in Production

FlexNet.BusinessFacade.Manufacturing.WipLotAssigner.AssignWipLot

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| WIP_ORDER_LOT | New Row | ProductID, LotNo, WipOrderNo, WipOrderType, PrimaryLotNo |
| LOT_NO | New Row | ProductID, LotNo |
