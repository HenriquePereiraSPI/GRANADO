# RemoveChild2

**Category:** Apriso/Genealogy
**Class:** `FlexNet.BusinessFacade.Common.GenealogyRemover`
**Assembly:** `FlexNet.BusinessFacade.Common.dll`
**Status:** Deprecated

## Description

The purpose of this Business Component is to facilitate the removing of a child component from a parent regardless of WIP.
 

The functionality includes the removal of either Serial, Lot or Both tracked components from a Serial, Lot or Both tracked product (parent) being produced.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | Facility | Char | No | Facility to remove the child against. |
| Input | ParentProductID | Integer | Yes | Parent product ID. |
| Input | ParentLotNo | Char | Conditional | Parent lot number. Required if parent product is Lot or Both tracked. |
| Input | ParentSerialNo | Char | Conditional | String, Parent serial number. Required if parent product is Serial or Both tracked. |
| Input | ChildProductID | Integer | Yes | Child product id. |
| Input | ChildLotNo | Char | Conditional | Child lot number. Required if child product is Lot or Both tracked. |
| Input | ChildSerialNo | Char | Conditional | Child serial number. Required if child product is Serial or Both tracked. |
| Input | UomCode | Char | Yes | Child's unit of measure. |
| Input | Quantity | Decimal | No | Decimal, Child's quantity to be removed (defaulted to 1 for serial). Required. Must be greater or equal 0. |

## Validations

- System proceeds to validate the Product Number (Parent) for the Facility: 
 
- The product is not on hold. 
 
- System proceeds to determine if the Product Number (Parent) is lot tracked or serial tracked for Facility: 
 
- If the Parent Product Number is neither Lot nor Serial tracked, system returns an error message. 
- If system determines that the Parent Product Number is Lot tracked, it proceeds to validate the entered Parent Lot Number: 
 
- Parent Lot Number must not be on Hold. 
 
- If system determines that the Parent product for the WIP Order is Serial tracked, it proceeds to validate the entered Parent Serial Number: 
 
- No validation. 
 
 
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
- If the Child product to be removed is Quantity tracked, system returns an error message. 
 
 
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

Transaction history is recorded each time a record is updated in or deleted from the GENEALOGY table.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| GENEALOGY | Quantity | Quantity -= Quantity (for child lot) |
