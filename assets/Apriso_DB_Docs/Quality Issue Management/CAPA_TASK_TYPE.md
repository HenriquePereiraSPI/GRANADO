# CAPA_TASK_TYPE

**Database:** Operational

**Description:** This table contains the list of valid types of CAPA tasks.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| CAPATaskType | INT(10,0) | False |  | True |  | The type of CAPA task. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_CAPA_TASK_TYPE** on `CAPATaskType`

## Foreign Keys (this table -> other)

- **** —  (``)

## Referenced By (other tables -> this)

- **FK_CAPA_TASK_CAPA_TASK_TYPE** — CAPA_TASK -> CAPA_TASK_TYPE (`CAPATaskType -> CAPATaskType`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **** on ``
