# PRIORITY

**Database:** Operational

**Description:** Contains the Priority of an Order or Task. Also contains the next priority for escalation purposes.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| ID | INT(10,0) | False |  | True |  | Unique identifier of a record (key) in a table. |
| NextHigherPriority | INT(10,0) | True |  | False |  | For future use. |
| NextLowerPriority | INT(10,0) | True |  | False |  | For future use. |
| PriorityTypeID | INT(10,0) | False |  | False | PRIORITY_TYPE | Link to the PRIORITY_TYPE table. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_PRIORITY** on `ID`

## Foreign Keys (this table -> other)

- **FK_PRIORITY_PRIORITY_TYPE** — PRIORITY -> PRIORITY_TYPE (`PriorityTypeID -> ID`)

## Referenced By (other tables -> this)

- **FK_ALERT_PRIORITY** — ALERT -> PRIORITY (`PriorityID -> ID`)
- **FK_KANBAN_CARD_PriorityID** — KANBAN_CARD -> PRIORITY (`PriorityID -> ID`)
- **FK_REPLENISH_STRATEGY_PriorityID** — REPLENISH_STRATEGY -> PRIORITY (`PriorityID -> ID`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **** on ``
