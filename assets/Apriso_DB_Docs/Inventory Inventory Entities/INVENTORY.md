# INVENTORY

**Database:** Operational

**Description:** Stores information about Inventories such as available/allocated quantity, UoM code of the quantities, etc. The unique key for Inventory consists of Product, Inventory Status, Warehouse Location, Lot Number, Partner and Grade. The contents of the table are displayed through Cockpit.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| ExpirationDate | DATETIME | True |  | False |  | For future use. |
| Facility | NVARCHAR(40) | True |  | False | WAREHOUSE | Assignment of the Inventory records to a Facility. |
| GradeID | INT(10,0) | True |  | False | GRADE | For future use. |
| ID | INT(10,0) | False |  | True |  | Unique identifier of a record (key) in a table. |
| InventoryClassID | INT(10,0) | True |  | False | INVENTORY_CLASS | For future use. |
| InventoryStatus | SMALLINT(5,0) | True |  | False | INVENTORY_STATUS | Status of the Inventory (user-defined). |
| InventoryTag | INT(10,0) | True |  | False | INVENTORY_TAG | For future use. |
| LotNo | NVARCHAR(40) | True |  | False | LOT_NO | Lot Number in Inventory. |
| MaxFifoDate | DATETIME | True |  | False |  | For future use. |
| MinFifoDate | DATETIME | True |  | False |  | For future use. |
| PartnerID | INT(10,0) | True |  | False | PARTNER | Owner of the Inventory (reference to Partner). |
| ProductID | INT(10,0) | True |  | False | LOT_NO | Reference to a Product (Product Number and Product Version). |
| ProductInventoryType | SMALLINT(5,0) | True |  | False | PRODUCT_INVENTORY_TYPE | Type of Product for Inventory management purposes. |
| QuantityAllocated | DECIMAL(28,10) | True | (0) | False |  | Quantity allocated to an Order. |
| QuantityException | DECIMAL(28,10) | True | (0) | False |  | For future use. |
| QuantityInActive | DECIMAL(28,10) | True |  | False |  | Quantity of unactivated Inventory ( e.g. labels printed in advance). |
| QuantityOnHand | DECIMAL(28,10) | True | (0) | False |  | Quantity of unallocated Inventory. |
| QuantityToPick | DECIMAL(28,10) | True | (0) | False |  | Quantity allocated to a WIP Order. Corresponds to the sum of the same field in WIP_ORDER_CONTENT. |
| QuantityToPickReleased | DECIMAL(28,10) | True | (0) | False |  | For future use. |
| QuantityToPut | DECIMAL(28,10) | True | (0) | False |  | For future use. |
| QuantityToPutReleased | DECIMAL(28,10) | True | (0) | False |  | For future use. |
| ReservationTag | INT(10,0) | True |  | False | INVENTORY_RESERVATION | For future use. |
| RotationKey | INT(10,0) | True |  | False |  | For future use. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |
| UomCode | NVARCHAR(10) | True |  | False | UOM | UoM for the management of the Inventory. |
| Warehouse | NVARCHAR(10) | True |  | False | WAREHOUSE | Warehouse that contains the Inventory. |
| WarehouseLocationID | INT(10,0) | True |  | False | WAREHOUSE_LOCATION | Location / bin where the inventory is located |

## Primary Key

- **PK_INVENTORY** on `ID`

## Foreign Keys (this table -> other)

