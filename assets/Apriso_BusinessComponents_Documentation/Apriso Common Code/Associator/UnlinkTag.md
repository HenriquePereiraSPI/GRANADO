# UnlinkTag

**Category:** Apriso/Common/Code
**Class:** `FlexNet.BusinessFacade.EPC.Associate.Associator`
**Assembly:** `FlexNet.BusinessFacade.EPC.Associate.dll`
**Status:** Active

## Description

It deletes any associations that might exist for a tag.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | TagID | Integer | Yes | DELMIA Apriso TagID |

## System Processing

- System validates Tag 
- System sets Epc_Tag.Facility = null 
- System sets Epc_Tag.SerialNo = null 
- System sets Epc_Tag.LotNo = null 
- System sets Epc_Tag.Container = null 
- System sets Epc_Tag.ProductID = null 
- System sets Epc_Tag.Warehouse = null 
- System sets Epc_Tag.WarehouseLocation = null 
- System sets Epc_Tag.ResourceID = null 
- System sets Epc_Tag.WorkCenter = null

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| EPC_TAG |  |  |
