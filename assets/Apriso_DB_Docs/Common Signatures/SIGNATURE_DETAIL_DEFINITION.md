# SIGNATURE_DETAIL_DEFINITION

**Database:** Operational

**Description:** This table stores information about signature detail definition.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| Blocking | BIT | False |  | False |  | Indicates if the signature would block the process. |
| Description | NVARCHAR(256) | True |  | False |  | Description of the signature. |
| FUID | NVARCHAR(36) | False |  | False |  | Unique identifier for the entity across multiple Apriso instances. |
| ID | INT(10,0) | False |  | True |  | Primary Key. |
| RoleID | INT(10,0) | False |  | False | ROLE | Unique identifier of the Role needed to sign off the Signature. |
| SequenceNo | INT(10,0) | True |  | False |  | Sequence number of the signature. |
| SignatureClassID | INT(10,0) | False |  | False | SIGNATURE_CLASS | Unique identifier of the Signature Class. |
| SignatureDetailCode | NVARCHAR(256) | False |  | False |  | Name of the Signature Detail. SignatureHeaderDefinitonID + SignatureDetailCode must be unique. |
| SignatureHeaderDefinitionID | INT(10,0) | True |  | False | SIGNATURE_HEADER_DEFINITION | Unique identifier of Signature Header definition used for linking with Signature entity. |
| SignatureTimeline | SMALLINT(5,0) | False |  | False | SIGNATURE_TIMELINE | Signature Timeline. |

## Primary Key

- **PK_SIGNATURE_DETAIL_DEFINITION** on `ID`

## Foreign Keys (this table -> other)

- **FK_SIGNATURE_DETAIL_DEFINITION_ROLE** — SIGNATURE_DETAIL_DEFINITION -> ROLE (`RoleID -> ID`)
- **FK_SIGNATURE_DETAIL_DEFINITION_SIGNATURE_CLASS** — SIGNATURE_DETAIL_DEFINITION -> SIGNATURE_CLASS (`SignatureClassID -> ID`)
- **FK_SIGNATURE_DETAIL_DEFINITION_SIGNATURE_HEADER_DEFINITION** — SIGNATURE_DETAIL_DEFINITION -> SIGNATURE_HEADER_DEFINITION (`SignatureHeaderDefinitionID -> ID`)
- **FK_SIGNATURE_DETAIL_DEFINITION_SIGNATURE_TIMELINE** — SIGNATURE_DETAIL_DEFINITION -> SIGNATURE_TIMELINE (`SignatureTimeline -> SignatureTimeline`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **UK_SIGNATURE_DETAIL_DEFINITION** on `SignatureHeaderDefinitionID, SignatureDetailCode`
- **UK_SIGNATURE_DETAIL_DEFINITION2** on `FUID`

## Non-Unique Indexes

- **IF_SIGNATURE_DETAIL_DEFINITION_ROLE** on `RoleID`
- **IF_SIGNATURE_DETAIL_DEFINITION_SIGNATURE_CLASS** on `SignatureClassID`
- **IF_SIGNATURE_DETAIL_DEFINITION_SIGNATURE_TIMELINE** on `SignatureTimeline`
