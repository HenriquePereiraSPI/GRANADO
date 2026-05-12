# CreateMaintenanceOrder

**Category:** Apriso/Maintenance/Order
**Class:** `FlexNet.BusinessFacade.ResourceMaintenance.MaintenanceOrderManager`
**Assembly:** `FlexNet.BusinessFacade.ResourceMaintenance.dll`
**Status:** Deprecated
**Keywords:** Maintenance;Create;Order

## Description

The purpose of this Business Component method is to create a Maintenance Order.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | ResourceMaintTaskID | Integer | Yes | Resource Maintenance Procedure ID. |
| Input | MaintenanceOrderType | Short | Yes | Maintenance Order Type valid values: 26=Preventive, 27=Reactive. |
| Input | DueDate | DateTime | Yes | Due Date |
| Input | Priority | Integer | No | Order Priority |
| Input | Comment | Char | No | Comment |
| Output | WipOrderNo | Char | Yes | WipOrderNo |
| Output | WipOrderType | Short | Yes | WipOrderType |

## Validations

- System validates that inputted Maintenance Order Type is Valid. 26 = Reactive, and 27 = Preventive. 
- System validates the inputted Maintenance Procedure (ResourceMaintTaskID). 
- System checks if an Order already exists for the Procedure (either has the New or Started status).

## System Processing

- System gets the next Order Sequence number. 
- System creates a new order by invoking the CreateWipOrder_v93 BC (CreateWipOrder_v93 method is invoked with Resource's Facility as an input. If Resource does not have assigned Facility, then the method is invoked with a default Facility of the user logged in). 
- System links the new Maintenance Order to the Maintenance Order Procedure. 
- System updates the NextMaintenanceDate of the Equipment. 
- If the Maintenance Order Procedure has an associated Check List then: 
 
- System verifies CheckList. 
- System creates CheckPointHistory record. 
 
- If a new/started Maintenance Order already exists for the specified Maintenance Procedure of the Equipment and AllowMultipleOpenOrders is set to false, a new Order will not be created. 
- If CancelPreviousOrders is set to true, a new Order will be created and all previous orders for the given Maintenance Procedure will be canceled. Business Component invokes the APR_MNT_CANCEL_PREVIOUS_ORDERS Standard Operation to perform this action. 
- If there already exists a new or started Maintenance Order with the same due date, a new maintenance Order will not be created.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| WIP_ORDER | All fields |  |
| MAINT_ORDER_TASK | All fields |  |
| EQUIPMENT | NextMaintenanceDate | DueDate |
