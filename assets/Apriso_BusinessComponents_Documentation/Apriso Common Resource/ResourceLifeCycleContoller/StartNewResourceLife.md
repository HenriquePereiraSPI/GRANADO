# StartNewResourceLife

**Category:** Apriso/Common/Resource
**Class:** `FlexNet.BusinessFacade.Manufacturing.ResourceLifeCycleContoller`
**Assembly:** `FlexNet.BusinessFacade.Manufacturing.dll`
**Status:** Active

## Description

The purpose of this Business Component is, for a given resource, to:
 
 
-  

Create a new resource life cycle, or
  
-  

Increment the life cycle number if a resource life cycle already exists,
  
-  

End the previous resource life cycle record, and
  
-  

Persist the previous and new resource life cycles.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | ResourceName | Char | Yes | The resource name to start new life cycle. |
| Input | ResourceType | Integer | Yes | The resource type to start the new life cycle. |
| Input | StartDate | DateTime | Yes | The start date to start the new life cycle. |
| Output | ResourceLifeCycle | Boolean | Yes | The output of the created life cycle record. |

## Validations

- System validates that ResourceName and ResourceType are specified and resource exists. 
- System validates that there is no resource life cycle started after the specified StartDate.

## System Processing

- System creates an entry in the RESOURCE_LIFE_CYCLE table. This table is used to persist the fact that a Lifecycle is active between 2 dates. This table also allows the user to link a Unit Characteristic of the resource during this specific life cycle. 
- By default, if a new resource life cycle is created, a new UnitID is created; the content of the previous unit characteristic life cycle is copied in the new one. User can update these characteristics by maintaining the unit characteristics. 
- System closes the previous resource life cycle (if exists) by setting the EndedOn field to the specified StartDate and NextResourceLifeCycleID to the ID of the new life cycle. 
- System populates PreviousResourceLifeCycleID field (of the new life cycle) with the ID of the previous life cycle (if exists) 
- System populates LifeCycleNumber with incremented (by one) life cycle number of the previous life cycle (if exists, otherwise it uses 1).

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| RESOURCE_LIFE_CYCLE | ID | System generated (outputted as ResourceLifeCycel) |
|  | ResourceName | Inputted ResourceName |
|  | ResourceType | Inputted ResourceType |
|  | LifeCycleNumber | Life cycle number of the previous life cycle incremented by 1 (1 if no previous life cycle) |
|  | StartedOn | Inputted StartDate |
|  | EndedOn | See syst. processing |
|  | PreviousResourceLifeCycleID | See syst. processing |
|  | NextResourceLifeCycleID | See syst. processing |
