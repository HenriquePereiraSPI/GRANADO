# QUALITY_GATE_SEQ_ITEM

**Database:** Operational

**Description:** This table is used for defining Quality Gates in Quality Gate Sequence.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| ID | INT(10,0) | False |  | True |  | Primary Key. |
| QualityGateID | INT(10,0) | False |  | False | QUALITY_GATE | Link to QUALITY_GATE table. |
| QualityGateSeqID | INT(10,0) | False |  | False | QUALITY_GATE_SEQUENCE | Link to QUALITY_GATE_SEQUENCE table. |
| SequenceNo | INT(10,0) | True |  | False |  | Sequence number of the Quality Gate. |

## Primary Key

- **PK_QUALITY_GATE_SEQ_ITEM** on `ID`

## Foreign Keys (this table -> other)

- **FK_QUALITY_GATE_SEQ_ITEM_QUALITY_GATE** — QUALITY_GATE_SEQ_ITEM -> QUALITY_GATE (`QualityGateID -> ID`)
- **FK_QUALITY_GATE_SEQ_ITEM_QUALITY_GATE_SEQUENCE** — QUALITY_GATE_SEQ_ITEM -> QUALITY_GATE_SEQUENCE (`QualityGateSeqID -> ID`)

## Referenced By (other tables -> this)

- **FK_DISPOSITION_QUALITY_GATE_SEQ_ITEM** — DISPOSITION -> QUALITY_GATE_SEQ_ITEM (`QualityGateSeqItemID -> ID`)
- **FK_INSPECTION_PLAN_QUALITY_GATE_SEQ_ITEM** — INSPECTION_PLAN -> QUALITY_GATE_SEQ_ITEM (`QualityGateSeqItemID -> ID`)

## Unique Indexes

- **UK_QUALITY_GATE_SEQ_ITEM** on `SequenceNo, QualityGateID, QualityGateSeqID`

## Non-Unique Indexes

- **IF_QUALITY_GATE_SEQ_ITEM_QUALITY_GATE** on `QualityGateID`
- **IF_QUALITY_GATE_SEQ_ITEM_QUALITY_GATE_SEQUENCE** on `QualityGateSeqID`
