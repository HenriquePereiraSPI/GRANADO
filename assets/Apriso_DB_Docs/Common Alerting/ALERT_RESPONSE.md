# ALERT_RESPONSE

**Database:** Operational

**Description:** Contains the various responses made by Alert recipients.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| ActionTaken | INT(10,0) | True |  | False |  | Alert Status as passed to a Business Component for input StatusActionPerformed. Valid inputs map to ALERT_STATUS. |
| AlertID | INT(10,0) | True |  | False | ALERT | ID of the Alert involved (uses ALERT table). |
| AlertRecipientID | INT(10,0) | False |  | False | ALERT_RECIPIENT | ID of the Alert Recipient linked to the Alert Response (uses ALERT_RECIPIENT). |
| EmployeeID | INT(10,0) | True |  | False | EMPLOYEE | ID of the Employee executing the Alert Response. It is passed to a Business Component as EmployeeID. |
| ID | INT(10,0) | False |  | True |  | Unique identifier of a record (key) in a table |
| ReasonCode | NVARCHAR(20) | True |  | False | REASON_CODE | Reason Code entered for the Alert Response. |
| ResourceClassID | INT(10,0) | True |  | False | RESOURCE_CLASS | ID for the class of the Resource executing the Alert Response. It is passed to a Business Component as ResourceClassID. |
| ResourceName | NVARCHAR(80) | True |  | False | RESOURCE_ | Name of the Resource executing the Alert Response. It is passed to a Business Component as ResourceName. |
| ResourceType | SMALLINT(5,0) | True |  | False | RESOURCE_ | Resource Type + Resource uniquely define a resource. |
| Response | NVARCHAR(255) | True |  | False |  | Alert Status as passed to a Business Component for input StatusActionPerformed. Valid inputs map to ALERT_STATUS. |
| ResponseDate | DATETIME | True |  | False |  | UTC date/time of the Alert Response. |

## Primary Key

- **PK_ALERT_RESPONSE** on `ID`

## Foreign Keys (this table -> other)

- **FK_ALERT_RESPONSE_ALERT** — ALERT_RESPONSE -> ALERT (`AlertID -> ID`)
- **FK_ALERT_RESPONSE_ALERT_RECIPIENT** — ALERT_RESPONSE -> ALERT_RECIPIENT (`AlertRecipientID -> ID`)
- **FK_ALERT_RESPONSE_EMPLOYEE** — ALERT_RESPONSE -> EMPLOYEE (`EmployeeID -> ID`)
- **FK_ALERT_RESPONSE_REASON_CODE** — ALERT_RESPONSE -> REASON_CODE (`ReasonCode -> ReasonCode`)
- **FK_ALERT_RESPONSE_RESOURCE_** — ALERT_RESPONSE -> RESOURCE_ (`ResourceType, ResourceName -> ResourceType, ResourceName`)
- **FK_ALERT_RESPONSE_RESOURCE_CLASS** — ALERT_RESPONSE -> RESOURCE_CLASS (`ResourceClassID -> ID`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_ALERT_RESPONSE_ALERT_RECIPIENT** on `AlertRecipientID`
- **IF_ALERT_RESPONSE_RESOURCE_** on `ResourceName, ResourceType`
- **IF_ALERT_RESPONSE_RESOURCE_CLASS** on `ResourceClassID`
- **IXD_AlertID_EmployeeID** on `AlertID, EmployeeID`