- **FK_INVENTORY_GRADE** — INVENTORY -> GRADE (`GradeID -> ID`)
- **FK_INVENTORY_INVENTORY_CLASS** — INVENTORY -> INVENTORY_CLASS (`InventoryClassID -> ID`)
- **FK_INVENTORY_INVENTORY_RESERVATION** — INVENTORY -> INVENTORY_RESERVATION (`ReservationTag -> ReservationTag`)
- **FK_INVENTORY_INVENTORY_STATUS** — INVENTORY -> INVENTORY_STATUS (`InventoryStatus -> InventoryStatus`)
- **FK_INVENTORY_INVENTORY_TAG** — INVENTORY -> INVENTORY_TAG (`InventoryTag -> InventoryTag`)
- **FK_INVENTORY_LOT_NO** — INVENTORY -> LOT_NO (`ProductID, LotNo -> ProductID, LotNo`)
- **FK_INVENTORY_PARTNER** — INVENTORY -> PARTNER (`PartnerID -> ID`)
- **FK_INVENTORY_PRODUCT** — INVENTORY -> PRODUCT (`ProductID -> ID`)
- **FK_INVENTORY_PRODUCT_INVENTORY_TYPE** — INVENTORY -> PRODUCT_INVENTORY_TYPE (`ProductInventoryType -> ProductInventoryType`)
- **FK_INVENTORY_UOM** — INVENTORY -> UOM (`UomCode -> UomCode`)
- **FK_INVENTORY_WAREHOUSE** — INVENTORY -> WAREHOUSE (`Facility, Warehouse -> Facility, Warehouse`)
- **FK_INVENTORY_WAREHOUSE_LOCATION** — INVENTORY -> WAREHOUSE_LOCATION (`WarehouseLocationID -> ID`)

## Referenced By (other tables -> this)

- **FK_CONTAINER_INVENTORY** — CONTAINER -> INVENTORY (`InventoryID -> ID`)
- **FK_INTERNAL_CONTENT_INVENTORY** — MATERIAL_ORDER_CONTENT -> INVENTORY (`InventoryID -> ID`)
- **FK_INVENTORY_CONTAINER_INVENTORY** — INVENTORY_CONTAINER -> INVENTORY (`InventoryID -> ID`)
- **FK_INVENTORY_SERIAL_NO_INVENTORY** — INVENTORY_SERIAL_NO -> INVENTORY (`InventoryID -> ID`)
- **FK_INVENTORY_TRANSIT_INVENTORY** — INVENTORY_TRANSIT -> INVENTORY (`InventoryID -> ID`)
- **FK_RECEIPT_CONTENT_INVENTORY** — RECEIPT_CONTENT -> INVENTORY (`InventoryID -> ID`)
- **FK_TASK_INVENTORY_INVENTORY** — TASK_INVENTORY -> INVENTORY (`SourceInventoryID -> ID`)
- **FK_TASK_INVENTORY_INVENTORY1** — TASK_INVENTORY -> INVENTORY (`DestInventoryID -> ID`)
- **FK_TASK_MATERIAL_USE_INVENTORY** — TASK_MATERIAL_USE -> INVENTORY (`SourceInventoryID -> ID`)
- **FK_TASK_MATERIAL_USE_INVENTORY1** — TASK_MATERIAL_USE -> INVENTORY (`DestInventoryID -> ID`)
- **FK_WIP_ORDER_CONTENT_INVENTORY** — WIP_ORDER_CONTENT -> INVENTORY (`InventoryID -> ID`)

## Unique Indexes

- **UK_INVENTORY** on `WarehouseLocationID, ProductID, LotNo, PartnerID, GradeID, UomCode, InventoryStatus`

## Non-Unique Indexes

- **IF_INVENTORY_GRADE** on `GradeID`
- **IF_INVENTORY_INVENTORY_CLASS** on `InventoryClassID`
- **IF_INVENTORY_INVENTORY_RESERVATION** on `ReservationTag`
- **IF_INVENTORY_INVENTORY_STATUS** on `InventoryStatus`
- **IF_INVENTORY_INVENTORY_TAG** on `InventoryTag`
- **IF_INVENTORY_LOT_NO** on `LotNo, ProductID`
- **IF_INVENTORY_PARTNER** on `PartnerID`
- **IF_INVENTORY_PRODUCT** on `ProductID`
- **IXD_LotNo_WarehouseLocationID_ProductID** on `LotNo, WarehouseLocationID, ProductID`
