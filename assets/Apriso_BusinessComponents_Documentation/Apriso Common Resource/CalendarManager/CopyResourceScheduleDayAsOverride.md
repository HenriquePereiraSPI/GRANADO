# CopyResourceScheduleDayAsOverride

**Category:** Apriso/Common/Resource
**Class:** `FlexNet.BusinessFacade.Resources.CalendarManager`
**Assembly:** `FlexNet.BusinessFacade.Resources.dll`
**Status:** Active

## Description

This method uses the schedule information from a given day to create override for another day.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | ResourceName | Char | Yes | Resource Name |
| Input | ResourceType | Integer | Yes | Resource Type |
| Input | SourceDay | DateTime | Yes | Source Day for the schedule information |
| Input | StartDay | DateTime | Yes | Start Day for each the override will be created |
| Input | EndDay | DateTime | Yes | End Day for each the override will be created |

## Validations

- The system validates Resource.

## System Processing

- The system validates Resource,  
- The system gets schedule for Source Day, 
- For each day from Start Day to End Day the system creates override based schedule retrieved for the Source Day.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| RESOURCE_WORK_SCHEDULE |  |  |
