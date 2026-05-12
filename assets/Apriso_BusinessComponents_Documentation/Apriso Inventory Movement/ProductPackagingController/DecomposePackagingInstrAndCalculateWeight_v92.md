# DecomposePackagingInstrAndCalculateWeight_v92

**Category:** Apriso/Inventory/Movement
**Class:** `FlexNet.BusinessFacade.Common.ProductPackagingController`
**Assembly:** `FlexNet.BusinessFacade.Common.dll`
**Status:** Active

## Description

The purpose of this business component is to retrieve the number of containers required to pack a product using the quantity and packaging instruction provided and to calculate weight at various levels. The gross weight is the sum of the weight of the packaging and products at various levels, full or not. Weight is calculated based on Product_Dimension of the various products involved and the dimension code used is 'net weight'.
 

The calculated weight is converted in the WeightUOM passed as input.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | ProductID | Integer | No | ID of the Product to retrieve the packaging instructions for generic packaging instructions. |
| Input | PackagingInstrID | Integer | Yes | Packaging instruction of the product. |
| Input | Quantity | Decimal | Yes | Quantity of the product to be packed. |
| Input | UomCode | Char | Yes | Uom code of the quantity. |
| Input | WeightUomCode | Char | Yes | Weight uom code to calculate the weight in. |
| Output | NumberOfPILevel1 | Decimal | No | Number of containers (level 1) to create to pack the quantity specified. |
| Output | ProductQuantityPerLevel1 | Decimal | No | Quantity of product in container on level 1. |
| Output | IncompleteProductQuantityPerLevel1 | Decimal | No | Incomplete product quantity on level 1. |
| Output | NumberOfLevel2InLevel1 | Decimal | No | Number of subcontainers (level 2) in container (level 1). |
| Output | IncompleteNumberOfLevel2InLevel1 | Decimal | No | Incomplete number of subcontainers (level 2) in container (level 1). |
| Output | ProductQuantityPerLevel2 | Decimal | No | Product quantity in subcontainer (level 2). |
| Output | IncompleteProductQuantityPerLevel2 | Decimal | No | Incomplete product quantity in subcontainer (level 2). |
| Output | GrossWeightLevel1 | Decimal | No | Gross weight on level 1. |
| Output | GrossWeightPartialLevel1 | Decimal | No | Gross partial weight on level 1 |
| Output | PackagingMaterialLevel1 | Integer | No | Product ID of the main packaging material on level 1. |
| Output | GrossWeightLevel2 | Decimal | No | Gross weight on level 2 (0 if there is only one level). |
| Output | GrossWeightPartialLevel2 | Decimal | No | Gross partial weigh on level 2 (0 if there is only one level). |
| Output | PackagingMaterialLevel2 | Integer | No | Product IF of the main packaing material on level 2 (0 if there is only one level). |
| Output | Error | Integer | No | Error code. 0 - No error.1 - Error on level 1.2 - Error on level 2. |

## Validations

- System validates that the user entered a valid packaging instruction ID (PACKAGING_INSTR_HEADER) 
- System validates that the user entered a valid unit of measure (input - UomCode) 
- System validates that the user entered a valid weight unit of measure (input - WeightUomCode)

## System Processing

- System retrieves the product defined for the provided packaging instruction (PACKAGING_INSTR_DETAIL.ProductID), if the packaging instruction is for a generic production (i.e. PACKAGING_INSTR_DETAIL.ProductID is not defined), then the inputted ProductID will be used. 
- System converts the Quantity to the product's default unit of measure. 
- System calculates the number of completed and not completed packaging instructions on level1 and level 2 needed to pack Quantity of product of provided packaging instruction. 
- System populates product quantity on level 1, number of level 2 in level1 and product quantity on level 2 based on the details (PACKAGING_INSTR_DETAIL) of the provided packaging instruction. 
- System calculates the weight of completed and not completed packaging instructions based on the information in PRODUCT_DIMENSION

## Pre-Conditions

- The packaging instruction must be defined prior to using this method 
- Only 1 or 2 level packaging instructions are allowed.
