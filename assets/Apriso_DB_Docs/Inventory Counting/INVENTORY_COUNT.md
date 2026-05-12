# INVENTORY_COUNT

**Database:** Operational

**Description:** Stores information about counting an Inventory given by a unique key. The information consists of the a count status, count date, Employee doing the count and counted quantities.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| AdjustDocumentNumber | NVARCHAR(20) | True |  | False |  | James |
| CountDate | DATETIME | True |  | False |  | Date and time at which the count was performed. |
| CountDocumentFlowID | INT(10,0) | True |  | False | COUNT_DOCUMENT_FLOW | Reference to the Document Number and Count Number. |
| CountStatus | SMALLINT(5,0) | True |  | False | COUNT_STATUS | Status of the count. |
| EmployeeID | INT(10,0) | True |  | False | EMPLOYEE | Employee performing the count. |
| ErrorCode | NVARCHAR(255) | True |  | False |  | Literal ID returned by the Business Component when the count was set to fail. |
| GradeID | INT(10,0) | True |  | False | GRADE | For future use. |
| ID | INT(10,0) | False |  | True |  | Unique identifier of a record (key) in a table. |
| InventoryClassID | INT(10,0) | True |  | False | INVENTORY_CLASS | For future use. |
| InventoryStatus | SMALLINT(5,0) | True |  | False | INVENTORY_STATUS | Status of the Inventory count. |
| LastCountDate | DATETIME | True |  | False |  | Date and time at which the previous count was performed. |
| LastCountStatus | SMALLINT(5,0) | True |  | False | COUNT_STATUS | Status of the previous count. |
| LastEmployeeID | INT(10,0) | True |  | False | EMPLOYEE | Employee who performed the previous count. |
| LastQuantityCounted | DECIMAL(28,10) | True |  | False |  | Previous count quantity. |
| LotNo | NVARCHAR(40) | True |  | False | LOT_NO | <null> |
| PartnerID | INT(10,0) | True |  | False | PARTNER | Owner of the Inventory (reference to Partner). |
| ProductID | INT(10,0) | True |  | False | LOT_NO | Reference to a Product (Product Number and Product Version). |
| QuantityCounted | DECIMAL(28,10) | True |  | False |  | Quantity counted. |
| QuantityFinal | DECIMAL(28,10) | True |  | False |  | Quantity in Inventory when the count was completed. |
| QuantityInitial | DECIMAL(28,10) | True |  | False |  | Quantity in Inventory when the count was started. |
| ReasonCode | NVARCHAR(20) | True |  | False | REASON_CODE | Reason Code for the Inventory count document, for use in Change Item Status (at the moment stored in TEXT_TRANSLATION). |
| ReCountNumber | INT(10,0) | True |  | False |  | Number of times this Inventory was counted. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |
| UomCode | NVARCHAR(10) | True |  | False | UOM | UoM for management of the Inventory. |
| WarehouseLocationID | INT(10,0) | True |  | False | WAREHOUSE_LOCATION | <null> |

## Primary Key

- **PK_INVENTORY_COUNT** on `ID`

## Foreign Keys (this table -> other)

- **FK_INVENTORY_COUNT_COUNT_DOCUMENT_FLOW** — INVENTORY_COUNT -> COUNT_DOCUMENT_FLOW (`CountDocumentFlowID -> ID`)
- **FK_INVENTORY_COUNT_COUNT_STATUS** — INVENTORY_COUNT -> COUNT_STATUS (`CountStatus -> CountStatus`)
- **FK_INVENTORY_COUNT_COUNT_STATUS1** — INVENTORY_COUNT -> COUNT_STATUS (`LastCountStatus -> CountStatus`)
- **FK_INVENTORY_COUNT_EMPLOYEE** — INVENTORY_COUNT -> EMPLOYEE (`EmployeeID -> ID`)
- **FK_INVENTORY_COUNT_EMPLOYEE1** — INVENTORY_COUNT -> EMPLOYEE (`LastEmployeeID -> ID`)
- **FK_INVENTORY_COUNT_GRADE** — INVENTORY_COUNT -> GRADE (`GradeID -> ID`)
- **FK_INVENTORY_COUNT_INVENTORY_CLASS** — INVENTORY_COUNT -> INVENTORY_CLASS (`InventoryClassID -> ID`)
- **FK_INVENTORY_COUNT_INVENTORY_STATUS** — INVENTORY_COUNT -> INVENTORY_STATUS (`InventoryStatus -> InventoryStatus`)
- **FK_INVENTORY_COUNT_LOT_NO** — INVENTORY_COUNT -> LOT_NO (`ProductID, LotNo -> ProductID, LotNo`)
- **FK_INVENTORY_COUNT_PARTNER** — INVENTORY_COUNT -> PARTNER (`PartnerID -> ID`)
- **FK_INVENTORY_COUNT_PRODUCT** — INVENTORY_COUNT -> PRODUCT (`ProductID -> ID`)
- **FK_INVENTORY_COUNT_REASON_CODE** — INVENTORY_COUNT -> REASON_CODE (`ReasonCode -> ReasonCode`)
- **FK_INVENTORY_COUNT_UOM** — INVENTORY_COUNT -> UOM (`UomCode -> UomCode`)
- **FK_INVENTORY_COUNT_WAREHOUSE_LOCATION** — INVENTORY_COUNT -> WAREHOUSE_LOCATION (`WarehouseLocationID -> ID`)

## Referenced By (other tables -> this)

- **FK_INVENTORY_COUNT_CONTAINER_INVENTORY_COUNT** — INVENTORY_COUNT_CONTAINER -> INVENTORY_COUNT (`InventoryCountID -> ID`)
- **FK_INVENTORY_COUNT_SERIAL_NO_INVENTORY_COUNT** — INVENTORY_COUNT_SERIAL_NO -> INVENTORY_COUNT (`InventoryCountID -> ID`)
- **FK_INVENTORY_COUNT_SERIAL_NO_INVENTORY_COUNT1** — INVENTORY_COUNT_SERIAL_NO -> INVENTORY_COUNT (`LastInventoryCountID -> ID`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_INVENTORY_COUNT_COUNT_DOCUMENT_FLOW** on `CountDocumentFlowID`
- **IF_INVENTORY_COUNT_COUNT_STATUS** on `CountStatus`
- **IF_INVENTORY_COUNT_COUNT_STATUS1** on `LastCountStatus`
- **IF_INVENTORY_COUNT_GRADE** on `GradeID`
- **IF_INVENTORY_COUNT_INVENTORY_CLASS** on `InventoryClassID`
- **IF_INVENTORY_COUNT_INVENTORY_STATUS** on `InventoryStatus`
- **IF_INVENTORY_COUNT_LITERAL** on `ErrorCode`
- **IF_INVENTORY_COUNT_LOT_NO** on `LotNo, ProductID`
- **IF_INVENTORY_COUNT_PARTNER** on `PartnerID`
- **IF_INVENTORY_COUNT_PRODUCT** on `ProductID`
