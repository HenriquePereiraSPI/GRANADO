# AddChildToParent

**Category:** Apriso/Genealogy
**Class:** `FlexNet.BusinessFacade.Common.GenealogyAdder`
**Assembly:** `FlexNet.BusinessFacade.Common.dll`
**Status:** Deprecated

## Description

This Business Component method is used to facilitate the addition of a child component to a parent within a Facility (regardless of WIP).
 

The functionality includes the addition of components (children) that are tracked by Lot Number, Serial Number, or both to a product (parent) being produced that is tracked by Lot Number, Serial Number, or both.
 

The AddChildtoParent BC uses the given Inputs to create a new record in the GENEALOGY table. The AddChildWithPartner BC works in a similar way, except that it allows for the specification of a child partner (which is validated by the method).

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | Facility | Char | No | The Facility to add the child against. |
| Input | ParentProductID | Integer | Yes | The parent product ID. |
| Input | ParentLotNo | Char | Conditional | The parent Lot Number. This is required if the parent product is lot-tracked or both lot-tracked and serial-tracked. |
| Input | ParentSerialNo | Char | Conditional | The parent Serial Number. This is required if the parent product is serial-tracked or both lot-tracked and serial-tracked. |
| Input | ChildProductID | Integer | Conditional | The child product ID. |
| Input | ChildLotNo | Char | Conditional | The child Lot Number. This is required if the child product is lot-tracked or both lot-tracked and serial-tracked. |
| Input | ChildSerialNo | Char | Conditional | The child Serial Number. This is required if the child product is serial-tracked or both lot-tracked and serial-tracked. |
| Input | Quantity | Decimal | Conditional | The child's quantity to be added. This is required if a product that is not serial-tracked is being added. |

## Validations

- The system validates the product number (parent) and that the product is not on hold. 
- The system determines if the product number (parent) is lot-tracked or serial-tracked. If the parent product is neither lot-tracked nor serial-tracked, the system returns an error message. If the parent product is lot-tracked for the Facility, the system validates the Lot Number (parent) for the facility and that the lot is not on hold. If the parent product for the Facility is serial-tracked, the system validates the entered parent Serial Number: 
 
- The parent Serial Number entered must be started or new for the current WIP Operation. 
- The Serial Number must be currently in the WIP Status. 
- The Serial Number must have the correct WIP Content Class (Good). 
- The parent Serial Number must be assigned to the specified WIP Operation. 
- The parent Serial Number must not be in any Container (Wip_Serial_No.ContainerNo has to be null). 
 
- The system validates the child product number that is to be added. The product must be valid in the system, and the product must not be on hold. 
- The system determines if the product number (child) is lot-tracked or serial-tracked. 
 
- If the child is lot-tracked, the system validates the child Lot Number: 
 
- The Lot Number must be valid for the product. 
- The Lot Number must not be on hold. 
 
- If child is serial-tracked, the system validates the entered child Serial Number: 
 
- The child Serial Number must not be in the inventory. 
- There must be no holds against that Serial Number. 
 
- If the child product for the Facility is neither lot-tracked nor serial-tracked, the system returns an error message. 
 
- The system validates that the child product has the default UOM code specified.

## System Processing

- The system adds the genealogy link between the child component and the parent by creating a record in the GENEALOGY table. 
- The system records the transaction history.

## Pre-Conditions

See **Validations **above.

## History Recording in Production

The transaction history is recorded each time a record is added to the GENEALOGY table.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| GENEALOGY | ParentProductID | ParentProductID. |
|  | ParentLotNo | ParentLotNo |
|  | ParentSerialNo | ParentSerialNo |
|  | ChildProductID | ChildProductID |
|  | ChildLotNo | ChildLotNo |
|  | ChildSerialNo | ChildSerialNo |
|  | UomCode | childProduct.DefaultUomCode |
|  | Quantity | Quantity |
