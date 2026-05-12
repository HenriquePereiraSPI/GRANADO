# ConvertLocalTime

**Category:** Apriso/Common/Utility
**Class:** `FlexNet.BusinessFacade.Utility.TimeConvertor`
**Assembly:** `FlexNet.BusinessFacade.Utility.dll`
**Status:** Active

## Description

This method converts the source time to destination time based on the source and destination time zone ID. This method can be used to get the local time at destination time zone at a given time at source time zone.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | srcTime | DateTime | Yes | Source Time to be converted. |
| Input | srcTimeZoneID | Integer | Yes | Source Time Zone ID. |
| Input | destTimeZoneID | Char | Yes | Destination Time Zone ID. |
| Output | destTime | DateTime | No | Converted time output. |
