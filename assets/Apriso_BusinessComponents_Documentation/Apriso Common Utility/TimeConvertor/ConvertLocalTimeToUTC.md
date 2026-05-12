# ConvertLocalTimeToUTC

**Category:** Apriso/Common/Utility
**Class:** `FlexNet.BusinessFacade.Utility.TimeConvertor`
**Assembly:** `FlexNet.BusinessFacade.Utility.dll`
**Status:** Active

## Description

This method converts the local time to the UTC time based on the input time zone ID. This method may be used to get the UTC time in a time zone from a given local time.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | srcTime | DateTime | Yes | Source Time to be converted. |
| Input | srcTimeZoneID | Integer | Yes | Source Time Zone ID. |
| Output | utcTime | DateTime | No | Converted time output in UTC format. |
