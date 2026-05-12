# TRANSACTION_HISTORY_SEQUENCE_Q

**Database:** Operational

**Description:** This table records the history of items dequeued from Sequence Queues.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| Container | NVARCHAR(40) | True |  | False |  | The Container number that this item refers to. Implies that this is a queue of containers. |
| DefinitionGroupSize | INT(10,0) | True |  | False |  | The  group size of queue definition. |
| DefinitionIsReversed | BIT | True |  | False |  | The IsReversed value of queue  definition. |
| DefinitionName | NVARCHAR(255) | True |  | False |  | The name of queue definition. |
| DefinitionRevision | NVARCHAR(100) | True |  | False |  | The revision of queue definition. |
| EnqueueSequence | INT(10,0) | True |  | False |  | This sequential number specifies the order in which items were added to the queue (lowest added first). This field is not guaranteed to be sequential. When a queue is manipulated and resequenced, this field is used to determine the order in which items were added to calculate the appropriate sequence number. |
| EnqueueSequenceInGroup | INT(10,0) | True |  | False |  | This is the enqueue sequence of this item within the group. Items enqueued later will have higher numbers in this field. |
| ExternalSequence | INT(10,0) | True |  | False |  | The sequence number specified by an external system. Used only as a reference. |
| Group_ | NVARCHAR(40) | True |  | False |  | If the queue is sequencing items of a certain group, this is the reference to the group. |
| GroupClassID | INT(10,0) | True |  | False |  | If the queue is sequencing items of a certain group, this is the reference to the group class. |
| GroupDequeuedCount | INT(10,0) | True |  | False |  | The number of items already dequeued from this group. The total number of items in a group is always GroupSize minus DequeuedCount, but some items may be Empty. |
| GroupDescriptionMedium | NVARCHAR(255) | True |  | False |  | If the queue is sequencing items of a certain group, this is the reference to the description of group. |
| GroupSequence | INT(10,0) | True |  | False |  | The Sequence number for the group in this queue. All groups in the same queue are sequenced. |
| GroupSize | INT(10,0) | True |  | False |  | The number of items in the group. Defaults to the GroupSize specified in the Sequence Queue Definition, but may be modified by invoking business components. The business components will add exactly the specified number of items to this group to reach this size. Once the group size is reached, a new group is created. |
| GroupType | SMALLINT(5,0) | True |  | False |  | If the queue is sequencing items of a certain group, this is the reference to the group type. |
| ID | BIGINT(19,0) | False |  | True |  | Unique identifier of the row. |
| IsEmpty | INT(10,0) | True |  | False |  | When true, this item does not yet reference any business entity, and it is therefore only a place holder for a future item to be enqueued. When a new item is enqueued, it the business components will first attempt to update any record that IsEmpty, before creating a new item record. Empty items are created normally as part of grouping when a new group is created. |
| Location | NVARCHAR(40) | True |  | False |  | Location name of warehouose location. |
| LocationFacility | NVARCHAR(40) | True |  | False |  | If the queue is sequencing items specifically in one Facility, this is the Facility identifier. |
| LocationWarehouse | NVARCHAR(10) | True |  | False |  | Warehouse name of warehouse location. |
| OrderLineNo | INT(10,0) | True |  | False |  | The Order line to which the item refers. This field is populated when the item in the queue is an Order line. |
| OrderNo | NVARCHAR(20) | True |  | False |  | The Order to which the item refers. This field is populated when the item in the queue is an Order. |
| OrderType | INT(10,0) | True |  | False |  | The Order to which the item refers. This field is populated when the item in the queue is an Order. |
| PartnerID | INT(10,0) | True |  | False |  | If the queue is sequencing items specifically for one partner (supplier, customer, carrier), this is the Partner ID. |
| ProductID | INT(10,0) | True |  | False |  | The Identification of Product to which this item refers. |
| ProductionLineNo | NVARCHAR(40) | True |  | False |  | If the queue is sequencing items for a production line, this is the production line number. |
| ProductNo | NVARCHAR(80) | True |  | False |  | The number of Product to which this item refers. |
| QueueDiscontinueDate | DATETIME | True |  | False |  | The date and time after which this queue is not to be used for sequencing the entity. |
| QueueEffectiveDate | DATETIME | True |  | False |  | The date and time from which this sequence queue is to be used. Allows multiple queues for the same entity to exist with different settings depending on the date. |
| QueueFacility | NVARCHAR(40) | True |  | False |  | Facility linked to sequence queue. |
| QueueName | NVARCHAR(255) | True |  | False |  | The Sequence Queue Name. |
| QueueRevision | NVARCHAR(100) | True |  | False |  | The Sequence Queue Revision. |
| QueueWarehouse | NVARCHAR(10) | True |  | False |  | Warehouse linked to sequence queue. |
| ResourceID | INT(10,0) | True |  | False |  | The identification of Resource to which the item refers. |
| ResourceName | NVARCHAR(80) | True |  | False |  | The name of Resource to which the item refers. |
| ResourceType | INT(10,0) | True |  | False |  | The type of Resource to which the item refers. |
| Sequence | INT(10,0) | True |  | False |  | Sequence number for this item, specifies where this item is in the queue. Sequence numbers are guaranteed to be sequential (always increment by 1). Items are dequeued in ascending order of Sequence. A Null in this field is interpreted as an item that is not yet added to the queue. |
| SequenceInGroup | INT(10,0) | True |  | False |  | This is the dequeue sequence for the item within the group. The lowest value is dequeued first from the group. |
| SequenceQueueDefinitionID | INT(10,0) | True |  | False |  | The definition of the queue specifies all the configuration parameters for the queue. |
| SequenceQueueID | INT(10,0) | True |  | False |  | Sequence Queue identifier. |
| SequenceQueueItemGroupID | INT(10,0) | True |  | False |  | Specifies the group that this item belongs in this sequence. Items are automatically grouped when GroupSize is specified for the Sequence Definition. A Null in this field means that either the Sequence is not Grouped (GroupSize =< 0) or the item has not yet been enqueued. |
| SequenceQueueItemID | INT(10,0) | True |  | False |  | Sequence Queue Item identifier. |
| SerialNo | NVARCHAR(40) | True |  | False |  | The Serial number that this item refers to. Implies that this is a queue of serial numbers. |
| TransactionHistoryID | BIGINT(19,0) | False |  | False | TRANSACTION_HISTORY | Link to the parent history record. |
| WarehouseLocationID | INT(10,0) | True |  | False |  | If the queue is sequencing items for a specific warehouse location, this is the location being sequenced. |
| WipOrderNo | NVARCHAR(40) | True |  | False |  | The WIP Order to which this item refers. When populated, implies that the queue is a queue of WIP Orders. |
| WipOrderType | INT(10,0) | True |  | False |  | The WIP Order to which this item refers. When populated, implies that the queue is a queue of WIP Orders. |
| WorkCenter | NVARCHAR(40) | True |  | False |  | If the queue is sequencing items for a work center, this is the work center. |

## Primary Key

- **PK_TRANSACTION_HISTORY_SEQUENCE_Q** on `ID`

## Foreign Keys (this table -> other)

- **FK_TRANSACTION_HISTORY_SEQUENCE_Q_TRANSACTION_HISTORY** — TRANSACTION_HISTORY_SEQUENCE_Q -> TRANSACTION_HISTORY (`TransactionHistoryID -> ID`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_TRANSACTION_HISTORY_SEQUENCE_Q_TRANSACTION_HISTORY** on `TransactionHistoryID`
