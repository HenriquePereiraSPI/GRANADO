# SEQUENCE_QUEUE

**Database:** Operational

**Description:** A Sequenced Queue of items to be processed. The Sequence Queue holds a sequenced list of items that are waiting to be processed by a specified Resource, Production Line, Work Center, or other logical unit.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| AllowResequencing | BIT | True |  | False |  | If false, this queue cannot be resequenced in the Sequencing Cockpit. |
| DiscontinueDate | DATETIME | True |  | False |  | The date and time after which this queue is not to be used for sequencing the entity. This field is not enforced in any BC. |
| EffectiveDate | DATETIME | True |  | False |  | The date and time from which this sequence queue is to be used. Allows multiple queues for the same entity to exist with different settings depending on the date. This field is not enforced in any BC. |
| Facility | NVARCHAR(40) | True |  | False | WAREHOUSE | If the queue is sequencing items specifically in one Facility, this is the Facility identifier. |
| Group_ | NVARCHAR(40) | True |  | False | GROUP_ | If the queue is sequencing items of a certain group, this is the reference to the group. |
| GroupClassID | INT(10,0) | True |  | False | GROUP_ | If the queue is sequencing items of a certain group, this is the reference to the group. |
| GroupSize | INT(10,0) | True |  | False |  | Specifies the standard group size to group items in the queue. When a positive value is specified, items will be automatically grouped. When IsReversed is true, the group size is the number of items that will be reversed at a time. Applies only to new groups added to the sequence. When a zero or negative value is specified (or NULL), the queue is not grouped and no SEQUENCE_QUEUE_ITEM_GROUP records will be created for the queue. |
| GroupType | SMALLINT(5,0) | True |  | False | GROUP_ | If the queue is sequencing items of a certain group, this is the reference to the group. |
| ID | INT(10,0) | False |  | True |  | Auto increment PK. |
| IsDefault | BIT | False | ((1)) | False |  | If false, this queue cannot be resequenced in the Sequencing Cockpit. |
| IsReversed | BIT | False | ((1)) | False |  | When true, the sequence in which items are removed from the queue is reversed from the sequence in which items are added. When a GroupSize is specified, the reversal happens only within groups, so that items in the same group are dequeued in reverse order, but the groups themselves remain in the original order. |
| LastEnqueueSequence | INT(10,0) | True |  | False |  | The Sequence number of the last item in the queue, that is, the last item Enqueued. Corresponds to the highest EnqueueSequence. Note that the item may already have been removed from the queue. |
| LastSequenceQueueItemID | INT(10,0) | True |  | False | SEQUENCE_QUEUE_ITEM | The ID of the last item in the queue, that is, the last Enqueued item. |
| MaximumSize | INT(10,0) | True |  | False |  | The maximum number of items desired in the sequence. When the maximum is violated, the system will attempt to automatically dequeue the top item into the destination queue. |
| MinimumSize | INT(10,0) | True |  | False |  | The minimum number of items desired in the sequence. When the minimum is violated, the system will attempt to automatically enqueue the top item from the source. |
| Name | NVARCHAR(225) | False |  | False |  | This is the user-specified name for the definition. The name can be used inside operations to find the appropriate sequence definition independent of the database environment. |
| NextSequence | INT(10,0) | True |  | False |  | The Sequence number of the first item in the queue, that is, the item that will be Dequeued next. Corresponds to the lowest Sequence. |
| NextSequenceQueueItemID | INT(10,0) | True |  | False | SEQUENCE_QUEUE_ITEM | The ID of the first item in the queue, that is, the next item to be Dequeued. |
| ParentSequenceQueueID | INT(10,0) | True |  | False | SEQUENCE_QUEUE | Parent Queue ID. |
| PartnerID | INT(10,0) | True |  | False | PARTNER | If the queue is sequencing items specifically for one partner (supplier, customer, carrier), this is the Partner ID. |
| ProductionLineNo | NVARCHAR(40) | True |  | False | WIP_LINE | If the queue is sequencing items for a production line, this is the production line number. |
| ResequenceSourceSeqQueueID | INT(10,0) | True |  | False | SEQUENCE_QUEUE | An optional reference to another Queue used to provide items for this Queue. BCs will not use this field, but process authors may use it to easily identify subsequent queues for items. |
| ResourceID | INT(10,0) | True |  | False | RESOURCE_ | The link to the Resource. |
| Revision | NVARCHAR(100) | False |  | False |  | The user-defined revision name for the queue. |
| RevisionStatusID | SMALLINT(5,0) | True |  | False |  | The current status of this configuration. May be Active, Design, or Canceled. |
| SequenceQueueClassID | INT(10,0) | True |  | False | SEQUENCE_QUEUE_CLASS | The sequence queue class for the given sequence queue. |
| SequenceQueueDefinitionID | INT(10,0) | False |  | False | SEQUENCE_QUEUE_DEFINITION | The definition of the queue specifies all the configuration parameters for the queue. |
| SequenceQueueType | SMALLINT(5,0) | False |  | False | SEQUENCE_QUEUE_TYPE | Sequence Queue Type. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |
| UnitID | INT(10,0) | True |  | False | UNIT | Unique identifier of the Unit. |
| ViewSourceSeqQueueID | INT(10,0) | True |  | False | SEQUENCE_QUEUE | An optional source queue to be viewed in the Sequencing Cockpit. |
| Warehouse | NVARCHAR(10) | True |  | False | WAREHOUSE | If the queue is sequencing items specifically for a Warehouse, this is the Warehouse identifier. |
| WarehouseLocationID | INT(10,0) | True |  | False | WAREHOUSE_LOCATION | If the queue is sequencing items for a specific warehouse location, this is the location being sequenced. |
| WorkCenter | NVARCHAR(40) | True |  | False | WORK_CENTER | If the queue is sequencing items for a work center, this is the work center. |

