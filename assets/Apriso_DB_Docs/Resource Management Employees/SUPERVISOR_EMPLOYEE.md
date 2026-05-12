# SUPERVISOR_EMPLOYEE

**Database:** Operational

**Description:** The SUPERVISOR_EMPLOYEE table is used to store the link between one or more EMPLOYEES to one or more other EMPLOYEES to build a relationship between an employee and that employees supervisor.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| AssignedDate | DATETIME | True | (getutcdate()) | False |  | The date the supervisor was assigned to the employee |
| EmployeeID | INT(10,0) | False |  | True | EMPLOYEE | The ID of the employee record this table is associated with |
| Primary_ | BIT | True |  | False |  | Determines if the supervisor is the employee primary supervisor |
| ReadOnly | BIT | True |  | False |  | Determines if the supervisor can only view employees time and labor entries |
| SupervisorID | INT(10,0) | False |  | True | EMPLOYEE | The supervisor of the given employee |

## Primary Key

- **PK_SUPERVISOR_EMPLOYEES** on `SupervisorID, EmployeeID`

## Foreign Keys (this table -> other)

- **FK_SUPERVISOR_EMPLOYEES_EMPLOYEE** — SUPERVISOR_EMPLOYEE -> EMPLOYEE (`EmployeeID -> ID`)
- **FK_SUPERVISOR_EMPLOYEES_EMPLOYEE1** — SUPERVISOR_EMPLOYEE -> EMPLOYEE (`SupervisorID -> ID`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IXD_EmployeeID** on `EmployeeID`
