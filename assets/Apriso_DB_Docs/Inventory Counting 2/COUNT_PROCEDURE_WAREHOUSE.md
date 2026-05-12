# COUNT_PROCEDURE_WAREHOUSE

**Database:** Operational

**Description:** This table stores links between Count Procedures and Warehouses.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| CountProcedureID | INT(10,0) | False |  | True | COUNT_PROCEDURE | Link to the COUNT_PROCEDURE table. |
| Facility | NVARCHAR(40) | False |  | True | WAREHOUSE | Link to the Facility of the Warehouse. |
| Warehouse | NVARCHAR(10) | False |  | True | WAREHOUSE | Link to the Warehouse. |

## Primary Key

- **PK_COUNT_PROCEDURE_WAREHOUSE** on `CountProcedureID, Facility, Warehouse`

## Foreign Keys (this table -> other)

- **FK_COUNT_PROCEDURE_WAREHOUSE_CP** — COUNT_PROCEDURE_WAREHOUSE -> COUNT_PROCEDURE (`CountProcedureID -> ID`)
- **FK_COUNT_PROCEDURE_WAREHOUSE_WH** — COUNT_PROCEDURE_WAREHOUSE -> WAREHOUSE (`Facility, Warehouse -> Facility, Warehouse`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **** on ``
