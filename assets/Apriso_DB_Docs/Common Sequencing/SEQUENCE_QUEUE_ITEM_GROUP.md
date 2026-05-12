# SEQUENCE_QUEUE_ITEM_GROUP

**Database:** Operational

**Description:** Groups items in a Sequence Queue. The number of items in the group default to the GroupSize property of the Definition, though each group may be later resized for operational reasons. The items in individual groups may be reversed (LIFO) for dequeueing.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| Container | NVARCHAR(40) | True |  | False | CONTAINER | Rack associated with group. |
| DequeuedCount | INT(10,0) | False |  | False |  | The number of items already dequeued from this group. The total number of items in a group is always GroupSize minus DequeuedCount, but some items may be Empty. |
| GroupSequence | INT(10,0) | False |  | False |  | The Sequence number for the group in this queue. All groups in the same queue are sequenced. |
| GroupSize | INT(10,0) | False |  | False |  | The number of items in the group. Defaults to the GroupSize specified in the Sequence Queue Definition, but may be modified by invoking business components. The business components will add exactly the specified number of items to this group to reach this size. Once the group size is reached, a new group is created. |
| ID | INT(10,0) | False |  | True |  | Auto increment PK. |
| SequenceQueueID | INT(10,0) | False |  | False | SEQUENCE_QUEUE | The Sequence Queue that this Group of items belongs. Every item in the group must be in the same queue. |

## Primary Key

- **PK_SEQUENCE_QUEUE_ITEM_GROUP** on `ID`

## Foreign Keys (this table -> other)

- **FK_SEQUENCE_QUEUE_ITEM_GROUP** — SEQUENCE_QUEUE_ITEM_GROUP -> CONTAINER (`Container -> Container`)
- **FK_SEQUENCE_QUEUE_ITEM_GROUP_SEQUENCE_QUEUE** — SEQUENCE_QUEUE_ITEM_GROUP -> SEQUENCE_QUEUE (`SequenceQueueID -> ID`)

## Referenced By (other tables -> this)

- **FK_SEQUENCE_QUEUE_ITEM_SEQUENCE_QUEUE_ITEM_GROUP** — SEQUENCE_QUEUE_ITEM -> SEQUENCE_QUEUE_ITEM_GROUP (`SequenceQueueItemGroupID -> ID`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_SEQUENCE_QUEUE_ITEM_GROUP_SEQUENCE_QUEUE** on `SequenceQueueID`
