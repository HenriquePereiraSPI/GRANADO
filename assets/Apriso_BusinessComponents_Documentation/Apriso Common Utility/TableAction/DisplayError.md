# DisplayError

**Category:** Apriso/Common/Utility
**Class:** `FlexNet.ProcessBuilder2.BusinessRules.ScreenModel.ScreenFramework.TableAction`
**Assembly:** `FlexNet.ProcessBuilder2.BusinessRules.ScreenModel`
**Status:** Active

## Description

This Business Component is used to show a message from the LITERAL tables.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | ShowError | Boolean | Yes | Shows the message. |
| Input | Code | Char | Yes | The message code from the LITERAL tables. |
| Input | InlineInputs | Char | Yes | Literal parameter values in JSON format. |

## Validations

- None

## System Processing

- If ShowError is true, the BC fails with the return message based on the code from the LITERAL tables

## Pre-Conditions

None
