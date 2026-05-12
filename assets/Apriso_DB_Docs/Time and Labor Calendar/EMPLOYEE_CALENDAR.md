# EMPLOYEE_CALENDAR

**Database:** Operational

**Description:** Links an EMPLOYEE to one or more rows in the CALENDAR table.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| CalendarID | INT(10,0) | False |  | True | CALENDAR | ID of the Calendar record the table is associated with. |
| EmployeeID | INT(10,0) | False |  | True | EMPLOYEE | ID of the Employee record the table is associated with. |

## Primary Key

- **PK_EMPLOYEE_CALENDAR** on `EmployeeID, CalendarID`

## Foreign Keys (this table -> other)

- **FK_EMPLOYEE_CALENDAR_CALENDARS1** — EMPLOYEE_CALENDAR -> CALENDAR (`CalendarID -> ID`)
- **FK_EMPLOYEE_CALENDAR_EMPLOYEE** — EMPLOYEE_CALENDAR -> EMPLOYEE (`EmployeeID -> ID`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **** on ``
