# CompleteToolingOperation

**Category:** Apriso/Maintenance/Order
**Class:** `FlexNet.BusinessFacade.ResourceMaintenance.ToolingOrderManager`
**Assembly:** `FlexNet.BusinessFacade.ResourceMaintenance.dll`
**Status:** Active

## Description

This Business Component method is used to close a tooling Operation.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | ToolingOrderNo | Char | Yes | The Tooling Order number. |
| Input | ToolingOrderType | Short | Yes | The Tooling Order type. |
| Input | ToolingOprSequenceNo | Char | Yes | The Tooling Operation Sequence Number. |

## Validations

- The system validates that ToolingOrderType is 28 = Tooling. 
- The system validates that the Tooling Order exists. 
- The system validates that the Tooling Operation exists.

## System Processing

- The system completes theTooling/WIP Operation.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| WIP_OPERATION | OperationStatus | ToolingOrderNo, ToolingOrderType,ToolingOprSequenceNo |
