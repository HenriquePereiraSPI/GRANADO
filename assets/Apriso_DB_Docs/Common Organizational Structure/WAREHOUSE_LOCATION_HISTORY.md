# WAREHOUSE_LOCATION_HISTORY

**Database:** Operational

**Description:** This table stores the history of Warehouse Location weight and capacity utilization.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| Aisle | NVARCHAR(10) | True |  | False |  | Name or code of the aisle the Location belongs to. |
| AllocationPath | INT(10,0) | True |  | False |  | For future use. |
| CurrentSpaceUtilization | DECIMAL(28,10) | True |  | False |  | Percentage usage of space capacity of the Warehouse Location. |
| CurrentWeightUtilization | DECIMAL(28,10) | True |  | False |  | Percentage usage of weight capacity of the Warehouse Location. |
| DeltaSpaceUtilization | DECIMAL(28,10) | True |  | False |  | Difference between current and previous percentage usage of space capacity of the Warehouse Location. |
| DeltaWeightUtilization | DECIMAL(28,10) | True |  | False |  | Difference between current and previous percentage usage of weight capacity of the Warehouse Location. |
| Facility | NVARCHAR(40) | False |  | False |  | Facility to uniquely identify a Warehouse. |
| FillPath | INT(10,0) | True |  | False |  | Sequence to be used when filling the Location (path optimization). |
| ID | INT(10,0) | False |  | True |  | Unique ID of the row. |
| Inventory2HistoryHeaderID | BIGINT(19,0) | True |  | False | INVENTORY2_HISTORY_HEADER | Link to the INVENTORY2_HISTORY_HEADER table. |
| Location | NVARCHAR(80) | False |  | False |  | The human readable name of the Location. |
| Row_ | NVARCHAR(10) | True |  | False |  | For future use. |
| StorageBin | NVARCHAR(10) | True |  | False |  | Alternate name of the Location. |
| Tier | NVARCHAR(10) | True |  | False |  | A code that determines the height of the Location above the floor. |
| WalkPath | INT(10,0) | True |  | False |  | This field can be used to order Locations for optimal picking or putaway operations. |
| Warehouse | NVARCHAR(10) | False |  | False |  | Warehouse that contains the Location. |
| WarehouseLocationClassName | NVARCHAR(40) | True |  | False |  | The name of Warehouse Location Class. |
| WarehouseLocationID | INT(10,0) | False |  | False |  | The ID of Warehouse Location. |
| WarehouseLocationType | SMALLINT(5,0) | False |  | False |  | Type of Location. |
| Zone | NVARCHAR(20) | True |  | False |  | Assignment to a Zone. |

## Primary Key

- **PK_WAREHOUSE_LOCATION_HISTORY** on `ID`

## Foreign Keys (this table -> other)

- **FK_WAREHOUSE_LOCATION_HISTORY_I2H** — WAREHOUSE_LOCATION_HISTORY -> INVENTORY2_HISTORY_HEADER (`Inventory2HistoryHeaderID -> ID`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_WAREHOUSE_LOCATION_HISTORY_I2H** on `Inventory2HistoryHeaderID`
- **IF_WAREHOUSE_LOCATION_HISTORY_LOCATION** on `Location`
- **IF_WAREHOUSE_LOCATION_HISTORY_WAREHOUSELOCATIONID** on `WarehouseLocationID`
