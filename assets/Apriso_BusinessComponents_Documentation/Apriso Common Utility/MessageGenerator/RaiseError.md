# RaiseError

**Category:** Apriso/Common/Utility
**Class:** `FlexNet.BusinessFacade.Utility.MessageGenerator`
**Assembly:** `FlexNet.BusinessFacade.Utility.dll`
**Status:** Active

## Description

This method returns failure when DisplayError is set to false which causes the message associated with the literal ID to be displayed as error and all methods executed in the current step to roll back. This is to be used to roll back all changes done within a step and display error message in the DELMIA Apriso Portal.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | LiteralID | Char | No | Literal ID to retrieve the message. |
| Input | DisplayError | Boolean | Yes | indicates if result should be failure. |
