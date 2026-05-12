# COUNT_PROC_LCONF_ZONE

**Database:** Operational

**Description:** This table stores links between Count Procedures and Zones.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| CountProcedureID | INT(10,0) | False |  | True | COUNT_PROCEDURE | Link to the COUNT_PROCEDURE table. |
| Zone | NVARCHAR(20) | False |  | True | ZONE | Link to the ZONE table. |

## Primary Key

- **PK_COUNT_PROC_LCONF_ZONE** on `CountProcedureID, Zone`

## Foreign Keys (this table -> other)

- **FK_COUNT_PROC_LCNF_ZONE_CP** — COUNT_PROC_LCONF_ZONE -> COUNT_PROCEDURE (`CountProcedureID -> ID`)
- **FK_COUNT_PROC_LCNF_ZONE_ZONE** — COUNT_PROC_LCONF_ZONE -> ZONE (`Zone -> Zone`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_COUNT_PROC_LCNF_ZONE_ZONE** on `Zone`
