# SEQUENCE_QUEUE_DEF_ROLE

**Database:** Operational

**Description:** Sequence roles authorize people to view data and perform actions in the sequencing cockpit based on their roles

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| AllowAddOrder | BIT | True |  | False |  | If true, allows users to add a new schedule order. |
| AllowApplyPattern | BIT | True |  | False |  | If true, allows users to apply patterns to the queue. |
| AllowConfirmDay | BIT | True |  | False |  | If true, allows users to confirm the sequence queue items for the production day. |
| AllowConfirmTopOne | BIT | True |  | False |  | If true, allows users to confirm the top one sequence queue item for the production day. |
| AllowCopyOrder | BIT | True |  | False |  | If true, allows users to copy from one schedule order to another. |
| AllowCreateJob | BIT | True |  | False |  | If true, allows users to create a job from source order list into the current queue. |
| AllowCreatePattern | BIT | True |  | False |  | If true, allows users to create new patterns. |
| AllowDeleteOrder | BIT | True |  | False |  | If true, allows users to delete orders. |
| AllowHoldOrder | BIT | True |  | False |  | If true, allows users to put orders on hold for the sequencing. |
| AllowReleaseOrder | BIT | True |  | False |  | If true, allows users to release orders for the sequencing. |
| AllowViewPattern | BIT | True |  | False |  | If true, allows users to view patterns; however, does not allow applying patterns, unless the parameter �AllowApplyPattern� is true. |
| RoleID | INT(10,0) | False |  | True | ROLE | References to Role table |
| SequenceQueueDefinitionID | INT(10,0) | False |  | True | SEQUENCE_QUEUE_DEFINITION | References to Sequence_Queue Definition Table |
| ShowApplyPattern | BIT | True |  | False |  | If true, allows users to see Apply Pattern button. |

## Primary Key

- **PK_SEQUENCE_QUEUE_DEF_ROLE** on `RoleID, SequenceQueueDefinitionID`

## Foreign Keys (this table -> other)

- **FK_SEQUENCE_QUEUE_DEF_ROLE_ROLE** — SEQUENCE_QUEUE_DEF_ROLE -> ROLE (`RoleID -> ID`)
- **FK_SEQUENCE_QUEUE_DEF_ROLE_SEQUENCE_QUEUE_DEFINITION** — SEQUENCE_QUEUE_DEF_ROLE -> SEQUENCE_QUEUE_DEFINITION (`SequenceQueueDefinitionID -> ID`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_SEQUENCE_QUEUE_DEF_ROLE_SEQUENCE_QUEUE_DEFINITION** on `SequenceQueueDefinitionID`
