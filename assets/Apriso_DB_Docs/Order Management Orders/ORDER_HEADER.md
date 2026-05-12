# ORDER_HEADER

**Database:** Operational

**Description:** Contains headers for Delivery and Transportation Orders.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| ClassificationID | BIGINT(19,0) | True |  | False |  | Unique identifier of the classification. Currently supported for the maximum INT value. |
| ClosedDate | DATETIME | True |  | False |  | For future use. |
| Company | NVARCHAR(40) | True |  | False | COMPANY | For future use. |
| CostCenter | NVARCHAR(70) | True |  | False | COST_CENTER | Assignment of an Order to a Cost Center (receiving against a Cost Center). |
| Division | NVARCHAR(70) | True |  | False | COST_CENTER | For future use. |
| GLAccountID | INT(10,0) | True |  | False | GL_ACCOUNT | GL account linked to the Order Header ( PO receiving). |
| OAHeaderID | NVARCHAR(10) | True |  | False |  | For future use. |
| OprSequenceNo | NVARCHAR(20) | True |  | False | WIP_OPERATION | Reference to the WIP Operation (in addition to WIP Order and WIP Order Type information). |
| OrderCategory | INT(10,0) | True |  | False | WIP_ORDER_TYPE_ORDER_CATEGORY | Category of Order (user-defined). |
| OrderDate | DATETIME | True |  | False |  | Date the Order was entered. |
| OrderGroup | NVARCHAR(255) | True |  | False |  | A group of Orders that share certain criteria. |
| OrderNo | NVARCHAR(20) | False |  | True |  | Reference to the Order Header (in addition to Order Type). |
| OrderStatus | SMALLINT(5,0) | False |  | False | ORDER_STATUS | For future use. |
| OrderType | SMALLINT(5,0) | False |  | True | WIP_ORDER_TYPE | Reference to the Order Type. |
| PercentageCompleted | DECIMAL(28,10) | True |  | False |  | Percentage of work already completed for either order or operation or etc. Valid values are in the range of 0 (nothing) to 1 ( 100 percentage). |
| Priority | INT(10,0) | True | (100) | False |  | Priority of the Order. |
| ProgressStatus | INT(10,0) | True |  | False | PROGRESS_STATUS | Progress Status of the Order. |
| ProjectID | INT(10,0) | True |  | False | PROJECT | Link to a Project. |
| TaskID | INT(10,0) | True |  | False | TASK | The link to the TASK table. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |
| UnitID | INT(10,0) | True |  | False | UNIT | Unique identifier of the Unit. |
| WarehouseLocationID | INT(10,0) | True |  | False | WAREHOUSE_LOCATION | The link to the WAREHOUSE_LOCATION table. |
| WipOrderNo | NVARCHAR(40) | True |  | False | WIP_OPERATION | WIP Order Number. |
| WipOrderType | SMALLINT(5,0) | True |  | False | WIP_OPERATION | Link to the WIP Order Type. |

## Primary Key

- **PK_ORDER_HEADER** on `OrderNo, OrderType`

## Foreign Keys (this table -> other)

