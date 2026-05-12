# EMPLOYEE_TYPE

**Database:** Operational

**Description:** Defines the type of each Employee.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| EmployeeType | SMALLINT(5,0) | False |  | True |  | Type of the Employee (Regular, Temporary and Template). |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_EMPLOYEE_TYPE** on `EmployeeType`

## Foreign Keys (this table -> other)

- **** —  (``)

## Referenced By (other tables -> this)

- **FK_EMPLOYEE_EMPLOYEE_TYPE** — EMPLOYEE -> EMPLOYEE_TYPE (`EmployeeType -> EmployeeType`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **** on ``
