# RespondToAlert

**Category:** Apriso/Common/Alert
**Class:** `FlexNet.BusinessFacade.Alerts.AlertManager`
**Assembly:** `FlexNet.BusinessFacade.Alerts.dll`
**Status:** Active

## Description

The purpose of this Business Component method is to update a published Alert and to keep the Alert response information in the database.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | AlertID | Integer | Yes | The ID of the alert. |
| Input | EmployeeID | Integer | Yes | The id of employee responding to the alert. |
| Input | ReasonCode | Char | No | The reason code. |
| Input | Response | Char | No | Response message. |
| Input | ResourceType | Integer | No | Type of the resource. |
| Input | ResourceClass | Integer | No | ResourceClass |
| Input | ResourceName | Char | No | ResourceName |
| Input | StatusActionPerformed | Integer | Yes | StatusActionPerformed |

## Validations

System performs the following validations:
 
 
- AlertID passed exists in the ALERT table,  
- EmployeeID passed exists in the EMPLOYEE table,  
- ReasonCode passed exists in the REASON_CODE table,  
- ResourceClassID is a valid ID in the RESOURCE_CLASS table or is 0,  
- ResourceTypeID is a valid ID in the RESOURCE_TYPE table or is 0,  
- ResourceName is valid in the RESOURCE table or is null.

## System Processing

During processing, the system:
 
 
- Performs the validations as stated above. 
- Retrieves the ALERT_RECIPIENT record. 
 
- Sets AlertRecipientID from ALERT_RECIPIENT table. 
- Sets Response Date to the current UTC date/time.  
 
- Retrieves the ALERT record.  
 
- Sets ResponseCount to ResponseCount + 1.  
- Sets Alert Status to the status passed to the method. 
 An alert cannot be updated with a status of Closed until Responses is greater than or equal to the Required Responses.  
 
- Creates an ALERT_RESPONSE record.

## Pre-Conditions

The Alert has been created and identified.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| ALERT | ResponseCount | Updates the response count by adding 1 to the persisted value. |
|  | AlertStatus | Updates the Alert Status as passed to the Business Component for input StatusActionPerformed. Valid inputs map to ALERT_STATUS. |
| ALERT_RESPONSE | AlertRecipientID | Link back to the ALERT_RECIPIENT record that is being responded to. |
|  | ResponseDate | The UTC date/time of the Alert response. |
|  | Response | A free form text response to the Alert. |
|  | ResourceType | The type of resource executing the Respond to Alert, as passed to the Business Component as ResourceType. |
|  | ResourceClassID | The class of the resource executing the Respond to Alert, as passed to the Business Component as ResourceClassID. |
|  | ResourceName | The name of the resource executing the Respond to Alert, as passed to the Business Component as ResourceName. |
|  | EmployeeID | The ID of the employee executing the Respond to Alert, as passed to the Business Component as EmployeeID. |
|  | ActionTaken | The Alert Status as passed to the Business Component for input StatusActionPerformed. Valid inputs map to ALERT_STATUS. |
|  | ReasonCode | The Reason Code as passed to the Business Component as ReasonCode. |
|  | AlertID | Link back to the ALERT record being responded to. |
