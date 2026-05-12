# GetResourcePayDay

**Category:** Apriso/Common/Resource
**Class:** `FlexNet.BusinessFacade.Resources.CalendarManager`
**Assembly:** `FlexNet.BusinessFacade.Resources.dll`
**Status:** Active

## Description

This method returns the pay day for a given Resource and Date Time.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | ResourceID | Integer | Yes | Resource ID for which the pay day will be determined |
| Input | LocalDateTime | DateTime | Yes | Loca Date Time for which the pay day will be determined |
| Output | PayDay | DateTime | No | Pay Day |

## Validations

- The system validates the Resource.

## System Processing

- The system validates the Resource,  
- The system gets Pay Rule,  
- The system gets Pay Day ( see GetResourceSchedule for detailed information on how the pay day is calculated).
