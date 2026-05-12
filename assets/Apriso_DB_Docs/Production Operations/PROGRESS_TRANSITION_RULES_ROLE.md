# PROGRESS_TRANSITION_RULES_ROLE

**Database:** Operational

**Description:** This table stores a Roles for Progress Transition Rules.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| ProgressTransitionRulesID | INT(10,0) | False |  | True | PROGRESS_TRANSITION_RULES | Link to the PROGRESS_TRANSITION_RULES table. |
| RoleID | INT(10,0) | False |  | True | ROLE | Link to the ROLE table. |

## Primary Key

- **PK_PROGRESS_TRANSITION_RULES_ROLE** on `ProgressTransitionRulesID, RoleID`

## Foreign Keys (this table -> other)

- **FK_PROGRESS_TRANSITION_RULES_ROLE_PROGRESS_TRANSITION_RULES** — PROGRESS_TRANSITION_RULES_ROLE -> PROGRESS_TRANSITION_RULES (`ProgressTransitionRulesID -> ID`)
- **FK_PROGRESS_TRANSITION_RULES_ROLE_ROLE** — PROGRESS_TRANSITION_RULES_ROLE -> ROLE (`RoleID -> ID`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_PROGRESS_TRANSITION_RULES_ROLE_ROLE** on `RoleID`
