# CompleteMaintenanceOrder

**Category:** Apriso/Maintenance/Order
**Class:** `FlexNet.BusinessFacade.ResourceMaintenance.MaintenanceOrderManager`
**Assembly:** `FlexNet.BusinessFacade.ResourceMaintenance.dll`
**Status:** Active

## Description

This Business Component method is used to close a Maintenance Order. The order must be in the Started status in order to be closed.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | MaintenanceOrderNo | Char | Yes | The Maintenance Order number. |
| Input | MaintenanceOrderType | Short | Yes | The Maintenance Order type. |

## Description Parameters

| Name | Type | Description |
|------|------|-------------|
| ReasonCode | Char | The Reason Code of the order completion. |
| Comment | Char | A comment for the Reason Code. |

## Validations

- If the order requires verification, the system validates the employee login and saves the signature of this employee.  
- The system validates that MaintenanceOrderType is either 26 = Preventive or 27= Reactive. 
- The system validates that Maintenance Order exists. 
- The system validates that MaintOrderTask exists. 
- The system validates that ResourceMaintTask exists. 
- The system validates that ReasonCode exists if it is provided. 
- The system validates that ReasonCode has ReasonType = 11 (Plant Maintenance) and Usage = 8 (Maintenance).

## System Processing

- The system resets the utilization counters. 
- The system finds the Equipment linked to the Resource and updates LastMaintenanceDate to UtcNow. 
- The system completes the Maintenance Order. 
- The system invokes the APR_MNT_AFT_COMPLETE_ORDER Standard Operation with the parameters MaintenanceOrderNo and MaintenanceOrderType.  
- If ReasonCode or Comment is provided, the Maintenance Order is updated with this information.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
|  | ItemProducedCount | MaintenanceOrderNo, MaintenanceOrderType |
|  | UtilizationHoursCount | MaintenanceOrderNo, MaintenanceOrderType |
|  | UtilizationCyclesCount | MaintenanceOrderNo, MaintenanceOrderType |
| EQUIPMENT_ | LastMaintenanceDate | MaintenanceOrderNo, MaintenanceOrderType |
| WIP_ORDER | All fields | MaintenanceOrderNo, MaintenanceOrderType |
| MAINT_ORDER_TASK | ReasonCode | From the BC Dynamic Input |
|  | Comment | From the BC Dynamic Input |
