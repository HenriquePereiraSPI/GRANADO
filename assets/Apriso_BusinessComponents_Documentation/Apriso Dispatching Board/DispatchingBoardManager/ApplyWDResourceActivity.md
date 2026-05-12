# ApplyWDResourceActivity

**Category:** Apriso/Dispatching Board
**Class:** `FlexNet.BusinessFacade.DispatchingBoard.DispatchingBoardManager`
**Assembly:** `FlexNet.BusinessFacade.DispatchingBoard`
**Status:** Retired

## Description

This Business Component method is used to apply assignment changes from Dispatching Board back to a DELMIA Apriso table (WEIGH_HEADER).

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | ResourceActivityIDList | Integer | Yes | The resource activity ID. |

## Validations

- The system validates that ResourceActivity exists. 
- The system validates that DBResource exists. 
- The system validates if DBresource is an employee or a scale station. 
- The system validates that the activity exists.

## System Processing

The system applies the assigned Resource as a scale station or an employee to the Weigh Header.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| WEIGH_HEADER | ScaleStationID | The ResourceID from the assigned Resource. |
|  | EmployeeID | The EmployeeID from the assigned Resource. |
