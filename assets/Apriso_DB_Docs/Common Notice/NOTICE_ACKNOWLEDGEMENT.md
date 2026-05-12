# NOTICE_ACKNOWLEDGEMENT

**Database:** Operational

**Description:** This table stores acknowledged a notice.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| DateAcknowledged | DATETIME | False |  | False |  | Date of Acknowledgement. |
| EmployeeID | INT(10,0) | False |  | False | EMPLOYEE | ID of the Employee. |
| ID | INT(10,0) | False |  | True |  | Unique identifier of the record. |
| NoticeID | INT(10,0) | False |  | False | NOTICE | ID of the Notice. |
| TaskID | INT(10,0) | True |  | False | TASK | Link to the TASK table. |
| Voided | BIT | False |  | False |  | This field will allow the administrator to void an acknowledgement to force the user to view it again. |

## Primary Key

- **PK_NOTICE_ACKNOWLEDGEMENT** on `ID`

## Foreign Keys (this table -> other)

- **FK_NOTICE_ACKNOWLEDGEMENT_EMPLOYEE** — NOTICE_ACKNOWLEDGEMENT -> EMPLOYEE (`EmployeeID -> ID`)
- **FK_NOTICE_ACKNOWLEDGEMENT_NOTICE** — NOTICE_ACKNOWLEDGEMENT -> NOTICE (`NoticeID -> ID`)
- **FK_NOTICE_ACKNOWLEDGEMENT_TASK** — NOTICE_ACKNOWLEDGEMENT -> TASK (`TaskID -> ID`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IDX_NOTICE_ACKNOWLEDGEMENT_NoticeID_EmployeeID_Void** on `NoticeID, EmployeeID, Voided`
- **IF_NOTICE_ACKNOWLEDGEMENT_TASK** on `TaskID`
