# IsEquipmentBusy

**Category:** Apriso/Common/Employee
**Class:** `FlexNet.BusinessFacade.Security.LoginManager`
**Assembly:** `FlexNet.SystemServices.Security.dll`
**Status:** Active

## Description

The purpose of this Business Component is to check if a specific piece of equipment is already being used.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | EquipmentID | Integer | No | ID of the equipment which is being used |
| Output | Result | Boolean | No | Whether the equipment is used (True) or not (False) |

## Validations

- System validates if equipment exists 
- System checks if the inputted piece of equipment is already being used in another session

## System Processing

System returns the result of the check as function output.