## Primary Key

- **PK_SEQUENCE_QUEUE** on `ID`

## Foreign Keys (this table -> other)

- **FK_SEQUENCE_QUEUE_GROUP_** — SEQUENCE_QUEUE -> GROUP_ (`Group_, GroupType, GroupClassID -> Group_, GroupType, GroupClassID`)
- **FK_SEQUENCE_QUEUE_PARTNER** — SEQUENCE_QUEUE -> PARTNER (`PartnerID -> ID`)
- **FK_SEQUENCE_QUEUE_RESOURCE** — SEQUENCE_QUEUE -> RESOURCE_ (`ResourceID -> ID`)
- **FK_SEQUENCE_QUEUE_SEQUENCE_QUEUE** — SEQUENCE_QUEUE -> SEQUENCE_QUEUE (`ViewSourceSeqQueueID -> ID`)
- **FK_SEQUENCE_QUEUE_SEQUENCE_QUEUE_CLASS** — SEQUENCE_QUEUE -> SEQUENCE_QUEUE_CLASS (`SequenceQueueClassID -> ID`)
- **FK_SEQUENCE_QUEUE_SEQUENCE_QUEUE_DEFINITION** — SEQUENCE_QUEUE -> SEQUENCE_QUEUE_DEFINITION (`SequenceQueueDefinitionID -> ID`)
- **FK_SEQUENCE_QUEUE_SEQUENCE_QUEUE_ITEM** — SEQUENCE_QUEUE -> SEQUENCE_QUEUE_ITEM (`NextSequenceQueueItemID -> ID`)
- **FK_SEQUENCE_QUEUE_SEQUENCE_QUEUE_ITEM2** — SEQUENCE_QUEUE -> SEQUENCE_QUEUE_ITEM (`LastSequenceQueueItemID -> ID`)
- **FK_SEQUENCE_QUEUE_SEQUENCE_QUEUE_TYPE** — SEQUENCE_QUEUE -> SEQUENCE_QUEUE_TYPE (`SequenceQueueType -> SequenceQueueType`)
- **FK_SEQUENCE_QUEUE_SEQUENCE_QUEUE2** — SEQUENCE_QUEUE -> SEQUENCE_QUEUE (`ResequenceSourceSeqQueueID -> ID`)
- **FK_SEQUENCE_QUEUE_SEQUENCE_QUEUE3** — SEQUENCE_QUEUE -> SEQUENCE_QUEUE (`ParentSequenceQueueID -> ID`)
- **FK_SEQUENCE_QUEUE_UNIT** — SEQUENCE_QUEUE -> UNIT (`UnitID -> ID`)
- **FK_SEQUENCE_QUEUE_WAREHOUSE** — SEQUENCE_QUEUE -> WAREHOUSE (`Facility, Warehouse -> Facility, Warehouse`)
- **FK_SEQUENCE_QUEUE_WAREHOUSE_LOCATION** — SEQUENCE_QUEUE -> WAREHOUSE_LOCATION (`WarehouseLocationID -> ID`)
- **FK_SEQUENCE_QUEUE_WIP_LINE** — SEQUENCE_QUEUE -> WIP_LINE (`ProductionLineNo -> ProductionLineNo`)
- **FK_SEQUENCE_QUEUE_WORK_CENTER** — SEQUENCE_QUEUE -> WORK_CENTER (`WorkCenter -> WorkCenter`)

