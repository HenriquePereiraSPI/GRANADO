# DisplayCalculatedError

**Category:** Apriso/Common/Utility
**Class:** `FlexNet.ProcessBuilder2.BusinessRules.ScreenModel.ScreenFramework.TableAction`
**Assembly:** `FlexNet.ProcessBuilder2.BusinessRules.ScreenModel`
**Status:** Active

## Description

This Business Component method is used to show an error message from the LITERAL tables. The error message code is set in a formula expression like: "Code = APR_VALUE_ERROR".
 

A basic formula could look like this:
 

if(enteredValue != correctValue){Code = "APR_VALUE_ERROR";}

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | Formula | Char | Yes | The C# formula expression. |
| Input | InlineInputs | Char | Yes | Literal parameter values in JSON format. |

## Validations

- None

## System Processing

- The system computes the error code based on the formula 
- If the code variable is empty then no error is displayed 
 
- Otherwise, the BC fails with the literal based on the code from the LITERAL tables

## Pre-Conditions

none
