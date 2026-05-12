# LinkAll

**Category:** Apriso/Common/Code
**Class:** `FlexNet.BusinessFacade.EPC.Associate.Associator`
**Assembly:** `FlexNet.BusinessFacade.EPC.Associate.dll`
**Status:** Active

## Description

Can be used to associate an EPC tag to multiple entities. Any entity provided will be validated and linked to the tag.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | TagID | Integer | Yes |  |
| Input | SerialNo | Char | No |  |
| Input | LotNo | Char | No |  |
| Input | ProductID | Integer | No |  |
| Input | Container | Char | No |  |
| Input | ResourceID | Integer | No |  |
| Input | Facility | Char | No |  |
| Input | Warehouse | Char | No |  |
| Input | WarehouseLocationID | Integer | No |  |
| Input | WorkCenter | Char | No |  |

## System Processing

- System unlinks any association to the Tag 
- If ProductID > 0 
 
- LinkProduct 
 
- If Serial != Empty 
 
- LinkSerial 
 
- If LotNo != Empty 
 
- LinkLot 
 
- If Container != Empty 
 
- LinkContainer 
 
- If ResourceID > 0 
 
- LinkResource 
 
- If Facility != Empty 
 
- LinkFacility 
 
- If Warehouse != Empty 
 
- LinkWarehouse 
 
- If WarehouseLocationID > 0 
 
- LinkWarehouseLocation 
 
- If WorkCenter != Empty 
 
- LinkWorkCenter

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| EPC_TAG | Impacted fields are based on inputs. |  |
