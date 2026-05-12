# InvokeStandardOperationWithFlatInputs

**Category:** Apriso/Common/Utility
**Class:** `FlexNet.BusinessFacade.ProcessExecution.OperationInvoker`
**Assembly:** `FlexNet.BusinessFacade.ProcessExecution.dll`
**Status:** Retired

## Description

Invokes (executes) specified standard operations synchronously. The first input is the ID of the standard operation to invoke and the second is a list of the inputs in format Input1Name|Input1Value#Input2Name|Input2Value. Invokes (executes) specified a standard operation synchronously. This method was prepared specially to invoke from Machine Integrator.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | OperationID | Integer | No | ID of standard operation to invoke. |
| Input | Inputs | Char | No | Input values for the executed standard operation. In format Input1Name\|Input1Value#Input2Name\|Input2Value. |

## Validations

System validates if the standard operation exists.

## System Processing

System invokes the standard operation.
