# WAREHOUSE_ERP_MATERIAL_STOCK

**Database:** Operational

**Description:** This table is used to define N-to-N association between ERP Material Stock and physical warehouses. It is used to indicate which ERP Material Stock can be present in a given warehouse, for example when a certain SAP Storage Location needs to be allowed for one or many Warehouses in Apriso.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| ErpMaterialStockID | INT(10,0) | False |  | True | ERP_MATERIAL_STOCK | Reference to ERP Material Stock allowed for a given Warehouse. |
| Facility | NVARCHAR(40) | False |  | True | WAREHOUSE | The Facility of the Warehouse. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |
| UnitID | INT(10,0) | True |  | False | UNIT | Unique identifier of the Unit. |
| Warehouse | NVARCHAR(10) | False |  | True | WAREHOUSE | Warehouse that is associated with the given ERP Material Stock. |

## Primary Key

- **PK_WAREHOUSE_ERP_MATERIAL_STOCK** on `Facility, Warehouse, ErpMaterialStockID`

## Foreign Keys (this table -> other)

- **FK_WAREHOUSE_ERP_MATERIAL_STOCK_1** — WAREHOUSE_ERP_MATERIAL_STOCK -> WAREHOUSE (`Facility, Warehouse -> Facility, Warehouse`)
- **FK_WAREHOUSE_ERP_MATERIAL_STOCK_2** — WAREHOUSE_ERP_MATERIAL_STOCK -> ERP_MATERIAL_STOCK (`ErpMaterialStockID -> ID`)
- **FK_WAREHOUSE_ERP_MATERIAL_STOCK_UNIT** — WAREHOUSE_ERP_MATERIAL_STOCK -> UNIT (`UnitID -> ID`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_WAREHOUSE_ERP_MATERIAL_STOCK_2** on `ErpMaterialStockID`
- **IF_WAREHOUSE_ERP_MATERIAL_STOCK_UNIT** on `UnitID`
