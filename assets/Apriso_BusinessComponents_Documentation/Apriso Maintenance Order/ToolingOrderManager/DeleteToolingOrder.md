# DeleteToolingOrder

**Category:** Apriso/Maintenance/Order
**Class:** `FlexNet.BusinessFacade.ResourceMaintenance.ToolingOrderManager`
**Assembly:** `FlexNet.BusinessFacade.ResourceMaintenance.dll`
**Status:** Active

## Description

The purpose of this Business Component is to deletes an tooling order. The order can only be deleted if its status is still New.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | ToolingOrderNo | Char | Yes | ToolingOrderNo |
| Input | ToolingOrderType | Short | Yes | ToolingOrderType |

## Validations

- System validate Wip Order exist 
- System validate wip order is still in New Status

## System Processing

- Invoke standard operation "APR_TOL_BEF_DELETE_ORDER" 
- It will skip if there is no such operation exist. 
 
- Parameter: ToolingOrderN
 ToolingOrderTyp 
 
- Delete associated WipReqResource records  
- Delete associated TaskMaterialUse records 
- Delete associated WipContentDetail records 
- Delete associated WipOperationStep records 
- Delete associated WipOperationSequence records 
- Delete associated WipContent records 
- Delete associated WipOperation records 
- Delete associated WipOrder record

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| WIP_REQ_RESOURCE | All fields | ToolingOrderNo, ToolingOrderType |
| TASK_MATERIAL_USE | All fields | ToolingOrderNo, ToolingOrderType |
| WIP_CONTENT_DETAIL | All fields | ToolingOrderNo, ToolingOrderType |
| WIP_OPERATION_STEP | All fields | ToolingOrderNo, ToolingOrderType |
| WIP_OPERATION_SEQUENCE | All fields | ToolingOrderNo, ToolingOrderType |
| WIP_CONTENT | All fields | ToolingOrderNo, ToolingOrderType |
| WIP_OPERATION | All fields | ToolingOrderNo, ToolingOrderType |
| WIP_ORDER | All fields | ToolingOrderNo, ToolingOrderType |
