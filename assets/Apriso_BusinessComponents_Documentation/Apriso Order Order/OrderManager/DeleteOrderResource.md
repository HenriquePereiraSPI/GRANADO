# DeleteOrderResource

**Category:** Apriso/Order/Order
**Class:** `FlexNet.BusinessFacade.Common.OrderManager`
**Assembly:** `FlexNet.BusinessFacade.Common.dll`
**Status:** Active

## Description

The purpose of this Business Component is to delete row from ORDER_RESOURCE table

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | OrderResourceIDList | ListofInteger | Yes | Order Resource ID numbers to be deleted |

## Validations

System checks that the inputted Order Resources exists.

## System Processing

- System validates the inputted Order Resource ID is valid in the ORDER_RESOURCE table.

## Pre-Conditions

Order Resource must exist.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| ORDER_RESOURCE | ID | Inputted Order Resource ID(Required) |
