# DecomposePackagingInstr

**Category:** Apriso/Inventory/Movement
**Class:** `FlexNet.BusinessFacade.Common.ProductPackagingController`
**Assembly:** `FlexNet.BusinessFacade.Common.dll`
**Status:** Active

## Description

The purpose of this Business Component is to retrieve the number of containers required to pack a product according to a Packaging Instruction.
 

Example
 

A PI is structured as follows: a pallet of 20 boxes, 5 pieces per box
 

PI1 
 

Type Pack, product = pallet, quantity = 1, mainpack
 

Type PI, PI = PI2, quantity = 20
 

PI2
 

Type Pack, product = box, quantity = 1, mainpack
 

Type Product, product = Product1, quantity = 5,
 

Input =
 

166 parts, to pack in PI1
 

Outputs =
 

NumberofPILevel1 => 2
 

Numberofproductperlevel1 =>100
 

IncompleteLevel1 => 66
 

NumberofLevel2inlevel1=>20
 

NumberofLevel2inincompletelevel1=>14
 

Numberofproductperlevel2 =>5
 

NumberofProductIncincompletelevel2 =>1
 

There will be 2 pallets, the full pallet has 100 parts, 20 boxes, 5 per box, the incomplete palette has 14 boxes of 5, one of them has 1 item.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | PackagingInstrID | Integer | Yes | Packaging instruction of the product. |
| Input | Quantity | Decimal | Yes | Quantity of the product to be packed. |
| Input | UomCode | Char | Yes | Uom code of the quantity. |
| Output | NumberOfPILevel1 | Decimal | Yes | Number of containers (level 1) to create to pack the quantity specified. |
| Output | ProductQuantityPerLevel1 | Decimal | No | Quantity of product in container on level 1. |
| Output | IncompleteProductQuantityPerLevel1 | Decimal | No | Incomplete product quantity on level 1. |
| Output | NumberOfLevel2InLevel1 | Decimal | No | Number of subcontainers (level 2) in container (level 1). |
| Output | IncompleteNumberOfLevel2InLevel1 | Decimal | No | Incomplete number of subcontainers (level 2) in container (level 1). |
| Output | ProductQuantityPerLevel2 | Decimal | No | Product quantity in subcontainer (level 2). |
| Output | IncompleteProductQuantityPerLevel2 | Decimal | No | Incomplete product quantity in subcontainer (level 2). |
| Output | Error | Integer | No | Error code. 0 - No error.1 - Error on level 1.2 - Error on level 2. |

## Validations

- System validates that PackagingInstrID is specified and packaging instruction exists (Packaging_Instr_Header). 
- System validates that UomCode is specified and exists.

## System Processing

- System traverses packaging instruction to find the packaging instruction detail (Packaging_Instr_Detail) for product to pack. 
- System s converts the specified Quantity to the uom code of the packaging instruction detail if required. 
- System calculates number of boxes and pallets needed to pack the specified quantity of product. 
- If PI is defined with target quantity <= 0 no calculation can be done, then return error = 1 if PI is 1 level, 2 if PI is 2 levels.
