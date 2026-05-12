# TASK_RESOURCE_USE

**Database:** Operational

**Description:** Contain the list of the resources that have been involved to execute a task

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| ID | INT(10,0) | False |  | True |  | Unique identifier of a record (key) in a table |
| ResourceCollectionID | INT(10,0) | True |  | False | RESOURCE_COLLECTION | For future use. |
| ResourceName | NVARCHAR(80) | False |  | False | RESOURCE_ | Resource involved in the execution of the task |
| ResourceType | SMALLINT(5,0) | False |  | False | RESOURCE_ | Resource type + resource define uniquely a resource |
| TaskID | INT(10,0) | False |  | False | TASK | Reference to the task (if passed when the alert was created) |

## Primary Key

- **PK_TASK_RESOURCE_USE** on `ID`

## Foreign Keys (this table -> other)

- **FK_TASK_RESOURCE_USE_RESOURCE** — TASK_RESOURCE_USE -> RESOURCE_ (`ResourceName, ResourceType -> ResourceName, ResourceType`)
- **FK_TASK_RESOURCE_USE_RESOURCE_COLLECTION** — TASK_RESOURCE_USE -> RESOURCE_COLLECTION (`ResourceCollectionID -> ID`)
- **FK_TASK_RESOURCE_USE_TASK** — TASK_RESOURCE_USE -> TASK (`TaskID -> ID`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_TASK_RESOURCE_USE_RESOURCE** on `ResourceName, ResourceType`
- **IF_TASK_RESOURCE_USE_RESOURCE_COLLECTION** on `ResourceCollectionID`
- **IXD_TaskID_ResourceName_ResourceType** on `TaskID, ResourceName, ResourceType`
