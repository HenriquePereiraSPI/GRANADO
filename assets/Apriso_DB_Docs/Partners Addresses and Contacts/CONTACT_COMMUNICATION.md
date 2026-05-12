# CONTACT_COMMUNICATION

**Database:** Operational

**Description:** For future use.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| CommunicationsTypeCode | NVARCHAR(40) | True |  | False | COMMUNICATION_TYPE | Type of the media used to contact (fax, email). |
| CommunicationsValue | NVARCHAR(255) | True |  | False |  | Depending of the type code, this field contains e.g. the fax number, email address. |
| ContactExtension | NVARCHAR(10) | True |  | False |  | For future use. |
| ContactID | INT(10,0) | False |  | False | CONTACT | Link to the parent CONTACT table. |
| DisplayNo | INT(10,0) | True |  | False |  | For future use. |
| ID | INT(10,0) | False |  | True |  | Unique identifier of a record (key) in a table. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_CONTACT_COMMUNICATIONS** on `ID`

## Foreign Keys (this table -> other)

- **FK_CONTACT_COMMUNICATION_COMMUNICATION_TYPE** — CONTACT_COMMUNICATION -> COMMUNICATION_TYPE (`CommunicationsTypeCode -> CommunicationsType`)
- **FK_CONTACT_COMMUNICATIONS_CONTACTS** — CONTACT_COMMUNICATION -> CONTACT (`ContactID -> ID`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_CONTACT_COMMUNICATIONS_CONTACTS** on `ContactID`