- **FK_ORDER_HEADER_COMPANY** — ORDER_HEADER -> COMPANY (`Company -> Company`)
- **FK_ORDER_HEADER_COST_CENTER** — ORDER_HEADER -> COST_CENTER (`Division, CostCenter -> Division, CostCenter`)
- **FK_ORDER_HEADER_GL_ACCOUNT** — ORDER_HEADER -> GL_ACCOUNT (`GLAccountID -> ID`)
- **FK_ORDER_HEADER_ORDER_STATUS** — ORDER_HEADER -> ORDER_STATUS (`OrderStatus -> OrderStatus`)
- **FK_ORDER_HEADER_PROGRESS_STATUS** — ORDER_HEADER -> PROGRESS_STATUS (`ProgressStatus -> ProgressStatus`)
- **FK_ORDER_HEADER_PROJECT** — ORDER_HEADER -> PROJECT (`ProjectID -> ID`)
- **FK_ORDER_HEADER_TASK** — ORDER_HEADER -> TASK (`TaskID -> ID`)
- **FK_ORDER_HEADER_UNIT** — ORDER_HEADER -> UNIT (`UnitID -> ID`)
- **FK_ORDER_HEADER_WAREHOUSE_LOCATION** — ORDER_HEADER -> WAREHOUSE_LOCATION (`WarehouseLocationID -> ID`)
- **FK_ORDER_HEADER_WIP_OPERATION** — ORDER_HEADER -> WIP_OPERATION (`WipOrderNo, WipOrderType, OprSequenceNo -> WipOrderNo, WipOrderType, OprSequenceNo`)
- **FK_ORDER_HEADER_WIP_ORDER_TYPE** — ORDER_HEADER -> WIP_ORDER_TYPE (`OrderType -> WipOrderType`)
- **FK_ORDER_HEADER_WIP_ORDER_TYPE_ORDER_CATEGORY** — ORDER_HEADER -> WIP_ORDER_TYPE_ORDER_CATEGORY (`OrderType, OrderCategory -> WipOrderType, OrderCategory`)

## Referenced By (other tables -> this)

