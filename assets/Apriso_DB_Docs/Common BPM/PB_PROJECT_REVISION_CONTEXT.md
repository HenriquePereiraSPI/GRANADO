# PB_PROJECT_REVISION_CONTEXT

**Database:** Operational

**Description:** Stores information about the configuration of the PB project revision linked to the selected employee or group of employees.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| Activated | BIT | False | ((0)) | False |  | Indicates if the configuration has been activated. |
| ActivatedBy | NVARCHAR(50) | True |  | False |  | User who activated the configuration. |
| ActivatedOn | DATETIME | True |  | False |  | Date of the configuration activation. |
| Code | NVARCHAR(40) | False |  | False |  | Code of a PB project. |
| DeactivatedBy | NVARCHAR(50) | True |  | False |  | User who deactivated the configuration. |
| DeactivatedOn | DATETIME | True |  | False |  | Date of the configuration deactivation. |
| EmployeeID | INT(10,0) | True |  | False | EMPLOYEE | Unique identifier of an employee. |
| Facility | NVARCHAR(40) | True |  | False | FACILITY | Name of a facility. |
| Group_ | NVARCHAR(40) | True |  | False | GROUP_ | Group assignment. |
| GroupClassID | INT(10,0) | True |  | False | GROUP_ | Class of a group (user-defined). |
| GroupType | SMALLINT(5,0) | True |  | False | GROUP_ | Type of a group. |
| ID | INT(10,0) | False |  | True |  | Unique identifier of a record (key) in a table. |
| Revision | NVARCHAR(80) | False |  | False |  | Revision of a PB Project. |
| RoleID | INT(10,0) | True |  | False | ROLE | Unique identifier of a role. |

## Primary Key

- **PK_PB_PROJECT_REVISION_CONTEXT** on `ID`

## Foreign Keys (this table -> other)

- **FK_EMPLOYEE_PB_PROJECT_REVISION_CONTEXT** — PB_PROJECT_REVISION_CONTEXT -> EMPLOYEE (`EmployeeID -> ID`)
- **FK_FACILITY_PB_PROJECT_REVISION_CONTEXT** — PB_PROJECT_REVISION_CONTEXT -> FACILITY (`Facility -> Facility`)
- **FK_GROUP_PB_PROJECT_REVISION_CONTEXT** — PB_PROJECT_REVISION_CONTEXT -> GROUP_ (`Group_, GroupType, GroupClassID -> Group_, GroupType, GroupClassID`)
- **FK_ROLE_PB_PROJECT_REVISION_CONTEXT** — PB_PROJECT_REVISION_CONTEXT -> ROLE (`RoleID -> ID`)

## Referenced By (other tables -> this)

- **** —  (``)

## Business Keys (this table -> other)

- PB_PROJECT_REVISION_CONTEXT -> PB_PROJECT (`Code -> Code`)
- PB_PROJECT_REVISION_CONTEXT -> PB_PROJECT_REVISION (`Revision -> Revision`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_GROUP_PB_PROJECT_REVISION_CONTEXT** on `Group_, GroupType, GroupClassID`
- **IF_PB_PROJECT_REVISION_CONTEXT_EMPLOYEE** on `EmployeeID`
- **IF_PB_PROJECT_REVISION_CONTEXT_FACILITY** on `Facility`
- **IF_ROLE_PB_PROJECT_REVISION_CONTEXT** on `RoleID`
