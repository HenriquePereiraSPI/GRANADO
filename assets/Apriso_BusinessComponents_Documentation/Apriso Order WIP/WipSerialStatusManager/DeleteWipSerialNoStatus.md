# DeleteWipSerialNoStatus

**Category:** Apriso/Order/WIP
**Class:** `FlexNet.BusinessFacade.Manufacturing.WipSerialStatusManager`
**Assembly:** `FlexNet.BusinessFacade.Manufacturing.dll`
**Status:** Active
**Keywords:** Delete, Wip, SerialNo, Status

## Description

Deletes the specified record in WIP_STATUS_NO_STATUS.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | WipSerialNoStatusID | Integer | Yes | ID of the WIP Serial Number status. |

## Validations

- System validates if WipSerialNoStatusID is valid.

## System Processing

- System deletes record in WIP_STATUS_NO_STATUS with specified ID.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| WIP_STATUS_NO_STATUS | All |  |
