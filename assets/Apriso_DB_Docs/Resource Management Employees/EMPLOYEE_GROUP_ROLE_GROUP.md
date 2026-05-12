# EMPLOYEE_GROUP_ROLE_GROUP

**Database:** Operational

**Description:** Links between Employee Groups and Role Groups.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| EmployeeGroup | NVARCHAR(40) | True |  | False | GROUP_ | Name of the employee group. |
| EmployeeGroupClassID | INT(10,0) | True |  | False | GROUP_ | Unique identifier of employee Group class. |
| EmployeeGroupType | SMALLINT(5,0) | True |  | False | GROUP_ | Type of the employee group (must be 8). |
| EmployeeID | INT(10,0) | True |  | False | EMPLOYEE | Unique identifier of an employee. |
| ID | INT(10,0) | False |  | True |  | Unique identifier of the record. |
| RoleGroup | NVARCHAR(40) | True |  | False | GROUP_ | Name of the employee group. |
| RoleGroupClassID | INT(10,0) | True |  | False | GROUP_ | Unique identifier of the role Group class. |
| RoleGroupType | SMALLINT(5,0) | True |  | False | GROUP_ | Type of role group (must be 8). |
| RoleID | INT(10,0) | True |  | False | ROLE | Unique identifier of a role. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_EMPLOYEE_GROUP_ROLE_GROUP** on `ID`

## Foreign Keys (this table -> other)

- **FK_EMPLOYEE_GROUP_ROLE_GROUP_EMPLOYEE** — EMPLOYEE_GROUP_ROLE_GROUP -> EMPLOYEE (`EmployeeID -> ID`)
- **FK_EMPLOYEE_GROUP_ROLE_GROUP_GROUP_1** — EMPLOYEE_GROUP_ROLE_GROUP -> GROUP_ (`EmployeeGroup, EmployeeGroupType, EmployeeGroupClassID -> Group_, GroupType, GroupClassID`)
- **FK_EMPLOYEE_GROUP_ROLE_GROUP_GROUP_2** — EMPLOYEE_GROUP_ROLE_GROUP -> GROUP_ (`RoleGroup, RoleGroupType, RoleGroupClassID -> Group_, GroupType, GroupClassID`)
- **FK_EMPLOYEE_GROUP_ROLE_GROUP_ROLE** — EMPLOYEE_GROUP_ROLE_GROUP -> ROLE (`RoleID -> ID`)

## Referenced By (other tables -> this)

- **FK_EMPLOYEE_ROLE_GROUP_RELATION_EMPLOYEE_GROUP_ROLE_GROUP** — EMPLOYEE_ROLE_GROUP_RELATION -> EMPLOYEE_GROUP_ROLE_GROUP (`EmployeeGroupRoleGroupID -> ID`)

## Unique Indexes

- **UK_EMPLOYEE_GROUP_ROLE_GROUP** on `EmployeeGroup, EmployeeGroupType, EmployeeGroupClassID, EmployeeID, RoleGroup, RoleGroupType, RoleGroupClassID, RoleID`

## Non-Unique Indexes

- **IF_EMPLOYEE_GROUP_ROLE_GROUP_EMPLOYEE** on `EmployeeID`
- **IF_EMPLOYEE_GROUP_ROLE_GROUP_GROUP_2** on `RoleGroup, RoleGroupType, RoleGroupClassID`
- **IF_EMPLOYEE_GROUP_ROLE_GROUP_ROLE** on `RoleID`
