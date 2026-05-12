# CalculateContainerNetWeight

**Category:** Apriso/Common/Container
**Class:** `FlexNet.BusinessFacade.Common.ContainerController`
**Assembly:** `FlexNet.BusinessFacade.Common.dll`
**Status:** Active

## Description

This Business Component method is used to calculate the net weight of Containers. The weight is calculated based on the inventory in the Container and the child Containers. The weight of each product in the Container is calculated based on the weight specified in the product dimension average value. The weight of each product is then converted to the inputted UOM and the net weight is calculated.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | ContainerNo | Char | Yes | The number of the Container whose weight is to be calculated. |
| Input | UomCode | Char | Yes | The code of the UOM of the net weight to be retreived. |
| Output | NetWeight | Decimal | No | The net weight. |
| Output | weightUomCode | Char | No | The net weight UOM. |

## Validations

- The system validates that the Container exists. 
- The system validates that the UomCode exists.

## System Processing

- The system builds the list of master and child Containers to calculate the weight of each Container. 
- The system calculates the weight of each product in the Container in the inputted UOM. 
- The system sums the weight of the products in the Container. 
- The system sums the weight of the parent and child Containers to calculate the net weight.
