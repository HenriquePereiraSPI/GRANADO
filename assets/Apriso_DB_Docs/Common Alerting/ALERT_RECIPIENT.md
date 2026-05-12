# ALERT_RECIPIENT

**Database:** Operational

**Description:** Contains information about who should see a given Alert's escalalation level and what media should be used to communicate with the associated Resources.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| AlertID | INT(10,0) | False |  | False | ALERT | ID of the Alert involved. |
| CommunicationsTypeID | NVARCHAR(40) | True |  | False | COMMUNICATION_TYPE | ID of the Communication Type linked to the Alert Recipient. Currently two types are supported: EmailAddress and HomePage. |
| EmployeeID | INT(10,0) | True |  | False | EMPLOYEE | ID of the Employee linked to the Alert Recipient. |
| EscalationLevel | INT(10,0) | True |  | False |  | For future use. |
| ID | INT(10,0) | False |  | True |  | Unique identifier of a record (key) in a table. |
| ResourceClassID | INT(10,0) | True |  | False | RESOURCE_CLASS | ID of the Resource Class linked to the Alert Recipient. |
| ResourceName | NVARCHAR(80) | True |  | False | RESOURCE_ | Resource Type linked to the Alert Recipient, as determined using FLX_ALERT_RECIPIENT_DETERMINATION. |
| ResourceType | SMALLINT(5,0) | True |  | False | RESOURCE_ | Resource Type + Resource uniquely define a Resource. |
| RoleID | INT(10,0) | True |  | False | ROLE | ID of the Role linked to the Alert Recipient. |
| TaskID | INT(10,0) | True |  | False | TASK | ID of the Task linked to the Alert Recipient (if passed when the alert was created). |

## Primary Key

- **PK_ALERT_RECIPIENT** on `ID`

## Foreign Keys (this table -> other)

- **FK_ALERT_RECIPIENT_ALERT** — ALERT_RECIPIENT -> ALERT (`AlertID -> ID`)
- **FK_ALERT_RECIPIENT_COMMUNICATION_TYPE** — ALERT_RECIPIENT -> COMMUNICATION_TYPE (`CommunicationsTypeID -> CommunicationsType`)
- **FK_ALERT_RECIPIENT_EMPLOYEE** — ALERT_RECIPIENT -> EMPLOYEE (`EmployeeID -> ID`)
- **FK_ALERT_RECIPIENT_RESOURCE_** — ALERT_RECIPIENT -> RESOURCE_ (`ResourceType, ResourceName -> ResourceType, ResourceName`)
- **FK_ALERT_RECIPIENT_RESOURCE_CLASS** — ALERT_RECIPIENT -> RESOURCE_CLASS (`ResourceClassID -> ID`)
- **FK_ALERT_RECIPIENT_ROLE** — ALERT_RECIPIENT -> ROLE (`RoleID -> ID`)
- **FK_ALERT_RECIPIENT_TASK** — ALERT_RECIPIENT -> TASK (`TaskID -> ID`)

## Referenced By (other tables -> this)

- **FK_ALERT_RESPONSE_ALERT_RECIPIENT** — ALERT_RESPONSE -> ALERT_RECIPIENT (`AlertRecipientID -> ID`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_ALERT_RECIPIENT_RESOURCE_** on `ResourceName, ResourceType`
- **IF_ALERT_RECIPIENT_RESOURCE_CLASS** on `ResourceClassID`
- **IF_ALERT_RECIPIENT_ROLE** on `RoleID`
- **IF_ALERT_RECIPIENT_TASK** on `TaskID`
- **IXD_AlertID_EmployeeID** on `AlertID, EmployeeID`
