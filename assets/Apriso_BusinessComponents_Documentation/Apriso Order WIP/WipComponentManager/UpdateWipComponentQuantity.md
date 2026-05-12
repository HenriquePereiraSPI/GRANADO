# UpdateWipComponentQuantity

**Category:** Apriso/Order/WIP
**Class:** `FlexNet.BusinessFacade.Manufacturing.WipComponentManager`
**Assembly:** `FlexNet.BusinessFacade.Manufacturing.dll`
**Status:** Active

## Description

This method allows process authors to update wip_component quantity.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | WipComponentID | Integer | Yes | WipComponent ID |
| Input | Quantity | Decimal | No | Quantity |

## Validations

- System validates WipComponent record based on WipComponentID input parameter.

## System Processing

-  System updates WipComponent.IssuedQuantity with the Quantity input parameter.  
-  System populate Transaction History XML.

## Pre-Conditions

WipComponentrecord must exist.

## History Recording in Production

Transaction History XML required.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| WIP_COMPONENT | IssuedQuantity | Quantity |
