# CreateToolingOrder

**Category:** Apriso/Maintenance/Order
**Class:** `FlexNet.BusinessFacade.ResourceMaintenance.ToolingOrderManager`
**Assembly:** `FlexNet.BusinessFacade.ResourceMaintenance.dll`
**Status:** Active

## Description

The purpose of this Business Component is to create a tooling order. If a new/started tooling order already exists for the specified Resource ID, a new other will not be created. If the existing order is in New status, its DueDate and Priority is updated

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | ResourceID | Integer | Yes | Resource ID |
| Input | ToolingOrderType | Short | Yes | Tooling Order Type Valid Values 28=Tooling |
| Input | DueDate | DateTime | Yes | Due Date |
| Input | Priority | Integer | No | Order Priority |
| Input | Comment | Char | No | Comment |
| Output | WipOrderNo | Char | Yes | WipOrderNo |
| Output | WipOrderType | Short | Yes | WipOrderType |

## Validations

- System Validate that inputted Tooling Order Type is Valid. 28 = Tooling. 
- Validate Resource. 
- Check if order already exists for procedure(either has the status in "New" or "Start").

## System Processing

- Get Next Order Sequence number. 
- Create an new order.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| WIP_ORDER | All fields |  |
