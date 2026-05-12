# ConvertToUTCTime

**Category:** Apriso/Common/Utility
**Class:** `FlexNet.BusinessFacade.Utility.TimeConvertor`
**Assembly:** `FlexNet.BusinessFacade.Utility.dll`
**Status:** Active

## Description

Converts the source time to UTC time based on the source time zone ID.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | srcTime | DateTime | Yes | Source Time to be converted |
| Input | srcTimeZoneID | Integer | No | Source Time Zone ID. If not provided user TimeZoneID is used. |
| Output | utcTime | DateTime | No | Converted UTC time output |

## System Processing

System converts the input local time to UTC.
