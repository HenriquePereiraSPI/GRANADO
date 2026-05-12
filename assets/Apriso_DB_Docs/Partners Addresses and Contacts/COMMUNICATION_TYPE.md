# COMMUNICATION_TYPE

**Database:** Operational

**Description:** Contains the various defined communication types for reaching a partner or a resource. Apriso uses the E-mail Address type whenever an Alert is sent by e-mail.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| CommunicationsType | NVARCHAR(40) | False |  | True |  | Type of the communication media used to contact a partner or a resource. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_COMMUNICATION_TYPE** on `CommunicationsType`

## Foreign Keys (this table -> other)

- **** —  (``)

## Referenced By (other tables -> this)

- **FK_ALERT_RECIPIENT_COMMUNICATION_TYPE** — ALERT_RECIPIENT -> COMMUNICATION_TYPE (`CommunicationsTypeID -> CommunicationsType`)
- **FK_CONTACT_COMMUNICATION_COMMUNICATION_TYPE** — CONTACT_COMMUNICATION -> COMMUNICATION_TYPE (`CommunicationsTypeCode -> CommunicationsType`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **** on ``
