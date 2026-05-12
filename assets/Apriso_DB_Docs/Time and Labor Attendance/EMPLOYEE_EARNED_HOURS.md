# EMPLOYEE_EARNED_HOURS

**Database:** Operational

**Description:** Employee earnings year-to-date

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| CalendarYear | SMALLDATETIME | False |  | True |  | The year of the calendar |
| EarnCode | NVARCHAR(20) | False |  | True | EARN_CODE | Identifier for the type of employee earnings (regular, weekend, holiday, vacation) |
| EmployeeID | INT(10,0) | False |  | True | EMPLOYEE | Employee and Attributes unique identifier |
| HoursEarned | DECIMAL(28,10) | True | (0.0) | False |  | Number of hours earned for the employee |
| HoursTaken | DECIMAL(28,10) | True | (0.0) | False |  | The number of hours taken for the employee |
| LastDownloadedOn | DATETIME | True |  | False |  | Date when last time employees accrual balances were updated by employee accruals software. |

## Primary Key

- **PK_EMPLOYEE_EARNED_HOURS** on `EmployeeID, CalendarYear, EarnCode`

## Foreign Keys (this table -> other)

- **FK_EMPLOYEE_EARNED_HOURS_EARN_CODES1** — EMPLOYEE_EARNED_HOURS -> EARN_CODE (`EarnCode -> EarnCode`)
- **FK_EMPLOYEE_EARNED_HOURS_EMPLOYEE** — EMPLOYEE_EARNED_HOURS -> EMPLOYEE (`EmployeeID -> ID`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **** on ``