- **FK_ASSET_ORDER_HEADER** — ASSET -> ORDER_HEADER (`OrderNo, OrderType -> OrderNo, OrderType`)
- **FK_COST_DETAIL_ORDER_HEADER** — COST_DETAIL -> ORDER_HEADER (`OrderType, OrderNo -> OrderType, OrderNo`)
- **FK_COST_ORDER_HEADER** — COST -> ORDER_HEADER (`OrderType, OrderNo -> OrderType, OrderNo`)
- **FK_COUNT_DISPOSITION_ORDER_HEADER** — COUNT_DISPOSITION -> ORDER_HEADER (`OrderNo, OrderType -> OrderNo, OrderType`)
- **FK_DELIVERY_ORDER_HEADER_ORDER_HEADER** — DELIVERY_ORDER_HEADER -> ORDER_HEADER (`OutboundOrderNo, OutboundOrderType -> OrderNo, OrderType`)
- **FK_DISPATCH_SEQUENCE_ORDER_HEADER** — DISPATCH_SEQUENCE -> ORDER_HEADER (`FromOrderNo, FromOrderType -> OrderNo, OrderType`)
- **FK_DISPATCH_SEQUENCE_ORDER_HEADER_2** — DISPATCH_SEQUENCE -> ORDER_HEADER (`ToOrderNo, ToOrderType -> OrderNo, OrderType`)
- **FK_DISPOSITION_CONTENT_ORDER_HEADER** — DISPOSITION_CONTENT -> ORDER_HEADER (`OrderType, OrderNo -> OrderType, OrderNo`)
- **FK_DISPOSITION_ORDER_HEADER** — DISPOSITION -> ORDER_HEADER (`OrderNo, OrderType -> OrderNo, OrderType`)
- **FK_ECA_OBJECT_HISTORY_ORDER_HEADER** — ECA_OBJECT_HISTORY -> ORDER_HEADER (`OrderNo, OrderType -> OrderNo, OrderType`)
- **FK_ECA_OBJECT_ORDER_HEADER** — ECA_OBJECT -> ORDER_HEADER (`OrderNo, OrderType -> OrderNo, OrderType`)
- **FK_INBOUND_ORDER_ADDRESS_ORDER_HEADER** — ORDER_HEADER_ADDRESS -> ORDER_HEADER (`OrderNo, OrderType -> OrderNo, OrderType`)
- **FK_INBOUND_ORDER_CONTACT_ORDER_HEADER** — ORDER_HEADER_CONTACT -> ORDER_HEADER (`OrderNo, OrderType -> OrderNo, OrderType`)
- **FK_INBOUND_ORDER_HEADER_ORDER_HEADER** — INBOUND_ORDER_HEADER -> ORDER_HEADER (`OrderNo, OrderType -> OrderNo, OrderType`)
- **FK_INVENTORY2_ALLOCATION_ORDER_HEADER** — INVENTORY2_ALLOCATION -> ORDER_HEADER (`OrderNo, OrderType -> OrderNo, OrderType`)
- **FK_LABEL_CONTENT_HEADER** — LABEL_CONTENT -> ORDER_HEADER (`OrderNo, OrderType -> OrderNo, OrderType`)
- **FK_ORDER_DATE_ORDER_HEADER** — ORDER_DATE -> ORDER_HEADER (`OrderNo, OrderType -> OrderNo, OrderType`)
- **FK_ORDER_DETAIL_ORDER_HEADER** — ORDER_DETAIL -> ORDER_HEADER (`OrderNo, OrderType -> OrderNo, OrderType`)
- **FK_ORDER_HEADER_SEAL_ORDER_HEADER** — ORDER_HEADER_SEAL -> ORDER_HEADER (`OrderHeader, OrderType -> OrderNo, OrderType`)
- **FK_ORDER_PARTNER_ORDER_HEADER** — ORDER_PARTNER -> ORDER_HEADER (`OrderNo, OrderType -> OrderNo, OrderType`)
- **FK_ORDER_SEAL_ORDER_HEADER** — ORDER_SEAL -> ORDER_HEADER (`OrderNo, OrderType -> OrderNo, OrderType`)
- **FK_ORDER_SHIPMENT_DIMENSION_ORDER_HEADER** — ORDER_SHIPMENT_DIMENSION -> ORDER_HEADER (`OrderNo, OrderType -> OrderNo, OrderType`)
- **FK_ORDER_SHIPMENT_STAGE_ORDER_HEADER** — ORDER_SHIPMENT_STAGE -> ORDER_HEADER (`OrderNo, OrderType -> OrderNo, OrderType`)
- **FK_OUTBOUND_ORDER_HEADER_ORDER_HEADER** — OUTBOUND_ORDER_HEADER -> ORDER_HEADER (`OrderNo, OrderType -> OrderNo, OrderType`)
- **FK_SEQUENCE_QUEUE_ITEM_ORDER_HEADER** — SEQUENCE_QUEUE_ITEM -> ORDER_HEADER (`OrderNo, OrderType -> OrderNo, OrderType`)
- **FK_SHIPMENT_STAGE_ORDER_HEADER** — SHIPMENT_STAGE -> ORDER_HEADER (`OrderNo, OrderType -> OrderNo, OrderType`)
- **FK_SHIPMENT_STAGE_POINT_ORDER_HEADER** — SHIPMENT_STAGE_POINT -> ORDER_HEADER (`OrderNo, OrderType -> OrderNo, OrderType`)

## Check Constraints

- **CK_ORDER_HEADER_PercentageCompleted**: 

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IDX_ORDER_HEADER_CLASSIFICATIONID** on `ClassificationID`
- **IF_ORDER_HEADER_COST_CENTER** on `Division, CostCenter`
- **IF_ORDER_HEADER_GL_ACCOUNT** on `GLAccountID`
- **IF_ORDER_HEADER_ORDER_STATUS** on `OrderStatus`
- **IF_ORDER_HEADER_PROGRESS_STATUS** on `ProgressStatus`
- **IF_ORDER_HEADER_PROJECT** on `ProjectID`
- **IF_ORDER_HEADER_TASK** on `TaskID`
- **IF_ORDER_HEADER_UNIT** on `UnitID`
- **IF_ORDER_HEADER_WIP_OPERATION** on `WipOrderNo, WipOrderType, OprSequenceNo`
- **IF_ORDER_HEADER_WIP_ORDER_TYPE_ORDER_CATEGORY** on `OrderType, OrderCategory`
