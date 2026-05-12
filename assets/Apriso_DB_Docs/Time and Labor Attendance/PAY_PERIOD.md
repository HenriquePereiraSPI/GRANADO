# PAY_PERIOD

**Database:** Operational

**Description:** Stores all the available Pay Periods in the system under a Pay Cycle. The Pay Period is the weekly detail of the PAY_CYCLE table.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| CalendarYear | DATETIME | False |  | False | PAY_CYCLE | Calendar year the Pay Period is defined as. |
| ClosedBy | NVARCHAR(50) | True |  | False |  | Person who closed the Pay Period. |
| ClosedOn | DATETIME | True |  | False |  | Date the Pay Period was closed. |
| EndDate | DATETIME | True |  | False |  | End date for the Pay Cycle (usually the end of a week). |
| Facility | NVARCHAR(40) | False |  | False | PAY_CYCLE | Facility of the Pay Period. |
| ID | INT(10,0) | False |  | True |  | Unique identifier of a record (key) in a table. |
| LockOutDate | DATETIME | True |  | False |  | Date by which the Pay Period is locked to edits. Only a Payroll Administrator can edit after this date. |
| PayCycle | INT(10,0) | False |  | False | PAY_CYCLE | Link back to the parent PAY_CYCLE row. |
| PayPeriodExtractDate | DATETIME | True |  | False |  | Date and time at which the payperiod information has been extracted to Payroll. |
| SequenceNo | INT(10,0) | False |  | False |  | Sequence of the given Pay Period in a given Pay Cycle. |
| StartDate | DATETIME | True |  | False |  | Max hours before Sunday overtime if SundayPayAsOTFlag is true. |
| Status | SMALLINT(5,0) | True |  | False | PAY_PERIOD_STATUS | Status of the Pay Period. |

## Primary Key

- **PK_PAY_PERIODS** on `ID`

## Foreign Keys (this table -> other)

- **FK_PAY_PERIOD_PAY_CYCLE** — PAY_PERIOD -> PAY_CYCLE (`Facility, PayCycle, CalendarYear -> Facility, PayCycle, CalendarYear`)
- **FK_PAY_PERIODS_PAY_PERIOD_STATUS** — PAY_PERIOD -> PAY_PERIOD_STATUS (`Status -> Status`)

## Referenced By (other tables -> this)

- **FK_ATTENDANCE_PAY_PERIOD** — ATTENDANCE -> PAY_PERIOD (`PayPeriodID -> ID`)
- **FK_LABOR_PAY_PERIOD** — LABOR -> PAY_PERIOD (`PayPeriodID -> ID`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_PAY_PERIOD_PAY_CYCLE** on `PayCycle, CalendarYear, Facility`
- **IF_PAY_PERIODS_PAY_PERIOD_STATUS** on `Status`
- **IXD_PayCycle_CalendarYear_EndDate** on `PayCycle, CalendarYear, EndDate`
