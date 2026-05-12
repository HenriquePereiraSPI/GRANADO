# DeleteRecipient

**Category:** Apriso/Common/Alert
**Class:** `FlexNet.BusinessFacade.Alerts.AlertManager`
**Assembly:** `FlexNet.BusinessFacade.Alerts.dll`
**Status:** Active

## Description

The purpose of this Business Component method is to delete specific alert recipient.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | AlertRecipientID | Integer | Yes | The ID of the alert recipient. |

## Validations

System checks if an alert recipient exists.

## System Processing

System deletes one row from ALERT_RECIPIENT.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| ALERT_RECEIPIENT |  | The alert recipient is deleted when DeleteRecipient is invoked. |
