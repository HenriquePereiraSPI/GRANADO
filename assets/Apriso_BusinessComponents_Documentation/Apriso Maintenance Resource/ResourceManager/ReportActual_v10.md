# ReportActual_v10

**Category:** Apriso/Maintenance/Resource
**Class:** `FlexNet.BusinessFacade.ResourceMaintenance.ResourceManager`
**Assembly:** `FlexNet.BusinessFacade.ResourceMaintenance.dll`
**Status:** Active

## Description

This Business Component method updates the utilization counters for all Maintenance Procedures linked to a Resource. The counters are updated with a difference between the current and the previous reading. It can be used to update utilization counters for all Equipment in a given Work Center or a Resource.
 

 

When Work Center is specified, the method does not use ResourceID and Cascade fields. It updates the utilization counters for all Resources located in the Work Center and any Resource linked to them through *resource_resource_link/resource_collection*. 
 

 

When Work Center is not specified and ResourceID is specified, it updates utilization counters for the specified Resource. If the cascade flag is set to true, it also updates all Resources linked to the specified Resources through *resource_resource_link/resource_collection *

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | WorkCenter | Char | Conditional | Work Center |
| Input | ResourceID | Integer | Conditional | Resource ID |
| Input | CounterID | Integer | Yes | Counter ID |
| Input | CounterValue | Decimal | No | Counter Value |
| Input | UOMCode | Char | No | Unit of measure |
| Input | Cascade | Boolean | No | Has meaning only when ResourceID has been specified |

## Description Parameters

| Name | Type | Description |
|------|------|-------------|
| ProductID | Integer | Product ID |

## Validations

- If Work Center has been provided, then the system validates Work Center. 
- If Work Center has not been provided, then the system validates ResourceID. 
- System validates if CounterID has been provided and if it exists for the given Resource. 
- System validates if UtilizationMode for updating Resource is set to Actual. 
 
- If UtilizationMode for updating Resource is set to Counter then the system ignores this mode and does not process it. 
 
- If UOM Code has been provided, then the system validates UOM Code. 
- If ProductID Dynamic Input has been provided, then the system validates Product.

## System Processing

- If the Work Center has been provided: 
 
- System validates WorkCenter. 
- System sets Cascade to true (Work Center mode is always cascade). 
- System loads the list of Resources for which the counter values shall be updated (the list contains all Resources belonging to the specified Work Center). 
 
- Else system validates ResourceID and loads the Resource into the Resource list. 
 
- System checks if the Cascade is set to true and then loads all Resources assigned to the main Resource (indicated by the ResourceID). 
 
-  If UOM Code has been provided:  
 
-  System compares if UOM Code of the Counter is the same.  
-  If it is not, but ProductID has been provided, then system tries to convert the value using Product UOM Conversion or UOM Conversion.  
-  If the previous conversions have not been performed or ProductID has not been provided, but Product is linked to Resource, then system tries to convert the value using Product UOM Conversion or UOM Conversion.  
-  If the previous conversions have not been performed, then system tries to perform basic UOM conversion.  
-  If the previous conversions have not been performed, then system shows error message.  
 
- System compares the previous Counter readings (based on CounterID) with the current readings and updates counter with the difference for all Resources from the list.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| EQUIPMENT_COUNTER | CounterValue | CounterValue |
|  | LastReportedOn |  |
