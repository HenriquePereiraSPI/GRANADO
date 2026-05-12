# MI_ACTION_GROUP_POINT

**Database:** Operational

**Description:** List of all Machine Integrator Points used by Action Group

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| ActionGroupID | INT(10,0) | False |  | False | MI_ACTION_GROUP | Link to parent Action Group |
| ID | INT(10,0) | False |  | True |  | Unique ID of the Action Group Point link |
| LocalName | NVARCHAR(255) | True |  | False |  | The local name of the Machine Integrator Point. |
| PointID | INT(10,0) | False |  | False | MI_POINT | Link to parent Point |
| TriggersExecution | BIT | True |  | False |  | When true the point change triggers execution of the Group |

## Primary Key

- **PK_MILogGroupPoint** on `ID`

## Foreign Keys (this table -> other)

- **FK_MILogGroupPoint_MILoggingGroup** — MI_ACTION_GROUP_POINT -> MI_ACTION_GROUP (`ActionGroupID -> ID`)
- **FK_MILogGroupPoint_MIPoint** — MI_ACTION_GROUP_POINT -> MI_POINT (`PointID -> ID`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **IX_MI_ACTION_GROUP_POINT** on `ActionGroupID, PointID`

## Non-Unique Indexes

- **IF_MILogGroupPoint_MIPoint** on `PointID`
