# SetDateTime

**Category:** Apriso/Common/Utility
**Class:** `FlexNet.MachineIntegrator.BusinessFacade.MachineIntegratorInvoker`
**Assembly:** `FlexNet.MachineIntegrator.BusinessFacade.MachineIntegratorInvoker.dll`
**Status:** Active

## Description

Purpose of this method is to set value of specific Machine Integrator point.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | ItemAlias | Char | Yes | The machine full point alias in the following format: [connector]\[data_source]\[point_group]\[point] |
| Input | Value | DateTime | Yes | Value to be set on the machine point. |
| Output | ErrorCode | Char | No | The error code returned from Machine Integrator, empty string means no error. |

## Validations

- Point alias is verified and if not found the "Unknown Alias" error message is displayed. 
- If no providers are found for requested items or an exception occurs the "Fail" error message is displayed.

## System Processing

- System sets point value.
