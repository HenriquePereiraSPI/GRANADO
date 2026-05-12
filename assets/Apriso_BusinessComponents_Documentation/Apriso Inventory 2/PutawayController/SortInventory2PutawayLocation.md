# SortInventory2PutawayLocation

**Category:** Apriso/Inventory 2
**Class:** `FlexNet.BusinessFacade.Warehouse.PutawayController`
**Assembly:** `FlexNet.BusinessFacade.Warehouse.dll`
**Status:** Active
**Keywords:** Sort Determine Determination Putaway Location Warehouse

## Description

This Business Component method sorts a list of Warehouse Locations to perform Putaway transaction. The list from the BC input is sorted using a Putaway Strategy.
 

The BC executes a Standard Operation APR_WH.PutawayStrategyDetermination to determine the Strategy. The user may add custom business logic to this Operation. The Operation calls internally Local Determination APR_WH_PUTAWAY_STRATEGY which can be configured on the Warehouse Configuration screen from the Portal.
 

The Putaway Strategies can also be edited from the same screen.
 

 It is possible to specify additional properties of the BC. To do this, the user should do the following: 
 
 
-  Add dynamic input(s) to this BC (note that the names are case sensitive).  
-  Prepare a new revision of the APR_WH.PutawayStrategyDetermination Standard Operation and:  
 
-  Make this revision a default revision.  
-  Create inputs with the same names (case sensitive) as the defined dynamic inputs for this BC.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | InventoryID | Integer | Yes | ID of Inventory record. |
| Input | DestinationWarehouse | Char | Yes | Destination Warehouse. |
| Input | DestinationFacility | Char | Yes | Destination Facility. |
| Input | WarehouseLocationIDInList | ListofInteger | Yes | List of Warehouse Location IDs. |
| Input | PriorityList | ListofInteger | Yes | List of Location priorities. |
| Output | WarehouseLocationIDOutList | ListofInteger | Yes | Sorted list of Warehouse Location IDs. |

## Description Parameters

| Name | Type | Description |
|------|------|-------------|
| ChangeSortingPriority | Boolean | Value that indicates if sorting strategy that uses 'Group the Same Lots' sorting condition prefers Locations that contain the same Product than empty Locations (see System Processing section). |

## Validations

- System validates if provided InventoryID exists. 
- System validates if destination Facility and Warehouse are provided .  
- System validates if the length of WarehouseLocationIDInList and PriorityList is equal.  
-  

System checks if Putaway Strategy returned by the Standard Operation exists.

## System Processing

- System determines source Inventory parameters: Inventory Status, Product, Product Inventory Type, Product ABC Class and Product Group. 
- System calls Standard Operation APR_WH.PutawayStrategyDetermination with provided parameters. The Operation should return one Putaway Strategy. If more values are returned, the first Strategy is used, the other ones are ignored. 
- If the Strategy is not returned by the Operation, or it does not contain any sorting conditions, system returns the list of Warehouse Locations sorted by priority only. 
- System sorts Warehouse Locations by the priority and then by the criteria defined within the Strategy. The conditions 'Group the same Product' and 'Group the same Lot' return Locations with the same Product/Lot first, then empty Locations and finally Locations with mixed content. 
- System returns sorted list of Warehouse Locations. 
- When Strategy uses 'Group the Same Lots' and 'Group the Same Products' conditions then Locations will be sorted in the following order: 
 
- Locations that contain the same Product with the same lot  
- empty Locations  
- any other Locations. 
 
- Above algorithm can be changed if the ChangeSortingPriority Dynamic Input is used and is set to true. In this case Locations will be sorted in the following order: 
 
-  Locations that contain the same Product with the same lot  
- Locations that contain the same Product and different lot  
- empty Locations  
- any other Locations.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| INVENTORY2 | ID | InventoryID |
