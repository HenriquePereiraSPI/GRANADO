# WIP_ORDER_CONTENT

**Database:** Operational

**Description:** The “WIP_ORDER_CONTENT” table tracks information about inventory allocation, receiving and issuing. The quantity allocated is stored in QuantityToPick field. Quantity received is stored in QuantityProcessed as a positive value and quantity issued as a negative value. The information is stored per WIP Order and WIP Operation level. Additionally “WIP_ORDER_CONTENT” table provides information about quantities in WIP Order uom.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| Company | NVARCHAR(40) | True |  | False | COMPANY | For future use. |
| Facility | NVARCHAR(40) | True |  | False | WAREHOUSE | The Facility in which the allocated inventory is located or the processed inventory was located. |
| GradeID | INT(10,0) | True |  | False | PRODUCT_GRADE | For future use. |
| ID | INT(10,0) | False |  | True |  | Unique identifier of a record (key) in a table |
| InventoryClassID | INT(10,0) | True |  | False | INVENTORY_CLASS | For future use. |
| InventoryID | INT(10,0) | True |  | False | INVENTORY | Populated when inventory is allocated to an order |
| InventoryStatus | SMALLINT(5,0) | True |  | False | INVENTORY_STATUS | The InventoryStatus if the allocated inventory or the processed inventory. |
| InventoryTag | INT(10,0) | True |  | False | INVENTORY_TAG | For future use. |
| LotNo | NVARCHAR(40) | True |  | False | LOT_NO | Lot allocated or processed depending of the buckets populated |
| OprSequenceNo | NVARCHAR(20) | True |  | False | WIP_OPERATION | Reference to the WIP Operation (in addition to WIP Order and WIP Order type information) |
| OrderQuantityProcessed | DECIMAL(28,10) | True |  | False |  | The QuantityProcessed in the UOM of the WIP Order. Populated if and only if the ProductID matches the WIP Order's. |
| OrderQuantityToPick | DECIMAL(28,10) | True |  | False |  | The QuantityToPick in the UOM of the WIP Order. Populated if and only if the ProductID matches the WIP Order's. |
| OrderQuantityToPickReleased | DECIMAL(28,10) | True |  | False |  | For future use. |
| OrderQuantityToPut | DECIMAL(28,10) | True |  | False |  | For future use. |
| OrderQuantityToPutReleased | DECIMAL(28,10) | True |  | False |  | For future use. |
| OrderTargetQuantity | DECIMAL(28,10) | True |  | False |  | For future use. |
| OrderUomCode | NVARCHAR(10) | True |  | False | UOM | UOM code of the order. |
| PartnerID | INT(10,0) | True |  | False | PARTNER | The PartnerID of the allocated or processed inventory. |
| ProductID | INT(10,0) | True |  | False | LOT_NO | Reference to a product (product number and product version) |
| QuantityProcessed | DECIMAL(28,10) | True |  | False |  | The total quantity processed against the WIP Order for the specified inventory. When inventory is issued (adjusted with a decrement or debitted) with a WIP Order reference, this field is decremented by the same amount. Conversely, when inventory is receiv |
| QuantityToPick | DECIMAL(28,10) | True |  | False |  | Quantity allocated against the WIP Order for the specified inventory. |
| QuantityToPickReleased | DECIMAL(28,10) | True |  | False |  | For future use. |
| QuantityToPut | DECIMAL(28,10) | True |  | False |  | For future use. |
| QuantityToPutReleased | DECIMAL(28,10) | True |  | False |  | For future use. |
| ReservationTag | INT(10,0) | True |  | False | INVENTORY_RESERVATION | For future use. |
| TargetQuantity | DECIMAL(28,10) | True |  | False |  | For future use. |
| UomCode | NVARCHAR(10) | True |  | False | UOM | The UOM Code for all Quantity fields in this table (not including OrderQuantity fields). |
| Warehouse | NVARCHAR(10) | True |  | False | WAREHOUSE | The Warehouse in which inventory is allocated or from/to which inventory has been processed. |
| WarehouseLocationID | INT(10,0) | True |  | False | WAREHOUSE_LOCATION | The Warehouse Location in which inventory is allocated or from/to which inventory has been processed. |
| WipOrderNo | NVARCHAR(40) | True |  | False | WIP_OPERATION | Link to the WIP Order |
| WipOrderType | SMALLINT(5,0) | True |  | False | WIP_OPERATION | Link to the WIP Order type |

## Primary Key

- **PK_WIP_ORDER_CONTENT** on `ID`

## Foreign Keys (this table -> other)

