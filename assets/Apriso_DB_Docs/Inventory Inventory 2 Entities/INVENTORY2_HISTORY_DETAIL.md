# INVENTORY2_HISTORY_DETAIL

**Database:** Operational

**Description:** This table contains detail records of inventory changes history.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| AllocationTag | NVARCHAR(128) | True |  | False |  | Allocation of inventory before change. |
| Container | NVARCHAR(40) | True |  | False |  | Inventory property before change. |
| ERPMaterialStock | NVARCHAR(40) | True |  | False |  | Inventory property before change. |
| ERPPlant | NVARCHAR(40) | True |  | False |  | Inventory property before change. |
| ERPStockType | NVARCHAR(40) | True |  | False |  | Inventory property before change. |
| ERPSystem | NVARCHAR(40) | True |  | False |  | Inventory property before change. |
| Facility | NVARCHAR(40) | True |  | False |  | Inventory property before change. |
| GradeCode | NVARCHAR(20) | True |  | False |  | Inventory property before change. |
| ID | BIGINT(19,0) | False |  | True |  | Unique ID of the row. |
| InContainer | NVARCHAR(40) | True |  | False |  | Inventory property before change. |
| InventoryClass | NVARCHAR(10) | True |  | False |  | Inventory property before change. |
| InventoryHistoryHeaderID | BIGINT(19,0) | False |  | False | INVENTORY2_HISTORY_HEADER | Link to the INVENTORY2_HISTORY_HEADER table. |
| InventoryStatus | SMALLINT(5,0) | True |  | False |  | Inventory property before change. |
| Location | NVARCHAR(40) | True |  | False |  | Inventory property before change. |
| LotNo | NVARCHAR(40) | True |  | False |  | Inventory property before change. |
| OprSequenceNo | NVARCHAR(20) | True |  | False |  | Allocation of inventory before change. |
| OrderLineNo | INT(10,0) | True |  | False |  | Allocation of inventory before change. |
| OrderNo | NVARCHAR(20) | True |  | False |  | Allocation of inventory before change. |
| OrderType | SMALLINT(5,0) | True |  | False |  | Allocation of inventory before change. |
| PartnerNo | NVARCHAR(40) | True |  | False |  | Inventory property before change. |
| ProductNo | NVARCHAR(80) | True |  | False |  | Inventory property before change. |
| ProductRevision | NVARCHAR(20) | True |  | False |  | Inventory property before change. |
| Quantity | DECIMAL(28,10) | True |  | False |  | Quantity affected by the change. |
| ResourceName | NVARCHAR(80) | True |  | False |  | Allocation of inventory before change. |
| ResourceType | SMALLINT(5,0) | True |  | False |  | Allocation of inventory before change. |
| SerialNo | NVARCHAR(40) | True |  | False |  | Inventory property before change. |
| StepSequenceNo | INT(10,0) | True |  | False |  | Allocation of inventory before change. |
| ToAllocationTag | NVARCHAR(128) | True |  | False |  | Allocation of inventory after change. |
| ToContainer | NVARCHAR(40) | True |  | False |  | Inventory property after change. |
| ToERPMaterialStock | NVARCHAR(40) | True |  | False |  | Inventory property after change. |
| ToERPPlant | NVARCHAR(40) | True |  | False |  | Inventory property after change. |
| ToERPStockType | NVARCHAR(40) | True |  | False |  | Inventory property after change. |
| ToERPSystem | NVARCHAR(40) | True |  | False |  | Inventory property after change. |
| ToFacility | NVARCHAR(40) | True |  | False |  | Inventory property after change. |
| ToGradeCode | NVARCHAR(20) | True |  | False |  | Inventory property after change. |
| ToInContainer | NVARCHAR(40) | True |  | False |  | Inventory property after change. |
| ToInventoryClass | NVARCHAR(10) | True |  | False |  | Inventory property after change. |
| ToInventoryStatus | SMALLINT(5,0) | True |  | False |  | Inventory property after change. |
| ToLocation | NVARCHAR(40) | True |  | False |  | Inventory property after change. |
| ToLotNo | NVARCHAR(40) | True |  | False |  | Inventory property after change. |
| ToOprSequenceNo | NVARCHAR(20) | True |  | False |  | Allocation of inventory after change. |
| ToOrderLineNo | INT(10,0) | True |  | False |  | Allocation of inventory after change. |
| ToOrderNo | NVARCHAR(20) | True |  | False |  | Allocation of inventory after change. |
| ToOrderType | SMALLINT(5,0) | True |  | False |  | Allocation of inventory after change. |
| ToPartnerNo | NVARCHAR(40) | True |  | False |  | Inventory property after change. |
| ToProductNo | NVARCHAR(80) | True |  | False |  | Inventory property after change. |
| ToProductRevision | NVARCHAR(20) | True |  | False |  | Inventory property after change. |
| ToResourceName | NVARCHAR(80) | True |  | False |  | Allocation of inventory after change. |
| ToResourceType | SMALLINT(5,0) | True |  | False |  | Allocation of inventory after change. |
| ToSerialNo | NVARCHAR(40) | True |  | False |  | Inventory property after change. |
| ToStepSequenceNo | INT(10,0) | True |  | False |  | Allocation of inventory after change. |
| ToUomCode | NVARCHAR(10) | True |  | False |  | Inventory property after change. |
| ToWarehouse | NVARCHAR(10) | True |  | False |  | Inventory property after change. |
| ToWipOrderNo | NVARCHAR(40) | True |  | False |  | Allocation of inventory after change. |
| ToWipOrderType | SMALLINT(5,0) | True |  | False |  | Allocation of inventory after change. |
| ToZone | NVARCHAR(20) | True |  | False |  | Inventory property after change. |
| UnitID | INT(10,0) | True |  | False | UNIT | Unique identifier of the Unit. |
| UomCode | NVARCHAR(10) | True |  | False |  | Inventory property before change. |
| Warehouse | NVARCHAR(10) | True |  | False |  | Inventory property before change. |
| WipOrderNo | NVARCHAR(40) | True |  | False |  | Allocation of inventory before change. |
| WipOrderType | SMALLINT(5,0) | True |  | False |  | Allocation of inventory before change. |
| Zone | NVARCHAR(20) | True |  | False |  | Inventory property before change. |

## Primary Key

- **PK_INVENTORY2_HISTORY_DETAIL** on `ID`

## Foreign Keys (this table -> other)

- **FK_INVENTORY2_HISTORY_DETAIL_HEADER** — INVENTORY2_HISTORY_DETAIL -> INVENTORY2_HISTORY_HEADER (`InventoryHistoryHeaderID -> ID`)
- **FK_INVENTORY2_HISTORY_DETAIL_UNIT** — INVENTORY2_HISTORY_DETAIL -> UNIT (`UnitID -> ID`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_INVENTORY2_HISTORY_DETAIL** on `InventoryHistoryHeaderID`
- **IF_INVENTORY2_HISTORY_DETAIL_UNIT** on `UnitID`
