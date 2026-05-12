# SEQUENCE_QUEUE_CLASS

**Database:** Operational

**Description:** Stores the user definable classes for a sequence queue

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| FUID | NVARCHAR(36) | False |  | False |  | Unique identifier of the entity across multiple DELMIA Apriso instances. |
| ID | INT(10,0) | False |  | True |  | Auto Increment PK |
| Name | NVARCHAR(50) | True |  | False |  | The name of the sequence queue class |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_SEQUENCE_QUEUE_CLASS** on `ID`

## Foreign Keys (this table -> other)

- **** —  (``)

## Referenced By (other tables -> this)

- **FK_SEQUENCE_QUEUE_SEQUENCE_QUEUE_CLASS** — SEQUENCE_QUEUE -> SEQUENCE_QUEUE_CLASS (`SequenceQueueClassID -> ID`)

## Unique Indexes

- **UK_SEQUENCE_QUEUE_CLASS** on `FUID`

## Non-Unique Indexes

- **** on ``
