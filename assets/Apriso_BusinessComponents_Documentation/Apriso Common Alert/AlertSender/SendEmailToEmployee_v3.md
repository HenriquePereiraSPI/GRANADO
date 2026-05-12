# SendEmailToEmployee_v3

**Category:** Apriso/Common/Alert
**Class:** `FlexNet.BusinessFacade.Common.AlertSender`
**Assembly:** `FlexNet.BusinessFacade.Common.dll`
**Status:** Active

## Description

This Business Component method is used to send emails from Process Builder processes so that emails can be sent either to alert the users of issues or just to send information out to other plants.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | FromEmployeeID | Integer | No | EmployeeID whose email address will be used to send an alert from. |
| Input | FromEmailAddress | Char | No | Email address from which an alert will be sent. |
| Input | ToEmployeeID | Integer | No | Employee ID which the alert will be sent to. |
| Input | ToEmailAddress | Char | No | List of email addresses to send to. |
| Input | ToCCEmployeeID | Integer | No | Employee ID which the alert will be carbon copied to. |
| Input | ToCCEmailAddress | Char | No | List of Carbon Copy email addresses to send to. |
| Input | ToBCCEmployeeID | Char | No | Employee ID which the alert will be blind carbon copied to. |
| Input | ToBCCEmailAddress | Char | No | List of Blind Carbon Copy email addresses to send to. |
| Input | Subject | Char | Yes | The subject of the message. |
| Input | HighPriority | Boolean | Yes | Determines if the message is of high priority or not. |
| Input | Message | Char | No | Message text. |
| Input | HtmlBody | Boolean | No | Set to true if email message is in HTML format. |
| Input | AttachFiles | Boolean | No | Set to true if email is required to attach the document. |
| Input | File | Char | No | An array of file paths to attach to the email message. |
| Input | SMTPServer | Char | No | The SMTP server used to send the email. If this input is not provided, then it will use the SMTP server as defined in FlexNet.Alerting section in the central configuration. It is possible to define SMTP port number. |
| Input | UseSMTPAuthentication | Boolean | No | If the user has defined an SMTP server, then this input will define or not if the SMTP server requires authentication. If the SMTP server was not defined and the default was used, then this information will be also retrieved from the central configuration. |
| Input | SMTPAuthenticationUserName | Char | No | If the user has defined an SMTP server and specified that it required authentication, then this input will be required. |
| Input | SMTPAuthenticationPassword | Char | No | If the user has defined an SMTP server and specified that it required authentication, then this input will be required. |
| Input | UseSsl | Boolean | No | If the SSL is enabled, this will be set to True, otherwise it will be False. |

## Validations

The from email address is validated in the following order:
 
 
- If the FromEmailAddress input is provided then it is used, no more validation required. 
- If the FromEmployeeID input is provided (i.e. it is not 0), then email address for the employee is retrieved by getting all the CONTACT_COMMUNICATION records for the employee where the Communication Type Code = "EmailAddress". No more validation required. If no email address is found, an appropriate error message is displayed. 
- The FromEmailAddress is retrieved from the FlexNet.Alerting section in the Central Configuration. Value to use is under the "DefaultFromEmailAddress" key. 
- The UseSSL flag is verified before UseSMTPAuthentication. If the UseSSL flag is set to true and the UseSMTPAuthentication is set to false, email will not be sent.  
 

If the following inputs are not supplied, then an error then an error is displayed stating that no recipients have been supplied for the alert:
 
 
- ToEmployeIDList 
- ToEmailAddressList 
- ToCCEmployeIDList 
- ToCCEmailAddressList 
- ToBCCEmployeIDList 
- ToBCCEmailAddressList  
 

 The email addresses are validated by the .NET Framework MailAddress object.

## System Processing

- Combining all email addresses from each of the following: 
 
 
 
- ToEmployeIDList 
- ToEmailAddressList 
 
 

If the input ToEmployeeIDList is used, then each employee number will have to be converted to an email address by retrieving all the email addresses for the employee by getting the CONTACT_COMMUNICATION record for the employee where the Communication Type Code = "EmailAddress". If any of the employees does not have an email address defined, then an appropriate error stating which employee(s) does not have a valid email address is displayed.
 
 
- Combining all email addresses from each of the following: 
 
 
 
- ToCCEmployeIDList 
- ToCCEmailAddressList 
 
 

If the input "ToCCEmployeeIDList" is used, then each employee number will have to be converted to an email address by retrieving all the email addresses for the employee by getting the CONTACT_COMMUNICATION record for the employee where the Communication Type Code = "EmailAddress". If any of the employees does not have an email address defined, then an appropriate error stating which employee(s) does not have a valid email address is displayed.
 
 
- Combining all email addresses from each of the following: 
 
- ToBCCEmployeIDList 
- ToBCCEmailAddressList 
 
 

If the input "ToBCCEmployeeIDList" is used, then each employee number will have to be converted to an email address by retrieving all the email addresses for the employee by getting the CONTACT_COMMUNICATION record for the employee where the Communication Type Code = "EmailAddress". If any of the employees does not have an email address defined, then an appropriate error stating which employee(s) does not have a valid email address is displayed.
 
 
- If the SMTPServer input is not supplied, then the following inputs must not be specified. If they are, an appropriate error should be displayed. 
 
 
 
- SMTPAuthenticationUsername 
- SMTPAuthenticationPassword 
 
 
 
- If the SMTPServer is inputted, then the following validations should occur: 
 
 
 
- If the UseSMTPAuthentication input is true, then the SMTPAuthenticationUsername and SMTPAuthenticationPassword inputs must be supplied. 
- If the UseSMTPAuthentication input is false, then the SMTPAuthenticationUsername and SMTPAuthenticationPassword inputs must not be supplied. If they are, an appropriate error should be displayed. 
 
 
 
- The FilePathList input should only be supplied if the "AttachFiles" input is true. If it is not, an appropriate error should be displayed. 
 

System checks if the SMTPAuthenticaticationUserName exists in the AlertSettings. If it exists, then the username is passed in the BC method, otherwise an empty string is passed. Also the EnableSsl property of the client will be set to "True" or "False" depending on the input.

## Pre-Conditions

The Alert has been created and identified.

## History Recording in Production

FlexNet.BusinessFacade.Common.AlertSender.SendEmailToEmployee
