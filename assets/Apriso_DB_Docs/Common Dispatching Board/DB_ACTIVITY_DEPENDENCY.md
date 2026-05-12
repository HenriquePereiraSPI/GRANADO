# DB_ACTIVITY_DEPENDENCY

**Database:** Operational

**Description:** This table stores information about the dependencies between two Activities. A dependency can be "Start To Start," "Start To End," "End To Start," or "End To End."

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| DispatchSequenceType | SMALLINT(5,0) | False |  | False | DISPATCH_SEQUENCE_TYPE | The dependency type. |
| FromActivityID | INT(10,0) | False |  | False | DB_ACTIVITY | The ID of the dependence source Activity. |
| HasChanges | BIT | False |  | False |  | Indicates if the dependency has been changed. |
| ID | INT(10,0) | False |  | True |  | The ID of the Activity dependency. |
| LagInSeconds | INT(10,0) | True |  | False |  | The latency time between two Activities. |
| ToActivityID | INT(10,0) | False |  | False | DB_ACTIVITY | The ID of the dependence target Activity. |
| WorkSpaceID | INT(10,0) | False |  | False | DB_WORKSPACE | The foreign key to DB_WORKSPACE.ID. |

## Primary Key

- **PK_DB_ACTIVITY_DEPENDENCY** on `ID`

## Foreign Keys (this table -> other)

- **FK_DB_ACTIVITY_DEPENDENCY_ACTIVITY1** — DB_ACTIVITY_DEPENDENCY -> DB_ACTIVITY (`FromActivityID -> ID`)
- **FK_DB_ACTIVITY_DEPENDENCY_ACTIVITY2** — DB_ACTIVITY_DEPENDENCY -> DB_ACTIVITY (`ToActivityID -> ID`)
- **FK_DB_ACTIVITY_DEPENDENCY_DST** — DB_ACTIVITY_DEPENDENCY -> DISPATCH_SEQUENCE_TYPE (`DispatchSequenceType -> DispatchSequenceType`)
- **FK_DB_ACTIVITY_DEPENDENCY_WORKSPACE** — DB_ACTIVITY_DEPENDENCY -> DB_WORKSPACE (`WorkSpaceID -> ID`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_DB_ACTIVITY_DEPENDENCY_ACTIVITY1** on `FromActivityID`
- **IF_DB_ACTIVITY_DEPENDENCY_ACTIVITY2** on `ToActivityID`
- **IF_DB_ACTIVITY_DEPENDENCY_WORKSPACE** on `WorkSpaceID`
