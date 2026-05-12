# DeleteAssociationHex

**Category:** Apriso/Common/Code
**Class:** `FlexNet.BusinessFacade.Codes.CodeManager`
**Assembly:** `FlexNet.BusinessFacade.Codes.dll`
**Status:** Active

## Description

The purpose of this method is to delete association between hexadecimal code and a business entity.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | hexCode | Char | Yes | Hexadecimal code that the association to a business entity should be deleted. |

## Validations

- Entered code must belong to supported codes. 
- Entered code must be a correct hexadecimal number.

## System Processing

- System converts input hexadecimal code to its bit representation. 
- System parses converted code. 
- System deletes association between bit code and a business entity.
