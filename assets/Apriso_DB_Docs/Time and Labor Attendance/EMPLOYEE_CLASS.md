# EMPLOYEE_CLASS

**Database:** Operational

**Description:** Stores the PRIME data for available Employee Classes. Employee Classes are used to classify an Employee as Salaried exempt, Salaried non-exempt, or Hourly non-exempt. The flag is used to control the Time Manager application.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| EmployeeClass | SMALLINT(5,0) | False |  | True |  | Class of the Employee (Exempt, Non-Exempt and Hourly Non-Exempt). |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_EMPLOYEE_CLASS** on `EmployeeClass`

## Foreign Keys (this table -> other)

- **** —  (``)

## Referenced By (other tables -> this)

- **FK_EMPLOYEE_EMPLOYEE_CLASS** — EMPLOYEE -> EMPLOYEE_CLASS (`EmployeeClass -> EmployeeClass`)
- **FK_NOTICE_ASSIGNMENT_EMPLOYEE_CLASS** — NOTICE_ASSIGNMENT -> EMPLOYEE_CLASS (`EmployeeClass -> EmployeeClass`)
- **FK_TRANSACTION_HISTORY_EMPLOYEE_CLASS** — TRANSACTION_HISTORY -> EMPLOYEE_CLASS (`EmployeeClass -> EmployeeClass`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **** on ``
