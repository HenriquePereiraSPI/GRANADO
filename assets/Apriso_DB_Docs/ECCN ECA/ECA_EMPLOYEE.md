# ECA_EMPLOYEE

**Database:** Operational

**Description:** The link between ECA and Employee.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| AccessType | SMALLINT(5,0) | False |  | False |  | Type of Access (0-Allow, 1-Deny). |
| EcaID | INT(10,0) | False |  | False | ECA | Link to the ECA table. |
| EmployeeID | INT(10,0) | False |  | False | EMPLOYEE | The ID of the employee. |
| ID | INT(10,0) | False |  | True |  | Unique identifier. |
| UnitID | INT(10,0) | True |  | False | UNIT | Unique identifier of the Unit. |

## Primary Key

- **PK_ECA_EMPLOYEE** on `ID`

## Foreign Keys (this table -> other)

- **FK_ECA_EMPLOYEE_ECA** — ECA_EMPLOYEE -> ECA (`EcaID -> ID`)
- **FK_ECA_EMPLOYEE_EMPLOYEE** — ECA_EMPLOYEE -> EMPLOYEE (`EmployeeID -> ID`)
- **FK_ECA_EMPLOYEE_UNIT** — ECA_EMPLOYEE -> UNIT (`UnitID -> ID`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_ECA_EMPLOYEE_ECA** on `EcaID`
- **IF_ECA_EMPLOYEE_UNIT** on `UnitID`
