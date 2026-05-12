# RetrieveAlertRecipients

**Category:** Apriso/Common/Alert
**Class:** `FlexNet.BusinessFacade.Alerts.AlertManager`
**Assembly:** `FlexNet.BusinessFacade.Alerts.dll`
**Status:** Active

## Description

The purpose of this Business Component method is to select all information about specific alert recipients.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | AlertID | Integer | Yes | The ID of the alert. |
| Output | EscalationLevel | Integer | No | The escalation levels of all alert recipients. |
| Output | ResourceName | Char | No | The resource names of all alert recipients. |
| Output | ResourceType | Char | No | The resource types of all alert recipients. |
| Output | ResourceClassID | Integer | No | The resource classes of all alert recipients. |
| Output | EmployeeID | Integer | No | The employee IDs of all alert recipients. |
| Output | RoleID | Integer | No | The role IDs of all alert recipients. |
| Output | TaskID | Integer | No | The task IDs of all alert recipients. |
| Output | CommunicationType | Integer | No | The communication types of all alert recipients. |

## Validations

System checks if a specific alert exists.

## System Processing

System retrieves information about all alert recipients.

## Pre-Conditions

The Alert has been created and identified.
