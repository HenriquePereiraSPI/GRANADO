# GetERPMaterialStock

**Category:** Apriso/Inventory 2
**Class:** `FlexNet.BusinessFacade.Warehouse.WarehouseController`
**Assembly:** `FlexNet.BusinessFacade.Warehouse.dll`
**Status:** Active
**Keywords:** Read Get Query ERP Material Stock Warehouse

## Description

This Business Component method reads a record from the ERP_MATERIAL_STOCK table for specified input parameters. When no record is found, an error is returned.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | ERPSystem | Char | No | The ERP System name. |
| Input | ERPPlant | Char | No | The ERP Plant name. |
| Input | ERPMaterialStock | Char | Yes | The ERP Material Stock location name. |
| Input | ERPStockType | Char | Yes | The ERP Material Stock type. |
| Output | ERPMaterialStockID | Integer | Yes | ID of found record. |

## System Processing

-  

 

System reads a record from ERP_MATERIAL_STOCK table and returns its ID as the output ERPMaterialStockID:
 
  
 
-  

If the record does not exist an error is returned.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| ERP_MATERIAL_STOCK | ID | ERPMaterialStockID |
|  | ERPSystem | ERPSystem |
|  | ERPPlant | ERPPlant |
|  | ERPStockType | ERPStockType |
|  | ERPMaterialStock | ERPMaterialStock |
