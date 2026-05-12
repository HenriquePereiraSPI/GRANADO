# EncodeURLParameters

**Category:** Apriso/Common/Employee
**Class:** `FlexNet.BusinessFacade.Security.LoginManager`
**Assembly:** `FlexNet.BusinessFacade.Security.dll`
**Status:** Active

## Description

The purpose of this Business Component is to encode input URLParameter according to "Percent-encoding" standard (http://en.wikipedia.org/wiki/Percent-encoding). It could be used during FI url invocation (see Portal Guide, section 2.9.3 FI using URL).

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | URLParameter | Char | No | Input URL. |
| Input | EncodedStr | Char | No | Encoded URL |

## Validations

System validates if input is not null or empty

## System Processing

System returns encoded result
