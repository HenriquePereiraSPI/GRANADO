# COUNT_PROC_LCONF_GROUP

**Database:** Operational

**Description:** This table stores links between Count Procedures and Groups of Warehouse Locations.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| CountProcedureID | INT(10,0) | False |  | True | COUNT_PROCEDURE | Link to the COUNT_PROCEDURE table. |
| Group_ | NVARCHAR(40) | False |  | True | GROUP_ | Group of Warehouse Location. |
| GroupClassID | INT(10,0) | False |  | True | GROUP_ | Group Class ID of Warehouse Location. |
| GroupType | SMALLINT(5,0) | False |  | True | GROUP_ | Group Type of Warehouse Location. |

## Primary Key

- **PK_COUNT_PROC_LCONF_GROUP** on `CountProcedureID, Group_, GroupType, GroupClassID`

## Foreign Keys (this table -> other)

- **FK_COUNT_PROC_LCNF_GROUP_CP** — COUNT_PROC_LCONF_GROUP -> COUNT_PROCEDURE (`CountProcedureID -> ID`)
- **FK_COUNT_PROC_LCNF_GROUP_GROUP** — COUNT_PROC_LCONF_GROUP -> GROUP_ (`Group_, GroupType, GroupClassID -> Group_, GroupType, GroupClassID`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_COUNT_PROC_LCNF_GROUP_GROUP** on `Group_, GroupType, GroupClassID`
