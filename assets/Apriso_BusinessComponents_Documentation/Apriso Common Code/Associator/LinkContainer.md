# LinkContainer

**Category:** Apriso/Common/Code
**Class:** `FlexNet.BusinessFacade.EPC.Associate.Associator`
**Assembly:** `FlexNet.BusinessFacade.EPC.Associate.dll`
**Status:** Active

## Description

Associates a tag to a container.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | TagID | Integer | Yes | DELMIA Apriso TagID |
| Input | ContainerNo | Char | Yes | Container |

## Validations

- System validates Container 
- System checks if tag is already linked to another Container 
- Systemupdates Epc_Tag.Container

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| EPC_TAG | All fields |  |
