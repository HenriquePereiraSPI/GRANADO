# CompleteMaintenanceOperation

**Category:** Apriso/Maintenance/Order
**Class:** `FlexNet.BusinessFacade.ResourceMaintenance.MaintenanceOrderManager`
**Assembly:** `FlexNet.BusinessFacade.ResourceMaintenance.dll`
**Status:** Active

## Description

This Business Component method is used to close a Maintenance Operation.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | MaintenanceOrderNo | Char | Yes | The Maintenance Order number. |
| Input | MaintenanceOrderType | Short | Yes | The Maintenance Order type. |
| Input | MaintenanceOprSequenceNo | Char | Yes | The Maintenance Operation Sequence Number. |
| Input | TaskID | Integer | No | The task ID. |

## Validations

- The system validates that MaintenanceOrderType is either 26 = Preventive or 27= Reactive. 
- The system validates that the Maintenance Order exists. 
- The system validates that the Maintenance Operation is exists.

## System Processing

- The system completes the Maintenance/WIP Operation.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| WIP_OPERATION | OperationStatus | MaintenanceOrderNo, MaintenanceOrderType, MaintenanceOprSequenceNo |
| TASK | All fields |  |
