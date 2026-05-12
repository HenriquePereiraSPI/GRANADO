# ConvertDateTime

**Category:** Apriso/Common/Utility
**Class:** `FlexNet.BusinessFacade.Utility.TimeConvertor`
**Assembly:** `FlexNet.BusinessFacade.Utility.dll`
**Status:** Active

## Description

Input time in format of DateTime, string or individual time components (such as year, month, day) is used to return DateTime object and string in local and UTC format.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | srcTime | DateTime | No | Source Datetime |
| Input | srcTimeSpecified | Boolean | Yes | To indicate if Source Datetime is input |
| Input | timeString | Char | No | Time input as string formatted with the current user culture |
| Input | year | Integer | No | Year of the DateTime |
| Input | month | Integer | No | Month of the DateTime |
| Input | day | Integer | No | Day of the DateTime |
| Input | hour | Integer | No | Hour of the DateTime |
| Input | minute | Integer | No | Minute of the DateTime |
| Input | second | Integer | No | Second of the DateTime |
| Input | millisecond | Integer | No | Millisecond of the DateTime |
| Input | timeZoneID | Integer | No | TimeZoneID of the local time (0 means not inputted), |
| Input | inputTimeUtc | Boolean | Yes | To indicate if the input time is UTC |
| Input | outputTimeStringFormat | Char | No | Format of the output Time String. Available formats of the output can be found: http://msdn.microsoft.com/en-us/library/system.globalization.datetimeformatinfo.aspx |
| Output | localTime | DateTime | No | Output local time |
| Output | utcTime | DateTime | No | Output UTC time |
| Output | localTimeString | DateTime | No | Output local time string |
| Output | utcTimeString | DateTime | No | Output UTC time string |

## System Processing

- If the DateTime is specified it is used for conversion else if the date time string is input it will be used for conversion else the date time based on the individual time components such as year, month, and day is used.  
- The timeZoneID input determines if time zone of the inputted time. If 0, the user's current timezone will be used. 
- The flag inputTimeUtc is used to determine if the conversion is UTC to local or local to UTC 
- The converted time is formatted to string using the format specified in outputTimeStringFormat.
