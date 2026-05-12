# WriteLogMessage

**Category:** Apriso/Common/Utility
**Class:** `FlexNet.BusinessFacade.Utility.LogWriter`
**Assembly:** `FlexNet.BusinessFacade.Utility.dll`
**Status:** Deprecated

## Description

The purpose of this BC is to add custom messages to the log files.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | Category | Char | No | The category the message should be logged under. |
| Input | Message | Char | No | The message to add to the log. |

## Validations

The category must be one of the following:
 
 
- ERROR 
- WARN 
- INFO 
- DEBUG 
- FATAL

## System Processing

The systems writes the message to the required log file.
