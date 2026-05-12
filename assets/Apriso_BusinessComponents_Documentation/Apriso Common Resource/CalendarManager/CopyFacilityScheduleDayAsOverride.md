# CopyFacilityScheduleDayAsOverride

**Category:** Apriso/Common/Resource
**Class:** `FlexNet.BusinessFacade.Resources.CalendarManager`
**Assembly:** `FlexNet.BusinessFacade.Resources.dll`
**Status:** Active

## Description

This method uses the schedule information from a given day to create an override for another day.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | Facility | Char | Yes | Facility for which the schedule is defined. |
| Input | SourceDay | DateTime | Yes | Source Day for the schedule information. |
| Input | StartDay | DateTime | Yes | Start Day for the period for which the override will be created. |
| Input | EndDay | DateTime | Yes | End Day for the period for which the override will be created. |

## Validations

- The system validates Facility.

## System Processing

- The system validates Facility, 
- The system gets schedule for Source Day, 
- For each day from Start Day to End Day the system creates override based schedule retrieved for the Source Day.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| FACILITY_WORK_SCHEDULE |  | New record is created. |
