# SIGNATURE_DETAIL

**Database:** Operational

**Description:** This tables stores information about the Signature Details.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| Blocking | BIT | False |  | False |  | Indicates if this signature would block the attached process. |
| Comment_ | NVARCHAR(2000) | True |  | False |  | Comment. |
| EmployeeName | NVARCHAR(256) | True |  | False |  | Name of the Employee who signed the Signature. |
| EmployeeNo | NVARCHAR(256) | True |  | False |  | Number of the Employee who signed the Signature. |
| FUID | NVARCHAR(36) | False |  | False |  | Unique identifier for the entity across multiple Apriso instances. |
| ID | INT(10,0) | False |  | True |  | Primary Key. |
| ReasonCode | NVARCHAR(20) | True |  | False | REASON_CODE | Reason Code of the signature. |
| Role | NVARCHAR(40) | True |  | False |  | Role needed to sign off the Signature. |
| RoleDescription | NVARCHAR(256) | True |  | False |  | Role Description. |
| SequenceNo | INT(10,0) | True |  | False |  | Sequence number of the Signature. |
| SignatureClass | NVARCHAR(40) | True |  | False |  | Class of the Signature. |
| SignatureDetailCode | NVARCHAR(256) | True |  | False |  | Name of the Signature Detail. SignatureHeaderDefinitonID + SignatureDetailCode must be unique. |
| SignatureHeaderID | INT(10,0) | True |  | False | SIGNATURE_HEADER | Unique identifier of Signature Header used for linking with Signature entity. |
| SignatureTimeline | NVARCHAR(256) | True |  | False |  | Signature Timeline. |
| SignedOnLocalTime | DATETIME | True |  | False |  | Local time of the Signature being signed. |
| SignedOnLocation | NVARCHAR(256) | True |  | False |  | Location of the Signature being signed. |
| SignedOnTimeZone | INT(10,0) | True |  | False |  | Time zone of the Signature being signed. |
| Transaction_ | NVARCHAR(256) | True |  | False |  | Record Description. |
| UserReference | NVARCHAR(256) | True |  | False |  | Used for user reference. |

## Primary Key

- **PK_SIGNATURE_DETAIL** on `ID`

## Foreign Keys (this table -> other)

- **FK_SIGNATURE_DETAIL_REASON_CODE** — SIGNATURE_DETAIL -> REASON_CODE (`ReasonCode -> ReasonCode`)
- **FK_SIGNATURE_DETAIL_SIGNATURE_HEADER** — SIGNATURE_DETAIL -> SIGNATURE_HEADER (`SignatureHeaderID -> ID`)

## Referenced By (other tables -> this)

- **FK_WIP_USAGE_HISTORY_SIGNATURE_SIGNATURE_DETAIL** — WIP_USAGE_HISTORY_SIGNATURE -> SIGNATURE_DETAIL (`SignatureDetailID -> ID`)

## Unique Indexes

- **UK_SIGNATURE_DETAIL** on `FUID`

## Non-Unique Indexes

- **IF_SIGNATURE_DETAIL_SIGNATURE_HEADER** on `SignatureHeaderID`
