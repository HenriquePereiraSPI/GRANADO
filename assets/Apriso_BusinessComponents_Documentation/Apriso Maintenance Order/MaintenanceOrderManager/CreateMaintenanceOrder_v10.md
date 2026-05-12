# CreateMaintenanceOrder_v10

**Category:** Apriso/Maintenance/Order
**Class:** `FlexNet.BusinessFacade.ResourceMaintenance.MaintenanceOrderManager`
**Assembly:** `FlexNet.BusinessFacade.ResourceMaintenance.dll`
**Status:** Active
**Keywords:** Maintenance;Create;Order

## Description

The purpose of this Business Component method is to create a new Maintenance Order.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | ResourceMaintTaskID | Integer | Conditional | Resource Maintenance Procedure ID. |
| Input | ResourceMaintTaskScheduleID | Integer | Conditional | Resource Maintenance Procedure Schedule ID. |
| Input | MaintenanceOrderType | Short | No | Maintenance Order Type valid values: 26=Preventive, 27=Reactive. |
| Input | DueDate | DateTime | Yes | Due Date |
| Input | Priority | Integer | No | Order Priority |
| Input | Comment | Char | No | Comment |
| Output | WipOrderNo | Char | Yes | WipOrderNo |
| Output | WipOrderType | Short | Yes | WipOrderType |

## Validations

- System validates if inputted Maintenance Order Type is correct: Reactive (26) or Preventive (27) if it is provided. 
- System validates if either ResourceMaintTaskID or ResourceMaintTaskScheduleID is provided. 
-  System validates if inputted Maintenance Procedure Schedule (ResourceMaintTaskScheduleID) exists if it is provided.  
- System validates if inputted Maintenance Procedure (ResourceMaintTaskID) exists. 
- If ResourceMaintTaskScheduleID is provided, system checks that new or started Maintenance Order does not exist for the same original Due Date (stored in Scheduled Start Date of WIP Order) and for the same **Schedule**.  
- If ResourceMaintTaskID is provided, system checks that new or stared Maintenance Order does not exist for the same original Due Date (stored in Scheduled Start Date of WIP Order) and for the same **Procedure**(with Schedule not specified ).

## System Processing

- If Maintenance Order Type input is not populated, the system sets Type based on Maintenance Procedure. 
- System gets the next Order Sequence number. 
- System creates a new Order by invoking the CreateWipOrder_v96 BC (CreateWipOrder_v96 method is invoked with Resource Facility as an input. If Resource does not have Facility assigned, then the method is invoked with a default Facility of the user logged in). 
- System links the new Maintenance Order to the Maintenance Order Procedure and the Schedule (if ResourceMaintTaskScheduleID is provided). 
- System updates the NextMaintenanceDate of the Equipment. 
- If the Maintenance Order Procedure has an associated Check List then: 
 
- System verifies CheckList. 
- System creates CheckPointHistory record. 
 
- If there already exists a new or started Maintenance Order with the same Due Date and matching Procedure or Schedule, an Order will not be created.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| WIP_ORDER | All fields |  |
| MAINT_ORDER_TASK | All fields |  |
| EQUIPMENT | NextMaintenanceDate | DueDate |
