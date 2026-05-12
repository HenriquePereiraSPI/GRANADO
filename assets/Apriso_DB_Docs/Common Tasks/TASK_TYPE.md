# TASK_TYPE

**Database:** Operational

**Description:** Lsit the types of task managed by the system. Should not be modified

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| TaskType | SMALLINT(5,0) | False |  | True |  | Type of task |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_TASK_TYPE** on `TaskType`

## Foreign Keys (this table -> other)

- **** —  (``)

## Referenced By (other tables -> this)

- **FK_TASK_INVENTORY_TASK_TYPE** — TASK_INVENTORY -> TASK_TYPE (`TaskType -> TaskType`)
- **FK_TASK_PRIORITY_TASK_TYPE** — TASK_PRIORITY -> TASK_TYPE (`TaskType -> TaskType`)
- **FK_TASK_TASK_TYPE** — TASK -> TASK_TYPE (`TaskType -> TaskType`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **** on ``
