# INVENTORY2_ALLOCATION

**Database:** Operational

**Description:** This table contains the allocation of inventory.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| AllocationTag | NVARCHAR(128) | True |  | False |  | Allocation Tag. |
| ID | INT(10,0) | False |  | True |  | Unique ID of the row. |
| OprSequenceNo | NVARCHAR(20) | True |  | False | WIP_OPERATION | Operation Sequence Number. |
| OrderLineNo | INT(10,0) | True |  | False | ORDER_DETAIL | Order Line Number. |
| OrderNo | NVARCHAR(20) | True |  | False | ORDER_DETAIL | Order Number. |
| OrderType | SMALLINT(5,0) | True |  | False | ORDER_DETAIL | Order Type. |
| ResourceID | INT(10,0) | True |  | False | RESOURCE_ | Link to the RESOURCE_ table. |
| StepSequenceNo | INT(10,0) | True |  | False | WIP_OPERATION_STEP | Step Sequence Number. |
| TaskID | INT(10,0) | True |  | False | TASK | Link to the TASK table. |
| UnitID | INT(10,0) | True |  | False | UNIT | Unique identifier of the Unit. |
| WipOrderNo | NVARCHAR(40) | True |  | False | WIP_OPERATION | WIP Order Number. |
| WipOrderType | SMALLINT(5,0) | True |  | False | WIP_OPERATION | WIP Order Type. |

## Primary Key

- **PK_INVENTORY2_ALLOCATION** on `ID`

## Foreign Keys (this table -> other)

- **FK_INVENTORY2_ALLOCATION_ORDER_DETAIL** — INVENTORY2_ALLOCATION -> ORDER_DETAIL (`OrderNo, OrderType, OrderLineNo -> OrderNo, OrderType, OrderLineNo`)
- **FK_INVENTORY2_ALLOCATION_ORDER_HEADER** — INVENTORY2_ALLOCATION -> ORDER_HEADER (`OrderNo, OrderType -> OrderNo, OrderType`)
- **FK_INVENTORY2_ALLOCATION_RESOURCE** — INVENTORY2_ALLOCATION -> RESOURCE_ (`ResourceID -> ID`)
- **FK_INVENTORY2_ALLOCATION_TASK** — INVENTORY2_ALLOCATION -> TASK (`TaskID -> ID`)
- **FK_INVENTORY2_ALLOCATION_UNIT** — INVENTORY2_ALLOCATION -> UNIT (`UnitID -> ID`)
- **FK_INVENTORY2_ALLOCATION_WIP_OPERATION** — INVENTORY2_ALLOCATION -> WIP_OPERATION (`WipOrderNo, WipOrderType, OprSequenceNo -> WipOrderNo, WipOrderType, OprSequenceNo`)
- **FK_INVENTORY2_ALLOCATION_WIP_OPERATION_STEP** — INVENTORY2_ALLOCATION -> WIP_OPERATION_STEP (`WipOrderNo, WipOrderType, OprSequenceNo, StepSequenceNo -> WipOrderNo, WipOrderType, OprSequenceNo, SequenceNo`)
- **FK_INVENTORY2_ALLOCATION_WIP_ORDER** — INVENTORY2_ALLOCATION -> WIP_ORDER (`WipOrderNo, WipOrderType -> WipOrderNo, WipOrderType`)

## Referenced By (other tables -> this)

- **FK_INVENTORY2_INVENTORY2_ALLOCATION** — INVENTORY2 -> INVENTORY2_ALLOCATION (`InventoryAllocationID -> ID`)
- **FK_SOFT_INVENTORY2_ALLOCATION_INVENTORY2_ALLOCATION** — SOFT_INVENTORY2_ALLOCATION -> INVENTORY2_ALLOCATION (`InventoryAllocationID -> ID`)

## Unique Indexes

- **UK_INVENTORY2_ALLOCATION** on `WipOrderNo, WipOrderType, OprSequenceNo, StepSequenceNo, TaskID, OrderNo, OrderType, OrderLineNo, ResourceID, AllocationTag`

## Non-Unique Indexes

- **IF_INVENTORY2_ALLOCATION_ORDER** on `OrderNo, OrderType, OrderLineNo`
- **IF_INVENTORY2_ALLOCATION_RESOURCE** on `ResourceID`
- **IF_INVENTORY2_ALLOCATION_TASK** on `TaskID`
- **IF_INVENTORY2_ALLOCATION_UNIT** on `UnitID`
