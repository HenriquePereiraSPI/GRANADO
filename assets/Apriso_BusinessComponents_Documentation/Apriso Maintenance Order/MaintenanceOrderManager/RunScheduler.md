# RunScheduler

**Category:** Apriso/Maintenance/Order
**Class:** `FlexNet.BusinessFacade.ResourceMaintenance.MaintenanceOrderManager`
**Assembly:** `FlexNet.BusinessFacade.ResourceMaintenance.dll`
**Status:** Deprecated

## Description

The purpose of this Business Component method is to create a scheduled Maintenance Order. If EquipmentID is specified, then a Maintenance Order will be created only for the Maintenance Procedure of the specified Equipment.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | EquipmentID | Integer | No | EquipmentID |
| Input | StartDate | DateTime | No | Start date |
| Input | EndDate | DateTime | No | End Date |
| Input | SkipWeekends | Boolean | No | If true, then Orders will not be created on weekends. |

## System Processing

- System gets MaintenanceCalendar. 
- System checks if the EquipmentID is specified. 
 
- If it equals 0, then the below steps are carried out for all the Equipment. 
- If it does not equal 0, then the below steps are carried out only for the specified Equipment. 
 
- System creates scheduled Maintenance Order only if the Maintenance Procedure has a True value for the ActionCreateOrder flag. 
- System invokes a Standard Operation only if the Maintenance Procedure has True value for the ActionStandardOperation flag. 
- System generates an alert only if the Maintenance Procedure has True value for the ActionGenerateAlert flag. 
- System updates the Maintenance Procedure. 
- If there already exists a completed Maintenance Order with the same due date, then the system checks the value of the RecreateCompletedMaintOrder key in the Central Configuration. If it is set to True, then the Maintenance Order is recreated. 
- If a new/started Maintenance Order already exists for the specified Maintenance Procedure of the Equipment and AllowMultipleOpenOrders is set to false on the Maintenance Procedure M&M screen in the DELMIA Apriso Portal, a new Order will not be created. 
- If CancelPreviousOrders is set to true on the Maintenance Procedure M&M screen in the DELMIA Apriso Portal, a new Order will be created and all previous orders for the given Maintenance Procedure will be canceled. Business Component invokes the APR_MNT_CANCEL_PREVIOUS_ORDERS Standard Operation to perform this action. 
- If there already exists a new or started Maintenance Order with the same due date, a new Maintenance Order will not be created. 
- During the creation of the Maintenance Order, ScheduledTeam and ActualTeam of the Maintenance Order are copied from ScheduledTeam of the Maintenance Procedure. ResourceFacility of the Maintenance Order is copied from ResourceFacility of the Maintenance Procedure.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| WIP_ORDER | All fields |  |
| Alert | All fields |  |
| Operation | All fields |  |
