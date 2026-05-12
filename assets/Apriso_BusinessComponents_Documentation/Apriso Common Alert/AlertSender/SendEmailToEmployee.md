# SendEmailToEmployee

**Category:** Apriso/Common/Alert
**Class:** `FlexNet.BusinessFacade.Common.AlertSender`
**Assembly:** `FlexNet.BusinessFacade.Common.dll`
**Status:** Deprecated

## Description

This Business Component method is used to send emails from Process Builder processes so that emails can be sent either to alert the users of issues or to just send information out to other plants.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | FromEmployeeID | Integer | No | From employee ID to find the sent email address in the email. |
| Input | FromEmailAddress | Char | No | From employee ID to find the sent email address in the email. |
| Input | ToEmployeeID | Integer | No | Employee ID which the alert will be sent to. |
| Input | ToEmailAddress | Char | No | List of email addresses to send to. |
| Input | ToCCEmployeeID | Integer | No | Employee ID which the alert will be carbon copied to. |
| Input | ToCCEmailAddress | Char | No | List of Carbon Copy email addresses to send to. |
| Input | ToBCCEmployeeID | Char | No | Employee ID which the alert will be blind carbon copied to. |
| Input | ToBCCEmailAddress | Char | No | List of Blind Carbon Copy email addresses to send to. |
| Input | Subject | Char | Yes | The subject of the message. |
| Input | HighPriority | Boolean | Yes | Determines if the message is of high priority or not. |
| Input | Message | Char | No | Message text. |
| Input | AttachFiles | Boolean | Yes | Set to true if email is required to attach the document. |
| Input | File | Char | No | An array of file paths to attach to the email message. |
| Input | SMTPServer | Char | No | The SMTP server used to send the email. If this input is not provided, then it will use the SMTP server as defined in the FlexNet.Alerting section in the central configuration. It is possible to define SMTP port number. |
| Input | UseSMTPAuthentication | Boolean | No | If the user has defined an SMTP server, then this input will define or not if the SMTP server requires authentication. If the SMTP server was not defined and the default was used, then this information will be also retrieved from the central configuration. |
| Input | SMTPAuthenticationUserName | Char | No | If the user has defined an SMTP server and specified that it required authentication, then this input will be required. |
| Input | SMTPAuthenticationPassword | Char | No | If the user has defined an SMTP server and specified that it required authentication, then this input will be required. |

## Validations

The from email address is validated in the following order:
 
 
- If the "FromEmailAddress" input is provided, then use this, no more validation required. 
- If the "FromEmployeeID" input is provided (i.e. not 0), then retrieve their email address for the employee by getting all the CONTACT_COMMUNICATION records for the employee where the Communuication Type Code = "EmailAddress". No more validation required. If no email address is found, display an appropriate error message. 
- Retrieve the from email address from the FlexNet.Alerting section in the central configuration. Value to use is under the "DefaultFromEmailAddress" key. 
 

If the following inputs are all not supplied, then an error must be supplied stating that no recipients have been supplied for the alert:
 
 
- ToEmployeIDList 
- ToEmailAddressList 
- ToCCEmployeIDList 
- ToCCEmailAddressList 
- ToBCCEmployeIDList 
- ToBCCEmailAddressList

## System Processing

- Combing all email addresses from each of the following: 
 
 
 
- ToEmployeIDList 
- ToEmailAddressList 
 
 

If the input "ToEmployeeIDList" is used, then each employee number will have to be converted to an email address by retrieving all their email address for the employee by getting the CONTACT_COMMUNICATION record for the employee where the Communication Type Code = "EmailAddress". If any of the employees do not have an email address defined, then display an appropriate error stating which employee(s) do not have a valid email address.
 
 
- Combing all email addresses from each of the following: 
 
 
 
- ToCCEmployeIDList 
- ToCCEmailAddressList 
 
 

If the input "ToCCEmployeeIDList" is used, then each employee number will have to be converted to an email address by retrieving all their email addresses for the employee by getting the CONTACT_COMMUNICATION record for the employee where the Communication Type Code = "EmailAddress". If any of the employees do not have an email address defined, then display an appropriate error stating which employee(s) do not have a valid email address.
 
 
- Combing all email addresses from each of the following: 
 
- ToBCCEmployeIDList 
- ToBCCEmailAddressList 
 
 

If the input "ToBCCEmployeeIDList" is used, then each employee number will have to be converted to an email address by retrieving all their email address for the employee by getting the CONTACT_COMMUNICATION record for the employee where the Communication Type Code = "EmailAddress". If any of the employees do not have an email address defined, then display an appropriate error stating which employee(s) do not have a valid email address.
 
 
- If the SMTPServer input is not supplied, then the following inputs must not be specified. If they are, an appropriate error should be displayed 
 
 
 
- SMTPAuthenticationUsername 
- SMTPAuthenticationPassword 
 
 
 
- If the SMTPServer is inputted, then the following validations should occur: 
 
 
 
- If the UseSMTPAuthentication input is true, then the SMTPAuthenticationUsername and SMTPAuthenticationPassword inputs must be supplied. 
- If the UseSMTPAuthentication input is false, then the SMTPAuthenticationUsername and SMTPAuthenticationPassword inputs must not be supplied If they are an appropriate error should be displayed. 
 
 
 
- The "FilePathList" input should only be supplied if the "AttachFiles" input is true. If it is not, an appropriate error should be displayed.

## Pre-Conditions

The Alert has been created and identified.

## History Recording in Production

FlexNet.BusinessFacade.Common.AlertSender.SendEmailToEmployee
