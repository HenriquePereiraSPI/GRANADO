# AssignExternalSequenceToWipOrder

**Category:** Apriso/Common/Sequencing
**Class:** `FlexNet.BusinessFacade.Sequencing.ExternalSequenceBase`
**Assembly:** `FlexNet.BusinessFacade.Sequencing.dll`
**Status:** Active

## Description

This business component method is used to update WIP_ORDER.ExternalSequenceID with the specified value. If the value provided is zero, the field is set to NULL.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | ExternalSequenceID | Integer | No | The external sequence ID. If it is 0, WIP_ORDER.ExternalSequenceID is set to NULL. |
| Input | WipOrderNo | Char | No | The WIP order number. |
| Input | WipOrderType | Char | No | The WIP order type. |

## System Processing

The system validates the WIP order:
 
 
- If a WIP order is not found, an error occurs. 
- If a WIP order is found, ExternalSequenceID is updated with the input value.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| WIP_ORDER | ExternalSequenceID | ExternalSequenceID |
