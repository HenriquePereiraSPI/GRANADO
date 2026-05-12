# WORK_CENTER_RELATION

**Database:** Operational

**Description:** Stores the relation between two Work Center.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| DiscontinueDate | DATETIME | True |  | False |  | Discontinue date of this relation. |
| EffectiveDate | DATETIME | False |  | False |  | Effective date of this relation. |
| Enable | BIT | False |  | False |  | Indicate if this relation is enabled. It serves the purpose for temporary disabled and is do not keep history records. |
| FUID | NVARCHAR(36) | False |  | False |  | Unique identifier of the entity across multiple Apriso instances. |
| ID | INT(10,0) | False |  | True |  | Unique identifier of a record (key) in a table. |
| RelatedWorkCenter | NVARCHAR(40) | False |  | False | WORK_CENTER | The related Work Center. |
| WorkCenter | NVARCHAR(40) | False |  | False | WORK_CENTER | The primary Work Center. |
| WorkCenterRelationClassID | INT(10,0) | True |  | False | WORK_CENTER_RELATION_CLASS | The Work Center relation class ID. |
| WorkCenterRelationType | INT(10,0) | False |  | False | WORK_CENTER_RELATION_TYPE | The Work Center relation type. |

## Primary Key

- **PK_WORK_CENTER_RELATION** on `ID`

## Foreign Keys (this table -> other)

- **FK_WORK_CENTER_RELATION_WORK_CENTER_RELATION_CLASS** — WORK_CENTER_RELATION -> WORK_CENTER_RELATION_CLASS (`WorkCenterRelationClassID -> ID`)
- **FK_WORK_CENTER_RELATION_WORK_CENTER_RELATION_TYPE** — WORK_CENTER_RELATION -> WORK_CENTER_RELATION_TYPE (`WorkCenterRelationType -> RelationType`)
- **FK_WORK_CENTER_RELATION_WORK_CENTER1** — WORK_CENTER_RELATION -> WORK_CENTER (`WorkCenter -> WorkCenter`)
- **FK_WORK_CENTER_RELATION_WORK_CENTER2** — WORK_CENTER_RELATION -> WORK_CENTER (`RelatedWorkCenter -> WorkCenter`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_WORK_CENTER_RELATION_RELATEDWORKCENTER** on `RelatedWorkCenter`
- **IF_WORK_CENTER_RELATION_WORK_CENTER_RELATION_CLASS** on `WorkCenterRelationClassID`
- **IF_WORK_CENTER_RELATION_WORKCENTER** on `WorkCenter`
