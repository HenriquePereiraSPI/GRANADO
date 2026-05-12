# LinkWorkCenter

**Category:** Apriso/Common/Code
**Class:** `FlexNet.BusinessFacade.EPC.Associate.Associator`
**Assembly:** `FlexNet.BusinessFacade.EPC.Associate.dll`
**Status:** Active

## Description

Associates an EPC tag to a work center.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | TagID | Integer | Yes | DELMIA Apriso TagID |
| Input | WorkCenter | Char | Yes | WorkCenter |

## System Processing

- System validates Work Center 
- System checks if Tag is already linked to another Work Center 
- System updates Epc_Tag.WorkCenter

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| EPC_TAG |  |  |
