# TASK_STATUS

**Database:** Operational

**Description:** Containst the list of the possible status of a task, should not be modified

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| TaskStatus | SMALLINT(5,0) | False |  | True |  | Status of the task |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_TASK_STATUS** on `TaskStatus`

## Foreign Keys (this table -> other)

- **** —  (``)

## Referenced By (other tables -> this)

- **FK_TASK_INVENTORY_TASK_STATUS** — TASK_INVENTORY -> TASK_STATUS (`TaskStatus -> TaskStatus`)
- **FK_TASK_STEP_TASK_STATUS** — TASK_STEP -> TASK_STATUS (`Status -> TaskStatus`)
- **FK_TASK_TASK_STATUS** — TASK -> TASK_STATUS (`TaskStatus -> TaskStatus`)
- **FK_TASK_TASK_STATUS1** — TASK -> TASK_STATUS (`LastTaskStatus -> TaskStatus`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **** on ``