## Referenced By (other tables -> this)

- **FK_SEQUENCE_QUEUE_ITEM_GROUP_SEQUENCE_QUEUE** — SEQUENCE_QUEUE_ITEM_GROUP -> SEQUENCE_QUEUE (`SequenceQueueID -> ID`)
- **FK_SEQUENCE_QUEUE_ITEM_SEQUENCE_QUEUE** — SEQUENCE_QUEUE_ITEM -> SEQUENCE_QUEUE (`SequenceQueueID -> ID`)
- **FK_SEQUENCE_QUEUE_SEQUENCE_QUEUE** — SEQUENCE_QUEUE -> SEQUENCE_QUEUE (`ViewSourceSeqQueueID -> ID`)
- **FK_SEQUENCE_QUEUE_SEQUENCE_QUEUE2** — SEQUENCE_QUEUE -> SEQUENCE_QUEUE (`ResequenceSourceSeqQueueID -> ID`)
- **FK_SEQUENCE_QUEUE_SEQUENCE_QUEUE3** — SEQUENCE_QUEUE -> SEQUENCE_QUEUE (`ParentSequenceQueueID -> ID`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IDX_SEQUENCE_QUEUE** on `Name, Revision`
- **IF_SEQUENCE_QUEUE_GROUP_** on `Group_, GroupType, GroupClassID`
- **IF_SEQUENCE_QUEUE_PARTNER** on `PartnerID`
- **IF_SEQUENCE_QUEUE_RESOURCE** on `ResourceID`
- **IF_SEQUENCE_QUEUE_REVISION_STATUS** on `RevisionStatusID`
- **IF_SEQUENCE_QUEUE_SEQUENCE_QUEUE** on `ViewSourceSeqQueueID`
- **IF_SEQUENCE_QUEUE_SEQUENCE_QUEUE_CLASS** on `SequenceQueueClassID`
- **IF_SEQUENCE_QUEUE_SEQUENCE_QUEUE_DEFINITION** on `SequenceQueueDefinitionID`
- **IF_SEQUENCE_QUEUE_SEQUENCE_QUEUE_ITEM** on `NextSequenceQueueItemID`
- **IF_SEQUENCE_QUEUE_SEQUENCE_QUEUE_ITEM2** on `LastSequenceQueueItemID`
- **IF_SEQUENCE_QUEUE_SEQUENCE_QUEUE2** on `ResequenceSourceSeqQueueID`
- **IF_SEQUENCE_QUEUE_SEQUENCE_QUEUE3** on `ParentSequenceQueueID`
- **IF_SEQUENCE_QUEUE_UNIT** on `UnitID`
- **IF_SEQUENCE_QUEUE_WIP_LINE** on `ProductionLineNo`
