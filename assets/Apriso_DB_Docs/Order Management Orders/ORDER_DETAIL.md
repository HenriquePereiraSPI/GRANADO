# ORDER_DETAIL

**Database:** Operational

**Description:** Contains delivery order items (the products to be shipped).

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| ClassificationID | BIGINT(19,0) | True |  | False |  | Unique identifier of the classification. Currently supported for the maximum INT value. |
| ClosedDate | DATETIME | True |  | False |  | For future use. |
| DaysEarlyAllowed | INT(10,0) | True | (0) | False |  | For future use. |
| DaysException | NVARCHAR(20) | True | (N'IGNORE') | False |  | For future use. |
| DaysLateAllowed | INT(10,0) | True | (0) | False |  | For future use. |
| FromERPMaterialStockID | INT(10,0) | True |  | False | ERP_MATERIAL_STOCK | Source ERP Material Stock ID used as the source for picking/issuing/moving inventory for the Order Detail. |
| FromFacility | NVARCHAR(40) | True |  | False | FACILITY | Source Facility for the Order Detail. The FromFacility is typically the Facility that will pick and ship or issue the materials in the Order. |
| FromGroup | NVARCHAR(40) | True |  | False | GROUP_ | Reference to the Group of source entities that can for example be used for Group of Locations or Group of Work Centers. |
| FromGroupClassID | INT(10,0) | True |  | False | GROUP_ | Reference to the source Group Class ID. |
| FromGroupType | SMALLINT(5,0) | True |  | False | GROUP_ | Reference to the source Group Type. |
| FromInventoryClassID | INT(10,0) | True |  | False | INVENTORY_CLASS | InventoryClassID of inventory to be picked/issued for the Order Detail when there is a strict requirement for picking/issuing a specific class of inventory. |
| FromInventoryStatus | SMALLINT(5,0) | True |  | False | INVENTORY_STATUS | InventoryStatus of inventory to be picked/issued for the Order Detail when there is a strict requirement for picking/issuing a specific inventory status. |
| FromPartnerID | INT(10,0) | True |  | False | PARTNER | PartnerID of inventory to be picked/issued for the Order Detail when there is a strict requirement for picking/issuing inventory owned by a specific Partner. |
| FromSAPWarehouse | NVARCHAR(10) | True |  | False | SAP_WAREHOUSE | SAP Warehouse to be used as the source for picking/issuing inventory for the Order Detail. |
| FromWarehouse | NVARCHAR(10) | True |  | False | WAREHOUSE | Warehouse to be used as the Source for picking/issuing inventory for the Order Detail. |
| FromWarehouseLocationID | INT(10,0) | True |  | False | WAREHOUSE_LOCATION | WarehouseLocationID to be used for picking/issuing inventory for the Order Detail. For Delivery Orders, this will typically be the Gate/Dock. For Production Orders this will usually be the Point of Use Location, Staging Location or Work Center. |
| FromZone | NVARCHAR(20) | True |  | False | ZONE | Source Zone used as the source for picking/issuing/moving inventory for the Order Detail. |
| GradeID | INT(10,0) | True |  | False | PRODUCT_GRADE | For future use. |
| MinimumExpirationDate | DATETIME | True |  | False |  | For future use. |
| OALineID | INT(10,0) | True |  | False |  | For future use. |
| OprSequenceNo | NVARCHAR(20) | True |  | False | WIP_OPERATION | Reference to the WIP Operation (in addition to WIP Order and WIP Order Type information). |
| OrderCategory | INT(10,0) | True |  | False | WIP_ORDER_TYPE_ORDER_CATEGORY | Defines the type of Order Category (user-defined). |
| OrderedUomCode | NVARCHAR(10) | True |  | False | UOM | For future use. |
| OrderLineNo | INT(10,0) | False |  | True |  | Link to the Order Item. |
| OrderNo | NVARCHAR(20) | False |  | True | ORDER_HEADER | Reference to the Order Header (in addition to Order Type). |
| OrderStatus | SMALLINT(5,0) | False |  | False | ORDER_STATUS | For future use. |
| OrderType | SMALLINT(5,0) | False |  | True | ORDER_HEADER | Reference to the Order Type. |
| ParentOrderLineNo | INT(10,0) | True |  | False | ORDER_DETAIL | Reference to the Parent Order Line |
| ParentOrderNo | NVARCHAR(20) | True |  | False | ORDER_DETAIL | Reference to the Parent Order. |
| ParentOrderType | SMALLINT(5,0) | True |  | False | ORDER_DETAIL | Reference to the Parent Order Type. |
| PartnerProductNo | NVARCHAR(80) | True |  | False |  | Partner Product Number. |
| PartnerProductTextID | INT(10,0) | True |  | False |  | For future use. |
| PercentageCompleted | DECIMAL(28,10) | True |  | False |  | Percentage of work already completed for order, operation, etc. Valid values are in the range of 0 (nothing) to 1 (100 percentage). |
| ProductID | INT(10,0) | True |  | False | LOT_NO | Reference to a Product (Product Number and Product Version). |
| ProgressStatus | INT(10,0) | True |  | False | PROGRESS_STATUS | Progress Status of the Order Item. |
| ProjectID | INT(10,0) | True |  | False | PROJECT | Link to a Project. |
| QuantityOrdered | DECIMAL(28,10) | True | (0.0) | False |  | Quantity of items ordered. |
| QuantityRejected | DECIMAL(28,10) | True |  | False |  | For future use. |
| QuantityToleranceAllowed | DECIMAL(28,10) | True | (0) | False |  | Quantity tolerance of an item. |
| QuantityToleranceException | NVARCHAR(10) | True | (N'IGNORE') | False |  | For future use. |
| RequestedLotNo | NVARCHAR(40) | True |  | False | LOT_NO | For future use. |
| ReservationTag | INT(10,0) | True |  | False | INVENTORY_RESERVATION | For future use. |
| TaskID | INT(10,0) | True |  | False | TASK | The link to the TASK table. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |
| ToERPMaterialStockID | INT(10,0) | True |  | False | ERP_MATERIAL_STOCK | Target ERP Material Stock ID used as the destination for inventory that is received against the Order Detail. |
| ToFacility | NVARCHAR(40) | True |  | False | FACILITY | Destination Facility for the Order Detail. The ToFacility is typically the Facility that will receive inventory for the Order Detail. |
| ToGroup | NVARCHAR(40) | True |  | False | GROUP_ | Reference to the Group of destination entities that can for example be used for Group of Locations or Group of Work Centers. |
| ToGroupClassID | INT(10,0) | True |  | False | GROUP_ | Reference to the target Group Class ID. |
| ToGroupType | SMALLINT(5,0) | True |  | False | GROUP_ | Reference to the target Group Type. |
| ToInventoryClassID | INT(10,0) | True |  | False | INVENTORY_CLASS | InventoryClassID of inventory to be received for the Order Detail. This field is to be used to determine the Class of inventory that is received against the Order Detail. |
| ToInventoryStatus | SMALLINT(5,0) | True |  | False | INVENTORY_STATUS | InventoryStatus of inventory to be received for the Order Detail. This field is to be used to determine the Status of Inventory that is received against the Order Detail. |
| ToPartnerID | INT(10,0) | True |  | False | PARTNER | The PartnerID of inventory to be received for the Order Detail. This field is to be used to determine the owner PartnerID of Inventory that is received against the Order Detail. |
| ToSAPWarehouse | NVARCHAR(10) | True |  | False | SAP_WAREHOUSE | SAP Warehouse to be used as the destination for inventory that is received against the Order Detail. |
| ToWarehouse | NVARCHAR(10) | True |  | False | WAREHOUSE | Warehouse to be used as the destination for inventory that is received against the Order Detail. |
| ToWarehouseLocationID | INT(10,0) | True |  | False | WAREHOUSE_LOCATION | WarehouseLocationID to be used for receiving inventory against the Order Detail. Typically this is the receiving Dock or the receiving staging location. |
| ToZone | NVARCHAR(20) | True |  | False | ZONE | Target Zone used as the destination for inventory that is received against the Order Detail. |
| UnitID | INT(10,0) | True |  | False | UNIT | Unique identifier of the Unit. |
| WipComponentID | INT(10,0) | True |  | False | WIP_COMPONENT | The link to the WIP_COMPONENT table. |
| WipOrderNo | NVARCHAR(40) | True |  | False | WIP_OPERATION | WIP Order Number. |
| WipOrderType | SMALLINT(5,0) | True |  | False | WIP_OPERATION | Link to the WIP Order Type. |

