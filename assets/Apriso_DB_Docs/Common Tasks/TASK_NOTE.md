# TASK_NOTE

**Database:** Operational

**Description:** Contains the link between a task and a user note (NOTE)

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| NoteID | INT(10,0) | False |  | True | NOTE | Reference to a note |
| TaskID | INT(10,0) | False |  | True | TASK | Reference to the master task |

## Primary Key

- **PK_TASK_NOTE** on `TaskID, NoteID`

## Foreign Keys (this table -> other)

- **FK_TASK_NOTE_NOTE** — TASK_NOTE -> NOTE (`NoteID -> ID`)
- **FK_TASK_NOTE_TASK** — TASK_NOTE -> TASK (`TaskID -> ID`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_TASK_NOTE_NOTE** on `NoteID`
