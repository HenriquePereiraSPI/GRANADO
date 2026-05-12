# CompleteToolingOrder

**Category:** Apriso/Maintenance/Order
**Class:** `FlexNet.BusinessFacade.ResourceMaintenance.ToolingOrderManager`
**Assembly:** `FlexNet.BusinessFacade.ResourceMaintenance.dll`
**Status:** Active

## Description

This Business Component method is used to close a Tooling Order. The order must be in the Started status in order to be closed .

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | ToolingOrderNo | Char | Yes | The Tooling Order number. |
| Input | ToolingOrderType | Short | Yes | The Tooling Order type. |

## Validations

- The system validates that ToolingOrderType is 28 = Tooling. 
- The system validates that the Tooling Order exists.

## System Processing

- The system completes the Tooling Order. 
- The system invokes the APR_TOL_AFT_COMPLETE_ORDER Standard Operation with the parameters ToolingOrderNo and ToolingOrderType.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| WIP_ORDER | All fields | ToolingOrderNo, ToolingOrderType |
