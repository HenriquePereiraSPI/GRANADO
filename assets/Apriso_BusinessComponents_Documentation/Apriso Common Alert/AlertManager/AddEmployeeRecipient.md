# AddEmployeeRecipient

**Category:** Apriso/Common/Alert
**Class:** `FlexNet.BusinessFacade.Alerts.AlertManager`
**Assembly:** `FlexNet.BusinessFacade.Alerts.dll`
**Status:** Active

## Description

This Business Component method is used to create an employee alert recipient.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | AlertID | Integer | Yes | The ID of the existing alert. |
| Input | EmployeeID | Integer | Yes | The ID of the employee that will be the recipient of the alert. |
| Input | CommunicationType | Char | Yes | The type of communication. Two types are supported: EmailAddress and HomePage. |

## Validations

- The system checks if the specific alert exists. 
- The system checks if the specific employee exists. 
- The system checks if the specific communication type is correct.

## System Processing

- The system updates the ALERT_RECIPIENT table. 
- If CommunicationType = EmailAddress, the system sends an e-mail to the specified employee. FromEmailAddress is populated with the e-mail address of the employee who created the alert (if specified); otherwise, the address is taken from the DefaultFromEmailAddress key in the FlexNet.Alerting section of Central Configuration.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| ALERT_RECIPIENT | AlertID | The ID of the alert. |
|  | EmployeeID | The ID of the employee that is the recipient of the alert. |
|  | CommunicationsType | The type of communication. Two types are supported: EmailAddress and HomePage. |
