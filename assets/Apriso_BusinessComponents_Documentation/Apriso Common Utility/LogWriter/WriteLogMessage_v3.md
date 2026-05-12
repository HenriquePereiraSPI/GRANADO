# WriteLogMessage_v3

**Category:** Apriso/Common/Utility
**Class:** `FlexNet.BusinessFacade.Utility.LogWriter`
**Assembly:** `FlexNet.BusinessFacade.Utility.dll`
**Status:** Active

## Description

The purpose of this BC is to add custom messages to the log files.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | Category | Char | Yes | The category the message should be logged under. |
| Input | Message | Char | Yes | The message to add to the log. |
| Input | FileName | Char | No | The name and location of the file to output the message to. |
| Input | MaxSizeRollBackups | Integer | No | The maximum number of backup files that are kept before the oldest is erased |
| Input | MaximumFileSize | Char | No | The maximum size that the log file is allowed to reach before being rolled over to the backup files. Allowed suffixes are KB, MB, and GB. |

## Validations

The category must be one of the following:
 
 
- ERROR 
- WARN 
- INFO 
- DEBUG 
- FATAL

## System Processing

The systems writes the message to the required log file:
 
 
- If the "FileName" input is empty, then the message will be appended to the default application log file. 
- If the "FileName" is specified, the message will be appended to that file (e.g. "C:\Temp\AprisoLogs\NewLogFile.log"). 
 
- If the "MaximumFileSize" is specified, the log file will be allowed to reach that size before it is rolled over to the backup file. The size is specified as a string, for example, "100MB". Possible suffixes are KB, MB, and GB. If no value is specified, it is set to the default of "10MB" 
- If the "MaxSizeRollBackups" is specified, that is the maximum number of backup logs kept by the system. When the number of file exceed that of the provided value, the oldest log file is deleted. The default value is 1.
