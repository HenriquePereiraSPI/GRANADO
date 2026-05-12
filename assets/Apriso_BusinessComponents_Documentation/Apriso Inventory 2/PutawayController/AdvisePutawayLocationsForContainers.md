# AdvisePutawayLocationsForContainers

**Category:** Apriso/Inventory 2
**Class:** `FlexNet.BusinessFacade.Warehouse.PutawayController`
**Assembly:** `FlexNet.BusinessFacade.Warehouse.dll`
**Status:** Active
**Keywords:** Putaway Location Warehouse Container

## Description

- This BC designates the best order in which Warehouse locations are to be walked for a list of Containers that are to be put away. The BC uses the APR_WH.GetWarehouseLocationDifferences Standard Operation to retrieve the values describing the cost of transition between the Container's target Warehouse locations (the default implementation uses the sum of absolute difference between the Warehouse location coordinates). 
- The starting Warehouse location (from which the optimal route will be calculated) is assumed to be the Warehouse location to which all the Containers are linked. 
- The Input list contains the permitted Warehouse locations–Container pairs. 
- The Output list contains the designated Warehouse location-Container pairs in which the first element is the Warehouse location that is to be visited first and the last element is the Warehouse location that ends the path. 
- The timeout parameter determines when to stop the calculations of the optimal path and return the best route (in the case of more complex problems, for example, more than 11 Containers and 1 Warehouse Location per Container, the execution time may be very long). If the timeout value is not provided (set to zero), then 80% of the Function Interpreter timeout is used.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | ContainerNoList | ListofChar | Yes | The list of Containers to be put away. |
| Input | WarehouseLocationIDList | ListofInteger | Yes | The list of target Warehouse location IDs related to the Containers. The locations of Containers may be determined and sorted by the DeterminePutawayLocationForContainer and SortPutawayLocationForContainer BCs. |
| Input | Timeout | Integer | No | The execution timeout value in seconds. If it is zero, 80% of the Function Interpreter timeout is used. |
| Output | ContainerNoOutList | ListofChar | Yes | The list of Containers related to the outputted location ID list. |
| Output | WarehouseLocationIDOutList | ListofInteger | Yes | The list of Warehouse location IDs in the suggested visiting order. |

## Validations

- The system validates if the length of WarehouseLocationIDList and ContainerNoList are equal.  
- The system checks if all the inputted Warehouse location-Container pairs are unique. 
- The system validates if all the Containers are valid and are in the same Warehouse location. 
- The system validates if all the Warehouse location IDs exist.

## System Processing

- The system gets the starting Warehouse Location and calls the APR_WH.GetWarehouseLocationsDifferences Standard Operation in order to retrieve the differences between all the inputted and starting Warehouse locations. 
- The system uses a simple algorithm that searches for the best route. 
- The system returns a list of Warehouse location-Container pairs indicating the Warehouse location visiting path and information on where each Container is meant to be put away.
