# ImportBOM

**Category:** Apriso/Common/Resource
**Class:** `FlexNet.BusinessFacade.Maintenance.EquipmentHierarchyManager`
**Assembly:** `FlexNet.BusinessFacade.Maintenance.dll`
**Status:** Active
**Keywords:** Resource, Component, Import

## Description

This Business Component method imports Product BOM Components to a specific resource.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | ProductId | Integer | Yes | Product ID |
| Input | BomNumber | ListofChar | Yes | BOM Number |
| Input | Facility | ListofChar | Yes | Facility |
| Input | ResourceId | Integer | Yes | Destination Resource ID |

## Validations

- The system validates if Product exists. 
- The system validates if Resource exists. 
- The system validates if Product BOM exists.

## System Processing

The system validates parameters data. If it does not exist, the system generates a failure Outcome.
 
 
- Get all BOM items for specified ProductId, BomNumber, Facility. 
- Copy the components to the Resource.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| COMPONENT |  |  |
| RESOURCE_COMPONENT |  |  |
