# INVENTORY2

**Database:** Operational

**Description:** This table contains inventory.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| Container | NVARCHAR(40) | True |  | False | CONTAINER | Container number. |
| ERPMaterialStockID | INT(10,0) | True |  | False | ERP_MATERIAL_STOCK | Link to the ERP_MATERIAL_STOCK table. |
| GradeID | INT(10,0) | True |  | False | GRADE | Link to the GRADE table. |
| ID | BIGINT(19,0) | False |  | True |  | Unique ID of the row. |
| InventoryAllocationID | INT(10,0) | True |  | False | INVENTORY2_ALLOCATION | Link to the INVENTORY2_ALLOCATION table. |
| InventoryClassID | INT(10,0) | True |  | False | INVENTORY_CLASS | ID of the Inventory Class. |
| InventoryStatus | SMALLINT(5,0) | True |  | False | INVENTORY_STATUS | Link to the INVENTORY_STATUS table. |
| LotNo | NVARCHAR(40) | True |  | False | LOT_NO | Lot number. |
| MaxFIFODate | DATETIME | True |  | False |  | Maximum FIFO date. |
| MinFIFODate | DATETIME | True |  | False |  | Minimum FIFO date. |
| PartnerID | INT(10,0) | True |  | False | PARTNER | Link to the PARTNER table. |
| ProductID | INT(10,0) | False |  | False | LOT_NO | ID of the Product. |
| QuantityAllocated | DECIMAL(28,10) | True |  | False |  | Quantity allocated. |
| QuantityOnHand | DECIMAL(28,10) | True |  | False |  | Quantity available. |
| SerialNo | NVARCHAR(40) | True |  | False | SERIAL_NO | Serial number. |
| UnitID | INT(10,0) | True |  | False | UNIT | Unique identifier of the Unit. |
| WarehouseLocationID | INT(10,0) | False |  | False | WAREHOUSE_LOCATION | ID of the Warehouse Location. |

## Primary Key

- **PK_INVENTORY2** on `ID`

## Foreign Keys (this table -> other)

- **FK_INVENTORY2_CONTAINER** — INVENTORY2 -> CONTAINER (`Container -> Container`)
- **FK_INVENTORY2_ERP_MATERIAL_STOCK** — INVENTORY2 -> ERP_MATERIAL_STOCK (`ERPMaterialStockID -> ID`)
- **FK_INVENTORY2_GRADE** — INVENTORY2 -> GRADE (`GradeID -> ID`)
- **FK_INVENTORY2_INVENTORY_CLASS** — INVENTORY2 -> INVENTORY_CLASS (`InventoryClassID -> ID`)
- **FK_INVENTORY2_INVENTORY_STATUS** — INVENTORY2 -> INVENTORY_STATUS (`InventoryStatus -> InventoryStatus`)
- **FK_INVENTORY2_INVENTORY2_ALLOCATION** — INVENTORY2 -> INVENTORY2_ALLOCATION (`InventoryAllocationID -> ID`)
- **FK_INVENTORY2_LOT_NO** — INVENTORY2 -> LOT_NO (`ProductID, LotNo -> ProductID, LotNo`)
- **FK_INVENTORY2_PARTNER** — INVENTORY2 -> PARTNER (`PartnerID -> ID`)
- **FK_INVENTORY2_PRODUCT** — INVENTORY2 -> PRODUCT (`ProductID -> ID`)
- **FK_INVENTORY2_SERIAL_NO** — INVENTORY2 -> SERIAL_NO (`ProductID, SerialNo -> ProductID, SerialNo`)
- **FK_INVENTORY2_UNIT** — INVENTORY2 -> UNIT (`UnitID -> ID`)
- **FK_INVENTORY2_WHS_LOCATION** — INVENTORY2 -> WAREHOUSE_LOCATION (`WarehouseLocationID -> ID`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **UK_INVENTORY2** on `ProductID, WarehouseLocationID, Container, SerialNo, LotNo, InventoryClassID, InventoryStatus, PartnerID, GradeID, ERPMaterialStockID, InventoryAllocationID`

## Non-Unique Indexes

- **IDX_INVENTORY2_WHS_01** on `ProductID, WarehouseLocationID, QuantityOnHand, QuantityAllocated, InventoryAllocationID`
- **IF_INVENTORY2_CONTAINER** on `Container`
- **IF_INVENTORY2_ERP_MATERIAL_STOCK** on `ERPMaterialStockID`
- **IF_INVENTORY2_GRADE** on `GradeID`
- **IF_INVENTORY2_INVENTORY_ALLOCATION** on `InventoryAllocationID`
- **IF_INVENTORY2_INVENTORY_CLASS** on `InventoryClassID`
- **IF_INVENTORY2_INVENTORY_STATUS** on `InventoryStatus`
- **IF_INVENTORY2_LOT_NO** on `LotNo, ProductID`
- **IF_INVENTORY2_PARTNER** on `PartnerID`
- **IF_INVENTORY2_SERIAL_NO** on `SerialNo, ProductID`
- **IF_INVENTORY2_UNIT** on `UnitID`
- **IF_INVENTORY2_WAREHOUSE_LOCATION** on `WarehouseLocationID`
