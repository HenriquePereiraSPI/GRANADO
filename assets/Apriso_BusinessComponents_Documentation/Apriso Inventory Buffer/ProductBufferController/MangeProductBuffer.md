# MangeProductBuffer

**Category:** Apriso/Inventory/Buffer
**Class:** `FlexNet.BusinessFacade.Common.ProductBufferController`
**Assembly:** `FlexNet.BusinessFacade.Common.dll`
**Status:** Active

## Description

The purpose of this Business Component is to maintain the strategy replenishment buffer for a product.
 

This business component adds a new record or updates an existing record in the:
 
 
- Insert mode (ID=NULL): the BC adds a new buffer to a product, 
- Update mode (ID not null): the BC modifies an existing record in the table.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | ProductMinMaxLevelID | Integer | No | The ID of the product buffer to update. |
| Input | ProductID | Integer | Yes | Product ID to create/update the buffer for. |
| Input | Facility | Char | No | Facility to assign to product buffer. The parameter is optional if it can be retrived based on any other paramters e.g. WarehouseLocationID is specified. |
| Input | Warehouse | Char | No | Warehouse to assign to product buffer. |
| Input | Zone | Char | No | Zone to assign to product buffer. |
| Input | WarehouseLocationID | Integer | No | Warehouse location ID to assign to product buffer. |
| Input | PartnerID | Integer | No | Partner ID to assign to product buffer. |
| Input | MinQuantity | Decimal | No | Decimal, Minimum quantity to assign to product buffer. |
| Input | MaxQuantity | Decimal | No | Maximum quantity to assign to product buffer. |
| Input | ReplenishmentLotSize | Decimal | No | Replenishment lot size to assign to product buffer |
| Input | UomCode | Char | Conditional | Code of the quantites. Required if any of the quantities is specified. |

## Validations

**Insert Mode** 
 
 
- The System checks that inputs are valid. 
- The System checks that no record exists for the input key Product ID, Facility, Warehouse, Zone, Location ID, and Partner ID for the entered period of time. 
 

 **Update Mode** 
 

The System checks that inputs are valid.

## System Processing

**Insert Mode** 
 
 
- Null Location ID or Partner ID will be passed passing 0 as input. 
- User is allowed to pass only Product + Facility + Location ID or Zone, the system will populate automatically the Warehouse and the Zone. 
- The system inserts the record in the table. Quantities are updated with the input value if they are positive. 
 

 **Update Mode** 
 
 
 
- In update mode, the BC retrieves the record based on the ID, checks its existence and applies updates to the data after validation is made that the new record does not generate unicity conflict (Product ID, Facility, Warehouse, Zone, Location ID). 
- If user passes input quantities that are negative, then the system does not update the value in the table. 
- UOM is required if any quantity is changed. UOM conversion is done (using conversions BC), if the current record has UOM different than the input. The UOM is not updated in the table. 
- The system inserts the record in the table. Quantities are updated with the input value if they are positive.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| PRODUCT_MIN_MAX_LEVEL | All fields | From input |
