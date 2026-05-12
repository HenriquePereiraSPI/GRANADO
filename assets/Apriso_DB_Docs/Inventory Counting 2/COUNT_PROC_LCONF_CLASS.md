# COUNT_PROC_LCONF_CLASS

**Database:** Operational

**Description:** This table stores links between Count Procedures and Warehouse Location Classes.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| CountProcedureID | INT(10,0) | False |  | True | COUNT_PROCEDURE | Link to the COUNT_PROCEDURE table. |
| WarehouseLocationClassID | INT(10,0) | False |  | True | WAREHOUSE_LOCATION_CLASS | Link to the WAREHOUSE_LOCATION_CLASS table. |

## Primary Key

- **PK_COUNT_PROC_LCONF_CLASS** on `CountProcedureID, WarehouseLocationClassID`

## Foreign Keys (this table -> other)

- **FK_COUNT_PROC_LCNF_CLASS_CP** — COUNT_PROC_LCONF_CLASS -> COUNT_PROCEDURE (`CountProcedureID -> ID`)
- **FK_COUNT_PROC_LCNF_CLASS_WLC** — COUNT_PROC_LCONF_CLASS -> WAREHOUSE_LOCATION_CLASS (`WarehouseLocationClassID -> ID`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_COUNT_PROC_LCNF_CLASS_WLC** on `WarehouseLocationClassID`
