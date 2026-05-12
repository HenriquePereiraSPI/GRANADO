# ConvertToLocalTime

**Category:** Apriso/Common/Utility
**Class:** `FlexNet.BusinessFacade.Utility.TimeConvertor`
**Assembly:** `FlexNet.BusinessFacade.Utility.dll`
**Status:** Active

## Description

Converts the UTC time to local time based on the input time zone ID.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | utcTime | DateTime | Yes | UTC Time to be converted. |
| Input | timeZoneID | Integer | No | Source Time Zone ID. If not provided user TimeZoneID is used. |
| Output | localTime | DateTime | No | Converted local time output |

## System Processing

System converts the input UTC time to local time.
