# WORK_CENTER_RELATION_CLASS

**Database:** Operational

**Description:** Defines the class of relation between two Work Center.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| FUID | NVARCHAR(36) | False |  | False |  | Unique identifier of the entity across multiple Apriso instances. |
| ID | INT(10,0) | False |  | True |  | Unique identifier of a record (key) in a table. |
| RelationClass | NVARCHAR(40) | False |  | False |  | The relation class name. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_WORK_CENTER_RELATION_CLASS** on `ID`

## Foreign Keys (this table -> other)

- **** —  (``)

## Referenced By (other tables -> this)

- **FK_WORK_CENTER_RELATION_WORK_CENTER_RELATION_CLASS** — WORK_CENTER_RELATION -> WORK_CENTER_RELATION_CLASS (`WorkCenterRelationClassID -> ID`)

## Unique Indexes

- **UK_WORK_CENTER_RELATION_CLASS_RelationClass** on `RelationClass`

## Non-Unique Indexes

- **** on ``
