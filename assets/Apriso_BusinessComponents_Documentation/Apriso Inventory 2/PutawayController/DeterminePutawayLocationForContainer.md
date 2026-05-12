# DeterminePutawayLocationForContainer

**Category:** Apriso/Inventory 2
**Class:** `FlexNet.BusinessFacade.Warehouse.PutawayController`
**Assembly:** `FlexNet.BusinessFacade.Warehouse.dll`
**Status:** Active
**Keywords:** Determine Putaway Location Container

## Description

This Business Component method returns a list of possible Warehouse Locations with priorities to perform the Putaway transaction. The list is generated based on all of Inventory properties in Container (Product, Product Group, Product Inventory Type, ABC Class, Inventory Status etc.) and the target Warehouse and Facility. If the Container is empty then properties of the Container will be used (Zone and Warehouse Location Type from linked Warehouse Location will be used).
 

 

It is possible to specify additional properties of the BC. To this, the user should do the following:
 
 
- Add dynamic input(s) to this BC (note that the names are case sensitive).  
- Prepare a new revision of the APR_WH.PutawayLocationDetermination Standard Operation and: 
 
- Make this revision a default revision.  
- Create inputs with the same names (case sensitive) as the defined dynamic inputs for this BC.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | ContainerNo | Char | Yes | Container to be put away. |
| Input | Warehouse | Char | Yes | Target Warehouse. |
| Input | Facility | Char | Yes | Target Facility. |
| Input | IgnoredProductIDList | ListofInteger | No | List of product IDs that will be ignored both for the inputted Container and for the Location being determined. The intention of this parameter is to provide a list of Packaging Materials to be ignored. |
| Output | WarehouseLocationIDOutList | ListofInteger | Yes | List of possible Warehouse Location IDs where the Container can be put away. |
| Output | LocationPriorityOutList | ListofInteger | Yes | List of Locations' priorities. |

## Validations

- System validates if ContainerNo is provided.

## System Processing

- If Warehouse and Facility are not provided, they are taken from Container if it is empty or from Inventory in that Container. 
- System checks all Inventory in the given Container that is not ignored. Depending on the kind of Inventory, a different flow will be executed. 
- If there is no Inventory in Container, the system gets Container details from the database and then tries to get Warehouse Location assigned to Container (if there is no Warehouse Location assigned to Container, an error is returned). **APR_WH.PutawayLocationDetermination** Standard Operation is called to retrieve Locations. Destination Warehouse, destination Facility, Zone and Warehouse Location Type (based on Container properties) should be provided as inputs. 
- If Container is homogeneous, the system acts the same way as in the case of **DeterminePutawayLocation **Business Component method. All parameters for **APR_WH.PutawayLocationDetermination **Standard Operation are taken from Inventory properties. Even if no Putaway Warehouse Location are found BC returns success. 
- In the case of Container holding different kinds of Inventory, the system iterates by all Container Inventory which Product ID is not in IgnoredProductIDList, and provides possible Warehouse Locations for each of this Inventory. When finished, the system searches for a common subset of determined Warehouse Locations that will be suitable for all the Inventory. 
- When determining Putaway Warehouse Locations for Inventory from Container, the system checks AllowMixedProducts/AllowMixedLots flags on Warehouse Location Class linked to the given Warehouse Location. 
 
-  

When Warehouse Location does not allow mixed Products then that Warehouse Location is excluded from available putaway Locations if it contains Inventory with Product ID that is not in IgnoredProductIDList and is not equal to Product ID of Inventory to put away.
  
-  

When Warehouse Location does not allow mixed lots then that Warehouse Location is excluded from available putaway Locations if it contains Inventory with Product ID that is not in IgnoredProductIDList and is not equal to Product ID of Inventory to put away and has different Lot Number than Inventory to put away.

## Pre-Conditions

IgnoredProductIDList input parameter is meant to be used for Packaging Materials. Some Locations can disallow mixing different Products or Lots and in such case they would be excluded from the list of possible Putaway Locations for a Container that contains Packaging Materials. To be able to put away such Container to those Locations, the list of Packaging Materials should be passed into the BC as IgnoredProductIDList.
