# AddResourceClassTypeRoleRecipient

**Category:** Apriso/Common/Alert
**Class:** `FlexNet.BusinessFacade.Alerts.AlertManager`
**Assembly:** `FlexNet.BusinessFacade.Alerts.dll`
**Status:** Active

## Description

This Business Component method is used to create an alert recipient with a specific Resource type, class, and role.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | AlertID | Integer | Yes | The ID of the existing alert. |
| Input | ResourceType | Integer | Yes | The type of Resource. |
| Input | ResourceClassID | Integer | No | The ID of the Resource Class. |
| Input | RoleID | Integer | Yes | The ID of the Role. |
| Input | CommunicationType | Char | Yes | The communication type. Currently two types are supported: EmailAddress and HomePage. |

## Validations

The system checks if the following specific entities exist: 
 
- Alert 
- Resource type 
- Resource class ("0" indicates that the class is not selected) 
- Role 
 

The system also checks that the communication type is correct.

## System Processing

The system updates the ALERT_RECIPIENT table.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| ALERT_RECIPIENT | AlertID | The ID of the alert. |
|  | ResourceType | The type of Resource linked to the alert recipient. |
|  | ResourceClassID | The ID of the Resource class linked to the alert recipient. |
|  | RoleID | The ID of the Role linked to the alert recipient. |
|  | CommunicationType | The communication type. Currently two types are supported: EmailAddress and HomePage. |
