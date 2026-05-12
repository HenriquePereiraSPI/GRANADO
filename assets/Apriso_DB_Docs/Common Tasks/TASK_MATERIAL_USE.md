# TASK_MATERIAL_USE

**Database:** Operational

**Description:** This table contains the assignment of progress, a Serial Number, and a Lot Number to a task.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| DestContainer | NVARCHAR(40) | True |  | False | INVENTORY_CONTAINER | For future use. |
| DestInventoryID | INT(10,0) | True |  | False | INVENTORY_CONTAINER | For future use. |
| DestLocationID | INT(10,0) | True |  | False | WAREHOUSE_LOCATION | For future use. |
| DestUomCode | NVARCHAR(10) | True |  | False | UOM | For future use. |
| DestWipContentID | INT(10,0) | True |  | False | WIP_CONTENT | For internal use. |
| Facility | NVARCHAR(40) | True |  | False | WAREHOUSE | For future use. |
| ID | INT(10,0) | False |  | True |  | The unique identifier of the task material use. |
| LotNo | NVARCHAR(40) | True |  | False | LOT_NO | The lot assigned to the task. |
| ProductID | INT(10,0) | True |  | False | LOT_NO | The reference to the final product (the product number and product version). |
| QuantityAllocated | DECIMAL(28,10) | True | (0.0) | False |  | The quantity of the progress allocated to the task. |
| QuantityCommitted | DECIMAL(28,10) | True | (0.0) | False |  | For future use. |
| QuantityProcessed | DECIMAL(28,10) | True | (0.0) | False |  | The quantity processed (reported). |
| SAPWarehouse | NVARCHAR(10) | True |  | False | SAP_WAREHOUSE | For future use. |
| SerialNo | NVARCHAR(40) | True |  | False | SERIAL_NO | The Serial Number assigned to the task. |
| SourceContainer | NVARCHAR(40) | True |  | False | INVENTORY_CONTAINER | For future use. |
| SourceInventoryID | INT(10,0) | True |  | False | INVENTORY | For future use. |
| SourceLocationID | INT(10,0) | True |  | False | WAREHOUSE_LOCATION | For future use. |
| SourceUomCode | NVARCHAR(10) | True |  | False | UOM | For future use. |
| SourceWipContentID | INT(10,0) | True |  | False | WIP_CONTENT | The relation to the WIP_CONTENT record. |
| TaskID | INT(10,0) | True |  | False | TASK | The reference to the master task. |
| UomCode | NVARCHAR(10) | True |  | False | UOM | The UOM of the progress. |
| Warehouse | NVARCHAR(10) | True |  | False | WAREHOUSE | For future use. |

## Primary Key

- **PK_TASK_MATERIAL_USE** on `ID`

## Foreign Keys (this table -> other)

- **FK_TASK_MATERIAL_USE_INVENTORY** — TASK_MATERIAL_USE -> INVENTORY (`SourceInventoryID -> ID`)
- **FK_TASK_MATERIAL_USE_INVENTORY_CONTAINER** — TASK_MATERIAL_USE -> INVENTORY_CONTAINER (`SourceInventoryID, SourceContainer -> InventoryID, Container`)
- **FK_TASK_MATERIAL_USE_INVENTORY_CONTAINER1** — TASK_MATERIAL_USE -> INVENTORY_CONTAINER (`DestInventoryID, DestContainer -> InventoryID, Container`)
- **FK_TASK_MATERIAL_USE_INVENTORY1** — TASK_MATERIAL_USE -> INVENTORY (`DestInventoryID -> ID`)
- **FK_TASK_MATERIAL_USE_LOT_NO** — TASK_MATERIAL_USE -> LOT_NO (`ProductID, LotNo -> ProductID, LotNo`)
- **FK_TASK_MATERIAL_USE_SAP_WAREHOUSE** — TASK_MATERIAL_USE -> SAP_WAREHOUSE (`SAPWarehouse -> SAPWarehouse`)
- **FK_TASK_MATERIAL_USE_SERIAL_NO** — TASK_MATERIAL_USE -> SERIAL_NO (`SerialNo, ProductID -> SerialNo, ProductID`)
- **FK_TASK_MATERIAL_USE_TASK** — TASK_MATERIAL_USE -> TASK (`TaskID -> ID`)
- **FK_TASK_MATERIAL_USE_UOM** — TASK_MATERIAL_USE -> UOM (`UomCode -> UomCode`)
- **FK_TASK_MATERIAL_USE_UOM1** — TASK_MATERIAL_USE -> UOM (`SourceUomCode -> UomCode`)
- **FK_TASK_MATERIAL_USE_UOM2** — TASK_MATERIAL_USE -> UOM (`DestUomCode -> UomCode`)
- **FK_TASK_MATERIAL_USE_WAREHOUSE** — TASK_MATERIAL_USE -> WAREHOUSE (`Facility, Warehouse -> Facility, Warehouse`)
- **FK_TASK_MATERIAL_USE_WAREHOUSE_LOCATION** — TASK_MATERIAL_USE -> WAREHOUSE_LOCATION (`SourceLocationID -> ID`)
- **FK_TASK_MATERIAL_USE_WAREHOUSE_LOCATION1** — TASK_MATERIAL_USE -> WAREHOUSE_LOCATION (`DestLocationID -> ID`)
- **FK_TASK_MATERIAL_USE_WIP_CONTENT** — TASK_MATERIAL_USE -> WIP_CONTENT (`SourceWipContentID -> ID`)
- **FK_TASK_MATERIAL_WIP_CONTENT1** — TASK_MATERIAL_USE -> WIP_CONTENT (`DestWipContentID -> ID`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_TASK_MATERIAL_USE_INVENTORY** on `SourceInventoryID`
- **IF_TASK_MATERIAL_USE_INVENTORY_CONTAINER** on `SourceContainer, SourceInventoryID`
- **IF_TASK_MATERIAL_USE_INVENTORY_CONTAINER1** on `DestContainer, DestInventoryID`
- **IF_TASK_MATERIAL_USE_INVENTORY_SERIAL_NO** on `SerialNo, ProductID`
- **IF_TASK_MATERIAL_USE_INVENTORY1** on `DestInventoryID`
- **IF_TASK_MATERIAL_USE_LOT_NO** on `LotNo, ProductID`
- **IF_TASK_MATERIAL_USE_PRODUCT_UOM** on `ProductID, UomCode`
- **IF_TASK_MATERIAL_USE_PRODUCT_UOM1** on `ProductID, SourceUomCode`
- **IF_TASK_MATERIAL_USE_PRODUCT_UOM2** on `ProductID, DestUomCode`
- **IF_TASK_MATERIAL_USE_SAP_WAREHOUSE** on `SAPWarehouse`
- **IF_TASK_MATERIAL_USE_TASK** on `TaskID`
- **IF_TASK_MATERIAL_USE_WIP_CONTENT** on `SourceWipContentID`
- **IF_TASK_MATERIAL_WIP_CONTENT1** on `DestWipContentID`
