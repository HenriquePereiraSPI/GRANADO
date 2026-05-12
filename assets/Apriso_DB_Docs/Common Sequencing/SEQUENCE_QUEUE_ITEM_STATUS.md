# SEQUENCE_QUEUE_ITEM_STATUS

**Database:** Operational

**Description:** Specifies all valid status that a Sequence Queue Item may have.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| DisplayColor | NVARCHAR(20) | True |  | False |  | The color this item should be displayed in the Sequencing Board. |
| SequenceQueueItemStatus | SMALLINT(5,0) | False |  | True |  | This is an optional status for this item. Process authors may define as many status as required by the business logic. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_SEQUENCE_QUEUE_ITEM_STATUS** on `SequenceQueueItemStatus`

## Foreign Keys (this table -> other)

- **** —  (``)

## Referenced By (other tables -> this)

- **FK_SEQUENCE_QUEUE_ITEM_SEQUENCE_QUEUE_ITEM_STATUS** — SEQUENCE_QUEUE_ITEM -> SEQUENCE_QUEUE_ITEM_STATUS (`SequenceQueueItemStatus -> SequenceQueueItemStatus`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **** on ``
