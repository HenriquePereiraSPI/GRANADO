# SetTriggeredFlag

**Category:** Apriso/Maintenance/Order
**Class:** `FlexNet.BusinessFacade.ResourceMaintenance.MaintenanceOrderManager`
**Assembly:** `FlexNet.BusinessFacade.ResourceMaintenance.dll`
**Status:** Active

## Description

The purpose of this method is to set a Triggered flag of a specific Maintenance procedure. If the Triggered flag is set to true then the TriggeredOn date is updated to the Current UTC time.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | ResourceMaintTaskID | Integer | Yes | The maintenance procedure ID |
| Input | Flag | Boolean | Yes | Flag to set the Triggered field |

## Validations

- Validate the inputted maintenance procedures (ResourceMaintTaskID).

## System Processing

System sets inputted Flag to Triggered.
 

If the Flag equals true, then the TriggeredOn is updated with Current UTC time.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| RESOURCE_MAINT_TASK | Triggered | Flag |
|  | TriggeredOn |  |
