# SEQUENCE_QUEUE_ITEM

**Database:** Operational

**Description:** An Item in a Sequence Queue. Includes link to the entity that is in the queue, such as a serial number or container, and maintains the item's location in the queue.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| AllowResequencing | BIT | True |  | False |  | If true, the item can be re-sequenced. If false, the re-sequencing screens will not allow users to move this item in the sequence. |
| Container | NVARCHAR(40) | True |  | False | CONTAINER | The Container number that this item refers to. Implies that this is a queue of containers. |
| EnqueueSequence | INT(10,0) | True |  | False |  | This sequential number specifies the order in which items were added to the queue (lowest added first). This field is not guaranteed to be sequential. When a queue is manipulated and resequenced, this field is used to determine the order in which items were added to calculate the appropriate sequence number. |
| EnqueueSequenceInGroup | INT(10,0) | True |  | False |  | This is the enqueue sequence of this item within the group. Items enqueued later will have higher numbers in this field. |
| ExternalSequence | INT(10,0) | True |  | False |  | The sequence number specified by an external system. Used only as a reference. |
| ID | INT(10,0) | False |  | True |  | Auto increment PK. |
| IsEmpty | BIT | True |  | False |  | When true, this item does not yet reference any business entity, and it is therefore only a place holder for a future item to be enqueued. When a new item is enqueued, it the business components will first attempt to update any record that IsEmpty, before creating a new item record. Empty items are created normally as part of grouping when a new group is created. |
| Message | NVARCHAR(255) | True |  | False |  | Message associated with queue item. |
| OrderLineNo | INT(10,0) | True |  | False | ORDER_DETAIL | The Order line to which the item refers. This field is populated when the item in the queue is an Order line. |
| OrderNo | NVARCHAR(20) | True |  | False | ORDER_DETAIL | The Order to which the item refers. This field is populated when the item in the queue is an Order. |
| OrderType | SMALLINT(5,0) | True |  | False | ORDER_DETAIL | The Order to which the item refers. This field is populated when the item in the queue is an Order. |
| ProductID | INT(10,0) | True |  | False | PRODUCT | The Product to which this item refers. When populated, this is considered a queue of Products. This field is also required to queue serial numbers. |
| Quantity | DECIMAL(28,10) | True |  | False |  | Quantity planned for this sequence number. This quantity overrides the WIP Order quantity. |
| Sequence | INT(10,0) | True |  | False |  | Sequence number for this item, specifies where this item is in the queue. Sequence numbers are guaranteed to be sequential (always increment by 1). Items are dequeued in ascending order of Sequence. A Null in this field is interpreted as an item that is not yet added to the queue. |
| SequenceInGroup | INT(10,0) | True |  | False |  | This is the dequeue sequence for the item within the group. The lowest value is dequeued first from the group |
| SequenceQueueID | INT(10,0) | True |  | False | SEQUENCE_QUEUE | The Sequence Queue that this item belongs. |
| SequenceQueueItemGroupID | INT(10,0) | True |  | False | SEQUENCE_QUEUE_ITEM_GROUP | Specifies the group that this item belongs in this sequence. Items are automatically grouped when GroupSize is specified for the Sequence Definition. A Null in this field means that either the Sequence is not Grouped (GroupSize =< 0) or the item has not yet been enqueued. |
| SequenceQueueItemStatus | SMALLINT(5,0) | True |  | False | SEQUENCE_QUEUE_ITEM_STATUS | This is an optional status for this item. Process authors may define as many status as required by the business logic. |
| SerialNo | NVARCHAR(40) | True |  | False | SERIAL_NO | The Serial number that this item refers to. Implies that this is a queue of serial numbers. |
| TaskID | INT(10,0) | True |  | False | TASK | Link to the TASK table. |
| WipOrderNo | NVARCHAR(40) | True |  | False | WIP_ORDER | The WIP Order to which this item refers. When populated, implies that the queue is a queue of WIP Orders. |
| WipOrderSequenceNo | INT(10,0) | True |  | False |  | The sequence of the child WIP Order was loaded into the queue. |
| WipOrderType | SMALLINT(5,0) | True |  | False | WIP_ORDER | The WIP Order to which this item refers. When populated, implies that the queue is a queue of WIP Orders. |
| WorkCenter | NVARCHAR(40) | True |  | False | WORK_CENTER | The work center where this sequence number will be processed. |

## Primary Key

