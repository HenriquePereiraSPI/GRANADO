# LinkWarehouse

**Category:** Apriso/Common/Code
**Class:** `FlexNet.BusinessFacade.EPC.Associate.Associator`
**Assembly:** `FlexNet.BusinessFacade.EPC.Associate.dll`
**Status:** Active

## Description

Associates an EPC tag to a warehouse.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | TagID | Integer | Yes | DELMIA Apriso TagID |
| Input | Facility | Char | Yes | Facility |
| Input | Warehouse | Char | Yes | Warehouse |

## System Processing

- System validates Warehouse 
- System checks if Tag is already linked to another Warehouse 
- If Epc_Tag.Faclity != null 
 
- If Epc_Tag.Faclity != Facility 
 
- Tag is already linked to another Facility 
 
 
- System updates Epc_Tag.Warehouse

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| EPC_TAG |  |  |
