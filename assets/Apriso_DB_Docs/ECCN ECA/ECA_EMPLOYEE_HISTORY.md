# ECA_EMPLOYEE_HISTORY

**Database:** Operational

**Description:** The table stores history for ECA_EMPLOYEE table.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| AccessType | SMALLINT(5,0) | False |  | False |  | Type of Access (0-Allow, 1-Deny). |
| EcaID | INT(10,0) | False |  | False | ECA | Link to the ECA table. |
| EmployeeID | INT(10,0) | False |  | False | EMPLOYEE | The ID of the employee. |
| ID | INT(10,0) | False |  | True |  | Unique identifier. |
| UnitID | INT(10,0) | True |  | False | UNIT | Unique identifier of the Unit. |
| ValidFrom | DATETIME | True |  | False |  | Valid from date. |
| ValidTo | DATETIME | True |  | False |  | Valid to date. |

## Primary Key

- **PK_ECA_EMPLOYEE_HISTORY** on `ID`

## Foreign Keys (this table -> other)

- **FK_ECA_EMPLOYEE_HISTORY_ECA** — ECA_EMPLOYEE_HISTORY -> ECA (`EcaID -> ID`)
- **FK_ECA_EMPLOYEE_HISTORY_EMPLOYEE** — ECA_EMPLOYEE_HISTORY -> EMPLOYEE (`EmployeeID -> ID`)
- **FK_ECA_EMPLOYEE_HISTORY_UNIT** — ECA_EMPLOYEE_HISTORY -> UNIT (`UnitID -> ID`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_ECA_EMPLOYEE_HISTORY_ECA** on `EcaID`
- **IF_ECA_EMPLOYEE_HISTORY_UNIT** on `UnitID`
