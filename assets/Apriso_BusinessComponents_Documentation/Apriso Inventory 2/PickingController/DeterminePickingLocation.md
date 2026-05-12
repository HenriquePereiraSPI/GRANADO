# DeterminePickingLocation

**Category:** Apriso/Inventory 2
**Class:** `FlexNet.BusinessFacade.Warehouse.PickingController`
**Assembly:** `FlexNet.BusinessFacade.Warehouse.dll`
**Status:** Active
**Keywords:** Determine Picking Location

## Description

This Business Component method returns a list of possible Warehouse Locations to pick the inventory from.
 

A prioritized list of Locations is returned based on provided inputs, the configuration of APR_WH_PICKING_LOCATION Determination and the content of Locations.
 

The APR_WH_PICKING_LOCATION Determination will return all values of all keys that match the BC inputs.
 

 

It is possible to specify additional properties of the BC. To this, the user should do the following:
 
 
- Add dynamic input(s) to this BC (note that the names are case sensitive).  
- Prepare a new revision of the APR_WH.PickingLocationDetermination Standard Operation and: 
 
- Make this revision a default revision.  
- Create inputs with the same names (case sensitive) as the defined dynamic inputs for this BC.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | Facility | Char | Yes | Input to the Determination. May be configured in the Determination as a Facility to pick the inventory from. |
| Input | Warehouse | Char | Yes | Input to the Determination. May be configured in the Determination as a Warehouse to pick the inventory from. |
| Input | WarehouseLocationType | Integer | No | Input to the Determination. May be configured in the Determination as a Location Type to pick the inventory from. |
| Input | Zone | Char | No | Input to the Determination. May be configured in the Determination as a Zone to pick the inventory from. |
| Input | ProductID | Integer | Yes | Product ID to pick. |
| Input | LotNo | Char | No | Lot Number of inventory in Location; an empty value means any Lot Number. |
| Input | InventoryStatus | Integer | No | Status of inventory in Location; zero means any Inventory Status. |
| Input | Quantity | Decimal | No | A minimal quantity of inventory that must exits in Location; zero or negative value means any quantity of Product. |
| Input | UOMCode | Char | Conditional | Unit of measure of inventory quantity. Required if the quantity is greater than zero. |
| Output | WarehouseLocationID | ListofInteger | Yes | Warehouse Location IDs that contain inventory of requested parameters and quantity. |
| Output | LocationPriority | ListofInteger | Yes | Priorities of the picking Warehouse Locations. A higher number means a lower priority. |

## Validations

-  

System validates if Facility is provided.
  
-  

System validates if Warehouse is provided.
  
-  

System validates if ProductID is provided and exists in the PRODUCT table.
  
-  

If LotNo is provided, then the system validates that it exists in the LOT_NO table for the specified ProductID.
  
-  

If Quantity is greater than zero, the system validates if UOMCode is provided and can be converted to the Product's default UOM.

## System Processing

- Based on provided Product ID, the system determines the following additional attributes required to find the picking Locations: 
 
- Product ABC Class, 
- Product Inventory Type, 
- Product Number. 
 
- System repeatedly invokes **APR_WH.PickingLocationDetermination** Standard Operation to determine picking Locations parameters. Each execution of the Operation returns a set of parameters of Warehouse Locations that are allowed (recommended) or forbidden. The execution is done in the following sequence: 
 
- System determines Locations for: Facility, Warehouse, Inventory Status, Product ABC Class, Product Inventory Type, Product Number, Warehouse Location Type, Zone. 
- For each group that the Product belongs to, the system determines Locations for: Facility, Warehouse, Inventory Status, Product ABC Class, Product Inventory Type, Product Number, Warehouse Location Type, Zone, **Product Group, Product Group Type, Product Group Class Name.**  
 
- Allowed picking Locations are limited in the following way: 
 
- Location can not be on hold (in WAREHOUSE_LOCATION_HOLD table). 
- Location must contain inventory with inputted properties (Product Number, Inventory Status and Lot Number if specified) and at least the requested quantity on hand. 
 
- The list of picking Locations is constructed as all recommended picking Locations excluding all forbidden Locations. 
- System returns the picking Locations and their priorities.

## Pre-Conditions

The user should avoid a situation when the Picking Location Determination returns different priorities for the same Warehouse Location. 
 

In such case the priority of the Location cannot be uniquely determined and predictably returned (one of the priorities will be used).
 

If the priority is not set or equals zero in the Determination, a lowest possible priority will be used (i.e. the highest value of 32-bit integer, 2,147,483,647).
