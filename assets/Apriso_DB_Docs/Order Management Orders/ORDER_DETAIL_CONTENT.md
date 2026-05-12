# ORDER_DETAIL_CONTENT

**Database:** Operational

**Description:** The table stores information about container content of given Order Detail.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| ContainerClassID | INT(10,0) | True |  | False | CONTAINER_CLASS | ID of the Container Class. |
| ContainerNumber | NVARCHAR(40) | True |  | False |  | Container Number. |
| ContainerStatus | SMALLINT(5,0) | True |  | False | CONTAINER_STATUS | Status of the Container. |
| ContainerType | SMALLINT(5,0) | True |  | False |  | The type of the Container. |
| ID | INT(10,0) | False |  | True |  | Unique identifier of the record. |
| InventoryStatus | SMALLINT(5,0) | True |  | False | INVENTORY_STATUS | Status of the Inventory. |
| LotNumber | NVARCHAR(40) | True |  | False |  | Lot Number. |
| OrderLineNo | INT(10,0) | False |  | False | ORDER_DETAIL | Order Line Number. |
| OrderNo | NVARCHAR(20) | False |  | False | ORDER_DETAIL | Order Number. |
| OrderType | SMALLINT(5,0) | False |  | False | ORDER_DETAIL | Order Type. |
| ParentContainerNumber | NVARCHAR(40) | True |  | False |  | Parent Container Number. |
| ProgressStatus | INT(10,0) | False |  | False | PROGRESS_STATUS | Progress Status. |
| Quantity | DECIMAL(28,10) | True |  | False |  | Quantity. |
| SerialNumber | NVARCHAR(40) | True |  | False |  | Serial Number. |
| Status | SMALLINT(5,0) | True |  | False | ORDER_DETAIL_CONTENT_STATUS | The link to the ORDER_DETAIL_CONTENT_STATUS table. |
| UnitID | INT(10,0) | True |  | False | UNIT | Unique identifier of the Unit. |
| WipOrderNo | NVARCHAR(40) | True |  | False | WIP_ORDER | WIP Order Number. |
| WipOrderType | SMALLINT(5,0) | True |  | False | WIP_ORDER | WIP Order Type. |

## Primary Key

- **PK_ORDER_DETAIL_CONTENT** on `ID`

## Foreign Keys (this table -> other)

- **FK_ORDER_DETAIL_CONTENT_CONTAINER_CLASS** — ORDER_DETAIL_CONTENT -> CONTAINER_CLASS (`ContainerClassID -> ID`)
- **FK_ORDER_DETAIL_CONTENT_CONTAINER_STATUS** — ORDER_DETAIL_CONTENT -> CONTAINER_STATUS (`ContainerStatus -> ContainerStatus`)
- **FK_ORDER_DETAIL_CONTENT_INVENTORY_STATUS** — ORDER_DETAIL_CONTENT -> INVENTORY_STATUS (`InventoryStatus -> InventoryStatus`)
- **FK_ORDER_DETAIL_CONTENT_ORDER_DETAIL** — ORDER_DETAIL_CONTENT -> ORDER_DETAIL (`OrderNo, OrderType, OrderLineNo -> OrderNo, OrderType, OrderLineNo`)
- **FK_ORDER_DETAIL_CONTENT_ORDER_DETAIL_CONTENT_STATUS** — ORDER_DETAIL_CONTENT -> ORDER_DETAIL_CONTENT_STATUS (`Status -> Status`)
- **FK_ORDER_DETAIL_CONTENT_PROGRESS_STATUS** — ORDER_DETAIL_CONTENT -> PROGRESS_STATUS (`ProgressStatus -> ProgressStatus`)
- **FK_ORDER_DETAIL_CONTENT_UNIT** — ORDER_DETAIL_CONTENT -> UNIT (`UnitID -> ID`)
- **FK_ORDER_DETAIL_CONTENT_WIP_ORDER** — ORDER_DETAIL_CONTENT -> WIP_ORDER (`WipOrderNo, WipOrderType -> WipOrderNo, WipOrderType`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IDX_ORDER_DETAIL_CONTENT_CONTAINERNUMBER** on `ContainerNumber`
- **IDX_ORDER_DETAIL_CONTENT_PARENTCONTAINERNUMBER** on `ParentContainerNumber`
- **IF_ORDER_DETAIL_CONTENT_CONTAINER_CLASS** on `ContainerClassID`
- **IF_ORDER_DETAIL_CONTENT_CONTAINER_STATUS** on `ContainerStatus`
- **IF_ORDER_DETAIL_CONTENT_INVENTORY_STATUS** on `InventoryStatus`
- **IF_ORDER_DETAIL_CONTENT_ORDER_DETAIL** on `OrderNo, OrderType, OrderLineNo`
- **IF_ORDER_DETAIL_CONTENT_ORDER_DETAIL_CONTENT_STATUS** on `Status`
- **IF_ORDER_DETAIL_CONTENT_PROGRESS_STATUS** on `ProgressStatus`
- **IF_ORDER_DETAIL_CONTENT_UNIT** on `UnitID`
- **IF_ORDER_DETAIL_CONTENT_WIP_ORDER** on `WipOrderNo, WipOrderType`
