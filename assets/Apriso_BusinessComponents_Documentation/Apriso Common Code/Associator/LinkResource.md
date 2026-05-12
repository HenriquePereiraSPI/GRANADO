# LinkResource

**Category:** Apriso/Common/Code
**Class:** `FlexNet.BusinessFacade.EPC.Associate.Associator`
**Assembly:** `FlexNet.BusinessFacade.EPC.Associate.dll`
**Status:** Active

## Description

Associates a tag to a resource.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | TagID | Integer | Yes | DELMIA Apriso TagID |
| Input | ResourceID | Integer | Yes | ResourceID |

## System Processing

- System validates ResourceID 
- System checks if tag is already linked to another ResourceID 
- System updates Epc_Tag.ResourceID

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| EPC_TAG |  |  |
