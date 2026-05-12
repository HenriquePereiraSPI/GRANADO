# DISPATCH_SEQUENCE

**Database:** Operational

**Description:** This table specifies additional constraints for dispatching orders, WIP Orders, Operations, and tasks that are not described in the WIP_OPERATION_SEQUENCE table.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| DispatchSequenceType | SMALLINT(5,0) | True |  | False | DISPATCH_SEQUENCE_TYPE | The Dispatch Sequence type. |
| FromOprSequenceNo | NVARCHAR(20) | True |  | False | WIP_OPERATION | The Operation Sequence number of the source of the Dispatch Sequence, which is the composite foreign key (FromWipOrderNo, FromWipOrderType, FromOprSequenceNo) to WIP_OPERATION(WipOrderNo, WipOrderType, OprSequenceNo). |
| FromOrderLineNo | INT(10,0) | True |  | False | ORDER_DETAIL | The Order Line number of the source Dispatch Sequence, which is the composite foreign key (FromOrderNo, FromOrderType, FromOrderLineNo) to ORDER_DETAIL(OrderNo, OrderType, OrderLineNo). |
| FromOrderNo | NVARCHAR(20) | True |  | False | ORDER_DETAIL | The order number of the source of the Dispatch Sequence, which is the composite foreign key (FromOrderNo, FromOrderType) to ORDER_HEADER (OrderNo, OrderType). |
| FromOrderType | SMALLINT(5,0) | True |  | False | ORDER_DETAIL | The order type of the source of the Dispatch Sequence relationship. |
| FromTaskID | INT(10,0) | True |  | False | TASK | The task ID of the source of the Dispatch Sequence, which is the foreign key to TASK.ID. |
| FromWipOrderNo | NVARCHAR(40) | True |  | False | WIP_OPERATION | The WIP Order number of the source of the Dispatch Sequence, which is the composite foreign key (FromWipOrderNo, FromWipOrderType) to WIP_ORDER(WipOrderNo, WipOrderType). |
| FromWipOrderType | SMALLINT(5,0) | True |  | False | WIP_OPERATION | The WIP Order type of the source of the Dispatch Sequence relationship. |
| ID | INT(10,0) | False |  | True |  | The ID of the Dispatch Sequence. |
| LagSeconds | INT(10,0) | True |  | False |  | Specifies the minimum time from the From entity to the To entity. It may be negative. For example, with the type EndToStart, LagSeconds = -3600 specifies that the earliest start time for the To entity is 60 minutes before the end of the From entity. In this example, if LagSeconds was set to 3600, then the To entity must start no earlier than 60 minutes after the end of the From entity. |
| ToOprSequenceNo | NVARCHAR(20) | True |  | False | WIP_OPERATION | The Operation Sequence number of the destination of the Dispatch Sequence, which is the composite foreign key (ToWipOrderNo, ToWipOrderType, ToOprSequenceNo) to WIP_OPERATION(WipOrderNo, WipOrderType, OprSequenceNo). |
| ToOrderLineNo | INT(10,0) | True |  | False | ORDER_DETAIL | The Order Line number of the source Dispatch Sequence, which is the composite foreign key (ToOrderNo, ToOrderType, ToOrderLineNo) to ORDER_HEADER(OrderNo, OrderType, OrderLineNo). |
| ToOrderNo | NVARCHAR(20) | True |  | False | ORDER_DETAIL | The order number of the destination of the Dispatch Sequence, which is the composite foreign key (ToOrderNo, ToOrderType) to ORDER_HEADER (OrderNo, OrderType). |
| ToOrderType | SMALLINT(5,0) | True |  | False | ORDER_DETAIL | The order type of the destination of the Dispatch Sequence relationship. |
| ToTaskID | INT(10,0) | True |  | False | TASK | The task ID of the source of the Dispatch Sequence, which is the foreign key to TASK.ID. |
| ToWipOrderNo | NVARCHAR(40) | True |  | False | WIP_OPERATION | The WIP Order number of the destination of the Dispatch Sequence, which is the Composite Foreign Key (ToWipOrderNo, ToWipOrderType) to WIP_ORDER(WipOrderNo, WipOrderType). |
| ToWipOrderType | SMALLINT(5,0) | True |  | False | WIP_OPERATION | The WIP Order type of the destination of the Dispatch Sequence relationship. |

