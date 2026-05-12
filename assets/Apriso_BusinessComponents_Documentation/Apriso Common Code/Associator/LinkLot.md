# LinkLot

**Category:** Apriso/Common/Code
**Class:** `FlexNet.BusinessFacade.EPC.Associate.Associator`
**Assembly:** `FlexNet.BusinessFacade.EPC.Associate.dll`
**Status:** Active

## Description

Associates a tag to a lot number.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | TagID | Integer | Yes | DELMIA Apriso TagID |
| Input | LotNo | Char | Yes | Lot Number |
| Input | ProductID | Integer | Yes | ProductID |

## System Processing

- System validates LotNo 
- System checks if Tag is already linked to another LotNo 
- If Epc_Tag.ProductID != null 
 
- If Epc_Tag.ProductID != ProcuctID 
 
- Tag is already linked to another Product 
 
 
- System updates Epc_Tag.ProductID and Epc_Tag.LotNo

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| EPC_TAG |  |  |
