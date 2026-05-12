# NOTICE

**Database:** Operational

**Description:** This table stores a notice.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| AcknowledgeType | SMALLINT(5,0) | False |  | False |  | Acknowledgement message type: 1 - Once, 2 - Always. |
| ActiveDate | DATETIME | True |  | False |  | Active Date. |
| ActiveEmployeeID | INT(10,0) | True |  | False | EMPLOYEE | Id of the Employee. |
| BlockLogin | BIT | False |  | False |  | Indicates if the Login should be blocked. |
| ClassificationID | BIGINT(19,0) | True |  | False |  | Unique identifier of the classification. Currently supported for the maximum INT value. |
| ClosedDate | DATETIME | True |  | False |  | Closed Date. |
| ClosedEmployeeID | INT(10,0) | True |  | False | EMPLOYEE | Id of the Employee. |
| DSID | NVARCHAR(100) | True |  | False |  | DELMIA 3DEXPERIENCE Universal Unique ID (Physical ID). |
| DSInstanceID | NVARCHAR(100) | True |  | False |  | DELMIA 3DEXPERIENCE Instance ID. |
| DSInstanceName | NVARCHAR(100) | True |  | False |  | DELMIA 3DEXPERIENCE Instance Name. |
| ID | INT(10,0) | False |  | True |  | Unique identifier of the record. |
| Name | NVARCHAR(80) | False |  | False |  | Name of the Notice. |
| PolicyConfirmationTextID | INT(10,0) | True |  | False |  | ID of the Text. |
| Revision | NVARCHAR(80) | False |  | False |  | Revision of the Notice. |
| Status | SMALLINT(5,0) | False |  | False |  | Notice status: 1 - New, 2 - Active, 3 - Closed. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |
| Type | INT(10,0) | False |  | False |  | Notice type: 1 - Policy, 2 - Info. |
| ValidDateFromLocal | DATETIME | True |  | False |  | Validate date from. |
| ValidDateToLocal | DATETIME | True |  | False |  | Validate date to. |

## Primary Key

- **PK_NOTICE** on `ID`

## Foreign Keys (this table -> other)

- **FK_NOTICE_EMPLOYEE_ACTIVE** — NOTICE -> EMPLOYEE (`ActiveEmployeeID -> ID`)
- **FK_NOTICE_EMPLOYEE_CLOSED** — NOTICE -> EMPLOYEE (`ClosedEmployeeID -> ID`)

## Referenced By (other tables -> this)

- **FK_NOTICE_ACKNOWLEDGEMENT_NOTICE** — NOTICE_ACKNOWLEDGEMENT -> NOTICE (`NoticeID -> ID`)
- **FK_NOTICE_ASSIGNMENT_NOTICE** — NOTICE_ASSIGNMENT -> NOTICE (`NoticeID -> ID`)
- **FK_PROCESS_NOTICE_NOTICE_ID** — PROCESS_NOTICE -> NOTICE (`NoticeID -> ID`)
- **FK_QUALITY_DEFECT_NOTICE** — QUALITY_DEFECT -> NOTICE (`NoticeID -> ID`)
- **FK_WIP_NOTICE_NOTICE** — WIP_NOTICE -> NOTICE (`NoticeID -> ID`)

## Unique Indexes

- **UX_NOTICE** on `Name, Revision`

## Non-Unique Indexes

- **IDX_NOTICE_CLASSIFICATIONID** on `ClassificationID`
- **IF_NOTICE_DSID** on `DSID`
- **IF_NOTICE_DSInstanceID** on `DSInstanceID`
