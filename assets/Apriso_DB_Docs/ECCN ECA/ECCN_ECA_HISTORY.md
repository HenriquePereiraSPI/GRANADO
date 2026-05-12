# ECCN_ECA_HISTORY

**Database:** Operational

**Description:** The table stores history for ECCN_ECA table.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| EcaID | INT(10,0) | False |  | False | ECA | Link to the ECA table. |
| EccnID | INT(10,0) | False |  | False | ECCN | Link to the ECCN table. |
| ID | INT(10,0) | False |  | True |  | Unique identifier. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |
| UnitID | INT(10,0) | True |  | False | UNIT | Unique identifier of the Unit. |
| ValidFrom | DATETIME | True |  | False |  | Valid from date. |
| ValidTo | DATETIME | True |  | False |  | Valid to date. |

## Primary Key

- **PK_ECCN_ECA_HISTORY** on `ID`

## Foreign Keys (this table -> other)

- **FK_ECCN_ECA_HISTORY_ECA** — ECCN_ECA_HISTORY -> ECA (`EcaID -> ID`)
- **FK_ECCN_ECA_HISTORY_ECCN** — ECCN_ECA_HISTORY -> ECCN (`EccnID -> ID`)
- **FK_ECCN_ECA_HISTORY_UNIT** — ECCN_ECA_HISTORY -> UNIT (`UnitID -> ID`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_ECCN_ECA_HISTORY_ECA** on `EcaID`
- **IF_ECCN_ECA_HISTORY_ECCN** on `EccnID`
- **IF_ECCN_ECA_HISTORY_UNIT** on `UnitID`
