# COUNT_PROC_LCONF_DEPT

**Database:** Operational

**Description:** This table stores links between Count Procedures and Departments.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| CountProcedureID | INT(10,0) | False |  | True | COUNT_PROCEDURE | Link to the COUNT_PROCEDURE table. |
| Department | NVARCHAR(40) | False |  | True | DEPARTMENT | Link to the DEPARTMENT table. |

## Primary Key

- **PK_COUNT_PROC_LCONF_DEPT** on `CountProcedureID, Department`

## Foreign Keys (this table -> other)

- **FK_COUNT_PROC_LCNF_DEPT_CP** — COUNT_PROC_LCONF_DEPT -> COUNT_PROCEDURE (`CountProcedureID -> ID`)
- **FK_COUNT_PROC_LCNF_DEPT_DEPT** — COUNT_PROC_LCONF_DEPT -> DEPARTMENT (`Department -> Department`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **** on ``
