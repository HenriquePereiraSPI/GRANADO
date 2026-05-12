# COUNT_LOCK

**Database:** Operational

**Description:** Stores information about locked inventory. An inventory can be locked for increments and decrements. No adjustements and movements can be performed against such inventory other than the ones performed

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| AllowDecrease | BIT | True |  | False |  | Flag to indicate if the inventory to be locked can be decremented. |
| AllowIncrease | BIT | True |  | False |  | Flag to indicate if the inventory to be locked can be incremented. |
| CountDocumentFlowID | INT(10,0) | True |  | False | COUNT_DOCUMENT_FLOW | Reference to the Document Number and Count Number. |
| CountStatus | SMALLINT(5,0) | True |  | False | COUNT_STATUS | Status of the Count. |
| GradeID | INT(10,0) | True |  | False | GRADE | Apriso use. |
| ID | INT(10,0) | False |  | True |  | Unique identifier of a record (key) in a table. |
| InventoryStatus | SMALLINT(5,0) | True |  | False | INVENTORY_STATUS | Status of the Inventory to be Locked. |
| LotNo | NVARCHAR(40) | True |  | False | LOT_NO | Defines what Lot is being counted. |
| PartnerID | INT(10,0) | True |  | False | PARTNER | Partner of the Inventory to be Locked. |
| ProductID | INT(10,0) | True |  | False | LOT_NO | Reference to a Product (Product Number and Product Version). |
| WarehouseLocationID | INT(10,0) | True |  | False | WAREHOUSE_LOCATION | Location to be Locked. |

## Primary Key

- **PK_COUNT_LOCK** on `ID`

## Foreign Keys (this table -> other)

- **FK_COUNT_LOCK_COUNT_DOCUMENT_FLOW** — COUNT_LOCK -> COUNT_DOCUMENT_FLOW (`CountDocumentFlowID -> ID`)
- **FK_COUNT_LOCK_COUNT_STATUS** — COUNT_LOCK -> COUNT_STATUS (`CountStatus -> CountStatus`)
- **FK_COUNT_LOCK_GRADE** — COUNT_LOCK -> GRADE (`GradeID -> ID`)
- **FK_COUNT_LOCK_INVENTORY_STATUS** — COUNT_LOCK -> INVENTORY_STATUS (`InventoryStatus -> InventoryStatus`)
- **FK_COUNT_LOCK_LOT_NO** — COUNT_LOCK -> LOT_NO (`ProductID, LotNo -> ProductID, LotNo`)
- **FK_COUNT_LOCK_PARTNER** — COUNT_LOCK -> PARTNER (`PartnerID -> ID`)
- **FK_COUNT_LOCK_PRODUCT** — COUNT_LOCK -> PRODUCT (`ProductID -> ID`)
- **FK_COUNT_LOCK_WAREHOUSE_LOCATION** — COUNT_LOCK -> WAREHOUSE_LOCATION (`WarehouseLocationID -> ID`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_COUNT_LOCK_COUNT_DOCUMENT_FLOW** on `CountDocumentFlowID`
- **IF_COUNT_LOCK_COUNT_STATUS** on `CountStatus`
- **IF_COUNT_LOCK_GRADE** on `GradeID`
- **IF_COUNT_LOCK_INVENTORY_STATUS** on `InventoryStatus`
- **IF_COUNT_LOCK_LOT_NO** on `LotNo, ProductID`
- **IF_COUNT_LOCK_PARTNER** on `PartnerID`
- **IF_COUNT_LOCK_PRODUCT** on `ProductID`
- **IXD_WarehouseLocationID_CountStatus** on `WarehouseLocationID, CountStatus`
