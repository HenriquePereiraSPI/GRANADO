# EMPLOYEE_ROLE_GROUP_RELATION

**Database:** Operational

**Description:** Relations between Role, Employee, Employee Groups, and Role Groups.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| EmployeeGroupRoleGroupID | INT(10,0) | True |  | False | EMPLOYEE_GROUP_ROLE_GROUP | Unique identifier of EMPLOYEE_GROUP_ROLE_GROUP. |
| EmployeeID | INT(10,0) | False |  | False | EMPLOYEE | Unique identifier of an employee. |
| ID | INT(10,0) | False |  | True |  | Unique identifier of the record. |
| RoleID | INT(10,0) | False |  | False | ROLE | Unique identifier of a role. |

## Primary Key

- **PK_EMPLOYEE_ROLE_GROUP_RELATION** on `ID`

## Foreign Keys (this table -> other)

- **FK_EMPLOYEE_ROLE_GROUP_RELATION_EMPLOYEE** — EMPLOYEE_ROLE_GROUP_RELATION -> EMPLOYEE (`EmployeeID -> ID`)
- **FK_EMPLOYEE_ROLE_GROUP_RELATION_EMPLOYEE_GROUP_ROLE_GROUP** — EMPLOYEE_ROLE_GROUP_RELATION -> EMPLOYEE_GROUP_ROLE_GROUP (`EmployeeGroupRoleGroupID -> ID`)
- **FK_EMPLOYEE_ROLE_GROUP_RELATION_ROLE** — EMPLOYEE_ROLE_GROUP_RELATION -> ROLE (`RoleID -> ID`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **UK_EMPLOYEE_ROLE_GROUP_RELATION** on `EmployeeID, RoleID, EmployeeGroupRoleGroupID`

## Non-Unique Indexes

- **IF_EMPLOYEE_ROLE_GROUP_RELATION_EMPLOYEE** on `EmployeeID`
- **IF_EMPLOYEE_ROLE_GROUP_RELATION_EMPLOYEE_GROUP_ROLE_GROUP** on `EmployeeGroupRoleGroupID`
- **IF_EMPLOYEE_ROLE_GROUP_RELATION_ROLE** on `RoleID`
