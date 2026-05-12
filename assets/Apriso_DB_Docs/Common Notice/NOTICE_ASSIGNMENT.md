# NOTICE_ASSIGNMENT

**Database:** Operational

**Description:** This table stores assigment.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| EmployeeClass | SMALLINT(5,0) | True |  | False | EMPLOYEE_CLASS | ID of the Employee Class. |
| EmployeeID | INT(10,0) | True |  | False | EMPLOYEE | ID of the Employee. |
| ID | INT(10,0) | False |  | True |  | Unique identifier of the record. |
| NoticeID | INT(10,0) | False |  | False | NOTICE | ID of the Notice. |
| ResourceClassID | INT(10,0) | True |  | False | RESOURCE_CLASS | ID of the Resource Class. |
| RoleID | INT(10,0) | True |  | False | ROLE | ID of the Role. |

## Primary Key

- **PK_NOTICE_ASSIGNMENT** on `ID`

## Foreign Keys (this table -> other)

- **FK_NOTICE_ASSIGNMENT_EMPLOYEE** — NOTICE_ASSIGNMENT -> EMPLOYEE (`EmployeeID -> ID`)
- **FK_NOTICE_ASSIGNMENT_EMPLOYEE_CLASS** — NOTICE_ASSIGNMENT -> EMPLOYEE_CLASS (`EmployeeClass -> EmployeeClass`)
- **FK_NOTICE_ASSIGNMENT_NOTICE** — NOTICE_ASSIGNMENT -> NOTICE (`NoticeID -> ID`)
- **FK_NOTICE_ASSIGNMENT_RESOURCE_CLASS** — NOTICE_ASSIGNMENT -> RESOURCE_CLASS (`ResourceClassID -> ID`)
- **FK_NOTICE_ASSIGNMENT_ROLE** — NOTICE_ASSIGNMENT -> ROLE (`RoleID -> ID`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_NOTICE_ASSIGNMENT_EMPLOYEE_CLASS** on `EmployeeClass`
- **IF_NOTICE_ASSIGNMENT_NOTICE** on `NoticeID`
- **IF_NOTICE_ASSIGNMENT_RESOURCE_CLASS** on `ResourceClassID`
- **IF_NOTICE_ASSIGNMENT_ROLE** on `RoleID`
