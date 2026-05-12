# ECA

**Database:** Operational

**Description:** Export Control Access.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| Code | NVARCHAR(255) | False |  | False |  | Code of the ECA. |
| ID | INT(10,0) | False |  | True |  | Unique identifier. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |
| UnitID | INT(10,0) | True |  | False | UNIT | Unique identifier of the Unit. |
| WarningMessage | NVARCHAR(1000) | True |  | False |  | Information set for the current ECA configuration. |

## Primary Key

- **PK_ECA** on `ID`

## Foreign Keys (this table -> other)

- **FK_ECA_UNIT** — ECA -> UNIT (`UnitID -> ID`)

## Referenced By (other tables -> this)

- **FK_ECA_EMPLOYEE_ECA** — ECA_EMPLOYEE -> ECA (`EcaID -> ID`)
- **FK_ECA_EMPLOYEE_HISTORY_ECA** — ECA_EMPLOYEE_HISTORY -> ECA (`EcaID -> ID`)
- **FK_ECA_OBJECT_ECA** — ECA_OBJECT -> ECA (`EcaID -> ID`)
- **FK_ECA_OBJECT_HISTORY_ECA** — ECA_OBJECT_HISTORY -> ECA (`EcaID -> ID`)
- **FK_ECA_RULE_ECA** — ECA_RULE -> ECA (`EcaID -> ID`)
- **FK_ECA_RULE_HISTORY_ECA** — ECA_RULE_HISTORY -> ECA (`EcaID -> ID`)
- **FK_ECCN_ECA_ECA** — ECCN_ECA -> ECA (`EcaID -> ID`)
- **FK_ECCN_ECA_HISTORY_ECA** — ECCN_ECA_HISTORY -> ECA (`EcaID -> ID`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_ECA_UNIT** on `UnitID`
