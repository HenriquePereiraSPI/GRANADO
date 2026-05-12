# CheckContainerAgainstPI

**Category:** Apriso/Inventory/Movement
**Class:** `FlexNet.BusinessFacade.Common.ProductPackagingController`
**Assembly:** `FlexNet.BusinessFacade.Common.dll`
**Status:** Active

## Description

This Business Component method is used to compare the structure of the inputted Container with the inputted packaging instruction (PI) and to validate that the structure of the inputted Container is consistent with the PI. The BC returns errors codes based on the gaps found at various levels and outputs the level on which the inconsistency is found.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | ContainerNo | Char | Yes | The Container to validate. |
| Input | PackagingInstrID | Integer | Yes | The PI to validate the Container against. |
| Output | Error | Integer | No | The error code. If 0, then no error will be invoked. |
| Output | Level | Integer | No | In the case of an error, this Input is the level on which the error occurred. |

## Validations

- The system validates that PackagingInstrID is specified and the PI exists. 
- The system validates that ContainerNo is specified and exists.

## System Processing

- The system compares the structure of the PI with the content of the Container specified. If any inconsistency is found, the Error and Level Output parameters are set. 
- If the Level is greater than 0, this means that an error has been found. The following errors can occur: 
 
- The product has not been found – 1 
- An invalid product has been found – 2 
- The packaging material has not been found – 3 
- Invalid product quantity – 4 
- Invalid packaging material quantity – 5 
- Invalid number of child Containers – 6 
- The child Container has been found – 7 
- There is no "any" product in the Container – 8

## Pre-Conditions

A maximum of 2 levels are allowed per PI.
