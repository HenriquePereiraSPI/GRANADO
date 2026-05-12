# EMPLOYEE_GROUP

**Database:** Operational

**Description:** Groups Employees by reference to rows in the GROUP table.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| DisplayNo | INT(10,0) | True |  | False |  | For future use. |
| EmployeeID | INT(10,0) | False |  | True | EMPLOYEE | Assignment of an Employee to user-defined groups. |
| Group_ | NVARCHAR(40) | False |  | True | GROUP_ | Defines the assignment of the entity to a Group (user-defined). |
| GroupClassID | INT(10,0) | False |  | True | GROUP_ | Class of the Group (user-defined). |
| GroupType | SMALLINT(5,0) | False |  | True | GROUP_ | Type of the Group. |

## Primary Key

- **PK_EMPLOYEE_GROUP** on `EmployeeID, Group_, GroupType, GroupClassID`

## Foreign Keys (this table -> other)

- **FK_EMPLOYEE_GROUP_EMPLOYEE** — EMPLOYEE_GROUP -> EMPLOYEE (`EmployeeID -> ID`)
- **FK_EMPLOYEE_GROUP_GROUP** — EMPLOYEE_GROUP -> GROUP_ (`Group_, GroupType, GroupClassID -> Group_, GroupType, GroupClassID`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_EMPLOYEE_GROUP_GROUP** on `Group_, GroupType, GroupClassID`