## Primary Key

- **PK_DISPATCH_SEQUENCE** on `ID`

## Foreign Keys (this table -> other)

- **FK_DISPATCH_SEQUENCE_DISPATCH_SEQUENCE_TYPE** — DISPATCH_SEQUENCE -> DISPATCH_SEQUENCE_TYPE (`DispatchSequenceType -> DispatchSequenceType`)
- **FK_DISPATCH_SEQUENCE_ORDER_DETAIL** — DISPATCH_SEQUENCE -> ORDER_DETAIL (`FromOrderNo, FromOrderType, FromOrderLineNo -> OrderNo, OrderType, OrderLineNo`)
- **FK_DISPATCH_SEQUENCE_ORDER_DETAIL_2** — DISPATCH_SEQUENCE -> ORDER_DETAIL (`ToOrderNo, ToOrderType, ToOrderLineNo -> OrderNo, OrderType, OrderLineNo`)
- **FK_DISPATCH_SEQUENCE_ORDER_HEADER** — DISPATCH_SEQUENCE -> ORDER_HEADER (`FromOrderNo, FromOrderType -> OrderNo, OrderType`)
- **FK_DISPATCH_SEQUENCE_ORDER_HEADER_2** — DISPATCH_SEQUENCE -> ORDER_HEADER (`ToOrderNo, ToOrderType -> OrderNo, OrderType`)
- **FK_DISPATCH_SEQUENCE_TASK** — DISPATCH_SEQUENCE -> TASK (`FromTaskID -> ID`)
- **FK_DISPATCH_SEQUENCE_TASK_2** — DISPATCH_SEQUENCE -> TASK (`ToTaskID -> ID`)
- **FK_DISPATCH_SEQUENCE_WIP_OPERATION** — DISPATCH_SEQUENCE -> WIP_OPERATION (`FromWipOrderNo, FromWipOrderType, FromOprSequenceNo -> WipOrderNo, WipOrderType, OprSequenceNo`)
- **FK_DISPATCH_SEQUENCE_WIP_OPERATION_2** — DISPATCH_SEQUENCE -> WIP_OPERATION (`ToWipOrderNo, ToWipOrderType, ToOprSequenceNo -> WipOrderNo, WipOrderType, OprSequenceNo`)
- **FK_DISPATCH_SEQUENCE_WIP_ORDER** — DISPATCH_SEQUENCE -> WIP_ORDER (`FromWipOrderNo, FromWipOrderType -> WipOrderNo, WipOrderType`)
- **FK_DISPATCH_SEQUENCE_WIP_ORDER_2** — DISPATCH_SEQUENCE -> WIP_ORDER (`ToWipOrderNo, ToWipOrderType -> WipOrderNo, WipOrderType`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_DISPATCH_SEQUENCE_ORDER_DETAIL** on `FromOrderNo, FromOrderType, FromOrderLineNo`
- **IF_DISPATCH_SEQUENCE_ORDER_DETAIL_2** on `ToOrderNo, ToOrderType, ToOrderLineNo`
- **IF_DISPATCH_SEQUENCE_TASK** on `FromTaskID`
- **IF_DISPATCH_SEQUENCE_TASK_2** on `ToTaskID`
- **IF_DISPATCH_SEQUENCE_WIP_OPERATION** on `FromWipOrderNo, FromWipOrderType, FromOprSequenceNo`
- **IF_DISPATCH_SEQUENCE_WIP_OPERATION_2** on `ToWipOrderNo, ToWipOrderType, ToOprSequenceNo`
