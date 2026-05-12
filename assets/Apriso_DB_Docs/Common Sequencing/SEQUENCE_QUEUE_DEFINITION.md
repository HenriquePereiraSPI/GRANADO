# SEQUENCE_QUEUE_DEFINITION

**Database:** Operational

**Description:** Describes properties of a set of sequence queues. Queue definitions are high level descriptions of the properties of sequence queues. For example, a queue definition will specify that items queued in work centers should be grouped 5 by 5 and reversed (LIFO). Each work center will then have its own Sequence Queue with this definition.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| AutoDequeue | BIT | True |  | False |  | When set, the system will attempt to automatically dequeue when the MaximumSize is violated. |
| AutoEnqueue | BIT | True |  | False |  | When set, the system will attempt to automatically enqueue an item when the MinimumSize is violated. |
| DequeueDFCFUID | NVARCHAR(36) | True |  | False |  | Reference to the FUID column in the DFC table. |
| DequeueDFCRevisionFUID | NVARCHAR(36) | True |  | False |  | Reference to the FUID column in the DFC_REVISION table. |
| EnqueueDFCFUID | NVARCHAR(36) | True |  | False |  | Reference to the FUID column in the DFC table. |
| EnqueueDFCRevisionFUID | NVARCHAR(36) | True |  | False |  | Reference to the FUID column in the DFC_REVISION table. |
| FilterOrdersByFacility | BIT | True |  | False |  | When set, the system will filter the planning orders by the specified facility. |
| FilterOrdersByProductionDay | BIT | True |  | False |  | When set, the system will filter the planning orders by the specified production day. |
| FilterOrdersByProductionLine | BIT | True |  | False |  | When set, the system will filter the planning orders by the specified production line. |
| FilterOrdersByResource | BIT | True |  | False |  | When set, the system will filter the planning orders by the specified resource. |
| GroupSize | INT(10,0) | True |  | False |  | Specifies the standard group size to group items in the queue. When a positive value is specified, items will be automatically grouped. When IsReversed is true, the group size is the number of items that will be reversed at a time. Applies only to new groups added to the sequence. When a zero or negative value is specified (or NULL), the queue is not grouped and no SEQUENCE_QUEUE_ITEM_GROUP records will be created for the queue. |
| ID | INT(10,0) | False |  | True |  | Auto increment PK. |
| IsReversed | BIT | True |  | False |  | When true, the sequence in which items are removed from the queue is reversed from the sequence in which items are added. When a GroupSize is specified, the reversal happens only within groups, so that items in the same group are dequeued in reverse order, but the groups themselves remain in the original order. |
| Name | NVARCHAR(225) | False |  | False |  | This is the user-specified name for the definition. The name can be used inside operations to find the appropriate sequence definition independent of the database environment. |
| Revision | NVARCHAR(100) | False |  | False |  | This is the user-specified revision number for the queue definition. |
| RevisionStatusID | SMALLINT(5,0) | True |  | False |  | The current status of this configuration. May be Active, Design, or Canceled. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_SEQUENCE_QUEUE_DEFINITION** on `ID`

## Foreign Keys (this table -> other)

- **** —  (``)

## Referenced By (other tables -> this)

- **FK_SEQUENCE_QUEUE_DEF_ROLE_SEQUENCE_QUEUE_DEFINITION** — SEQUENCE_QUEUE_DEF_ROLE -> SEQUENCE_QUEUE_DEFINITION (`SequenceQueueDefinitionID -> ID`)
- **FK_SEQUENCE_QUEUE_SEQUENCE_QUEUE_DEFINITION** — SEQUENCE_QUEUE -> SEQUENCE_QUEUE_DEFINITION (`SequenceQueueDefinitionID -> ID`)
- **FK_SEQUENCE_SHIP_CONFIG_SEQUENCE_QUEUE_DEFINITION** — SEQUENCE_SHIP_CONFIG -> SEQUENCE_QUEUE_DEFINITION (`PickQueueDefinitionID -> ID`)
- **FK_SEQUENCE_SHIP_CONFIG_SEQUENCE_QUEUE_DEFINITION2** — SEQUENCE_SHIP_CONFIG -> SEQUENCE_QUEUE_DEFINITION (`InspectQueueDefinitionID -> ID`)
- **FK_SEQUENCE_SHIP_CONFIG_SEQUENCE_QUEUE_DEFINITION3** — SEQUENCE_SHIP_CONFIG -> SEQUENCE_QUEUE_DEFINITION (`LoadQueueDefinitionID -> ID`)

## Business Keys (this table -> other)

- SEQUENCE_QUEUE_DEFINITION -> DFC (`EnqueueDFCFUID, DequeueDFCFUID -> FUID`)
- SEQUENCE_QUEUE_DEFINITION -> DFC_REVISION (`EnqueueDFCRevisionFUID, DequeueDFCRevisionFUID -> FUID`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IDX_** on `Name, Revision`
- **IF_SEQUENCE_QUEUE_DEFINITION_DEQUEUE_DFC_FUID** on `DequeueDFCFUID`
- **IF_SEQUENCE_QUEUE_DEFINITION_DEQUEUE_DFC_REVISION_FUID** on `DequeueDFCRevisionFUID`
- **IF_SEQUENCE_QUEUE_DEFINITION_ENQUEUE_DFC_FUID** on `EnqueueDFCFUID`
- **IF_SEQUENCE_QUEUE_DEFINITION_ENQUEUE_DFC_REVISION_FUID** on `EnqueueDFCRevisionFUID`
- **IF_SEQUENCE_QUEUE_DEFINITION_REVISION_STATUS** on `RevisionStatusID`
