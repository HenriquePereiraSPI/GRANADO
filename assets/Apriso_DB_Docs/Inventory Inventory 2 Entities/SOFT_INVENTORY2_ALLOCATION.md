# SOFT_INVENTORY2_ALLOCATION

**Database:** Operational

**Description:** This table contains soft allocation of inventory.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| Container | NVARCHAR(40) | True |  | False | CONTAINER | Container number. |
| ERPMaterialStockID | INT(10,0) | True |  | False | ERP_MATERIAL_STOCK | Link to the ERP_MATERIAL_STOCK table. |
| GradeID | INT(10,0) | True |  | False | GRADE | Link to the GRADE table. |
| ID | INT(10,0) | False |  | True |  | Unique ID of the row. |
| InventoryAllocationID | INT(10,0) | True |  | False | INVENTORY2_ALLOCATION | Link to the INVENTORY2_ALLOCATION table. |
| InventoryClassID | INT(10,0) | True |  | False | INVENTORY_CLASS | ID of the Inventory Class. |
| InventoryStatus | SMALLINT(5,0) | True |  | False | INVENTORY_STATUS | Link to the INVENTORY_STATUS table. |
| LotNo | NVARCHAR(40) | True |  | False | LOT_NO | Lot number. |
| PartnerID | INT(10,0) | True |  | False | PARTNER | Link to the PARTNER table. |
| ProductID | INT(10,0) | True |  | False | LOT_NO | ID of the Product. |
| Quantity | DECIMAL(28,10) | True |  | False |  | Quantity allocated. |
| SerialNo | NVARCHAR(40) | True |  | False | SERIAL_NO | Serial number. |
| UnitID | INT(10,0) | True |  | False | UNIT | Unique identifier of the Unit. |
| WarehouseLocationID | INT(10,0) | True |  | False | WAREHOUSE_LOCATION | ID of the Warehouse Location. |

## Primary Key

- **PK_SOFT_INVENTORY2_ALLOCATION** on `ID`

## Foreign Keys (this table -> other)

- **FK_SOFT_INVENTORY2_ALLOCATION_CONTAINER** — SOFT_INVENTORY2_ALLOCATION -> CONTAINER (`Container -> Container`)
- **FK_SOFT_INVENTORY2_ALLOCATION_ERP_MATERIAL_STOCK** — SOFT_INVENTORY2_ALLOCATION -> ERP_MATERIAL_STOCK (`ERPMaterialStockID -> ID`)
- **FK_SOFT_INVENTORY2_ALLOCATION_GRADE** — SOFT_INVENTORY2_ALLOCATION -> GRADE (`GradeID -> ID`)
- **FK_SOFT_INVENTORY2_ALLOCATION_INVENTORY_CLASS** — SOFT_INVENTORY2_ALLOCATION -> INVENTORY_CLASS (`InventoryClassID -> ID`)
- **FK_SOFT_INVENTORY2_ALLOCATION_INVENTORY_STATUS** — SOFT_INVENTORY2_ALLOCATION -> INVENTORY_STATUS (`InventoryStatus -> InventoryStatus`)
- **FK_SOFT_INVENTORY2_ALLOCATION_INVENTORY2_ALLOCATION** — SOFT_INVENTORY2_ALLOCATION -> INVENTORY2_ALLOCATION (`InventoryAllocationID -> ID`)
- **FK_SOFT_INVENTORY2_ALLOCATION_LOT_NO** — SOFT_INVENTORY2_ALLOCATION -> LOT_NO (`ProductID, LotNo -> ProductID, LotNo`)
- **FK_SOFT_INVENTORY2_ALLOCATION_PARTNER** — SOFT_INVENTORY2_ALLOCATION -> PARTNER (`PartnerID -> ID`)
- **FK_SOFT_INVENTORY2_ALLOCATION_PRODUCT** — SOFT_INVENTORY2_ALLOCATION -> PRODUCT (`ProductID -> ID`)
- **FK_SOFT_INVENTORY2_ALLOCATION_SERIAL_NO** — SOFT_INVENTORY2_ALLOCATION -> SERIAL_NO (`ProductID, SerialNo -> ProductID, SerialNo`)
- **FK_SOFT_INVENTORY2_ALLOCATION_UNIT** — SOFT_INVENTORY2_ALLOCATION -> UNIT (`UnitID -> ID`)
- **FK_SOFT_INVENTORY2_ALLOCATION_WHS_LOCATION** — SOFT_INVENTORY2_ALLOCATION -> WAREHOUSE_LOCATION (`WarehouseLocationID -> ID`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **UK_SOFT_INVENTORY2_ALLOCATION** on `ProductID, WarehouseLocationID, Container, SerialNo, LotNo, InventoryClassID, InventoryStatus, PartnerID, GradeID, ERPMaterialStockID, InventoryAllocationID`

## Non-Unique Indexes

- **IF_SOFT_INVENTORY2_ALLOCATION_CONTAINER** on `Container`
- **IF_SOFT_INVENTORY2_ALLOCATION_ERP_MATERIAL_STOCK** on `ERPMaterialStockID`
- **IF_SOFT_INVENTORY2_ALLOCATION_GRADE** on `GradeID`
- **IF_SOFT_INVENTORY2_ALLOCATION_INVENTORY_ALLOCATION** on `InventoryAllocationID`
- **IF_SOFT_INVENTORY2_ALLOCATION_INVENTORY_CLASS** on `InventoryClassID`
- **IF_SOFT_INVENTORY2_ALLOCATION_INVENTORY_STATUS** on `InventoryStatus`
- **IF_SOFT_INVENTORY2_ALLOCATION_LOT_NO** on `LotNo, ProductID`
- **IF_SOFT_INVENTORY2_ALLOCATION_PARTNER** on `PartnerID`
- **IF_SOFT_INVENTORY2_ALLOCATION_SERIAL_NO** on `SerialNo, ProductID`
- **IF_SOFT_INVENTORY2_ALLOCATION_UNIT** on `UnitID`
- **IF_SOFT_INVENTORY2_ALLOCATION_WAREHOUSE_LOCATION** on `WarehouseLocationID`
