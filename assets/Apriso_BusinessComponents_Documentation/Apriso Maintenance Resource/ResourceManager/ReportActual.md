# ReportActual

**Category:** Apriso/Maintenance/Resource
**Class:** `FlexNet.BusinessFacade.ResourceMaintenance.ResourceManager`
**Assembly:** `FlexNet.BusinessFacade.ResourceMaintenance.dll`
**Status:** Active

## Description

This methods updates the utilization counters for all maintenance procedures linked to a Resource. The counters are updated with the difference between current and previous reading. It can be used to update utilization counters for all Equipments in a given Work Center or a Resource.
 

 

When Work Center is specified, the method does not use ResourceID and Cascade fields. It updates the utilization counters for all Resources located at the Work Center and any Resource linked to them through resource_resource_link/resource_collection.
 

 

When Work Center is not specified and ResourceID is specified, it updates utilization counters for the specified Resource. If the cascade flag is true, it also updates all Resources linked to the specified Resources through resource_resource_link/resource_collection

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | WorkCenter | Char | Conditional | Work Center |
| Input | ResourceID | Integer | Conditional | Resource ID |
| Input | Quantity | Decimal | No | Quantity |
| Input | RunningHours | Decimal | No | Running Hours |
| Input | Cycles | Decimal | No | Cycles |
| Input | Cascade | Boolean | No | Has meaning only when ResourceID has been specified |

## Validations

- If work center has been provided, then the system validates Work Center. 
- If work center has not been provided, then the system validates ResourceID.

## System Processing

- If the Work Center has been provided: 
 
- system validates WorkCenter, 
- system sets Cascade to true (Work Center mode is always cascade), 
- system loads the list of Resources for which the counter values shall be updated (the list contains all Resources belonging to the specified Work Center). 
 
- Else, system validates ResourceID and loads the Resource into the Resource list, 
 
- system checks if the Cascade is true and then loads a list of adds to the Resource List all Resources assigned to the main Resource (indicated by the ResourceID), 
 
- System compares previous counter (RunningHours, Cycles) readings with the current readings and updates counters with the difference for all Resources from the list.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| RESOURCE_MAINT_TASK | ItemsProducedCount | Quantity |
|  | UtilizationHoursCount | Running Hours |
|  | UtilizationCyclesCount | Cycles |
|  | LastReportedOn |  |
