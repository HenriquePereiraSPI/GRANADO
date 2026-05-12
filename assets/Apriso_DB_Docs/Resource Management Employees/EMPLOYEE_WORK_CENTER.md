# EMPLOYEE_WORK_CENTER

**Database:** Operational

**Description:** This table stores the link between an Employee and the Work Centers to which the Employee is permitted.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| CurrentWorkCenterFlag | BIT | True |  | False |  | The current Work Center at which the Employee is working. On the Task List assigned to the Work Center, the user needs to have this Work Center assigned. Additionally, this flag needs to be set to 1 to see the task in the Task List. |
| EmployeeID | INT(10,0) | False |  | True | EMPLOYEE | The ID of the Employee record with which the table is associated. |
| WorkCenter | NVARCHAR(40) | False |  | True | WORK_CENTER | The Work Center to which the Employee is assigned. |

## Primary Key

- **PK_EMPLOYEE_WORK_CENTER** on `EmployeeID, WorkCenter`

## Foreign Keys (this table -> other)

- **FK_EMPLOYEE_WORK_CENTER_EMPLOYEE** — EMPLOYEE_WORK_CENTER -> EMPLOYEE (`EmployeeID -> ID`)
- **FK_EMPLOYEE_WORK_CENTER_WORK_CENTER** — EMPLOYEE_WORK_CENTER -> WORK_CENTER (`WorkCenter -> WorkCenter`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **** on ``
