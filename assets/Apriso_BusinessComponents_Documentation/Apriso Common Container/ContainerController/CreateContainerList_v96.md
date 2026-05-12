# CreateContainerList_v96

**Category:** Apriso/Common/Container
**Class:** `FlexNet.BusinessFacade.Common.ContainerController`
**Assembly:** `FlexNet.BusinessFacade.Common.dll`
**Status:** Active
**Keywords:** Create List Containers Warehouse

## Description

This Business Component method creates new Containers in the specified Warehouse Locations. The Containers' parameters are provided as lists. 
 

 

In order to simplify the process of creating multiple Containers with similar parameters, the lists can be of different sizes. For example, to create multiple Containers in the same Warehouse Location, the user just needs to pass the list of Container Numbers into the ContainerNoList Input and just one element into the WarehouseLocationIDList Input. The value will be repeated for every Container created, and thus all of the created Containers will be placed in the same Warehouse Location. 
 

 

Please note that the BC method supports either full, one, or zero (which applies to the ContainerClassIDList and ContainerStatusList Inputs) element lists. For example, if the user needs to create a number of Containers in the same Warehouse Location and with the same Container Class but does not want to populate the Container Status, then the WarehouseLocationIDList and ContainerClassIDList Inputs can be either one or full element lists (with repeated values) and ContainerStatusList should be an empty list.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | ContainerNoList | ListofChar | Yes | The list of Container numbers. |
| Input | WarehouseLocationIDList | ListofInteger | Yes | The list of Warehouse Location record IDs. |
| Input | ContainerClassIDList | ListofInteger | No | The list of Class IDs of the Containers. |
| Input | ContainerStatusList | ListofInteger | No | The list of statuses of the Containers. |

## Validations

- The system checks if the list of Containers contains at least one element.  
- The system checks if the lists of Containers and Warehouse Locations have the same length or the Warehouse Location list contains only one element. 
- If the Container Class or Container Status lists are provided, the system checks if their length is equal with the Containers list length or if it is a one element list.

## System Processing

- If the Warehouse Location list contains only one element, then its value is used for all the Containers created.  
- If the Container Class ID list contains only one element, then its value is used for all the Containers created.  
- If the Container Status list contains only one element, then its value is used for all the Containers created. 
- The system inserts new records into the CONTAINER table.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| CONTAINER | Container | Iterated through ContainerNoList. |
|  | WarehouseLocationID | Iterated through WarehouseLocationIDList. |
|  | ContainerClassID | Iterated through ContainerClassIDList, null if not provided. |
|  | ContainerStatus | Iterated through ContainerStatusList, null if not provided. |
