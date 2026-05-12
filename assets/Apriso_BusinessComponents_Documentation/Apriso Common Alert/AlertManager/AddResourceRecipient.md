# AddResourceRecipient

**Category:** Apriso/Common/Alert
**Class:** `FlexNet.BusinessFacade.Alerts.AlertManager`
**Assembly:** `FlexNet.BusinessFacade.Alerts.dll`
**Status:** Active

## Description

This Business Component method is used to create a Resource alert recipient.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Output | AlertID | Integer | Yes | The ID of the existing alert. |
| Output | ResourceName | Char | Yes | The name of the Resource that will be the alert recipient. |
| Output | ResourceType | Char | Yes | The type of Resource that will be the alert recipient. |
| Output | CommunicationType | Char | Yes | The communication type. Currently two types are supported: EmailAddress and HomePage. |

## Validations

The system checks if the following specific entities exist: 
 
- Alert 
- Resource 
 

 

The system also checks that the communication type is correct.

## System Processing

The system updates the ALERT_RECIPIENT table.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| ALERT_RECIPIENT | AlertID | The ID of the alert. |
|  | ResourceName | The name of the Resource that is the recipient of the alert. |
|  | ResourceType | The type of Resource that is the recipient of the alert. |
|  | CommunicationType | The communication type. Currently two types are supported: EmailAddress and HomePage. |
