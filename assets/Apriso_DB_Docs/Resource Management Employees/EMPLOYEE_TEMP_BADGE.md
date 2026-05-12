# EMPLOYEE_TEMP_BADGE

**Database:** Operational

**Description:** Stores the assignement of a row in the TEMPORARY_BADGE table with a row in the EMPLOYEE table.  This table is used when badges are used in the system and the Employee is missing there badge.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| AssignorID | INT(10,0) | False |  | False | EMPLOYEE | Person who assigned the Temporary Badge to an Employee. |
| BadgeNo | NVARCHAR(20) | False |  | False | TEMP_BADGE | Badge Number for the Temporary Badge. |
| EmployeeID | INT(10,0) | False |  | False | EMPLOYEE | ID of the Employee record the table is associated with. |
| Facility | NVARCHAR(40) | False |  | False | FACILITY | Facility the Employee's temporary badge is assigned to. |
| ID | INT(10,0) | False |  | True |  | Unique identifier of a record (key) in a table. |
| Payday | DATETIME | False |  | False |  | Pay Day the Employee's Temporary Badge is valid for. |
| ReasonCode | NVARCHAR(20) | True |  | False | REASON_CODE | Reason Code indicating why the entity is on Hold. |
| Shift | NVARCHAR(20) | True |  | False | WORK_SHIFT | Shift the Temporary Badge is to be used for. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_EMPLOYEE_TEMP_BADGE** on `ID`

## Foreign Keys (this table -> other)

- **FK_EMPLOYEE_TEMP_BADGE_FACILITY** — EMPLOYEE_TEMP_BADGE -> FACILITY (`Facility -> Facility`)
- **FK_EMPLOYEE_TEMP_BADGE_WORK_SHIFT** — EMPLOYEE_TEMP_BADGE -> WORK_SHIFT (`Facility, Shift -> Facility, Shift`)
- **FK_EMPLOYEE_TEMPORARY_BADGE_EMPLOYEE** — EMPLOYEE_TEMP_BADGE -> EMPLOYEE (`AssignorID -> ID`)
- **FK_EMPLOYEE_TEMPORARY_BADGES_EMPLOYEE** — EMPLOYEE_TEMP_BADGE -> EMPLOYEE (`EmployeeID -> ID`)
- **FK_EMPLOYEE_TEMPORARY_BADGES_REASON_CODES** — EMPLOYEE_TEMP_BADGE -> REASON_CODE (`ReasonCode -> ReasonCode`)
- **FK_EMPLOYEE_TEMPORARY_BADGES_TEMPORARY_BADGES** — EMPLOYEE_TEMP_BADGE -> TEMP_BADGE (`Facility, BadgeNo -> Facility, BadgeNo`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_EMPLOYEE_TEMP_BADGE_WORK_SHIFT** on `Shift, Facility`
- **IF_EMPLOYEE_TEMPORARY_BADGES_TEMPORARY_BADGES** on `Facility, BadgeNo`
- **IXD_BadgeNo_Payday** on `BadgeNo, Payday`
