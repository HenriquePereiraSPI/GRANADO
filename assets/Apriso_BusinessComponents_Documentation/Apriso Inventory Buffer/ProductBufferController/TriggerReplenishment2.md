# TriggerReplenishment2

**Category:** Apriso/Inventory/Buffer
**Class:** `FlexNet.BusinessFacade.Common.ProductBufferController`
**Assembly:** `FlexNet.BusinessFacade.Common.dll`
**Status:** Active

## Description

The purpose of this Business Component method is to determine the replenishment quantity for a Product with specific attributes such as location or partner, based on the Product_Min_Max configuration.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | ProductID | Integer | Yes | Product ID of the Product buffer to calculate the replenishment quantity for. |
| Input | Facility | Char | Conditional | Facility of the Product buffer. The parameter is optional if it can be retrieved based on any other parameters e.g. WarehouseLocationID. |
| Input | Warehouse | Char | Conditional | Warehouse of the Product buffer. |
| Input | Zone | Char | Conditional | Zone of the Product buffer. |
| Input | WarehouseLocationID | Integer | Conditional | Warehouse Location ID of the Product buffer. |
| Input | PartnerID | Integer | Conditional | Partner ID of the Product buffer. |
| Input | ReplenishmentPolicy | Integer | No | Replenishment policy. Supported values: 1 - Optimistic. 2 - Pessimistic. When value is not specified or it is anything different than 2, it will be converted to 1. |
| Output | UomCode | Char | No | UOM code of the replenishment quantity. |
| Output | Quantity | Decimal | No | Replenishment quantity. |

## Validations

The System checks that the Inputs exist in reference tables.

## System Processing

- The System retrieves buffer information for the specified inputs. 
- The System retrieves the total inventory, not allocated, in status Available. 
- The System converts each Inventory2 record quantity in the UOM of the Product_Min_Max record. 
- The System uses Replenishment Policy parameter to determine if the replenishment quantity can be greater than ProductMinMaxLevel.MaxQuantity (ReplenishmentPolicy = 1) or not (ReplenishmentPolicy = 2). The default is 1 (when ReplenishmentPolicy is not set). 
- The System calculates the difference between minimum quantity and retrieved inventory: 
 
- If inventory is >= than min quantity, then end. 
- If inventory is < than min quantity then populate the outputs: 
 
- UOM => from retrieved product_min_max, 
- Quantity => Round by ReplenishmentLotSize (Maximum Quantity – available inventory).

## Pre-Conditions

Product buffer configured.
