# GetWorkCenterPayDay

**Category:** Apriso/Common/Resource
**Class:** `FlexNet.BusinessFacade.Resources.CalendarManager`
**Assembly:** `FlexNet.BusinessFacade.Resources.dll`
**Status:** Active

## Description

This method returns the Pay Day for a given Work Center and Date/Time

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | WorkCenter | Char | Yes | Work Center for which the pay day will be determined |
| Input | LocalDateTime | DateTime | Yes | Local Date Time for which the pay day will be determined |
| Output | PayDay | DateTime | Yes | Pay Day |

## Validations

- Validate Work Center

## System Processing

- Validate Work Center 
- Get Pay Rule 
- Get Pay Day (see GetWorkCenterSchedule for detailed information on how the pay day is calculated)
