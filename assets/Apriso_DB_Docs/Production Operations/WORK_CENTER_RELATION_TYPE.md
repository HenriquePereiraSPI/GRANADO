# WORK_CENTER_RELATION_TYPE

**Database:** Operational

**Description:** Defines the type of relation between two Work Center.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| Name | NVARCHAR(40) | False |  | False |  | Relation type: 1-Parent, 2-Alternative, 3-Other. |
| RelationType | INT(10,0) | False |  | True |  | Unique identifier of a record (key) in a table. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_WORK_CENTER_RELATION_TYPE** on `RelationType`

## Foreign Keys (this table -> other)

- **** —  (``)

## Referenced By (other tables -> this)

- **FK_WORK_CENTER_RELATION_WORK_CENTER_RELATION_TYPE** — WORK_CENTER_RELATION -> WORK_CENTER_RELATION_TYPE (`WorkCenterRelationType -> RelationType`)

## Unique Indexes

- **UK_WORK_CENTER_RELATION_TYPE_Name** on `Name`

## Non-Unique Indexes

- **** on ``
