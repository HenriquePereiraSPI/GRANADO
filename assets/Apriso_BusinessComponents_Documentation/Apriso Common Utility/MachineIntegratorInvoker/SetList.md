# SetList

**Category:** Apriso/Common/Utility
**Class:** `FlexNet.MachineIntegrator.BusinessFacade.MachineIntegratorInvoker`
**Assembly:** `FlexNet.MachineIntegrator.BusinessFacade.MachineIntegratorInvoker.dll`
**Status:** Active

## Description

The purpose of this methods is to get list of values of specific Machine Integrator points.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | StringItemsAliases | Char | No | The string machine full point aliases in the following format: [connector]\[data_source]\[point_group]\[point]. |
| Input | BoolItemsAliases | Char | No | The boolean machine full point aliases in the following format: [connector]\[data_source]\[point_group]\[point]. |
| Input | IntItemsAliases | Char | No | The integer machine full point aliases in the following format: [connector]\[data_source]\[point_group]\[point]. |
| Input | DecimalItemsAliases | Char | No | The decimal machine full point aliases in the following format: [connector]\[data_source]\[point_group]\[point]. |
| Input | DateTimeItemsAliases | Char | No | The date time machine full point aliases in the following format: [connector]\[data_source]\[point_group]\[point]. |
| Input | StringValues | Char | No | List of values of string type to be set on machine points. |
| Input | BoolValues | Boolean | No | List of values of boolean type to be set on machine points. |
| Input | IntValues | Integer | No | List of values of integer type to be set on machine points. |
| Input | DecimalValues | Decimal | No | List of values of decimal type to be set on machine points. |
| Input | DateTimeValues | DateTime | No | List of values of date/time type to be set on machine points. |
| Output | ErrorCode | Char | No | The error code returned from Machine Integrator, empty string means no error. |

## Validations

- Point alias is verified and if not found the "Unknown Alias" error message is displayed. 
- If no providers are found for requested items or an exception occurs the "Fail" error message is displayed.

## System Processing

System sets points values.
