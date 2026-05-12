# AssignWipLot_v2

**Category:** Apriso/Common/Lot
**Class:** `FlexNet.BusinessFacade.Manufacturing.WipLotAssigner`
**Assembly:** `FlexNet.BusinessFacade.Manufacturing.dll`
**Status:** Active

## Description

This Business Component method is used to assign the specified Lot Number to the specified WIP Order number.
 

These features are supported:
 
 
- Product validation  
- Product revision independence (product placed on hold independent of the product revision)  
- Transaction history recorded

*Activity Diagram*

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | ProductID | Integer | No | The product ID of the Lot Number being assigned. |
| Input | LotNo | Char | No | The Lot Number to be assigned to the WIP Order. If it does not exist, it will be created. |
| Input | WipOrderNo | Char | No | The WIP Order number to assign the Lot Number to. It must exist in the system. |
| Input | WipOrderType | Integer | No | The WIP Order type. |
| Input | PrimaryLotNo | Boolean | No | Indicates if the WIP Order lot is to be the primary lot (WIP_ORDER_LOT.PrimaryLotNo). |
| Input | Facility | Char | No | The Facility used to determine if the product is lot-tracked. |

## Validations

- The system validates that the Lot Number exists. 
- The system validates that the WIP Order exists 
- The system validates that the product is lot-tracked for the given Facility. If no Facility is used, it will use the employee's default Facility.

## System Processing

- If the lot did not exist, the system creates it in the LOT_NO table. 
- The system populates WIP_ORDER_LOT, associating the Lot Number to the WIP Order.

## Pre-Conditions

The WIP order must exist.

## History Recording in Production

FlexNet.BusinessFacade.Manufacturing.WipLotAssigner.AssignWipLot

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| WIP_ORDER_LOT | New Row | ProductID, LotNo, WipOrderNo, WipOrderType, PrimaryLotNo |
| LOT_NO | New Row | ProductID, LotNo |
