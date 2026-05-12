# COUNT_PROC_LCONF_WORKC

**Database:** Operational

**Description:** This table stores links between Count Procedures and Work Centers.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| CountProcedureID | INT(10,0) | False |  | True | COUNT_PROCEDURE | Link to COUNT_PROCEDURE table. |
| WorkCenter | NVARCHAR(40) | False |  | True | WORK_CENTER | Link to the WORKCENTER table. |

## Primary Key

- **PK_COUNT_PROC_LCONF_WORKC** on `CountProcedureID, WorkCenter`

## Foreign Keys (this table -> other)

- **FK_COUNT_PROC_LCNF_WORKC_CP** — COUNT_PROC_LCONF_WORKC -> COUNT_PROCEDURE (`CountProcedureID -> ID`)
- **FK_COUNT_PROC_LCNF_WORKC_WORKC** — COUNT_PROC_LCONF_WORKC -> WORK_CENTER (`WorkCenter -> WorkCenter`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **** on ``
