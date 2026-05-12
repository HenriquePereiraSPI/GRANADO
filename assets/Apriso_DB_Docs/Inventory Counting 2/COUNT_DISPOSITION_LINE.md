# COUNT_DISPOSITION_LINE

**Database:** Operational

**Description:** This table stores the Count Dispositions lines.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| ActualCompletionDate | DATETIME | True |  | False |  | Date when the line is set to Counting Completed status. |
| ActualStartDate | DATETIME | True |  | False |  | Date of the first count within this line. |
| Container | NVARCHAR(40) | True |  | False |  | Link to the CONTAINER table. |
| CountDispositionID | INT(10,0) | False |  | False | COUNT_DISPOSITION | Link to the COUNT_DISPOSITION table. |
| CountStatus | SMALLINT(5,0) | False |  | False | COUNT_STATUS | Status of the Line. |
| DiscrepancyType | SMALLINT(5,0) | True |  | False | COUNT_DISCREPANCY_TYPE | The link to the COUNT_DISCREPANCY_TYPE. |
| DispositionLineNo | INT(10,0) | False |  | False |  | Disposition Line Number. |
| ERPMaterialStockID | INT(10,0) | True |  | False | ERP_MATERIAL_STOCK | Link to the ERP_MATERIAL_STOCK table. |
| GradeID | INT(10,0) | True |  | False | GRADE | Link to the GRADE table. |
| Group_ | NVARCHAR(40) | True |  | False | GROUP_ | The Group of the entity to count. |
| GroupClassID | INT(10,0) | True |  | False | GROUP_ | The Group Class ID of the entity to count. |
| GroupType | SMALLINT(5,0) | True |  | False | GROUP_ | The Group Type of the entity to count. |
| ID | INT(10,0) | False |  | True |  | Unique ID of the row. |
| InventoryAccuracyRatio | DECIMAL(28,10) | True |  | False |  | Inventory accuracy of a Count Disposition Line. It is counted in the following way: 1 minus the number of counted Records that required adjustment due to discrepancy divided by the total number of counted Records. |
| InventoryClassID | INT(10,0) | True |  | False | INVENTORY_CLASS | Link to the INVENTORY_CLASS table. |
| InventoryStatus | SMALLINT(5,0) | True |  | False | INVENTORY_STATUS | Link to the INVENTORY_STATUS table. |
| LotNo | NVARCHAR(40) | True |  | False |  | Link to the LOT_NO table. |
| NoOfCounts | INT(10,0) | True |  | False |  | Number of Counts. |
| OprSequenceNo | NVARCHAR(20) | True |  | False | WIP_OPERATION | Operation Sequence Number. |
| PartnerID | INT(10,0) | True |  | False | PARTNER | Link to the PARTNER table. |
| ProductID | INT(10,0) | True |  | False | PRODUCT | Link to the PRODUCT table. |
| SerialNo | NVARCHAR(40) | True |  | False |  | Link to the SERIAL_NO table. |
| SignatureHeaderID | INT(10,0) | True |  | False | SIGNATURE_HEADER | Link to the SIGNATURE_HEADER table. |
| UnitID | INT(10,0) | True |  | False | UNIT | Unique identifier of the Unit. |
| WarehouseLocationID | INT(10,0) | False |  | False | WAREHOUSE_LOCATION | Link to the WAREHOUSE_LOCATION table. |
| WipOrderNo | NVARCHAR(40) | True |  | False | WIP_OPERATION | WIP Order Number. |
| WipOrderType | SMALLINT(5,0) | True |  | False | WIP_OPERATION | WIP Order Type. |

## Primary Key

- **PK_COUNT_DISPOSITION_LINE** on `ID`

## Foreign Keys (this table -> other)

