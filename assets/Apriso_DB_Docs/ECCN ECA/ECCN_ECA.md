# ECCN_ECA

**Database:** Operational

**Description:** The linking between ECCN with ECA

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| EcaID | INT(10,0) | False |  | False | ECA | Link to the ECA table. |
| EccnID | INT(10,0) | False |  | False | ECCN | Link to the ECCN table. |
| ID | INT(10,0) | False |  | True |  | Unique identifier. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |
| UnitID | INT(10,0) | True |  | False | UNIT | Unique identifier of the Unit. |

## Primary Key

- **PK_ECCN_ECA** on `ID`

## Foreign Keys (this table -> other)

- **FK_ECCN_ECA_ECA** — ECCN_ECA -> ECA (`EcaID -> ID`)
- **FK_ECCN_ECA_ECCN** — ECCN_ECA -> ECCN (`EccnID -> ID`)
- **FK_ECCN_ECA_UNIT** — ECCN_ECA -> UNIT (`UnitID -> ID`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_ECCN_ECA_ECA** on `EcaID`
- **IF_ECCN_ECA_ECCN** on `EccnID`
- **IF_ECCN_ECA_UNIT** on `UnitID`
