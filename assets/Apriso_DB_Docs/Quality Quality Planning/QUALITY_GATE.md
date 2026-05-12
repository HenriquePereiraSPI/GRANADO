# QUALITY_GATE

**Database:** Operational

**Description:** This table is used for storing information about Quality Gates.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| ID | INT(10,0) | False |  | True |  | Primary Key. |
| Name | NVARCHAR(40) | False |  | False |  | Quality Gate name. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |
| UnitID | INT(10,0) | True |  | False | UNIT | Unique identifier of the Unit. |
| WorkCenter | NVARCHAR(40) | True |  | False | WORK_CENTER | Link to the WorkCenter. |

## Primary Key

- **PK_QUALITY_GATE** on `ID`

## Foreign Keys (this table -> other)

- **FK_QUALITY_GATE_UNIT** — QUALITY_GATE -> UNIT (`UnitID -> ID`)
- **FK_QUALITY_GATE_WORK_CENTER** — QUALITY_GATE -> WORK_CENTER (`WorkCenter -> WorkCenter`)

## Referenced By (other tables -> this)

- **FK_DISPOSITION_QUALITY_GATE** — DISPOSITION -> QUALITY_GATE (`QualityGateID -> ID`)
- **FK_INSPECTION_PLAN_QUALITY_GATE** — INSPECTION_PLAN -> QUALITY_GATE (`QualityGateID -> ID`)
- **FK_QUALITY_GATE_SEQ_ITEM_QUALITY_GATE** — QUALITY_GATE_SEQ_ITEM -> QUALITY_GATE (`QualityGateID -> ID`)

## Unique Indexes

- **UK_QUALITY_GATE_NAME** on `Name`

## Non-Unique Indexes

- **IF_QUALITY_GATE_UNIT** on `UnitID`
