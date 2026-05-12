# TASK_PRIORITY

**Database:** Operational

**Description:** Priority of the task, enherited from the order

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| NextHigherPriority | NVARCHAR(20) | True |  | False |  | For future use. |
| NextLowerPriority | NVARCHAR(20) | True | (100) | False |  | For future use. |
| Priority | NVARCHAR(20) | False | (100) | True |  | Priority of the task |
| TaskType | SMALLINT(5,0) | False |  | True | TASK_TYPE | Task priority |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_TASK_PRIORITY** on `TaskType, Priority`

## Foreign Keys (this table -> other)

- **FK_TASK_PRIORITY_TASK_TYPE** — TASK_PRIORITY -> TASK_TYPE (`TaskType -> TaskType`)

## Referenced By (other tables -> this)

- **FK_TASK_PRIORITY_XREF_TASK_PRIORITY** — TASK_PRIORITY_XREF -> TASK_PRIORITY (`TaskType, Priority -> TaskType, Priority`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **** on ``
