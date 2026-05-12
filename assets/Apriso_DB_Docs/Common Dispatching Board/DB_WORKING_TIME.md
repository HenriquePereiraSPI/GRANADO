# DB_WORKING_TIME

**Database:** Operational

**Description:** This table stores information about the work schedule of a Workspace.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| EndTime | DATETIME | False |  | False |  | The end time of the day schedule. |
| ID | INT(10,0) | False |  | True |  | The ID of the performance record. |
| StartTime | DATETIME | False |  | False |  | The start time of the day schedule. |
| TotalHours | DECIMAL(28,10) | False |  | False |  | The total hours of the day schedule. |
| WorkSpaceID | INT(10,0) | False |  | False | DB_WORKSPACE | The foreign key to the DB_WORKSPACE.ID Enable delete cascade. |

## Primary Key

- **PK_DB_WORKING_TIME** on `ID`

## Foreign Keys (this table -> other)

- **FK_DB_WORKING_TIME_WORKSPACE** — DB_WORKING_TIME -> DB_WORKSPACE (`WorkSpaceID -> ID`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_DB_WORKING_TIME_WORKSPACE** on `WorkSpaceID`