- **FK_COUNT_DISPOSITION_LINE_COUNT_DISCREPANCY_TYPE** — COUNT_DISPOSITION_LINE -> COUNT_DISCREPANCY_TYPE (`DiscrepancyType -> CountDiscrepancyType`)
- **FK_COUNT_DISPOSITION_LINE_COUNT_DISPOSITION** — COUNT_DISPOSITION_LINE -> COUNT_DISPOSITION (`CountDispositionID -> ID`)
- **FK_COUNT_DISPOSITION_LINE_COUNT_STATUS** — COUNT_DISPOSITION_LINE -> COUNT_STATUS (`CountStatus -> CountStatus`)
- **FK_COUNT_DISPOSITION_LINE_ERP_MATERIAL_STOCK** — COUNT_DISPOSITION_LINE -> ERP_MATERIAL_STOCK (`ERPMaterialStockID -> ID`)
- **FK_COUNT_DISPOSITION_LINE_GRADE** — COUNT_DISPOSITION_LINE -> GRADE (`GradeID -> ID`)
- **FK_COUNT_DISPOSITION_LINE_GROUP** — COUNT_DISPOSITION_LINE -> GROUP_ (`Group_, GroupType, GroupClassID -> Group_, GroupType, GroupClassID`)
- **FK_COUNT_DISPOSITION_LINE_INVENTORY_CLASS** — COUNT_DISPOSITION_LINE -> INVENTORY_CLASS (`InventoryClassID -> ID`)
- **FK_COUNT_DISPOSITION_LINE_INVENTORY_STATUS** — COUNT_DISPOSITION_LINE -> INVENTORY_STATUS (`InventoryStatus -> InventoryStatus`)
- **FK_COUNT_DISPOSITION_LINE_PARTNER** — COUNT_DISPOSITION_LINE -> PARTNER (`PartnerID -> ID`)
- **FK_COUNT_DISPOSITION_LINE_PRODUCT** — COUNT_DISPOSITION_LINE -> PRODUCT (`ProductID -> ID`)
- **FK_COUNT_DISPOSITION_LINE_SIGNATURE_HEADER** — COUNT_DISPOSITION_LINE -> SIGNATURE_HEADER (`SignatureHeaderID -> ID`)
- **FK_COUNT_DISPOSITION_LINE_UNIT** — COUNT_DISPOSITION_LINE -> UNIT (`UnitID -> ID`)
- **FK_COUNT_DISPOSITION_LINE_WAREHOUSE_LOCATION** — COUNT_DISPOSITION_LINE -> WAREHOUSE_LOCATION (`WarehouseLocationID -> ID`)
- **FK_COUNT_DISPOSITION_LINE_WIP_OPERATION** — COUNT_DISPOSITION_LINE -> WIP_OPERATION (`WipOrderNo, WipOrderType, OprSequenceNo -> WipOrderNo, WipOrderType, OprSequenceNo`)
- **FK_COUNT_DISPOSITION_LINE_WIP_ORDER** — COUNT_DISPOSITION_LINE -> WIP_ORDER (`WipOrderNo, WipOrderType -> WipOrderNo, WipOrderType`)

## Referenced By (other tables -> this)

- **FK_COUNT_DISPOSITION_RESOURCE_COUNT_DISPOSITION_LINE** — COUNT_DISPOSITION_RESOURCE -> COUNT_DISPOSITION_LINE (`CountDispositionLineID -> ID`)
- **FK_COUNT_DISPOSITION_STATUS_HISTORY_COUNT_DISPOSITION_LINE** — COUNT_DISPOSITION_STATUS_HISTORY -> COUNT_DISPOSITION_LINE (`CountDispositionLineID -> ID`)
- **FK_COUNT_RECORD_COUNT_DISP_LINE** — COUNT_RECORD -> COUNT_DISPOSITION_LINE (`CountDispositionLineID -> ID`)

## Unique Indexes

- **UK_COUNT_DISPOSITION_LINE_01** on `CountDispositionID, DispositionLineNo`

## Non-Unique Indexes

- **IF_COUNT_DISPOSITION_LINE_COUNT_STATUS** on `CountStatus`
- **IF_COUNT_DISPOSITION_LINE_ERP_MATERIAL_STOCK** on `ERPMaterialStockID`
- **IF_COUNT_DISPOSITION_LINE_GRADE** on `GradeID`
- **IF_COUNT_DISPOSITION_LINE_GROUP** on `Group_, GroupType, GroupClassID`
- **IF_COUNT_DISPOSITION_LINE_INVENTORY_CLASS** on `InventoryClassID`
- **IF_COUNT_DISPOSITION_LINE_INVENTORY_STATUS** on `InventoryStatus`
- **IF_COUNT_DISPOSITION_LINE_PARTNER** on `PartnerID`
- **IF_COUNT_DISPOSITION_LINE_PRODUCT** on `ProductID`
- **IF_COUNT_DISPOSITION_LINE_SIGNATURE_HEADER** on `SignatureHeaderID`
- **IF_COUNT_DISPOSITION_LINE_UNIT** on `UnitID`
- **IF_COUNT_DISPOSITION_LINE_WIP** on `WipOrderNo, WipOrderType, OprSequenceNo`
