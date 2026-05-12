# DeleteWipLotNoStatus

**Category:** Apriso/Order/WIP
**Class:** `FlexNet.BusinessFacade.Manufacturing.WipLotStatusManager`
**Assembly:** `FlexNet.BusinessFacade.Manufacturing.dll`
**Status:** Active
**Keywords:** Delete, Wip, Lot, Status

## Description

Deletes specified record in WIP_LOT_STATUS .

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | WipLotNoStatusID | Integer | Yes | ID of the WIP lot number status. |

## Validations

- WipLotNoStatusID is valid. Validation fails if it is 0.

## System Processing

- Performs validations as stated above. 
- System deletes record in WIP_LOT_NO_STATUS with specified ID.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| WIP_LOT_NO_STATUS | All |  |
