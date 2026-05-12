# DeleteAssociation

**Category:** Apriso/Common/Code
**Class:** `FlexNet.BusinessFacade.Codes.CodeManager`
**Assembly:** `FlexNet.BusinessFacade.Codes.dll`
**Status:** Active

## Description

The purpose of this method is to delete association between bit code and a business entity.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | bitCode | Char | Yes | Bit code that the association to a business entity should be deleted. |

## Validations

- Entered code must belong to supported codes. 
- Entered code must be a correct bit number.

## System Processing

- System parses input code. 
- System deletes association between bit code and a business entity.
