# ChangeResourceLifeDates

**Category:** Apriso/Common/Resource
**Class:** `FlexNet.BusinessFacade.Manufacturing.ResourceLifeCycleContoller`
**Assembly:** `FlexNet.BusinessFacade.Manufacturing.dll`
**Status:** Active

## Description

This Business Component method is used to enable modifying the dates of a resource life cycle (start or end). The user can end a life cycle even if no new life cycle is created.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | ResourceLifeCycleID | Integer | Yes | The ID of the Resouce life cycle. |
| Input | StartDate | DateTime | Yes | The new date. The date should be provided in UTC. |
| Input | StartEndFlag | Boolean | Yes | If True, the system changes the end date . If False, the system changes the start date. |

## Validations

- The system validates that the Resource life cycle exists for the specified ID.  
- The system validates that after changing the start/end time, the start time is less than the end time. 
- The system validates that the change does not make any of the Resource life cycles overlap.

## System Processing

- Depending on the inputted flag value (start or end), the end date or the start date is updated.

## Pre-Conditions

The Resource life cycle must exist.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| RESOURCE_LIFE_CYCLE | StartedOn | StartDate (required) when StartEndFlag = false. |
|  | EndedOn | StartDate (Required) when StartEndFlag = true. |
