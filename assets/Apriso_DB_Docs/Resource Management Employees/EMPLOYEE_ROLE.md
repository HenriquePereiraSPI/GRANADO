# EMPLOYEE_ROLE

**Database:** Operational

**Description:** Stores the link between an EMPLOYEE to one or more rows in the ROLE table, thereby createing as aspect of the Employee's profile.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| DSInstanceID | NVARCHAR(100) | True |  | False |  | DELMIA 3DEXPERIENCE Instance ID. |
| DSInstanceName | NVARCHAR(100) | True |  | False |  | DELMIA 3DEXPERIENCE Instance Name. |
| EmployeeID | INT(10,0) | False |  | True | EMPLOYEE | Employee assigned to the Role. |
| RoleID | INT(10,0) | False |  | True | ROLE | Reference to a Role in the ROLE table. |

## Primary Key

- **PK_EMPLOYEE_ROLE_XREF** on `EmployeeID, RoleID`

## Foreign Keys (this table -> other)

- **FK_EMPLOYEE_ROLE_EMPLOYEE** — EMPLOYEE_ROLE -> EMPLOYEE (`EmployeeID -> ID`)
- **FK_EMPLOYEE_ROLE_ROLE** — EMPLOYEE_ROLE -> ROLE (`RoleID -> ID`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_EMPLOYEE_ROLE_DSInstanceID** on `DSInstanceID`
- **IF_EMPLOYEE_ROLE_ROLE** on `RoleID`
- **IXD_LastUpdateOn** on `LastUpdateOn`
