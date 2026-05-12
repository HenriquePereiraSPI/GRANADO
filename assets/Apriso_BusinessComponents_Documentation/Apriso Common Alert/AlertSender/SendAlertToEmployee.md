# SendAlertToEmployee

**Category:** Apriso/Common/Alert
**Class:** `FlexNet.BusinessFacade.Common.AlertSender`
**Assembly:** `FlexNet.BusinessFacade.Common.dll`
**Status:** Deprecated
**Keywords:** Alert, Email, Message

## Description

This Business Component method is used to send a message containing a title and body with information about the related work order number, work order type, operation sequence number, work center and alert type to an SMTP server. This BC method does not make use of the DELMIA Apriso Alert List and Alerting framework.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | FunctionName | Char | Yes | The name of the function that is calling the alert. |
| Input | MessageTitle | Char | Yes | The title of the message. |
| Input | MessageText | Char | Yes | The message text. |
| Input | WipOrderNo | Char | No | WIP Order Number used when the component is called. |
| Input | WipOrderType | Integer | No | Type for the WIP Order. |
| Input | OprSequenceNo | Char | No | WIP Operation used when the component is called. |
| Input | WorkCenter | Char | No | Work Center when the component is called. |
| Input | SmtpServer | Char | No | The SMTP server used to send the email. If this input is not provided, then it will use the SMTP server as defined in the FlexNet.Alerting section in the central configuration. It is possible to define SMTP port number. |
| Input | ToEmployeNo | Char | Yes | Employee number which the alert will be sent to. |

## Validations

System performs the following validations:
 
 
- WipOrderNo, WipOrderType and OprSequenceNo are valid and active in the WIP_ORDER and WIP_OPERATION tables or are null. 
- WorkCenter is valid and active in the WORK_CENTER table or is null. 
- Employee is valid and active in the EMPLOYEE table or is null. 
- EmployeeNo is a valid in the EMPLOYEE table as determined by FLX_ALERT_EMPLOYEE_DETERMINATION.

## System Processing

During processing, the System performs validations as stated above:
 
 
- Retrieves the Communications Type and Communications Value (email address) for the given ToEmployeeNo. 
- Computes the Next unique ID for the Alert against the Sequence provider for Sequence ALERT_ID. 
- Retrieves the from email address from the logged in employee via the Communications Type and Communications Value. If this is not available, the from email address in the central configuration will be used. 
- Proceeds to compose the e-mail alert message by performing the following: 
 
- Recipient: obtained from the output of the Determination Function. This will be the Employee's e-mail address. 
- Determination of the Language: this is retrieved from the user language in the employee table (written language) for the Recipient Employee. 
- Title: this is to be made up of the Alert ID obtained from the previous step along with the title passed as input. If no title was passed, then the title will be the Alert Type and Employee Name. 
- Detailed Message: preparation of the e-mail content. Each variable description is followed with the value of the variable as passed (no translation). A carriage return separates the values. The Message Text is the text (predefined as a function input) that describes the alert: 
 
 
 
- Alert ID 
- Function Name 
- Employee No 
- Employee Name 
- Facility 
- WIP Order 
- WIP Order Type 
- WIP Operation 
- Work Center 
 
 
- System proceeds to send the Alert via the e-mail system. 
 
- The email is sent using the inputted SMTP server. If this server is not provided, the SMTP server is obtained by using the configuration as defined in the central configuration. The following are the available configuration options. 
 
- UseSMTPAuthentication - True/False 
- SMTPAuthenticationUsername - the username to use if the authentication is set to true. 
- SMTPAuthenticationPassword - the password to use if the authentication is set to true. This value is encrypted.

## Pre-Conditions

The Alert has been created and identified.
