# GetList

**Category:** Apriso/Common/Utility
**Class:** `FlexNet.MachineIntegrator.BusinessFacade.MachineIntegratorInvoker`
**Assembly:** `FlexNet.MachineIntegrator.BusinessFacade.MachineIntegratorInvoker.dll`
**Status:** Active

## Description

The purpose of this methods is to get list of values of specific Machine Integrator points.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | StringItemsAliases | Char | No | The string machine full point aliases in the following format: [connector]\[data_source]\[point_group]\[point] |
| Input | BoolItemsAliases | Char | No | The boolean machine full point aliases in the following format: [connector]\[data_source]\[point_group]\[point]. |
| Input | IntItemsAliases | Char | No | The integer machine full point aliases in the following format: [connector]\[data_source]\[point_group]\[point |
| Input | DecimalItemsAliases | Char | No | The decimal machine full point aliases in the following format: [connector]\[data_source]\[point_group]\[point]. |
| Input | DateTimeItemsAliases | Char | No | The date time machine full point aliases in the following format: [connector]\[data_source]\[point_group]\[point]. |
| Output | StringValues | Char | No | List of values of string type. |
| Output | BoolValues | Boolean | No | List of values of boolean type. |
| Output | IntValues | Integer | No | List of values of integer type. |
| Output | DecimalValues | Decimal | No | List of values of decimal type. |
| Output | DateTimeValues | DateTime | No | List of values of date/time type. |
| Output | ErrorCode | Char | No | The error code returned from Machine Integrator, empty string means no error. |

## Validations

- Point alias is verified and if not found the "Unknown Alias" error message is displayed. 
- If no providers are found for requested items or an exception occurs the "Fail" error message is displayed.

## System Processing

System retrieves points values.