- **FK_WIP_ORDER_CONTENT_COMPANY** — WIP_ORDER_CONTENT -> COMPANY (`Company -> Company`)
- **FK_WIP_ORDER_CONTENT_INVENTORY** — WIP_ORDER_CONTENT -> INVENTORY (`InventoryID -> ID`)
- **FK_WIP_ORDER_CONTENT_INVENTORY_CLASS** — WIP_ORDER_CONTENT -> INVENTORY_CLASS (`InventoryClassID -> ID`)
- **FK_WIP_ORDER_CONTENT_INVENTORY_RESERVATION** — WIP_ORDER_CONTENT -> INVENTORY_RESERVATION (`ReservationTag -> ReservationTag`)
- **FK_WIP_ORDER_CONTENT_INVENTORY_STATUS** — WIP_ORDER_CONTENT -> INVENTORY_STATUS (`InventoryStatus -> InventoryStatus`)
- **FK_WIP_ORDER_CONTENT_INVENTORY_TAG** — WIP_ORDER_CONTENT -> INVENTORY_TAG (`InventoryTag -> InventoryTag`)
- **FK_WIP_ORDER_CONTENT_LOT_NO** — WIP_ORDER_CONTENT -> LOT_NO (`ProductID, LotNo -> ProductID, LotNo`)
- **FK_WIP_ORDER_CONTENT_PARTNER** — WIP_ORDER_CONTENT -> PARTNER (`PartnerID -> ID`)
- **FK_WIP_ORDER_CONTENT_PRODUCT_GRADE** — WIP_ORDER_CONTENT -> PRODUCT_GRADE (`ProductID, GradeID -> ProductID, GradeID`)
- **FK_WIP_ORDER_CONTENT_UOM** — WIP_ORDER_CONTENT -> UOM (`UomCode -> UomCode`)
- **FK_WIP_ORDER_CONTENT_UOM1** — WIP_ORDER_CONTENT -> UOM (`OrderUomCode -> UomCode`)
- **FK_WIP_ORDER_CONTENT_WAREHOUSE** — WIP_ORDER_CONTENT -> WAREHOUSE (`Facility, Warehouse -> Facility, Warehouse`)
- **FK_WIP_ORDER_CONTENT_WAREHOUSE_LOCATION** — WIP_ORDER_CONTENT -> WAREHOUSE_LOCATION (`WarehouseLocationID -> ID`)
- **FK_WIP_ORDER_CONTENT_WIP_OPERATION** — WIP_ORDER_CONTENT -> WIP_OPERATION (`WipOrderNo, WipOrderType, OprSequenceNo -> WipOrderNo, WipOrderType, OprSequenceNo`)
- **FK_WIP_ORDER_CONTENT_WIP_ORDER** — WIP_ORDER_CONTENT -> WIP_ORDER (`WipOrderNo, WipOrderType -> WipOrderNo, WipOrderType`)

## Referenced By (other tables -> this)

- **FK_INVENTORY_TRANSIT_WIP_ORDER_CONTENT** — INVENTORY_TRANSIT -> WIP_ORDER_CONTENT (`WipOrderContentID -> ID`)
- **FK_WIP_ORDER_CONTAINER_WIP_ORDER_CONTENT** — WIP_ORDER_CONTAINER -> WIP_ORDER_CONTENT (`WipOrderContentID -> ID`)
- **FK_WIP_ORDER_CONTENT_SERIAL_WIP_ORDER_CONTENT** — WIP_ORDER_CONTENT_SERIAL -> WIP_ORDER_CONTENT (`WipOrderContentID -> ID`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_WIP_ORDER_CONTENT_INVENTORY** on `InventoryID`
- **IF_WIP_ORDER_CONTENT_INVENTORY_CLASS** on `InventoryClassID`
- **IF_WIP_ORDER_CONTENT_INVENTORY_RESERVATION** on `ReservationTag`
- **IF_WIP_ORDER_CONTENT_INVENTORY_STATUS** on `InventoryStatus`
- **IF_WIP_ORDER_CONTENT_INVENTORY_TAG** on `InventoryTag`
- **IF_WIP_ORDER_CONTENT_LOT_NO** on `LotNo, ProductID`
- **IF_WIP_ORDER_CONTENT_PARTNER** on `PartnerID`
- **IF_WIP_ORDER_CONTENT_PRODUCT_GRADE** on `ProductID, GradeID`
- **IF_WIP_ORDER_CONTENT_WIP_OPERATION** on `WipOrderNo, WipOrderType, OprSequenceNo`
- **IXD_WipOrderNo_WipOrderType_InventoryID** on `WipOrderNo, WipOrderType, InventoryID`
- **IXD_WipOrderNo_WipOrderType_LotNo** on `WipOrderNo, WipOrderType, LotNo`
