# UpdateQuantity

**Category:** Apriso/Order/WIP
**Class:** `FlexNet.BusinessFacade.Manufacturing.WipComponentManager`
**Assembly:** `FlexNet.BusinessFacade.Manufacturing.dll`
**Status:** Active

## Description

This method allows process authors to update component and wip_component quantities.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | WipComponentID | Integer | Yes | WipComponent ID |
| Input | Quantity | Decimal | No | Quantity |

## Validations

- System validates WipComponent record based on WipComponentID input parameter. 
- System validates Component record based on the WipComponent record's ComponentID.

## System Processing

-  System updates WipComponent.IssuedQuantity with the Quantity input parameter.  
-  System updates Component,Quantity with the Quantity input parameter.  
-  System populates Transaction History XML.

## Pre-Conditions

WipComponent and Component record must exist.

## History Recording in Production

Transaction History XML required.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| WIP_COMPONENT | IssuedQuantity | Quantity |
| COMPONENT | Quantity | Quantity |
