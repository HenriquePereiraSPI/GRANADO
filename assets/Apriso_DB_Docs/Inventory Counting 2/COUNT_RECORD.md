# COUNT_RECORD

**Database:** Operational

**Description:** This table stores the Count Records for Count Disposition Lines.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| Container | NVARCHAR(40) | True |  | False |  | The Container number. |
| CountDispositionLineID | INT(10,0) | False |  | False | COUNT_DISPOSITION_LINE | Link to the Count Disposition Line. |
| CountedBy | NVARCHAR(50) | True |  | False |  | The user who performed counting. |
| CountedInContainer | NVARCHAR(40) | True |  | False |  | Container the quantity was counted in. |
| CountedOn | DATETIME | True |  | False |  | Count timestamp. |
| CountedQuantity | DECIMAL(28,10) | True |  | False |  | Counted quantity. |
| CountRecordSequence | INT(10,0) | True |  | False |  | Identifies the order of counts, e.g. when one Container was counted many times. |
| ERPMaterialStockID | INT(10,0) | True |  | False | ERP_MATERIAL_STOCK | Link to the ERP_MATERIAL_STOCK table. |
| GradeID | INT(10,0) | True |  | False | GRADE | Link to the GRADE table. |
| ID | INT(10,0) | False |  | True |  | Unique ID of the row. |
| InContainer | NVARCHAR(40) | True |  | False |  | The InContainer number. |
| InventoryAllocationID | INT(10,0) | True |  | False |  | Link to Inventory Allocation. |
| InventoryClassID | INT(10,0) | True |  | False | INVENTORY_CLASS | ID of Inventory Class. |
| InventoryStatus | SMALLINT(5,0) | True |  | False | INVENTORY_STATUS | Link to the INVENTORY_STATUS table. |
| LotNo | NVARCHAR(40) | True |  | False |  | The Lot number. |
| ParentCountRecordID | INT(10,0) | True |  | False | COUNT_RECORD | Link to parent Count Record. |
| PartnerID | INT(10,0) | True |  | False | PARTNER | Link to the PARTNER table. |
| PhantomFlag | BIT | False | ((0)) | False |  | Indicates a phantom inventory. |
| ProductID | INT(10,0) | True |  | False | PRODUCT | ID of the Product. |
| QuantityAllocated | DECIMAL(28,10) | True |  | False |  | Quantity Allocated. |
| QuantityOnHand | DECIMAL(28,10) | True |  | False |  | Quantity Available. |
| SerialNo | NVARCHAR(40) | True |  | False |  | The Serial number. |
| UnitID | INT(10,0) | True |  | False | UNIT | Unique identifier of the Unit. |
| WarehouseLocationID | INT(10,0) | True |  | False | WAREHOUSE_LOCATION | ID of the Warehouse Location of Inventory or scanned Inventory. |

## Primary Key

- **PK_COUNT_RECORD** on `ID`

## Foreign Keys (this table -> other)

- **FK_COUNT_RECORD_COUNT_DISP_LINE** — COUNT_RECORD -> COUNT_DISPOSITION_LINE (`CountDispositionLineID -> ID`)
- **FK_COUNT_RECORD_COUNT_RECORD** — COUNT_RECORD -> COUNT_RECORD (`ParentCountRecordID -> ID`)
- **FK_COUNT_RECORD_ERP_MATERIAL_STOCK** — COUNT_RECORD -> ERP_MATERIAL_STOCK (`ERPMaterialStockID -> ID`)
- **FK_COUNT_RECORD_GRADE** — COUNT_RECORD -> GRADE (`GradeID -> ID`)
- **FK_COUNT_RECORD_INVENTORY_CLASS** — COUNT_RECORD -> INVENTORY_CLASS (`InventoryClassID -> ID`)
- **FK_COUNT_RECORD_INVENTORY_STATUS** — COUNT_RECORD -> INVENTORY_STATUS (`InventoryStatus -> InventoryStatus`)
- **FK_COUNT_RECORD_PARTNER** — COUNT_RECORD -> PARTNER (`PartnerID -> ID`)
- **FK_COUNT_RECORD_PRODUCT** — COUNT_RECORD -> PRODUCT (`ProductID -> ID`)
- **FK_COUNT_RECORD_UNIT** — COUNT_RECORD -> UNIT (`UnitID -> ID`)
- **FK_COUNT_RECORD_WHS_LOCATION** — COUNT_RECORD -> WAREHOUSE_LOCATION (`WarehouseLocationID -> ID`)

## Referenced By (other tables -> this)

- **FK_COUNT_RECORD_COUNT_RECORD** — COUNT_RECORD -> COUNT_RECORD (`ParentCountRecordID -> ID`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_COUNT_RECORD_COUNT_DISP_LINE** on `CountDispositionLineID`
- **IF_COUNT_RECORD_COUNT_RECORD** on `ParentCountRecordID`
- **IF_COUNT_RECORD_ERP_MATERIAL_STOCK** on `ERPMaterialStockID`
- **IF_COUNT_RECORD_GRADE** on `GradeID`
- **IF_COUNT_RECORD_INVENTORY_CLASS** on `InventoryClassID`
- **IF_COUNT_RECORD_INVENTORY_STATUS** on `InventoryStatus`
- **IF_COUNT_RECORD_PARTNER** on `PartnerID`
- **IF_COUNT_RECORD_PRODUCT** on `ProductID`
- **IF_COUNT_RECORD_UNIT** on `UnitID`
