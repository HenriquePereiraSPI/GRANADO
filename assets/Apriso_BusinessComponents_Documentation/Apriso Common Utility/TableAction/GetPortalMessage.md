# GetPortalMessage

**Category:** Apriso/Common/Utility
**Class:** `FlexNet.ProcessBuilder2.BusinessRules.ScreenModel.ScreenFramework.TableAction`
**Assembly:** `FlexNet.ProcessBuilder2.BusinessRules.ScreenModel`
**Status:** Active

## Description

This Business Component is used to get a message from the LITERAL tables.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | Code | Char | Yes | The message code from the LITERAL tables. |
| Input | InlineInputs | Char | Yes | Literal parameters values in JSON format. |
| Output | Message | Char | Yes | The message. |

## Validations

- None

## System Processing

- Returns the translated message from the LITERAL tables

## Pre-Conditions

None
