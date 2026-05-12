# SEQUENCE_QUEUE_TYPE

**Database:** Operational

**Description:** Sequence Queue Type.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| SequenceQueueType | SMALLINT(5,0) | False |  | True |  | Sequence Queue Type. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_SEQUENCE_QUEUE_TYPE** on `SequenceQueueType`

## Foreign Keys (this table -> other)

- **** —  (``)

## Referenced By (other tables -> this)

- **FK_SEQUENCE_QUEUE_SEQUENCE_QUEUE_TYPE** — SEQUENCE_QUEUE -> SEQUENCE_QUEUE_TYPE (`SequenceQueueType -> SequenceQueueType`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **** on ``
