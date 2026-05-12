# DeleteDispatchSequence

**Category:** Apriso/Common/Dispatching
**Class:** `FlexNet.BusinessFacade.Scheduling.Admin.AdminController`
**Assembly:** `FlexNet.Scheduling.Admin.dll`
**Status:** Retired

## Description

Deletes a record from the DISPATCH_SEQUENCE table.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | DispatchSequenceID | Integer | Yes | The unique id of the dispatch sequence to be deleted. |

## Validations

System checks if there is a corresponding record in the DISPATCH_SEQUENCE table. If there is no record, an error message is thrown.

## System Processing

System deletes the record from the table.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| DISPATCH_SEQUENCE | All |  |
