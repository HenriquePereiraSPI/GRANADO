# QUALITY_GATE_SEQUENCE

**Database:** Operational

**Description:** This table is used for storing information about Quality Gate Sequences.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| ID | INT(10,0) | False |  | True |  | Primary Key. |
| Name | NVARCHAR(40) | False |  | False |  | Quality Gate Sequence name. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |
| UnitID | INT(10,0) | True |  | False | UNIT | Unique identifier of the Unit. |

## Primary Key

- **PK_QUALITY_GATE_SEQUENCE** on `ID`

## Foreign Keys (this table -> other)

- **FK_QUALITY_GATE_SEQUENCE_UNIT** — QUALITY_GATE_SEQUENCE -> UNIT (`UnitID -> ID`)

## Referenced By (other tables -> this)

- **FK_QUALITY_GATE_SEQ_ITEM_QUALITY_GATE_SEQUENCE** — QUALITY_GATE_SEQ_ITEM -> QUALITY_GATE_SEQUENCE (`QualityGateSeqID -> ID`)

## Unique Indexes

- **UK_QUALITY_GATE_SEQUENCE_NAME** on `Name`

## Non-Unique Indexes

- **IF_QUALITY_GATE_SEQUENCE_UNIT** on `UnitID`
