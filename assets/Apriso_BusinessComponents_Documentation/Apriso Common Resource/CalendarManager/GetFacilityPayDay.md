# GetFacilityPayDay

**Category:** Apriso/Common/Resource
**Class:** `FlexNet.BusinessFacade.Resources.CalendarManager`
**Assembly:** `FlexNet.BusinessFacade.Resources.dll`
**Status:** Active

## Description

This method returns the Pay Day for a given Facility and Date/Time.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | Facility | Char | Yes | Facility for which the Pay Day will be determined. |
| Input | LocalDateTime | DateTime | Yes | Local Date Time for which the Pay Day will be determined. |
| Output | PayDay | DateTime | Yes | Pay Day of the Facility. |

## Validations

- Validate Facility.

## System Processing

- Validates Facility,  
- Gets Pay Rule,  
- Gets Pay Day (see GetFacilitySchedule for detailed information on how the Pay Day is calculated).
