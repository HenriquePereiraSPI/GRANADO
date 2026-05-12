# EMPLOYEE_CITIZENSHIP

**Database:** Operational

**Description:** The table stores citizenship(s) of the Employee.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| CountryCode | NVARCHAR(3) | False |  | False | COUNTRY | Code of the Country. |
| EmployeeID | INT(10,0) | False |  | False | EMPLOYEE | The ID of the employee. |
| ID | INT(10,0) | False |  | True |  | Unique identifier. |

## Primary Key

- **PK_EMPLOYEE_CITIZENSHIP** on `ID`

## Foreign Keys (this table -> other)

- **FK_EMPLOYEE_CITIZENSHIP_COUNTRY** — EMPLOYEE_CITIZENSHIP -> COUNTRY (`CountryCode -> CountryCode`)
- **FK_EMPLOYEE_CITIZENSHIP_EMPLOYEE** — EMPLOYEE_CITIZENSHIP -> EMPLOYEE (`EmployeeID -> ID`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_EMPLOYEE_CITIZENSHIP_COUNTRY** on `CountryCode`
