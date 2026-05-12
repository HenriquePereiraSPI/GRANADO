# EMPLOYEE_PAY_CYCLE

**Database:** Operational

**Description:** Links an EMPLOYEE to one or more rows in the PAY_CYCLE table. This link is through the EMPLOYEE to EMPLOYEE_FACILITY to EMPLOYEE_PAY_CYCLE.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| CalendarYear | DATETIME | False |  | True | PAY_CYCLE | Calendar year the Pay Cycle assigned to the Employee is defined as. |
| EmployeeID | INT(10,0) | False |  | True | EMPLOYEE_FACILITY | ID of the Employee record the table is associated with. |
| Facility | NVARCHAR(40) | False |  | True | PAY_CYCLE | Facility the Employee is configured for. |
| PayCycle | INT(10,0) | False |  | False | PAY_CYCLE | Pay Cycle the Employee has been assigned to. |

## Primary Key

- **PK_EMPLOYEE_PAY_CYCLES** on `EmployeeID, Facility, CalendarYear`

## Foreign Keys (this table -> other)

- **FK_EMPLOYEE_PAY_CYCLE_PAY_CYCLE** — EMPLOYEE_PAY_CYCLE -> PAY_CYCLE (`Facility, CalendarYear, PayCycle -> Facility, CalendarYear, PayCycle`)
- **FK_EMPLOYEE_PAY_CYCLES_EMPLOYEE_FACILITY_XREF** — EMPLOYEE_PAY_CYCLE -> EMPLOYEE_FACILITY (`EmployeeID, Facility -> EmployeeID, Facility`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_EMPLOYEE_PAY_CYCLE_PAY_CYCLE** on `PayCycle, CalendarYear, Facility`
- **IF_EMPLOYEE_PAY_CYCLES_PAY_CYCLES** on `Facility, PayCycle, CalendarYear`
- **IXD_CalendarYear_PayCycle** on `CalendarYear, PayCycle`
