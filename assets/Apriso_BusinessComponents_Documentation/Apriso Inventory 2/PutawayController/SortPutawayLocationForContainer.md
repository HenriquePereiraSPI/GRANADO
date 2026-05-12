# SortPutawayLocationForContainer

**Category:** Apriso/Inventory 2
**Class:** `FlexNet.BusinessFacade.Warehouse.PutawayController`
**Assembly:** `FlexNet.BusinessFacade.Warehouse.dll`
**Status:** Active
**Keywords:** Sort Putaway Location Container Determine

## Description

This Business Component method returns a sorted list of possible Warehouse Locations to put away a Container. Better Locations are returned on top of the list.
 

The inputted Warehouse Locations and priorities are usually taken from the output of the DeterminePutawayLocationForContainer BC method.
 

The BC uses **APR_WH.PutawayStrategyDetermination** Standard Operation to determine the strategy for each inventory in Container or for the Container itself if it is empty. A common strategy for all Container inventory is chosen. When the system receives a strategy, it sorts the Locations in accordance with the strategy settings. 
 

 It is possible to specify additional properties of the BC. To do this, the user should do the following: 
 
 
-  Add dynamic input(s) to this BC (note that the names are case sensitive).  
-  Prepare a new revision of the APR_WH.PutawayStrategyDetermination Standard Operation and:  
 
-  Make this revision a default revision.  
-  Create inputs with the same names (case sensitive) as the defined dynamic inputs for this BC.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | ContainerNo | Char | Yes | Container to be put away. |
| Input | DestinationWarehouse | Char | Yes | Target Warehouse. |
| Input | DestinationFacility | Char | Yes | Target Facility. |
| Input | WarehouseLocationIDList | ListofInteger | Yes | List of possible Warehouse Location IDs to sort (returned by the DeterminePutawayLocationForContainer BC method). |
| Input | LocationPriorityList | ListofInteger | Yes | List of Location Priorities (returned by the DeterminePutawayLocationForContainer BC method). |
| Output | WarehouseLocationIDOutList | ListofInteger | Yes | Sorted list of Warehouse Location IDs. Better Locations are first on the list. |

## Description Parameters

| Name | Type | Description |
|------|------|-------------|
| IgnoredProductIDList | ListofInteger | List of Product IDs in Container that will be ignored during determining the best sorting strategy. |
| ChangeSortingPriority | Boolean | Value that indicates if sorting strategy that uses 'Group the Same Lots' sorting condition prefers Locations that contain the same Product than empty Locations (see System Processing section). |

## Validations

- System validates if ContainerNo is provided. 
- System validates if DestinationWarehouse is provided. 
- System validates if DestinationFacility is provided. 
- System checks if the length of WarehouseLocationsIDInList equals the length of LocationPriorityList.

## System Processing

- System initially sorts the provided Warehouse Locations in accordance with the priority list. 
- System checks all Inventory in the given Container (excluding Inventory with ProductID from IgnoredProductIDList). Depending on the kind of Inventory, a different flow will be executed. 
- If there is no Inventory in Container, the system chooses Putaway Strategy based only on Destination Warehouse and Destination Facility. **APR_WH.PutawayStrategyDetermination** Standard Operation is called to list the Strategies. 
- If Container is not empty, the system iterates all inventory to choose strategies (excluding Inventory with ProductID from IgnoredProductIDList). **APR_WH.PutawayStrategyDetermination **Standard Operation is called to list the Strategies.  
-  The first Strategy that is common for all Inventory will be applied.  
- System applies all Strategy conditions. 
- When Strategy uses 'Group the Same Lots' and 'Group the Same Products' conditions then Locations will be sorted in the following order: 
 
- Locations that contain the same Product with the same lot 
- empty Locations 
- any other Locations. 
 
- Above algorithm can be changed if the ChangeSortingPriority Dynamic Input is used and is set to true. In this case Locations will be sorted in the following order: 
 
- Locations that contain the same Product with the same lot 
- Locations that contain the same Product and different lot 
- empty Locations 
- any other Locations.
