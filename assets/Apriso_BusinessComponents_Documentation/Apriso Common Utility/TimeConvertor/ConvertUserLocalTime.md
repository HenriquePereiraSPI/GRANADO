# ConvertUserLocalTime

**Category:** Apriso/Common/Utility
**Class:** `FlexNet.BusinessFacade.Utility.TimeConvertor`
**Assembly:** `FlexNet.BusinessFacade.Utility.dll`
**Status:** Active

## Description

This method converts the source time to UTC time based on the source time zone ID. This method can be used to get the UTC time at a given time at the source time zone.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | srcTime | DateTime | Yes | Source Time to be converted. |
| Input | srcTimeZoneID | Integer | Yes | Source Time Zone ID. |
| Output | utcTime | DateTime | No | Converted UTC time output. |
