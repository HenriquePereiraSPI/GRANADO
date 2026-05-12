# DeterminePutawayLocation

**Category:** Apriso/Inventory 2
**Class:** `FlexNet.BusinessFacade.Warehouse.PutawayController`
**Assembly:** `FlexNet.BusinessFacade.Warehouse.dll`
**Status:** Active
**Keywords:** Determine Determination Putaway Location Warehouse

## Description

This Business Component method returns a list of possible Warehouse Locations with priorities to perform Putaway transaction. The list is generated basing on the source Inventory properties (Product, Product Group, Product Inventory Type, ABC Class, Inventory Status etc.) and the target Location Type, Zone, Warehouse and Facility. It is possible to specify additional properties of the BC. To this, the user should do the following:
 
 
- Add dynamic input(s) to this BC (note that the names are case sensitive).  
- Prepare a new revision of the APR_WH.PutawayLocationDetermination Standard Operation and: 
 
- Make this revision a default revision.  
- Create inputs with the same names (case sensitive) as the defined dynamic inputs for this BC. 
 
 

The BC executes a Standard Operation APR_WH.PutawayLocationDetermination to identify preferred target Warehouse Locations or preferred Locations properties. The user may add custom business logic to this Operation. The output of the Operation must contain Warehouse and one of the following parameters (from highest to lowest priority):
 

 
 
- Warehouse Location 
- Zone 
- Warehouse Location Type 
- Warehouse Location Class 
- Warehouse Location Group/Group Class/Group Type 
 

 When a higher priority parameter is returned, the rest of output values are ignored. 
 
 

The Operation calls internally Local Determination APR_WH_PUTAWAY_LOCATION, which can be configured in the Warehouse Maintenance screen.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | InventoryID | Integer | Yes | ID of Inventory record. |
| Input | Warehouse | Char | No | Destination Warehouse. |
| Input | Facility | Char | No | Destination Facility. |
| Input | Zone | Char | No | Destination Zone. |
| Input | WarehouseLocationType | Integer | No | Destination Warehouse Location Type. |
| Output | WarehouseLocationID | ListofInteger | Yes | List of Warehouse Location IDs. |
| Output | LocationPriority | ListofInteger | Yes | List of Location priorities. |

## Validations

- System validates if the provided InventoryID exists.

## System Processing

- System determines source Inventory parameters: Warehouse Location, Warehouse Location Type, Zone, Warehouse, Facility, Inventory Status, Product, Product Inventory Type, Product ABC Class and Product Group. 
- System calls Standard Operation APR_WH.PutawayLocationDetermination with provided parameters. If destination Zone, Warehouse, Facility or Warehouse Location Type are not provided, an appropriate parameter is taken from source Inventory Warehouse Location properties. 
- Using the Operation's output, system creates a list of Warehouse Locations that fulfill the criteria. 
- If a Class is defined for Warehouse Location, system performs the following additional checks: 
 
- If the AllowMixedProducts flag is set to false, Warehouse Locations with different Products are excluded. 
- If the AllowMixedLots flag is set to false, Warehouse Locations with different Lot numbers are excluded. 
- If the difference of expiration dates (expressed in days) between moved Inventory and the Inventory in target Location exceeds the value of MaxExpDateDifference parameter, the Location is also excluded. 
 
- System returns the list of possible Warehouse Locations (with priorities) for the Putaway transaction.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| INVENTORY2 | ID | InventoryID |
