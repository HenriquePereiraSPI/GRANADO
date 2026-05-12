# COUNTER_GROUP

**Database:** Operational

**Description:** This table contains links between Groups and Counters.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| CounterID | INT(10,0) | False |  | True | COUNTER | ID of the Counter. |
| Group_ | NVARCHAR(40) | False |  | True | GROUP_ | Assignment of the entity to a group. |
| GroupClassID | INT(10,0) | False |  | True | GROUP_ | Class of the group. |
| GroupType | SMALLINT(5,0) | False |  | True | GROUP_ | Type of the group. |

## Primary Key

- **PK_COUNTER_GROUP** on `CounterID, Group_, GroupType, GroupClassID`

## Foreign Keys (this table -> other)

- **FK_COUNTER_GROUP_COUNTER** — COUNTER_GROUP -> COUNTER (`CounterID -> ID`)
- **FK_COUNTER_GROUP_GROUP** — COUNTER_GROUP -> GROUP_ (`Group_, GroupType, GroupClassID -> Group_, GroupType, GroupClassID`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_COUNTER_GROUP_GROUP** on `Group_, GroupType, GroupClassID`
