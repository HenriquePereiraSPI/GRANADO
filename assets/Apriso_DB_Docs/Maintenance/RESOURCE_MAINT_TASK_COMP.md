# RESOURCE_MAINT_TASK_COMP

**Database:** Operational

**Description:** This table stores the relationship between Resource Maintenance Procedures and components linked to Maintenance Procedures.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| ResourceComponentID | INT(10,0) | False |  | True | RESOURCE_COMPONENT | Link to the RESOURCE_COMPONENT table. |
| ResourceMainTaskID | INT(10,0) | False |  | True | RESOURCE_MAINT_TASK | Link to the RESOURCE_MAINT_TASK table. |

## Primary Key

- **PK_RESOURCE_MAINT_TASK_COMP** on `ResourceMainTaskID, ResourceComponentID`

## Foreign Keys (this table -> other)

- **FK_RESOURCE_MAINT_TASK_COMP_QUALITY_RESOURCE_COMPONENT** — RESOURCE_MAINT_TASK_COMP -> RESOURCE_COMPONENT (`ResourceComponentID -> ID`)
- **FK_RESOURCE_MAINT_TASK_COMP_RESOURCE_MAINT_TASK** — RESOURCE_MAINT_TASK_COMP -> RESOURCE_MAINT_TASK (`ResourceMainTaskID -> ID`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_RESOURCE_MAINT_TASK_COMP_QUALITY_RESOURCE_COMPONENT** on `ResourceComponentID`
