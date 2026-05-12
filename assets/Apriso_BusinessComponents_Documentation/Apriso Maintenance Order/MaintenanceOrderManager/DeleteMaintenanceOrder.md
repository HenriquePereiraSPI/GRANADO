# DeleteMaintenanceOrder

**Category:** Apriso/Maintenance/Order
**Class:** `FlexNet.BusinessFacade.ResourceMaintenance.MaintenanceOrderManager`
**Assembly:** `FlexNet.BusinessFacade.ResourceMaintenance.dll`
**Status:** Active

## Description

The purpose of this Business Component is to deletes an maintenance order. The order can only be deleted if its status is still New.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | MaintenanceOrderNo | Char | Yes | MaintenanceOrderNo |
| Input | MaintenanceOrderType | Short | Yes | MaintenanceOrderType |

## Validations

- System validate Wip Order exist. 
- System validate wip order is still in New Status.

## System Processing

- Invoke standard operation "APR_MNT_BEF_DELETE_ORDER". 
- It will skip if there is no such operation exist. 
 
- Parameter: MaintenanceOrderNo
 MaintenanceOrderType 
 
- Delete Check History data. 
- Delete Check Point History. 
- Delete Maintenance Order Procedure. 
- Delete associated WipReqResource records. 
- Delete associated TaskMaterialUse records. 
- Delete associated WipContentDetail records. 
- Delete associated WipOperationStep records. 
- Delete associated WipOperationSequence records. 
- Delete associated WipContent records. 
- Delete associated WipOperation records. 
- Delete associated WipOrder record.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| CHECK_LIST_HISTORY | All fields | MaintenanceOrderNo, MaintenanceOrderType |
| CHECK_POINT_HISTORY | All fields | MaintenanceOrderNo, MaintenanceOrderType |
| MAINT_ORDER_TASK | All fields | MaintenanceOrderNo, MaintenanceOrderType |
| WIP_REQ_RESOURCE | All fields | MaintenanceOrderNo, MaintenanceOrderType |
| TASK_MATERIAL_USE | All fields | MaintenanceOrderNo, MaintenanceOrderType |
| WIP_CONTENT_DETAIL | All fields | MaintenanceOrderNo, MaintenanceOrderType |
| WIP_OPERATION_STEP | All fields | MaintenanceOrderNo, MaintenanceOrderType |
| WIP_OPERATION_SEQUENCE | All fields | MaintenanceOrderNo, MaintenanceOrderType |
| WIP_CONTENT | All fields | MaintenanceOrderNo, MaintenanceOrderType |
| WIP_OPERATION | All fields | MaintenanceOrderNo, MaintenanceOrderType |
| WIP_ORDER | All fields | MaintenanceOrderNo, MaintenanceOrderType |
