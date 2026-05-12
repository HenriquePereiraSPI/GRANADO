# RemoveChild_v91

**Category:** Apriso/Genealogy
**Class:** `FlexNet.BusinessFacade.Common.GenealogyRemover`
**Assembly:** `FlexNet.BusinessFacade.Common.dll`
**Status:** Deprecated

## Description

The purpose of this Business Component is to facilitate the removing of a child component from a parent within WIP.
 

The functionality includes the removal of either Serial, Lot or Both tracked components from a Serial, Lot or Both tracked product (parent) being produced.
 

 **Supported Features** 
 
 
-  

Parent Product status validation
  
-  

WIP Order and Operation status validation
  
-  

WIP Order, Operation, Product, Lot and Serial number Hold validation
  
-  

Transaction History
  
 

 

 **Not Supported Features** 
 
 
-  

Automatic un-Issue of child component (miscellaneous issue)
  
-  

Automatic update of component pick list when a component is removed from the parent.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | WipOrderNo | Char | Yes | Wip order number to remove the child against. |
| Input | WipOrderType | Integer | No | Wip order type of the wip order to remove the child against. |
| Input | OprSequenceNo | Char | Yes | Wip operation sequence number to remove the child against. |
| Input | ParentProductID | Integer | No | Parent product ID, |
| Input | ParentLotNo | Char | Conditional | Parent lot number. Required if parent product is Lot or Both tracked. |
| Input | ParentSerialNo | Char | Conditional | Parent serial number. Required if parent product is Serial or Both tracked. |
| Input | ChildSerialNo | Char | Conditional | Child serial number. Required if child product is Serial or Both tracked. |
| Input | ChildProductID | Integer | No | Child product ID. |
| Input | ChildLotNo | Char | Conditional | Required if child product is Lot or Both tracked. Required if child product is Lot or Both tracked. |
| Input | UomCode | Char | No | Child's unit of measure. |
| Input | Quantity | Decimal | No | Child's quantity to be removed (if it is serial the quantity is defaulted to 1). Must be greater or equal zero. |

## Validations

- System validates the WIP Order: 
 
- WIP Order status is either new or started, 
- WIP Order is not on hold. 
 
- System proceeds to validate the WIP Operation: 
 
- WIP Operation status is either new or started, 
- WIP Operation is not on hold. 
 
- System proceeds to validate the Product Number (Parent) for the WIP Order: 
 
- The product is not on hold. 
 
- System proceeds to determine if the Product Number (Parent) is lot tracked or serial tracked: 
 
- If the Parent Product Number is neither Lot nor Serial tracked, system returns an error message. 
- If system determines that the Parent Product Number is Lot tracked, it proceeds to validate the entered Parent Lot Number: 
 
- Parent Lot Number must exist in Wip_Order_Lot_No, 
- Parent Lot Number must not be on Hold. 
 
- If system determines that the Parent product for the WIP Order is Serial tracked, it proceeds to validate the entered Parent Serial Number: 
 
- The Parent Serial Number entered must be 'started' or 'new' for the current WIP Operation 
- Serial Number must currently be in WIP Status 
- Serial Number must have the correct Wip Content Class ('Good'). 
- The Parent Serial must be assigned to the specified Wip Operation. 
- The Parent Serial must not be in any container (Wip_Serial_No.ContainerNo has to be null). 
 
 
- System proceeds to validate the Child Product Number that is to be removed: 
 
- Product must be valid in the system, 
- The product is not on hold. 
 
- System proceeds to determine if the Product Number (Child) is lot tracked or serial tracked: 
 
- If the Child product to be removed is Serial tracked, system proceeds to validate the entered Child Serial Number: 
 
- Child must already exist against that Parent. 
- There must be no Holds against that Serial Number 
 
- If the Child product to be removed is Lot tracked, system proceeds to validate the entered Child Lot Number and quantity: 
 
- Child must not be on Hold 
- Child Lot, Product and quantity must already exist for that Parent. 
- Quantity for that Lot/Product must be equal to or less than the quantity for that Parent 
- If the Child product to be removed is Quantity tracked, system returns an error. 
 
 
- System validates that UomCode is specified and it exists.

## System Processing

- System converts Quantity to UomCode of the genealogy record if required. 
- System proceeds to remove or update - depending on quantity being removed the Genealogy link between the child component and the parent: 
 
- For child serial numbers, the GENEALOGY record is deleted, 
- For child lot numbers, system decreases the quantity of the child until the record reaches zero, at which point the record is removed. 
 
- Transaction history is recorded.

## Pre-Conditions

See validations.

## History Recording in Production

Transaction history is recorded each time a record is updated in or deleted from the GENEALOGY table* . *

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| GENEALOGY | Quantity | Quantity -= Quantity (for child lot) |
