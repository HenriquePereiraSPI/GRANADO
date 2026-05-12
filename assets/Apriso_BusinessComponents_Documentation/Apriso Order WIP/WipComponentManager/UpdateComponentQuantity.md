# UpdateComponentQuantity

**Category:** Apriso/Order/WIP
**Class:** `FlexNet.BusinessFacade.Manufacturing.WipComponentManager`
**Assembly:** `FlexNet.BusinessFacade.Manufacturing.dll`
**Status:** Active

## Description

This method allows process authors to update component quantity.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | ComponentID | Integer | Yes | Component ID |
| Input | Quantity | Decimal | No | Quantity |

## Validations

- System validates Component record based on ComponentID input parameter.

## System Processing

-  System updates Component Quantity with the Quantity input parameter.

## Pre-Conditions

Component record must exist.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| COMPONENT | Quantity | Inputted Quantity |