## Primary Key

- **PK_ORDER_DETAIL** on `OrderNo, OrderType, OrderLineNo`

## Foreign Keys (this table -> other)

- **FK_ORDER_DETAIL_ERP_MAT_STOCK** — ORDER_DETAIL -> ERP_MATERIAL_STOCK (`FromERPMaterialStockID -> ID`)
- **FK_ORDER_DETAIL_ERP_MAT_STOCK2** — ORDER_DETAIL -> ERP_MATERIAL_STOCK (`ToERPMaterialStockID -> ID`)
- **FK_ORDER_DETAIL_FACILITY** — ORDER_DETAIL -> FACILITY (`FromFacility -> Facility`)
- **FK_ORDER_DETAIL_FACILITY1** — ORDER_DETAIL -> FACILITY (`ToFacility -> Facility`)
- **FK_ORDER_DETAIL_GROUP** — ORDER_DETAIL -> GROUP_ (`FromGroup, FromGroupType, FromGroupClassID -> Group_, GroupType, GroupClassID`)
- **FK_ORDER_DETAIL_GROUP2** — ORDER_DETAIL -> GROUP_ (`ToGroup, ToGroupType, ToGroupClassID -> Group_, GroupType, GroupClassID`)
- **FK_ORDER_DETAIL_INVENTORY_CLASS** — ORDER_DETAIL -> INVENTORY_CLASS (`FromInventoryClassID -> ID`)
- **FK_ORDER_DETAIL_INVENTORY_CLASS1** — ORDER_DETAIL -> INVENTORY_CLASS (`ToInventoryClassID -> ID`)
- **FK_ORDER_DETAIL_INVENTORY_RESERVATION** — ORDER_DETAIL -> INVENTORY_RESERVATION (`ReservationTag -> ReservationTag`)
- **FK_ORDER_DETAIL_INVENTORY_STATUS1** — ORDER_DETAIL -> INVENTORY_STATUS (`FromInventoryStatus -> InventoryStatus`)
- **FK_ORDER_DETAIL_INVENTORY_STATUS2** — ORDER_DETAIL -> INVENTORY_STATUS (`ToInventoryStatus -> InventoryStatus`)
- **FK_ORDER_DETAIL_LOT_NO** — ORDER_DETAIL -> LOT_NO (`ProductID, RequestedLotNo -> ProductID, LotNo`)
- **FK_ORDER_DETAIL_ORDER_DETAIL** — ORDER_DETAIL -> ORDER_DETAIL (`ParentOrderNo, ParentOrderType, ParentOrderLineNo -> OrderNo, OrderType, OrderLineNo`)
- **FK_ORDER_DETAIL_ORDER_HEADER** — ORDER_DETAIL -> ORDER_HEADER (`OrderNo, OrderType -> OrderNo, OrderType`)
- **FK_ORDER_DETAIL_ORDER_STATUS** — ORDER_DETAIL -> ORDER_STATUS (`OrderStatus -> OrderStatus`)
- **FK_ORDER_DETAIL_PARTNER** — ORDER_DETAIL -> PARTNER (`FromPartnerID -> ID`)
- **FK_ORDER_DETAIL_PARTNER1** — ORDER_DETAIL -> PARTNER (`ToPartnerID -> ID`)
- **FK_ORDER_DETAIL_PRODUCT_GRADE** — ORDER_DETAIL -> PRODUCT_GRADE (`ProductID, GradeID -> ProductID, GradeID`)
- **FK_ORDER_DETAIL_PROGRESS_STATUS** — ORDER_DETAIL -> PROGRESS_STATUS (`ProgressStatus -> ProgressStatus`)
- **FK_ORDER_DETAIL_PROJECT** — ORDER_DETAIL -> PROJECT (`ProjectID -> ID`)
- **FK_ORDER_DETAIL_SAP_WAREHOUSE** — ORDER_DETAIL -> SAP_WAREHOUSE (`FromSAPWarehouse -> SAPWarehouse`)
- **FK_ORDER_DETAIL_SAP_WAREHOUSE1** — ORDER_DETAIL -> SAP_WAREHOUSE (`ToSAPWarehouse -> SAPWarehouse`)
- **FK_ORDER_DETAIL_TASK** — ORDER_DETAIL -> TASK (`TaskID -> ID`)
- **FK_ORDER_DETAIL_UNIT** — ORDER_DETAIL -> UNIT (`UnitID -> ID`)
- **FK_ORDER_DETAIL_UOM** — ORDER_DETAIL -> UOM (`OrderedUomCode -> UomCode`)
- **FK_ORDER_DETAIL_WAREHOUSE** — ORDER_DETAIL -> WAREHOUSE (`FromFacility, FromWarehouse -> Facility, Warehouse`)
- **FK_ORDER_DETAIL_WAREHOUSE_LOCATION** — ORDER_DETAIL -> WAREHOUSE_LOCATION (`FromWarehouseLocationID -> ID`)
- **FK_ORDER_DETAIL_WAREHOUSE_LOCATION1** — ORDER_DETAIL -> WAREHOUSE_LOCATION (`ToWarehouseLocationID -> ID`)
- **FK_ORDER_DETAIL_WAREHOUSE1** — ORDER_DETAIL -> WAREHOUSE (`ToFacility, ToWarehouse -> Facility, Warehouse`)
- **FK_ORDER_DETAIL_WIP_COMPONENT** — ORDER_DETAIL -> WIP_COMPONENT (`WipComponentID -> ID`)
- **FK_ORDER_DETAIL_WIP_OPERATION** — ORDER_DETAIL -> WIP_OPERATION (`WipOrderNo, WipOrderType, OprSequenceNo -> WipOrderNo, WipOrderType, OprSequenceNo`)
- **FK_ORDER_DETAIL_WIP_ORDER** — ORDER_DETAIL -> WIP_ORDER (`WipOrderNo, WipOrderType -> WipOrderNo, WipOrderType`)
- **FK_ORDER_DETAIL_WIP_ORDER_TYPE_ORDER_CATEGORY** — ORDER_DETAIL -> WIP_ORDER_TYPE_ORDER_CATEGORY (`OrderType, OrderCategory -> WipOrderType, OrderCategory`)
- **FK_ORDER_DETAIL_ZONE** — ORDER_DETAIL -> ZONE (`FromZone -> Zone`)
- **FK_ORDER_DETAIL_ZONE2** — ORDER_DETAIL -> ZONE (`ToZone -> Zone`)

