# RemoveResourceComponents

**Category:** Apriso/Common/Resource
**Class:** `FlexNet.BusinessFacade.Maintenance.EquipmentHierarchyManager`
**Assembly:** `FlexNet.BusinessFacade.Maintenance.dll`
**Status:** Active
**Keywords:** Resource, Component, Remove

## Description

This Business Component method removes Resource Components for a specified Resource and removes associated records from the RESOURCE_MAINT_TASK_COMP table and the COMPONENT table.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | ResourceId | Integer | Yes | Resource ID |
| Input | CancelOrderReasonCode | ListofChar | Yes | Cancel order reason code |

## Validations

The system validates if Resource exists.

## System Processing

- If data is invalid, the system generates a failure Outcome. 
- If data is valid: 
 
- The system finds the Resource based on ResourceId.  
- The system finds all related Resource Components with Resource entity. 
- For each Resource Component the related Maintenance Procedures are disabled, all related records are removed from the RESOURCE_MAINT_TASK_COMP table and the COMPONENT table and the Resource Component is removed.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| RESOURCE_COMPONENT |  |  |
| COMPONENT |  |  |
| RESOURCE_MAINT_TASK_COMP |  |  |
| RESOURCE_MAINT_TASK |  |  |
