# DeleteEmptyContainerList

**Category:** Apriso/Common/Container
**Class:** `FlexNet.BusinessFacade.Common.ContainerController`
**Assembly:** `FlexNet.BusinessFacade.Common.dll`
**Status:** Active
**Keywords:** Container, Empty, Delete

## Description

This Business Component method deletes Containers and their child Containers.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | ContainerList | ListofChar | Yes | Containers to be deleted. |

## Validations

-  

System validates that every specified Container in ContainerList exists.

## System Processing

- This BC deletes a list of Containers and their child Containers. The process can succeed only if none of these Containers are linked to any DELMIA Apriso entity. Here are a few examples when the BC will fail: 
 
- There is Inventory inside a Container or any sub-container. 
- Container was received/issued on a Wip Order. 
-  

There is a Quality Defect reported against a given Container.
  
 
-  

The BC should be used only if there is certainty that none of the Containers and Sub-Containers are referenced anywhere.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
|  |  | Container |
