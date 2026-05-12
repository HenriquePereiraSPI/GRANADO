# RemoveByID

**Category:** Apriso/Order/WIP
**Class:** `FlexNet.BusinessFacade.Manufacturing.WipComponentManager`
**Assembly:** `FlexNet.BusinessFacade.Manufacturing.dll`
**Status:** Active

## Description

This method allows process authors to delete wip_component records.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | WipComponentID | Integer | Yes | ID of WipComponent to be deleted. |

## Validations

System validates WipComponent record based on WipComponentID input parameter

## System Processing

-  System invokes Standard Operation "APR_WIPC_BEFORE_DELETE".  
-  System populates Transaction History XML.  
-  System deletes WipComponent.  
-  System deletes Component, if exists.

## Pre-Conditions

WipComponentrecord must exist.

## History Recording in Production

Transaction History XML required.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| WIP_COMPONENT | ALL | WipComponentID |
| COMPONENT | ALL | WIP_COMPONENT.ComponentID |
