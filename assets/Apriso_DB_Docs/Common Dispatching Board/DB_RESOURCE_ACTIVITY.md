# DB_RESOURCE_ACTIVITY

**Database:** Operational

**Description:** This table stores information about resource activity. Resource activity describes the assignment relationship between a resource and an activity.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| DBActivityID | INT(10,0) | False |  | False | DB_ACTIVITY | The foreign key to DB_ACTIVITY.ID. |
| DBResourceID | INT(10,0) | False |  | False | DB_RESOURCE | The foreign key to DB_RESOURCE.ID. |
| HasChanges | BIT | False |  | False |  | Indicates if the Resource Activity has changes. |
| ID | INT(10,0) | False |  | True |  | The ID of the Resource Activity. |
| WorkSpaceID | INT(10,0) | False |  | False | DB_WORKSPACE | The foreign key to DB_WORKSPACE.ID. |

## Primary Key

- **PK_DB_RESOURCE_ACTIVITY** on `ID`

## Foreign Keys (this table -> other)

- **FK_DB_RESOURCE_ACTIVITY_ACTIVITY** — DB_RESOURCE_ACTIVITY -> DB_ACTIVITY (`DBActivityID -> ID`)
- **FK_DB_RESOURCE_ACTIVITY_RESOURCE** — DB_RESOURCE_ACTIVITY -> DB_RESOURCE (`DBResourceID -> ID`)
- **FK_DB_RESOURCE_ACTIVITY_WORKSPACE** — DB_RESOURCE_ACTIVITY -> DB_WORKSPACE (`WorkSpaceID -> ID`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **UK_DB_RESOURCE_ACTIVITY** on `WorkSpaceID, DBActivityID, DBResourceID`

## Non-Unique Indexes

- **IF_DB_RESOURCE_ACTIVITY_ACTIVITY** on `DBActivityID`
- **IF_DB_RESOURCE_ACTIVITY_RESOURCE** on `DBResourceID`