## Referenced By (other tables -> this)

- **FK_ASSET_ORDER_DETAIL** — ASSET -> ORDER_DETAIL (`OrderNo, OrderType, OrderLineNo -> OrderNo, OrderType, OrderLineNo`)
- **FK_COST_DETAIL_ORDER_DETAIL** — COST_DETAIL -> ORDER_DETAIL (`OrderType, OrderNo, OrderLineNo -> OrderType, OrderNo, OrderLineNo`)
- **FK_COST_ORDER_DETAIL** — COST -> ORDER_DETAIL (`OrderType, OrderNo, OrderLineNo -> OrderType, OrderNo, OrderLineNo`)
- **FK_COUNT_DISPOSITION_ORDER_DETAIL** — COUNT_DISPOSITION -> ORDER_DETAIL (`OrderNo, OrderType, OrderLineNo -> OrderNo, OrderType, OrderLineNo`)
- **FK_DELIVERY_ORDER_DETAIL_ORDER_DETAIL** — DELIVERY_ORDER_DETAIL -> ORDER_DETAIL (`OutboundOrderNo, OutboundOrderType, OutboundOrderLineNo -> OrderNo, OrderType, OrderLineNo`)
- **FK_DISPATCH_SEQUENCE_ORDER_DETAIL** — DISPATCH_SEQUENCE -> ORDER_DETAIL (`FromOrderNo, FromOrderType, FromOrderLineNo -> OrderNo, OrderType, OrderLineNo`)
- **FK_DISPATCH_SEQUENCE_ORDER_DETAIL_2** — DISPATCH_SEQUENCE -> ORDER_DETAIL (`ToOrderNo, ToOrderType, ToOrderLineNo -> OrderNo, OrderType, OrderLineNo`)
- **FK_DISPOSITION_CONTENT_ORDER_DETAIL** — DISPOSITION_CONTENT -> ORDER_DETAIL (`OrderNo, OrderType, OrderLineNo -> OrderNo, OrderType, OrderLineNo`)
- **FK_DISPOSITION_DISPOSITION_ORDER_DETAIL** — DISPOSITION -> ORDER_DETAIL (`OrderNo, OrderType, OrderLineNo -> OrderNo, OrderType, OrderLineNo`)
- **FK_ECA_OBJECT_HISTORY_ORDER_DETAIL** — ECA_OBJECT_HISTORY -> ORDER_DETAIL (`OrderNo, OrderType, OrderLineNo -> OrderNo, OrderType, OrderLineNo`)
- **FK_ECA_OBJECT_ORDER_DETAIL** — ECA_OBJECT -> ORDER_DETAIL (`OrderNo, OrderType, OrderLineNo -> OrderNo, OrderType, OrderLineNo`)
- **FK_EXTERNAL_SEQUENCE_ORDER_DETAIL** — EXTERNAL_SEQUENCE -> ORDER_DETAIL (`OrderNo, OrderType, OrderLineNo -> OrderNo, OrderType, OrderLineNo`)
- **FK_INBOUND_ORDER_DETAIL_CONTACT_ORDER_DETAIL** — ORDER_DETAIL_CONTACT -> ORDER_DETAIL (`OrderNo, OrderType, OrderLineNo -> OrderNo, OrderType, OrderLineNo`)
- **FK_INBOUND_ORDER_DETAIL_ORDER_DETAIL** — INBOUND_ORDER_DETAIL -> ORDER_DETAIL (`OrderNo, OrderType, OrderLineNo -> OrderNo, OrderType, OrderLineNo`)
- **FK_INVENTORY2_ALLOCATION_ORDER_DETAIL** — INVENTORY2_ALLOCATION -> ORDER_DETAIL (`OrderNo, OrderType, OrderLineNo -> OrderNo, OrderType, OrderLineNo`)
- **FK_LABEL_CONTENT_DETAIL** — LABEL_CONTENT -> ORDER_DETAIL (`OrderNo, OrderType, OrderLineNo -> OrderNo, OrderType, OrderLineNo`)
- **FK_ORDER_DATE_ORDER_DETAIL** — ORDER_DATE -> ORDER_DETAIL (`OrderNo, OrderLineNo, OrderType -> OrderNo, OrderLineNo, OrderType`)
- **FK_ORDER_DETAIL_ADDRESS_ORDER_DETAIL** — ORDER_DETAIL_ADDRESS -> ORDER_DETAIL (`OrderNo, OrderType, OrderLineNo -> OrderNo, OrderType, OrderLineNo`)
- **FK_ORDER_DETAIL_CONTENT_ORDER_DETAIL** — ORDER_DETAIL_CONTENT -> ORDER_DETAIL (`OrderNo, OrderType, OrderLineNo -> OrderNo, OrderType, OrderLineNo`)
- **FK_ORDER_DETAIL_ORDER_DETAIL** — ORDER_DETAIL -> ORDER_DETAIL (`ParentOrderNo, ParentOrderType, ParentOrderLineNo -> OrderNo, OrderType, OrderLineNo`)
- **FK_ORDER_PARTNER_ORDER_DETAIL** — ORDER_PARTNER -> ORDER_DETAIL (`OrderNo, OrderType, OrderLineNo -> OrderNo, OrderType, OrderLineNo`)
- **FK_ORDER_RESOURCE_ORDER_DETAIL** — ORDER_RESOURCE -> ORDER_DETAIL (`OrderNo, OrderType, OrderLineNo -> OrderNo, OrderType, OrderLineNo`)
- **FK_ORDER_SCHEDULE_ORDER_DETAIL** — ORDER_SCHEDULE -> ORDER_DETAIL (`OrderNo, OrderType, OrderLineNo -> OrderNo, OrderType, OrderLineNo`)
- **FK_OUTBOUND_ORDER_DETAIL_ORDER_DETAIL** — OUTBOUND_ORDER_DETAIL -> ORDER_DETAIL (`OrderNo, OrderType, OrderLineNo -> OrderNo, OrderType, OrderLineNo`)
- **FK_PRODUCT_INFORMATION_ORDER_DETAIL** — PRODUCT_INFORMATION -> ORDER_DETAIL (`CustomerOrderNo, CustomerOrderType, CustomerOrderLineNo -> OrderNo, OrderType, OrderLineNo`)
- **FK_SEQUENCE_QUEUE_ITEM_ORDER_DETAIL** — SEQUENCE_QUEUE_ITEM -> ORDER_DETAIL (`OrderNo, OrderType, OrderLineNo -> OrderNo, OrderType, OrderLineNo`)
- **FK_WIP_ORDER_ORDER_DETAIL1** — WIP_ORDER -> ORDER_DETAIL (`OrderNo, OrderType, OrderLineNo -> OrderNo, OrderType, OrderLineNo`)

