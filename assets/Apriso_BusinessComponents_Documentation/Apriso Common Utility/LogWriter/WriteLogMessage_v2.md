# WriteLogMessage_v2

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
