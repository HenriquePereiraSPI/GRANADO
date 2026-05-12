# LinkWarehouseLocation

**Category:** Apriso/Common/Code
**Class:** `FlexNet.BusinessFacade.EPC.Associate.Associator`
**Assembly:** `FlexNet.BusinessFacade.EPC.Associate.dll`
**Status:** Active

## Description

Associates an EPC tag to a warehouse location.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | TagID | Integer | Yes | DELMIA Apriso TagID |
| Input | WarehouseLocationID | Integer | Yes | WarehouseLocationID |

## System Processing

- System validates WarehouseLocation 
- System checks if tag is already linked to another WarehouseLocation 
- If tag linked to facility 
 
- System validates WarehouseLocation in the same Facility 
 
- If tag linked to warehouse 
 
- System validates WarehouseLocation in the same Warehouse 
 
- System updates Epc_Tag.WarehouseLocationID

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| EPC_TAG |  |  |
