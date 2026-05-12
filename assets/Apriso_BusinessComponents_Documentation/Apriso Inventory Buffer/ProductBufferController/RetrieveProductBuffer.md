# RetrieveProductBuffer

**Category:** Apriso/Inventory/Buffer
**Class:** `FlexNet.BusinessFacade.Common.ProductBufferController`
**Assembly:** `FlexNet.BusinessFacade.Common.dll`
**Status:** Active

## Description

The purpose of this Business Component is to retrieve a valid record from the PRODUCT_MIN_MAX table where the product buffer is configured.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | ProductID | Integer | Yes | Product ID of the product buffer to be retrieved. |
| Input | Facility | Char | No | Facility of the product buffer. |
| Input | Warehouse | Char | No | Warehouse of the product buffer. Required if the product buffer is to be found on warehouse, zone or warehouse location level. |
| Input | Zone | Char | No | Zone of the product buffer. Required if the product buffer is to be found on zone or warehouse location level. |
| Input | WarehouseLocationID | Integer | No | Warehouse location ID of the product buffer. Required if the product buffer is to be found on warehouse location level. |
| Input | PartnerID | Integer | No | Partner ID of the product buffer. |
| Output | MinQuantity | Decimal | No | Minimum quantity of the product buffer. Is 0 if buffer not found. |
| Output | MaxQuantity | Decimal | No | Maximum quantity of the product buffer. Is 0 if buffer not found. |
| Output | ReplenishmentLotSize | Decimal | No | Replenishment lot size of the product buffer. Is 0 if buffer not found. |
| Output | UonCode | Char | No | Uom code of the quantities of the product buffer. Is empty string if buffer not found. |
| Output | Error | Integer | No | Flag indicating if product buffer was found. Is 0 if found, 1 if not found. |

## Validations

The System checks that the Inputs exist in reference tables.

## System Processing

The System retrieves data as follow: 
 Look for record matching with the input considering full and then partial key as follow. Stop to look for when record is found:
 

(attention Null/0 as input = Null/0 in table in this research)
 
 
- Product ID 
- Facility 
- Warehouse 
- Zone 
- Location ID 
- Partner ID 
 

Then
 
 
- Product ID 
- Facility 
- Warehouse 
- Zone 
- Partner ID 
 

Then
 
 
- Product ID 
- Facility 
- Warehouse 
- Partner ID 
 

Then
 
 
- Product ID 
- Facility 
- Partner ID 
 

Output = the retrieved quantity and error code = 0 is record is found, or error code 1 if not found.
