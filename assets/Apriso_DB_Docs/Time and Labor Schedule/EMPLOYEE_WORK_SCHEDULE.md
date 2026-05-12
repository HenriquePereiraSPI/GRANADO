# EMPLOYEE_WORK_SCHEDULE

**Database:** Operational

**Description:** Stores override data for an Employees Schedule concerning a Daily schedule. Rows in this table will override the data maintained in the CALENDAR, WORK_SHIFT,  WORK_PERIOD tables.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| AfterAddOnName1 | NVARCHAR(40) | True |  | False | WORK_ADD_ON | First After Add-On Name for the specified Pay Day the Employee has an override schedule for. Linked to the WORK_ADD_ON table. |
| AfterAddOnName2 | NVARCHAR(40) | True |  | False | WORK_ADD_ON | Second After Add-On Name for the specified Pay Day the Employee has an override schedule for. Linked to the WORK_ADD_ON table. |
| BeforeAddOnName | NVARCHAR(40) | True |  | False | WORK_ADD_ON | Before Add-On Name for the specified Pay Day the Employee has an override schedule for.  Linked to the WORK_ADD_ON table. |
| EarnCode | NVARCHAR(20) | True |  | False | EARN_CODE | Earn Code the Employee is scheduled to work for. |
| EffectiveDate | DATETIME | True |  | False |  | Validity (start) date of the entity in UTC. |
| EmployeeID | INT(10,0) | False |  | False | EMPLOYEE_TEAM | ID of the Employee record the table is associated with. |
| EndTime | DATETIME | True |  | False |  | Scheduled end time in UTC time. |
| Facility | NVARCHAR(40) | False |  | False | EMPLOYEE_TEAM | Facility the Temporary Work Schedule is associated with. |
| ID | INT(10,0) | False |  | True |  | Unique identifier of a record (key) in a table. |
| NonWorking | BIT | True |  | False |  | Flag indicating that the specified Pay Day of the Employee has an override schedule.  A non-working day establishes scheduled hours, even though the Employee is not formally scheduled. |
| PayDay | DATETIME | False |  | False |  | Pay Day the Employee Work Schedule is defined for. |
| ScheduleHours | DECIMAL(28,10) | True |  | False |  | The scheduled amount of hours |
| Shift | NVARCHAR(20) | True |  | False | WORK_SHIFT | Shift the Employee is scheduled for. |
| StartTime | DATETIME | True |  | False |  | Start time in UTC for the given schedule. |
| Team | NVARCHAR(40) | True |  | False | EMPLOYEE_TEAM | For future use. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |
| WorkCenter | NVARCHAR(40) | True |  | False | WORK_CENTER | For future use. |
| WorkPeriod | NVARCHAR(20) | True |  | False |  | Work Period for the specified Pay Day the Employee has an override for. Linked to the WORK_PERIOD table. |

## Primary Key

- **PK_EMPLOYEE_WORK_SCHEDULE** on `ID`

## Foreign Keys (this table -> other)

- **FK_EMPLOYEE_WORK_SCHEDULE_EARN_CODES1** — EMPLOYEE_WORK_SCHEDULE -> EARN_CODE (`EarnCode -> EarnCode`)
- **FK_EMPLOYEE_WORK_SCHEDULE_EMPLOYEE_TEAM** — EMPLOYEE_WORK_SCHEDULE -> EMPLOYEE_TEAM (`EmployeeID, Facility, Team -> EmployeeID, Facility, Team`)
- **FK_EMPLOYEE_WORK_SCHEDULE_EMPLOYEE1** — EMPLOYEE_WORK_SCHEDULE -> EMPLOYEE (`EmployeeID -> ID`)
- **FK_EMPLOYEE_WORK_SCHEDULE_FACILITY** — EMPLOYEE_WORK_SCHEDULE -> FACILITY (`Facility -> Facility`)
- **FK_EMPLOYEE_WORK_SCHEDULE_TEAM** — EMPLOYEE_WORK_SCHEDULE -> TEAM (`Facility, Team -> Facility, Team`)
- **FK_EMPLOYEE_WORK_SCHEDULE_WORK_ADD_ON** — EMPLOYEE_WORK_SCHEDULE -> WORK_ADD_ON (`Facility, AfterAddOnName1 -> Facility, AddOnName`)
- **FK_EMPLOYEE_WORK_SCHEDULE_WORK_ADD_ON1** — EMPLOYEE_WORK_SCHEDULE -> WORK_ADD_ON (`AfterAddOnName2 -> AddOnName`)
- **FK_EMPLOYEE_WORK_SCHEDULE_WORK_ADD_ON2** — EMPLOYEE_WORK_SCHEDULE -> WORK_ADD_ON (`BeforeAddOnName -> AddOnName`)
- **FK_EMPLOYEE_WORK_SCHEDULE_WORK_CENTER** — EMPLOYEE_WORK_SCHEDULE -> WORK_CENTER (`WorkCenter -> WorkCenter`)
- **FK_EMPLOYEE_WORK_SCHEDULE_WORK_SHIFT** — EMPLOYEE_WORK_SCHEDULE -> WORK_SHIFT (`Facility, Shift -> Facility, Shift`)

## Referenced By (other tables -> this)

- **FK_EMPLOYEE_BREAK_SCHEDULE_EMPLOYEE_WORK_SCHEDULE** — EMPLOYEE_BREAK_SCHEDULE -> EMPLOYEE_WORK_SCHEDULE (`EmployeeWorkScheduleID -> ID`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_EMPLOYEE_WORK_SCHEDULE_EMPLOYEE_TEAM** on `EmployeeID, Team, Facility`
- **IF_EMPLOYEE_WORK_SCHEDULE_EMPLOYEE_TEAM_XREF1** on `EmployeeID, Facility, Team`
- **IF_EMPLOYEE_WORK_SCHEDULE_TEAM** on `Facility, Team`
- **IF_EMPLOYEE_WORK_SCHEDULE_WORK_ADD_ON** on `AfterAddOnName1, Facility`
- **IF_EMPLOYEE_WORK_SCHEDULE_WORK_ADD_ON1** on `AfterAddOnName2, Facility`
- **IF_EMPLOYEE_WORK_SCHEDULE_WORK_ADD_ON2** on `BeforeAddOnName, Facility`
- **IF_EMPLOYEE_WORK_SCHEDULE_WORK_ADD_ONS** on `Facility, AfterAddOnName1`
- **IF_EMPLOYEE_WORK_SCHEDULE_WORK_ADD_ONS1** on `Facility, AfterAddOnName2`
- **IF_EMPLOYEE_WORK_SCHEDULE_WORK_SHIFT** on `Shift, Facility`
