# SEQUENCE_WIP_ORDER_TYPE

**Database:** Operational

**Description:** Table keeps the details of WIP Order types and other information to generate wip order numbers (from sequence provider) for the new jobs (sequence queue items) created from a production plan.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| ChildWipOrderType | SMALLINT(5,0) | False |  | False | WIP_ORDER_TYPE | WIP Order type for the jobs to be created from the production plan. |
| ParentWipOrderType | SMALLINT(5,0) | False |  | True | WIP_ORDER_TYPE | Parent WIP Order Type. This is the WIP Order shown in the production plan. |
| SequenceID | INT(10,0) | False |  | False | SEQUENCE_ | ID of the Sequence_ entry to generate the new child WIP Order numbers. |

## Primary Key

- **PK_SEQUENCE_WIP_ORDER_TYPE** on `ParentWipOrderType`

## Foreign Keys (this table -> other)

- **FK_SEQUENCE_WIP_ORDER_TYPE_SEQUENCE_** — SEQUENCE_WIP_ORDER_TYPE -> SEQUENCE_ (`SequenceID -> ID`)
- **FK_SEQUENCE_WIP_ORDER_TYPE_WIP_ORDER_TYPE** — SEQUENCE_WIP_ORDER_TYPE -> WIP_ORDER_TYPE (`ParentWipOrderType -> WipOrderType`)
- **FK_SEQUENCE_WIP_ORDER_TYPE_WIP_ORDER_TYPE1** — SEQUENCE_WIP_ORDER_TYPE -> WIP_ORDER_TYPE (`ChildWipOrderType -> WipOrderType`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_SEQUENCE_WIP_ORDER_TYPE_SEQUENCE_** on `SequenceID`
