# DB_WORKSPACE

**Database:** Operational

**Description:** This table stores information about the Workspaces. A Workspace is a container which can be defined by the developer to include all kinds of items that will serve as activities and resources within the Workspace.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| Description | NVARCHAR(255) | True |  | False |  | The description of the Workspace. |
| EmployeeID | INT(10,0) | True |  | False | EMPLOYEE | The ID of the Employee. |
| EndDate | DATETIME | True |  | False |  | The end date of the Workspace. |
| EnforceDates | BIT | True |  | False |  | Indicates if the start/end time on tasks can be changed in the Workspace. |
| ID | INT(10,0) | False |  | True |  | The ID of the Workspace. |
| Name | NVARCHAR(256) | False |  | False |  | The name of the Workspace. |
| StartDate | DATETIME | True |  | False |  | The start date of the Workspace. |
| UserBoolean1 | BIT | True |  | False |  | A Boolean field for the user's use. |
| UserBoolean2 | BIT | True |  | False |  | A Boolean field for the user's use. |
| UserBoolean3 | BIT | True |  | False |  | A Boolean field for the user's use. |
| UserBoolean4 | BIT | True |  | False |  | A Boolean field for the user's use. |
| UserDate1 | DATETIME | True |  | False |  | An date/time field for the user's use. |
| UserDate2 | DATETIME | True |  | False |  | An date/time field for the user's use. |
| UserDate3 | DATETIME | True |  | False |  | An date/time field for the user's use. |
| UserDate4 | DATETIME | True |  | False |  | An date/time field for the user's use. |
| UserDecimal1 | DECIMAL(28,10) | True |  | False |  | An decimal field for the user's use. |
| UserDecimal2 | DECIMAL(28,10) | True |  | False |  | An decimal field for the user's use. |
| UserDecimal3 | DECIMAL(28,10) | True |  | False |  | An decimal field for the user's use. |
| UserDecimal4 | DECIMAL(28,10) | True |  | False |  | An decimal field for the user's use. |
| UserInt1 | INT(10,0) | True |  | False |  | For Complex Assembly, this is the WIP Order type. |
| UserInt2 | INT(10,0) | True |  | False |  | For Complex Assembly, this is the Process ID. |
| UserInt3 | INT(10,0) | True |  | False |  | For Complex Assembly, this is the order status. |
| UserInt4 | INT(10,0) | True |  | False |  | An integer field for the user's use. |
| UserString1 | NVARCHAR(255) | True |  | False |  | For Complex Assembly, this is the WIP Order number. |
| UserString2 | NVARCHAR(255) | True |  | False |  | A string field for the user's use. |
| UserString3 | NVARCHAR(255) | True |  | False |  | A string field for the user's use. |
| UserString4 | NVARCHAR(255) | True |  | False |  | A string field for the user's use. |
| WorkCenter | NVARCHAR(40) | True |  | False | WORK_CENTER | The Work Center of the work schedule applied on the Workspace. |
| WorkSpaceClass | INT(10,0) | False |  | False | DB_WORKSPACE_CLASS | The foreign key to DB_WORKSPACE_CLASS.WorkSpaceClass. |

## Primary Key

- **PK_DB_WORKSPACE** on `ID`

## Foreign Keys (this table -> other)

- **FK_DB_WORKSPACE_EMPLOYEE** — DB_WORKSPACE -> EMPLOYEE (`EmployeeID -> ID`)
- **FK_DB_WORKSPACE_WORK_CENTER** — DB_WORKSPACE -> WORK_CENTER (`WorkCenter -> WorkCenter`)
- **FK_DB_WORKSPACE_WORKSPACE_CLASS** — DB_WORKSPACE -> DB_WORKSPACE_CLASS (`WorkSpaceClass -> ID`)

## Referenced By (other tables -> this)

- **FK_DB_ACTIVITY_DB_WORKSPACE** — DB_ACTIVITY -> DB_WORKSPACE (`WorkSpaceID -> ID`)
- **FK_DB_ACTIVITY_DEPENDENCY_WORKSPACE** — DB_ACTIVITY_DEPENDENCY -> DB_WORKSPACE (`WorkSpaceID -> ID`)
- **FK_DB_PERFORMANCE_WORKSPACE** — DB_PERFORMANCE -> DB_WORKSPACE (`WorkSpaceID -> ID`)
- **FK_DB_RESOURCE_ACTIVITY_WORKSPACE** — DB_RESOURCE_ACTIVITY -> DB_WORKSPACE (`WorkSpaceID -> ID`)
- **FK_DB_RESOURCE_WORKSPACE** — DB_RESOURCE -> DB_WORKSPACE (`WorkSpaceID -> ID`)
- **FK_DB_WORKING_TIME_WORKSPACE** — DB_WORKING_TIME -> DB_WORKSPACE (`WorkSpaceID -> ID`)

## Unique Indexes

- **UK_DB_WORKSPACE** on `Name, EmployeeID`

## Non-Unique Indexes

- **IF_DB_WORKSPACE_WORKSPACE_CLASS** on `WorkSpaceClass`