- **PK_SEQUENCE_QUEUE_ITEM** on `ID`

## Foreign Keys (this table -> other)

- **FK_SEQUENCE_QUEUE_ITEM_CONTAINER** — SEQUENCE_QUEUE_ITEM -> CONTAINER (`Container -> Container`)
- **FK_SEQUENCE_QUEUE_ITEM_ORDER_DETAIL** — SEQUENCE_QUEUE_ITEM -> ORDER_DETAIL (`OrderNo, OrderType, OrderLineNo -> OrderNo, OrderType, OrderLineNo`)
- **FK_SEQUENCE_QUEUE_ITEM_ORDER_HEADER** — SEQUENCE_QUEUE_ITEM -> ORDER_HEADER (`OrderNo, OrderType -> OrderNo, OrderType`)
- **FK_SEQUENCE_QUEUE_ITEM_PRODUCT** — SEQUENCE_QUEUE_ITEM -> PRODUCT (`ProductID -> ID`)
- **FK_SEQUENCE_QUEUE_ITEM_SEQUENCE_QUEUE** — SEQUENCE_QUEUE_ITEM -> SEQUENCE_QUEUE (`SequenceQueueID -> ID`)
- **FK_SEQUENCE_QUEUE_ITEM_SEQUENCE_QUEUE_ITEM_GROUP** — SEQUENCE_QUEUE_ITEM -> SEQUENCE_QUEUE_ITEM_GROUP (`SequenceQueueItemGroupID -> ID`)
- **FK_SEQUENCE_QUEUE_ITEM_SEQUENCE_QUEUE_ITEM_STATUS** — SEQUENCE_QUEUE_ITEM -> SEQUENCE_QUEUE_ITEM_STATUS (`SequenceQueueItemStatus -> SequenceQueueItemStatus`)
- **FK_SEQUENCE_QUEUE_ITEM_SERIAL_NO** — SEQUENCE_QUEUE_ITEM -> SERIAL_NO (`ProductID, SerialNo -> ProductID, SerialNo`)
- **FK_SEQUENCE_QUEUE_ITEM_TASK** — SEQUENCE_QUEUE_ITEM -> TASK (`TaskID -> ID`)
- **FK_SEQUENCE_QUEUE_ITEM_WIP_ORDER** — SEQUENCE_QUEUE_ITEM -> WIP_ORDER (`WipOrderNo, WipOrderType -> WipOrderNo, WipOrderType`)
- **FK_SEQUENCE_QUEUE_ITEM_WORK_CENTER** — SEQUENCE_QUEUE_ITEM -> WORK_CENTER (`WorkCenter -> WorkCenter`)

## Referenced By (other tables -> this)

- **FK_SEQUENCE_QUEUE_SEQUENCE_QUEUE_ITEM** — SEQUENCE_QUEUE -> SEQUENCE_QUEUE_ITEM (`NextSequenceQueueItemID -> ID`)
- **FK_SEQUENCE_QUEUE_SEQUENCE_QUEUE_ITEM2** — SEQUENCE_QUEUE -> SEQUENCE_QUEUE_ITEM (`LastSequenceQueueItemID -> ID`)

## Unique Indexes

- **UK_SEQUENCE_QUEUE_ITEM_1** on `EnqueueSequence, SequenceQueueID`

## Non-Unique Indexes

- **IF_SEQUENCE_QUEUE_ITEM_CONTAINER** on `Container`
- **IF_SEQUENCE_QUEUE_ITEM_ORDER_DETAIL** on `OrderNo, OrderType, OrderLineNo`
- **IF_SEQUENCE_QUEUE_ITEM_PRODUCT** on `ProductID`
- **IF_SEQUENCE_QUEUE_ITEM_SEQUENCE_QUEUE** on `SequenceQueueID`
- **IF_SEQUENCE_QUEUE_ITEM_SEQUENCE_QUEUE_ITEM_GROUP** on `SequenceQueueItemGroupID`
- **IF_SEQUENCE_QUEUE_ITEM_SEQUENCE_QUEUE_ITEM_STATUS** on `SequenceQueueItemStatus`
- **IF_SEQUENCE_QUEUE_ITEM_SERIAL_NO** on `SerialNo, ProductID`
- **IF_SEQUENCE_QUEUE_ITEM_TASK** on `TaskID`
- **IF_SEQUENCE_QUEUE_ITEM_WIP_ORDER** on `WipOrderNo, WipOrderType`
