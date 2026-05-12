# InterpretStandardOperation

**Category:** Apriso/Common/Utility
**Class:** `FlexNet.FunctionInterpreter.BusinessFacade.DFCInterpreter`
**Assembly:** `FlexNet.FunctionInterpreter.BusinessFacade`
**Status:** Retired

## Description

Invokes (executes) specified standard operation. The first input is the ID of the standard operation to invoke and the second is a list of the inputs in format Input1Name|Input1Value#Input2Name|Input2Value.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | OperationID | Integer | No | ID of standard operation to invoke. |
| Input | ConcatenatedInputs | Char | No | Input values for the executed standard operation. In format Input1Name\|Input1Value#Input2Name\|Input2Value. |

## Validations

System validates if the standard operation exists.

## System Processing

System invokes the standard operation.