## Check Constraints

- **CK_ORDER_DETAIL_PercentageCompleted**: 

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IDX_ORDER_DETAIL_CLASSIFICATIONID** on `ClassificationID`
- **IF_ORDER_DETAIL_ERP_MAT_STOCK** on `FromERPMaterialStockID`
- **IF_ORDER_DETAIL_ERP_MAT_STOCK2** on `ToERPMaterialStockID`
- **IF_ORDER_DETAIL_GROUP** on `FromGroup, FromGroupType, FromGroupClassID`
- **IF_ORDER_DETAIL_GROUP2** on `ToGroup, ToGroupType, ToGroupClassID`
- **IF_ORDER_DETAIL_INVENTORY_CLASS** on `FromInventoryClassID`
- **IF_ORDER_DETAIL_INVENTORY_CLASS1** on `ToInventoryClassID`
- **IF_ORDER_DETAIL_INVENTORY_RESERVATION** on `ReservationTag`
- **IF_ORDER_DETAIL_INVENTORY_STATUS1** on `FromInventoryStatus`
- **IF_ORDER_DETAIL_INVENTORY_STATUS2** on `ToInventoryStatus`
- **IF_ORDER_DETAIL_LOT_NO** on `RequestedLotNo, ProductID`
- **IF_ORDER_DETAIL_ORDER_DETAIL** on `ParentOrderNo, ParentOrderType, ParentOrderLineNo`
- **IF_ORDER_DETAIL_ORDER_STATUS** on `OrderStatus`
- **IF_ORDER_DETAIL_PARTNER** on `FromPartnerID`
- **IF_ORDER_DETAIL_PARTNER1** on `ToPartnerID`
- **IF_ORDER_DETAIL_PRODUCT_GRADE** on `ProductID, GradeID`
- **IF_ORDER_DETAIL_PROGRESS_STATUS** on `ProgressStatus`
- **IF_ORDER_DETAIL_PROJECT** on `ProjectID`
- **IF_ORDER_DETAIL_SAP_WAREHOUSE** on `FromSAPWarehouse`
- **IF_ORDER_DETAIL_SAP_WAREHOUSE1** on `ToSAPWarehouse`
- **IF_ORDER_DETAIL_TASK** on `TaskID`
- **IF_ORDER_DETAIL_UNIT** on `UnitID`
- **IF_ORDER_DETAIL_WIP_COMPONENT** on `WipComponentID`
- **IF_ORDER_DETAIL_WIP_OPERATION** on `WipOrderNo, WipOrderType, OprSequenceNo`
- **IF_ORDER_DETAIL_WIP_ORDER_TYPE_ORDER_CATEGORY** on `OrderType, OrderCategory`
- **IF_ORDER_DETAIL_ZONE** on `FromZone`
- **IF_ORDER_DETAIL_ZONE2** on `ToZone`
